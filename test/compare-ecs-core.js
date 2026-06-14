"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/75111__mod.js")
const restored = require("../src-restored/core/ECSCore.js")

assert.deepEqual(
  Object.keys(restored).sort(),
  Object.keys(original).sort(),
  "ECSCore export keys differ",
)

compare("Signal", exerciseSignal)
compare("component helpers", exerciseComponentHelpers)
compare("LinkedComponent", exerciseLinkedComponent)
compare("Entity and EntitySnapshot", exerciseEntity)
compare("System", exerciseSystem)
compare("Query and QueryBuilder", exerciseQuery)
compare("ReactionSystem", exerciseReactionSystem)
compare("IterativeSystem", exerciseIterativeSystem)
compare("Engine", exerciseEngine)

console.log(
  JSON.stringify(
    {
      module: "ECSCore",
      status: "ok",
    },
    null,
    2,
  ),
)

function compare(name, exercise) {
  assert.deepEqual(exercise(restored), exercise(original), `${name} behavior differs`)
}

function exerciseSignal({ Signal }) {
  const signal = new Signal()
  const records = []
  const first = (...args) => records.push(["first", ...args])
  const second = (...args) => records.push(["second", ...args])
  const third = (...args) => records.push(["third", ...args])

  const before = snapshotSignal(signal)
  signal.connect(first, 3)
  signal.connect(second, 1)
  signal.connect(third, 2)
  signal.connect(first, 0)
  signal.emit("a", "b")
  const afterEmit = snapshotSignal(signal)
  signal.disconnect(third)
  signal.emit("c")
  const afterDisconnect = snapshotSignal(signal)
  signal.disconnectAll()
  const afterDisconnectAll = snapshotSignal(signal)

  return { before, afterEmit, afterDisconnect, afterDisconnectAll, records }
}

function snapshotSignal(signal) {
  return {
    hasHandlers: signal.hasHandlers,
    handlersAmount: signal.handlersAmount,
    priorities: signal.handlers.map((handler) => handler.priority),
  }
}

function exerciseComponentHelpers({ getComponentId, getComponentClass, isTag }) {
  class Parent {}
  class Child extends Parent {}
  class Other {}

  const firstMissing = getComponentId(Parent)
  const firstCreated = getComponentId(Parent, true)
  const secondCreated = getComponentId(Child, true)
  const firstAgain = getComponentId(Parent)
  const instance = new Child()

  let errorMessage
  try {
    getComponentClass(instance, Other)
  } catch (error) {
    errorMessage = error.message
  }

  return {
    firstMissing,
    firstCreated,
    secondCreated,
    firstAgain,
    concreteClass: getComponentClass(instance).name,
    resolvedClass: getComponentClass(instance, Parent).name,
    errorMessage,
    tags: [isTag("tag"), isTag(7), isTag(Symbol("tag")), isTag(Parent)],
  }
}

function exerciseLinkedComponent({ LinkedComponent, isLinkedComponent }) {
  const component = new LinkedComponent("item-id")
  return {
    id: component.id,
    hasNext: Object.prototype.hasOwnProperty.call(component, "next"),
    next: component.next,
    checks: [
      isLinkedComponent(component),
      isLinkedComponent({ next: undefined }),
      isLinkedComponent({}),
      isLinkedComponent(undefined),
    ],
  }
}

