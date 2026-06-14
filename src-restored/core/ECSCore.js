/**
 * Restored source for the stable modules exported by Webpack Module #75111.
 *
 * The barrel is now semantic source; third-party/runtime framework code stays
 * outside this file until restored explicitly.
 */
"use strict"

const COMPONENT_CLASS_ID = "__componentClassId__"
let componentClassId = 1
let entityId = 1

class Signal {
  constructor() {
    this.handlers = []
  }

  get hasHandlers() {
    return this.handlers.length > 0
  }

  get handlersAmount() {
    return this.handlers.length
  }

  connect(handler, priority = 0) {
    let shouldSort
    const existing = this.handlers.find((item) => item.equals(handler))

    if (existing !== undefined) {
      shouldSort = existing.priority !== priority
      existing.priority = priority
    } else {
      const previous = this.handlers[this.handlers.length - 1]
      this.handlers.push(new SignalHandler(handler, priority))
      shouldSort = previous !== undefined && previous.priority > priority
    }

    if (shouldSort) this.handlers.sort((left, right) => left.priority - right.priority)
  }

  disconnect(handler) {
    const index = this.handlers.findIndex((item) => item.equals(handler))
    if (index >= 0) this.handlers.splice(index, 1)
  }

  disconnectAll() {
    this.handlers.length = 0
  }

  emit(...args) {
    for (const handler of this.handlers) handler.handle(...args)
  }
}

class SignalHandler {
  constructor(handler, priority) {
    this.handler = handler
    this.priority = priority
  }

  equals(handler) {
    return this.handler === handler
  }

  handle(...args) {
    this.handler(...args)
  }
}

function getComponentId(componentClass, create = false) {
  if (Object.prototype.hasOwnProperty.call(componentClass, COMPONENT_CLASS_ID)) {
    return componentClass[COMPONENT_CLASS_ID]
  }

  if (!create) return undefined
  componentClass[COMPONENT_CLASS_ID] = componentClassId++
  return componentClass[COMPONENT_CLASS_ID]
}

function getComponentClass(component, resolveClass) {
  let componentClass = Object.getPrototypeOf(component).constructor

  if (resolveClass) {
    if (!(component instanceof resolveClass || componentClass === resolveClass)) {
      throw new Error("Resolve class should be an ancestor of component class")
    }
    componentClass = resolveClass
  }

  return componentClass
}

function isTag(value) {
  const type = typeof value
  return type === "string" || type === "number"
}

class LinkedComponent {
  constructor(id) {
    this.id = id
    this.next = undefined
  }
}

function isLinkedComponent(value) {
  return value !== undefined && Object.prototype.hasOwnProperty.call(value, "next")
}

class LinkedComponentList {
  get head() {
    return this._head
  }

  get isEmpty() {
    return this._head === undefined
  }

  add(component) {
    let previous = undefined
    let node = this._head

    while (node !== undefined) {
      if (node === component) {
        throw new Error(
          "Component is already appended, appending it once again will break linked items order",
        )
      }
      previous = node
      node = node.next
    }

    if (this._head === undefined) this._head = component
    else previous.next = component
  }

  remove(component) {
    const [previous, node] = this.find(component)
    if (node === undefined) return false

    if (previous === undefined) this._head = node.next
    else previous.next = node.next
    return true
  }

  *nodes() {
    let node = this.head
    while (node !== undefined) {
      yield node
      node = node.next
    }
  }

  iterate(iterator) {
    for (const node of this.nodes()) iterator(node)
  }

  clear() {
    this._head = undefined
  }

  find(component) {
    let previous
    let node = this._head

    while (node !== undefined) {
      if (node === component) return [previous, node]
      previous = node
      node = node.next
    }

    return [undefined, undefined]
  }
}

class Entity {
  constructor() {
    this.onComponentAdded = new Signal()
    this.onComponentRemoved = new Signal()
    this.onInvalidationRequested = new Signal()
    this.id = entityId++
    this._components = {}
    this._linkedComponents = {}
    this._tags = new Set()
  }

  get components() {
    return this._components
  }

  get tags() {
    return this._tags
  }

