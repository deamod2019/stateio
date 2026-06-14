/**
 * Restored source for Webpack Module #38224.
 *
 * Inversify activation helper that attaches a mediator instance to a view.
 */
"use strict"

function bindMediator(MediatorClass) {
  return function onActivation(context, view) {
    if (!context.container.isBound(MediatorClass)) {
      context.container.bind(MediatorClass).toSelf()
    }
    view.mediator = context.container.get(MediatorClass)
    return view
  }
}

module.exports = { bindMediator }
