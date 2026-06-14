/**
 * Restored source for Webpack Module #24473.
 *
 * Runtime dependency-injection singleton and lazy helper functions.
 */
"use strict"

const { Container } = require("./diRuntime")
const createInjectDecorators = require("./InjectDecoratorsRuntime").default

const di = new Container()
const lazyInject = createInjectDecorators(di).lazyInject

function lazyGet(token) {
  return token && di.isBound(token) ? di.get(token) : undefined
}

function lazyRun(token, data) {
  const action = lazyGet(token)
  return action === null || action === undefined ? undefined : action.run(data)
}

module.exports = {
  di,
  lazyGet,
  lazyInject,
  lazyRun,
}