  add(componentOrTag, resolveClass) {
    if (isTag(componentOrTag)) this.addTag(componentOrTag)
    else this.addComponent(componentOrTag, resolveClass)
    return this
  }

  append(component, resolveClass) {
    return this.appendComponent(component, resolveClass)
  }

  withdraw(componentClass) {
    const component = this.get(componentClass)
    if (component !== undefined) return this.withdrawComponent(component, componentClass)
  }

  pick(componentOrClass, id) {
    if (typeof id === "string") {
      const component = this.find(componentOrClass, (item) => item.id === id)
      return component !== undefined ? this.withdrawComponent(component, componentOrClass) : undefined
    }
    return this.withdrawComponent(componentOrClass, id)
  }

  addComponent(component, resolveClass) {
    const componentClass = getComponentClass(component, resolveClass)
    const componentId = getComponentId(componentClass, true)
    const linked = isLinkedComponent(component)

    if (this._components[componentId] !== undefined) {
      if (!linked && component === this._components[componentId]) return
      this.remove(componentClass)
    }

    if (linked) this.append(component, resolveClass)
    else {
      this._components[componentId] = component
      this.dispatchOnComponentAdded(component)
    }
  }

  appendComponent(component, resolveClass) {
    const componentClass = getComponentClass(component, resolveClass)
    const componentId = getComponentId(componentClass, true)
    const list = this.getLinkedComponentList(componentId)

    list.add(component)
    if (this._components[componentId] === undefined) this._components[componentId] = list.head
    this.dispatchOnComponentAdded(component)
    return this
  }

  addTag(tag) {
    if (!this._tags.has(tag)) {
      this._tags.add(tag)
      this.dispatchOnComponentAdded(tag)
    }
  }

  has(componentOrTag, id) {
    return isTag(componentOrTag) ? this.hasTag(componentOrTag) : this.hasComponent(componentOrTag, id)
  }

  contains(component, resolveClass) {
    const componentClass = getComponentClass(component, resolveClass)
    if (isLinkedComponent(component)) {
      return this.find(componentClass, (item) => item === component) !== undefined
    }
    return this.get(componentClass) === component
  }

  hasComponent(componentClass, id) {
    return this.get(componentClass, id) !== undefined
  }

  hasTag(tag) {
    return this._tags.has(tag)
  }

  hasAny(...items) {
    return items.some((item) => this.has(item))
  }

  hasAll(...items) {
    return items.every((item) => this.has(item))
  }

  get(componentClass, id) {
    const componentId = getComponentId(componentClass)
    if (componentId === undefined) return

    let component = this._components[componentId]
    if (id === undefined) return component

    if (isLinkedComponent(component)) {
      while (component !== undefined) {
        if (component.id === id) return component
        component = component.next
      }
    }
  }

  getComponents() {
    return Array.from(Object.values(this._components))
  }

  getTags() {
    return Array.from(this._tags)
  }

  remove(componentOrTag) {
    if (!isTag(componentOrTag)) return this.removeComponent(componentOrTag)
    this.removeTag(componentOrTag)
  }

  removeComponent(componentClass) {
    const componentId = getComponentId(componentClass)
    if (componentId === undefined || this._components[componentId] === undefined) return

    const component = this._components[componentId]
    if (isLinkedComponent(component)) {
      const list = this.getLinkedComponentList(componentClass)
      while (!list.isEmpty) this.withdraw(componentClass)
    } else {
      delete this._components[componentId]
      this.dispatchOnComponentRemoved(component)
    }
    return component
  }

  removeTag(tag) {
    if (this._tags.has(tag)) {
      this._tags.delete(tag)
      this.dispatchOnComponentRemoved(tag)
    }
  }

  clear() {
    this._components = {}
    this._linkedComponents = {}
    this._tags.clear()
  }

  copyFrom(entity) {
    this._components = Object.assign({}, entity._components)
    this._linkedComponents = Object.assign({}, entity._linkedComponents)
    this._tags = new Set(entity._tags)
    return this
  }

  iterate(componentClass, iterator) {
    if (this.hasComponent(componentClass)) this.getLinkedComponentList(componentClass)?.iterate(iterator)
  }