function exerciseEntity({ Entity, EntitySnapshot, LinkedComponent }) {
  class PlainComponent {
    constructor(value) {
      this.value = value
    }
  }
  class ChildComponent extends PlainComponent {}
  class ChainComponent extends LinkedComponent {
    constructor(id, value) {
      super(id)
      this.value = value
    }
  }

  const entity = new Entity()
  const records = []
  const plain = new PlainComponent("plain-a")
  const replacement = new PlainComponent("plain-b")
  const child = new ChildComponent("child")
  const firstLinked = new ChainComponent("a", 1)
  const secondLinked = new ChainComponent("b", 2)

  entity.onComponentAdded.connect((owner, component) => {
    records.push(["add", owner === entity, describeComponent(component)])
  })
  entity.onComponentRemoved.connect((owner, component) => {
    records.push(["remove", owner === entity, describeComponent(component)])
  })
  entity.onInvalidationRequested.connect((owner) => {
    records.push(["invalidate", owner === entity])
  })

  entity.add(plain)
  entity.add("active")
  entity.add(7)
  entity.add(replacement)
  entity.add(child, PlainComponent)
  entity.append(firstLinked)
  entity.append(secondLinked)

  const afterAdd = snapshotEntity(entity, {
    PlainComponent,
    ChainComponent,
    firstLinked,
    secondLinked,
  })
  const snapshot = new EntitySnapshot()
  entity.takeSnapshot(snapshot)
  const firstSnapshot = snapshotEntity(snapshot.previous, {
    PlainComponent,
    ChainComponent,
    firstLinked,
    secondLinked,
  })

  entity.remove("active")
  entity.takeSnapshot(snapshot, "active")
  const removedTagSnapshot = snapshot.previous.has("active")

  const picked = entity.pick(ChainComponent, "a")
  entity.takeSnapshot(snapshot, picked)
  const afterPick = snapshotEntity(entity, {
    PlainComponent,
    ChainComponent,
    firstLinked,
    secondLinked,
  })
  const pickedSnapshotHasChain = snapshot.previous.has(ChainComponent)

  const withdrawn = entity.withdraw(ChainComponent)
  const removedPlain = entity.remove(PlainComponent)
  entity.invalidate()
  const copy = new Entity().copyFrom(entity)
  entity.clear()

  return {
    afterAdd,
    firstSnapshot,
    snapshotCurrentIsEntity: snapshot.current === entity,
    removedTagSnapshot,
    picked: describeComponent(picked),
    pickedSnapshotHasChain,
    afterPick,
    withdrawn: describeComponent(withdrawn),
    removedPlain: describeComponent(removedPlain),
    copy: snapshotEntity(copy, {
      PlainComponent,
      ChainComponent,
      firstLinked,
      secondLinked,
    }),
    afterClear: snapshotEntity(entity, {
      PlainComponent,
      ChainComponent,
      firstLinked,
      secondLinked,
    }),
    records,
  }
}

function snapshotEntity(entity, refs) {
  return {
    components: entity.getComponents().map(describeComponent),
    tags: entity.getTags().sort(),
    hasAny: entity.hasAny("missing", 7),
    hasAll: entity.hasAll(7),
    plain: describeComponent(entity.get(refs.PlainComponent)),
    linkedFirst: describeComponent(entity.get(refs.ChainComponent)),
    linkedB: describeComponent(entity.get(refs.ChainComponent, "b")),
    containsFirstLinked: entity.contains(refs.firstLinked),
    containsSecondLinked: entity.contains(refs.secondLinked),
    linkedLength: entity.lengthOf(refs.ChainComponent),
    linkedAll: [...entity.getAll(refs.ChainComponent)].map(describeComponent),
    findLinkedB: describeComponent(entity.find(refs.ChainComponent, (component) => component.id === "b")),
  }
}

function describeComponent(component) {
  if (component === undefined) return "__undefined__"
  if (typeof component === "string" || typeof component === "number") return component
  return {
    className: component.constructor.name,
    id: component.id,
    value: component.value,
    next: component.next && component.next.id,
  }
}

function exerciseSystem({ System }) {
  const system = new System()
  const records = []
  const before = {
    priority: system.priority,
    engineError: captureError(() => system.engine),
    sharedConfigError: captureError(() => system.sharedConfig),
    dispatchError: captureError(() => system.dispatch("before")),
  }

  system.setPriority(9)
  system.update(1)
  system.onAddedToEngine()
  system.onRemovedFromEngine()
  system.setEngine({
    sharedConfig: { ready: true },
    dispatch(event) {
      records.push(event)
    },
  })
  system.dispatch("after")

  return {
    before,
    after: {
      priority: system.priority,
      sharedConfig: system.sharedConfig,
      records,
    },
  }
}

function exerciseQuery(api) {
  const { Entity, Query, QueryBuilder, isQueryPredicate, isQueryBuilder } = api

  class Health {
    constructor(value) {
      this.value = value
    }
  }

  const first = nameEntity(new Entity().add(new Health(10)).add("active"), "first")
  const second = nameEntity(new Entity().add(new Health(0)), "second")
  const third = nameEntity(new Entity().add("active"), "third")

  const query = new Query((entity) => entity.has("active"))
  query.matchEntities([first, second, third])
  const beforeClear = {
    first: query.first && query.first.label,
    last: query.last && query.last.label,
    length: query.length,
    isEmpty: query.isEmpty,
    hasFirst: query.has(first),
    countActive: query.countBy((entity) => entity.has("active")),
    findSecond: query.find((entity) => entity === second)?.label,
    filtered: query.filter((entity) => entity.label !== "second").map((entity) => entity.label),
  }
  query.validateEntity(second.add("active"))
  const afterValidate = query.entities.map((entity) => entity.label)
  query.clear()

  const builder = new QueryBuilder().contains(Health, "active")
  const built = builder.build()
  built.matchEntities([first, second, third])

  return {
    beforeClear,
    afterValidate,
    afterClear: { length: query.length, isEmpty: query.isEmpty },
    builderComponents: builder.getComponents().size,
    builderTags: [...builder.getTags()],
    builtMatches: built.entities.map((entity) => entity.label),
    predicateChecks: [isQueryPredicate(() => true), isQueryPredicate({})],
    builderChecks: [isQueryBuilder(builder), isQueryBuilder({})],
  }
}

