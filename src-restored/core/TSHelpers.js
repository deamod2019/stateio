/**
 * Restored TypeScript runtime helpers from Webpack Module #70655.
 */
"use strict"

const extendStatics =
  Object.setPrototypeOf ||
  ({ __proto__: [] } instanceof Array &&
    function setPrototypeViaProto(derived, base) {
      derived.__proto__ = base
    }) ||
  function copyPrototypeStatics(derived, base) {
    for (const property in base) {
      if (Object.prototype.hasOwnProperty.call(base, property)) derived[property] = base[property]
    }
  }

function __extends(derived, base) {
  if (typeof base !== "function" && base !== null) {
    throw new TypeError("Class extends value " + String(base) + " is not a constructor or null")
  }
  extendStatics(derived, base)
  function Surrogate() {
    this.constructor = derived
  }
  derived.prototype =
    base === null ? Object.create(base) : ((Surrogate.prototype = base.prototype), new Surrogate())
}

const __assign =
  Object.assign ||
  function assign(target) {
    for (let sourceIndex = 1; sourceIndex < arguments.length; sourceIndex += 1) {
      const source = arguments[sourceIndex]
      for (const property in source) {
        if (Object.prototype.hasOwnProperty.call(source, property)) target[property] = source[property]
      }
    }
    return target
  }

function __rest(source, excluded) {
  const target = {}
  for (const property in source) {
    if (Object.prototype.hasOwnProperty.call(source, property) && excluded.indexOf(property) < 0) {
      target[property] = source[property]
    }
  }
  if (source != null && typeof Object.getOwnPropertySymbols === "function") {
    const symbols = Object.getOwnPropertySymbols(source)
    for (let index = 0; index < symbols.length; index += 1) {
      const symbol = symbols[index]
      if (
        excluded.indexOf(symbol) < 0 &&
        Object.prototype.propertyIsEnumerable.call(source, symbol)
      ) {
        target[symbol] = source[symbol]
      }
    }
  }
  return target
}

function __decorate(decorators, target, key, descriptor) {
  let result
  const argumentCount = arguments.length
  let current =
    argumentCount < 3
      ? target
      : descriptor === null
        ? (descriptor = Object.getOwnPropertyDescriptor(target, key))
        : descriptor
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
    current = Reflect.decorate(decorators, target, key, descriptor)
  } else {
    for (let index = decorators.length - 1; index >= 0; index -= 1) {
      result = decorators[index]
      if (result) {
        current =
          (argumentCount < 3
            ? result(current)
            : argumentCount > 3
              ? result(target, key, current)
              : result(target, key)) || current
      }
    }
  }
  if (argumentCount > 3 && current) Object.defineProperty(target, key, current)
  return current
}

function __param(index, decorator) {
  return function applyParamDecorator(target, key) {
    decorator(target, key, index)
  }
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    return Reflect.metadata(metadataKey, metadataValue)
  }
}

function __awaiter(thisArg, args, PromiseCtor, generator) {
  return new (PromiseCtor || (PromiseCtor = Promise))(function executor(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value))
      } catch (error) {
        reject(error)
      }
    }
    function rejected(value) {
      try {
        step(generator.throw(value))
      } catch (error) {
        reject(error)
      }
    }
    function step(result) {
      let value
      if (result.done) {
        resolve(result.value)
      } else {
        value = result.value
        ;(value instanceof PromiseCtor
          ? value
          : new PromiseCtor(function wrap(resolveValue) {
              resolveValue(value)
            })).then(fulfilled, rejected)
      }
    }
    step((generator = generator.apply(thisArg, args || [])).next())
  })
}