  *getAll(componentClass) {
    if (!this.hasComponent(componentClass)) return

    const list = this.getLinkedComponentList(componentClass, false)
    if (list === undefined) return

    yield* list.nodes()
  }

  find(componentClass, predicate) {
    const componentId = getComponentId(componentClass, false)
    if (componentId === undefined) return

    const component = this._components[componentId]
    if (component === undefined) return
    if (!isLinkedComponent(component)) return predicate(component) ? component : undefined

    let node = component
    while (node !== undefined) {
      if (predicate(node)) return node
      node = node.next
    }
  }

  lengthOf(componentClass) {
    let length = 0
    this.iterate(componentClass, () => {
      length++
    })
    return length
  }

  invalidate() {
    this.onInvalidationRequested.emit(this)
  }

  takeSnapshot(snapshot, changedComponent, resolveClass) {
    const previous = snapshot.previous
    if (snapshot.current !== this) {
      snapshot.current = this
      previous.copyFrom(this)
    }

    if (changedComponent === undefined) return

    if (isTag(changedComponent)) {
      const tags = previous._tags
      if (this.has(changedComponent)) tags.delete(changedComponent)
      else tags.add(changedComponent)
    } else {
      const componentClass = resolveClass ?? Object.getPrototypeOf(changedComponent).constructor
      const componentId = getComponentId(componentClass, true)
      const components = previous._components

      if (this.has(componentClass)) delete components[componentId]
      else components[componentId] = changedComponent
    }
  }

  getLinkedComponentList(componentClassOrId, create = true) {
    let componentId = componentClassOrId
    if (typeof componentId !== "number") componentId = getComponentId(componentId)

    if (this._linkedComponents[componentId] === undefined && create) {
      this._linkedComponents[componentId] = new LinkedComponentList()
    }

    return this._linkedComponents[componentId]
  }

  withdrawComponent(component, resolveClass) {
    const componentClass = getComponentClass(component, resolveClass)
    if (!isLinkedComponent(component)) return this.remove(componentClass)

    const list = this.getLinkedComponentList(componentClass, false)
    if (!this.hasComponent(componentClass) || list === undefined) return

    const removed = list.remove(component) ? component : undefined
    const componentId = getComponentId(componentClass, true)

    if (list.isEmpty) {
      delete this._components[componentId]
      delete this._linkedComponents[componentId]
    } else {
      this._components[componentId] = list.head
    }

    if (removed !== undefined) this.dispatchOnComponentRemoved(removed)
    return removed
  }

  dispatchOnComponentAdded(componentOrTag) {
    if (this.onComponentAdded.hasHandlers) this.onComponentAdded.emit(this, componentOrTag)
  }

  dispatchOnComponentRemoved(componentOrTag) {
    if (this.onComponentRemoved.hasHandlers) this.onComponentRemoved.emit(this, componentOrTag)
  }
}

class EntitySnapshot {
  constructor() {
    this._previous = new Entity()
  }

  get current() {
    return this._current
  }

  set current(entity) {
    this._current = entity
  }

  get previous() {
    return this._previous
  }
}

class Subscription {
  constructor(messageType, handler) {
    this.messageType = messageType
    this.handler = handler
  }

  equals(messageType, handler) {
    return this.messageType === messageType && (handler === undefined || this.handler === handler)
  }
}

class Engine {
  constructor() {
    this.onEntityAdded = new Signal()
    this.onEntityRemoved = new Signal()
    this._entityMap = new Map()
    this._entities = []
    this._systems = []
    this._queries = []
    this._subscriptions = []
    this._sharedConfig = new Entity()

    this.onComponentAdded = (entity, component, resolveClass) => {
      this._queries.forEach((query) => query.entityComponentAdded(entity, component, resolveClass))
    }
    this.onInvalidationRequested = (entity) => {
      this._queries.forEach((query) => query.validateEntity(entity))
    }
    this.onComponentRemoved = (entity, component, resolveClass) => {
      this._queries.forEach((query) => query.entityComponentRemoved(entity, component, resolveClass))
    }

    this.connectEntity(this._sharedConfig)
  }

  get entities() {
    return Array.from(this._entities)
  }

  get systems() {
    return this._systems
  }

  get queries() {
    return this._queries
  }

