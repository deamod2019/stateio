/**
 * Restored source for Webpack Module #11812.
 *
 * Small debug drop zone used by SVG/file tooling.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { Component, createRef } = require("./preactRuntime")

const baseStyle = {
  border: " 2px dotted gray",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
}

class FileDropArea extends Component {
  constructor(props) {
    super(props)
    this.dropRef = createRef()
    this.dragCounter = 0

    this.handleDrag = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    this.handleDragIn = (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.dragCounter += 1

      if (event.dataTransfer?.items && event.dataTransfer.items.length > 0) {
        this.setState({ drag: true })
      }
    }

    this.handleDragOut = (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.dragCounter -= 1

      if (this.dragCounter === 0) this.setState({ drag: false })
    }

    this.handleDrop = (event) => {
      event.preventDefault()
      event.stopPropagation()
      this.setState({ drag: false })

      if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
        this.props.handleDrop(event.dataTransfer.files)
        event.dataTransfer.clearData()
        this.dragCounter = 0
      }
    }
  }

  componentDidMount() {
    const element = this.dropRef.current
    element.addEventListener("dragenter", this.handleDragIn)
    element.addEventListener("dragleave", this.handleDragOut)
    element.addEventListener("dragover", this.handleDrag)
    element.addEventListener("drop", this.handleDrop)
  }

  componentWillUnmount() {
    const element = this.dropRef.current
    element.removeEventListener("dragenter", this.handleDragIn)
    element.removeEventListener("dragleave", this.handleDragOut)
    element.removeEventListener("dragover", this.handleDrag)
    element.removeEventListener("drop", this.handleDrop)
  }

  render() {
    return jsxRuntime.jsx(
      "div",
      {
        style: { ...baseStyle, ...this.props.style },
        ref: this.dropRef,
        children: "Drop *.svg file here",
      },
    )
  }
}

module.exports = { FileDropArea }
