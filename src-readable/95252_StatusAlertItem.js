/**
 * Webpack Module #95252
 * @exports StatusAlertItem
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.StatusAlertItem = t.defaultAlertOptions = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */,
    o = n(6400) /* 6400__mod */,
    a = n(54768) /* 54768__mod */,
    s = n(99061) /* 99061_StatusAlertService */
  t.defaultAlertOptions = {
    autoHide: true,
    autoHideTime: 3500,
    withIcon: true,
    withCloseIcon: true,
    removeAllBeforeShow: true,
  }
  var u = (function (e) {
    function n(t) {
      var n = e.call(this, t) || this
      return (
        (n.showAlert = function () {
          return i.__awaiter(n, undefined, undefined, function () {
            var e = this
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    this.statusAlert && this.statusAlert.classList.add("is-transparent"),
                    [
                      4,
                      setTimeout(function () {
                        e.statusAlert && e.statusAlert.classList.remove("is-transparent")
                      }),
                    ]
                  )
                case 1:
                  return (t.sent(), [2])
              }
            })
          })
        }),
        (n.removeAlert = function () {
          return i.__awaiter(n, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return this.statusAlert
                    ? (this.statusAlert.classList.add("is-transparent"),
                      [4, setTimeout(this.removeAlertCallbackSubmit, 800)])
                    : [3, 2]
                case 1:
                  ;(e.sent(), (e.label = 2))
                case 2:
                  return [2]
              }
            })
          })
        }),
        (n.removeAlertCallbackSubmit = function () {
          return s.StatusAlertService.removeAlert(n.props.alert.id)
        }),
        n
      )
    }
    return (
      i.__extends(n, e),
      (n.prototype.componentDidMount = function () {
        ;(this.showAlert(),
          this.alertOptions.autoHide &&
            setTimeout(this.removeAlert, this.alertOptions.autoHideTime))
      }),
      (n.prototype.render = function () {
        var e = this
        return (0, r.jsx)(
          "div",
          i.__assign(
            {
              className: "status-alert is-transparent",
              ref: function (t) {
                return (e.statusAlert = t)
              },
            },
            {
              children: (0, r.jsx)(
                "div",
                i.__assign(
                  { className: "status-alert__padding-wrapper" },
                  {
                    children: (0, r.jsxs)(
                      "div",
                      i.__assign(
                        { className: "status-alert__box ".concat(this.boxClassName) },
                        {
                          children: [
                            this.alertOptions.withCloseIcon &&
                              (0, r.jsx)(
                                "div",
                                i.__assign(
                                  { className: "status-alert__icon-on-right-holder" },
                                  {
                                    children: (0, r.jsx)("div", {
                                      className: "status-alert__icon is-close-icon",
                                      onClick: this.removeAlert,
                                    }),
                                  },
                                ),
                              ),
                            this.alertOptions.withIcon &&
                              (0, r.jsx)(
                                "div",
                                i.__assign(
                                  { className: "status-alert__icon-holder" },
                                  {
                                    children: (0, r.jsx)("div", {
                                      className: "status-alert__icon ".concat(this.alertIcon),
                                    }),
                                  },
                                ),
                              ),
                            (0, r.jsx)(
                              "div",
                              i.__assign(
                                { className: "status-alert__text" },
                                { children: this.alertText },
                              ),
                            ),
                          ],
                        },
                      ),
                    ),
                  },
                ),
              ),
            },
          ),
        )
      }),
      Object.defineProperty(n.prototype, "boxClassName", {
        get: function () {
          return (0, a.boxClassName)(this.props.alert.type)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(n.prototype, "alertOptions", {
        get: function () {
          return i.__assign(i.__assign({}, t.defaultAlertOptions), this.props.alert.options)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(n.prototype, "alertIcon", {
        get: function () {
          return (0, a.alertIcon)(this.props.alert.type)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(n.prototype, "alertText", {
        get: function () {
          return "object" != typeof this.props.alert.message || this.props.alert.message.nodeName
            ? this.props.alert.message
            : JSON.stringify(this.props.alert.message)
        },
        enumerable: false,
        configurable: true,
      }),
      n
    )
  })(o.Component)
  t.StatusAlertItem = u
}