  get subscriptions() {
    return this._subscriptions
  }

  get sharedConfig() {
    return this._sharedConfig
  }

  addEntity(entity) {
    if (!this._entityMap.has(entity.id)) {
      this._entities.push(entity)
      this._entityMap.set(entity.id, entity)
      this.onEntityAdded.emit(entity)
      this.connectEntity(entity)
    }
    return this
  }

  removeEntity(entity) {
    if (!this._entityMap.has(entity.id)) return this

    const index = this._entities.indexOf(entity)
    this._entities.splice(index, 1)
    this._entityMap.delete(entity.id)
    this.onEntityRemoved.emit(entity)
    this.disconnectEntity(entity)
    return this
  }

  removeSystem(system) {
    const index = this._systems.indexOf(system)
    if (index !== -1) {
      this._systems.splice(index, 1)
      system.onRemovedFromEngine()
      system.setEngine(undefined)
    }
    return this
  }

  getEntityById(id) {
    return this._entityMap.get(id)
  }

  getSystem(SystemClass) {
    return this._systems.find((system) => system instanceof SystemClass)
  }

  removeAllSystems() {
    const systems = this._systems
    this._systems = []
    for (const system of systems) system.onRemovedFromEngine()
  }

  removeAllQueries() {
    const queries = this._queries
    this._queries = []
    for (const query of queries) {
      this.disconnectQuery(query)
      query.clear()
    }
  }

  removeAllEntities() {
    this.removeAllEntitiesInternal(false)
  }

  clear() {
    this.removeAllEntitiesInternal(true)
    this.removeAllSystems()
    this.removeAllQueries()
  }

  update(delta) {
    for (const system of this._systems) system.update(delta)
  }

  addQuery(query) {
    this.connectQuery(query)
    query.matchEntities(this.entities)
    this._queries[this._queries.length] = query
    return this
  }

  addSystem(system, priority = 0) {
    system.setPriority(priority)

    if (this._systems.length === 0) this._systems[0] = system
    else {
      const index = this._systems.findIndex((item) => item.priority > priority)
      if (index === -1) this._systems[this._systems.length] = system
      else this._systems.splice(index, 0, system)
    }

    system.setEngine(this)
    system.onAddedToEngine()
    return this
  }

  removeQuery(query) {
    const index = this._queries.indexOf(query)
    if (index !== -1) {
      this._queries.splice(index, 1)
      this.disconnectQuery(query)
      query.clear()
      return this
    }
  }

  subscribe(messageType, handler) {
    this.addSubscription(messageType, handler)
  }

  unsubscribe(messageType, handler) {
    this.removeSubscription(messageType, handler)
  }

  unsubscribeAll() {
    this._subscriptions.length = 0
  }

  addSubscription(messageType, handler) {
    for (const subscription of this._subscriptions) {
      if (subscription.equals(messageType, handler)) return subscription
    }

    const subscription = new Subscription(messageType, handler)
    this._subscriptions.push(subscription)
    return subscription
  }

  removeSubscription(messageType, handler) {
    for (let index = this._subscriptions.length; --index >= 0; ) {
      if (this._subscriptions[index].equals(messageType, handler)) {
        this._subscriptions.splice(index, 1)
        if (handler !== undefined) return
      }
    }
  }

  dispatch(message) {
    for (const subscription of this._subscriptions) {
      if (
        (typeof subscription.messageType === "function" && message instanceof subscription.messageType) ||
        message === subscription.messageType
      ) {
        subscription.handler(message)
      }
    }
  }

  connectEntity(entity) {
    entity.onComponentAdded.connect(this.onComponentAdded, Number.POSITIVE_INFINITY)
    entity.onComponentRemoved.connect(this.onComponentRemoved, Number.POSITIVE_INFINITY)
    entity.onInvalidationRequested.connect(this.onInvalidationRequested, Number.NEGATIVE_INFINITY)
  }

  disconnectEntity(entity) {
    entity.onComponentAdded.disconnect(this.onComponentAdded)
    entity.onComponentRemoved.disconnect(this.onComponentRemoved)
    entity.onInvalidationRequested.disconnect(this.onInvalidationRequested)
  }