function nameEntity(entity, label) {
  entity.label = label
  return entity
}

function exerciseReactionSystem({ Entity, Query, QueryBuilder, ReactionSystem }) {
  class CustomReactionSystem extends ReactionSystem {
    constructor(queryLike) {
      super(queryLike)
      this.records = []
      this.entityAdded = (snapshot) => this.records.push(["added", Boolean(snapshot.current)])
      this.entityRemoved = (snapshot) => this.records.push(["removed", Boolean(snapshot.current)])
    }

    prepare() {
      this.records.push(["prepare"])
    }
  }

  const query = new Query((entity) => entity.has("live"))
  const systemFromQuery = new CustomReactionSystem(query)
  const systemFromPredicate = new CustomReactionSystem((entity) => entity.has("live"))
  const systemFromBuilder = new CustomReactionSystem(new QueryBuilder().contains("live"))
  const engine = createEngine([new Entity().add("live")])

  systemFromQuery.setEngine(engine)
  systemFromQuery.onAddedToEngine()
  const afterAdd = snapshotReactionSystem(systemFromQuery, engine)
  systemFromQuery.query.entityRemoved(systemFromQuery.entities[0])
  systemFromQuery.onRemovedFromEngine()

  return {
    afterAdd,
    afterRemove: snapshotReactionSystem(systemFromQuery, engine),
    records: systemFromQuery.records,
    predicateQueryLength: systemFromPredicate.query.length,
    builderQueryLength: systemFromBuilder.query.length,
  }
}

function exerciseIterativeSystem({ Entity, IterativeSystem }) {
  class CustomIterativeSystem extends IterativeSystem {
    constructor() {
      super((entity) => entity.has("tick"))
      this.records = []
    }

    updateEntity(entity, delta) {
      this.records.push([entity.label, delta])
      this.onRemovedFromEngine()
    }
  }

  const system = new CustomIterativeSystem()
  const engine = createEngine([
    nameEntity(new Entity().add("tick"), "first"),
    nameEntity(new Entity().add("tick"), "second"),
  ])
  system.setEngine(engine)
  system.onAddedToEngine()
  system.update(16)

  return {
    records: system.records,
    removed: system._removed,
    remainingEntities: system.entities.length,
    engine: {
      added: engine.added,
      removed: engine.removed,
    },
  }
}

