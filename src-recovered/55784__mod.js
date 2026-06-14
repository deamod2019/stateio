/**
 * Webpack Module #55784
 * (barrel / re‑export module)
 */
// (e/*module*/) =>
{
  ;("use strict")
  e.exports = (e, t = {}) => {
    if (!e) return
    const n = {
        key: [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ],
        q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
        parser: {
          strict:
            /^(?:([^:/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?))?((((?:[^?#/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
          loose:
            /^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#/]*\.[^?#/.]+(?:[?#]|$)))*\/?)?([^?#/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        },
      },
      i = n.parser[t.strictMode ? "strict" : "loose"].exec(e),
      r = {}
    let o = 14
    for (; o--; ) r[n.key[o]] = i[o] || ""
    return (
      (r[n.q.name] = {}),
      r[n.key[12]].replace(n.q.parser, function (e, t, i) {
        t && (r[n.q.name][t] = i)
      }),
      r
    )
  }
}