  connectQuery(query) {
    this.onEntityAdded.connect(query.entityAdded)
    this.onEntityRemoved.connect(query.entityRemoved)
  }

  disconnectQuery(query) {
    this.onEntityAdded.disconnect(query.entityAdded)
    this.onEntityRemoved.disconnect(query.entityRemoved)
  }

  removeAllEntitiesInternal(silent) {
    const entities = this._entities
    this._entities = []
    this._entityMap.clear()

    for (const entity of entities) {
      if (!silent) this.onEntityRemoved.emit(entity)
      this.disconnectEntity(entity)
    }
  }
}

class System {
  constructor() {
    this._priority = 0
  }

  get engine() {
    if (this._engine === undefined) {
      throw new Error('Property "engine" can\'t be accessed when system is not added to the engine')
    }
    return this._engine
  }

  get sharedConfig() {
    if (this._engine === undefined) {
      throw new Error(
        'Property "sharedConfig" can\'t be accessed when system is not added to the engine',
      )
    }
    return this._engine.sharedConfig
  }

  get priority() {
    return this._priority
  }

  update() {}

  onAddedToEngine() {}

  onRemovedFromEngine() {}

  dispatch(event) {
    if (this._engine === undefined) {
      throw new Error("Dispatching a message can't be done while system is not attached to the engine")
    }
    this.engine.dispatch(event)
  }

  setEngine(engine) {
    this._engine = engine
  }

  setPriority(priority) {
    this._priority = priority
  }
}

class Query {
  constructor(predicate) {
    this.onEntityAdded = new Signal()
    this.onEntityRemoved = new Signal()
    this._helper = new Entity()
    this._snapshot = new EntitySnapshot()
    this._entities = []
    this._predicate = predicate

    this.entityAdded = (entity) => {
      if (this._entities.indexOf(entity) === -1 && this._predicate(entity)) {
        this._entities.push(entity)
        if (this.onEntityAdded.hasHandlers) {
          entity.takeSnapshot(this._snapshot)
          this.onEntityAdded.emit(this._snapshot)
        }
      }
    }

    this.entityRemoved = (entity) => {
      const index = this._entities.indexOf(entity)
      if (index !== -1) {
        this._entities.splice(index, 1)
        if (this.onEntityRemoved.hasHandlers) {
          entity.takeSnapshot(this._snapshot)
          this.onEntityRemoved.emit(this._snapshot)
        }
      }
    }

    this.entityComponentAdded = (entity, component, resolveClass) => {
      const hasAddedHandlers = this.onEntityAdded.hasHandlers
      const hasRemovedHandlers = this.onEntityRemoved.hasHandlers
      this.updateHelper(entity, component, resolveClass)

      const index = this._entities.indexOf(entity)
      const matchesWithComponent = this._predicate(this._helper)

      if (index === -1 && matchesWithComponent) {
        this._entities.push(entity)
        if (hasAddedHandlers) {
          entity.takeSnapshot(this._snapshot, component, resolveClass)
          this.onEntityAdded.emit(this._snapshot)
        }
      } else if (index !== -1 && !matchesWithComponent) {
        this._entities.splice(index, 1)
        if (hasRemovedHandlers) {
          entity.takeSnapshot(this._snapshot, component, resolveClass)
          this.onEntityRemoved.emit(this._snapshot)
        }
      }
    }

    this.entityComponentRemoved = (entity, component, resolveClass) => {
      const hasAddedHandlers = this.onEntityAdded.hasHandlers
      const hasRemovedHandlers = this.onEntityRemoved.hasHandlers
      this.updateHelper(entity, component, resolveClass)

      const index = this._entities.indexOf(entity)
      if (index !== -1 && this._predicate(this._helper) && !this._predicate(entity)) {
        this._entities.splice(index, 1)
        if (hasRemovedHandlers) {
          entity.takeSnapshot(this._snapshot, component, resolveClass)
          this.onEntityRemoved.emit(this._snapshot)
        }
      } else if (index === -1 && this._predicate(entity) && !this._predicate(this._helper)) {
        this._entities.push(entity)
        if (hasAddedHandlers) {
          entity.takeSnapshot(this._snapshot, component, resolveClass)
          this.onEntityAdded.emit(this._snapshot)
        }
      }
    }
  }

