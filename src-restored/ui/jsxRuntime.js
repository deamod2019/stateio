/**
 * Restored JSX runtime wrapper from Webpack Module #16584.
 */
"use strict"

const preact = require("./preactRuntime")

let vnodeId = 0

function jsx(type, props, key, self, source) {
  let ref
  const normalizedProps = {}

  for (const property in props) {
    if (property === "ref") ref = props[property]
    else normalizedProps[property] = props[property]
  }

  const vnode = {
    type,
    props: normalizedProps,
    key,
    ref,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: undefined,
    __c: null,
    __h: null,
    constructor: undefined,
    __v: --vnodeId,
    __source: source,
    __self: self,
  }

  const defaultProps = typeof type === "function" && type.defaultProps
  if (defaultProps) {
    for (const property in defaultProps) {
      if (normalizedProps[property] === undefined) normalizedProps[property] = defaultProps[property]
    }
  }

  if (preact.options.vnode) preact.options.vnode(vnode)
  return vnode
}

module.exports = {
  Fragment: preact.Fragment,
  jsx,
  jsxDEV: jsx,
  jsxs: jsx,
}
