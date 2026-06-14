/**
 * Webpack Module #28421
 * @exports TargetTypeEnum, BindingTypeEnum, BindingScopeEnum
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.TargetTypeEnum = t.BindingTypeEnum = t.BindingScopeEnum = undefined))
  t.BindingScopeEnum = { Request: "Request", Singleton: "Singleton", Transient: "Transient" }
  t.BindingTypeEnum = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider",
  }
  t.TargetTypeEnum = {
    ClassProperty: "ClassProperty",
    ConstructorArgument: "ConstructorArgument",
    Variable: "Variable",
  }
}