function exerciseEngine({ Entity, Query, System, Engine }) {
  class ComponentA {
    constructor(value) {
      this.value = value
    }
  }

  class EventMessage {
    constructor(value) {
      this.value = value
    }
  }

  class BaseSystem extends System {
    constructor(label, records) {
      super()
      this.label = label
      this.records = records
    }

    update(delta) {
      this.records.push(["update", this.label, delta])
    }

    onAddedToEngine() {
      this.records.push(["added", this.label, this.engine instanceof Engine])
    }

    onRemovedFromEngine() {
      this.records.push(["removed", this.label])
    }
  }

  class ChildSystem extends BaseSystem {}

  const records = []
  const engine = new Engine()
  const first = nameEntity(new Entity().add("live"), "first")
  const second = nameEntity(new Entity(), "second")
  const query = new Query((entity) => entity.has("live"))

  engine.onEntityAdded.connect((entity) => records.push(["engine.added", entity.label]))
  engine.onEntityRemoved.connect((entity) => records.push(["engine.removed", entity.label]))

  const duplicateAddReturnsSelf = engine.addEntity(first) === engine
  engine.addEntity(first)
  engine.addEntity(second)
  const entitiesCopyIsDetached = engine.entities !== engine.entities

  const addQueryReturnsSelf = engine.addQuery(query) === engine
  const afterAddQuery = snapshotEngine(engine, query)

  const addedSnapshots = []
  const removedSnapshots = []
  query.onEntityAdded.connect((snapshot) => {
    addedSnapshots.push(snapshotSummary(snapshot, ComponentA))
  })
  query.onEntityRemoved.connect((snapshot) => {
    removedSnapshots.push(snapshotSummary(snapshot, ComponentA))
  })

  second.add("live")
  first.remove("live")
  second.add(new ComponentA("value-a"))
  second.invalidate()

  const low = new BaseSystem("low", records)
  const mid = new BaseSystem("mid", records)
  const high = new ChildSystem("high", records)
  engine.addSystem(high, 10).addSystem(low, 1).addSystem(mid, 5)
  engine.update(33)
  const systemOrder = engine.systems.map((system) => system.label)
  const getSystemLabel = engine.getSystem(ChildSystem)?.label
  const sharedConfigIsEntity = engine.sharedConfig instanceof Entity
  const sharedConfigHandlers = {
    added: engine.sharedConfig.onComponentAdded.handlersAmount,
    removed: engine.sharedConfig.onComponentRemoved.handlersAmount,
    invalidated: engine.sharedConfig.onInvalidationRequested.handlersAmount,
  }

  const stringHandler = (message) => records.push(["dispatch.string", message])
  const stringHandler2 = (message) => records.push(["dispatch.string2", message])
  const eventHandler = (message) => records.push(["dispatch.event", message.value])
  const subA = engine.addSubscription("event:key", stringHandler)
  const subA2 = engine.addSubscription("event:key", stringHandler)
  engine.subscribe("event:key", stringHandler2)
  engine.addSubscription(EventMessage, eventHandler)
  engine.dispatch("event:key")
  engine.dispatch(new EventMessage("typed"))
  engine.removeSubscription("event:key", stringHandler)
  engine.dispatch("event:key")
  engine.removeSubscription("event:key")
  engine.dispatch("event:key")
  engine.unsubscribe(EventMessage, eventHandler)
  engine.dispatch(new EventMessage("after-unsubscribe"))
  const subscriptionState = {
    duplicateSubscription: subA === subA2,
    countBeforeClear: engine.subscriptions.length,
  }
  engine.unsubscribeAll()
  subscriptionState.countAfterClear = engine.subscriptions.length

  engine.removeSystem(mid)
  const afterRemoveSystem = {
    order: engine.systems.map((system) => system.label),
    midEngine: mid._engine,
  }

  const removeQueryReturnsSelf = engine.removeQuery(query) === engine
  const afterRemoveQuery = snapshotEngine(engine, query)

  engine.removeEntity(first)
  engine.removeEntity(first)
  const afterRemoveEntity = snapshotEngine(engine, query)
  engine.removeAllEntities()
  const afterRemoveAllEntities = snapshotEngine(engine, query)

  engine.addEntity(nameEntity(new Entity(), "third"))
  engine.addQuery(query)
  engine.addSystem(mid, 2)
  engine.clear()

  return {
    duplicateAddReturnsSelf,
    entitiesCopyIsDetached,
    addQueryReturnsSelf,
    afterAddQuery,
    addedSnapshots,
    removedSnapshots,
    systemOrder,
    getSystemLabel,
    sharedConfigIsEntity,
    sharedConfigHandlers,
    subscriptionState,
    afterRemoveSystem,
    removeQueryReturnsSelf,
    afterRemoveQuery,
    afterRemoveEntity,
    afterRemoveAllEntities,
    afterClear: snapshotEngine(engine, query),
    records,
  }
}

function snapshotEngine(engine, query) {
  return {
    entities: engine.entities.map((entity) => entity.label),
    systems: engine.systems.map((system) => system.label),
    queriesLength: engine.queries.length,
    queryEntities: query.entities.map((entity) => entity.label),
    addQueryHandlers: engine.onEntityAdded.handlersAmount,
    removeQueryHandlers: engine.onEntityRemoved.handlersAmount,
  }
}

function snapshotSummary(snapshot, ComponentA) {
  return {
    current: snapshot.current.label,
    previousHasLive: snapshot.previous.has("live"),
    previousHasComponentA: snapshot.previous.has(ComponentA),
  }
}

function createEngine(entities) {
  return {
    added: 0,
    removed: 0,
    sharedConfig: {},
    addQuery(query) {
      this.added++
      query.matchEntities(entities)
    },
    removeQuery() {
      this.removed++
    },
  }
}

function snapshotReactionSystem(system, engine) {
  return {
    entitiesLength: system.entities.length,
    addHandlers: system.query.onEntityAdded.handlersAmount,
    removeHandlers: system.query.onEntityRemoved.handlersAmount,
    engineAdded: engine.added,
    engineRemoved: engine.removed,
  }
}

function captureError(fn) {
  try {
    fn()
  } catch (error) {
    return error.message
  }
}
