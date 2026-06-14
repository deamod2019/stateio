"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const TARGETS = [
  "../src-cjs/11812_FileDropArea.js",
  "../src-restored/ui/FileDropArea.js",
]

const { FileDropArea: OriginalFileDropArea } = require("../src-cjs/11812_FileDropArea.js")
const { FileDropArea: RestoredFileDropArea } = require("../src-restored/ui/FileDropArea.js")

compareScenario("file drop area drag lifecycle and render output", OriginalFileDropArea, RestoredFileDropArea)

console.log(
  JSON.stringify(
    {
      module: "FileDropArea",
      scenarios: 1,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareScenario(name, OriginalClass, RestoredClass) {
  const original = exercise(OriginalClass)
  const restored = exercise(RestoredClass)
  assert.deepEqual(restored, original, name)
}

function exercise(Klass) {
  deleteTargetModules()
  const records = []
  const props = {
    style: { color: "yellow", margin: "2px" },
    handleDrop(files) {
      records.push(["handleDrop", files.length, files[0]])
    },
  }
  const instance = new Klass(props)
  instance.setState = (state) => {
    records.push(["setState", state])
  }
  const element = createElement(records)
  instance.dropRef.current = element

  const vnode = normalizeVNode(instance.render())
  instance.componentDidMount()

  const dragIn = createDragEvent({ items: ["item"], files: [], records })
  instance.handleDragIn(dragIn)
  const dragOut = createDragEvent({ items: [], files: [], records })
  instance.handleDragOut(dragOut)
  const drop = createDragEvent({ items: [], files: ["shape.svg"], records })
  instance.handleDrop(drop)
  const dragOver = createDragEvent({ items: [], files: [], records })
  instance.handleDrag(dragOver)

  instance.componentWillUnmount()

  return {
    vnode,
    records,
    dragCounter: instance.dragCounter,
  }
}

function createElement(records) {
  return {
    addEventListener(type, handler) {
      records.push(["addEventListener", type, typeof handler])
    },
    removeEventListener(type, handler) {
      records.push(["removeEventListener", type, typeof handler])
    },
  }
}

function createDragEvent({ items, files, records }) {
  return {
    dataTransfer: {
      items,
      files,
      clearData() {
        records.push(["clearData"])
      },
    },
    preventDefault() {
      records.push(["preventDefault"])
    },
    stopPropagation() {
      records.push(["stopPropagation"])
    },
  }
}

function normalizeVNode(vnode) {
  return {
    type: vnode.type,
    key: vnode.key ?? null,
    props: normalizeProps(vnode.props || {}),
  }
}

function normalizeProps(props) {
  const result = {}
  for (const [key, value] of Object.entries(props)) {
    if (key === "ref") result.ref = "ref"
    else result[key] = value
  }
  return result
}

function deleteTargetModules() {
  for (const target of TARGETS) delete require.cache[require.resolve(target)]
}