function __generator(thisArg, body) {
  let executing
  let delegate
  let operation
  let generatorObject
  let state = {
    label: 0,
    sent() {
      if (operation[0] & 1) throw operation[1]
      return operation[1]
    },
    trys: [],
    ops: [],
  }
  generatorObject = { next: verb(0), throw: verb(1), return: verb(2) }
  if (typeof Symbol === "function") {
    generatorObject[Symbol.iterator] = function iterator() {
      return this
    }
  }
  return generatorObject

  function verb(type) {
    return function run(value) {
      return step([type, value])
    }
  }

  function step(input) {
    if (executing) throw new TypeError("Generator is already executing.")
    while (generatorObject && ((generatorObject = 0), input[0] && (state = 0)), state) {
      try {
        executing = 1
        if (
          delegate &&
          (operation =
            input[0] & 2
              ? delegate.return
              : input[0]
                ? delegate.throw || ((operation = delegate.return) && operation.call(delegate), 0)
                : delegate.next) &&
          !(operation = operation.call(delegate, input[1])).done
        ) {
          return operation
        }
        delegate = 0
        if (operation) input = [input[0] & 2, operation.value]
        switch (input[0]) {
          case 0:
          case 1:
            operation = input
            break
          case 4:
            state.label += 1
            return { value: input[1], done: false }
          case 5:
            state.label += 1
            delegate = input[1]
            input = [0]
            continue
          case 7:
            input = state.ops.pop()
            state.trys.pop()
            continue
          default: {
            operation = state.trys
            const tryEntry =
              operation.length > 0 && operation[operation.length - 1]
            if (!tryEntry && (input[0] === 6 || input[0] === 2)) {
              state = 0
              continue
            }
            if (input[0] === 3 && (!tryEntry || (input[1] > tryEntry[0] && input[1] < tryEntry[3]))) {
              state.label = input[1]
              break
            }
            if (input[0] === 6 && state.label < tryEntry[1]) {
              state.label = tryEntry[1]
              operation = input
              break
            }
            if (tryEntry && state.label < tryEntry[2]) {
              state.label = tryEntry[2]
              state.ops.push(input)
              break
            }
            if (tryEntry[2]) state.ops.pop()
            state.trys.pop()
            continue
          }
        }
        input = body.call(thisArg, state)
      } catch (error) {
        input = [6, error]
        delegate = 0
      } finally {
        executing = operation = 0
      }
    }
    if (input[0] & 5) throw input[1]
    return { value: input[0] ? input[1] : undefined, done: true }
  }
}

const __createBinding = Object.create
  ? function createBinding(target, source, key, alias) {
      if (alias === undefined) alias = key
      let descriptor = Object.getOwnPropertyDescriptor(source, key)
      if (
        !descriptor ||
        ("get" in descriptor ? !source.__esModule : descriptor.writable || descriptor.configurable)
      ) {
        descriptor = {
          enumerable: true,
          get() {
            return source[key]
          },
        }
      }
      Object.defineProperty(target, alias, descriptor)
    }
  : function createBindingFallback(target, source, key, alias) {
      if (alias === undefined) alias = key
      target[alias] = source[key]
    }

function __exportStar(source, target) {
  for (const property in source) {
    if (property !== "default" && !Object.prototype.hasOwnProperty.call(target, property)) {
      __createBinding(target, source, property)
    }
  }
}

function __values(value) {
  const symbolIterator = typeof Symbol === "function" && Symbol.iterator
  const iterator = symbolIterator && value[symbolIterator]
  let index = 0
  if (iterator) return iterator.call(value)
  if (value && typeof value.length === "number") {
    return {
      next() {
        if (value && index >= value.length) value = undefined
        return { value: value && value[index++], done: !value }
      },
    }
  }
  throw new TypeError(symbolIterator ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function __read(value, count) {
  let iterator = typeof Symbol === "function" && value[Symbol.iterator]
  if (!iterator) return value
  let next
  let thrown
  const result = []
  const iterable = iterator.call(value)
  try {
    while ((count === undefined || count-- > 0) && !(next = iterable.next()).done) {
      result.push(next.value)
    }
  } catch (error) {
    thrown = { error }
  } finally {
    try {
      if (next && !next.done && (iterator = iterable.return)) iterator.call(iterable)
    } finally {
      if (thrown) throw thrown.error
    }
  }
  return result
}

function __spread() {
  let result = []
  for (let index = 0; index < arguments.length; index += 1) {
    result = result.concat(__read(arguments[index]))
  }
  return result
}

function __spreadArrays() {
  let length = 0
  for (let index = 0; index < arguments.length; index += 1) length += arguments[index].length
  const result = Array(length)
  let offset = 0
  for (let index = 0; index < arguments.length; index += 1) {
    const array = arguments[index]
    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex += 1, offset += 1) {
      result[offset] = array[arrayIndex]
    }
  }
  return result
}

function __spreadArray(to, from, pack) {
  let array
  if (pack || arguments.length === 2) {
    for (let index = 0, length = from.length; index < length; index += 1) {
      if (!array && index in from) continue
      if (!array) array = Array.prototype.slice.call(from, 0, index)
      array[index] = from[index]
    }
  }
  return to.concat(array || Array.prototype.slice.call(from))
}

function __await(value) {
  return this instanceof __await ? ((this.v = value), this) : new __await(value)
}

function __asyncGenerator(thisArg, args, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.")
  const iterator = generator.apply(thisArg, args || [])
  const queue = []
  const asyncIterator = {}
  define("next")
  define("throw")
  define("return")
  asyncIterator[Symbol.asyncIterator] = function asyncIteratorSymbol() {
    return this
  }
  return asyncIterator

  function define(method) {
    if (iterator[method]) {
      asyncIterator[method] = function asyncMethod(value) {
        return new Promise(function promise(resolve, reject) {
          queue.push([method, value, resolve, reject]) > 1 || resume(method, value)
        })
      }
    }
  }

  function resume(method, value) {
    try {
      const result = iterator[method](value)
      if (result.value instanceof __await) Promise.resolve(result.value.v).then(fulfilled, rejected)
      else settle(queue[0][2], result)
    } catch (error) {
      settle(queue[0][3], error)
    }
  }
  function fulfilled(value) {
    resume("next", value)
  }
  function rejected(value) {
    resume("throw", value)
  }
  function settle(callback, value) {
    callback(value)
    queue.shift()
    if (queue.length) resume(queue[0][0], queue[0][1])
  }
}

function __asyncDelegator(iterator) {
  let waiting
  const result = {}
  define("next")
  define("throw", function throwValue(value) {
    throw value
  })
  define("return")
  result[Symbol.iterator] = function iteratorSymbol() {
    return this
  }
  return result

  function define(method, fallback) {
    result[method] = iterator[method]
      ? function delegate(value) {
          return (waiting = !waiting)
            ? { value: __await(iterator[method](value)), done: method === "return" }
            : fallback
              ? fallback(value)
              : value
        }
      : fallback
  }
}

function __asyncValues(value) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.")
  const asyncIterator = value[Symbol.asyncIterator]
  if (asyncIterator) return asyncIterator.call(value)
  value = __values(value)
  const result = {}
  define("next")
  define("throw")
  define("return")
  result[Symbol.asyncIterator] = function asyncIteratorSymbol() {
    return this
  }
  return result

  function define(method) {
    result[method] =
      value[method] &&
      function asyncMethod(argument) {
        return new Promise(function promise(resolve, reject) {
          const step = value[method](argument)
          Promise.resolve(step.value).then(function resolved(resolvedValue) {
            resolve({ value: resolvedValue, done: step.done })
          }, reject)
        })
      }
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw })
  else cooked.raw = raw
  return cooked
}

