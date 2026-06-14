/**
 * Webpack Module #11812
 * @exports FileDropArea
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.FileDropArea = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(6400) /* 6400__mod */,
    a = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.dropRef = (0, o.createRef)()),
          (t.dragCounter = 0),
          (t.handleDrag = function (e) {
            ;(e.preventDefault(), e.stopPropagation())
          }),
          (t.handleDragIn = function (e) {
            var n
            ;(e.preventDefault(),
              e.stopPropagation(),
              t.dragCounter++,
              (null === (n = e.dataTransfer) || undefined === n ? undefined : n.items) &&
                e.dataTransfer.items.length > 0 &&
                t.setState({ drag: true }))
          }),
          (t.handleDragOut = function (e) {
            ;(e.preventDefault(),
              e.stopPropagation(),
              t.dragCounter--,
              0 === t.dragCounter && t.setState({ drag: false }))
          }),
          (t.handleDrop = function (e) {
            var n
            ;(e.preventDefault(),
              e.stopPropagation(),
              t.setState({ drag: false }),
              (null === (n = e.dataTransfer) || undefined === n ? undefined : n.files) &&
                e.dataTransfer.files.length > 0 &&
                (t.props.handleDrop(e.dataTransfer.files),
                e.dataTransfer.clearData(),
                (t.dragCounter = 0)))
          }),
          t
        )
      }
      return (
        i.__extends(t, e),
        (t.prototype.componentDidMount = function () {
          var e = this.dropRef.current
          ;(e.addEventListener("dragenter", this.handleDragIn),
            e.addEventListener("dragleave", this.handleDragOut),
            e.addEventListener("dragover", this.handleDrag),
            e.addEventListener("drop", this.handleDrop))
        }),
        (t.prototype.componentWillUnmount = function () {
          var e = this.dropRef.current
          ;(e.removeEventListener("dragenter", this.handleDragIn),
            e.removeEventListener("dragleave", this.handleDragOut),
            e.removeEventListener("dragover", this.handleDrag),
            e.removeEventListener("drop", this.handleDrop))
        }),
        (t.prototype.render = function () {
          return (0, r.jsx)(
            "div",
            i.__assign(
              {
                style: i.__assign(
                  {
                    border: " 2px dotted gray",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                  },
                  this.props.style,
                ),
                ref: this.dropRef,
              },
              { children: "Drop *.svg file here" },
            ),
          )
        }),
        t
      )
    })(o.Component)
  t.FileDropArea = a
}