  get entities() {
    return this._entities
  }

  get first() {
    if (this._entities.length !== 0) return this._entities[0]
  }

  get last() {
    if (this._entities.length !== 0) return this._entities[this._entities.length - 1]
  }

  get length() {
    return this._entities.length
  }

  get isEmpty() {
    return this.entities.length == 0
  }

  countBy(predicate) {
    let count = 0
    for (const entity of this._entities) {
      if (predicate(entity)) count++
    }
    return count
  }

  find(predicate) {
    return this._entities.find(predicate)
  }

  filter(predicate) {
    return this._entities.filter(predicate)
  }

  has(entity) {
    return this._entities.indexOf(entity) !== -1
  }

  matchEntities(entities) {
    entities.forEach((entity) => this.entityAdded(entity))
  }

  clear() {
    this._entities = []
  }

  validateEntity(entity) {
    const index = this.entities.indexOf(entity)
    const matches = this._predicate(entity)
    if (index === -1 || matches) this.entityAdded(entity)
    else this.entityRemoved(entity)
  }

  updateHelper(entity, component, resolveClass) {
    this._helper.clear()
    this._helper.copyFrom(entity)

    if (isLinkedComponent(component)) {
      if (!this._helper.has(getComponentClass(component, resolveClass))) this._helper.append(component)
    } else {
      this._helper.add(component)
    }
  }
}

class QueryBuilder {
  constructor() {
    this._components = new Set()
    this._tags = new Set()
  }

  contains(...items) {
    for (const item of items) {
      if (isTag(item)) {
        if (!this._tags.has(item)) this._tags.add(item)
      } else {
        const componentId = getComponentId(item, true)
        if (!this._components.has(componentId)) this._components.add(componentId)
      }
    }
    return this
  }

  build() {
    return new Query((entity) => {
      if (this._components.size > 0) {
        for (const componentId of this._components) {
          if (entity.components[componentId] === undefined) return false
        }
      }

      if (this._tags.size > 0) {
        for (const tag of this._tags) {
          if (!entity.tags.has(tag)) return false
        }
      }

      return true
    })
  }

  getComponents() {
    return this._components
  }

  getTags() {
    return this._tags
  }
}

function isQueryPredicate(value) {
  return typeof value === "function"
}

function isQueryBuilder(value) {
  return value instanceof QueryBuilder
}

class ReactionSystem extends System {
  constructor(queryLike) {
    super()
    this.entityAdded = function () {}
    this.entityRemoved = function () {}

    if (isQueryBuilder(queryLike)) this.query = queryLike.build()
    else if (isQueryPredicate(queryLike)) this.query = new Query(queryLike)
    else this.query = queryLike
  }

  get entities() {
    return this.query.entities
  }

  onAddedToEngine() {
    this.engine.addQuery(this.query)
    this.prepare()
    this.query.onEntityAdded.connect(this.entityAdded)
    this.query.onEntityRemoved.connect(this.entityRemoved)
  }

  onRemovedFromEngine() {
    this.engine.removeQuery(this.query)
    this.query.onEntityAdded.disconnect(this.entityAdded)
    this.query.onEntityRemoved.disconnect(this.entityRemoved)
    this.query.clear()
  }

  prepare() {}
}

class IterativeSystem extends ReactionSystem {
  constructor(queryLike) {
    super(queryLike)
    this._removed = false
  }

  update(delta) {
    this.updateEntities(delta)
  }

  onAddedToEngine() {
    this._removed = false
    super.onAddedToEngine()
  }

  onRemovedFromEngine() {
    this._removed = true
    super.onRemovedFromEngine()
  }

  updateEntities(delta) {
    for (const entity of this.query.entities) {
      if (this._removed) return
      this.updateEntity(entity, delta)
    }
  }
}

module.exports = {
  Signal,
  getComponentId,
  getComponentClass,
  isTag,
  LinkedComponent,
  isLinkedComponent,
  Entity,
  EntitySnapshot,
  Engine,
  System,
  Query,
  QueryBuilder,
  isQueryPredicate,
  isQueryBuilder,
  ReactionSystem,
  IterativeSystem,
}