const createDefault = Object.create
  ? function createDefaultBinding(target, value) {
      Object.defineProperty(target, "default", { enumerable: true, value })
    }
  : function createDefaultBindingFallback(target, value) {
      target.default = value
    }

function __importStar(moduleValue) {
  if (moduleValue && moduleValue.__esModule) return moduleValue
  const result = {}
  if (moduleValue != null) {
    for (const property in moduleValue) {
      if (property !== "default" && Object.prototype.hasOwnProperty.call(moduleValue, property)) {
        __createBinding(result, moduleValue, property)
      }
    }
  }
  createDefault(result, moduleValue)
  return result
}

function __importDefault(moduleValue) {
  return moduleValue && moduleValue.__esModule ? moduleValue : { default: moduleValue }
}

function __classPrivateFieldGet(receiver, state, kind, accessor) {
  if (kind === "a" && !accessor) throw new TypeError("Private accessor was defined without a getter")
  if (typeof state === "function" ? receiver !== state || !accessor : !state.has(receiver)) {
    throw new TypeError("Cannot read private member from an object whose class did not declare it")
  }
  return kind === "m" ? accessor : kind === "a" ? accessor.call(receiver) : accessor ? accessor.value : state.get(receiver)
}

function __classPrivateFieldSet(receiver, state, value, kind, accessor) {
  if (kind === "m") throw new TypeError("Private method is not writable")
  if (kind === "a" && !accessor) throw new TypeError("Private accessor was defined without a setter")
  if (typeof state === "function" ? receiver !== state || !accessor : !state.has(receiver)) {
    throw new TypeError("Cannot write private member to an object whose class did not declare it")
  }
  if (kind === "a") accessor.call(receiver, value)
  else if (accessor) accessor.value = value
  else state.set(receiver, value)
  return value
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) {
    throw new TypeError("Cannot use 'in' operator on non-object")
  }
  return typeof state === "function" ? receiver === state : state.has(receiver)
}

module.exports = {
  __assign,
  __asyncDelegator,
  __asyncGenerator,
  __asyncValues,
  __await,
  __awaiter,
  __classPrivateFieldGet,
  __classPrivateFieldIn,
  __classPrivateFieldSet,
  __createBinding,
  __decorate,
  __exportStar,
  __extends,
  __generator,
  __importDefault,
  __importStar,
  __makeTemplateObject,
  __metadata,
  __param,
  __read,
  __rest,
  __spread,
  __spreadArray,
  __spreadArrays,
  __values,
}
