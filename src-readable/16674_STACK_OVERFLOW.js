/**
 * Webpack Module #16674
 * @exports STACK_OVERFLOW, CIRCULAR_DEPENDENCY_IN_FACTORY, POST_CONSTRUCT_ERROR, MULTIPLE_POST_CONSTRUCT_METHODS, CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK, CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE, CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE, CONTAINER_OPTIONS_MUST_BE_AN_OBJECT, ARGUMENTS_LENGTH_MISMATCH, INVALID_DECORATOR_OPERATION, INVALID_TO_SELF_VALUE, INVALID_FUNCTION_BINDING, INVALID_MIDDLEWARE_RETURN, NO_MORE_SNAPSHOTS_AVAILABLE, INVALID_BINDING_TYPE, NOT_IMPLEMENTED, CIRCULAR_DEPENDENCY, UNDEFINED_INJECT_ANNOTATION, MISSING_INJECT_ANNOTATION, MISSING_INJECTABLE_ANNOTATION, NOT_REGISTERED, CANNOT_UNBIND, AMBIGUOUS_MATCH, KEY_NOT_FOUND, NULL_ARGUMENT, DUPLICATED_METADATA, DUPLICATED_INJECTABLE_DECORATOR
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.STACK_OVERFLOW =
      t.CIRCULAR_DEPENDENCY_IN_FACTORY =
      t.POST_CONSTRUCT_ERROR =
      t.MULTIPLE_POST_CONSTRUCT_METHODS =
      t.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK =
      t.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE =
      t.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE =
      t.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT =
      t.ARGUMENTS_LENGTH_MISMATCH =
      t.INVALID_DECORATOR_OPERATION =
      t.INVALID_TO_SELF_VALUE =
      t.INVALID_FUNCTION_BINDING =
      t.INVALID_MIDDLEWARE_RETURN =
      t.NO_MORE_SNAPSHOTS_AVAILABLE =
      t.INVALID_BINDING_TYPE =
      t.NOT_IMPLEMENTED =
      t.CIRCULAR_DEPENDENCY =
      t.UNDEFINED_INJECT_ANNOTATION =
      t.MISSING_INJECT_ANNOTATION =
      t.MISSING_INJECTABLE_ANNOTATION =
      t.NOT_REGISTERED =
      t.CANNOT_UNBIND =
      t.AMBIGUOUS_MATCH =
      t.KEY_NOT_FOUND =
      t.NULL_ARGUMENT =
      t.DUPLICATED_METADATA =
      t.DUPLICATED_INJECTABLE_DECORATOR =
        undefined),
    (t.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times."),
    (t.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:"),
    (t.NULL_ARGUMENT = "NULL argument"),
    (t.KEY_NOT_FOUND = "Key Not Found"),
    (t.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:"),
    (t.CANNOT_UNBIND = "Could not unbind serviceIdentifier:"),
    (t.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:"),
    (t.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:"),
    (t.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:"))
  ;((t.UNDEFINED_INJECT_ANNOTATION = function (e) {
    return (
      "@inject called with undefined this could mean that the class " +
      e +
      " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."
    )
  }),
    (t.CIRCULAR_DEPENDENCY = "Circular dependency found:"),
    (t.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet."),
    (t.INVALID_BINDING_TYPE = "Invalid binding type:"),
    (t.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore."),
    (t.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!"),
    (t.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!"),
    (t.INVALID_TO_SELF_VALUE =
      "The toSelf function can only be applied when a constructor is used as service identifier"),
    (t.INVALID_DECORATOR_OPERATION =
      "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property."))
  ;((t.ARGUMENTS_LENGTH_MISMATCH = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    return (
      "The number of constructor arguments in the derived class " +
      e[0] +
      " must be >= than the number of constructor arguments of its base class."
    )
  }),
    (t.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT =
      "Invalid Container constructor argument. Container options must be an object."),
    (t.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE =
      "Invalid Container option. Default scope must be a string ('singleton' or 'transient')."),
    (t.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE =
      "Invalid Container option. Auto bind injectable must be a boolean"),
    (t.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK =
      "Invalid Container option. Skip base check must be a boolean"),
    (t.MULTIPLE_POST_CONSTRUCT_METHODS =
      "Cannot apply @postConstruct decorator multiple times in the same class"))
  t.POST_CONSTRUCT_ERROR = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    return "@postConstruct error in class " + e[0] + ": " + e[1]
  }
  ;((t.CIRCULAR_DEPENDENCY_IN_FACTORY = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
    return (
      "It looks like there is a circular dependency in one of the '" +
      e[0] +
      "' bindings. Please investigate bindings withservice identifier '" +
      e[1] +
      "'."
    )
  }),
    (t.STACK_OVERFLOW = "Maximum call stack size exceeded"))
}
