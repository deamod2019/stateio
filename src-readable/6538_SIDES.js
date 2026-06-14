/**
 * Webpack Module #6538
 * @exports SIDES, SVG_SIZE, TYPES, MIME_TYPES, EMPTY, WHITE, BATCHABLE_SIZE
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(n.r(t),
    n.d(t, {
      ALPHA_MODES: () => G,
      AbstractBatchRenderer: () => Ri,
      AbstractRenderer: () => Si,
      AccessibilityManager: () => _t,
      AnimatedSprite: () => Ja,
      AppLoaderPlugin: () => _r,
      Application: () => Gi,
      Attribute: () => nn,
      BLEND_MODES: () => O,
      BUFFER_BITS: () => P,
      BasePrepare: () => Lo,
      BaseRenderTexture: () => qt,
      BaseTexture: () => Nt,
      BatchDrawCall: () => Mi,
      BatchGeometry: () => Ni,
      BatchPluginFactory: () => Fi,
      BatchRenderer: () => Ui,
      BatchShaderGenerator: () => ki,
      BatchTextureArray: () => Pi,
      BitmapFont: () => ia,
      BitmapFontData: () => Ko,
      BitmapFontLoader: () => sa,
      BitmapText: () => aa,
      Bounds: () => ot,
      Buffer: () => on,
      CLEAR_MODES: () => j,
      CanvasExtract: () => bs,
      CanvasGraphicsRenderer: () => gs,
      CanvasMeshRenderer: () => ps,
      CanvasPrepare: () => Ts,
      CanvasRenderer: () => cs,
      CanvasSpriteRenderer: () => ys,
      Circle: () => Ve,
      Container: () => dt,
      CountLimiter: () => vo,
      DEG_TO_RAD: () => je,
      DRAW_MODES: () => R,
      DisplayObject: () => ut,
      ENV: () => I,
      Ellipse: () => Ze,
      Extract: () => Vi,
      FORMATS: () => k,
      FillStyle: () => Tr,
      Filter: () => ti,
      FilterState: () => gn,
      Framebuffer: () => Xt,
      GC_MODES: () => H,
      GLFramebuffer: () => wn,
      GLProgram: () => _i,
      GLTexture: () => bi,
      GRAPHICS_CURVES: () => xr,
      Geometry: () => dn,
      Graphics: () => Qr,
      GraphicsData: () => Yr,
      GraphicsGeometry: () => qr,
      IGLUniformData: () => fi,
      InteractionData: () => yt,
      InteractionEvent: () => bt,
      InteractionManager: () => Lt,
      InteractionTrackingData: () => wt,
      LINE_CAP: () => yr,
      LINE_JOIN: () => vr,
      LineStyle: () => Kr,
      Loader: () => fr,
      LoaderResource: () => dr,
      MASK_TYPES: () => Z,
      MIPMAP_MODES: () => U,
      MSAA_QUALITY: () => z,
      MaskData: () => An,
      Matrix: () => qe,
      Mesh: () => Yo,
      MeshBatchUvs: () => Vo,
      MeshGeometry: () => Xo,
      MeshMaterial: () => Wo,
      NineSlicePlane: () => Ka,
      ObjectRenderer: () => vn,
      ObservablePoint: () => Xe,
      PI_2: () => Ue,
      PRECISION: () => V,
      ParticleContainer: () => Cr,
      ParticleRenderer: () => wr,
      PlaneGeometry: () => za,
      Point: () => We,
      Polygon: () => ze,
      Prepare: () => Mo,
      Program: () => Jn,
      Quad: () => hn,
      QuadUv: () => pn,
      RAD_TO_DEG: () => Ge,
      RENDERER_TYPE: () => M,
      Rectangle: () => He,
      RenderTexture: () => en,
      RenderTexturePool: () => tn,
      Renderer: () => Li,
      RopeGeometry: () => Ya,
      RoundedRectangle: () => Ye,
      Runner: () => Et,
      SCALE_MODES: () => B,
      SHAPES: () => Fe,
      Shader: () => Qn,
      SimpleMesh: () => qa,
      SimplePlane: () => Xa,
      SimpleRope: () => Wa,
      Sprite: () => ro,
      SpriteMaskFilter: () => ri,
      Spritesheet: () => Oo,
      SpritesheetLoader: () => Ro,
      State: () => ei,
      System: () => Yt,
      TARGETS: () => N,
      TEXT_GRADIENT: () => to,
      TYPES: () => D,
      TemporaryDisplayObject: () => lt,
      Text: () => go,
      TextMetrics: () => po,
      TextStyle: () => uo,
      Texture: () => Jt,
      TextureLoader: () => pr,
      TextureMatrix: () => ii,
      TextureUvs: () => Kt,
      Ticker: () => mt,
      TickerPlugin: () => vt,
      TilingSprite: () => Bo,
      TilingSpriteRenderer: () => Go,
      TimeLimiter: () => Po,
      Transform: () => rt,
      UPDATE_PRIORITY: () => pt,
      UniformGroup: () => _n,
      VERSION: () => is,
      ViewableBuffer: () => Oi,
      WRAP_MODES: () => F,
      accessibleTarget: () => ht,
      autoDetectRenderer: () => Ei,
      canvasUtils: () => ds,
      checkMaxIfStatementsInShader: () => qn,
      defaultFilterVertex: () => Ii,
      defaultVertex: () => Ai,
      filters: () => rs,
      graphicsUtils: () => zr,
      groupD8: () => it,
      interactiveTarget: () => Tt,
      isMobile: () => A,
      resources: () => zt,
      settings: () => Y,
      systems: () => xi,
      uniformParsers: () => Vn,
      useDeprecated: () => ns,
      utils: () => i,
    }))
  var i = {}
  ;(n.r(i),
    n.d(i, {
      BaseTextureCache: () => Ae,
      CanvasRenderTarget: () => Pe,
      DATA_URI: () => ke,
      EventEmitter: () => X(),
      ProgramCache: () => Le,
      TextureCache: () => Ee,
      clearTextureCache: () => Me,
      correctBlendMode: () => le,
      createIndicesForQuads: () => pe,
      decomposeDataUri: () => Ne,
      deprecation: () => Se,
      destroyTextureCache: () => Ie,
      determineCrossOrigin: () => De,
      earcut: () => K(),
      getBufferType: () => fe,
      getResolutionOfUrl: () => Be,
      hex2rgb: () => re,
      hex2string: () => oe,
      interleaveTypedArrays: () => ge,
      isMobile: () => A,
      isPow2: () => ve,
      isWebGLSupported: () => ie,
      log2: () => ye,
      nextPow2: () => me,
      premultiplyBlendMode: () => ue,
      premultiplyRgba: () => ce,
      premultiplyTint: () => de,
      premultiplyTintToRgba: () => he,
      removeItems: () => Ce,
      rgb2hex: () => se,
      sayHello: () => ne,
      sign: () => be,
      skipHello: () => te,
      string2hex: () => ae,
      trimCanvas: () => Oe,
      uid: () => xe,
      url: () => $,
    }))
  var r = n(66713) /* 66713_Promise */,
    o = n(27418) /* 27418__mod */,
    a = n.n(o)
  ;(window.Promise || (window.Promise = r.Polyfill), Object.assign || (Object.assign = a()))
  if (
    ((Date.now && Date.prototype.getTime) ||
      (Date.now = function () {
        return new Date().getTime()
      }),
    !window.performance || !window.performance.now)
  ) {
    var s = Date.now()
    ;(window.performance || (window.performance = {}),
      (window.performance.now = function () {
        return Date.now() - s
      }))
  }
  for (
    var u = Date.now(), l = ["ms", "moz", "webkit", "o"], c = 0;
    c < l.length && !window.requestAnimationFrame;
    ++c
  ) {
    var d = l[c]
    ;((window.requestAnimationFrame = window[d + "RequestAnimationFrame"]),
      (window.cancelAnimationFrame =
        window[d + "CancelAnimationFrame"] || window[d + "CancelRequestAnimationFrame"]))
  }
  ;(window.requestAnimationFrame ||
    (window.requestAnimationFrame = function (e) {
      if ("function" != typeof e) throw new TypeError(e + "is not a function")
      var t = Date.now(),
        n = 16 + u - t
      return (
        n < 0 && (n = 0),
        (u = t),
        window.setTimeout(function () {
          ;((u = Date.now()), e(performance.now()))
        }, n)
      )
    }),
    window.cancelAnimationFrame ||
      (window.cancelAnimationFrame = function (e) {
        return clearTimeout(e)
      }),
    Math.sign ||
      (Math.sign = function (e) {
        return 0 === (e = Number(e)) || isNaN(e) ? e : e > 0 ? 1 : -1
      }),
    Number.isInteger ||
      (Number.isInteger = function (e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
      }),
    window.ArrayBuffer || (window.ArrayBuffer = Array),
    window.Float32Array || (window.Float32Array = Array),
    window.Uint32Array || (window.Uint32Array = Array),
    window.Uint16Array || (window.Uint16Array = Array),
    window.Uint8Array || (window.Uint8Array = Array),
    window.Int32Array || (window.Int32Array = Array))
  var h = /iPhone/i,
    p = /iPod/i,
    f = /iPad/i,
    _ = /\biOS-universal(?:.+)Mac\b/i,
    g = /\bAndroid(?:.+)Mobile\b/i,
    m = /Android/i,
    v = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
    y = /Silk/i,
    C = /Windows Phone/i,
    b = /\bWindows(?:.+)ARM\b/i,
    w = /BlackBerry/i,
    x = /BB10/i,
    T = /Opera Mini/i,
    S = /\b(CriOS|Chrome)(?:.+)Mobile/i,
    L = /Mobile(?:.+)Firefox\b/i,
    E = function (e) {
      return (
        undefined !== e &&
        "MacIntel" === e.platform &&
        "number" == typeof e.maxTouchPoints &&
        e.maxTouchPoints > 1 &&
        "undefined" == typeof MSStream
      )
    }
  var A = (function (e) {
    var t = { userAgent: "", platform: "", maxTouchPoints: 0 }
    e || "undefined" == typeof navigator
      ? "string" == typeof e
        ? (t.userAgent = e)
        : e &&
          e.userAgent &&
          (t = {
            userAgent: e.userAgent,
            platform: e.platform,
            maxTouchPoints: e.maxTouchPoints || 0,
          })
      : (t = {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          maxTouchPoints: navigator.maxTouchPoints || 0,
        })
    var n = t.userAgent,
      i = n.split("[FBAN")
    ;(undefined !== i[1] && (n = i[0]), undefined !== (i = n.split("Twitter"))[1] && (n = i[0]))
    var r = (function (e) {
        return function (t) {
          return t.test(e)
        }
      })(n),
      o = {
        apple: {
          phone: r(h) && !r(C),
          ipod: r(p),
          tablet: !r(h) && (r(f) || E(t)) && !r(C),
          universal: r(_),
          device: (r(h) || r(p) || r(f) || r(_) || E(t)) && !r(C),
        },
        amazon: { phone: r(v), tablet: !r(v) && r(y), device: r(v) || r(y) },
        android: {
          phone: (!r(C) && r(v)) || (!r(C) && r(g)),
          tablet: !r(C) && !r(v) && !r(g) && (r(y) || r(m)),
          device: (!r(C) && (r(v) || r(y) || r(g) || r(m))) || r(/\bokhttp\b/i),
        },
        windows: { phone: r(C), tablet: r(b), device: r(C) || r(b) },
        other: {
          blackberry: r(w),
          blackberry10: r(x),
          opera: r(T),
          firefox: r(L),
          chrome: r(S),
          device: r(w) || r(x) || r(T) || r(L) || r(S),
        },
        any: false,
        phone: false,
        tablet: false,
      }
    return (
      (o.any = o.apple.device || o.android.device || o.windows.device || o.other.device),
      (o.phone = o.apple.phone || o.android.phone || o.windows.phone),
      (o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet),
      o
    )
  })(window.navigator)
  var I,
    M,
    P,
    O,
    R,
    k,
    N,
    D,
    B,
    F,
    U,
    G,
    j,
    H,
    V,
    Z,
    z,
    Y = {
      MIPMAP_TEXTURES: 1,
      ANISOTROPIC_LEVEL: 0,
      RESOLUTION: 1,
      FILTER_RESOLUTION: 1,
      SPRITE_MAX_TEXTURES: (function (e) {
        var t = true
        if (A.tablet || A.phone) {
          var n
          if (A.apple.device)
            if ((n = navigator.userAgent.match(/OS (\d+)_(\d+)?/)))
              parseInt(n[1], 10) < 11 && (t = false)
          if (A.android.device)
            if ((n = navigator.userAgent.match(/Android\s([0-9.]*)/)))
              parseInt(n[1], 10) < 7 && (t = false)
        }
        return t ? e : 4
      })(32),
      SPRITE_BATCH_SIZE: 4096,
      RENDER_OPTIONS: {
        view: null,
        antialias: false,
        autoDensity: false,
        transparent: false,
        backgroundColor: 0,
        clearBeforeRender: true,
        preserveDrawingBuffer: false,
        width: 800,
        height: 600,
        legacy: false,
      },
      GC_MODE: 0,
      GC_MAX_IDLE: 3600,
      GC_MAX_CHECK_COUNT: 600,
      WRAP_MODE: 33071,
      SCALE_MODE: 1,
      PRECISION_VERTEX: "highp",
      PRECISION_FRAGMENT: A.apple.device ? "highp" : "mediump",
      CAN_UPLOAD_SAME_BUFFER: !A.apple.device,
      CREATE_IMAGE_BITMAP: false,
      ROUND_PIXELS: false,
    },
    W = n(18718) /* 18718__mod */,
    X = n.n(W),
    q = n(9187) /* 9187__mod */,
    K = n.n(q),
    $ = n(8575) /* 8575_Url */
  ;(!(function (e) {
    ;((e[(e.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
      (e[(e.WEBGL = 1)] = "WEBGL"),
      (e[(e.WEBGL2 = 2)] = "WEBGL2"))
  })(I || (I = {})),
    (function (e) {
      ;((e[(e.UNKNOWN = 0)] = "UNKNOWN"),
        (e[(e.WEBGL = 1)] = "WEBGL"),
        (e[(e.CANVAS = 2)] = "CANVAS"))
    })(M || (M = {})),
    (function (e) {
      ;((e[(e.COLOR = 16384)] = "COLOR"),
        (e[(e.DEPTH = 256)] = "DEPTH"),
        (e[(e.STENCIL = 1024)] = "STENCIL"))
    })(P || (P = {})),
    (function (e) {
      ;((e[(e.NORMAL = 0)] = "NORMAL"),
        (e[(e.ADD = 1)] = "ADD"),
        (e[(e.MULTIPLY = 2)] = "MULTIPLY"),
        (e[(e.SCREEN = 3)] = "SCREEN"),
        (e[(e.OVERLAY = 4)] = "OVERLAY"),
        (e[(e.DARKEN = 5)] = "DARKEN"),
        (e[(e.LIGHTEN = 6)] = "LIGHTEN"),
        (e[(e.COLOR_DODGE = 7)] = "COLOR_DODGE"),
        (e[(e.COLOR_BURN = 8)] = "COLOR_BURN"),
        (e[(e.HARD_LIGHT = 9)] = "HARD_LIGHT"),
        (e[(e.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
        (e[(e.DIFFERENCE = 11)] = "DIFFERENCE"),
        (e[(e.EXCLUSION = 12)] = "EXCLUSION"),
        (e[(e.HUE = 13)] = "HUE"),
        (e[(e.SATURATION = 14)] = "SATURATION"),
        (e[(e.COLOR = 15)] = "COLOR"),
        (e[(e.LUMINOSITY = 16)] = "LUMINOSITY"),
        (e[(e.NORMAL_NPM = 17)] = "NORMAL_NPM"),
        (e[(e.ADD_NPM = 18)] = "ADD_NPM"),
        (e[(e.SCREEN_NPM = 19)] = "SCREEN_NPM"),
        (e[(e.NONE = 20)] = "NONE"),
        (e[(e.SRC_OVER = 0)] = "SRC_OVER"),
        (e[(e.SRC_IN = 21)] = "SRC_IN"),
        (e[(e.SRC_OUT = 22)] = "SRC_OUT"),
        (e[(e.SRC_ATOP = 23)] = "SRC_ATOP"),
        (e[(e.DST_OVER = 24)] = "DST_OVER"),
        (e[(e.DST_IN = 25)] = "DST_IN"),
        (e[(e.DST_OUT = 26)] = "DST_OUT"),
        (e[(e.DST_ATOP = 27)] = "DST_ATOP"),
        (e[(e.ERASE = 26)] = "ERASE"),
        (e[(e.SUBTRACT = 28)] = "SUBTRACT"),
        (e[(e.XOR = 29)] = "XOR"))
    })(O || (O = {})),
    (function (e) {
      ;((e[(e.POINTS = 0)] = "POINTS"),
        (e[(e.LINES = 1)] = "LINES"),
        (e[(e.LINE_LOOP = 2)] = "LINE_LOOP"),
        (e[(e.LINE_STRIP = 3)] = "LINE_STRIP"),
        (e[(e.TRIANGLES = 4)] = "TRIANGLES"),
        (e[(e.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
        (e[(e.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN"))
    })(R || (R = {})),
    (function (e) {
      ;((e[(e.RGBA = 6408)] = "RGBA"),
        (e[(e.RGB = 6407)] = "RGB"),
        (e[(e.ALPHA = 6406)] = "ALPHA"),
        (e[(e.LUMINANCE = 6409)] = "LUMINANCE"),
        (e[(e.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
        (e[(e.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
        (e[(e.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL"))
    })(k || (k = {})),
    (function (e) {
      ;((e[(e.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
        (e[(e.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
        (e[(e.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
        (e[(e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] = "TEXTURE_CUBE_MAP_POSITIVE_X"),
        (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] = "TEXTURE_CUBE_MAP_NEGATIVE_X"),
        (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] = "TEXTURE_CUBE_MAP_POSITIVE_Y"),
        (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] = "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
        (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] = "TEXTURE_CUBE_MAP_POSITIVE_Z"),
        (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"))
    })(N || (N = {})),
    (function (e) {
      ;((e[(e.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
        (e[(e.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
        (e[(e.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
        (e[(e.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
        (e[(e.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
        (e[(e.FLOAT = 5126)] = "FLOAT"),
        (e[(e.HALF_FLOAT = 36193)] = "HALF_FLOAT"))
    })(D || (D = {})),
    (function (e) {
      ;((e[(e.NEAREST = 0)] = "NEAREST"), (e[(e.LINEAR = 1)] = "LINEAR"))
    })(B || (B = {})),
    (function (e) {
      ;((e[(e.CLAMP = 33071)] = "CLAMP"),
        (e[(e.REPEAT = 10497)] = "REPEAT"),
        (e[(e.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT"))
    })(F || (F = {})),
    (function (e) {
      ;((e[(e.OFF = 0)] = "OFF"), (e[(e.POW2 = 1)] = "POW2"), (e[(e.ON = 2)] = "ON"))
    })(U || (U = {})),
    (function (e) {
      ;((e[(e.NPM = 0)] = "NPM"),
        (e[(e.UNPACK = 1)] = "UNPACK"),
        (e[(e.PMA = 2)] = "PMA"),
        (e[(e.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
        (e[(e.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
        (e[(e.PREMULTIPLY_ALPHA = 2)] = "PREMULTIPLY_ALPHA"))
    })(G || (G = {})),
    (function (e) {
      ;((e[(e.NO = 0)] = "NO"),
        (e[(e.YES = 1)] = "YES"),
        (e[(e.AUTO = 2)] = "AUTO"),
        (e[(e.BLEND = 0)] = "BLEND"),
        (e[(e.CLEAR = 1)] = "CLEAR"),
        (e[(e.BLIT = 2)] = "BLIT"))
    })(j || (j = {})),
    (function (e) {
      ;((e[(e.AUTO = 0)] = "AUTO"), (e[(e.MANUAL = 1)] = "MANUAL"))
    })(H || (H = {})),
    (function (e) {
      ;((e.LOW = "lowp"), (e.MEDIUM = "mediump"), (e.HIGH = "highp"))
    })(V || (V = {})),
    (function (e) {
      ;((e[(e.NONE = 0)] = "NONE"),
        (e[(e.SCISSOR = 1)] = "SCISSOR"),
        (e[(e.STENCIL = 2)] = "STENCIL"),
        (e[(e.SPRITE = 3)] = "SPRITE"))
    })(Z || (Z = {})),
    (function (e) {
      ;((e[(e.NONE = 0)] = "NONE"),
        (e[(e.LOW = 2)] = "LOW"),
        (e[(e.MEDIUM = 4)] = "MEDIUM"),
        (e[(e.HIGH = 8)] = "HIGH"))
    })(z || (z = {})),
    (Y.RETINA_PREFIX = /@([0-9\.]+)x/),
    (Y.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = true))
  var J,
    Q = false,
    ee = "5.3.12"
  function te() {
    Q = true
  }
  function ne(e) {
    var t
    if (!Q) {
      if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
        var n = [
          "\n %c %c %c PixiJS " +
            ee +
            " - ✰ " +
            e +
            " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n",
          "background: #ff66a5; padding:5px 0;",
          "background: #ff66a5; padding:5px 0;",
          "color: #ff66a5; background: #030307; padding:5px 0;",
          "background: #ff66a5; padding:5px 0;",
          "background: #ffc3dc; padding:5px 0;",
          "background: #ff66a5; padding:5px 0;",
          "color: #ff2424; background: #fff; padding:5px 0;",
          "color: #ff2424; background: #fff; padding:5px 0;",
          "color: #ff2424; background: #fff; padding:5px 0;",
        ]
        ;(t = window.console).log.apply(t, n)
      } else
        window.console &&
          window.console.log("PixiJS " + ee + " - " + e + " - http://www.pixijs.com/")
      Q = true
    }
  }
  function ie() {
    return (
      undefined === J &&
        (J = (function () {
          var e = { stencil: true, failIfMajorPerformanceCaveat: Y.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT }
          try {
            if (!window.WebGLRenderingContext) return false
            var t = document.createElement("canvas"),
              n = t.getContext("webgl", e) || t.getContext("experimental-webgl", e),
              i = !(!n || !n.getContextAttributes().stencil)
            if (n) {
              var r = n.getExtension("WEBGL_lose_context")
              r && r.loseContext()
            }
            return ((n = null), i)
          } catch (e) {
            return false
          }
        })()),
      J
    )
  }
  function re(e, t) {
    return (
      undefined === t && (t = []),
      (t[0] = ((e >> 16) & 255) / 255),
      (t[1] = ((e >> 8) & 255) / 255),
      (t[2] = (255 & e) / 255),
      t
    )
  }
  function oe(e) {
    var t = e.toString(16)
    return "#" + (t = "000000".substr(0, 6 - t.length) + t)
  }
  function ae(e) {
    return ("string" == typeof e && "#" === e[0] && (e = e.substr(1)), parseInt(e, 16))
  }
  function se(e) {
    return ((255 * e[0]) << 16) + ((255 * e[1]) << 8) + ((255 * e[2]) | 0)
  }
  var ue = (function () {
    for (var e = [], t = [], n = 0; n < 32; n++) ((e[n] = n), (t[n] = n))
    ;((e[O.NORMAL_NPM] = O.NORMAL),
      (e[O.ADD_NPM] = O.ADD),
      (e[O.SCREEN_NPM] = O.SCREEN),
      (t[O.NORMAL] = O.NORMAL_NPM),
      (t[O.ADD] = O.ADD_NPM),
      (t[O.SCREEN] = O.SCREEN_NPM))
    var i = []
    return (i.push(t), i.push(e), i)
  })()
  function le(e, t) {
    return ue[t ? 1 : 0][e]
  }
  function ce(e, t, n, i) {
    return (
      (n = n || new Float32Array(4)),
      i || undefined === i
        ? ((n[0] = e[0] * t), (n[1] = e[1] * t), (n[2] = e[2] * t))
        : ((n[0] = e[0]), (n[1] = e[1]), (n[2] = e[2])),
      (n[3] = t),
      n
    )
  }
  function de(e, t) {
    if (1 === t) return ((255 * t) << 24) + e
    if (0 === t) return 0
    var n = (e >> 16) & 255,
      i = (e >> 8) & 255,
      r = 255 & e
    return (
      ((255 * t) << 24) +
      ((n = (n * t + 0.5) | 0) << 16) +
      ((i = (i * t + 0.5) | 0) << 8) +
      (r = (r * t + 0.5) | 0)
    )
  }
  function he(e, t, n, i) {
    return (
      ((n = n || new Float32Array(4))[0] = ((e >> 16) & 255) / 255),
      (n[1] = ((e >> 8) & 255) / 255),
      (n[2] = (255 & e) / 255),
      (i || undefined === i) && ((n[0] *= t), (n[1] *= t), (n[2] *= t)),
      (n[3] = t),
      n
    )
  }
  function pe(e, t) {
    undefined === t && (t = null)
    var n = 6 * e
    if ((t = t || new Uint16Array(n)).length !== n)
      throw new Error("Out buffer length is incorrect, got " + t.length + " and expected " + n)
    for (var i = 0, r = 0; i < n; i += 6, r += 4)
      ((t[i + 0] = r + 0),
        (t[i + 1] = r + 1),
        (t[i + 2] = r + 2),
        (t[i + 3] = r + 0),
        (t[i + 4] = r + 2),
        (t[i + 5] = r + 3))
    return t
  }
  function fe(e) {
    if (4 === e.BYTES_PER_ELEMENT)
      return e instanceof Float32Array
        ? "Float32Array"
        : e instanceof Uint32Array
          ? "Uint32Array"
          : "Int32Array"
    if (2 === e.BYTES_PER_ELEMENT) {
      if (e instanceof Uint16Array) return "Uint16Array"
    } else if (1 === e.BYTES_PER_ELEMENT && e instanceof Uint8Array) return "Uint8Array"
    return null
  }
  var _e = { Float32Array, Uint32Array, Int32Array, Uint8Array }
  function ge(e, t) {
    for (var n = 0, i = 0, r = {}, o = 0; o < e.length; o++) ((i += t[o]), (n += e[o].length))
    var a = new ArrayBuffer(4 * n),
      s = null,
      u = 0
    for (o = 0; o < e.length; o++) {
      var l = t[o],
        c = e[o],
        d = fe(c)
      ;(r[d] || (r[d] = new _e[d](a)), (s = r[d]))
      for (var h = 0; h < c.length; h++) {
        s[((h / l) | 0) * i + u + (h % l)] = c[h]
      }
      u += l
    }
    return new Float32Array(a)
  }
  function me(e) {
    return (
      (e += 0 === e ? 1 : 0),
      --e,
      (e |= e >>> 1),
      (e |= e >>> 2),
      (e |= e >>> 4),
      (e |= e >>> 8),
      (e |= e >>> 16) + 1
    )
  }
  function ve(e) {
    return !(e & (e - 1) || !e)
  }
  function ye(e) {
    var t = (e > 65535 ? 1 : 0) << 4,
      n = ((e >>>= t) > 255 ? 1 : 0) << 3
    return (
      (t |= n),
      (t |= n = ((e >>>= n) > 15 ? 1 : 0) << 2),
      (t |= n = ((e >>>= n) > 3 ? 1 : 0) << 1) | ((e >>>= n) >> 1)
    )
  }
  function Ce(e, t, n) {
    var i,
      r = e.length
    if (!(t >= r || 0 === n)) {
      var o = r - (n = t + n > r ? r - t : n)
      for (i = t; i < o; ++i) e[i] = e[i + n]
      e.length = o
    }
  }
  function be(e) {
    return 0 === e ? 0 : e < 0 ? -1 : 1
  }
  var we = 0
  function xe() {
    return ++we
  }
  var Te = {}
  function Se(e, t, n) {
    if ((undefined === n && (n = 3), !Te[t])) {
      var i = new Error().stack
      ;(undefined === i
        ? console.warn("PixiJS Deprecation Warning: ", t + "\nDeprecated since v" + e)
        : ((i = i.split("\n").splice(n).join("\n")),
          console.groupCollapsed
            ? (console.groupCollapsed(
                "%cPixiJS Deprecation Warning: %c%s",
                "color:#614108;background:#fffbe6",
                "font-weight:normal;color:#614108;background:#fffbe6",
                t + "\nDeprecated since v" + e,
              ),
              console.warn(i),
              console.groupEnd())
            : (console.warn("PixiJS Deprecation Warning: ", t + "\nDeprecated since v" + e),
              console.warn(i))),
        (Te[t] = true))
    }
  }
  var Le = {},
    Ee = Object.create(null),
    Ae = Object.create(null)
  function Ie() {
    var e
    for (e in Ee) Ee[e].destroy()
    for (e in Ae) Ae[e].destroy()
  }
  function Me() {
    var e
    for (e in Ee) delete Ee[e]
    for (e in Ae) delete Ae[e]
  }
  var Pe = (function () {
    function e(e, t, n) {
      ;((this.canvas = document.createElement("canvas")),
        (this.context = this.canvas.getContext("2d")),
        (this.resolution = n || Y.RESOLUTION),
        this.resize(e, t))
    }
    return (
      (e.prototype.clear = function () {
        ;(this.context.setTransform(1, 0, 0, 1, 0, 0),
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height))
      }),
      (e.prototype.resize = function (e, t) {
        ;((this.canvas.width = e * this.resolution), (this.canvas.height = t * this.resolution))
      }),
      (e.prototype.destroy = function () {
        ;((this.context = null), (this.canvas = null))
      }),
      Object.defineProperty(e.prototype, "width", {
        get: function () {
          return this.canvas.width
        },
        set: function (e) {
          this.canvas.width = e
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(e.prototype, "height", {
        get: function () {
          return this.canvas.height
        },
        set: function (e) {
          this.canvas.height = e
        },
        enumerable: false,
        configurable: true,
      }),
      e
    )
  })()
  function Oe(e) {
    var t,
      n,
      i,
      r = e.width,
      o = e.height,
      a = e.getContext("2d"),
      s = a.getImageData(0, 0, r, o).data,
      u = s.length,
      l = { top: null, left: null, right: null, bottom: null },
      c = null
    for (t = 0; t < u; t += 4)
      0 !== s[t + 3] &&
        ((n = (t / 4) % r),
        (i = ~~(t / 4 / r)),
        null === l.top && (l.top = i),
        (null === l.left || n < l.left) && (l.left = n),
        (null === l.right || l.right < n) && (l.right = n + 1),
        (null === l.bottom || l.bottom < i) && (l.bottom = i))
    return (
      null !== l.top &&
        ((r = l.right - l.left),
        (o = l.bottom - l.top + 1),
        (c = a.getImageData(l.left, l.top, r, o))),
      { height: o, width: r, data: c }
    )
  }
  var Re,
    ke = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i
  function Ne(e) {
    var t = ke.exec(e)
    if (t)
      return {
        mediaType: t[1] ? t[1].toLowerCase() : undefined,
        subType: t[2] ? t[2].toLowerCase() : undefined,
        charset: t[3] ? t[3].toLowerCase() : undefined,
        encoding: t[4] ? t[4].toLowerCase() : undefined,
        data: t[5],
      }
  }
  function De(e, t) {
    if ((undefined === t && (t = window.location), 0 === e.indexOf("data:"))) return ""
    ;((t = t || window.location), Re || (Re = document.createElement("a")), (Re.href = e))
    var n = (0, $.parse)(Re.href),
      i = (!n.port && "" === t.port) || n.port === t.port
    return n.hostname === t.hostname && i && n.protocol === t.protocol ? "" : "anonymous"
  }
  function Be(e, t) {
    var n = Y.RETINA_PREFIX.exec(e)
    return n ? parseFloat(n[1]) : undefined !== t ? t : 1
  }
  var Fe,
    Ue = 2 * Math.PI,
    Ge = 180 / Math.PI,
    je = Math.PI / 180
  !(function (e) {
    ;((e[(e.POLY = 0)] = "POLY"),
      (e[(e.RECT = 1)] = "RECT"),
      (e[(e.CIRC = 2)] = "CIRC"),
      (e[(e.ELIP = 3)] = "ELIP"),
      (e[(e.RREC = 4)] = "RREC"))
  })(Fe || (Fe = {}))
  var He = (function () {
      function e(e, t, n, i) {
        ;(undefined === e && (e = 0),
          undefined === t && (t = 0),
          undefined === n && (n = 0),
          undefined === i && (i = 0),
          (this.x = Number(e)),
          (this.y = Number(t)),
          (this.width = Number(n)),
          (this.height = Number(i)),
          (this.type = Fe.RECT))
      }
      return (
        Object.defineProperty(e.prototype, "left", {
          get: function () {
            return this.x
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "right", {
          get: function () {
            return this.x + this.width
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "top", {
          get: function () {
            return this.y
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "bottom", {
          get: function () {
            return this.y + this.height
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e, "EMPTY", {
          get: function () {
            return new e(0, 0, 0, 0)
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.clone = function () {
          return new e(this.x, this.y, this.width, this.height)
        }),
        (e.prototype.copyFrom = function (e) {
          return (
            (this.x = e.x),
            (this.y = e.y),
            (this.width = e.width),
            (this.height = e.height),
            this
          )
        }),
        (e.prototype.copyTo = function (e) {
          return (
            (e.x = this.x),
            (e.y = this.y),
            (e.width = this.width),
            (e.height = this.height),
            e
          )
        }),
        (e.prototype.contains = function (e, t) {
          return (
            !(this.width <= 0 || this.height <= 0) &&
            e >= this.x &&
            e < this.x + this.width &&
            t >= this.y &&
            t < this.y + this.height
          )
        }),
        (e.prototype.pad = function (e, t) {
          return (
            undefined === e && (e = 0),
            undefined === t && (t = e),
            (this.x -= e),
            (this.y -= t),
            (this.width += 2 * e),
            (this.height += 2 * t),
            this
          )
        }),
        (e.prototype.fit = function (e) {
          var t = Math.max(this.x, e.x),
            n = Math.min(this.x + this.width, e.x + e.width),
            i = Math.max(this.y, e.y),
            r = Math.min(this.y + this.height, e.y + e.height)
          return (
            (this.x = t),
            (this.width = Math.max(n - t, 0)),
            (this.y = i),
            (this.height = Math.max(r - i, 0)),
            this
          )
        }),
        (e.prototype.ceil = function (e, t) {
          ;(undefined === e && (e = 1), undefined === t && (t = 0.001))
          var n = Math.ceil((this.x + this.width - t) * e) / e,
            i = Math.ceil((this.y + this.height - t) * e) / e
          return (
            (this.x = Math.floor((this.x + t) * e) / e),
            (this.y = Math.floor((this.y + t) * e) / e),
            (this.width = n - this.x),
            (this.height = i - this.y),
            this
          )
        }),
        (e.prototype.enlarge = function (e) {
          var t = Math.min(this.x, e.x),
            n = Math.max(this.x + this.width, e.x + e.width),
            i = Math.min(this.y, e.y),
            r = Math.max(this.y + this.height, e.y + e.height)
          return ((this.x = t), (this.width = n - t), (this.y = i), (this.height = r - i), this)
        }),
        e
      )
    })(),
    Ve = (function () {
      function e(e, t, n) {
        ;(undefined === e && (e = 0),
          undefined === t && (t = 0),
          undefined === n && (n = 0),
          (this.x = e),
          (this.y = t),
          (this.radius = n),
          (this.type = Fe.CIRC))
      }
      return (
        (e.prototype.clone = function () {
          return new e(this.x, this.y, this.radius)
        }),
        (e.prototype.contains = function (e, t) {
          if (this.radius <= 0) return false
          var n = this.radius * this.radius,
            i = this.x - e,
            r = this.y - t
          return (i *= i) + (r *= r) <= n
        }),
        (e.prototype.getBounds = function () {
          return new He(
            this.x - this.radius,
            this.y - this.radius,
            2 * this.radius,
            2 * this.radius,
          )
        }),
        e
      )
    })(),
    Ze = (function () {
      function e(e, t, n, i) {
        ;(undefined === e && (e = 0),
          undefined === t && (t = 0),
          undefined === n && (n = 0),
          undefined === i && (i = 0),
          (this.x = e),
          (this.y = t),
          (this.width = n),
          (this.height = i),
          (this.type = Fe.ELIP))
      }
      return (
        (e.prototype.clone = function () {
          return new e(this.x, this.y, this.width, this.height)
        }),
        (e.prototype.contains = function (e, t) {
          if (this.width <= 0 || this.height <= 0) return false
          var n = (e - this.x) / this.width,
            i = (t - this.y) / this.height
          return (n *= n) + (i *= i) <= 1
        }),
        (e.prototype.getBounds = function () {
          return new He(this.x - this.width, this.y - this.height, this.width, this.height)
        }),
        e
      )
    })(),
    ze = (function () {
      function e() {
        for (var e = arguments, t = [], n = 0; n < arguments.length; n++) t[n] = e[n]
        var i = Array.isArray(t[0]) ? t[0] : t
        if ("number" != typeof i[0]) {
          for (var r = [], o = 0, a = i.length; o < a; o++) r.push(i[o].x, i[o].y)
          i = r
        }
        ;((this.points = i), (this.type = Fe.POLY), (this.closeStroke = true))
      }
      return (
        (e.prototype.clone = function () {
          var t = new e(this.points.slice())
          return ((t.closeStroke = this.closeStroke), t)
        }),
        (e.prototype.contains = function (e, t) {
          for (var n = false, i = this.points.length / 2, r = 0, o = i - 1; r < i; o = r++) {
            var a = this.points[2 * r],
              s = this.points[2 * r + 1],
              u = this.points[2 * o],
              l = this.points[2 * o + 1]
            s > t != l > t && e < ((t - s) / (l - s)) * (u - a) + a && (n = !n)
          }
          return n
        }),
        e
      )
    })(),
    Ye = (function () {
      function e(e, t, n, i, r) {
        ;(undefined === e && (e = 0),
          undefined === t && (t = 0),
          undefined === n && (n = 0),
          undefined === i && (i = 0),
          undefined === r && (r = 20),
          (this.x = e),
          (this.y = t),
          (this.width = n),
          (this.height = i),
          (this.radius = r),
          (this.type = Fe.RREC))
      }
      return (
        (e.prototype.clone = function () {
          return new e(this.x, this.y, this.width, this.height, this.radius)
        }),
        (e.prototype.contains = function (e, t) {
          if (this.width <= 0 || this.height <= 0) return false
          if (e >= this.x && e <= this.x + this.width && t >= this.y && t <= this.y + this.height) {
            if (
              (t >= this.y + this.radius && t <= this.y + this.height - this.radius) ||
              (e >= this.x + this.radius && e <= this.x + this.width - this.radius)
            )
              return true
            var n = e - (this.x + this.radius),
              i = t - (this.y + this.radius),
              r = this.radius * this.radius
            if (n * n + i * i <= r) return true
            if ((n = e - (this.x + this.width - this.radius)) * n + i * i <= r) return true
            if (n * n + (i = t - (this.y + this.height - this.radius)) * i <= r) return true
            if ((n = e - (this.x + this.radius)) * n + i * i <= r) return true
          }
          return false
        }),
        e
      )
    })(),
    We = (function () {
      function e(e, t) {
        ;(undefined === e && (e = 0), undefined === t && (t = 0), (this.x = e), (this.y = t))
      }
      return (
        (e.prototype.clone = function () {
          return new e(this.x, this.y)
        }),
        (e.prototype.copyFrom = function (e) {
          return (this.set(e.x, e.y), this)
        }),
        (e.prototype.copyTo = function (e) {
          return (e.set(this.x, this.y), e)
        }),
        (e.prototype.equals = function (e) {
          return e.x === this.x && e.y === this.y
        }),
        (e.prototype.set = function (e, t) {
          return (
            undefined === e && (e = 0),
            undefined === t && (t = e),
            (this.x = e),
            (this.y = t),
            this
          )
        }),
        e
      )
    })(),
    Xe = (function () {
      function e(e, t, n, i) {
        ;(undefined === n && (n = 0),
          undefined === i && (i = 0),
          (this._x = n),
          (this._y = i),
          (this.cb = e),
          (this.scope = t))
      }
      return (
        (e.prototype.clone = function (t, n) {
          return (
            undefined === t && (t = this.cb),
            undefined === n && (n = this.scope),
            new e(t, n, this._x, this._y)
          )
        }),
        (e.prototype.set = function (e, t) {
          return (
            undefined === e && (e = 0),
            undefined === t && (t = e),
            (this._x === e && this._y === t) ||
              ((this._x = e), (this._y = t), this.cb.call(this.scope)),
            this
          )
        }),
        (e.prototype.copyFrom = function (e) {
          return (
            (this._x === e.x && this._y === e.y) ||
              ((this._x = e.x), (this._y = e.y), this.cb.call(this.scope)),
            this
          )
        }),
        (e.prototype.copyTo = function (e) {
          return (e.set(this._x, this._y), e)
        }),
        (e.prototype.equals = function (e) {
          return e.x === this._x && e.y === this._y
        }),
        Object.defineProperty(e.prototype, "x", {
          get: function () {
            return this._x
          },
          set: function (e) {
            this._x !== e && ((this._x = e), this.cb.call(this.scope))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "y", {
          get: function () {
            return this._y
          },
          set: function (e) {
            this._y !== e && ((this._y = e), this.cb.call(this.scope))
          },
          enumerable: false,
          configurable: true,
        }),
        e
      )
    })(),
    qe = (function () {
      function e(e, t, n, i, r, o) {
        ;(undefined === e && (e = 1),
          undefined === t && (t = 0),
          undefined === n && (n = 0),
          undefined === i && (i = 1),
          undefined === r && (r = 0),
          undefined === o && (o = 0),
          (this.array = null),
          (this.a = e),
          (this.b = t),
          (this.c = n),
          (this.d = i),
          (this.tx = r),
          (this.ty = o))
      }
      return (
        (e.prototype.fromArray = function (e) {
          ;((this.a = e[0]),
            (this.b = e[1]),
            (this.c = e[3]),
            (this.d = e[4]),
            (this.tx = e[2]),
            (this.ty = e[5]))
        }),
        (e.prototype.set = function (e, t, n, i, r, o) {
          return (
            (this.a = e),
            (this.b = t),
            (this.c = n),
            (this.d = i),
            (this.tx = r),
            (this.ty = o),
            this
          )
        }),
        (e.prototype.toArray = function (e, t) {
          this.array || (this.array = new Float32Array(9))
          var n = t || this.array
          return (
            e
              ? ((n[0] = this.a),
                (n[1] = this.b),
                (n[2] = 0),
                (n[3] = this.c),
                (n[4] = this.d),
                (n[5] = 0),
                (n[6] = this.tx),
                (n[7] = this.ty),
                (n[8] = 1))
              : ((n[0] = this.a),
                (n[1] = this.c),
                (n[2] = this.tx),
                (n[3] = this.b),
                (n[4] = this.d),
                (n[5] = this.ty),
                (n[6] = 0),
                (n[7] = 0),
                (n[8] = 1)),
            n
          )
        }),
        (e.prototype.apply = function (e, t) {
          t = t || new We()
          var n = e.x,
            i = e.y
          return (
            (t.x = this.a * n + this.c * i + this.tx),
            (t.y = this.b * n + this.d * i + this.ty),
            t
          )
        }),
        (e.prototype.applyInverse = function (e, t) {
          t = t || new We()
          var n = 1 / (this.a * this.d + this.c * -this.b),
            i = e.x,
            r = e.y
          return (
            (t.x = this.d * n * i + -this.c * n * r + (this.ty * this.c - this.tx * this.d) * n),
            (t.y = this.a * n * r + -this.b * n * i + (-this.ty * this.a + this.tx * this.b) * n),
            t
          )
        }),
        (e.prototype.translate = function (e, t) {
          return ((this.tx += e), (this.ty += t), this)
        }),
        (e.prototype.scale = function (e, t) {
          return (
            (this.a *= e),
            (this.d *= t),
            (this.c *= e),
            (this.b *= t),
            (this.tx *= e),
            (this.ty *= t),
            this
          )
        }),
        (e.prototype.rotate = function (e) {
          var t = Math.cos(e),
            n = Math.sin(e),
            i = this.a,
            r = this.c,
            o = this.tx
          return (
            (this.a = i * t - this.b * n),
            (this.b = i * n + this.b * t),
            (this.c = r * t - this.d * n),
            (this.d = r * n + this.d * t),
            (this.tx = o * t - this.ty * n),
            (this.ty = o * n + this.ty * t),
            this
          )
        }),
        (e.prototype.append = function (e) {
          var t = this.a,
            n = this.b,
            i = this.c,
            r = this.d
          return (
            (this.a = e.a * t + e.b * i),
            (this.b = e.a * n + e.b * r),
            (this.c = e.c * t + e.d * i),
            (this.d = e.c * n + e.d * r),
            (this.tx = e.tx * t + e.ty * i + this.tx),
            (this.ty = e.tx * n + e.ty * r + this.ty),
            this
          )
        }),
        (e.prototype.setTransform = function (e, t, n, i, r, o, a, s, u) {
          return (
            (this.a = Math.cos(a + u) * r),
            (this.b = Math.sin(a + u) * r),
            (this.c = -Math.sin(a - s) * o),
            (this.d = Math.cos(a - s) * o),
            (this.tx = e - (n * this.a + i * this.c)),
            (this.ty = t - (n * this.b + i * this.d)),
            this
          )
        }),
        (e.prototype.prepend = function (e) {
          var t = this.tx
          if (1 !== e.a || 0 !== e.b || 0 !== e.c || 1 !== e.d) {
            var n = this.a,
              i = this.c
            ;((this.a = n * e.a + this.b * e.c),
              (this.b = n * e.b + this.b * e.d),
              (this.c = i * e.a + this.d * e.c),
              (this.d = i * e.b + this.d * e.d))
          }
          return (
            (this.tx = t * e.a + this.ty * e.c + e.tx),
            (this.ty = t * e.b + this.ty * e.d + e.ty),
            this
          )
        }),
        (e.prototype.decompose = function (e) {
          var t = this.a,
            n = this.b,
            i = this.c,
            r = this.d,
            o = -Math.atan2(-i, r),
            a = Math.atan2(n, t),
            s = Math.abs(o + a)
          return (
            s < 1e-5 || Math.abs(Ue - s) < 1e-5
              ? ((e.rotation = a), (e.skew.x = e.skew.y = 0))
              : ((e.rotation = 0), (e.skew.x = o), (e.skew.y = a)),
            (e.scale.x = Math.sqrt(t * t + n * n)),
            (e.scale.y = Math.sqrt(i * i + r * r)),
            (e.position.x = this.tx),
            (e.position.y = this.ty),
            e
          )
        }),
        (e.prototype.invert = function () {
          var e = this.a,
            t = this.b,
            n = this.c,
            i = this.d,
            r = this.tx,
            o = e * i - t * n
          return (
            (this.a = i / o),
            (this.b = -t / o),
            (this.c = -n / o),
            (this.d = e / o),
            (this.tx = (n * this.ty - i * r) / o),
            (this.ty = -(e * this.ty - t * r) / o),
            this
          )
        }),
        (e.prototype.identity = function () {
          return (
            (this.a = 1),
            (this.b = 0),
            (this.c = 0),
            (this.d = 1),
            (this.tx = 0),
            (this.ty = 0),
            this
          )
        }),
        (e.prototype.clone = function () {
          var t = new e()
          return (
            (t.a = this.a),
            (t.b = this.b),
            (t.c = this.c),
            (t.d = this.d),
            (t.tx = this.tx),
            (t.ty = this.ty),
            t
          )
        }),
        (e.prototype.copyTo = function (e) {
          return (
            (e.a = this.a),
            (e.b = this.b),
            (e.c = this.c),
            (e.d = this.d),
            (e.tx = this.tx),
            (e.ty = this.ty),
            e
          )
        }),
        (e.prototype.copyFrom = function (e) {
          return (
            (this.a = e.a),
            (this.b = e.b),
            (this.c = e.c),
            (this.d = e.d),
            (this.tx = e.tx),
            (this.ty = e.ty),
            this
          )
        }),
        Object.defineProperty(e, "IDENTITY", {
          get: function () {
            return new e()
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e, "TEMP_MATRIX", {
          get: function () {
            return new e()
          },
          enumerable: false,
          configurable: true,
        }),
        e
      )
    })(),
    Ke = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
    $e = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
    Je = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
    Qe = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
    et = [],
    tt = [],
    nt = Math.sign
  !(function () {
    for (var e = 0; e < 16; e++) {
      var t = []
      et.push(t)
      for (var n = 0; n < 16; n++)
        for (
          var i = nt(Ke[e] * Ke[n] + Je[e] * $e[n]),
            r = nt($e[e] * Ke[n] + Qe[e] * $e[n]),
            o = nt(Ke[e] * Je[n] + Je[e] * Qe[n]),
            a = nt($e[e] * Je[n] + Qe[e] * Qe[n]),
            s = 0;
          s < 16;
          s++
        )
          if (Ke[s] === i && $e[s] === r && Je[s] === o && Qe[s] === a) {
            t.push(s)
            break
          }
    }
    for (e = 0; e < 16; e++) {
      var u = new qe()
      ;(u.set(Ke[e], $e[e], Je[e], Qe[e], 0, 0), tt.push(u))
    }
  })()
  var it = {
      E: 0,
      SE: 1,
      S: 2,
      SW: 3,
      W: 4,
      NW: 5,
      N: 6,
      NE: 7,
      MIRROR_VERTICAL: 8,
      MAIN_DIAGONAL: 10,
      MIRROR_HORIZONTAL: 12,
      REVERSE_DIAGONAL: 14,
      uX: function (e) {
        return Ke[e]
      },
      uY: function (e) {
        return $e[e]
      },
      vX: function (e) {
        return Je[e]
      },
      vY: function (e) {
        return Qe[e]
      },
      inv: function (e) {
        return 8 & e ? 15 & e : 7 & -e
      },
      add: function (e, t) {
        return et[e][t]
      },
      sub: function (e, t) {
        return et[e][it.inv(t)]
      },
      rotate180: function (e) {
        return 4 ^ e
      },
      isVertical: function (e) {
        return 2 == (3 & e)
      },
      byDirection: function (e, t) {
        return 2 * Math.abs(e) <= Math.abs(t)
          ? t >= 0
            ? it.S
            : it.N
          : 2 * Math.abs(t) <= Math.abs(e)
            ? e > 0
              ? it.E
              : it.W
            : t > 0
              ? e > 0
                ? it.SE
                : it.SW
              : e > 0
                ? it.NE
                : it.NW
      },
      matrixAppendRotationInv: function (e, t, n, i) {
        ;(undefined === n && (n = 0), undefined === i && (i = 0))
        var r = tt[it.inv(t)]
        ;((r.tx = n), (r.ty = i), e.append(r))
      },
    },
    rt = (function () {
      function e() {
        ;((this.worldTransform = new qe()),
          (this.localTransform = new qe()),
          (this.position = new Xe(this.onChange, this, 0, 0)),
          (this.scale = new Xe(this.onChange, this, 1, 1)),
          (this.pivot = new Xe(this.onChange, this, 0, 0)),
          (this.skew = new Xe(this.updateSkew, this, 0, 0)),
          (this._rotation = 0),
          (this._cx = 1),
          (this._sx = 0),
          (this._cy = 0),
          (this._sy = 1),
          (this._localID = 0),
          (this._currentLocalID = 0),
          (this._worldID = 0),
          (this._parentID = 0))
      }
      return (
        (e.prototype.onChange = function () {
          this._localID++
        }),
        (e.prototype.updateSkew = function () {
          ;((this._cx = Math.cos(this._rotation + this.skew.y)),
            (this._sx = Math.sin(this._rotation + this.skew.y)),
            (this._cy = -Math.sin(this._rotation - this.skew.x)),
            (this._sy = Math.cos(this._rotation - this.skew.x)),
            this._localID++)
        }),
        (e.prototype.updateLocalTransform = function () {
          var e = this.localTransform
          this._localID !== this._currentLocalID &&
            ((e.a = this._cx * this.scale.x),
            (e.b = this._sx * this.scale.x),
            (e.c = this._cy * this.scale.y),
            (e.d = this._sy * this.scale.y),
            (e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c)),
            (e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d)),
            (this._currentLocalID = this._localID),
            (this._parentID = -1))
        }),
        (e.prototype.updateTransform = function (e) {
          var t = this.localTransform
          if (
            (this._localID !== this._currentLocalID &&
              ((t.a = this._cx * this.scale.x),
              (t.b = this._sx * this.scale.x),
              (t.c = this._cy * this.scale.y),
              (t.d = this._sy * this.scale.y),
              (t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
              (t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
              (this._currentLocalID = this._localID),
              (this._parentID = -1)),
            this._parentID !== e._worldID)
          ) {
            var n = e.worldTransform,
              i = this.worldTransform
            ;((i.a = t.a * n.a + t.b * n.c),
              (i.b = t.a * n.b + t.b * n.d),
              (i.c = t.c * n.a + t.d * n.c),
              (i.d = t.c * n.b + t.d * n.d),
              (i.tx = t.tx * n.a + t.ty * n.c + n.tx),
              (i.ty = t.tx * n.b + t.ty * n.d + n.ty),
              (this._parentID = e._worldID),
              this._worldID++)
          }
        }),
        (e.prototype.setFromMatrix = function (e) {
          ;(e.decompose(this), this._localID++)
        }),
        Object.defineProperty(e.prototype, "rotation", {
          get: function () {
            return this._rotation
          },
          set: function (e) {
            this._rotation !== e && ((this._rotation = e), this.updateSkew())
          },
          enumerable: false,
          configurable: true,
        }),
        (e.IDENTITY = new e()),
        e
      )
    })()
  Y.SORTABLE_CHILDREN = false
  var ot = (function () {
      function e() {
        ;((this.minX = 1 / 0),
          (this.minY = 1 / 0),
          (this.maxX = -1 / 0),
          (this.maxY = -1 / 0),
          (this.rect = null),
          (this.updateID = -1))
      }
      return (
        (e.prototype.isEmpty = function () {
          return this.minX > this.maxX || this.minY > this.maxY
        }),
        (e.prototype.clear = function () {
          ;((this.minX = 1 / 0), (this.minY = 1 / 0), (this.maxX = -1 / 0), (this.maxY = -1 / 0))
        }),
        (e.prototype.getRectangle = function (e) {
          return this.minX > this.maxX || this.minY > this.maxY
            ? He.EMPTY
            : (((e = e || new He(0, 0, 1, 1)).x = this.minX),
              (e.y = this.minY),
              (e.width = this.maxX - this.minX),
              (e.height = this.maxY - this.minY),
              e)
        }),
        (e.prototype.addPoint = function (e) {
          ;((this.minX = Math.min(this.minX, e.x)),
            (this.maxX = Math.max(this.maxX, e.x)),
            (this.minY = Math.min(this.minY, e.y)),
            (this.maxY = Math.max(this.maxY, e.y)))
        }),
        (e.prototype.addQuad = function (e) {
          var t = this.minX,
            n = this.minY,
            i = this.maxX,
            r = this.maxY,
            o = e[0],
            a = e[1]
          ;((t = o < t ? o : t),
            (n = a < n ? a : n),
            (i = o > i ? o : i),
            (r = a > r ? a : r),
            (t = (o = e[2]) < t ? o : t),
            (n = (a = e[3]) < n ? a : n),
            (i = o > i ? o : i),
            (r = a > r ? a : r),
            (t = (o = e[4]) < t ? o : t),
            (n = (a = e[5]) < n ? a : n),
            (i = o > i ? o : i),
            (r = a > r ? a : r),
            (t = (o = e[6]) < t ? o : t),
            (n = (a = e[7]) < n ? a : n),
            (i = o > i ? o : i),
            (r = a > r ? a : r),
            (this.minX = t),
            (this.minY = n),
            (this.maxX = i),
            (this.maxY = r))
        }),
        (e.prototype.addFrame = function (e, t, n, i, r) {
          this.addFrameMatrix(e.worldTransform, t, n, i, r)
        }),
        (e.prototype.addFrameMatrix = function (e, t, n, i, r) {
          var o = e.a,
            a = e.b,
            s = e.c,
            u = e.d,
            l = e.tx,
            c = e.ty,
            d = this.minX,
            h = this.minY,
            p = this.maxX,
            f = this.maxY,
            _ = o * t + s * n + l,
            g = a * t + u * n + c
          ;((d = _ < d ? _ : d),
            (h = g < h ? g : h),
            (p = _ > p ? _ : p),
            (f = g > f ? g : f),
            (d = (_ = o * i + s * n + l) < d ? _ : d),
            (h = (g = a * i + u * n + c) < h ? g : h),
            (p = _ > p ? _ : p),
            (f = g > f ? g : f),
            (d = (_ = o * t + s * r + l) < d ? _ : d),
            (h = (g = a * t + u * r + c) < h ? g : h),
            (p = _ > p ? _ : p),
            (f = g > f ? g : f),
            (d = (_ = o * i + s * r + l) < d ? _ : d),
            (h = (g = a * i + u * r + c) < h ? g : h),
            (p = _ > p ? _ : p),
            (f = g > f ? g : f),
            (this.minX = d),
            (this.minY = h),
            (this.maxX = p),
            (this.maxY = f))
        }),
        (e.prototype.addVertexData = function (e, t, n) {
          for (
            var i = this.minX, r = this.minY, o = this.maxX, a = this.maxY, s = t;
            s < n;
            s += 2
          ) {
            var u = e[s],
              l = e[s + 1]
            ;((i = u < i ? u : i), (r = l < r ? l : r), (o = u > o ? u : o), (a = l > a ? l : a))
          }
          ;((this.minX = i), (this.minY = r), (this.maxX = o), (this.maxY = a))
        }),
        (e.prototype.addVertices = function (e, t, n, i) {
          this.addVerticesMatrix(e.worldTransform, t, n, i)
        }),
        (e.prototype.addVerticesMatrix = function (e, t, n, i, r, o) {
          ;(undefined === r && (r = 0), undefined === o && (o = r))
          for (
            var a = e.a,
              s = e.b,
              u = e.c,
              l = e.d,
              c = e.tx,
              d = e.ty,
              h = this.minX,
              p = this.minY,
              f = this.maxX,
              _ = this.maxY,
              g = n;
            g < i;
            g += 2
          ) {
            var m = t[g],
              v = t[g + 1],
              y = a * m + u * v + c,
              C = l * v + s * m + d
            ;((h = Math.min(h, y - r)),
              (f = Math.max(f, y + r)),
              (p = Math.min(p, C - o)),
              (_ = Math.max(_, C + o)))
          }
          ;((this.minX = h), (this.minY = p), (this.maxX = f), (this.maxY = _))
        }),
        (e.prototype.addBounds = function (e) {
          var t = this.minX,
            n = this.minY,
            i = this.maxX,
            r = this.maxY
          ;((this.minX = e.minX < t ? e.minX : t),
            (this.minY = e.minY < n ? e.minY : n),
            (this.maxX = e.maxX > i ? e.maxX : i),
            (this.maxY = e.maxY > r ? e.maxY : r))
        }),
        (e.prototype.addBoundsMask = function (e, t) {
          var n = e.minX > t.minX ? e.minX : t.minX,
            i = e.minY > t.minY ? e.minY : t.minY,
            r = e.maxX < t.maxX ? e.maxX : t.maxX,
            o = e.maxY < t.maxY ? e.maxY : t.maxY
          if (n <= r && i <= o) {
            var a = this.minX,
              s = this.minY,
              u = this.maxX,
              l = this.maxY
            ;((this.minX = n < a ? n : a),
              (this.minY = i < s ? i : s),
              (this.maxX = r > u ? r : u),
              (this.maxY = o > l ? o : l))
          }
        }),
        (e.prototype.addBoundsMatrix = function (e, t) {
          this.addFrameMatrix(t, e.minX, e.minY, e.maxX, e.maxY)
        }),
        (e.prototype.addBoundsArea = function (e, t) {
          var n = e.minX > t.x ? e.minX : t.x,
            i = e.minY > t.y ? e.minY : t.y,
            r = e.maxX < t.x + t.width ? e.maxX : t.x + t.width,
            o = e.maxY < t.y + t.height ? e.maxY : t.y + t.height
          if (n <= r && i <= o) {
            var a = this.minX,
              s = this.minY,
              u = this.maxX,
              l = this.maxY
            ;((this.minX = n < a ? n : a),
              (this.minY = i < s ? i : s),
              (this.maxX = r > u ? r : u),
              (this.maxY = o > l ? o : l))
          }
        }),
        (e.prototype.pad = function (e, t) {
          ;(undefined === e && (e = 0),
            undefined === t && (t = e),
            this.isEmpty() ||
              ((this.minX -= e), (this.maxX += e), (this.minY -= t), (this.maxY += t)))
        }),
        (e.prototype.addFramePad = function (e, t, n, i, r, o) {
          ;((e -= r),
            (t -= o),
            (n += r),
            (i += o),
            (this.minX = this.minX < e ? this.minX : e),
            (this.maxX = this.maxX > n ? this.maxX : n),
            (this.minY = this.minY < t ? this.minY : t),
            (this.maxY = this.maxY > i ? this.maxY : i))
        }),
        e
      )
    })(),
    at = function (e, t) {
      return (
        (at =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        at(e, t)
      )
    }
  function st(e, t) {
    function n() {
      this.constructor = e
    }
    ;(at(e, t),
      (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var ut = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.tempDisplayObjectParent = null),
          (t.transform = new rt()),
          (t.alpha = 1),
          (t.visible = true),
          (t.renderable = true),
          (t.parent = null),
          (t.worldAlpha = 1),
          (t._lastSortedIndex = 0),
          (t._zIndex = 0),
          (t.filterArea = null),
          (t.filters = null),
          (t._enabledFilters = null),
          (t._bounds = new ot()),
          (t._localBounds = null),
          (t._boundsID = 0),
          (t._boundsRect = null),
          (t._localBoundsRect = null),
          (t._mask = null),
          (t._destroyed = false),
          (t.isSprite = false),
          (t.isMask = false),
          t
        )
      }
      return (
        st(t, e),
        (t.mixin = function (e) {
          for (var n = Object.keys(e), i = 0; i < n.length; ++i) {
            var r = n[i]
            Object.defineProperty(t.prototype, r, Object.getOwnPropertyDescriptor(e, r))
          }
        }),
        (t.prototype._recursivePostUpdateTransform = function () {
          this.parent
            ? (this.parent._recursivePostUpdateTransform(),
              this.transform.updateTransform(this.parent.transform))
            : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
        }),
        (t.prototype.updateTransform = function () {
          ;(this._boundsID++,
            this.transform.updateTransform(this.parent.transform),
            (this.worldAlpha = this.alpha * this.parent.worldAlpha))
        }),
        (t.prototype.getBounds = function (e, t) {
          return (
            e ||
              (this.parent
                ? (this._recursivePostUpdateTransform(), this.updateTransform())
                : ((this.parent = this._tempDisplayObjectParent),
                  this.updateTransform(),
                  (this.parent = null))),
            this._bounds.updateID !== this._boundsID &&
              (this.calculateBounds(), (this._bounds.updateID = this._boundsID)),
            t || (this._boundsRect || (this._boundsRect = new He()), (t = this._boundsRect)),
            this._bounds.getRectangle(t)
          )
        }),
        (t.prototype.getLocalBounds = function (e) {
          ;(e ||
            (this._localBoundsRect || (this._localBoundsRect = new He()),
            (e = this._localBoundsRect)),
            this._localBounds || (this._localBounds = new ot()))
          var t = this.transform,
            n = this.parent
          ;((this.parent = null), (this.transform = this._tempDisplayObjectParent.transform))
          var i = this._bounds,
            r = this._boundsID
          this._bounds = this._localBounds
          var o = this.getBounds(false, e)
          return (
            (this.parent = n),
            (this.transform = t),
            (this._bounds = i),
            (this._bounds.updateID += this._boundsID - r),
            o
          )
        }),
        (t.prototype.toGlobal = function (e, t, n) {
          return (
            undefined === n && (n = false),
            n ||
              (this._recursivePostUpdateTransform(),
              this.parent
                ? this.displayObjectUpdateTransform()
                : ((this.parent = this._tempDisplayObjectParent),
                  this.displayObjectUpdateTransform(),
                  (this.parent = null))),
            this.worldTransform.apply(e, t)
          )
        }),
        (t.prototype.toLocal = function (e, t, n, i) {
          return (
            t && (e = t.toGlobal(e, n, i)),
            i ||
              (this._recursivePostUpdateTransform(),
              this.parent
                ? this.displayObjectUpdateTransform()
                : ((this.parent = this._tempDisplayObjectParent),
                  this.displayObjectUpdateTransform(),
                  (this.parent = null))),
            this.worldTransform.applyInverse(e, n)
          )
        }),
        (t.prototype.setParent = function (e) {
          if (!e || !e.addChild) throw new Error("setParent: Argument must be a Container")
          return (e.addChild(this), e)
        }),
        (t.prototype.setTransform = function (e, t, n, i, r, o, a, s, u) {
          return (
            undefined === e && (e = 0),
            undefined === t && (t = 0),
            undefined === n && (n = 1),
            undefined === i && (i = 1),
            undefined === r && (r = 0),
            undefined === o && (o = 0),
            undefined === a && (a = 0),
            undefined === s && (s = 0),
            undefined === u && (u = 0),
            (this.position.x = e),
            (this.position.y = t),
            (this.scale.x = n || 1),
            (this.scale.y = i || 1),
            (this.rotation = r),
            (this.skew.x = o),
            (this.skew.y = a),
            (this.pivot.x = s),
            (this.pivot.y = u),
            this
          )
        }),
        (t.prototype.destroy = function (e) {
          ;(this.parent && this.parent.removeChild(this),
            this.removeAllListeners(),
            (this.transform = null),
            (this.parent = null),
            (this._bounds = null),
            (this._mask = null),
            (this.filters = null),
            (this.filterArea = null),
            (this.hitArea = null),
            (this.interactive = false),
            (this.interactiveChildren = false),
            (this._destroyed = true))
        }),
        Object.defineProperty(t.prototype, "_tempDisplayObjectParent", {
          get: function () {
            return (
              null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new lt()),
              this.tempDisplayObjectParent
            )
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.enableTempParent = function () {
          var e = this.parent
          return ((this.parent = this._tempDisplayObjectParent), e)
        }),
        (t.prototype.disableTempParent = function (e) {
          this.parent = e
        }),
        Object.defineProperty(t.prototype, "x", {
          get: function () {
            return this.position.x
          },
          set: function (e) {
            this.transform.position.x = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "y", {
          get: function () {
            return this.position.y
          },
          set: function (e) {
            this.transform.position.y = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "worldTransform", {
          get: function () {
            return this.transform.worldTransform
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "localTransform", {
          get: function () {
            return this.transform.localTransform
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "position", {
          get: function () {
            return this.transform.position
          },
          set: function (e) {
            this.transform.position.copyFrom(e)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "scale", {
          get: function () {
            return this.transform.scale
          },
          set: function (e) {
            this.transform.scale.copyFrom(e)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "pivot", {
          get: function () {
            return this.transform.pivot
          },
          set: function (e) {
            this.transform.pivot.copyFrom(e)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "skew", {
          get: function () {
            return this.transform.skew
          },
          set: function (e) {
            this.transform.skew.copyFrom(e)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "rotation", {
          get: function () {
            return this.transform.rotation
          },
          set: function (e) {
            this.transform.rotation = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "angle", {
          get: function () {
            return this.transform.rotation * Ge
          },
          set: function (e) {
            this.transform.rotation = e * je
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "zIndex", {
          get: function () {
            return this._zIndex
          },
          set: function (e) {
            ;((this._zIndex = e), this.parent && (this.parent.sortDirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "worldVisible", {
          get: function () {
            var e = this
            do {
              if (!e.visible) return false
              e = e.parent
            } while (e)
            return true
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "mask", {
          get: function () {
            return this._mask
          },
          set: function (e) {
            var t
            this._mask &&
              (((t = this._mask.maskObject || this._mask).renderable = true), (t.isMask = false))
            ;((this._mask = e), this._mask) &&
              (((t = this._mask.maskObject || this._mask).renderable = false), (t.isMask = true))
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(X()),
    lt = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.sortDirty = null), t)
      }
      return (st(t, e), t)
    })(ut)
  function ct(e, t) {
    return e.zIndex === t.zIndex ? e._lastSortedIndex - t._lastSortedIndex : e.zIndex - t.zIndex
  }
  ut.prototype.displayObjectUpdateTransform = ut.prototype.updateTransform
  var dt = (function (e) {
    function t() {
      var t = e.call(this) || this
      return ((t.children = []), (t.sortableChildren = Y.SORTABLE_CHILDREN), (t.sortDirty = false), t)
    }
    return (
      st(t, e),
      (t.prototype.onChildrenChange = function (e) {}),
      (t.prototype.addChild = function () {
        for (var e = arguments, t = [], n = 0; n < arguments.length; n++) t[n] = e[n]
        if (t.length > 1) for (var i = 0; i < t.length; i++) this.addChild(t[i])
        else {
          var r = t[0]
          ;(r.parent && r.parent.removeChild(r),
            (r.parent = this),
            (this.sortDirty = true),
            (r.transform._parentID = -1),
            this.children.push(r),
            this._boundsID++,
            this.onChildrenChange(this.children.length - 1),
            this.emit("childAdded", r, this, this.children.length - 1),
            r.emit("added", this))
        }
        return t[0]
      }),
      (t.prototype.addChildAt = function (e, t) {
        if (t < 0 || t > this.children.length)
          throw new Error(
            e + "addChildAt: The index " + t + " supplied is out of bounds " + this.children.length,
          )
        return (
          e.parent && e.parent.removeChild(e),
          (e.parent = this),
          (this.sortDirty = true),
          (e.transform._parentID = -1),
          this.children.splice(t, 0, e),
          this._boundsID++,
          this.onChildrenChange(t),
          e.emit("added", this),
          this.emit("childAdded", e, this, t),
          e
        )
      }),
      (t.prototype.swapChildren = function (e, t) {
        if (e !== t) {
          var n = this.getChildIndex(e),
            i = this.getChildIndex(t)
          ;((this.children[n] = t), (this.children[i] = e), this.onChildrenChange(n < i ? n : i))
        }
      }),
      (t.prototype.getChildIndex = function (e) {
        var t = this.children.indexOf(e)
        if (-1 === t) throw new Error("The supplied DisplayObject must be a child of the caller")
        return t
      }),
      (t.prototype.setChildIndex = function (e, t) {
        if (t < 0 || t >= this.children.length)
          throw new Error("The index " + t + " supplied is out of bounds " + this.children.length)
        var n = this.getChildIndex(e)
        ;(Ce(this.children, n, 1), this.children.splice(t, 0, e), this.onChildrenChange(t))
      }),
      (t.prototype.getChildAt = function (e) {
        if (e < 0 || e >= this.children.length)
          throw new Error("getChildAt: Index (" + e + ") does not exist.")
        return this.children[e]
      }),
      (t.prototype.removeChild = function () {
        for (var e = arguments, t = [], n = 0; n < arguments.length; n++) t[n] = e[n]
        if (t.length > 1) for (var i = 0; i < t.length; i++) this.removeChild(t[i])
        else {
          var r = t[0],
            o = this.children.indexOf(r)
          if (-1 === o) return null
          ;((r.parent = null),
            (r.transform._parentID = -1),
            Ce(this.children, o, 1),
            this._boundsID++,
            this.onChildrenChange(o),
            r.emit("removed", this),
            this.emit("childRemoved", r, this, o))
        }
        return t[0]
      }),
      (t.prototype.removeChildAt = function (e) {
        var t = this.getChildAt(e)
        return (
          (t.parent = null),
          (t.transform._parentID = -1),
          Ce(this.children, e, 1),
          this._boundsID++,
          this.onChildrenChange(e),
          t.emit("removed", this),
          this.emit("childRemoved", t, this, e),
          t
        )
      }),
      (t.prototype.removeChildren = function (e, t) {
        ;(undefined === e && (e = 0), undefined === t && (t = this.children.length))
        var n,
          i = e,
          r = t - i
        if (r > 0 && r <= t) {
          n = this.children.splice(i, r)
          for (var o = 0; o < n.length; ++o)
            ((n[o].parent = null), n[o].transform && (n[o].transform._parentID = -1))
          ;(this._boundsID++, this.onChildrenChange(e))
          for (o = 0; o < n.length; ++o)
            (n[o].emit("removed", this), this.emit("childRemoved", n[o], this, o))
          return n
        }
        if (0 === r && 0 === this.children.length) return []
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
      }),
      (t.prototype.sortChildren = function () {
        for (var e = false, t = 0, n = this.children.length; t < n; ++t) {
          var i = this.children[t]
          ;((i._lastSortedIndex = t), e || 0 === i.zIndex || (e = true))
        }
        ;(e && this.children.length > 1 && this.children.sort(ct), (this.sortDirty = false))
      }),
      (t.prototype.updateTransform = function () {
        ;(this.sortableChildren && this.sortDirty && this.sortChildren(),
          this._boundsID++,
          this.transform.updateTransform(this.parent.transform),
          (this.worldAlpha = this.alpha * this.parent.worldAlpha))
        for (var e = 0, t = this.children.length; e < t; ++e) {
          var n = this.children[e]
          n.visible && n.updateTransform()
        }
      }),
      (t.prototype.calculateBounds = function () {
        ;(this._bounds.clear(), this._calculateBounds())
        for (var e = 0; e < this.children.length; e++) {
          var t = this.children[e]
          if (t.visible && t.renderable)
            if ((t.calculateBounds(), t._mask)) {
              var n = t._mask.maskObject || t._mask
              ;(n.calculateBounds(), this._bounds.addBoundsMask(t._bounds, n._bounds))
            } else
              t.filterArea
                ? this._bounds.addBoundsArea(t._bounds, t.filterArea)
                : this._bounds.addBounds(t._bounds)
        }
        this._bounds.updateID = this._boundsID
      }),
      (t.prototype.getLocalBounds = function (t, n) {
        undefined === n && (n = false)
        var i = e.prototype.getLocalBounds.call(this, t)
        if (!n)
          for (var r = 0, o = this.children.length; r < o; ++r) {
            var a = this.children[r]
            a.visible && a.updateTransform()
          }
        return i
      }),
      (t.prototype._calculateBounds = function () {}),
      (t.prototype.render = function (e) {
        if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
          if (this._mask || (this.filters && this.filters.length)) this.renderAdvanced(e)
          else {
            this._render(e)
            for (var t = 0, n = this.children.length; t < n; ++t) this.children[t].render(e)
          }
      }),
      (t.prototype.renderAdvanced = function (e) {
        e.batch.flush()
        var t = this.filters,
          n = this._mask
        if (t) {
          ;(this._enabledFilters || (this._enabledFilters = []), (this._enabledFilters.length = 0))
          for (var i = 0; i < t.length; i++) t[i].enabled && this._enabledFilters.push(t[i])
          this._enabledFilters.length && e.filter.push(this, this._enabledFilters)
        }
        ;(n && e.mask.push(this, this._mask), this._render(e))
        i = 0
        for (var r = this.children.length; i < r; i++) this.children[i].render(e)
        ;(e.batch.flush(),
          n && e.mask.pop(this),
          t && this._enabledFilters && this._enabledFilters.length && e.filter.pop())
      }),
      (t.prototype._render = function (e) {}),
      (t.prototype.destroy = function (t) {
        ;(e.prototype.destroy.call(this), (this.sortDirty = false))
        var n = "boolean" == typeof t ? t : t && t.children,
          i = this.removeChildren(0, this.children.length)
        if (n) for (var r = 0; r < i.length; ++r) i[r].destroy(t)
      }),
      Object.defineProperty(t.prototype, "width", {
        get: function () {
          return this.scale.x * this.getLocalBounds().width
        },
        set: function (e) {
          var t = this.getLocalBounds().width
          ;((this.scale.x = 0 !== t ? e / t : 1), (this._width = e))
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "height", {
        get: function () {
          return this.scale.y * this.getLocalBounds().height
        },
        set: function (e) {
          var t = this.getLocalBounds().height
          ;((this.scale.y = 0 !== t ? e / t : 1), (this._height = e))
        },
        enumerable: false,
        configurable: true,
      }),
      t
    )
  })(ut)
  dt.prototype.containerUpdateTransform = dt.prototype.updateTransform
  var ht = {
    accessible: false,
    accessibleTitle: null,
    accessibleHint: null,
    tabIndex: 0,
    _accessibleActive: false,
    _accessibleDiv: null,
    accessibleType: "button",
    accessiblePointerEvents: "auto",
    accessibleChildren: true,
    renderId: -1,
  }
  ut.mixin(ht)
  var pt,
    ft = 100,
    _t = (function () {
      function e(e) {
        ;((this._hookDiv = null), (A.tablet || A.phone) && this.createTouchHook())
        var t = document.createElement("div")
        ;((t.style.width = ft + "px"),
          (t.style.height = ft + "px"),
          (t.style.position = "absolute"),
          (t.style.top = "0px"),
          (t.style.left = "0px"),
          (t.style.zIndex = (2).toString()),
          (this.div = t),
          (this.pool = []),
          (this.renderId = 0),
          (this.debug = false),
          (this.renderer = e),
          (this.children = []),
          (this._onKeyDown = this._onKeyDown.bind(this)),
          (this._onMouseMove = this._onMouseMove.bind(this)),
          (this._isActive = false),
          (this._isMobileAccessibility = false),
          (this.androidUpdateCount = 0),
          (this.androidUpdateFrequency = 500),
          window.addEventListener("keydown", this._onKeyDown, false))
      }
      return (
        Object.defineProperty(e.prototype, "isActive", {
          get: function () {
            return this._isActive
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "isMobileAccessibility", {
          get: function () {
            return this._isMobileAccessibility
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.createTouchHook = function () {
          var e = this,
            t = document.createElement("button")
          ;((t.style.width = "1px"),
            (t.style.height = "1px"),
            (t.style.position = "absolute"),
            (t.style.top = "-1000px"),
            (t.style.left = "-1000px"),
            (t.style.zIndex = (2).toString()),
            (t.style.backgroundColor = "#FF0000"),
            (t.title = "select to enable accessability for this content"),
            t.addEventListener("focus", function () {
              ;((e._isMobileAccessibility = true), e.activate(), e.destroyTouchHook())
            }),
            document.body.appendChild(t),
            (this._hookDiv = t))
        }),
        (e.prototype.destroyTouchHook = function () {
          this._hookDiv && (document.body.removeChild(this._hookDiv), (this._hookDiv = null))
        }),
        (e.prototype.activate = function () {
          this._isActive ||
            ((this._isActive = true),
            window.document.addEventListener("mousemove", this._onMouseMove, true),
            window.removeEventListener("keydown", this._onKeyDown, false),
            this.renderer.on("postrender", this.update, this),
            this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
        }),
        (e.prototype.deactivate = function () {
          this._isActive &&
            !this._isMobileAccessibility &&
            ((this._isActive = false),
            window.document.removeEventListener("mousemove", this._onMouseMove, true),
            window.addEventListener("keydown", this._onKeyDown, false),
            this.renderer.off("postrender", this.update),
            this.div.parentNode && this.div.parentNode.removeChild(this.div))
        }),
        (e.prototype.updateAccessibleObjects = function (e) {
          if (e.visible && e.accessibleChildren) {
            e.accessible &&
              e.interactive &&
              (e._accessibleActive || this.addChild(e), (e.renderId = this.renderId))
            for (var t = e.children, n = 0; n < t.length; n++) this.updateAccessibleObjects(t[n])
          }
        }),
        (e.prototype.update = function () {
          var e = performance.now()
          if (
            !(A.android.device && e < this.androidUpdateCount) &&
            ((this.androidUpdateCount = e + this.androidUpdateFrequency),
            this.renderer.renderingToScreen)
          ) {
            this.renderer._lastObjectRendered &&
              this.updateAccessibleObjects(this.renderer._lastObjectRendered)
            var t = this.renderer.view.getBoundingClientRect(),
              n = this.renderer.resolution,
              i = (t.width / this.renderer.width) * n,
              r = (t.height / this.renderer.height) * n,
              o = this.div
            ;((o.style.left = t.left + "px"),
              (o.style.top = t.top + "px"),
              (o.style.width = this.renderer.width + "px"),
              (o.style.height = this.renderer.height + "px"))
            for (var a = 0; a < this.children.length; a++) {
              var s = this.children[a]
              if (s.renderId !== this.renderId)
                ((s._accessibleActive = false),
                  Ce(this.children, a, 1),
                  this.div.removeChild(s._accessibleDiv),
                  this.pool.push(s._accessibleDiv),
                  (s._accessibleDiv = null),
                  a--)
              else {
                o = s._accessibleDiv
                var u = s.hitArea,
                  l = s.worldTransform
                ;(s.hitArea
                  ? ((o.style.left = (l.tx + u.x * l.a) * i + "px"),
                    (o.style.top = (l.ty + u.y * l.d) * r + "px"),
                    (o.style.width = u.width * l.a * i + "px"),
                    (o.style.height = u.height * l.d * r + "px"))
                  : ((u = s.getBounds()),
                    this.capHitArea(u),
                    (o.style.left = u.x * i + "px"),
                    (o.style.top = u.y * r + "px"),
                    (o.style.width = u.width * i + "px"),
                    (o.style.height = u.height * r + "px"),
                    o.title !== s.accessibleTitle &&
                      null !== s.accessibleTitle &&
                      (o.title = s.accessibleTitle),
                    o.getAttribute("aria-label") !== s.accessibleHint &&
                      null !== s.accessibleHint &&
                      o.setAttribute("aria-label", s.accessibleHint)),
                  (s.accessibleTitle === o.title && s.tabIndex === o.tabIndex) ||
                    ((o.title = s.accessibleTitle),
                    (o.tabIndex = s.tabIndex),
                    this.debug && this.updateDebugHTML(o)))
              }
            }
            this.renderId++
          }
        }),
        (e.prototype.updateDebugHTML = function (e) {
          e.innerHTML =
            "type: " + e.type + "</br> title : " + e.title + "</br> tabIndex: " + e.tabIndex
        }),
        (e.prototype.capHitArea = function (e) {
          ;(e.x < 0 && ((e.width += e.x), (e.x = 0)),
            e.y < 0 && ((e.height += e.y), (e.y = 0)),
            e.x + e.width > this.renderer.width && (e.width = this.renderer.width - e.x),
            e.y + e.height > this.renderer.height && (e.height = this.renderer.height - e.y))
        }),
        (e.prototype.addChild = function (e) {
          var t = this.pool.pop()
          ;(t ||
            (((t = document.createElement("button")).style.width = ft + "px"),
            (t.style.height = ft + "px"),
            (t.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent"),
            (t.style.position = "absolute"),
            (t.style.zIndex = (2).toString()),
            (t.style.borderStyle = "none"),
            navigator.userAgent.toLowerCase().indexOf("chrome") > -1
              ? t.setAttribute("aria-live", "off")
              : t.setAttribute("aria-live", "polite"),
            navigator.userAgent.match(/rv:.*Gecko\//)
              ? t.setAttribute("aria-relevant", "additions")
              : t.setAttribute("aria-relevant", "text"),
            t.addEventListener("click", this._onClick.bind(this)),
            t.addEventListener("focus", this._onFocus.bind(this)),
            t.addEventListener("focusout", this._onFocusOut.bind(this))),
            (t.style.pointerEvents = e.accessiblePointerEvents),
            (t.type = e.accessibleType),
            e.accessibleTitle && null !== e.accessibleTitle
              ? (t.title = e.accessibleTitle)
              : (e.accessibleHint && null !== e.accessibleHint) ||
                (t.title = "displayObject " + e.tabIndex),
            e.accessibleHint &&
              null !== e.accessibleHint &&
              t.setAttribute("aria-label", e.accessibleHint),
            this.debug && this.updateDebugHTML(t),
            (e._accessibleActive = true),
            (e._accessibleDiv = t),
            (t.displayObject = e),
            this.children.push(e),
            this.div.appendChild(e._accessibleDiv),
            (e._accessibleDiv.tabIndex = e.tabIndex))
        }),
        (e.prototype._onClick = function (e) {
          var t = this.renderer.plugins.interaction
          ;(t.dispatchEvent(e.target.displayObject, "click", t.eventData),
            t.dispatchEvent(e.target.displayObject, "pointertap", t.eventData),
            t.dispatchEvent(e.target.displayObject, "tap", t.eventData))
        }),
        (e.prototype._onFocus = function (e) {
          e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "assertive")
          var t = this.renderer.plugins.interaction
          t.dispatchEvent(e.target.displayObject, "mouseover", t.eventData)
        }),
        (e.prototype._onFocusOut = function (e) {
          e.target.getAttribute("aria-live") || e.target.setAttribute("aria-live", "polite")
          var t = this.renderer.plugins.interaction
          t.dispatchEvent(e.target.displayObject, "mouseout", t.eventData)
        }),
        (e.prototype._onKeyDown = function (e) {
          9 === e.keyCode && this.activate()
        }),
        (e.prototype._onMouseMove = function (e) {
          ;(0 === e.movementX && 0 === e.movementY) || this.deactivate()
        }),
        (e.prototype.destroy = function () {
          ;(this.destroyTouchHook(),
            (this.div = null),
            window.document.removeEventListener("mousemove", this._onMouseMove, true),
            window.removeEventListener("keydown", this._onKeyDown),
            (this.pool = null),
            (this.children = null),
            (this.renderer = null))
        }),
        e
      )
    })()
  ;((Y.TARGET_FPMS = 0.06),
    (function (e) {
      ;((e[(e.INTERACTION = 50)] = "INTERACTION"),
        (e[(e.HIGH = 25)] = "HIGH"),
        (e[(e.NORMAL = 0)] = "NORMAL"),
        (e[(e.LOW = -25)] = "LOW"),
        (e[(e.UTILITY = -50)] = "UTILITY"))
    })(pt || (pt = {})))
  var gt = (function () {
      function e(e, t, n, i) {
        ;(undefined === t && (t = null),
          undefined === n && (n = 0),
          undefined === i && (i = false),
          (this.fn = e),
          (this.context = t),
          (this.priority = n),
          (this.once = i),
          (this.next = null),
          (this.previous = null),
          (this._destroyed = false))
      }
      return (
        (e.prototype.match = function (e, t) {
          return (undefined === t && (t = null), this.fn === e && this.context === t)
        }),
        (e.prototype.emit = function (e) {
          this.fn && (this.context ? this.fn.call(this.context, e) : this.fn(e))
          var t = this.next
          return (this.once && this.destroy(true), this._destroyed && (this.next = null), t)
        }),
        (e.prototype.connect = function (e) {
          ;((this.previous = e),
            e.next && (e.next.previous = this),
            (this.next = e.next),
            (e.next = this))
        }),
        (e.prototype.destroy = function (e) {
          ;(undefined === e && (e = false),
            (this._destroyed = true),
            (this.fn = null),
            (this.context = null),
            this.previous && (this.previous.next = this.next),
            this.next && (this.next.previous = this.previous))
          var t = this.next
          return ((this.next = e ? null : t), (this.previous = null), t)
        }),
        e
      )
    })(),
    mt = (function () {
      function e() {
        var e = this
        ;((this._head = new gt(null, null, 1 / 0)),
          (this._requestId = null),
          (this._maxElapsedMS = 100),
          (this._minElapsedMS = 0),
          (this.autoStart = false),
          (this.deltaTime = 1),
          (this.deltaMS = 1 / Y.TARGET_FPMS),
          (this.elapsedMS = 1 / Y.TARGET_FPMS),
          (this.lastTime = -1),
          (this.speed = 1),
          (this.started = false),
          (this._protected = false),
          (this._lastFrame = -1),
          (this._tick = function (t) {
            ;((e._requestId = null),
              e.started &&
                (e.update(t),
                e.started &&
                  null === e._requestId &&
                  e._head.next &&
                  (e._requestId = requestAnimationFrame(e._tick))))
          }))
      }
      return (
        (e.prototype._requestIfNeeded = function () {
          null === this._requestId &&
            this._head.next &&
            ((this.lastTime = performance.now()),
            (this._lastFrame = this.lastTime),
            (this._requestId = requestAnimationFrame(this._tick)))
        }),
        (e.prototype._cancelIfNeeded = function () {
          null !== this._requestId &&
            (cancelAnimationFrame(this._requestId), (this._requestId = null))
        }),
        (e.prototype._startIfPossible = function () {
          this.started ? this._requestIfNeeded() : this.autoStart && this.start()
        }),
        (e.prototype.add = function (e, t, n) {
          return (undefined === n && (n = pt.NORMAL), this._addListener(new gt(e, t, n)))
        }),
        (e.prototype.addOnce = function (e, t, n) {
          return (undefined === n && (n = pt.NORMAL), this._addListener(new gt(e, t, n, true)))
        }),
        (e.prototype._addListener = function (e) {
          var t = this._head.next,
            n = this._head
          if (t) {
            for (; t; ) {
              if (e.priority > t.priority) {
                e.connect(n)
                break
              }
              ;((n = t), (t = t.next))
            }
            e.previous || e.connect(n)
          } else e.connect(n)
          return (this._startIfPossible(), this)
        }),
        (e.prototype.remove = function (e, t) {
          for (var n = this._head.next; n; ) n = n.match(e, t) ? n.destroy() : n.next
          return (this._head.next || this._cancelIfNeeded(), this)
        }),
        Object.defineProperty(e.prototype, "count", {
          get: function () {
            if (!this._head) return 0
            for (var e = 0, t = this._head; (t = t.next); ) e++
            return e
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.start = function () {
          this.started || ((this.started = true), this._requestIfNeeded())
        }),
        (e.prototype.stop = function () {
          this.started && ((this.started = false), this._cancelIfNeeded())
        }),
        (e.prototype.destroy = function () {
          if (!this._protected) {
            this.stop()
            for (var e = this._head.next; e; ) e = e.destroy(true)
            ;(this._head.destroy(), (this._head = null))
          }
        }),
        (e.prototype.update = function (e) {
          var t
          if ((undefined === e && (e = performance.now()), e > this.lastTime)) {
            if (
              ((t = this.elapsedMS = e - this.lastTime) > this._maxElapsedMS &&
                (t = this._maxElapsedMS),
              (t *= this.speed),
              this._minElapsedMS)
            ) {
              var n = (e - this._lastFrame) | 0
              if (n < this._minElapsedMS) return
              this._lastFrame = e - (n % this._minElapsedMS)
            }
            ;((this.deltaMS = t), (this.deltaTime = this.deltaMS * Y.TARGET_FPMS))
            for (var i = this._head, r = i.next; r; ) r = r.emit(this.deltaTime)
            i.next || this._cancelIfNeeded()
          } else this.deltaTime = this.deltaMS = this.elapsedMS = 0
          this.lastTime = e
        }),
        Object.defineProperty(e.prototype, "FPS", {
          get: function () {
            return 1e3 / this.elapsedMS
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "minFPS", {
          get: function () {
            return 1e3 / this._maxElapsedMS
          },
          set: function (e) {
            var t = Math.min(this.maxFPS, e),
              n = Math.min(Math.max(0, t) / 1e3, Y.TARGET_FPMS)
            this._maxElapsedMS = 1 / n
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "maxFPS", {
          get: function () {
            return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
          },
          set: function (e) {
            if (0 === e) this._minElapsedMS = 0
            else {
              var t = Math.max(this.minFPS, e)
              this._minElapsedMS = 1 / (t / 1e3)
            }
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e, "shared", {
          get: function () {
            if (!e._shared) {
              var t = (e._shared = new e())
              ;((t.autoStart = true), (t._protected = true))
            }
            return e._shared
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e, "system", {
          get: function () {
            if (!e._system) {
              var t = (e._system = new e())
              ;((t.autoStart = true), (t._protected = true))
            }
            return e._system
          },
          enumerable: false,
          configurable: true,
        }),
        e
      )
    })(),
    vt = (function () {
      function e() {}
      return (
        (e.init = function (e) {
          var t = this
          ;((e = Object.assign({ autoStart: true, sharedTicker: false }, e)),
            Object.defineProperty(this, "ticker", {
              set: function (e) {
                ;(this._ticker && this._ticker.remove(this.render, this),
                  (this._ticker = e),
                  e && e.add(this.render, this, pt.LOW))
              },
              get: function () {
                return this._ticker
              },
            }),
            (this.stop = function () {
              t._ticker.stop()
            }),
            (this.start = function () {
              t._ticker.start()
            }),
            (this._ticker = null),
            (this.ticker = e.sharedTicker ? mt.shared : new mt()),
            e.autoStart && this.start())
        }),
        (e.destroy = function () {
          if (this._ticker) {
            var e = this._ticker
            ;((this.ticker = null), e.destroy())
          }
        }),
        e
      )
    })(),
    yt = (function () {
      function e() {
        ;((this.pressure = 0),
          (this.rotationAngle = 0),
          (this.twist = 0),
          (this.tangentialPressure = 0),
          (this.global = new We()),
          (this.target = null),
          (this.originalEvent = null),
          (this.identifier = null),
          (this.isPrimary = false),
          (this.button = 0),
          (this.buttons = 0),
          (this.width = 0),
          (this.height = 0),
          (this.tiltX = 0),
          (this.tiltY = 0),
          (this.pointerType = null),
          (this.pressure = 0),
          (this.rotationAngle = 0),
          (this.twist = 0),
          (this.tangentialPressure = 0))
      }
      return (
        Object.defineProperty(e.prototype, "pointerId", {
          get: function () {
            return this.identifier
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.getLocalPosition = function (e, t, n) {
          return e.worldTransform.applyInverse(n || this.global, t)
        }),
        (e.prototype.copyEvent = function (e) {
          ;("isPrimary" in e && e.isPrimary && (this.isPrimary = true),
            (this.button = "button" in e && e.button))
          var t = "buttons" in e && e.buttons
          ;((this.buttons = Number.isInteger(t) ? t : "which" in e && e.which),
            (this.width = "width" in e && e.width),
            (this.height = "height" in e && e.height),
            (this.tiltX = "tiltX" in e && e.tiltX),
            (this.tiltY = "tiltY" in e && e.tiltY),
            (this.pointerType = "pointerType" in e && e.pointerType),
            (this.pressure = "pressure" in e && e.pressure),
            (this.rotationAngle = "rotationAngle" in e && e.rotationAngle),
            (this.twist = ("twist" in e && e.twist) || 0),
            (this.tangentialPressure = ("tangentialPressure" in e && e.tangentialPressure) || 0))
        }),
        (e.prototype.reset = function () {
          this.isPrimary = false
        }),
        e
      )
    })(),
    Ct = function (e, t) {
      return (
        (Ct =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        Ct(e, t)
      )
    }
  var bt = (function () {
      function e() {
        ;((this.stopped = false),
          (this.stopsPropagatingAt = null),
          (this.stopPropagationHint = false),
          (this.target = null),
          (this.currentTarget = null),
          (this.type = null),
          (this.data = null))
      }
      return (
        (e.prototype.stopPropagation = function () {
          ;((this.stopped = true),
            (this.stopPropagationHint = true),
            (this.stopsPropagatingAt = this.currentTarget))
        }),
        (e.prototype.reset = function () {
          ;((this.stopped = false),
            (this.stopsPropagatingAt = null),
            (this.stopPropagationHint = false),
            (this.currentTarget = null),
            (this.target = null))
        }),
        e
      )
    })(),
    wt = (function () {
      function e(t) {
        ;((this._pointerId = t), (this._flags = e.FLAGS.NONE))
      }
      return (
        (e.prototype._doSet = function (e, t) {
          this._flags = t ? this._flags | e : this._flags & ~e
        }),
        Object.defineProperty(e.prototype, "pointerId", {
          get: function () {
            return this._pointerId
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "flags", {
          get: function () {
            return this._flags
          },
          set: function (e) {
            this._flags = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "none", {
          get: function () {
            return this._flags === e.FLAGS.NONE
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "over", {
          get: function () {
            return 0 != (this._flags & e.FLAGS.OVER)
          },
          set: function (t) {
            this._doSet(e.FLAGS.OVER, t)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "rightDown", {
          get: function () {
            return 0 != (this._flags & e.FLAGS.RIGHT_DOWN)
          },
          set: function (t) {
            this._doSet(e.FLAGS.RIGHT_DOWN, t)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "leftDown", {
          get: function () {
            return 0 != (this._flags & e.FLAGS.LEFT_DOWN)
          },
          set: function (t) {
            this._doSet(e.FLAGS.LEFT_DOWN, t)
          },
          enumerable: false,
          configurable: true,
        }),
        (e.FLAGS = Object.freeze({ NONE: 0, OVER: 1, LEFT_DOWN: 2, RIGHT_DOWN: 4 })),
        e
      )
    })(),
    xt = (function () {
      function e() {
        this._tempPoint = new We()
      }
      return (
        (e.prototype.recursiveFindHit = function (e, t, n, i, r) {
          if (!t || !t.visible) return false
          var o = e.data.global,
            a = false,
            s = (r = t.interactive || r),
            u = true
          if (
            (t.hitArea
              ? (i &&
                  (t.worldTransform.applyInverse(o, this._tempPoint),
                  t.hitArea.contains(this._tempPoint.x, this._tempPoint.y)
                    ? (a = true)
                    : ((i = false), (u = false))),
                (s = false))
              : t._mask && i && ((t._mask.containsPoint && t._mask.containsPoint(o)) || (i = false)),
            u && t.interactiveChildren && t.children)
          )
            for (var l = t.children, c = l.length - 1; c >= 0; c--) {
              var d = l[c],
                h = this.recursiveFindHit(e, d, n, i, s)
              if (h) {
                if (!d.parent) continue
                ;((s = false), h && (e.target && (i = false), (a = true)))
              }
            }
          return (
            r &&
              (i && !e.target && !t.hitArea && t.containsPoint && t.containsPoint(o) && (a = true),
              t.interactive && (a && !e.target && (e.target = t), n && n(e, t, !!a))),
            a
          )
        }),
        (e.prototype.findHit = function (e, t, n, i) {
          this.recursiveFindHit(e, t, n, i, false)
        }),
        e
      )
    })(),
    Tt = {
      interactive: false,
      interactiveChildren: true,
      hitArea: null,
      get buttonMode() {
        return "pointer" === this.cursor
      },
      set buttonMode(e) {
        e ? (this.cursor = "pointer") : "pointer" === this.cursor && (this.cursor = null)
      },
      cursor: null,
      get trackedPointers() {
        return (
          undefined === this._trackedPointers && (this._trackedPointers = {}),
          this._trackedPointers
        )
      },
      _trackedPointers: undefined,
    }
  ut.mixin(Tt)
  var St = { target: null, data: { global: null } },
    Lt = (function (e) {
      function t(t, n) {
        var i = e.call(this) || this
        return (
          (n = n || {}),
          (i.renderer = t),
          (i.autoPreventDefault = undefined === n.autoPreventDefault || n.autoPreventDefault),
          (i.interactionFrequency = n.interactionFrequency || 10),
          (i.mouse = new yt()),
          (i.mouse.identifier = 1),
          i.mouse.global.set(-999999),
          (i.activeInteractionData = {}),
          (i.activeInteractionData[1] = i.mouse),
          (i.interactionDataPool = []),
          (i.eventData = new bt()),
          (i.interactionDOMElement = null),
          (i.moveWhenInside = false),
          (i.eventsAdded = false),
          (i.tickerAdded = false),
          (i.mouseOverRenderer = false),
          (i.supportsTouchEvents = "ontouchstart" in window),
          (i.supportsPointerEvents = !!window.PointerEvent),
          (i.onPointerUp = i.onPointerUp.bind(i)),
          (i.processPointerUp = i.processPointerUp.bind(i)),
          (i.onPointerCancel = i.onPointerCancel.bind(i)),
          (i.processPointerCancel = i.processPointerCancel.bind(i)),
          (i.onPointerDown = i.onPointerDown.bind(i)),
          (i.processPointerDown = i.processPointerDown.bind(i)),
          (i.onPointerMove = i.onPointerMove.bind(i)),
          (i.processPointerMove = i.processPointerMove.bind(i)),
          (i.onPointerOut = i.onPointerOut.bind(i)),
          (i.processPointerOverOut = i.processPointerOverOut.bind(i)),
          (i.onPointerOver = i.onPointerOver.bind(i)),
          (i.cursorStyles = { default: "inherit", pointer: "pointer" }),
          (i.currentCursorMode = null),
          (i.cursor = null),
          (i.resolution = 1),
          (i.delayedEvents = []),
          (i.search = new xt()),
          (i._tempDisplayObject = new lt()),
          (i._useSystemTicker = undefined === n.useSystemTicker || n.useSystemTicker),
          i.setTargetElement(i.renderer.view, i.renderer.resolution),
          i
        )
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(Ct(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        Object.defineProperty(t.prototype, "useSystemTicker", {
          get: function () {
            return this._useSystemTicker
          },
          set: function (e) {
            ;((this._useSystemTicker = e),
              e ? this.addTickerListener() : this.removeTickerListener())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "lastObjectRendered", {
          get: function () {
            return this.renderer._lastObjectRendered || this._tempDisplayObject
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.hitTest = function (e, t) {
          return (
            (St.target = null),
            (St.data.global = e),
            t || (t = this.lastObjectRendered),
            this.processInteractive(St, t, null, true),
            St.target
          )
        }),
        (t.prototype.setTargetElement = function (e, t) {
          ;(undefined === t && (t = 1),
            this.removeTickerListener(),
            this.removeEvents(),
            (this.interactionDOMElement = e),
            (this.resolution = t),
            this.addEvents(),
            this.addTickerListener())
        }),
        (t.prototype.addTickerListener = function () {
          !this.tickerAdded &&
            this.interactionDOMElement &&
            this._useSystemTicker &&
            (mt.system.add(this.tickerUpdate, this, pt.INTERACTION), (this.tickerAdded = true))
        }),
        (t.prototype.removeTickerListener = function () {
          this.tickerAdded && (mt.system.remove(this.tickerUpdate, this), (this.tickerAdded = false))
        }),
        (t.prototype.addEvents = function () {
          if (!this.eventsAdded && this.interactionDOMElement) {
            var e = this.interactionDOMElement.style
            ;(window.navigator.msPointerEnabled
              ? ((e.msContentZooming = "none"), (e.msTouchAction = "none"))
              : this.supportsPointerEvents && (e.touchAction = "none"),
              this.supportsPointerEvents
                ? (window.document.addEventListener("pointermove", this.onPointerMove, true),
                  this.interactionDOMElement.addEventListener(
                    "pointerdown",
                    this.onPointerDown,
                    true,
                  ),
                  this.interactionDOMElement.addEventListener(
                    "pointerleave",
                    this.onPointerOut,
                    true,
                  ),
                  this.interactionDOMElement.addEventListener(
                    "pointerover",
                    this.onPointerOver,
                    true,
                  ),
                  window.addEventListener("pointercancel", this.onPointerCancel, true),
                  window.addEventListener("pointerup", this.onPointerUp, true))
                : (window.document.addEventListener("mousemove", this.onPointerMove, true),
                  this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, true),
                  this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, true),
                  this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, true),
                  window.addEventListener("mouseup", this.onPointerUp, true)),
              this.supportsTouchEvents &&
                (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, true),
                this.interactionDOMElement.addEventListener(
                  "touchcancel",
                  this.onPointerCancel,
                  true,
                ),
                this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, true),
                this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, true)),
              (this.eventsAdded = true))
          }
        }),
        (t.prototype.removeEvents = function () {
          if (this.eventsAdded && this.interactionDOMElement) {
            var e = this.interactionDOMElement.style
            ;(window.navigator.msPointerEnabled
              ? ((e.msContentZooming = ""), (e.msTouchAction = ""))
              : this.supportsPointerEvents && (e.touchAction = ""),
              this.supportsPointerEvents
                ? (window.document.removeEventListener("pointermove", this.onPointerMove, true),
                  this.interactionDOMElement.removeEventListener(
                    "pointerdown",
                    this.onPointerDown,
                    true,
                  ),
                  this.interactionDOMElement.removeEventListener(
                    "pointerleave",
                    this.onPointerOut,
                    true,
                  ),
                  this.interactionDOMElement.removeEventListener(
                    "pointerover",
                    this.onPointerOver,
                    true,
                  ),
                  window.removeEventListener("pointercancel", this.onPointerCancel, true),
                  window.removeEventListener("pointerup", this.onPointerUp, true))
                : (window.document.removeEventListener("mousemove", this.onPointerMove, true),
                  this.interactionDOMElement.removeEventListener(
                    "mousedown",
                    this.onPointerDown,
                    true,
                  ),
                  this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, true),
                  this.interactionDOMElement.removeEventListener(
                    "mouseover",
                    this.onPointerOver,
                    true,
                  ),
                  window.removeEventListener("mouseup", this.onPointerUp, true)),
              this.supportsTouchEvents &&
                (this.interactionDOMElement.removeEventListener(
                  "touchstart",
                  this.onPointerDown,
                  true,
                ),
                this.interactionDOMElement.removeEventListener(
                  "touchcancel",
                  this.onPointerCancel,
                  true,
                ),
                this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, true),
                this.interactionDOMElement.removeEventListener(
                  "touchmove",
                  this.onPointerMove,
                  true,
                )),
              (this.interactionDOMElement = null),
              (this.eventsAdded = false))
          }
        }),
        (t.prototype.tickerUpdate = function (e) {
          ;((this._deltaTime += e),
            this._deltaTime < this.interactionFrequency || ((this._deltaTime = 0), this.update()))
        }),
        (t.prototype.update = function () {
          if (this.interactionDOMElement)
            if (this._didMove) this._didMove = false
            else {
              for (var e in ((this.cursor = null), this.activeInteractionData))
                if (this.activeInteractionData.hasOwnProperty(e)) {
                  var t = this.activeInteractionData[e]
                  if (t.originalEvent && "touch" !== t.pointerType) {
                    var n = this.configureInteractionEventForDOMEvent(
                      this.eventData,
                      t.originalEvent,
                      t,
                    )
                    this.processInteractive(
                      n,
                      this.lastObjectRendered,
                      this.processPointerOverOut,
                      true,
                    )
                  }
                }
              this.setCursorMode(this.cursor)
            }
        }),
        (t.prototype.setCursorMode = function (e) {
          if (((e = e || "default"), this.currentCursorMode !== e)) {
            this.currentCursorMode = e
            var t = this.cursorStyles[e]
            if (t)
              switch (typeof t) {
                case "string":
                  this.interactionDOMElement.style.cursor = t
                  break
                case "function":
                  t(e)
                  break
                case "object":
                  Object.assign(this.interactionDOMElement.style, t)
              }
            else
              "string" != typeof e ||
                Object.prototype.hasOwnProperty.call(this.cursorStyles, e) ||
                (this.interactionDOMElement.style.cursor = e)
          }
        }),
        (t.prototype.dispatchEvent = function (e, t, n) {
          ;(n.stopPropagationHint && e !== n.stopsPropagatingAt) ||
            ((n.currentTarget = e), (n.type = t), e.emit(t, n), e[t] && e[t](n))
        }),
        (t.prototype.delayDispatchEvent = function (e, t, n) {
          this.delayedEvents.push({ displayObject: e, eventString: t, eventData: n })
        }),
        (t.prototype.mapPositionToPoint = function (e, t, n) {
          var i
          i = this.interactionDOMElement.parentElement
            ? this.interactionDOMElement.getBoundingClientRect()
            : { x: 0, y: 0, width: 0, height: 0 }
          var r = 1 / this.resolution
          ;((e.x = (t - i.left) * (this.interactionDOMElement.width / i.width) * r),
            (e.y = (n - i.top) * (this.interactionDOMElement.height / i.height) * r))
        }),
        (t.prototype.processInteractive = function (e, t, n, i) {
          var r = this.search.findHit(e, t, n, i),
            o = this.delayedEvents
          if (!o.length) return r
          e.stopPropagationHint = false
          var a = o.length
          this.delayedEvents = []
          for (var s = 0; s < a; s++) {
            var u = o[s],
              l = u.displayObject,
              c = u.eventString,
              d = u.eventData
            ;(d.stopsPropagatingAt === l && (d.stopPropagationHint = true),
              this.dispatchEvent(l, c, d))
          }
          return r
        }),
        (t.prototype.onPointerDown = function (e) {
          if (!this.supportsTouchEvents || "touch" !== e.pointerType) {
            var t = this.normalizeToPointerData(e)
            if (this.autoPreventDefault && t[0].isNormalized)
              (e.cancelable || !("cancelable" in e)) && e.preventDefault()
            for (var n = t.length, i = 0; i < n; i++) {
              var r = t[i],
                o = this.getInteractionDataForPointerId(r),
                a = this.configureInteractionEventForDOMEvent(this.eventData, r, o)
              if (
                ((a.data.originalEvent = e),
                this.processInteractive(a, this.lastObjectRendered, this.processPointerDown, true),
                this.emit("pointerdown", a),
                "touch" === r.pointerType)
              )
                this.emit("touchstart", a)
              else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
                var s = 2 === r.button
                this.emit(s ? "rightdown" : "mousedown", this.eventData)
              }
            }
          }
        }),
        (t.prototype.processPointerDown = function (e, t, n) {
          var i = e.data,
            r = e.data.identifier
          if (n)
            if (
              (t.trackedPointers[r] || (t.trackedPointers[r] = new wt(r)),
              this.dispatchEvent(t, "pointerdown", e),
              "touch" === i.pointerType)
            )
              this.dispatchEvent(t, "touchstart", e)
            else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
              var o = 2 === i.button
              ;(o ? (t.trackedPointers[r].rightDown = true) : (t.trackedPointers[r].leftDown = true),
                this.dispatchEvent(t, o ? "rightdown" : "mousedown", e))
            }
        }),
        (t.prototype.onPointerComplete = function (e, t, n) {
          for (
            var i = this.normalizeToPointerData(e),
              r = i.length,
              o = e.target !== this.interactionDOMElement ? "outside" : "",
              a = 0;
            a < r;
            a++
          ) {
            var s = i[a],
              u = this.getInteractionDataForPointerId(s),
              l = this.configureInteractionEventForDOMEvent(this.eventData, s, u)
            if (
              ((l.data.originalEvent = e),
              this.processInteractive(l, this.lastObjectRendered, n, t || !o),
              this.emit(t ? "pointercancel" : "pointerup" + o, l),
              "mouse" === s.pointerType || "pen" === s.pointerType)
            ) {
              var c = 2 === s.button
              this.emit(c ? "rightup" + o : "mouseup" + o, l)
            } else
              "touch" === s.pointerType &&
                (this.emit(t ? "touchcancel" : "touchend" + o, l),
                this.releaseInteractionDataForPointerId(s.pointerId))
          }
        }),
        (t.prototype.onPointerCancel = function (e) {
          ;(this.supportsTouchEvents && "touch" === e.pointerType) ||
            this.onPointerComplete(e, true, this.processPointerCancel)
        }),
        (t.prototype.processPointerCancel = function (e, t) {
          var n = e.data,
            i = e.data.identifier
          undefined !== t.trackedPointers[i] &&
            (delete t.trackedPointers[i],
            this.dispatchEvent(t, "pointercancel", e),
            "touch" === n.pointerType && this.dispatchEvent(t, "touchcancel", e))
        }),
        (t.prototype.onPointerUp = function (e) {
          ;(this.supportsTouchEvents && "touch" === e.pointerType) ||
            this.onPointerComplete(e, false, this.processPointerUp)
        }),
        (t.prototype.processPointerUp = function (e, t, n) {
          var i = e.data,
            r = e.data.identifier,
            o = t.trackedPointers[r],
            a = "touch" === i.pointerType,
            s = "mouse" === i.pointerType || "pen" === i.pointerType,
            u = false
          if (s) {
            var l = 2 === i.button,
              c = wt.FLAGS,
              d = l ? c.RIGHT_DOWN : c.LEFT_DOWN,
              h = undefined !== o && o.flags & d
            ;(n
              ? (this.dispatchEvent(t, l ? "rightup" : "mouseup", e),
                h && (this.dispatchEvent(t, l ? "rightclick" : "click", e), (u = true)))
              : h && this.dispatchEvent(t, l ? "rightupoutside" : "mouseupoutside", e),
              o && (l ? (o.rightDown = false) : (o.leftDown = false)))
          }
          ;(n
            ? (this.dispatchEvent(t, "pointerup", e),
              a && this.dispatchEvent(t, "touchend", e),
              o &&
                ((s && !u) || this.dispatchEvent(t, "pointertap", e),
                a && (this.dispatchEvent(t, "tap", e), (o.over = false))))
            : o &&
              (this.dispatchEvent(t, "pointerupoutside", e),
              a && this.dispatchEvent(t, "touchendoutside", e)),
            o && o.none && delete t.trackedPointers[r])
        }),
        (t.prototype.onPointerMove = function (e) {
          if (!this.supportsTouchEvents || "touch" !== e.pointerType) {
            var t = this.normalizeToPointerData(e)
            ;("mouse" !== t[0].pointerType && "pen" !== t[0].pointerType) ||
              ((this._didMove = true), (this.cursor = null))
            for (var n = t.length, i = 0; i < n; i++) {
              var r = t[i],
                o = this.getInteractionDataForPointerId(r),
                a = this.configureInteractionEventForDOMEvent(this.eventData, r, o)
              ;((a.data.originalEvent = e),
                this.processInteractive(a, this.lastObjectRendered, this.processPointerMove, true),
                this.emit("pointermove", a),
                "touch" === r.pointerType && this.emit("touchmove", a),
                ("mouse" !== r.pointerType && "pen" !== r.pointerType) || this.emit("mousemove", a))
            }
            "mouse" === t[0].pointerType && this.setCursorMode(this.cursor)
          }
        }),
        (t.prototype.processPointerMove = function (e, t, n) {
          var i = e.data,
            r = "touch" === i.pointerType,
            o = "mouse" === i.pointerType || "pen" === i.pointerType
          ;(o && this.processPointerOverOut(e, t, n),
            (this.moveWhenInside && !n) ||
              (this.dispatchEvent(t, "pointermove", e),
              r && this.dispatchEvent(t, "touchmove", e),
              o && this.dispatchEvent(t, "mousemove", e)))
        }),
        (t.prototype.onPointerOut = function (e) {
          if (!this.supportsTouchEvents || "touch" !== e.pointerType) {
            var t = this.normalizeToPointerData(e)[0]
            "mouse" === t.pointerType && ((this.mouseOverRenderer = false), this.setCursorMode(null))
            var n = this.getInteractionDataForPointerId(t),
              i = this.configureInteractionEventForDOMEvent(this.eventData, t, n)
            ;((i.data.originalEvent = t),
              this.processInteractive(i, this.lastObjectRendered, this.processPointerOverOut, false),
              this.emit("pointerout", i),
              "mouse" === t.pointerType || "pen" === t.pointerType
                ? this.emit("mouseout", i)
                : this.releaseInteractionDataForPointerId(n.identifier))
          }
        }),
        (t.prototype.processPointerOverOut = function (e, t, n) {
          var i = e.data,
            r = e.data.identifier,
            o = "mouse" === i.pointerType || "pen" === i.pointerType,
            a = t.trackedPointers[r]
          ;(n && !a && (a = t.trackedPointers[r] = new wt(r)),
            undefined !== a &&
              (n && this.mouseOverRenderer
                ? (a.over ||
                    ((a.over = true),
                    this.delayDispatchEvent(t, "pointerover", e),
                    o && this.delayDispatchEvent(t, "mouseover", e)),
                  o && null === this.cursor && (this.cursor = t.cursor))
                : a.over &&
                  ((a.over = false),
                  this.dispatchEvent(t, "pointerout", this.eventData),
                  o && this.dispatchEvent(t, "mouseout", e),
                  a.none && delete t.trackedPointers[r])))
        }),
        (t.prototype.onPointerOver = function (e) {
          var t = this.normalizeToPointerData(e)[0],
            n = this.getInteractionDataForPointerId(t),
            i = this.configureInteractionEventForDOMEvent(this.eventData, t, n)
          ;((i.data.originalEvent = t),
            "mouse" === t.pointerType && (this.mouseOverRenderer = true),
            this.emit("pointerover", i),
            ("mouse" !== t.pointerType && "pen" !== t.pointerType) || this.emit("mouseover", i))
        }),
        (t.prototype.getInteractionDataForPointerId = function (e) {
          var t,
            n = e.pointerId
          return (
            1 === n || "mouse" === e.pointerType
              ? (t = this.mouse)
              : this.activeInteractionData[n]
                ? (t = this.activeInteractionData[n])
                : (((t = this.interactionDataPool.pop() || new yt()).identifier = n),
                  (this.activeInteractionData[n] = t)),
            t.copyEvent(e),
            t
          )
        }),
        (t.prototype.releaseInteractionDataForPointerId = function (e) {
          var t = this.activeInteractionData[e]
          t && (delete this.activeInteractionData[e], t.reset(), this.interactionDataPool.push(t))
        }),
        (t.prototype.configureInteractionEventForDOMEvent = function (e, t, n) {
          return (
            (e.data = n),
            this.mapPositionToPoint(n.global, t.clientX, t.clientY),
            "touch" === t.pointerType && ((t.globalX = n.global.x), (t.globalY = n.global.y)),
            (n.originalEvent = t),
            e.reset(),
            e
          )
        }),
        (t.prototype.normalizeToPointerData = function (e) {
          var t = []
          if (this.supportsTouchEvents && e instanceof TouchEvent)
            for (var n = 0, i = e.changedTouches.length; n < i; n++) {
              var r = e.changedTouches[n]
              ;(undefined === r.button && (r.button = e.touches.length ? 1 : 0),
                undefined === r.buttons && (r.buttons = e.touches.length ? 1 : 0),
                undefined === r.isPrimary &&
                  (r.isPrimary = 1 === e.touches.length && "touchstart" === e.type),
                undefined === r.width && (r.width = r.radiusX || 1),
                undefined === r.height && (r.height = r.radiusY || 1),
                undefined === r.tiltX && (r.tiltX = 0),
                undefined === r.tiltY && (r.tiltY = 0),
                undefined === r.pointerType && (r.pointerType = "touch"),
                undefined === r.pointerId && (r.pointerId = r.identifier || 0),
                undefined === r.pressure && (r.pressure = r.force || 0.5),
                undefined === r.twist && (r.twist = 0),
                undefined === r.tangentialPressure && (r.tangentialPressure = 0),
                undefined === r.layerX && (r.layerX = r.offsetX = r.clientX),
                undefined === r.layerY && (r.layerY = r.offsetY = r.clientY),
                (r.isNormalized = true),
                t.push(r))
            }
          else if (
            !(e instanceof MouseEvent) ||
            (this.supportsPointerEvents && e instanceof window.PointerEvent)
          )
            t.push(e)
          else {
            var o = e
            ;(undefined === o.isPrimary && (o.isPrimary = true),
              undefined === o.width && (o.width = 1),
              undefined === o.height && (o.height = 1),
              undefined === o.tiltX && (o.tiltX = 0),
              undefined === o.tiltY && (o.tiltY = 0),
              undefined === o.pointerType && (o.pointerType = "mouse"),
              undefined === o.pointerId && (o.pointerId = 1),
              undefined === o.pressure && (o.pressure = 0.5),
              undefined === o.twist && (o.twist = 0),
              undefined === o.tangentialPressure && (o.tangentialPressure = 0),
              (o.isNormalized = true),
              t.push(o))
          }
          return t
        }),
        (t.prototype.destroy = function () {
          ;(this.removeEvents(),
            this.removeTickerListener(),
            this.removeAllListeners(),
            (this.renderer = null),
            (this.mouse = null),
            (this.eventData = null),
            (this.interactionDOMElement = null),
            (this.onPointerDown = null),
            (this.processPointerDown = null),
            (this.onPointerUp = null),
            (this.processPointerUp = null),
            (this.onPointerCancel = null),
            (this.processPointerCancel = null),
            (this.onPointerMove = null),
            (this.processPointerMove = null),
            (this.onPointerOut = null),
            (this.processPointerOverOut = null),
            (this.onPointerOver = null),
            (this.search = null))
        }),
        t
      )
    })(X()),
    Et = (function () {
      function e(e) {
        ;((this.items = []), (this._name = e), (this._aliasCount = 0))
      }
      return (
        (e.prototype.emit = function (e, t, n, i, r, o, a, s) {
          if (arguments.length > 8) throw new Error("max arguments reached")
          var u = this,
            l = u.name,
            c = u.items
          this._aliasCount++
          for (var d = 0, h = c.length; d < h; d++) c[d][l](e, t, n, i, r, o, a, s)
          return (c === this.items && this._aliasCount--, this)
        }),
        (e.prototype.ensureNonAliasedItems = function () {
          this._aliasCount > 0 &&
            this.items.length > 1 &&
            ((this._aliasCount = 0), (this.items = this.items.slice(0)))
        }),
        (e.prototype.add = function (e) {
          return (
            e[this._name] && (this.ensureNonAliasedItems(), this.remove(e), this.items.push(e)),
            this
          )
        }),
        (e.prototype.remove = function (e) {
          var t = this.items.indexOf(e)
          return (-1 !== t && (this.ensureNonAliasedItems(), this.items.splice(t, 1)), this)
        }),
        (e.prototype.contains = function (e) {
          return -1 !== this.items.indexOf(e)
        }),
        (e.prototype.removeAll = function () {
          return (this.ensureNonAliasedItems(), (this.items.length = 0), this)
        }),
        (e.prototype.destroy = function () {
          ;(this.removeAll(), (this.items = null), (this._name = null))
        }),
        Object.defineProperty(e.prototype, "empty", {
          get: function () {
            return 0 === this.items.length
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "name", {
          get: function () {
            return this._name
          },
          enumerable: false,
          configurable: true,
        }),
        e
      )
    })()
  ;(Object.defineProperties(Et.prototype, {
    dispatch: { value: Et.prototype.emit },
    run: { value: Et.prototype.emit },
  }),
    (Y.PREFER_ENV = A.any ? I.WEBGL : I.WEBGL2),
    (Y.STRICT_TEXTURE_CACHE = false))
  var At = []
  function It(e, t) {
    if (!e) return null
    var n = ""
    if ("string" == typeof e) {
      var i = /\.(\w{3,4})(?:$|\?|#)/i.exec(e)
      i && (n = i[1].toLowerCase())
    }
    for (var r = At.length - 1; r >= 0; --r) {
      var o = At[r]
      if (o.test && o.test(e, n)) return new o(e, t)
    }
    throw new Error("Unrecognized source type to auto-detect Resource")
  }
  var Mt = function (e, t) {
    return (
      (Mt =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }),
      Mt(e, t)
    )
  }
  function Pt(e, t) {
    function n() {
      this.constructor = e
    }
    ;(Mt(e, t),
      (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var Ot = (function () {
      function e(e, t) {
        ;(undefined === e && (e = 0),
          undefined === t && (t = 0),
          (this._width = e),
          (this._height = t),
          (this.destroyed = false),
          (this.internal = false),
          (this.onResize = new Et("setRealSize")),
          (this.onUpdate = new Et("update")),
          (this.onError = new Et("onError")))
      }
      return (
        (e.prototype.bind = function (e) {
          ;(this.onResize.add(e),
            this.onUpdate.add(e),
            this.onError.add(e),
            (this._width || this._height) && this.onResize.emit(this._width, this._height))
        }),
        (e.prototype.unbind = function (e) {
          ;(this.onResize.remove(e), this.onUpdate.remove(e), this.onError.remove(e))
        }),
        (e.prototype.resize = function (e, t) {
          ;(e === this._width && t === this._height) ||
            ((this._width = e), (this._height = t), this.onResize.emit(e, t))
        }),
        Object.defineProperty(e.prototype, "valid", {
          get: function () {
            return !!this._width && !!this._height
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.update = function () {
          this.destroyed || this.onUpdate.emit()
        }),
        (e.prototype.load = function () {
          return Promise.resolve(this)
        }),
        Object.defineProperty(e.prototype, "width", {
          get: function () {
            return this._width
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "height", {
          get: function () {
            return this._height
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.style = function (e, t, n) {
          return false
        }),
        (e.prototype.dispose = function () {}),
        (e.prototype.destroy = function () {
          this.destroyed ||
            ((this.destroyed = true),
            this.dispose(),
            this.onError.removeAll(),
            (this.onError = null),
            this.onResize.removeAll(),
            (this.onResize = null),
            this.onUpdate.removeAll(),
            (this.onUpdate = null))
        }),
        (e.test = function (e, t) {
          return false
        }),
        e
      )
    })(),
    Rt = (function (e) {
      function t(t, n) {
        var i = this,
          r = n || {},
          o = r.width,
          a = r.height
        if (!o || !a) throw new Error("BufferResource width or height invalid")
        return (((i = e.call(this, o, a) || this).data = t), i)
      }
      return (
        Pt(t, e),
        (t.prototype.upload = function (e, t, n) {
          var i = e.gl
          return (
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === G.UNPACK),
            n.width === t.width && n.height === t.height
              ? i.texSubImage2D(t.target, 0, 0, 0, t.width, t.height, t.format, t.type, this.data)
              : ((n.width = t.width),
                (n.height = t.height),
                i.texImage2D(
                  t.target,
                  0,
                  n.internalFormat,
                  t.width,
                  t.height,
                  0,
                  t.format,
                  n.type,
                  this.data,
                )),
            true
          )
        }),
        (t.prototype.dispose = function () {
          this.data = null
        }),
        (t.test = function (e) {
          return e instanceof Float32Array || e instanceof Uint8Array || e instanceof Uint32Array
        }),
        t
      )
    })(Ot),
    kt = { scaleMode: B.NEAREST, format: k.RGBA, alphaMode: G.NPM },
    Nt = (function (e) {
      function t(t, n) {
        ;(undefined === t && (t = null), undefined === n && (n = null))
        var i = e.call(this) || this,
          r = (n = n || {}).alphaMode,
          o = n.mipmap,
          a = n.anisotropicLevel,
          s = n.scaleMode,
          u = n.width,
          l = n.height,
          c = n.wrapMode,
          d = n.format,
          h = n.type,
          p = n.target,
          f = n.resolution,
          _ = n.resourceOptions
        return (
          !t || t instanceof Ot || ((t = It(t, _)).internal = true),
          (i.width = u || 0),
          (i.height = l || 0),
          (i.resolution = f || Y.RESOLUTION),
          (i.mipmap = undefined !== o ? o : Y.MIPMAP_TEXTURES),
          (i.anisotropicLevel = undefined !== a ? a : Y.ANISOTROPIC_LEVEL),
          (i.wrapMode = c || Y.WRAP_MODE),
          (i.scaleMode = undefined !== s ? s : Y.SCALE_MODE),
          (i.format = d || k.RGBA),
          (i.type = h || D.UNSIGNED_BYTE),
          (i.target = p || N.TEXTURE_2D),
          (i.alphaMode = undefined !== r ? r : G.UNPACK),
          undefined !== n.premultiplyAlpha && (i.premultiplyAlpha = n.premultiplyAlpha),
          (i.uid = xe()),
          (i.touched = 0),
          (i.isPowerOfTwo = false),
          i._refreshPOT(),
          (i._glTextures = {}),
          (i.dirtyId = 0),
          (i.dirtyStyleId = 0),
          (i.cacheId = null),
          (i.valid = u > 0 && l > 0),
          (i.textureCacheIds = []),
          (i.destroyed = false),
          (i.resource = null),
          (i._batchEnabled = 0),
          (i._batchLocation = 0),
          (i.parentTextureArray = null),
          i.setResource(t),
          i
        )
      }
      return (
        Pt(t, e),
        Object.defineProperty(t.prototype, "realWidth", {
          get: function () {
            return Math.ceil(this.width * this.resolution - 1e-4)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "realHeight", {
          get: function () {
            return Math.ceil(this.height * this.resolution - 1e-4)
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.setStyle = function (e, t) {
          var n
          return (
            undefined !== e && e !== this.scaleMode && ((this.scaleMode = e), (n = true)),
            undefined !== t && t !== this.mipmap && ((this.mipmap = t), (n = true)),
            n && this.dirtyStyleId++,
            this
          )
        }),
        (t.prototype.setSize = function (e, t, n) {
          return (
            (this.resolution = n || this.resolution),
            (this.width = e),
            (this.height = t),
            this._refreshPOT(),
            this.update(),
            this
          )
        }),
        (t.prototype.setRealSize = function (e, t, n) {
          return (
            (this.resolution = n || this.resolution),
            (this.width = e / this.resolution),
            (this.height = t / this.resolution),
            this._refreshPOT(),
            this.update(),
            this
          )
        }),
        (t.prototype._refreshPOT = function () {
          this.isPowerOfTwo = ve(this.realWidth) && ve(this.realHeight)
        }),
        (t.prototype.setResolution = function (e) {
          var t = this.resolution
          return (
            t === e ||
              ((this.resolution = e),
              this.valid &&
                ((this.width = (this.width * t) / e),
                (this.height = (this.height * t) / e),
                this.emit("update", this)),
              this._refreshPOT()),
            this
          )
        }),
        (t.prototype.setResource = function (e) {
          if (this.resource === e) return this
          if (this.resource) throw new Error("Resource can be set only once")
          return (e.bind(this), (this.resource = e), this)
        }),
        (t.prototype.update = function () {
          this.valid
            ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this))
            : this.width > 0 &&
              this.height > 0 &&
              ((this.valid = true), this.emit("loaded", this), this.emit("update", this))
        }),
        (t.prototype.onError = function (e) {
          this.emit("error", this, e)
        }),
        (t.prototype.destroy = function () {
          ;(this.resource &&
            (this.resource.unbind(this),
            this.resource.internal && this.resource.destroy(),
            (this.resource = null)),
            this.cacheId &&
              (delete Ae[this.cacheId], delete Ee[this.cacheId], (this.cacheId = null)),
            this.dispose(),
            t.removeFromCache(this),
            (this.textureCacheIds = null),
            (this.destroyed = true))
        }),
        (t.prototype.dispose = function () {
          this.emit("dispose", this)
        }),
        (t.prototype.castToBaseTexture = function () {
          return this
        }),
        (t.from = function (e, n, i) {
          undefined === i && (i = Y.STRICT_TEXTURE_CACHE)
          var r = "string" == typeof e,
            o = null
          r ? (o = e) : (e._pixiId || (e._pixiId = "pixiid_" + xe()), (o = e._pixiId))
          var a = Ae[o]
          if (r && i && !a)
            throw new Error('The cacheId "' + o + '" does not exist in BaseTextureCache.')
          return (a || (((a = new t(e, n)).cacheId = o), t.addToCache(a, o)), a)
        }),
        (t.fromBuffer = function (e, n, i, r) {
          e = e || new Float32Array(n * i * 4)
          var o = new Rt(e, { width: n, height: i }),
            a = e instanceof Float32Array ? D.FLOAT : D.UNSIGNED_BYTE
          return new t(o, Object.assign(kt, r || { width: n, height: i, type: a }))
        }),
        (t.addToCache = function (e, t) {
          t &&
            (-1 === e.textureCacheIds.indexOf(t) && e.textureCacheIds.push(t),
            Ae[t] &&
              console.warn(
                "BaseTexture added to the cache with an id [" + t + "] that already had an entry",
              ),
            (Ae[t] = e))
        }),
        (t.removeFromCache = function (e) {
          if ("string" == typeof e) {
            var t = Ae[e]
            if (t) {
              var n = t.textureCacheIds.indexOf(e)
              return (n > -1 && t.textureCacheIds.splice(n, 1), delete Ae[e], t)
            }
          } else if (e && e.textureCacheIds) {
            for (var i = 0; i < e.textureCacheIds.length; ++i) delete Ae[e.textureCacheIds[i]]
            return ((e.textureCacheIds.length = 0), e)
          }
          return null
        }),
        (t._globalBatch = 0),
        t
      )
    })(X()),
    Dt = (function (e) {
      function t(t, n) {
        var i = this,
          r = n || {},
          o = r.width,
          a = r.height
        ;(((i = e.call(this, o, a) || this).items = []), (i.itemDirtyIds = []))
        for (var s = 0; s < t; s++) {
          var u = new Nt()
          ;(i.items.push(u), i.itemDirtyIds.push(-2))
        }
        return ((i.length = t), (i._load = null), (i.baseTexture = null), i)
      }
      return (
        Pt(t, e),
        (t.prototype.initFromArray = function (e, t) {
          for (var n = 0; n < this.length; n++)
            e[n] &&
              (e[n].castToBaseTexture
                ? this.addBaseTextureAt(e[n].castToBaseTexture(), n)
                : e[n] instanceof Ot
                  ? this.addResourceAt(e[n], n)
                  : this.addResourceAt(It(e[n], t), n))
        }),
        (t.prototype.dispose = function () {
          for (var e = 0, t = this.length; e < t; e++) this.items[e].destroy()
          ;((this.items = null), (this.itemDirtyIds = null), (this._load = null))
        }),
        (t.prototype.addResourceAt = function (e, t) {
          if (!this.items[t]) throw new Error("Index " + t + " is out of bounds")
          return (
            e.valid && !this.valid && this.resize(e.width, e.height),
            this.items[t].setResource(e),
            this
          )
        }),
        (t.prototype.bind = function (t) {
          if (null !== this.baseTexture)
            throw new Error("Only one base texture per TextureArray is allowed")
          e.prototype.bind.call(this, t)
          for (var n = 0; n < this.length; n++)
            ((this.items[n].parentTextureArray = t), this.items[n].on("update", t.update, t))
        }),
        (t.prototype.unbind = function (t) {
          e.prototype.unbind.call(this, t)
          for (var n = 0; n < this.length; n++)
            ((this.items[n].parentTextureArray = null), this.items[n].off("update", t.update, t))
        }),
        (t.prototype.load = function () {
          var e = this
          if (this._load) return this._load
          var t = this.items
            .map(function (e) {
              return e.resource
            })
            .filter(function (e) {
              return e
            })
            .map(function (e) {
              return e.load()
            })
          return (
            (this._load = Promise.all(t).then(function () {
              var t = e.items[0],
                n = t.realWidth,
                i = t.realHeight
              return (e.resize(n, i), Promise.resolve(e))
            })),
            this._load
          )
        }),
        t
      )
    })(Ot),
    Bt = (function (e) {
      function t(t, n) {
        var i,
          r,
          o = this,
          a = n || {},
          s = a.width,
          u = a.height
        return (
          Array.isArray(t) ? ((i = t), (r = t.length)) : (r = t),
          (o = e.call(this, r, { width: s, height: u }) || this),
          i && o.initFromArray(i, n),
          o
        )
      }
      return (
        Pt(t, e),
        (t.prototype.addBaseTextureAt = function (e, t) {
          if (!e.resource) throw new Error("ArrayResource does not support RenderTexture")
          return (this.addResourceAt(e.resource, t), this)
        }),
        (t.prototype.bind = function (t) {
          ;(e.prototype.bind.call(this, t), (t.target = N.TEXTURE_2D_ARRAY))
        }),
        (t.prototype.upload = function (e, t, n) {
          var i = this,
            r = i.length,
            o = i.itemDirtyIds,
            a = i.items,
            s = e.gl
          n.dirtyId < 0 &&
            s.texImage3D(
              s.TEXTURE_2D_ARRAY,
              0,
              t.format,
              this._width,
              this._height,
              r,
              0,
              t.format,
              t.type,
              null,
            )
          for (var u = 0; u < r; u++) {
            var l = a[u]
            o[u] < l.dirtyId &&
              ((o[u] = l.dirtyId),
              l.valid &&
                s.texSubImage3D(
                  s.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  u,
                  l.resource.width,
                  l.resource.height,
                  1,
                  t.format,
                  t.type,
                  l.resource.source,
                ))
          }
          return true
        }),
        t
      )
    })(Dt),
    Ft = (function (e) {
      function t(t) {
        var n = this,
          i = t,
          r = i.naturalWidth || i.videoWidth || i.width,
          o = i.naturalHeight || i.videoHeight || i.height
        return (((n = e.call(this, r, o) || this).source = t), (n.noSubImage = false), n)
      }
      return (
        Pt(t, e),
        (t.crossOrigin = function (e, t, n) {
          undefined === n && 0 !== t.indexOf("data:")
            ? (e.crossOrigin = De(t))
            : false !== n && (e.crossOrigin = "string" == typeof n ? n : "anonymous")
        }),
        (t.prototype.upload = function (e, t, n, i) {
          var r = e.gl,
            o = t.realWidth,
            a = t.realHeight
          return (
            (i = i || this.source),
            r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === G.UNPACK),
            this.noSubImage || t.target !== r.TEXTURE_2D || n.width !== o || n.height !== a
              ? ((n.width = o),
                (n.height = a),
                r.texImage2D(t.target, 0, t.format, t.format, t.type, i))
              : r.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, t.format, t.type, i),
            true
          )
        }),
        (t.prototype.update = function () {
          if (!this.destroyed) {
            var t = this.source,
              n = t.naturalWidth || t.videoWidth || t.width,
              i = t.naturalHeight || t.videoHeight || t.height
            ;(this.resize(n, i), e.prototype.update.call(this))
          }
        }),
        (t.prototype.dispose = function () {
          this.source = null
        }),
        t
      )
    })(Ot),
    Ut = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Pt(t, e),
        (t.test = function (e) {
          var t = window.OffscreenCanvas
          return !!(t && e instanceof t) || e instanceof HTMLCanvasElement
        }),
        t
      )
    })(Ft),
    Gt = (function (e) {
      function t(n, i) {
        var r = this,
          o = i || {},
          a = o.width,
          s = o.height,
          u = o.autoLoad,
          l = o.linkBaseTexture
        if (n && n.length !== t.SIDES)
          throw new Error("Invalid length. Got " + n.length + ", expected 6")
        r = e.call(this, 6, { width: a, height: s }) || this
        for (var c = 0; c < t.SIDES; c++) r.items[c].target = N.TEXTURE_CUBE_MAP_POSITIVE_X + c
        return ((r.linkBaseTexture = false !== l), n && r.initFromArray(n, i), false !== u && r.load(), r)
      }
      return (
        Pt(t, e),
        (t.prototype.bind = function (t) {
          ;(e.prototype.bind.call(this, t), (t.target = N.TEXTURE_CUBE_MAP))
        }),
        (t.prototype.addBaseTextureAt = function (e, t, n) {
          if ((undefined === n && (n = this.linkBaseTexture), !this.items[t]))
            throw new Error("Index " + t + " is out of bounds")
          if (
            !this.linkBaseTexture ||
            e.parentTextureArray ||
            Object.keys(e._glTextures).length > 0
          ) {
            if (!e.resource)
              throw new Error("CubeResource does not support copying of renderTexture.")
            this.addResourceAt(e.resource, t)
          } else
            ((e.target = N.TEXTURE_CUBE_MAP_POSITIVE_X + t),
              (e.parentTextureArray = this.baseTexture),
              (this.items[t] = e))
          return (
            e.valid && !this.valid && this.resize(e.realWidth, e.realHeight),
            (this.items[t] = e),
            this
          )
        }),
        (t.prototype.upload = function (e, n, i) {
          for (var r = this.itemDirtyIds, o = 0; o < t.SIDES; o++) {
            var a = this.items[o]
            r[o] < a.dirtyId &&
              (a.valid && a.resource
                ? (a.resource.upload(e, a, i), (r[o] = a.dirtyId))
                : r[o] < -1 &&
                  (e.gl.texImage2D(
                    a.target,
                    0,
                    i.internalFormat,
                    n.realWidth,
                    n.realHeight,
                    0,
                    n.format,
                    i.type,
                    null,
                  ),
                  (r[o] = -1)))
          }
          return true
        }),
        (t.test = function (e) {
          return Array.isArray(e) && e.length === t.SIDES
        }),
        (t.SIDES = 6),
        t
      )
    })(Dt),
    jt = (function (e) {
      function t(t, n) {
        var i = this
        if (((n = n || {}), !(t instanceof HTMLImageElement))) {
          var r = new Image()
          ;(Ft.crossOrigin(r, t, n.crossorigin), (r.src = t), (t = r))
        }
        return (
          (i = e.call(this, t) || this),
          !t.complete && i._width && i._height && ((i._width = 0), (i._height = 0)),
          (i.url = t.src),
          (i._process = null),
          (i.preserveBitmap = false),
          (i.createBitmap =
            (undefined !== n.createBitmap ? n.createBitmap : Y.CREATE_IMAGE_BITMAP) &&
            !!window.createImageBitmap),
          (i.alphaMode = "number" == typeof n.alphaMode ? n.alphaMode : null),
          undefined !== n.premultiplyAlpha && (i.premultiplyAlpha = n.premultiplyAlpha),
          (i.bitmap = null),
          (i._load = null),
          false !== n.autoLoad && i.load(),
          i
        )
      }
      return (
        Pt(t, e),
        (t.prototype.load = function (e) {
          var t = this
          return (
            this._load ||
              (undefined !== e && (this.createBitmap = e),
              (this._load = new Promise(function (e, n) {
                var i = t.source
                t.url = i.src
                var r = function () {
                  t.destroyed ||
                    ((i.onload = null),
                    (i.onerror = null),
                    t.resize(i.width, i.height),
                    (t._load = null),
                    t.createBitmap ? e(t.process()) : e(t))
                }
                i.complete && i.src
                  ? r()
                  : ((i.onload = r),
                    (i.onerror = function (e) {
                      ;(n(e), t.onError.emit(e))
                    }))
              }))),
            this._load
          )
        }),
        (t.prototype.process = function () {
          var e = this,
            t = this.source
          return null !== this._process
            ? this._process
            : null === this.bitmap && window.createImageBitmap
              ? ((this._process = window
                  .createImageBitmap(t, 0, 0, t.width, t.height, {
                    premultiplyAlpha: this.alphaMode === G.UNPACK ? "premultiply" : "none",
                  })
                  .then(function (t) {
                    return e.destroyed
                      ? Promise.reject()
                      : ((e.bitmap = t), e.update(), (e._process = null), Promise.resolve(e))
                  })),
                this._process)
              : Promise.resolve(this)
        }),
        (t.prototype.upload = function (t, n, i) {
          if (
            ("number" == typeof this.alphaMode && (n.alphaMode = this.alphaMode),
            !this.createBitmap)
          )
            return e.prototype.upload.call(this, t, n, i)
          if (!this.bitmap && (this.process(), !this.bitmap)) return false
          if ((e.prototype.upload.call(this, t, n, i, this.bitmap), !this.preserveBitmap)) {
            var r = true,
              o = n._glTextures
            for (var a in o) {
              var s = o[a]
              if (s !== i && s.dirtyId !== n.dirtyId) {
                r = false
                break
              }
            }
            r && (this.bitmap.close && this.bitmap.close(), (this.bitmap = null))
          }
          return true
        }),
        (t.prototype.dispose = function () {
          ;((this.source.onload = null),
            (this.source.onerror = null),
            e.prototype.dispose.call(this),
            this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
            (this._process = null),
            (this._load = null))
        }),
        (t.test = function (e) {
          return "string" == typeof e || e instanceof HTMLImageElement
        }),
        t
      )
    })(Ft),
    Ht = (function (e) {
      function t(t, n) {
        var i = this
        return (
          (n = n || {}),
          ((i = e.call(this, document.createElement("canvas")) || this)._width = 0),
          (i._height = 0),
          (i.svg = t),
          (i.scale = n.scale || 1),
          (i._overrideWidth = n.width),
          (i._overrideHeight = n.height),
          (i._resolve = null),
          (i._crossorigin = n.crossorigin),
          (i._load = null),
          false !== n.autoLoad && i.load(),
          i
        )
      }
      return (
        Pt(t, e),
        (t.prototype.load = function () {
          var e = this
          return (
            this._load ||
              (this._load = new Promise(function (t) {
                if (
                  ((e._resolve = function () {
                    ;(e.resize(e.source.width, e.source.height), t(e))
                  }),
                  /^\<svg/.test(e.svg.trim()))
                ) {
                  if (!btoa) throw new Error("Your browser doesn't support base64 conversions.")
                  e.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(e.svg)))
                }
                e._loadSvg()
              })),
            this._load
          )
        }),
        (t.prototype._loadSvg = function () {
          var e = this,
            t = new Image()
          ;(Ft.crossOrigin(t, this.svg, this._crossorigin),
            (t.src = this.svg),
            (t.onerror = function (n) {
              e._resolve && ((t.onerror = null), e.onError.emit(n))
            }),
            (t.onload = function () {
              if (e._resolve) {
                var n = t.width,
                  i = t.height
                if (!n || !i)
                  throw new Error(
                    "The SVG image must have width and height defined (in pixels), canvas API needs them.",
                  )
                var r = n * e.scale,
                  o = i * e.scale
                ;((e._overrideWidth || e._overrideHeight) &&
                  ((r = e._overrideWidth || (e._overrideHeight / i) * n),
                  (o = e._overrideHeight || (e._overrideWidth / n) * i)),
                  (r = Math.round(r)),
                  (o = Math.round(o)))
                var a = e.source
                ;((a.width = r),
                  (a.height = o),
                  (a._pixiId = "canvas_" + xe()),
                  a.getContext("2d").drawImage(t, 0, 0, n, i, 0, 0, r, o),
                  e._resolve(),
                  (e._resolve = null))
              }
            }))
        }),
        (t.getSize = function (e) {
          var n = t.SVG_SIZE.exec(e),
            i = {}
          return (
            n &&
              ((i[n[1]] = Math.round(parseFloat(n[3]))), (i[n[5]] = Math.round(parseFloat(n[7])))),
            i
          )
        }),
        (t.prototype.dispose = function () {
          ;(e.prototype.dispose.call(this), (this._resolve = null), (this._crossorigin = null))
        }),
        (t.test = function (e, t) {
          return (
            "svg" === t ||
            ("string" == typeof e &&
              /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(e)) ||
            ("string" == typeof e && 0 === e.indexOf("<svg"))
          )
        }),
        (t.SVG_SIZE =
          /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i),
        t
      )
    })(Ft),
    Vt = (function (e) {
      function t(n, i) {
        var r = this
        if (((i = i || {}), !(n instanceof HTMLVideoElement))) {
          var o = document.createElement("video")
          ;(o.setAttribute("preload", "auto"),
            o.setAttribute("webkit-playsinline", ""),
            o.setAttribute("playsinline", ""),
            "string" == typeof n && (n = [n]))
          var a = n[0].src || n[0]
          Ft.crossOrigin(o, a, i.crossorigin)
          for (var s = 0; s < n.length; ++s) {
            var u = document.createElement("source"),
              l = n[s],
              c = l.src,
              d = l.mime,
              h = (c = c || n[s]).split("?").shift().toLowerCase(),
              p = h.substr(h.lastIndexOf(".") + 1)
            ;((d = d || t.MIME_TYPES[p] || "video/" + p),
              (u.src = c),
              (u.type = d),
              o.appendChild(u))
          }
          n = o
        }
        return (
          ((r = e.call(this, n) || this).noSubImage = true),
          (r._autoUpdate = true),
          (r._isConnectedToTicker = false),
          (r._updateFPS = i.updateFPS || 0),
          (r._msToNextUpdate = 0),
          (r.autoPlay = false !== i.autoPlay),
          (r._load = null),
          (r._resolve = null),
          (r._onCanPlay = r._onCanPlay.bind(r)),
          (r._onError = r._onError.bind(r)),
          false !== i.autoLoad && r.load(),
          r
        )
      }
      return (
        Pt(t, e),
        (t.prototype.update = function (t) {
          if ((undefined === t && (t = 0), !this.destroyed)) {
            var n = mt.shared.elapsedMS * this.source.playbackRate
            ;((this._msToNextUpdate = Math.floor(this._msToNextUpdate - n)),
              (!this._updateFPS || this._msToNextUpdate <= 0) &&
                (e.prototype.update.call(this),
                (this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)))
          }
        }),
        (t.prototype.load = function () {
          var e = this
          if (this._load) return this._load
          var t = this.source
          return (
            (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) &&
              t.width &&
              t.height &&
              (t.complete = true),
            t.addEventListener("play", this._onPlayStart.bind(this)),
            t.addEventListener("pause", this._onPlayStop.bind(this)),
            this._isSourceReady()
              ? this._onCanPlay()
              : (t.addEventListener("canplay", this._onCanPlay),
                t.addEventListener("canplaythrough", this._onCanPlay),
                t.addEventListener("error", this._onError, true)),
            (this._load = new Promise(function (n) {
              e.valid ? n(e) : ((e._resolve = n), t.load())
            })),
            this._load
          )
        }),
        (t.prototype._onError = function (e) {
          ;(this.source.removeEventListener("error", this._onError, true), this.onError.emit(e))
        }),
        (t.prototype._isSourcePlaying = function () {
          var e = this.source
          return e.currentTime > 0 && false === e.paused && false === e.ended && e.readyState > 2
        }),
        (t.prototype._isSourceReady = function () {
          var e = this.source
          return 3 === e.readyState || 4 === e.readyState
        }),
        (t.prototype._onPlayStart = function () {
          ;(this.valid || this._onCanPlay(),
            this.autoUpdate &&
              !this._isConnectedToTicker &&
              (mt.shared.add(this.update, this), (this._isConnectedToTicker = true)))
        }),
        (t.prototype._onPlayStop = function () {
          this._isConnectedToTicker &&
            (mt.shared.remove(this.update, this), (this._isConnectedToTicker = false))
        }),
        (t.prototype._onCanPlay = function () {
          var e = this.source
          ;(e.removeEventListener("canplay", this._onCanPlay),
            e.removeEventListener("canplaythrough", this._onCanPlay))
          var t = this.valid
          ;(this.resize(e.videoWidth, e.videoHeight),
            !t && this._resolve && (this._resolve(this), (this._resolve = null)),
            this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && e.play())
        }),
        (t.prototype.dispose = function () {
          this._isConnectedToTicker && mt.shared.remove(this.update, this)
          var t = this.source
          ;(t &&
            (t.removeEventListener("error", this._onError, true), t.pause(), (t.src = ""), t.load()),
            e.prototype.dispose.call(this))
        }),
        Object.defineProperty(t.prototype, "autoUpdate", {
          get: function () {
            return this._autoUpdate
          },
          set: function (e) {
            e !== this._autoUpdate &&
              ((this._autoUpdate = e),
              !this._autoUpdate && this._isConnectedToTicker
                ? (mt.shared.remove(this.update, this), (this._isConnectedToTicker = false))
                : this._autoUpdate &&
                  !this._isConnectedToTicker &&
                  this._isSourcePlaying() &&
                  (mt.shared.add(this.update, this), (this._isConnectedToTicker = true)))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "updateFPS", {
          get: function () {
            return this._updateFPS
          },
          set: function (e) {
            e !== this._updateFPS && (this._updateFPS = e)
          },
          enumerable: false,
          configurable: true,
        }),
        (t.test = function (e, n) {
          return e instanceof HTMLVideoElement || t.TYPES.indexOf(n) > -1
        }),
        (t.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"]),
        (t.MIME_TYPES = { ogv: "video/ogg", mov: "video/quicktime", m4v: "video/mp4" }),
        t
      )
    })(Ft),
    Zt = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Pt(t, e),
        (t.test = function (e) {
          return !!window.createImageBitmap && e instanceof ImageBitmap
        }),
        t
      )
    })(Ft)
  At.push(jt, Zt, Ut, Vt, Ht, Rt, Gt, Bt)
  var zt = {
      Resource: Ot,
      BaseImageResource: Ft,
      INSTALLED: At,
      autoDetectResource: It,
      AbstractMultiResource: Dt,
      ArrayResource: Bt,
      BufferResource: Rt,
      CanvasResource: Ut,
      CubeResource: Gt,
      ImageResource: jt,
      SVGResource: Ht,
      VideoResource: Vt,
      ImageBitmapResource: Zt,
    },
    Yt = (function () {
      function e(e) {
        this.renderer = e
      }
      return (
        (e.prototype.destroy = function () {
          this.renderer = null
        }),
        e
      )
    })(),
    Wt = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        Pt(t, e),
        (t.prototype.upload = function (e, t, n) {
          var i = e.gl
          return (
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.alphaMode === G.UNPACK),
            n.width === t.width && n.height === t.height
              ? i.texSubImage2D(t.target, 0, 0, 0, t.width, t.height, t.format, t.type, this.data)
              : ((n.width = t.width),
                (n.height = t.height),
                i.texImage2D(
                  t.target,
                  0,
                  1 === e.context.webGLVersion ? i.DEPTH_COMPONENT : i.DEPTH_COMPONENT16,
                  t.width,
                  t.height,
                  0,
                  t.format,
                  t.type,
                  this.data,
                )),
            true
          )
        }),
        t
      )
    })(Rt),
    Xt = (function () {
      function e(e, t) {
        ;((this.width = Math.ceil(e || 100)),
          (this.height = Math.ceil(t || 100)),
          (this.stencil = false),
          (this.depth = false),
          (this.dirtyId = 0),
          (this.dirtyFormat = 0),
          (this.dirtySize = 0),
          (this.depthTexture = null),
          (this.colorTextures = []),
          (this.glFramebuffers = {}),
          (this.disposeRunner = new Et("disposeFramebuffer")),
          (this.multisample = z.NONE))
      }
      return (
        Object.defineProperty(e.prototype, "colorTexture", {
          get: function () {
            return this.colorTextures[0]
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.addColorTexture = function (e, t) {
          return (
            undefined === e && (e = 0),
            (this.colorTextures[e] =
              t ||
              new Nt(null, {
                scaleMode: B.NEAREST,
                resolution: 1,
                mipmap: U.OFF,
                width: this.width,
                height: this.height,
              })),
            this.dirtyId++,
            this.dirtyFormat++,
            this
          )
        }),
        (e.prototype.addDepthTexture = function (e) {
          return (
            (this.depthTexture =
              e ||
              new Nt(new Wt(null, { width: this.width, height: this.height }), {
                scaleMode: B.NEAREST,
                resolution: 1,
                width: this.width,
                height: this.height,
                mipmap: U.OFF,
                format: k.DEPTH_COMPONENT,
                type: D.UNSIGNED_SHORT,
              })),
            this.dirtyId++,
            this.dirtyFormat++,
            this
          )
        }),
        (e.prototype.enableDepth = function () {
          return ((this.depth = true), this.dirtyId++, this.dirtyFormat++, this)
        }),
        (e.prototype.enableStencil = function () {
          return ((this.stencil = true), this.dirtyId++, this.dirtyFormat++, this)
        }),
        (e.prototype.resize = function (e, t) {
          if (((e = Math.ceil(e)), (t = Math.ceil(t)), e !== this.width || t !== this.height)) {
            ;((this.width = e), (this.height = t), this.dirtyId++, this.dirtySize++)
            for (var n = 0; n < this.colorTextures.length; n++) {
              var i = this.colorTextures[n],
                r = i.resolution
              i.setSize(e / r, t / r)
            }
            if (this.depthTexture) {
              r = this.depthTexture.resolution
              this.depthTexture.setSize(e / r, t / r)
            }
          }
        }),
        (e.prototype.dispose = function () {
          this.disposeRunner.emit(this, false)
        }),
        (e.prototype.destroyDepthTexture = function () {
          this.depthTexture &&
            (this.depthTexture.destroy(),
            (this.depthTexture = null),
            ++this.dirtyId,
            ++this.dirtyFormat)
        }),
        e
      )
    })(),
    qt = (function (e) {
      function t(t) {
        var n = this
        if ("number" == typeof t) {
          var i = arguments[0],
            r = arguments[1],
            o = arguments[2],
            a = arguments[3]
          t = { width: i, height: r, scaleMode: o, resolution: a }
        }
        n = e.call(this, null, t) || this
        var s = t || {},
          u = s.width,
          l = s.height
        return (
          (n.mipmap = 0),
          (n.width = Math.ceil(u) || 100),
          (n.height = Math.ceil(l) || 100),
          (n.valid = true),
          (n.clearColor = [0, 0, 0, 0]),
          (n.framebuffer = new Xt(n.width * n.resolution, n.height * n.resolution).addColorTexture(
            0,
            n,
          )),
          (n.maskStack = []),
          (n.filterStack = [{}]),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.resize = function (e, t) {
          ;((e = Math.ceil(e)),
            (t = Math.ceil(t)),
            this.framebuffer.resize(e * this.resolution, t * this.resolution))
        }),
        (t.prototype.dispose = function () {
          ;(this.framebuffer.dispose(), e.prototype.dispose.call(this))
        }),
        (t.prototype.destroy = function () {
          ;(e.prototype.destroy.call(this),
            this.framebuffer.destroyDepthTexture(),
            (this.framebuffer = null))
        }),
        t
      )
    })(Nt),
    Kt = (function () {
      function e() {
        ;((this.x0 = 0),
          (this.y0 = 0),
          (this.x1 = 1),
          (this.y1 = 0),
          (this.x2 = 1),
          (this.y2 = 1),
          (this.x3 = 0),
          (this.y3 = 1),
          (this.uvsFloat32 = new Float32Array(8)))
      }
      return (
        (e.prototype.set = function (e, t, n) {
          var i = t.width,
            r = t.height
          if (n) {
            var o = e.width / 2 / i,
              a = e.height / 2 / r,
              s = e.x / i + o,
              u = e.y / r + a
            ;((n = it.add(n, it.NW)),
              (this.x0 = s + o * it.uX(n)),
              (this.y0 = u + a * it.uY(n)),
              (n = it.add(n, 2)),
              (this.x1 = s + o * it.uX(n)),
              (this.y1 = u + a * it.uY(n)),
              (n = it.add(n, 2)),
              (this.x2 = s + o * it.uX(n)),
              (this.y2 = u + a * it.uY(n)),
              (n = it.add(n, 2)),
              (this.x3 = s + o * it.uX(n)),
              (this.y3 = u + a * it.uY(n)))
          } else
            ((this.x0 = e.x / i),
              (this.y0 = e.y / r),
              (this.x1 = (e.x + e.width) / i),
              (this.y1 = e.y / r),
              (this.x2 = (e.x + e.width) / i),
              (this.y2 = (e.y + e.height) / r),
              (this.x3 = e.x / i),
              (this.y3 = (e.y + e.height) / r))
          ;((this.uvsFloat32[0] = this.x0),
            (this.uvsFloat32[1] = this.y0),
            (this.uvsFloat32[2] = this.x1),
            (this.uvsFloat32[3] = this.y1),
            (this.uvsFloat32[4] = this.x2),
            (this.uvsFloat32[5] = this.y2),
            (this.uvsFloat32[6] = this.x3),
            (this.uvsFloat32[7] = this.y3))
        }),
        e
      )
    })(),
    $t = new Kt(),
    Jt = (function (e) {
      function t(n, i, r, o, a, s) {
        var u = e.call(this) || this
        if (
          ((u.noFrame = false),
          i || ((u.noFrame = true), (i = new He(0, 0, 1, 1))),
          n instanceof t && (n = n.baseTexture),
          (u.baseTexture = n),
          (u._frame = i),
          (u.trim = o),
          (u.valid = false),
          (u._uvs = $t),
          (u.uvMatrix = null),
          (u.orig = r || i),
          (u._rotate = Number(a || 0)),
          true === a)
        )
          u._rotate = 2
        else if (u._rotate % 2 != 0)
          throw new Error(
            "attempt to use diamond-shaped UVs. If you are sure, set rotation manually",
          )
        return (
          (u.defaultAnchor = s ? new We(s.x, s.y) : new We(0, 0)),
          (u._updateID = 0),
          (u.textureCacheIds = []),
          n.valid
            ? u.noFrame
              ? n.valid && u.onBaseTextureUpdated(n)
              : (u.frame = i)
            : n.once("loaded", u.onBaseTextureUpdated, u),
          u.noFrame && n.on("update", u.onBaseTextureUpdated, u),
          u
        )
      }
      return (
        Pt(t, e),
        (t.prototype.update = function () {
          this.baseTexture.resource && this.baseTexture.resource.update()
        }),
        (t.prototype.onBaseTextureUpdated = function (e) {
          if (this.noFrame) {
            if (!this.baseTexture.valid) return
            ;((this._frame.width = e.width),
              (this._frame.height = e.height),
              (this.valid = true),
              this.updateUvs())
          } else this.frame = this._frame
          this.emit("update", this)
        }),
        (t.prototype.destroy = function (e) {
          if (this.baseTexture) {
            if (e) {
              var n = this.baseTexture
              ;(n && n.url && Ee[n.url] && t.removeFromCache(n.url), this.baseTexture.destroy())
            }
            ;(this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
              this.baseTexture.off("update", this.onBaseTextureUpdated, this),
              (this.baseTexture = null))
          }
          ;((this._frame = null),
            (this._uvs = null),
            (this.trim = null),
            (this.orig = null),
            (this.valid = false),
            t.removeFromCache(this),
            (this.textureCacheIds = null))
        }),
        (t.prototype.clone = function () {
          return new t(
            this.baseTexture,
            this.frame.clone(),
            this.orig.clone(),
            this.trim && this.trim.clone(),
            this.rotate,
            this.defaultAnchor,
          )
        }),
        (t.prototype.updateUvs = function () {
          ;(this._uvs === $t && (this._uvs = new Kt()),
            this._uvs.set(this._frame, this.baseTexture, this.rotate),
            this._updateID++)
        }),
        (t.from = function (e, n, i) {
          ;(undefined === n && (n = {}), undefined === i && (i = Y.STRICT_TEXTURE_CACHE))
          var r = "string" == typeof e,
            o = null
          r ? (o = e) : (e._pixiId || (e._pixiId = "pixiid_" + xe()), (o = e._pixiId))
          var a = Ee[o]
          if (r && i && !a)
            throw new Error('The cacheId "' + o + '" does not exist in TextureCache.')
          return (
            a ||
              (n.resolution || (n.resolution = Be(e)),
              ((a = new t(new Nt(e, n))).baseTexture.cacheId = o),
              Nt.addToCache(a.baseTexture, o),
              t.addToCache(a, o)),
            a
          )
        }),
        (t.fromURL = function (e, n) {
          var i = Object.assign({ autoLoad: false }, null == n ? undefined : n.resourceOptions),
            r = t.from(e, Object.assign({ resourceOptions: i }, n), false),
            o = r.baseTexture.resource
          return r.baseTexture.valid
            ? Promise.resolve(r)
            : o.load().then(function () {
                return Promise.resolve(r)
              })
        }),
        (t.fromBuffer = function (e, n, i, r) {
          return new t(Nt.fromBuffer(e, n, i, r))
        }),
        (t.fromLoader = function (e, n, i) {
          var r = new jt(e)
          r.url = n
          var o = new t(new Nt(r, { scaleMode: Y.SCALE_MODE, resolution: Be(n) }))
          return (
            i || (i = n),
            Nt.addToCache(o.baseTexture, i),
            t.addToCache(o, i),
            i !== n && (Nt.addToCache(o.baseTexture, n), t.addToCache(o, n)),
            o
          )
        }),
        (t.addToCache = function (e, t) {
          t &&
            (-1 === e.textureCacheIds.indexOf(t) && e.textureCacheIds.push(t),
            Ee[t] &&
              console.warn(
                "Texture added to the cache with an id [" + t + "] that already had an entry",
              ),
            (Ee[t] = e))
        }),
        (t.removeFromCache = function (e) {
          if ("string" == typeof e) {
            var t = Ee[e]
            if (t) {
              var n = t.textureCacheIds.indexOf(e)
              return (n > -1 && t.textureCacheIds.splice(n, 1), delete Ee[e], t)
            }
          } else if (e && e.textureCacheIds) {
            for (var i = 0; i < e.textureCacheIds.length; ++i)
              Ee[e.textureCacheIds[i]] === e && delete Ee[e.textureCacheIds[i]]
            return ((e.textureCacheIds.length = 0), e)
          }
          return null
        }),
        Object.defineProperty(t.prototype, "resolution", {
          get: function () {
            return this.baseTexture.resolution
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "frame", {
          get: function () {
            return this._frame
          },
          set: function (e) {
            ;((this._frame = e), (this.noFrame = false))
            var t = e.x,
              n = e.y,
              i = e.width,
              r = e.height,
              o = t + i > this.baseTexture.width,
              a = n + r > this.baseTexture.height
            if (o || a) {
              var s = o && a ? "and" : "or",
                u = "X: " + t + " + " + i + " = " + (t + i) + " > " + this.baseTexture.width,
                l = "Y: " + n + " + " + r + " = " + (n + r) + " > " + this.baseTexture.height
              throw new Error(
                "Texture Error: frame does not fit inside the base Texture dimensions: " +
                  u +
                  " " +
                  s +
                  " " +
                  l,
              )
            }
            ;((this.valid = i && r && this.baseTexture.valid),
              this.trim || this.rotate || (this.orig = e),
              this.valid && this.updateUvs())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "rotate", {
          get: function () {
            return this._rotate
          },
          set: function (e) {
            ;((this._rotate = e), this.valid && this.updateUvs())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            return this.orig.width
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "height", {
          get: function () {
            return this.orig.height
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.castToBaseTexture = function () {
          return this.baseTexture
        }),
        t
      )
    })(X())
  function Qt(e) {
    ;((e.destroy = function () {}),
      (e.on = function () {}),
      (e.once = function () {}),
      (e.emit = function () {}))
  }
  ;((Jt.EMPTY = new Jt(new Nt())),
    Qt(Jt.EMPTY),
    Qt(Jt.EMPTY.baseTexture),
    (Jt.WHITE = (function () {
      var e = document.createElement("canvas")
      ;((e.width = 16), (e.height = 16))
      var t = e.getContext("2d")
      return ((t.fillStyle = "white"), t.fillRect(0, 0, 16, 16), new Jt(new Nt(new Ut(e))))
    })()),
    Qt(Jt.WHITE),
    Qt(Jt.WHITE.baseTexture))
  var en = (function (e) {
      function t(t, n) {
        var i = this,
          r = null
        if (!(t instanceof qt)) {
          var o = arguments[1],
            a = arguments[2],
            s = arguments[3],
            u = arguments[4]
          ;(console.warn(
            "Please use RenderTexture.create(" + o + ", " + a + ") instead of the ctor directly.",
          ),
            (r = arguments[0]),
            (n = null),
            (t = new qt({ width: o, height: a, scaleMode: s, resolution: u })))
        }
        return (
          ((i = e.call(this, t, n) || this).legacyRenderer = r),
          (i.valid = true),
          (i.filterFrame = null),
          (i.filterPoolKey = null),
          i.updateUvs(),
          i
        )
      }
      return (
        Pt(t, e),
        Object.defineProperty(t.prototype, "framebuffer", {
          get: function () {
            return this.baseTexture.framebuffer
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.resize = function (e, t, n) {
          ;(undefined === n && (n = true),
            (e = Math.ceil(e)),
            (t = Math.ceil(t)),
            (this.valid = e > 0 && t > 0),
            (this._frame.width = this.orig.width = e),
            (this._frame.height = this.orig.height = t),
            n && this.baseTexture.resize(e, t),
            this.updateUvs())
        }),
        (t.prototype.setResolution = function (e) {
          var t = this.baseTexture
          t.resolution !== e && (t.setResolution(e), this.resize(t.width, t.height, false))
        }),
        (t.create = function (e) {
          return (
            "number" == typeof e &&
              (e = {
                width: e,
                height: arguments[1],
                scaleMode: arguments[2],
                resolution: arguments[3],
              }),
            new t(new qt(e))
          )
        }),
        t
      )
    })(Jt),
    tn = (function () {
      function e(e) {
        ;((this.texturePool = {}),
          (this.textureOptions = e || {}),
          (this.enableFullScreen = false),
          (this._pixelsWidth = 0),
          (this._pixelsHeight = 0))
      }
      return (
        (e.prototype.createTexture = function (e, t) {
          var n = new qt(Object.assign({ width: e, height: t, resolution: 1 }, this.textureOptions))
          return new en(n)
        }),
        (e.prototype.getOptimalTexture = function (t, n, i) {
          undefined === i && (i = 1)
          var r = e.SCREEN_KEY
          ;((t *= i),
            (n *= i),
            (this.enableFullScreen && t === this._pixelsWidth && n === this._pixelsHeight) ||
              (r = ((65535 & (t = me(t))) << 16) | (65535 & (n = me(n)))),
            this.texturePool[r] || (this.texturePool[r] = []))
          var o = this.texturePool[r].pop()
          return (o || (o = this.createTexture(t, n)), (o.filterPoolKey = r), o.setResolution(i), o)
        }),
        (e.prototype.getFilterTexture = function (e, t) {
          var n = this.getOptimalTexture(e.width, e.height, t || e.resolution)
          return ((n.filterFrame = e.filterFrame), n)
        }),
        (e.prototype.returnTexture = function (e) {
          var t = e.filterPoolKey
          ;((e.filterFrame = null), this.texturePool[t].push(e))
        }),
        (e.prototype.returnFilterTexture = function (e) {
          this.returnTexture(e)
        }),
        (e.prototype.clear = function (e) {
          if ((e = false !== e))
            for (var t in this.texturePool) {
              var n = this.texturePool[t]
              if (n) for (var i = 0; i < n.length; i++) n[i].destroy(true)
            }
          this.texturePool = {}
        }),
        (e.prototype.setScreenSize = function (t) {
          if (t.width !== this._pixelsWidth || t.height !== this._pixelsHeight) {
            var n = e.SCREEN_KEY,
              i = this.texturePool[n]
            if (((this.enableFullScreen = t.width > 0 && t.height > 0), i))
              for (var r = 0; r < i.length; r++) i[r].destroy(true)
            ;((this.texturePool[n] = []),
              (this._pixelsWidth = t.width),
              (this._pixelsHeight = t.height))
          }
        }),
        (e.SCREEN_KEY = "screen"),
        e
      )
    })(),
    nn = (function () {
      function e(e, t, n, i, r, o, a) {
        ;(undefined === t && (t = 0),
          undefined === n && (n = false),
          undefined === i && (i = 5126),
          (this.buffer = e),
          (this.size = t),
          (this.normalized = n),
          (this.type = i),
          (this.stride = r),
          (this.start = o),
          (this.instance = a))
      }
      return (
        (e.prototype.destroy = function () {
          this.buffer = null
        }),
        (e.from = function (t, n, i, r, o) {
          return new e(t, n, i, r, o)
        }),
        e
      )
    })(),
    rn = 0,
    on = (function () {
      function e(e, t, n) {
        ;(undefined === t && (t = true),
          undefined === n && (n = false),
          (this.data = e || new Float32Array(1)),
          (this._glBuffers = {}),
          (this._updateID = 0),
          (this.index = n),
          (this.static = t),
          (this.id = rn++),
          (this.disposeRunner = new Et("disposeBuffer")))
      }
      return (
        (e.prototype.update = function (e) {
          ;((this.data = e || this.data), this._updateID++)
        }),
        (e.prototype.dispose = function () {
          this.disposeRunner.emit(this, false)
        }),
        (e.prototype.destroy = function () {
          ;(this.dispose(), (this.data = null))
        }),
        (e.from = function (t) {
          return (t instanceof Array && (t = new Float32Array(t)), new e(t))
        }),
        e
      )
    })()
  function an(e) {
    if (4 === e.BYTES_PER_ELEMENT)
      return e instanceof Float32Array
        ? "Float32Array"
        : e instanceof Uint32Array
          ? "Uint32Array"
          : "Int32Array"
    if (2 === e.BYTES_PER_ELEMENT) {
      if (e instanceof Uint16Array) return "Uint16Array"
    } else if (1 === e.BYTES_PER_ELEMENT && e instanceof Uint8Array) return "Uint8Array"
    return null
  }
  var sn = { Float32Array, Uint32Array, Int32Array, Uint8Array }
  var un = { 5126: 4, 5123: 2, 5121: 1 },
    ln = 0,
    cn = { Float32Array, Uint32Array, Int32Array, Uint8Array, Uint16Array },
    dn = (function () {
      function e(e, t) {
        ;(undefined === e && (e = []),
          undefined === t && (t = {}),
          (this.buffers = e),
          (this.indexBuffer = null),
          (this.attributes = t),
          (this.glVertexArrayObjects = {}),
          (this.id = ln++),
          (this.instanced = false),
          (this.instanceCount = 1),
          (this.disposeRunner = new Et("disposeGeometry")),
          (this.refCount = 0))
      }
      return (
        (e.prototype.addAttribute = function (e, t, n, i, r, o, a, s) {
          if ((undefined === n && (n = 0), undefined === i && (i = false), undefined === s && (s = false), !t))
            throw new Error("You must pass a buffer when creating an attribute")
          t instanceof on || (t instanceof Array && (t = new Float32Array(t)), (t = new on(t)))
          var u = e.split("|")
          if (u.length > 1) {
            for (var l = 0; l < u.length; l++) this.addAttribute(u[l], t, n, i, r)
            return this
          }
          var c = this.buffers.indexOf(t)
          return (
            -1 === c && (this.buffers.push(t), (c = this.buffers.length - 1)),
            (this.attributes[e] = new nn(c, n, i, r, o, a, s)),
            (this.instanced = this.instanced || s),
            this
          )
        }),
        (e.prototype.getAttribute = function (e) {
          return this.attributes[e]
        }),
        (e.prototype.getBuffer = function (e) {
          return this.buffers[this.getAttribute(e).buffer]
        }),
        (e.prototype.addIndex = function (e) {
          return (
            e instanceof on || (e instanceof Array && (e = new Uint16Array(e)), (e = new on(e))),
            (e.index = true),
            (this.indexBuffer = e),
            -1 === this.buffers.indexOf(e) && this.buffers.push(e),
            this
          )
        }),
        (e.prototype.getIndex = function () {
          return this.indexBuffer
        }),
        (e.prototype.interleave = function () {
          if (1 === this.buffers.length || (2 === this.buffers.length && this.indexBuffer))
            return this
          var e,
            t = [],
            n = [],
            i = new on()
          for (e in this.attributes) {
            var r = this.attributes[e],
              o = this.buffers[r.buffer]
            ;(t.push(o.data), n.push((r.size * un[r.type]) / 4), (r.buffer = 0))
          }
          for (
            i.data = (function (e, t) {
              for (var n = 0, i = 0, r = {}, o = 0; o < e.length; o++)
                ((i += t[o]), (n += e[o].length))
              var a = new ArrayBuffer(4 * n),
                s = null,
                u = 0
              for (o = 0; o < e.length; o++) {
                var l = t[o],
                  c = e[o],
                  d = an(c)
                ;(r[d] || (r[d] = new sn[d](a)), (s = r[d]))
                for (var h = 0; h < c.length; h++) s[((h / l) | 0) * i + u + (h % l)] = c[h]
                u += l
              }
              return new Float32Array(a)
            })(t, n),
              e = 0;
            e < this.buffers.length;
            e++
          )
            this.buffers[e] !== this.indexBuffer && this.buffers[e].destroy()
          return (
            (this.buffers = [i]),
            this.indexBuffer && this.buffers.push(this.indexBuffer),
            this
          )
        }),
        (e.prototype.getSize = function () {
          for (var e in this.attributes) {
            var t = this.attributes[e]
            return this.buffers[t.buffer].data.length / (t.stride / 4 || t.size)
          }
          return 0
        }),
        (e.prototype.dispose = function () {
          this.disposeRunner.emit(this, false)
        }),
        (e.prototype.destroy = function () {
          ;(this.dispose(),
            (this.buffers = null),
            (this.indexBuffer = null),
            (this.attributes = null))
        }),
        (e.prototype.clone = function () {
          for (var t = new e(), n = 0; n < this.buffers.length; n++)
            t.buffers[n] = new on(this.buffers[n].data.slice(0))
          for (var n in this.attributes) {
            var i = this.attributes[n]
            t.attributes[n] = new nn(
              i.buffer,
              i.size,
              i.normalized,
              i.type,
              i.stride,
              i.start,
              i.instance,
            )
          }
          return (
            this.indexBuffer &&
              ((t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)]),
              (t.indexBuffer.index = true)),
            t
          )
        }),
        (e.merge = function (t) {
          for (var n, i = new e(), r = [], o = [], a = [], s = 0; s < t.length; s++) {
            n = t[s]
            for (var u = 0; u < n.buffers.length; u++)
              ((o[u] = o[u] || 0), (o[u] += n.buffers[u].data.length), (a[u] = 0))
          }
          for (s = 0; s < n.buffers.length; s++)
            ((r[s] = new cn[an(n.buffers[s].data)](o[s])), (i.buffers[s] = new on(r[s])))
          for (s = 0; s < t.length; s++) {
            n = t[s]
            for (u = 0; u < n.buffers.length; u++)
              (r[u].set(n.buffers[u].data, a[u]), (a[u] += n.buffers[u].data.length))
          }
          if (((i.attributes = n.attributes), n.indexBuffer)) {
            ;((i.indexBuffer = i.buffers[n.buffers.indexOf(n.indexBuffer)]),
              (i.indexBuffer.index = true))
            var l = 0,
              c = 0,
              d = 0,
              h = 0
            for (s = 0; s < n.buffers.length; s++)
              if (n.buffers[s] !== n.indexBuffer) {
                h = s
                break
              }
            for (var s in n.attributes) {
              var p = n.attributes[s]
              ;(0 | p.buffer) === h && (c += (p.size * un[p.type]) / 4)
            }
            for (s = 0; s < t.length; s++) {
              var f = t[s].indexBuffer.data
              for (u = 0; u < f.length; u++) i.indexBuffer.data[u + d] += l
              ;((l += n.buffers[h].data.length / c), (d += f.length))
            }
          }
          return i
        }),
        e
      )
    })(),
    hn = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          t
            .addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]))
            .addIndex([0, 1, 3, 2]),
          t
        )
      }
      return (Pt(t, e), t)
    })(dn),
    pn = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
          (t.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
          (t.vertexBuffer = new on(t.vertices)),
          (t.uvBuffer = new on(t.uvs)),
          t
            .addAttribute("aVertexPosition", t.vertexBuffer)
            .addAttribute("aTextureCoord", t.uvBuffer)
            .addIndex([0, 1, 2, 0, 2, 3]),
          t
        )
      }
      return (
        Pt(t, e),
        (t.prototype.map = function (e, t) {
          var n = 0,
            i = 0
          return (
            (this.uvs[0] = n),
            (this.uvs[1] = i),
            (this.uvs[2] = n + t.width / e.width),
            (this.uvs[3] = i),
            (this.uvs[4] = n + t.width / e.width),
            (this.uvs[5] = i + t.height / e.height),
            (this.uvs[6] = n),
            (this.uvs[7] = i + t.height / e.height),
            (n = t.x),
            (i = t.y),
            (this.vertices[0] = n),
            (this.vertices[1] = i),
            (this.vertices[2] = n + t.width),
            (this.vertices[3] = i),
            (this.vertices[4] = n + t.width),
            (this.vertices[5] = i + t.height),
            (this.vertices[6] = n),
            (this.vertices[7] = i + t.height),
            this.invalidate(),
            this
          )
        }),
        (t.prototype.invalidate = function () {
          return (this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this)
        }),
        t
      )
    })(dn),
    fn = 0,
    _n = (function () {
      function e(e, t) {
        ;((this.uniforms = e),
          (this.group = true),
          (this.syncUniforms = {}),
          (this.dirtyId = 0),
          (this.id = fn++),
          (this.static = !!t))
      }
      return (
        (e.prototype.update = function () {
          this.dirtyId++
        }),
        (e.prototype.add = function (t, n, i) {
          this.uniforms[t] = new e(n, i)
        }),
        (e.from = function (t, n) {
          return new e(t, n)
        }),
        e
      )
    })(),
    gn = (function () {
      function e() {
        ;((this.renderTexture = null),
          (this.target = null),
          (this.legacy = false),
          (this.resolution = 1),
          (this.sourceFrame = new He()),
          (this.destinationFrame = new He()),
          (this.filters = []))
      }
      return (
        (e.prototype.clear = function () {
          ;((this.target = null), (this.filters = null), (this.renderTexture = null))
        }),
        e
      )
    })(),
    mn = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.defaultFilterStack = [{}]),
          (n.texturePool = new tn()),
          n.texturePool.setScreenSize(t.view),
          (n.statePool = []),
          (n.quad = new hn()),
          (n.quadUv = new pn()),
          (n.tempRect = new He()),
          (n.activeState = {}),
          (n.globalUniforms = new _n(
            {
              outputFrame: n.tempRect,
              inputSize: new Float32Array(4),
              inputPixel: new Float32Array(4),
              inputClamp: new Float32Array(4),
              resolution: 1,
              filterArea: new Float32Array(4),
              filterClamp: new Float32Array(4),
            },
            true,
          )),
          (n.forceClear = false),
          (n.useMaxPadding = false),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.push = function (e, t) {
          for (
            var n = this.renderer,
              i = this.defaultFilterStack,
              r = this.statePool.pop() || new gn(),
              o = t[0].resolution,
              a = t[0].padding,
              s = t[0].autoFit,
              u = t[0].legacy,
              l = 1;
            l < t.length;
            l++
          ) {
            var c = t[l]
            ;((o = Math.min(o, c.resolution)),
              (a = this.useMaxPadding ? Math.max(a, c.padding) : a + c.padding),
              (s = s && c.autoFit),
              (u = u || c.legacy))
          }
          ;(1 === i.length && (this.defaultFilterStack[0].renderTexture = n.renderTexture.current),
            i.push(r),
            (r.resolution = o),
            (r.legacy = u),
            (r.target = e),
            r.sourceFrame.copyFrom(e.filterArea || e.getBounds(true)),
            r.sourceFrame.pad(a),
            s && r.sourceFrame.fit(this.renderer.renderTexture.sourceFrame),
            r.sourceFrame.ceil(o),
            (r.renderTexture = this.getOptimalFilterTexture(
              r.sourceFrame.width,
              r.sourceFrame.height,
              o,
            )),
            (r.filters = t),
            (r.destinationFrame.width = r.renderTexture.width),
            (r.destinationFrame.height = r.renderTexture.height))
          var d = this.tempRect
          ;((d.width = r.sourceFrame.width),
            (d.height = r.sourceFrame.height),
            (r.renderTexture.filterFrame = r.sourceFrame),
            n.renderTexture.bind(r.renderTexture, r.sourceFrame, d),
            n.renderTexture.clear())
        }),
        (t.prototype.pop = function () {
          var e = this.defaultFilterStack,
            t = e.pop(),
            n = t.filters
          this.activeState = t
          var i = this.globalUniforms.uniforms
          ;((i.outputFrame = t.sourceFrame), (i.resolution = t.resolution))
          var r = i.inputSize,
            o = i.inputPixel,
            a = i.inputClamp
          if (
            ((r[0] = t.destinationFrame.width),
            (r[1] = t.destinationFrame.height),
            (r[2] = 1 / r[0]),
            (r[3] = 1 / r[1]),
            (o[0] = r[0] * t.resolution),
            (o[1] = r[1] * t.resolution),
            (o[2] = 1 / o[0]),
            (o[3] = 1 / o[1]),
            (a[0] = 0.5 * o[2]),
            (a[1] = 0.5 * o[3]),
            (a[2] = t.sourceFrame.width * r[2] - 0.5 * o[2]),
            (a[3] = t.sourceFrame.height * r[3] - 0.5 * o[3]),
            t.legacy)
          ) {
            var s = i.filterArea
            ;((s[0] = t.destinationFrame.width),
              (s[1] = t.destinationFrame.height),
              (s[2] = t.sourceFrame.x),
              (s[3] = t.sourceFrame.y),
              (i.filterClamp = i.inputClamp))
          }
          this.globalUniforms.update()
          var u = e[e.length - 1]
          if (
            (t.renderTexture.framebuffer.multisample > 1 && this.renderer.framebuffer.blit(),
            1 === n.length)
          )
            (n[0].apply(this, t.renderTexture, u.renderTexture, j.BLEND, t),
              this.returnFilterTexture(t.renderTexture))
          else {
            var l = t.renderTexture,
              c = this.getOptimalFilterTexture(l.width, l.height, t.resolution)
            c.filterFrame = l.filterFrame
            var d = 0
            for (d = 0; d < n.length - 1; ++d) {
              n[d].apply(this, l, c, j.CLEAR, t)
              var h = l
              ;((l = c), (c = h))
            }
            ;(n[d].apply(this, l, u.renderTexture, j.BLEND, t),
              this.returnFilterTexture(l),
              this.returnFilterTexture(c))
          }
          ;(t.clear(), this.statePool.push(t))
        }),
        (t.prototype.bindAndClear = function (e, t) {
          if ((undefined === t && (t = j.CLEAR), e && e.filterFrame)) {
            var n = this.tempRect
            ;((n.width = e.filterFrame.width),
              (n.height = e.filterFrame.height),
              this.renderer.renderTexture.bind(e, e.filterFrame, n))
          } else this.renderer.renderTexture.bind(e)
          ;("boolean" == typeof t &&
            ((t = t ? j.CLEAR : j.BLEND),
            Se("5.2.1", "Use CLEAR_MODES when using clear applyFilter option")),
            (t === j.CLEAR || (t === j.BLIT && this.forceClear)) &&
              this.renderer.renderTexture.clear())
        }),
        (t.prototype.applyFilter = function (e, t, n, i) {
          var r = this.renderer
          ;(this.bindAndClear(n, i),
            (e.uniforms.uSampler = t),
            (e.uniforms.filterGlobals = this.globalUniforms),
            r.state.set(e.state),
            r.shader.bind(e),
            e.legacy
              ? (this.quadUv.map(t._frame, t.filterFrame),
                r.geometry.bind(this.quadUv),
                r.geometry.draw(R.TRIANGLES))
              : (r.geometry.bind(this.quad), r.geometry.draw(R.TRIANGLE_STRIP)))
        }),
        (t.prototype.calculateSpriteMatrix = function (e, t) {
          var n = this.activeState,
            i = n.sourceFrame,
            r = n.destinationFrame,
            o = t._texture.orig,
            a = e.set(r.width, 0, 0, r.height, i.x, i.y),
            s = t.worldTransform.copyTo(qe.TEMP_MATRIX)
          return (
            s.invert(),
            a.prepend(s),
            a.scale(1 / o.width, 1 / o.height),
            a.translate(t.anchor.x, t.anchor.y),
            a
          )
        }),
        (t.prototype.destroy = function () {
          this.texturePool.clear(false)
        }),
        (t.prototype.getOptimalFilterTexture = function (e, t, n) {
          return (undefined === n && (n = 1), this.texturePool.getOptimalTexture(e, t, n))
        }),
        (t.prototype.getFilterTexture = function (e, t) {
          if ("number" == typeof e) {
            var n = e
            ;((e = t), (t = n))
          }
          e = e || this.activeState.renderTexture
          var i = this.texturePool.getOptimalTexture(e.width, e.height, t || e.resolution)
          return ((i.filterFrame = e.filterFrame), i)
        }),
        (t.prototype.returnFilterTexture = function (e) {
          this.texturePool.returnTexture(e)
        }),
        (t.prototype.emptyPool = function () {
          this.texturePool.clear(true)
        }),
        (t.prototype.resize = function () {
          this.texturePool.setScreenSize(this.renderer.view)
        }),
        t
      )
    })(Yt),
    vn = (function () {
      function e(e) {
        this.renderer = e
      }
      return (
        (e.prototype.flush = function () {}),
        (e.prototype.destroy = function () {
          this.renderer = null
        }),
        (e.prototype.start = function () {}),
        (e.prototype.stop = function () {
          this.flush()
        }),
        (e.prototype.render = function (e) {}),
        e
      )
    })(),
    yn = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return ((n.emptyRenderer = new vn(t)), (n.currentRenderer = n.emptyRenderer), n)
      }
      return (
        Pt(t, e),
        (t.prototype.setObjectRenderer = function (e) {
          this.currentRenderer !== e &&
            (this.currentRenderer.stop(), (this.currentRenderer = e), this.currentRenderer.start())
        }),
        (t.prototype.flush = function () {
          this.setObjectRenderer(this.emptyRenderer)
        }),
        (t.prototype.reset = function () {
          this.setObjectRenderer(this.emptyRenderer)
        }),
        (t.prototype.copyBoundTextures = function (e, t) {
          for (var n = this.renderer.texture.boundTextures, i = t - 1; i >= 0; --i)
            ((e[i] = n[i] || null), e[i] && (e[i]._batchLocation = i))
        }),
        (t.prototype.boundArray = function (e, t, n, i) {
          for (var r = e.elements, o = e.ids, a = e.count, s = 0, u = 0; u < a; u++) {
            var l = r[u],
              c = l._batchLocation
            if (c >= 0 && c < i && t[c] === l) o[u] = c
            else
              for (; s < i; ) {
                var d = t[s]
                if (!d || d._batchEnabled !== n || d._batchLocation !== s) {
                  ;((o[u] = s), (l._batchLocation = s), (t[s] = l))
                  break
                }
                s++
              }
          }
        }),
        t
      )
    })(Yt),
    Cn = 0,
    bn = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.webGLVersion = 1),
          (n.extensions = {}),
          (n.supports = { uint32Indices: false }),
          (n.handleContextLost = n.handleContextLost.bind(n)),
          (n.handleContextRestored = n.handleContextRestored.bind(n)),
          t.view.addEventListener("webglcontextlost", n.handleContextLost, false),
          t.view.addEventListener("webglcontextrestored", n.handleContextRestored, false),
          n
        )
      }
      return (
        Pt(t, e),
        Object.defineProperty(t.prototype, "isLost", {
          get: function () {
            return !this.gl || this.gl.isContextLost()
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.contextChange = function (e) {
          ;((this.gl = e),
            (this.renderer.gl = e),
            (this.renderer.CONTEXT_UID = Cn++),
            e.isContextLost() &&
              e.getExtension("WEBGL_lose_context") &&
              e.getExtension("WEBGL_lose_context").restoreContext())
        }),
        (t.prototype.initFromContext = function (e) {
          ;((this.gl = e),
            this.validateContext(e),
            (this.renderer.gl = e),
            (this.renderer.CONTEXT_UID = Cn++),
            this.renderer.runners.contextChange.emit(e))
        }),
        (t.prototype.initFromOptions = function (e) {
          var t = this.createContext(this.renderer.view, e)
          this.initFromContext(t)
        }),
        (t.prototype.createContext = function (e, t) {
          var n
          if ((Y.PREFER_ENV >= I.WEBGL2 && (n = e.getContext("webgl2", t)), n))
            this.webGLVersion = 2
          else if (
            ((this.webGLVersion = 1),
            !(n = e.getContext("webgl", t) || e.getContext("experimental-webgl", t)))
          )
            throw new Error("This browser does not support WebGL. Try using the canvas renderer")
          return ((this.gl = n), this.getExtensions(), this.gl)
        }),
        (t.prototype.getExtensions = function () {
          var e = this.gl
          1 === this.webGLVersion
            ? Object.assign(this.extensions, {
                drawBuffers: e.getExtension("WEBGL_draw_buffers"),
                depthTexture: e.getExtension("WEBGL_depth_texture"),
                loseContext: e.getExtension("WEBGL_lose_context"),
                vertexArrayObject:
                  e.getExtension("OES_vertex_array_object") ||
                  e.getExtension("MOZ_OES_vertex_array_object") ||
                  e.getExtension("WEBKIT_OES_vertex_array_object"),
                anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"),
                uint32ElementIndex: e.getExtension("OES_element_index_uint"),
                floatTexture: e.getExtension("OES_texture_float"),
                floatTextureLinear: e.getExtension("OES_texture_float_linear"),
                textureHalfFloat: e.getExtension("OES_texture_half_float"),
                textureHalfFloatLinear: e.getExtension("OES_texture_half_float_linear"),
              })
            : 2 === this.webGLVersion &&
              Object.assign(this.extensions, {
                anisotropicFiltering: e.getExtension("EXT_texture_filter_anisotropic"),
                colorBufferFloat: e.getExtension("EXT_color_buffer_float"),
                floatTextureLinear: e.getExtension("OES_texture_float_linear"),
              })
        }),
        (t.prototype.handleContextLost = function (e) {
          e.preventDefault()
        }),
        (t.prototype.handleContextRestored = function () {
          this.renderer.runners.contextChange.emit(this.gl)
        }),
        (t.prototype.destroy = function () {
          var e = this.renderer.view
          ;(e.removeEventListener("webglcontextlost", this.handleContextLost),
            e.removeEventListener("webglcontextrestored", this.handleContextRestored),
            this.gl.useProgram(null),
            this.extensions.loseContext && this.extensions.loseContext.loseContext())
        }),
        (t.prototype.postrender = function () {
          this.renderer.renderingToScreen && this.gl.flush()
        }),
        (t.prototype.validateContext = function (e) {
          var t = e.getContextAttributes(),
            n = "WebGL2RenderingContext" in window && e instanceof window.WebGL2RenderingContext
          ;(n && (this.webGLVersion = 2),
            t.stencil ||
              console.warn(
                "Provided WebGL context does not have a stencil buffer, masks may not render correctly",
              ))
          var i = n || !!e.getExtension("OES_element_index_uint")
          ;((this.supports.uint32Indices = i),
            i ||
              console.warn(
                "Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly",
              ))
        }),
        t
      )
    })(Yt),
    wn = function (e) {
      ;((this.framebuffer = e),
        (this.stencil = null),
        (this.dirtyId = 0),
        (this.dirtyFormat = 0),
        (this.dirtySize = 0),
        (this.multisample = z.NONE),
        (this.msaaBuffer = null),
        (this.blitFramebuffer = null))
    },
    xn = new He(),
    Tn = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.managedFramebuffers = []),
          (n.unknownFramebuffer = new Xt(10, 10)),
          (n.msaaSamples = null),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.contextChange = function () {
          var e = (this.gl = this.renderer.gl)
          if (
            ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
            (this.current = this.unknownFramebuffer),
            (this.viewport = new He()),
            (this.hasMRT = true),
            (this.writeDepthTexture = true),
            this.disposeAll(true),
            1 === this.renderer.context.webGLVersion)
          ) {
            var t = this.renderer.context.extensions.drawBuffers,
              n = this.renderer.context.extensions.depthTexture
            ;(Y.PREFER_ENV === I.WEBGL_LEGACY && ((t = null), (n = null)),
              t
                ? (e.drawBuffers = function (e) {
                    return t.drawBuffersWEBGL(e)
                  })
                : ((this.hasMRT = false), (e.drawBuffers = function () {})),
              n || (this.writeDepthTexture = false))
          } else this.msaaSamples = e.getInternalformatParameter(e.RENDERBUFFER, e.RGBA8, e.SAMPLES)
        }),
        (t.prototype.bind = function (e, t) {
          var n = this.gl
          if (e) {
            var i = e.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(e)
            ;(this.current !== e &&
              ((this.current = e), n.bindFramebuffer(n.FRAMEBUFFER, i.framebuffer)),
              i.dirtyId !== e.dirtyId &&
                ((i.dirtyId = e.dirtyId),
                i.dirtyFormat !== e.dirtyFormat
                  ? ((i.dirtyFormat = e.dirtyFormat), this.updateFramebuffer(e))
                  : i.dirtySize !== e.dirtySize &&
                    ((i.dirtySize = e.dirtySize), this.resizeFramebuffer(e))))
            for (var r = 0; r < e.colorTextures.length; r++) {
              var o = e.colorTextures[r]
              this.renderer.texture.unbind(o.parentTextureArray || o)
            }
            ;(e.depthTexture && this.renderer.texture.unbind(e.depthTexture),
              t
                ? this.setViewport(t.x, t.y, t.width, t.height)
                : this.setViewport(0, 0, e.width, e.height))
          } else
            (this.current && ((this.current = null), n.bindFramebuffer(n.FRAMEBUFFER, null)),
              t
                ? this.setViewport(t.x, t.y, t.width, t.height)
                : this.setViewport(0, 0, this.renderer.width, this.renderer.height))
        }),
        (t.prototype.setViewport = function (e, t, n, i) {
          var r = this.viewport
          ;(r.width === n && r.height === i && r.x === e && r.y === t) ||
            ((r.x = e), (r.y = t), (r.width = n), (r.height = i), this.gl.viewport(e, t, n, i))
        }),
        Object.defineProperty(t.prototype, "size", {
          get: function () {
            return this.current
              ? { x: 0, y: 0, width: this.current.width, height: this.current.height }
              : { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height }
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.clear = function (e, t, n, i, r) {
          undefined === r && (r = P.COLOR | P.DEPTH)
          var o = this.gl
          ;(o.clearColor(e, t, n, i), o.clear(r))
        }),
        (t.prototype.initFramebuffer = function (e) {
          var t = this.gl,
            n = new wn(t.createFramebuffer())
          return (
            (n.multisample = this.detectSamples(e.multisample)),
            (e.glFramebuffers[this.CONTEXT_UID] = n),
            this.managedFramebuffers.push(e),
            e.disposeRunner.add(this),
            n
          )
        }),
        (t.prototype.resizeFramebuffer = function (e) {
          var t = this.gl,
            n = e.glFramebuffers[this.CONTEXT_UID]
          n.stencil &&
            (t.bindRenderbuffer(t.RENDERBUFFER, n.stencil),
            t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, e.width, e.height))
          for (var i = e.colorTextures, r = 0; r < i.length; r++)
            this.renderer.texture.bind(i[r], 0)
          e.depthTexture && this.renderer.texture.bind(e.depthTexture, 0)
        }),
        (t.prototype.updateFramebuffer = function (e) {
          var t = this.gl,
            n = e.glFramebuffers[this.CONTEXT_UID],
            i = e.colorTextures.length
          ;(t.drawBuffers || (i = Math.min(i, 1)),
            n.multisample > 1 &&
              ((n.msaaBuffer = t.createRenderbuffer()),
              t.bindRenderbuffer(t.RENDERBUFFER, n.msaaBuffer),
              t.renderbufferStorageMultisample(
                t.RENDERBUFFER,
                n.multisample,
                t.RGBA8,
                e.width,
                e.height,
              ),
              t.framebufferRenderbuffer(
                t.FRAMEBUFFER,
                t.COLOR_ATTACHMENT0,
                t.RENDERBUFFER,
                n.msaaBuffer,
              )))
          for (var r = [], o = 0; o < i; o++)
            if (!(0 === o && n.multisample > 1)) {
              var a = e.colorTextures[o],
                s = a.parentTextureArray || a
              ;(this.renderer.texture.bind(s, 0),
                t.framebufferTexture2D(
                  t.FRAMEBUFFER,
                  t.COLOR_ATTACHMENT0 + o,
                  a.target,
                  s._glTextures[this.CONTEXT_UID].texture,
                  0,
                ),
                r.push(t.COLOR_ATTACHMENT0 + o))
            }
          if ((r.length > 1 && t.drawBuffers(r), e.depthTexture) && this.writeDepthTexture) {
            var u = e.depthTexture
            ;(this.renderer.texture.bind(u, 0),
              t.framebufferTexture2D(
                t.FRAMEBUFFER,
                t.DEPTH_ATTACHMENT,
                t.TEXTURE_2D,
                u._glTextures[this.CONTEXT_UID].texture,
                0,
              ))
          }
          n.stencil ||
            (!e.stencil && !e.depth) ||
            ((n.stencil = t.createRenderbuffer()),
            t.bindRenderbuffer(t.RENDERBUFFER, n.stencil),
            t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, e.width, e.height),
            e.depthTexture ||
              t.framebufferRenderbuffer(
                t.FRAMEBUFFER,
                t.DEPTH_STENCIL_ATTACHMENT,
                t.RENDERBUFFER,
                n.stencil,
              ))
        }),
        (t.prototype.detectSamples = function (e) {
          var t = this.msaaSamples,
            n = z.NONE
          if (e <= 1 || null === t) return n
          for (var i = 0; i < t.length; i++)
            if (t[i] <= e) {
              n = t[i]
              break
            }
          return (1 === n && (n = z.NONE), n)
        }),
        (t.prototype.blit = function (e, t, n) {
          var i = this,
            r = i.current,
            o = i.renderer,
            a = i.gl,
            s = i.CONTEXT_UID
          if (2 === o.context.webGLVersion && r) {
            var u = r.glFramebuffers[s]
            if (u) {
              if (!e) {
                if (u.multisample <= 1) return
                ;(u.blitFramebuffer ||
                  ((u.blitFramebuffer = new Xt(r.width, r.height)),
                  u.blitFramebuffer.addColorTexture(0, r.colorTextures[0])),
                  ((e = u.blitFramebuffer).width = r.width),
                  (e.height = r.height))
              }
              ;(t || (((t = xn).width = r.width), (t.height = r.height)), n || (n = t))
              var l = t.width === n.width && t.height === n.height
              ;(this.bind(e),
                a.bindFramebuffer(a.READ_FRAMEBUFFER, u.framebuffer),
                a.blitFramebuffer(
                  t.x,
                  t.y,
                  t.width,
                  t.height,
                  n.x,
                  n.y,
                  n.width,
                  n.height,
                  a.COLOR_BUFFER_BIT,
                  l ? a.NEAREST : a.LINEAR,
                ))
            }
          }
        }),
        (t.prototype.disposeFramebuffer = function (e, t) {
          var n = e.glFramebuffers[this.CONTEXT_UID],
            i = this.gl
          if (n) {
            delete e.glFramebuffers[this.CONTEXT_UID]
            var r = this.managedFramebuffers.indexOf(e)
            ;(r >= 0 && this.managedFramebuffers.splice(r, 1),
              e.disposeRunner.remove(this),
              t ||
                (i.deleteFramebuffer(n.framebuffer), n.stencil && i.deleteRenderbuffer(n.stencil)))
          }
        }),
        (t.prototype.disposeAll = function (e) {
          var t = this.managedFramebuffers
          this.managedFramebuffers = []
          for (var n = 0; n < t.length; n++) this.disposeFramebuffer(t[n], e)
        }),
        (t.prototype.forceStencil = function () {
          var e = this.current
          if (e) {
            var t = e.glFramebuffers[this.CONTEXT_UID]
            if (t && !t.stencil) {
              e.enableStencil()
              var n = e.width,
                i = e.height,
                r = this.gl,
                o = r.createRenderbuffer()
              ;(r.bindRenderbuffer(r.RENDERBUFFER, o),
                r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, n, i),
                (t.stencil = o),
                r.framebufferRenderbuffer(
                  r.FRAMEBUFFER,
                  r.DEPTH_STENCIL_ATTACHMENT,
                  r.RENDERBUFFER,
                  o,
                ))
            }
          }
        }),
        (t.prototype.reset = function () {
          ;((this.current = this.unknownFramebuffer), (this.viewport = new He()))
        }),
        t
      )
    })(Yt),
    Sn = function (e) {
      ;((this.buffer = e || null),
        (this.updateID = -1),
        (this.byteLength = -1),
        (this.refCount = 0))
    },
    Ln = { 5126: 4, 5123: 2, 5121: 1 },
    En = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n._activeGeometry = null),
          (n._activeVao = null),
          (n.hasVao = true),
          (n.hasInstance = true),
          (n.canUseUInt32ElementIndex = false),
          (n.managedGeometries = {}),
          (n.managedBuffers = {}),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.contextChange = function () {
          this.disposeAll(true)
          var e = (this.gl = this.renderer.gl),
            t = this.renderer.context
          if (((this.CONTEXT_UID = this.renderer.CONTEXT_UID), 2 !== t.webGLVersion)) {
            var n = this.renderer.context.extensions.vertexArrayObject
            ;(Y.PREFER_ENV === I.WEBGL_LEGACY && (n = null),
              n
                ? ((e.createVertexArray = function () {
                    return n.createVertexArrayOES()
                  }),
                  (e.bindVertexArray = function (e) {
                    return n.bindVertexArrayOES(e)
                  }),
                  (e.deleteVertexArray = function (e) {
                    return n.deleteVertexArrayOES(e)
                  }))
                : ((this.hasVao = false),
                  (e.createVertexArray = function () {
                    return null
                  }),
                  (e.bindVertexArray = function () {
                    return null
                  }),
                  (e.deleteVertexArray = function () {
                    return null
                  })))
          }
          if (2 !== t.webGLVersion) {
            var i = e.getExtension("ANGLE_instanced_arrays")
            i
              ? ((e.vertexAttribDivisor = function (e, t) {
                  return i.vertexAttribDivisorANGLE(e, t)
                }),
                (e.drawElementsInstanced = function (e, t, n, r, o) {
                  return i.drawElementsInstancedANGLE(e, t, n, r, o)
                }),
                (e.drawArraysInstanced = function (e, t, n, r) {
                  return i.drawArraysInstancedANGLE(e, t, n, r)
                }))
              : (this.hasInstance = false)
          }
          this.canUseUInt32ElementIndex = 2 === t.webGLVersion || !!t.extensions.uint32ElementIndex
        }),
        (t.prototype.bind = function (e, t) {
          t = t || this.renderer.shader.shader
          var n = this.gl,
            i = e.glVertexArrayObjects[this.CONTEXT_UID],
            r = false
          i ||
            ((this.managedGeometries[e.id] = e),
            e.disposeRunner.add(this),
            (e.glVertexArrayObjects[this.CONTEXT_UID] = i = {}),
            (r = true))
          var o = i[t.program.id] || this.initGeometryVao(e, t.program, r)
          ;((this._activeGeometry = e),
            this._activeVao !== o &&
              ((this._activeVao = o),
              this.hasVao ? n.bindVertexArray(o) : this.activateVao(e, t.program)),
            this.updateBuffers())
        }),
        (t.prototype.reset = function () {
          this.unbind()
        }),
        (t.prototype.updateBuffers = function () {
          for (var e = this._activeGeometry, t = this.gl, n = 0; n < e.buffers.length; n++) {
            var i = e.buffers[n],
              r = i._glBuffers[this.CONTEXT_UID]
            if (i._updateID !== r.updateID) {
              r.updateID = i._updateID
              var o = i.index ? t.ELEMENT_ARRAY_BUFFER : t.ARRAY_BUFFER
              if (
                (t.bindBuffer(o, r.buffer),
                (this._boundBuffer = r),
                r.byteLength >= i.data.byteLength)
              )
                t.bufferSubData(o, 0, i.data)
              else {
                var a = i.static ? t.STATIC_DRAW : t.DYNAMIC_DRAW
                ;((r.byteLength = i.data.byteLength), t.bufferData(o, i.data, a))
              }
            }
          }
        }),
        (t.prototype.checkCompatibility = function (e, t) {
          var n = e.attributes,
            i = t.attributeData
          for (var r in i)
            if (!n[r])
              throw new Error(
                'shader and geometry incompatible, geometry missing the "' + r + '" attribute',
              )
        }),
        (t.prototype.getSignature = function (e, t) {
          var n = e.attributes,
            i = t.attributeData,
            r = ["g", e.id]
          for (var o in n) i[o] && r.push(o)
          return r.join("-")
        }),
        (t.prototype.initGeometryVao = function (e, t, n) {
          ;(undefined === n && (n = true), this.checkCompatibility(e, t))
          var i = this.gl,
            r = this.CONTEXT_UID,
            o = this.getSignature(e, t),
            a = e.glVertexArrayObjects[this.CONTEXT_UID],
            s = a[o]
          if (s) return ((a[t.id] = s), s)
          var u = e.buffers,
            l = e.attributes,
            c = {},
            d = {}
          for (var h in u) ((c[h] = 0), (d[h] = 0))
          for (var h in l)
            (!l[h].size && t.attributeData[h]
              ? (l[h].size = t.attributeData[h].size)
              : l[h].size ||
                console.warn(
                  "PIXI Geometry attribute '" +
                    h +
                    "' size cannot be determined (likely the bound shader does not have the attribute)",
                ),
              (c[l[h].buffer] += l[h].size * Ln[l[h].type]))
          for (var h in l) {
            var p = l[h],
              f = p.size
            ;(undefined === p.stride &&
              (c[p.buffer] === f * Ln[p.type] ? (p.stride = 0) : (p.stride = c[p.buffer])),
              undefined === p.start && ((p.start = d[p.buffer]), (d[p.buffer] += f * Ln[p.type])))
          }
          ;((s = i.createVertexArray()), i.bindVertexArray(s))
          for (var _ = 0; _ < u.length; _++) {
            var g = u[_]
            ;(g._glBuffers[r] ||
              ((g._glBuffers[r] = new Sn(i.createBuffer())),
              (this.managedBuffers[g.id] = g),
              g.disposeRunner.add(this)),
              n && g._glBuffers[r].refCount++)
          }
          return (this.activateVao(e, t), (this._activeVao = s), (a[t.id] = s), (a[o] = s), s)
        }),
        (t.prototype.disposeBuffer = function (e, t) {
          if (this.managedBuffers[e.id]) {
            delete this.managedBuffers[e.id]
            var n = e._glBuffers[this.CONTEXT_UID],
              i = this.gl
            ;(e.disposeRunner.remove(this),
              n && (t || i.deleteBuffer(n.buffer), delete e._glBuffers[this.CONTEXT_UID]))
          }
        }),
        (t.prototype.disposeGeometry = function (e, t) {
          if (this.managedGeometries[e.id]) {
            delete this.managedGeometries[e.id]
            var n = e.glVertexArrayObjects[this.CONTEXT_UID],
              i = this.gl,
              r = e.buffers
            if ((e.disposeRunner.remove(this), n)) {
              for (var o = 0; o < r.length; o++) {
                var a = r[o]._glBuffers[this.CONTEXT_UID]
                ;(a.refCount--, 0 !== a.refCount || t || this.disposeBuffer(r[o], t))
              }
              if (!t)
                for (var s in n)
                  if ("g" === s[0]) {
                    var u = n[s]
                    ;(this._activeVao === u && this.unbind(), i.deleteVertexArray(u))
                  }
              delete e.glVertexArrayObjects[this.CONTEXT_UID]
            }
          }
        }),
        (t.prototype.disposeAll = function (e) {
          for (var t = Object.keys(this.managedGeometries), n = 0; n < t.length; n++)
            this.disposeGeometry(this.managedGeometries[t[n]], e)
          t = Object.keys(this.managedBuffers)
          for (n = 0; n < t.length; n++) this.disposeBuffer(this.managedBuffers[t[n]], e)
        }),
        (t.prototype.activateVao = function (e, t) {
          var n = this.gl,
            i = this.CONTEXT_UID,
            r = e.buffers,
            o = e.attributes
          e.indexBuffer && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer._glBuffers[i].buffer)
          var a = null
          for (var s in o) {
            var u = o[s],
              l = r[u.buffer]._glBuffers[i]
            if (t.attributeData[s]) {
              a !== l && (n.bindBuffer(n.ARRAY_BUFFER, l.buffer), (a = l))
              var c = t.attributeData[s].location
              if (
                (n.enableVertexAttribArray(c),
                n.vertexAttribPointer(
                  c,
                  u.size,
                  u.type || n.FLOAT,
                  u.normalized,
                  u.stride,
                  u.start,
                ),
                u.instance)
              ) {
                if (!this.hasInstance)
                  throw new Error("geometry error, GPU Instancing is not supported on this device")
                n.vertexAttribDivisor(c, 1)
              }
            }
          }
        }),
        (t.prototype.draw = function (e, t, n, i) {
          var r = this.gl,
            o = this._activeGeometry
          if (o.indexBuffer) {
            var a = o.indexBuffer.data.BYTES_PER_ELEMENT,
              s = 2 === a ? r.UNSIGNED_SHORT : r.UNSIGNED_INT
            2 === a || (4 === a && this.canUseUInt32ElementIndex)
              ? o.instanced
                ? r.drawElementsInstanced(
                    e,
                    t || o.indexBuffer.data.length,
                    s,
                    (n || 0) * a,
                    i || 1,
                  )
                : r.drawElements(e, t || o.indexBuffer.data.length, s, (n || 0) * a)
              : console.warn("unsupported index buffer type: uint32")
          } else
            o.instanced
              ? r.drawArraysInstanced(e, n, t || o.getSize(), i || 1)
              : r.drawArrays(e, n, t || o.getSize())
          return this
        }),
        (t.prototype.unbind = function () {
          ;(this.gl.bindVertexArray(null), (this._activeVao = null), (this._activeGeometry = null))
        }),
        t
      )
    })(Yt),
    An = (function () {
      function e(e) {
        ;(undefined === e && (e = null),
          (this.type = Z.NONE),
          (this.autoDetect = true),
          (this.maskObject = e || null),
          (this.pooled = false),
          (this.isMaskData = true),
          (this._stencilCounter = 0),
          (this._scissorCounter = 0),
          (this._scissorRect = null),
          (this._target = null))
      }
      return (
        (e.prototype.reset = function () {
          ;(this.pooled && ((this.maskObject = null), (this.type = Z.NONE), (this.autoDetect = true)),
            (this._target = null))
        }),
        (e.prototype.copyCountersOrReset = function (e) {
          e
            ? ((this._stencilCounter = e._stencilCounter),
              (this._scissorCounter = e._scissorCounter),
              (this._scissorRect = e._scissorRect))
            : ((this._stencilCounter = 0), (this._scissorCounter = 0), (this._scissorRect = null))
        }),
        e
      )
    })()
  function In(e, t, n) {
    var i = e.createShader(t)
    return (e.shaderSource(i, n), e.compileShader(i), i)
  }
  function Mn(e, t, n, i) {
    var r = In(e, e.VERTEX_SHADER, t),
      o = In(e, e.FRAGMENT_SHADER, n),
      a = e.createProgram()
    if ((e.attachShader(a, r), e.attachShader(a, o), i))
      for (var s in i) e.bindAttribLocation(a, i[s], s)
    return (
      e.linkProgram(a),
      e.getProgramParameter(a, e.LINK_STATUS) ||
        (e.getShaderParameter(r, e.COMPILE_STATUS) ||
          (console.warn(t), console.error(e.getShaderInfoLog(r))),
        e.getShaderParameter(o, e.COMPILE_STATUS) ||
          (console.warn(n), console.error(e.getShaderInfoLog(o))),
        console.error("Pixi.js Error: Could not initialize shader."),
        console.error("gl.VALIDATE_STATUS", e.getProgramParameter(a, e.VALIDATE_STATUS)),
        console.error("gl.getError()", e.getError()),
        "" !== e.getProgramInfoLog(a) &&
          console.warn("Pixi.js Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(a)),
        e.deleteProgram(a),
        (a = null)),
      e.deleteShader(r),
      e.deleteShader(o),
      a
    )
  }
  function Pn(e) {
    for (var t = new Array(e), n = 0; n < t.length; n++) t[n] = false
    return t
  }
  function On(e, t) {
    switch (e) {
      case "float":
      case "int":
      case "sampler2D":
      case "sampler2DArray":
        return 0
      case "vec2":
        return new Float32Array(2 * t)
      case "vec3":
        return new Float32Array(3 * t)
      case "vec4":
        return new Float32Array(4 * t)
      case "ivec2":
        return new Int32Array(2 * t)
      case "ivec3":
        return new Int32Array(3 * t)
      case "ivec4":
        return new Int32Array(4 * t)
      case "bool":
        return false
      case "bvec2":
        return Pn(2 * t)
      case "bvec3":
        return Pn(3 * t)
      case "bvec4":
        return Pn(4 * t)
      case "mat2":
        return new Float32Array([1, 0, 0, 1])
      case "mat3":
        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
      case "mat4":
        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
    }
    return null
  }
  var Rn,
    kn = {},
    Nn = kn
  function Dn() {
    if (Nn === kn || (Nn && Nn.isContextLost())) {
      var e = document.createElement("canvas"),
        t = undefined
      ;(Y.PREFER_ENV >= I.WEBGL2 && (t = e.getContext("webgl2", {})),
        t ||
          ((t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {}))
            ? t.getExtension("WEBGL_draw_buffers")
            : (t = null)),
        (Nn = t))
    }
    return Nn
  }
  function Bn(e, t, n) {
    if ("precision" !== e.substring(0, 9)) {
      var i = t
      return (t === V.HIGH && n !== V.HIGH && (i = V.MEDIUM), "precision " + i + " float;\n" + e)
    }
    return n !== V.HIGH && "precision highp" === e.substring(0, 15)
      ? e.replace("precision highp", "precision mediump")
      : e
  }
  var Fn = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
    bool: 1,
    bvec2: 2,
    bvec3: 3,
    bvec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16,
    sampler2D: 1,
  }
  function Un(e) {
    return Fn[e]
  }
  var Gn = null,
    jn = {
      FLOAT: "float",
      FLOAT_VEC2: "vec2",
      FLOAT_VEC3: "vec3",
      FLOAT_VEC4: "vec4",
      INT: "int",
      INT_VEC2: "ivec2",
      INT_VEC3: "ivec3",
      INT_VEC4: "ivec4",
      BOOL: "bool",
      BOOL_VEC2: "bvec2",
      BOOL_VEC3: "bvec3",
      BOOL_VEC4: "bvec4",
      FLOAT_MAT2: "mat2",
      FLOAT_MAT3: "mat3",
      FLOAT_MAT4: "mat4",
      SAMPLER_2D: "sampler2D",
      INT_SAMPLER_2D: "sampler2D",
      UNSIGNED_INT_SAMPLER_2D: "sampler2D",
      SAMPLER_CUBE: "samplerCube",
      INT_SAMPLER_CUBE: "samplerCube",
      UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
      SAMPLER_2D_ARRAY: "sampler2DArray",
      INT_SAMPLER_2D_ARRAY: "sampler2DArray",
      UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray",
    }
  function Hn(e, t) {
    if (!Gn) {
      var n = Object.keys(jn)
      Gn = {}
      for (var i = 0; i < n.length; ++i) {
        var r = n[i]
        Gn[e[r]] = jn[r]
      }
    }
    return Gn[t]
  }
  var Vn = [
      {
        test: function (e) {
          return "float" === e.type && 1 === e.size
        },
        code: function (e) {
          return (
            '\n            if(uv["' +
            e +
            '"] !== ud["' +
            e +
            '"].value)\n            {\n                ud["' +
            e +
            '"].value = uv["' +
            e +
            '"]\n                gl.uniform1f(ud["' +
            e +
            '"].location, uv["' +
            e +
            '"])\n            }\n            '
          )
        },
      },
      {
        test: function (e) {
          return (
            ("sampler2D" === e.type || "samplerCube" === e.type || "sampler2DArray" === e.type) &&
            1 === e.size &&
            !e.isArray
          )
        },
        code: function (e) {
          return (
            't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' +
            e +
            '"], t);\n\n            if(ud["' +
            e +
            '"].value !== t)\n            {\n                ud["' +
            e +
            '"].value = t;\n                gl.uniform1i(ud["' +
            e +
            '"].location, t);\n; // eslint-disable-line max-len\n            }'
          )
        },
      },
      {
        test: function (e, t) {
          return "mat3" === e.type && 1 === e.size && undefined !== t.a
        },
        code: function (e) {
          return (
            '\n            gl.uniformMatrix3fv(ud["' +
            e +
            '"].location, false, uv["' +
            e +
            '"].toArray(true));\n            '
          )
        },
      },
      {
        test: function (e, t) {
          return "vec2" === e.type && 1 === e.size && undefined !== t.x
        },
        code: function (e) {
          return (
            '\n                cv = ud["' +
            e +
            '"].value;\n                v = uv["' +
            e +
            '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' +
            e +
            '"].location, v.x, v.y);\n                }'
          )
        },
      },
      {
        test: function (e) {
          return "vec2" === e.type && 1 === e.size
        },
        code: function (e) {
          return (
            '\n                cv = ud["' +
            e +
            '"].value;\n                v = uv["' +
            e +
            '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' +
            e +
            '"].location, v[0], v[1]);\n                }\n            '
          )
        },
      },
      {
        test: function (e, t) {
          return "vec4" === e.type && 1 === e.size && undefined !== t.width
        },
        code: function (e) {
          return (
            '\n                cv = ud["' +
            e +
            '"].value;\n                v = uv["' +
            e +
            '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' +
            e +
            '"].location, v.x, v.y, v.width, v.height)\n                }'
          )
        },
      },
      {
        test: function (e) {
          return "vec4" === e.type && 1 === e.size
        },
        code: function (e) {
          return (
            '\n                cv = ud["' +
            e +
            '"].value;\n                v = uv["' +
            e +
            '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' +
            e +
            '"].location, v[0], v[1], v[2], v[3])\n                }'
          )
        },
      },
    ],
    Zn = {
      float:
        "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
      vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
      vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
      vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
      int: "gl.uniform1i(location, v)",
      ivec2: "gl.uniform2i(location, v[0], v[1])",
      ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
      ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
      bool: "gl.uniform1i(location, v)",
      bvec2: "gl.uniform2i(location, v[0], v[1])",
      bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
      bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
      mat2: "gl.uniformMatrix2fv(location, false, v)",
      mat3: "gl.uniformMatrix3fv(location, false, v)",
      mat4: "gl.uniformMatrix4fv(location, false, v)",
      sampler2D: "gl.uniform1i(location, v)",
      samplerCube: "gl.uniform1i(location, v)",
      sampler2DArray: "gl.uniform1i(location, v)",
    },
    zn = {
      float: "gl.uniform1fv(location, v)",
      vec2: "gl.uniform2fv(location, v)",
      vec3: "gl.uniform3fv(location, v)",
      vec4: "gl.uniform4fv(location, v)",
      mat4: "gl.uniformMatrix4fv(location, false, v)",
      mat3: "gl.uniformMatrix3fv(location, false, v)",
      mat2: "gl.uniformMatrix2fv(location, false, v)",
      int: "gl.uniform1iv(location, v)",
      ivec2: "gl.uniform2iv(location, v)",
      ivec3: "gl.uniform3iv(location, v)",
      ivec4: "gl.uniform4iv(location, v)",
      bool: "gl.uniform1iv(location, v)",
      bvec2: "gl.uniform2iv(location, v)",
      bvec3: "gl.uniform3iv(location, v)",
      bvec4: "gl.uniform4iv(location, v)",
      sampler2D: "gl.uniform1iv(location, v)",
      samplerCube: "gl.uniform1iv(location, v)",
      sampler2DArray: "gl.uniform1iv(location, v)",
    }
  var Yn,
    Wn = [
      "precision mediump float;",
      "void main(void){",
      "float test = 0.1;",
      "%forloop%",
      "gl_FragColor = vec4(0.0);",
      "}",
    ].join("\n")
  function Xn(e) {
    for (var t = "", n = 0; n < e; ++n)
      (n > 0 && (t += "\nelse "), n < e - 1 && (t += "if(test == " + n + ".0){}"))
    return t
  }
  function qn(e, t) {
    if (0 === e) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`")
    for (var n = t.createShader(t.FRAGMENT_SHADER); ; ) {
      var i = Wn.replace(/%forloop%/gi, Xn(e))
      if ((t.shaderSource(n, i), t.compileShader(n), t.getShaderParameter(n, t.COMPILE_STATUS)))
        break
      e = (e / 2) | 0
    }
    return e
  }
  var Kn = 0,
    $n = {},
    Jn = (function () {
      function e(t, n, i) {
        ;(undefined === i && (i = "pixi-shader"),
          (this.id = Kn++),
          (this.vertexSrc = t || e.defaultVertexSrc),
          (this.fragmentSrc = n || e.defaultFragmentSrc),
          (this.vertexSrc = this.vertexSrc.trim()),
          (this.fragmentSrc = this.fragmentSrc.trim()),
          "#version" !== this.vertexSrc.substring(0, 8) &&
            ((i = i.replace(/\s+/g, "-")),
            $n[i] ? ($n[i]++, (i += "-" + $n[i])) : ($n[i] = 1),
            (this.vertexSrc = "#define SHADER_NAME " + i + "\n" + this.vertexSrc),
            (this.fragmentSrc = "#define SHADER_NAME " + i + "\n" + this.fragmentSrc),
            (this.vertexSrc = Bn(this.vertexSrc, Y.PRECISION_VERTEX, V.HIGH)),
            (this.fragmentSrc = Bn(
              this.fragmentSrc,
              Y.PRECISION_FRAGMENT,
              (function () {
                if (!Rn) {
                  Rn = V.MEDIUM
                  var e = Dn()
                  if (e && e.getShaderPrecisionFormat) {
                    var t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
                    Rn = t.precision ? V.HIGH : V.MEDIUM
                  }
                }
                return Rn
              })(),
            ))),
          this.extractData(this.vertexSrc, this.fragmentSrc),
          (this.glPrograms = {}),
          (this.syncUniforms = null))
      }
      return (
        (e.prototype.extractData = function (e, t) {
          var n = Dn()
          if (n) {
            var i = Mn(n, e, t)
            ;((this.attributeData = this.getAttributeData(i, n)),
              (this.uniformData = this.getUniformData(i, n)),
              n.deleteProgram(i))
          } else ((this.uniformData = {}), (this.attributeData = {}))
        }),
        (e.prototype.getAttributeData = function (e, t) {
          for (
            var n = {}, i = [], r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), o = 0;
            o < r;
            o++
          ) {
            var a = t.getActiveAttrib(e, o),
              s = Hn(t, a.type),
              u = { type: s, name: a.name, size: Un(s), location: 0 }
            ;((n[a.name] = u), i.push(u))
          }
          i.sort(function (e, t) {
            return e.name > t.name ? 1 : -1
          })
          for (o = 0; o < i.length; o++) i[o].location = o
          return n
        }),
        (e.prototype.getUniformData = function (e, t) {
          for (var n = {}, i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < i; r++) {
            var o = t.getActiveUniform(e, r),
              a = o.name.replace(/\[.*?\]$/, ""),
              s = o.name.match(/\[.*?\]$/),
              u = Hn(t, o.type)
            n[a] = { type: u, size: o.size, isArray: s, value: On(u, o.size) }
          }
          return n
        }),
        Object.defineProperty(e, "defaultVertexSrc", {
          get: function () {
            return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n"
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e, "defaultFragmentSrc", {
          get: function () {
            return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}"
          },
          enumerable: false,
          configurable: true,
        }),
        (e.from = function (t, n, i) {
          var r = t + n,
            o = Le[r]
          return (o || (Le[r] = o = new e(t, n, i)), o)
        }),
        e
      )
    })(),
    Qn = (function () {
      function e(e, t) {
        for (var n in ((this.program = e),
        (this.uniformGroup = t ? (t instanceof _n ? t : new _n(t)) : new _n({})),
        e.uniformData))
          this.uniformGroup.uniforms[n] instanceof Array &&
            (this.uniformGroup.uniforms[n] = new Float32Array(this.uniformGroup.uniforms[n]))
      }
      return (
        (e.prototype.checkUniformExists = function (e, t) {
          if (t.uniforms[e]) return true
          for (var n in t.uniforms) {
            var i = t.uniforms[n]
            if (i.group && this.checkUniformExists(e, i)) return true
          }
          return false
        }),
        (e.prototype.destroy = function () {
          this.uniformGroup = null
        }),
        Object.defineProperty(e.prototype, "uniforms", {
          get: function () {
            return this.uniformGroup.uniforms
          },
          enumerable: false,
          configurable: true,
        }),
        (e.from = function (t, n, i) {
          return new e(Jn.from(t, n), i)
        }),
        e
      )
    })(),
    ei = (function () {
      function e() {
        ;((this.data = 0), (this.blendMode = O.NORMAL), (this.polygonOffset = 0), (this.blend = true))
      }
      return (
        Object.defineProperty(e.prototype, "blend", {
          get: function () {
            return !!(1 & this.data)
          },
          set: function (e) {
            !!(1 & this.data) !== e && (this.data ^= 1)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "offsets", {
          get: function () {
            return !!(2 & this.data)
          },
          set: function (e) {
            !!(2 & this.data) !== e && (this.data ^= 2)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "culling", {
          get: function () {
            return !!(4 & this.data)
          },
          set: function (e) {
            !!(4 & this.data) !== e && (this.data ^= 4)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "depthTest", {
          get: function () {
            return !!(8 & this.data)
          },
          set: function (e) {
            !!(8 & this.data) !== e && (this.data ^= 8)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "clockwiseFrontFace", {
          get: function () {
            return !!(16 & this.data)
          },
          set: function (e) {
            !!(16 & this.data) !== e && (this.data ^= 16)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "blendMode", {
          get: function () {
            return this._blendMode
          },
          set: function (e) {
            ;((this.blend = e !== O.NONE), (this._blendMode = e))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "polygonOffset", {
          get: function () {
            return this._polygonOffset
          },
          set: function (e) {
            ;((this.offsets = !!e), (this._polygonOffset = e))
          },
          enumerable: false,
          configurable: true,
        }),
        (e.for2d = function () {
          var t = new e()
          return ((t.depthTest = false), (t.blend = true), t)
        }),
        e
      )
    })(),
    ti = (function (e) {
      function t(n, i, r) {
        var o = this,
          a = Jn.from(n || t.defaultVertexSrc, i || t.defaultFragmentSrc)
        return (
          ((o = e.call(this, a, r) || this).padding = 0),
          (o.resolution = Y.FILTER_RESOLUTION),
          (o.enabled = true),
          (o.autoFit = true),
          (o.legacy = !!o.program.attributeData.aTextureCoord),
          (o.state = new ei()),
          o
        )
      }
      return (
        Pt(t, e),
        (t.prototype.apply = function (e, t, n, i, r) {
          e.applyFilter(this, t, n, i)
        }),
        Object.defineProperty(t.prototype, "blendMode", {
          get: function () {
            return this.state.blendMode
          },
          set: function (e) {
            this.state.blendMode = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t, "defaultVertexSrc", {
          get: function () {
            return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n"
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t, "defaultFragmentSrc", {
          get: function () {
            return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n"
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(Qn),
    ni = new qe(),
    ii = (function () {
      function e(e, t) {
        ;((this._texture = e),
          (this.mapCoord = new qe()),
          (this.uClampFrame = new Float32Array(4)),
          (this.uClampOffset = new Float32Array(2)),
          (this._textureID = -1),
          (this._updateID = 0),
          (this.clampOffset = 0),
          (this.clampMargin = undefined === t ? 0.5 : t),
          (this.isSimple = false))
      }
      return (
        Object.defineProperty(e.prototype, "texture", {
          get: function () {
            return this._texture
          },
          set: function (e) {
            ;((this._texture = e), (this._textureID = -1))
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.multiplyUvs = function (e, t) {
          undefined === t && (t = e)
          for (var n = this.mapCoord, i = 0; i < e.length; i += 2) {
            var r = e[i],
              o = e[i + 1]
            ;((t[i] = r * n.a + o * n.c + n.tx), (t[i + 1] = r * n.b + o * n.d + n.ty))
          }
          return t
        }),
        (e.prototype.update = function (e) {
          var t = this._texture
          if (!t || !t.valid) return false
          if (!e && this._textureID === t._updateID) return false
          ;((this._textureID = t._updateID), this._updateID++)
          var n = t._uvs
          this.mapCoord.set(n.x1 - n.x0, n.y1 - n.y0, n.x3 - n.x0, n.y3 - n.y0, n.x0, n.y0)
          var i = t.orig,
            r = t.trim
          r &&
            (ni.set(i.width / r.width, 0, 0, i.height / r.height, -r.x / r.width, -r.y / r.height),
            this.mapCoord.append(ni))
          var o = t.baseTexture,
            a = this.uClampFrame,
            s = this.clampMargin / o.resolution,
            u = this.clampOffset
          return (
            (a[0] = (t._frame.x + s + u) / o.width),
            (a[1] = (t._frame.y + s + u) / o.height),
            (a[2] = (t._frame.x + t._frame.width - s + u) / o.width),
            (a[3] = (t._frame.y + t._frame.height - s + u) / o.height),
            (this.uClampOffset[0] = u / o.realWidth),
            (this.uClampOffset[1] = u / o.realHeight),
            (this.isSimple =
              t._frame.width === o.width && t._frame.height === o.height && 0 === t.rotate),
            true
          )
        }),
        e
      )
    })(),
    ri = (function (e) {
      function t(t) {
        var n = this,
          i = new qe()
        return (
          (n =
            e.call(
              this,
              "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
              "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n",
            ) || this),
          (t.renderable = false),
          (n.maskSprite = t),
          (n.maskMatrix = i),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.apply = function (e, t, n, i) {
          var r = this.maskSprite,
            o = r._texture
          o.valid &&
            (o.uvMatrix || (o.uvMatrix = new ii(o, 0)),
            o.uvMatrix.update(),
            (this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1),
            (this.uniforms.mask = o),
            (this.uniforms.otherMatrix = e
              .calculateSpriteMatrix(this.maskMatrix, r)
              .prepend(o.uvMatrix.mapCoord)),
            (this.uniforms.alpha = r.worldAlpha),
            (this.uniforms.maskClamp = o.uvMatrix.uClampFrame),
            e.applyFilter(this, t, n, i))
        }),
        t
      )
    })(ti),
    oi = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.enableScissor = false),
          (n.alphaMaskPool = []),
          (n.maskDataPool = []),
          (n.maskStack = []),
          (n.alphaMaskIndex = 0),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.setMaskStack = function (e) {
          ;((this.maskStack = e),
            this.renderer.scissor.setMaskStack(e),
            this.renderer.stencil.setMaskStack(e))
        }),
        (t.prototype.push = function (e, t) {
          var n = t
          if (!n.isMaskData) {
            var i = this.maskDataPool.pop() || new An()
            ;((i.pooled = true), (i.maskObject = t), (n = i))
          }
          switch (
            (n.autoDetect && this.detect(n),
            n.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]),
            (n._target = e),
            n.type)
          ) {
            case Z.SCISSOR:
              ;(this.maskStack.push(n), this.renderer.scissor.push(n))
              break
            case Z.STENCIL:
              ;(this.maskStack.push(n), this.renderer.stencil.push(n))
              break
            case Z.SPRITE:
              ;(n.copyCountersOrReset(null), this.pushSpriteMask(n), this.maskStack.push(n))
          }
        }),
        (t.prototype.pop = function (e) {
          var t = this.maskStack.pop()
          if (t && t._target === e) {
            switch (t.type) {
              case Z.SCISSOR:
                this.renderer.scissor.pop()
                break
              case Z.STENCIL:
                this.renderer.stencil.pop(t.maskObject)
                break
              case Z.SPRITE:
                this.popSpriteMask()
            }
            ;(t.reset(), t.pooled && this.maskDataPool.push(t))
          }
        }),
        (t.prototype.detect = function (e) {
          var t = e.maskObject
          if (t.isSprite) e.type = Z.SPRITE
          else if (((e.type = Z.STENCIL), this.enableScissor && t.isFastRect && t.isFastRect())) {
            var n = t.worldTransform,
              i = Math.atan2(n.b, n.a),
              r = Math.atan2(n.d, n.c)
            ;((i = Math.round(i * (180 / Math.PI) * 100)),
              (r = (((r = Math.round(r * (180 / Math.PI) * 100) - i) % 18e3) + 18e3) % 18e3),
              0 === (i = ((i % 9e3) + 9e3) % 9e3) && 9e3 === r && (e.type = Z.SCISSOR))
          }
        }),
        (t.prototype.pushSpriteMask = function (e) {
          var t = e.maskObject,
            n = e._target,
            i = this.alphaMaskPool[this.alphaMaskIndex]
          ;(i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new ri(t)]),
            (i[0].resolution = this.renderer.resolution),
            (i[0].maskSprite = t))
          var r = n.filterArea
          ;((n.filterArea = t.getBounds(true)),
            this.renderer.filter.push(n, i),
            (n.filterArea = r),
            this.alphaMaskIndex++)
        }),
        (t.prototype.popSpriteMask = function () {
          ;(this.renderer.filter.pop(), this.alphaMaskIndex--)
        }),
        t
      )
    })(Yt),
    ai = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return ((n.maskStack = []), (n.glConst = 0), n)
      }
      return (
        Pt(t, e),
        (t.prototype.getStackLength = function () {
          return this.maskStack.length
        }),
        (t.prototype.setMaskStack = function (e) {
          var t = this.renderer.gl,
            n = this.getStackLength()
          this.maskStack = e
          var i = this.getStackLength()
          i !== n &&
            (0 === i ? t.disable(this.glConst) : (t.enable(this.glConst), this._useCurrent()))
        }),
        (t.prototype._useCurrent = function () {}),
        (t.prototype.destroy = function () {
          ;(e.prototype.destroy.call(this), (this.maskStack = null))
        }),
        t
      )
    })(Yt),
    si = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return ((n.glConst = WebGLRenderingContext.SCISSOR_TEST), n)
      }
      return (
        Pt(t, e),
        (t.prototype.getStackLength = function () {
          var e = this.maskStack[this.maskStack.length - 1]
          return e ? e._scissorCounter : 0
        }),
        (t.prototype.push = function (e) {
          var t = e.maskObject
          t.renderable = true
          var n = e._scissorRect,
            i = t.getBounds(true),
            r = this.renderer.gl
          ;((t.renderable = false),
            n ? i.fit(n) : r.enable(r.SCISSOR_TEST),
            e._scissorCounter++,
            (e._scissorRect = i),
            this._useCurrent())
        }),
        (t.prototype.pop = function () {
          var e = this.renderer.gl
          this.getStackLength() > 0 ? this._useCurrent() : e.disable(e.SCISSOR_TEST)
        }),
        (t.prototype._useCurrent = function () {
          var e = this.maskStack[this.maskStack.length - 1]._scissorRect,
            t = this.renderer.renderTexture.current,
            n = this.renderer.projection,
            i = n.transform,
            r = n.sourceFrame,
            o = n.destinationFrame,
            a = t ? t.resolution : this.renderer.resolution,
            s = (e.x - r.x) * a + o.x,
            u = (e.y - r.y) * a + o.y,
            l = e.width * a,
            c = e.height * a
          ;(i && ((s += i.tx * a), (u += i.ty * a)),
            t || (u = this.renderer.height - c - u),
            this.renderer.gl.scissor(s, u, l, c))
        }),
        t
      )
    })(ai),
    ui = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return ((n.glConst = WebGLRenderingContext.STENCIL_TEST), n)
      }
      return (
        Pt(t, e),
        (t.prototype.getStackLength = function () {
          var e = this.maskStack[this.maskStack.length - 1]
          return e ? e._stencilCounter : 0
        }),
        (t.prototype.push = function (e) {
          var t = e.maskObject,
            n = this.renderer.gl,
            i = e._stencilCounter
          ;(0 === i && (this.renderer.framebuffer.forceStencil(), n.enable(n.STENCIL_TEST)),
            e._stencilCounter++,
            n.colorMask(false, false, false, false),
            n.stencilFunc(n.EQUAL, i, this._getBitwiseMask()),
            n.stencilOp(n.KEEP, n.KEEP, n.INCR),
            (t.renderable = true),
            t.render(this.renderer),
            this.renderer.batch.flush(),
            (t.renderable = false),
            this._useCurrent())
        }),
        (t.prototype.pop = function (e) {
          var t = this.renderer.gl
          0 === this.getStackLength()
            ? (t.disable(t.STENCIL_TEST), t.clear(t.STENCIL_BUFFER_BIT), t.clearStencil(0))
            : (t.colorMask(false, false, false, false),
              t.stencilOp(t.KEEP, t.KEEP, t.DECR),
              (e.renderable = true),
              e.render(this.renderer),
              this.renderer.batch.flush(),
              (e.renderable = false),
              this._useCurrent())
        }),
        (t.prototype._useCurrent = function () {
          var e = this.renderer.gl
          ;(e.colorMask(true, true, true, true),
            e.stencilFunc(e.EQUAL, this.getStackLength(), this._getBitwiseMask()),
            e.stencilOp(e.KEEP, e.KEEP, e.KEEP))
        }),
        (t.prototype._getBitwiseMask = function () {
          return (1 << this.getStackLength()) - 1
        }),
        t
      )
    })(ai),
    li = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.destinationFrame = null),
          (n.sourceFrame = null),
          (n.defaultFrame = null),
          (n.projectionMatrix = new qe()),
          (n.transform = null),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.update = function (e, t, n, i) {
          ;((this.destinationFrame = e || this.destinationFrame || this.defaultFrame),
            (this.sourceFrame = t || this.sourceFrame || e),
            this.calculateProjection(this.destinationFrame, this.sourceFrame, n, i),
            this.transform && this.projectionMatrix.append(this.transform))
          var r = this.renderer
          ;((r.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix),
            r.globalUniforms.update(),
            r.shader.shader && r.shader.syncUniformGroup(r.shader.shader.uniforms.globals))
        }),
        (t.prototype.calculateProjection = function (e, t, n, i) {
          var r = this.projectionMatrix,
            o = i ? -1 : 1
          ;(r.identity(),
            (r.a = (1 / t.width) * 2),
            (r.d = o * ((1 / t.height) * 2)),
            (r.tx = -1 - t.x * r.a),
            (r.ty = -o - t.y * r.d))
        }),
        (t.prototype.setTransform = function (e) {}),
        t
      )
    })(Yt),
    ci = new He(),
    di = new He(),
    hi = new He(),
    pi = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.clearColor = t._backgroundColorRgba),
          (n.defaultMaskStack = []),
          (n.current = null),
          (n.sourceFrame = new He()),
          (n.destinationFrame = new He()),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.bind = function (e, t, n) {
          undefined === e && (e = null)
          var i,
            r,
            o,
            a = this.renderer
          ;((this.current = e),
            e
              ? ((o = (i = e.baseTexture).resolution),
                t || ((ci.width = e.frame.width), (ci.height = e.frame.height), (t = ci)),
                n ||
                  ((di.x = e.frame.x),
                  (di.y = e.frame.y),
                  (di.width = t.width),
                  (di.height = t.height),
                  (n = di)),
                (r = i.framebuffer))
              : ((o = a.resolution),
                t || ((ci.width = a.screen.width), (ci.height = a.screen.height), (t = ci)),
                n || (((n = ci).width = t.width), (n.height = t.height))),
            (hi.x = n.x * o),
            (hi.y = n.y * o),
            (hi.width = n.width * o),
            (hi.height = n.height * o),
            this.renderer.framebuffer.bind(r, hi),
            this.renderer.projection.update(n, t, o, !r),
            e
              ? this.renderer.mask.setMaskStack(i.maskStack)
              : this.renderer.mask.setMaskStack(this.defaultMaskStack),
            this.sourceFrame.copyFrom(t),
            this.destinationFrame.copyFrom(n))
        }),
        (t.prototype.clear = function (e, t) {
          ;((e = this.current ? e || this.current.baseTexture.clearColor : e || this.clearColor),
            this.renderer.framebuffer.clear(e[0], e[1], e[2], e[3], t))
        }),
        (t.prototype.resize = function () {
          this.bind(null)
        }),
        (t.prototype.reset = function () {
          this.bind(null)
        }),
        t
      )
    })(Yt),
    fi = function () {},
    _i = (function () {
      function e(e, t) {
        ;((this.program = e), (this.uniformData = t), (this.uniformGroups = {}))
      }
      return (
        (e.prototype.destroy = function () {
          ;((this.uniformData = null), (this.uniformGroups = null), (this.program = null))
        }),
        e
      )
    })(),
    gi = 0,
    mi = { textureCount: 0 },
    vi = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.destroyed = false),
          n.systemCheck(),
          (n.gl = null),
          (n.shader = null),
          (n.program = null),
          (n.cache = {}),
          (n.id = gi++),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.systemCheck = function () {
          if (
            !(function () {
              if ("boolean" == typeof Yn) return Yn
              try {
                var e = new Function(
                  "param1",
                  "param2",
                  "param3",
                  "return param1[param2] === param3;",
                )
                Yn = true === e({ a: "b" }, "a", "b")
              } catch (e) {
                Yn = false
              }
              return Yn
            })()
          )
            throw new Error(
              "Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.",
            )
        }),
        (t.prototype.contextChange = function (e) {
          ;((this.gl = e), this.reset())
        }),
        (t.prototype.bind = function (e, t) {
          e.uniforms.globals = this.renderer.globalUniforms
          var n = e.program,
            i = n.glPrograms[this.renderer.CONTEXT_UID] || this.generateShader(e)
          return (
            (this.shader = e),
            this.program !== n && ((this.program = n), this.gl.useProgram(i.program)),
            t || ((mi.textureCount = 0), this.syncUniformGroup(e.uniformGroup, mi)),
            i
          )
        }),
        (t.prototype.setUniforms = function (e) {
          var t = this.shader.program,
            n = t.glPrograms[this.renderer.CONTEXT_UID]
          t.syncUniforms(n.uniformData, e, this.renderer)
        }),
        (t.prototype.syncUniformGroup = function (e, t) {
          var n = this.getglProgram()
          ;(e.static && e.dirtyId === n.uniformGroups[e.id]) ||
            ((n.uniformGroups[e.id] = e.dirtyId), this.syncUniforms(e, n, t))
        }),
        (t.prototype.syncUniforms = function (e, t, n) {
          ;(e.syncUniforms[this.shader.program.id] || this.createSyncGroups(e))(
            t.uniformData,
            e.uniforms,
            this.renderer,
            n,
          )
        }),
        (t.prototype.createSyncGroups = function (e) {
          var t = this.getSignature(e, this.shader.program.uniformData)
          return (
            this.cache[t] ||
              (this.cache[t] = (function (e, t) {
                var n = [
                  "\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    ",
                ]
                for (var i in e.uniforms) {
                  var r = t[i]
                  if (r) {
                    for (var o = e.uniforms[i], a = false, s = 0; s < Vn.length; s++)
                      if (Vn[s].test(r, o)) {
                        ;(n.push(Vn[s].code(i, o)), (a = true))
                        break
                      }
                    if (!a) {
                      var u = (1 === r.size ? Zn : zn)[r.type].replace(
                        "location",
                        'ud["' + i + '"].location',
                      )
                      n.push(
                        '\n            cv = ud["' +
                          i +
                          '"].value;\n            v = uv["' +
                          i +
                          '"];\n            ' +
                          u +
                          ";",
                      )
                    }
                  } else
                    e.uniforms[i].group &&
                      n.push(
                        '\n                    renderer.shader.syncUniformGroup(uv["' +
                          i +
                          '"], syncData);\n                ',
                      )
                }
                return new Function("ud", "uv", "renderer", "syncData", n.join("\n"))
              })(e, this.shader.program.uniformData)),
            (e.syncUniforms[this.shader.program.id] = this.cache[t]),
            e.syncUniforms[this.shader.program.id]
          )
        }),
        (t.prototype.getSignature = function (e, t) {
          var n = e.uniforms,
            i = []
          for (var r in n) (i.push(r), t[r] && i.push(t[r].type))
          return i.join("-")
        }),
        (t.prototype.getglProgram = function () {
          return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
        }),
        (t.prototype.generateShader = function (e) {
          var t = this.gl,
            n = e.program,
            i = {}
          for (var r in n.attributeData) i[r] = n.attributeData[r].location
          var o = Mn(t, n.vertexSrc, n.fragmentSrc, i),
            a = {}
          for (var r in n.uniformData) {
            var s = n.uniformData[r]
            a[r] = { location: t.getUniformLocation(o, r), value: On(s.type, s.size) }
          }
          var u = new _i(o, a)
          return ((n.glPrograms[this.renderer.CONTEXT_UID] = u), u)
        }),
        (t.prototype.reset = function () {
          ;((this.program = null), (this.shader = null))
        }),
        (t.prototype.destroy = function () {
          this.destroyed = true
        }),
        t
      )
    })(Yt)
  var yi = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.gl = null),
          (n.stateId = 0),
          (n.polygonOffset = 0),
          (n.blendMode = O.NONE),
          (n._blendEq = false),
          (n.map = []),
          (n.map[0] = n.setBlend),
          (n.map[1] = n.setOffset),
          (n.map[2] = n.setCullFace),
          (n.map[3] = n.setDepthTest),
          (n.map[4] = n.setFrontFace),
          (n.checks = []),
          (n.defaultState = new ei()),
          (n.defaultState.blend = true),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.contextChange = function (e) {
          ;((this.gl = e),
            (this.blendModes = (function (e, t) {
              return (
                undefined === t && (t = []),
                (t[O.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.ADD] = [e.ONE, e.ONE]),
                (t[O.MULTIPLY] = [
                  e.DST_COLOR,
                  e.ONE_MINUS_SRC_ALPHA,
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (t[O.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.NONE] = [0, 0]),
                (t[O.NORMAL_NPM] = [
                  e.SRC_ALPHA,
                  e.ONE_MINUS_SRC_ALPHA,
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (t[O.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE]),
                (t[O.SCREEN_NPM] = [
                  e.SRC_ALPHA,
                  e.ONE_MINUS_SRC_COLOR,
                  e.ONE,
                  e.ONE_MINUS_SRC_ALPHA,
                ]),
                (t[O.SRC_IN] = [e.DST_ALPHA, e.ZERO]),
                (t[O.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO]),
                (t[O.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE]),
                (t[O.DST_IN] = [e.ZERO, e.SRC_ALPHA]),
                (t[O.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA]),
                (t[O.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA]),
                (t[O.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD]),
                t
              )
            })(e)),
            this.set(this.defaultState),
            this.reset())
        }),
        (t.prototype.set = function (e) {
          if (((e = e || this.defaultState), this.stateId !== e.data)) {
            for (var t = this.stateId ^ e.data, n = 0; t; )
              (1 & t && this.map[n].call(this, !!(e.data & (1 << n))), (t >>= 1), n++)
            this.stateId = e.data
          }
          for (n = 0; n < this.checks.length; n++) this.checks[n](this, e)
        }),
        (t.prototype.forceState = function (e) {
          e = e || this.defaultState
          for (var t = 0; t < this.map.length; t++) this.map[t].call(this, !!(e.data & (1 << t)))
          for (t = 0; t < this.checks.length; t++) this.checks[t](this, e)
          this.stateId = e.data
        }),
        (t.prototype.setBlend = function (e) {
          ;(this.updateCheck(t.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND))
        }),
        (t.prototype.setOffset = function (e) {
          ;(this.updateCheck(t.checkPolygonOffset, e),
            this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL))
        }),
        (t.prototype.setDepthTest = function (e) {
          this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST)
        }),
        (t.prototype.setCullFace = function (e) {
          this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE)
        }),
        (t.prototype.setFrontFace = function (e) {
          this.gl.frontFace(this.gl[e ? "CW" : "CCW"])
        }),
        (t.prototype.setBlendMode = function (e) {
          if (e !== this.blendMode) {
            this.blendMode = e
            var t = this.blendModes[e],
              n = this.gl
            ;(2 === t.length
              ? n.blendFunc(t[0], t[1])
              : n.blendFuncSeparate(t[0], t[1], t[2], t[3]),
              6 === t.length
                ? ((this._blendEq = true), n.blendEquationSeparate(t[4], t[5]))
                : this._blendEq &&
                  ((this._blendEq = false), n.blendEquationSeparate(n.FUNC_ADD, n.FUNC_ADD)))
          }
        }),
        (t.prototype.setPolygonOffset = function (e, t) {
          this.gl.polygonOffset(e, t)
        }),
        (t.prototype.reset = function () {
          ;(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false),
            this.forceState(this.defaultState),
            (this._blendEq = true),
            (this.blendMode = -1),
            this.setBlendMode(0))
        }),
        (t.prototype.updateCheck = function (e, t) {
          var n = this.checks.indexOf(e)
          t && -1 === n ? this.checks.push(e) : t || -1 === n || this.checks.splice(n, 1)
        }),
        (t.checkBlendMode = function (e, t) {
          e.setBlendMode(t.blendMode)
        }),
        (t.checkPolygonOffset = function (e, t) {
          e.setPolygonOffset(1, t.polygonOffset)
        }),
        t
      )
    })(Yt),
    Ci = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.count = 0),
          (n.checkCount = 0),
          (n.maxIdle = Y.GC_MAX_IDLE),
          (n.checkCountMax = Y.GC_MAX_CHECK_COUNT),
          (n.mode = Y.GC_MODE),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.postrender = function () {
          this.renderer.renderingToScreen &&
            (this.count++,
            this.mode !== H.MANUAL &&
              (this.checkCount++,
              this.checkCount > this.checkCountMax && ((this.checkCount = 0), this.run())))
        }),
        (t.prototype.run = function () {
          for (
            var e = this.renderer.texture, t = e.managedTextures, n = false, i = 0;
            i < t.length;
            i++
          ) {
            var r = t[i]
            !r.framebuffer &&
              this.count - r.touched > this.maxIdle &&
              (e.destroyTexture(r, true), (t[i] = null), (n = true))
          }
          if (n) {
            var o = 0
            for (i = 0; i < t.length; i++) null !== t[i] && (t[o++] = t[i])
            t.length = o
          }
        }),
        (t.prototype.unload = function (e) {
          var t = this.renderer.texture,
            n = e._texture
          n && !n.framebuffer && t.destroyTexture(n)
          for (var i = e.children.length - 1; i >= 0; i--) this.unload(e.children[i])
        }),
        t
      )
    })(Yt),
    bi = function (e) {
      ;((this.texture = e),
        (this.width = -1),
        (this.height = -1),
        (this.dirtyId = -1),
        (this.dirtyStyleId = -1),
        (this.mipmap = false),
        (this.wrapMode = 33071),
        (this.type = 6408),
        (this.internalFormat = 5121))
    },
    wi = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.boundTextures = []),
          (n.currentLocation = -1),
          (n.managedTextures = []),
          (n._unknownBoundTextures = false),
          (n.unknownTexture = new Nt()),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.contextChange = function () {
          var e = (this.gl = this.renderer.gl)
          ;((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
            (this.webGLVersion = this.renderer.context.webGLVersion))
          var t = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
          this.boundTextures.length = t
          for (var n = 0; n < t; n++) this.boundTextures[n] = null
          this.emptyTextures = {}
          var i = new bi(e.createTexture())
          ;(e.bindTexture(e.TEXTURE_2D, i.texture),
            e.texImage2D(
              e.TEXTURE_2D,
              0,
              e.RGBA,
              1,
              1,
              0,
              e.RGBA,
              e.UNSIGNED_BYTE,
              new Uint8Array(4),
            ),
            (this.emptyTextures[e.TEXTURE_2D] = i),
            (this.emptyTextures[e.TEXTURE_CUBE_MAP] = new bi(e.createTexture())),
            e.bindTexture(e.TEXTURE_CUBE_MAP, this.emptyTextures[e.TEXTURE_CUBE_MAP].texture))
          for (n = 0; n < 6; n++)
            e.texImage2D(
              e.TEXTURE_CUBE_MAP_POSITIVE_X + n,
              0,
              e.RGBA,
              1,
              1,
              0,
              e.RGBA,
              e.UNSIGNED_BYTE,
              null,
            )
          ;(e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MAG_FILTER, e.LINEAR),
            e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_MIN_FILTER, e.LINEAR))
          for (n = 0; n < this.boundTextures.length; n++) this.bind(null, n)
        }),
        (t.prototype.bind = function (e, t) {
          undefined === t && (t = 0)
          var n = this.gl
          if (e) {
            if ((e = e.castToBaseTexture()).parentTextureArray) return
            if (e.valid) {
              e.touched = this.renderer.textureGC.count
              var i = e._glTextures[this.CONTEXT_UID] || this.initTexture(e)
              ;(this.boundTextures[t] !== e &&
                (this.currentLocation !== t &&
                  ((this.currentLocation = t), n.activeTexture(n.TEXTURE0 + t)),
                n.bindTexture(e.target, i.texture)),
                i.dirtyId !== e.dirtyId &&
                  (this.currentLocation !== t &&
                    ((this.currentLocation = t), n.activeTexture(n.TEXTURE0 + t)),
                  this.updateTexture(e)),
                (this.boundTextures[t] = e))
            }
          } else
            (this.currentLocation !== t &&
              ((this.currentLocation = t), n.activeTexture(n.TEXTURE0 + t)),
              n.bindTexture(n.TEXTURE_2D, this.emptyTextures[n.TEXTURE_2D].texture),
              (this.boundTextures[t] = null))
        }),
        (t.prototype.reset = function () {
          ;((this._unknownBoundTextures = true), (this.currentLocation = -1))
          for (var e = 0; e < this.boundTextures.length; e++)
            this.boundTextures[e] = this.unknownTexture
        }),
        (t.prototype.unbind = function (e) {
          var t = this.gl,
            n = this.boundTextures
          if (this._unknownBoundTextures) {
            this._unknownBoundTextures = false
            for (var i = 0; i < n.length; i++) n[i] === this.unknownTexture && this.bind(null, i)
          }
          for (i = 0; i < n.length; i++)
            n[i] === e &&
              (this.currentLocation !== i &&
                (t.activeTexture(t.TEXTURE0 + i), (this.currentLocation = i)),
              t.bindTexture(e.target, this.emptyTextures[e.target].texture),
              (n[i] = null))
        }),
        (t.prototype.initTexture = function (e) {
          var t = new bi(this.gl.createTexture())
          return (
            (t.dirtyId = -1),
            (e._glTextures[this.CONTEXT_UID] = t),
            this.managedTextures.push(e),
            e.on("dispose", this.destroyTexture, this),
            t
          )
        }),
        (t.prototype.initTextureType = function (e, t) {
          if (((t.internalFormat = e.format), (t.type = e.type), 2 === this.webGLVersion)) {
            var n = this.renderer.gl
            ;(e.type === n.FLOAT && e.format === n.RGBA && (t.internalFormat = n.RGBA32F),
              e.type === D.HALF_FLOAT && (t.type = n.HALF_FLOAT),
              t.type === n.HALF_FLOAT && e.format === n.RGBA && (t.internalFormat = n.RGBA16F))
          }
        }),
        (t.prototype.updateTexture = function (e) {
          var t = e._glTextures[this.CONTEXT_UID]
          if (t) {
            var n = this.renderer
            if ((this.initTextureType(e, t), e.resource && e.resource.upload(n, e, t)));
            else {
              var i = e.realWidth,
                r = e.realHeight,
                o = n.gl
              ;(t.width !== i || t.height !== r || t.dirtyId < 0) &&
                ((t.width = i),
                (t.height = r),
                o.texImage2D(e.target, 0, t.internalFormat, i, r, 0, e.format, t.type, null))
            }
            ;(e.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(e),
              (t.dirtyId = e.dirtyId))
          }
        }),
        (t.prototype.destroyTexture = function (e, t) {
          var n = this.gl
          if (
            (e = e.castToBaseTexture())._glTextures[this.CONTEXT_UID] &&
            (this.unbind(e),
            n.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),
            e.off("dispose", this.destroyTexture, this),
            delete e._glTextures[this.CONTEXT_UID],
            !t)
          ) {
            var i = this.managedTextures.indexOf(e)
            ;-1 !== i && Ce(this.managedTextures, i, 1)
          }
        }),
        (t.prototype.updateTextureStyle = function (e) {
          var t = e._glTextures[this.CONTEXT_UID]
          t &&
            ((e.mipmap !== U.POW2 && 2 === this.webGLVersion) || e.isPowerOfTwo
              ? (t.mipmap = e.mipmap >= 1)
              : (t.mipmap = false),
            2 === this.webGLVersion || e.isPowerOfTwo
              ? (t.wrapMode = e.wrapMode)
              : (t.wrapMode = F.CLAMP),
            (e.resource && e.resource.style(this.renderer, e, t)) || this.setStyle(e, t),
            (t.dirtyStyleId = e.dirtyStyleId))
        }),
        (t.prototype.setStyle = function (e, t) {
          var n = this.gl
          if (
            (t.mipmap && n.generateMipmap(e.target),
            n.texParameteri(e.target, n.TEXTURE_WRAP_S, t.wrapMode),
            n.texParameteri(e.target, n.TEXTURE_WRAP_T, t.wrapMode),
            t.mipmap)
          ) {
            n.texParameteri(
              e.target,
              n.TEXTURE_MIN_FILTER,
              e.scaleMode === B.LINEAR ? n.LINEAR_MIPMAP_LINEAR : n.NEAREST_MIPMAP_NEAREST,
            )
            var i = this.renderer.context.extensions.anisotropicFiltering
            if (i && e.anisotropicLevel > 0 && e.scaleMode === B.LINEAR) {
              var r = Math.min(e.anisotropicLevel, n.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT))
              n.texParameterf(e.target, i.TEXTURE_MAX_ANISOTROPY_EXT, r)
            }
          } else
            n.texParameteri(
              e.target,
              n.TEXTURE_MIN_FILTER,
              e.scaleMode === B.LINEAR ? n.LINEAR : n.NEAREST,
            )
          n.texParameteri(
            e.target,
            n.TEXTURE_MAG_FILTER,
            e.scaleMode === B.LINEAR ? n.LINEAR : n.NEAREST,
          )
        }),
        t
      )
    })(Yt),
    xi = {
      FilterSystem: mn,
      BatchSystem: yn,
      ContextSystem: bn,
      FramebufferSystem: Tn,
      GeometrySystem: En,
      MaskSystem: oi,
      ScissorSystem: si,
      StencilSystem: ui,
      ProjectionSystem: li,
      RenderTextureSystem: pi,
      ShaderSystem: vi,
      StateSystem: yi,
      TextureGCSystem: Ci,
      TextureSystem: wi,
    },
    Ti = new qe(),
    Si = (function (e) {
      function t(t, n) {
        undefined === t && (t = M.UNKNOWN)
        var i = e.call(this) || this
        return (
          (n = Object.assign({}, Y.RENDER_OPTIONS, n)).roundPixels &&
            ((Y.ROUND_PIXELS = n.roundPixels),
            Se(
              "5.0.0",
              "Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS",
              2,
            )),
          (i.options = n),
          (i.type = t),
          (i.screen = new He(0, 0, n.width, n.height)),
          (i.view = n.view || document.createElement("canvas")),
          (i.resolution = n.resolution || Y.RESOLUTION),
          (i.transparent = n.transparent),
          (i.autoDensity = n.autoDensity || n.autoResize || false),
          (i.preserveDrawingBuffer = n.preserveDrawingBuffer),
          (i.clearBeforeRender = n.clearBeforeRender),
          (i._backgroundColor = 0),
          (i._backgroundColorRgba = [0, 0, 0, 0]),
          (i._backgroundColorString = "#000000"),
          (i.backgroundColor = n.backgroundColor || i._backgroundColor),
          (i._lastObjectRendered = null),
          (i.plugins = {}),
          i
        )
      }
      return (
        Pt(t, e),
        (t.prototype.initPlugins = function (e) {
          for (var t in e) this.plugins[t] = new e[t](this)
        }),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            return this.view.width
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "height", {
          get: function () {
            return this.view.height
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.resize = function (e, t) {
          ;((this.screen.width = e),
            (this.screen.height = t),
            (this.view.width = e * this.resolution),
            (this.view.height = t * this.resolution),
            this.autoDensity &&
              ((this.view.style.width = e + "px"), (this.view.style.height = t + "px")),
            this.emit("resize", e, t))
        }),
        (t.prototype.generateTexture = function (e, t, n, i) {
          ;(0 === (i = i || e.getLocalBounds(null, true)).width && (i.width = 1),
            0 === i.height && (i.height = 1))
          var r = en.create({
            width: 0 | i.width,
            height: 0 | i.height,
            scaleMode: t,
            resolution: n,
          })
          return ((Ti.tx = -i.x), (Ti.ty = -i.y), this.render(e, r, false, Ti, !!e.parent), r)
        }),
        (t.prototype.destroy = function (e) {
          for (var t in this.plugins) (this.plugins[t].destroy(), (this.plugins[t] = null))
          e && this.view.parentNode && this.view.parentNode.removeChild(this.view)
          var n = this
          ;((n.plugins = null),
            (n.type = M.UNKNOWN),
            (n.view = null),
            (n.screen = null),
            (n._tempDisplayObjectParent = null),
            (n.options = null),
            (this._backgroundColorRgba = null),
            (this._backgroundColorString = null),
            (this._lastObjectRendered = null))
        }),
        Object.defineProperty(t.prototype, "backgroundColor", {
          get: function () {
            return this._backgroundColor
          },
          set: function (e) {
            ;((this._backgroundColor = e),
              (this._backgroundColorString = oe(e)),
              re(e, this._backgroundColorRgba))
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(X()),
    Li = (function (e) {
      function t(n) {
        var i = e.call(this, M.WEBGL, n) || this
        return (
          (n = i.options),
          (i.gl = null),
          (i.CONTEXT_UID = 0),
          (i.runners = {
            destroy: new Et("destroy"),
            contextChange: new Et("contextChange"),
            reset: new Et("reset"),
            update: new Et("update"),
            postrender: new Et("postrender"),
            prerender: new Et("prerender"),
            resize: new Et("resize"),
          }),
          (i.globalUniforms = new _n({ projectionMatrix: new qe() }, true)),
          i
            .addSystem(oi, "mask")
            .addSystem(bn, "context")
            .addSystem(yi, "state")
            .addSystem(vi, "shader")
            .addSystem(wi, "texture")
            .addSystem(En, "geometry")
            .addSystem(Tn, "framebuffer")
            .addSystem(si, "scissor")
            .addSystem(ui, "stencil")
            .addSystem(li, "projection")
            .addSystem(Ci, "textureGC")
            .addSystem(mn, "filter")
            .addSystem(pi, "renderTexture")
            .addSystem(yn, "batch"),
          i.initPlugins(t.__plugins),
          n.context
            ? i.context.initFromContext(n.context)
            : i.context.initFromOptions({
                alpha: !!i.transparent,
                antialias: n.antialias,
                premultipliedAlpha: i.transparent && "notMultiplied" !== i.transparent,
                stencil: true,
                preserveDrawingBuffer: n.preserveDrawingBuffer,
                powerPreference: i.options.powerPreference,
              }),
          (i.renderingToScreen = true),
          ne(2 === i.context.webGLVersion ? "WebGL 2" : "WebGL 1"),
          i.resize(i.options.width, i.options.height),
          i
        )
      }
      return (
        Pt(t, e),
        (t.create = function (e) {
          if (ie()) return new t(e)
          throw new Error(
            'WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.',
          )
        }),
        (t.prototype.addSystem = function (e, t) {
          t || (t = e.name)
          var n = new e(this)
          if (this[t]) throw new Error('Whoops! The name "' + t + '" is already in use')
          for (var i in ((this[t] = n), this.runners)) this.runners[i].add(n)
          return this
        }),
        (t.prototype.render = function (e, t, n, i, r) {
          if (
            ((this.renderingToScreen = !t),
            this.runners.prerender.emit(),
            this.emit("prerender"),
            (this.projection.transform = i),
            !this.context.isLost)
          ) {
            if ((t || (this._lastObjectRendered = e), !r)) {
              var o = e.enableTempParent()
              ;(e.updateTransform(), e.disableTempParent(o))
            }
            ;(this.renderTexture.bind(t),
              this.batch.currentRenderer.start(),
              (undefined !== n ? n : this.clearBeforeRender) && this.renderTexture.clear(),
              e.render(this),
              this.batch.currentRenderer.flush(),
              t && t.baseTexture.update(),
              this.runners.postrender.emit(),
              (this.projection.transform = null),
              this.emit("postrender"))
          }
        }),
        (t.prototype.resize = function (t, n) {
          ;(e.prototype.resize.call(this, t, n), this.runners.resize.emit(t, n))
        }),
        (t.prototype.reset = function () {
          return (this.runners.reset.emit(), this)
        }),
        (t.prototype.clear = function () {
          ;(this.renderTexture.bind(), this.renderTexture.clear())
        }),
        (t.prototype.destroy = function (t) {
          for (var n in (this.runners.destroy.emit(), this.runners)) this.runners[n].destroy()
          ;(e.prototype.destroy.call(this, t), (this.gl = null))
        }),
        (t.registerPlugin = function (e, n) {
          ;((t.__plugins = t.__plugins || {}), (t.__plugins[e] = n))
        }),
        t
      )
    })(Si)
  function Ei(e) {
    return Li.create(e)
  }
  var Ai =
      "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
    Ii =
      "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
    Mi = function () {
      ;((this.texArray = null),
        (this.blend = 0),
        (this.type = R.TRIANGLES),
        (this.start = 0),
        (this.size = 0),
        (this.data = null))
    },
    Pi = (function () {
      function e() {
        ;((this.elements = []), (this.ids = []), (this.count = 0))
      }
      return (
        (e.prototype.clear = function () {
          for (var e = 0; e < this.count; e++) this.elements[e] = null
          this.count = 0
        }),
        e
      )
    })(),
    Oi = (function () {
      function e(e) {
        ;((this.rawBinaryData = new ArrayBuffer(e)),
          (this.uint32View = new Uint32Array(this.rawBinaryData)),
          (this.float32View = new Float32Array(this.rawBinaryData)))
      }
      return (
        Object.defineProperty(e.prototype, "int8View", {
          get: function () {
            return (
              this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
              this._int8View
            )
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "uint8View", {
          get: function () {
            return (
              this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
              this._uint8View
            )
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "int16View", {
          get: function () {
            return (
              this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
              this._int16View
            )
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "uint16View", {
          get: function () {
            return (
              this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)),
              this._uint16View
            )
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "int32View", {
          get: function () {
            return (
              this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
              this._int32View
            )
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.view = function (e) {
          return this[e + "View"]
        }),
        (e.prototype.destroy = function () {
          ;((this.rawBinaryData = null),
            (this._int8View = null),
            (this._uint8View = null),
            (this._int16View = null),
            (this._uint16View = null),
            (this._int32View = null),
            (this.uint32View = null),
            (this.float32View = null))
        }),
        (e.sizeOf = function (e) {
          switch (e) {
            case "int8":
            case "uint8":
              return 1
            case "int16":
            case "uint16":
              return 2
            case "int32":
            case "uint32":
            case "float32":
              return 4
            default:
              throw new Error(e + " isn't a valid view type")
          }
        }),
        e
      )
    })(),
    Ri = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.shaderGenerator = null),
          (n.geometryClass = null),
          (n.vertexSize = null),
          (n.state = ei.for2d()),
          (n.size = 4 * Y.SPRITE_BATCH_SIZE),
          (n._vertexCount = 0),
          (n._indexCount = 0),
          (n._bufferedElements = []),
          (n._bufferedTextures = []),
          (n._bufferSize = 0),
          (n._shader = null),
          (n._packedGeometries = []),
          (n._packedGeometryPoolSize = 2),
          (n._flushId = 0),
          (n._aBuffers = {}),
          (n._iBuffers = {}),
          (n.MAX_TEXTURES = 1),
          n.renderer.on("prerender", n.onPrerender, n),
          t.runners.contextChange.add(n),
          (n._dcIndex = 0),
          (n._aIndex = 0),
          (n._iIndex = 0),
          (n._attributeBuffer = null),
          (n._indexBuffer = null),
          (n._tempBoundTextures = []),
          n
        )
      }
      return (
        Pt(t, e),
        (t.prototype.contextChange = function () {
          var e = this.renderer.gl
          ;(Y.PREFER_ENV === I.WEBGL_LEGACY
            ? (this.MAX_TEXTURES = 1)
            : ((this.MAX_TEXTURES = Math.min(
                e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
                Y.SPRITE_MAX_TEXTURES,
              )),
              (this.MAX_TEXTURES = qn(this.MAX_TEXTURES, e))),
            (this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES)))
          for (var t = 0; t < this._packedGeometryPoolSize; t++)
            this._packedGeometries[t] = new this.geometryClass()
          this.initFlushBuffers()
        }),
        (t.prototype.initFlushBuffers = function () {
          for (
            var e = t._drawCallPool,
              n = t._textureArrayPool,
              i = this.size / 4,
              r = Math.floor(i / this.MAX_TEXTURES) + 1;
            e.length < i;
          )
            e.push(new Mi())
          for (; n.length < r; ) n.push(new Pi())
          for (var o = 0; o < this.MAX_TEXTURES; o++) this._tempBoundTextures[o] = null
        }),
        (t.prototype.onPrerender = function () {
          this._flushId = 0
        }),
        (t.prototype.render = function (e) {
          e._texture.valid &&
            (this._vertexCount + e.vertexData.length / 2 > this.size && this.flush(),
            (this._vertexCount += e.vertexData.length / 2),
            (this._indexCount += e.indices.length),
            (this._bufferedTextures[this._bufferSize] = e._texture.baseTexture),
            (this._bufferedElements[this._bufferSize++] = e))
        }),
        (t.prototype.buildTexturesAndDrawCalls = function () {
          var e = this._bufferedTextures,
            n = this.MAX_TEXTURES,
            i = t._textureArrayPool,
            r = this.renderer.batch,
            o = this._tempBoundTextures,
            a = this.renderer.textureGC.count,
            s = ++Nt._globalBatch,
            u = 0,
            l = i[0],
            c = 0
          r.copyBoundTextures(o, n)
          for (var d = 0; d < this._bufferSize; ++d) {
            var h = e[d]
            ;((e[d] = null),
              h._batchEnabled !== s &&
                (l.count >= n &&
                  (r.boundArray(l, o, s, n),
                  this.buildDrawCalls(l, c, d),
                  (c = d),
                  (l = i[++u]),
                  ++s),
                (h._batchEnabled = s),
                (h.touched = a),
                (l.elements[l.count++] = h)))
          }
          l.count > 0 &&
            (r.boundArray(l, o, s, n), this.buildDrawCalls(l, c, this._bufferSize), ++u, ++s)
          for (d = 0; d < o.length; d++) o[d] = null
          Nt._globalBatch = s
        }),
        (t.prototype.buildDrawCalls = function (e, n, i) {
          var r = this,
            o = r._bufferedElements,
            a = r._attributeBuffer,
            s = r._indexBuffer,
            u = r.vertexSize,
            l = t._drawCallPool,
            c = this._dcIndex,
            d = this._aIndex,
            h = this._iIndex,
            p = l[c]
          ;((p.start = this._iIndex), (p.texArray = e))
          for (var f = n; f < i; ++f) {
            var _ = o[f],
              g = _._texture.baseTexture,
              m = ue[g.alphaMode ? 1 : 0][_.blendMode]
            ;((o[f] = null),
              n < f &&
                p.blend !== m &&
                ((p.size = h - p.start), (n = f), ((p = l[++c]).texArray = e), (p.start = h)),
              this.packInterleavedGeometry(_, a, s, d, h),
              (d += (_.vertexData.length / 2) * u),
              (h += _.indices.length),
              (p.blend = m))
          }
          ;(n < i && ((p.size = h - p.start), ++c),
            (this._dcIndex = c),
            (this._aIndex = d),
            (this._iIndex = h))
        }),
        (t.prototype.bindAndClearTexArray = function (e) {
          for (var t = this.renderer.texture, n = 0; n < e.count; n++)
            (t.bind(e.elements[n], e.ids[n]), (e.elements[n] = null))
          e.count = 0
        }),
        (t.prototype.updateGeometry = function () {
          var e = this,
            t = e._packedGeometries,
            n = e._attributeBuffer,
            i = e._indexBuffer
          Y.CAN_UPLOAD_SAME_BUFFER
            ? (t[this._flushId]._buffer.update(n.rawBinaryData),
              t[this._flushId]._indexBuffer.update(i),
              this.renderer.geometry.updateBuffers())
            : (this._packedGeometryPoolSize <= this._flushId &&
                (this._packedGeometryPoolSize++, (t[this._flushId] = new this.geometryClass())),
              t[this._flushId]._buffer.update(n.rawBinaryData),
              t[this._flushId]._indexBuffer.update(i),
              this.renderer.geometry.bind(t[this._flushId]),
              this.renderer.geometry.updateBuffers(),
              this._flushId++)
        }),
        (t.prototype.drawBatches = function () {
          for (
            var e = this._dcIndex,
              n = this.renderer,
              i = n.gl,
              r = n.state,
              o = t._drawCallPool,
              a = null,
              s = 0;
            s < e;
            s++
          ) {
            var u = o[s],
              l = u.texArray,
              c = u.type,
              d = u.size,
              h = u.start,
              p = u.blend
            ;(a !== l && ((a = l), this.bindAndClearTexArray(l)),
              (this.state.blendMode = p),
              r.set(this.state),
              i.drawElements(c, d, i.UNSIGNED_SHORT, 2 * h))
          }
        }),
        (t.prototype.flush = function () {
          0 !== this._vertexCount &&
            ((this._attributeBuffer = this.getAttributeBuffer(this._vertexCount)),
            (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
            (this._aIndex = 0),
            (this._iIndex = 0),
            (this._dcIndex = 0),
            this.buildTexturesAndDrawCalls(),
            this.updateGeometry(),
            this.drawBatches(),
            (this._bufferSize = 0),
            (this._vertexCount = 0),
            (this._indexCount = 0))
        }),
        (t.prototype.start = function () {
          ;(this.renderer.state.set(this.state),
            this.renderer.shader.bind(this._shader),
            Y.CAN_UPLOAD_SAME_BUFFER &&
              this.renderer.geometry.bind(this._packedGeometries[this._flushId]))
        }),
        (t.prototype.stop = function () {
          this.flush()
        }),
        (t.prototype.destroy = function () {
          for (var t = 0; t < this._packedGeometryPoolSize; t++)
            this._packedGeometries[t] && this._packedGeometries[t].destroy()
          ;(this.renderer.off("prerender", this.onPrerender, this),
            (this._aBuffers = null),
            (this._iBuffers = null),
            (this._packedGeometries = null),
            (this._attributeBuffer = null),
            (this._indexBuffer = null),
            this._shader && (this._shader.destroy(), (this._shader = null)),
            e.prototype.destroy.call(this))
        }),
        (t.prototype.getAttributeBuffer = function (e) {
          var t = me(Math.ceil(e / 8)),
            n = ye(t),
            i = 8 * t
          this._aBuffers.length <= n && (this._iBuffers.length = n + 1)
          var r = this._aBuffers[i]
          return (r || (this._aBuffers[i] = r = new Oi(i * this.vertexSize * 4)), r)
        }),
        (t.prototype.getIndexBuffer = function (e) {
          var t = me(Math.ceil(e / 12)),
            n = ye(t),
            i = 12 * t
          this._iBuffers.length <= n && (this._iBuffers.length = n + 1)
          var r = this._iBuffers[n]
          return (r || (this._iBuffers[n] = r = new Uint16Array(i)), r)
        }),
        (t.prototype.packInterleavedGeometry = function (e, t, n, i, r) {
          for (
            var o = t.uint32View,
              a = t.float32View,
              s = i / this.vertexSize,
              u = e.uvs,
              l = e.indices,
              c = e.vertexData,
              d = e._texture.baseTexture._batchLocation,
              h = Math.min(e.worldAlpha, 1),
              p =
                h < 1 && e._texture.baseTexture.alphaMode
                  ? de(e._tintRGB, h)
                  : e._tintRGB + ((255 * h) << 24),
              f = 0;
            f < c.length;
            f += 2
          )
            ((a[i++] = c[f]),
              (a[i++] = c[f + 1]),
              (a[i++] = u[f]),
              (a[i++] = u[f + 1]),
              (o[i++] = p),
              (a[i++] = d))
          for (f = 0; f < l.length; f++) n[r++] = s + l[f]
        }),
        (t._drawCallPool = []),
        (t._textureArrayPool = []),
        t
      )
    })(vn),
    ki = (function () {
      function e(e, t) {
        if (
          ((this.vertexSrc = e),
          (this.fragTemplate = t),
          (this.programCache = {}),
          (this.defaultGroupCache = {}),
          t.indexOf("%count%") < 0)
        )
          throw new Error('Fragment template must contain "%count%".')
        if (t.indexOf("%forloop%") < 0)
          throw new Error('Fragment template must contain "%forloop%".')
      }
      return (
        (e.prototype.generateShader = function (e) {
          if (!this.programCache[e]) {
            for (var t = new Int32Array(e), n = 0; n < e; n++) t[n] = n
            this.defaultGroupCache[e] = _n.from({ uSamplers: t }, true)
            var i = this.fragTemplate
            ;((i = (i = i.replace(/%count%/gi, "" + e)).replace(
              /%forloop%/gi,
              this.generateSampleSrc(e),
            )),
              (this.programCache[e] = new Jn(this.vertexSrc, i)))
          }
          var r = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new qe(),
            default: this.defaultGroupCache[e],
          }
          return new Qn(this.programCache[e], r)
        }),
        (e.prototype.generateSampleSrc = function (e) {
          var t = ""
          ;((t += "\n"), (t += "\n"))
          for (var n = 0; n < e; n++)
            (n > 0 && (t += "\nelse "),
              n < e - 1 && (t += "if(vTextureId < " + n + ".5)"),
              (t += "\n{"),
              (t += "\n\tcolor = texture2D(uSamplers[" + n + "], vTextureCoord);"),
              (t += "\n}"))
          return ((t += "\n"), (t += "\n"))
        }),
        e
      )
    })(),
    Ni = (function (e) {
      function t(t) {
        undefined === t && (t = false)
        var n = e.call(this) || this
        return (
          (n._buffer = new on(null, t, false)),
          (n._indexBuffer = new on(null, t, true)),
          n
            .addAttribute("aVertexPosition", n._buffer, 2, false, D.FLOAT)
            .addAttribute("aTextureCoord", n._buffer, 2, false, D.FLOAT)
            .addAttribute("aColor", n._buffer, 4, true, D.UNSIGNED_BYTE)
            .addAttribute("aTextureId", n._buffer, 1, true, D.FLOAT)
            .addIndex(n._indexBuffer),
          n
        )
      }
      return (Pt(t, e), t)
    })(dn),
    Di =
      "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
    Bi =
      "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
    Fi = (function () {
      function e() {}
      return (
        (e.create = function (e) {
          var t = Object.assign({ vertex: Di, fragment: Bi, geometryClass: Ni, vertexSize: 6 }, e),
            n = t.vertex,
            i = t.fragment,
            r = t.vertexSize,
            o = t.geometryClass
          return (function (e) {
            function t(t) {
              var a = e.call(this, t) || this
              return (
                (a.shaderGenerator = new ki(n, i)),
                (a.geometryClass = o),
                (a.vertexSize = r),
                a
              )
            }
            return (Pt(t, e), t)
          })(Ri)
        }),
        Object.defineProperty(e, "defaultVertexSrc", {
          get: function () {
            return Di
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e, "defaultFragmentTemplate", {
          get: function () {
            return Bi
          },
          enumerable: false,
          configurable: true,
        }),
        e
      )
    })(),
    Ui = Fi.create(),
    Gi = (function () {
      function e(t) {
        var n = this
        ;((t = Object.assign({ forceCanvas: false }, t)),
          (this.renderer = Ei(t)),
          (this.stage = new dt()),
          e._plugins.forEach(function (e) {
            e.init.call(n, t)
          }))
      }
      return (
        (e.registerPlugin = function (t) {
          e._plugins.push(t)
        }),
        (e.prototype.render = function () {
          this.renderer.render(this.stage)
        }),
        Object.defineProperty(e.prototype, "view", {
          get: function () {
            return this.renderer.view
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "screen", {
          get: function () {
            return this.renderer.screen
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.destroy = function (t, n) {
          var i = this,
            r = e._plugins.slice(0)
          ;(r.reverse(),
            r.forEach(function (e) {
              e.destroy.call(i)
            }),
            this.stage.destroy(n),
            (this.stage = null),
            this.renderer.destroy(t),
            (this.renderer = null))
        }),
        e
      )
    })()
  Gi._plugins = []
  var ji = (function () {
    function e() {}
    return (
      (e.init = function (e) {
        var t = this
        ;(Object.defineProperty(this, "resizeTo", {
          set: function (e) {
            ;(window.removeEventListener("resize", this.queueResize),
              (this._resizeTo = e),
              e && (window.addEventListener("resize", this.queueResize), this.resize()))
          },
          get: function () {
            return this._resizeTo
          },
        }),
          (this.queueResize = function () {
            t._resizeTo &&
              (t.cancelResize(),
              (t._resizeId = requestAnimationFrame(function () {
                return t.resize()
              })))
          }),
          (this.cancelResize = function () {
            t._resizeId && (cancelAnimationFrame(t._resizeId), (t._resizeId = null))
          }),
          (this.resize = function () {
            if (t._resizeTo) {
              var e, n
              if ((t.cancelResize(), t._resizeTo === window))
                ((e = window.innerWidth), (n = window.innerHeight))
              else {
                var i = t._resizeTo
                ;((e = i.clientWidth), (n = i.clientHeight))
              }
              t.renderer.resize(e, n)
            }
          }),
          (this._resizeId = null),
          (this._resizeTo = null),
          (this.resizeTo = e.resizeTo || null))
      }),
      (e.destroy = function () {
        ;(window.removeEventListener("resize", this.queueResize),
          this.cancelResize(),
          (this.cancelResize = null),
          (this.queueResize = null),
          (this.resizeTo = null),
          (this.resize = null))
      }),
      e
    )
  })()
  Gi.registerPlugin(ji)
  var Hi = new He(),
    Vi = (function () {
      function e(e) {
        ;((this.renderer = e), (e.extract = this))
      }
      return (
        (e.prototype.image = function (e, t, n) {
          var i = new Image()
          return ((i.src = this.base64(e, t, n)), i)
        }),
        (e.prototype.base64 = function (e, t, n) {
          return this.canvas(e).toDataURL(t, n)
        }),
        (e.prototype.canvas = function (t) {
          var n,
            i,
            r,
            o = this.renderer,
            a = false,
            s = false
          ;(t && (t instanceof en ? (r = t) : ((r = this.renderer.generateTexture(t)), (s = true))),
            r
              ? ((n = r.baseTexture.resolution), (i = r.frame), (a = false), o.renderTexture.bind(r))
              : ((n = this.renderer.resolution),
                (a = true),
                ((i = Hi).width = this.renderer.width),
                (i.height = this.renderer.height),
                o.renderTexture.bind(null)))
          var u = Math.floor(i.width * n + 1e-4),
            l = Math.floor(i.height * n + 1e-4),
            c = new Pe(u, l, 1),
            d = new Uint8Array(4 * u * l),
            h = o.gl
          h.readPixels(i.x * n, i.y * n, u, l, h.RGBA, h.UNSIGNED_BYTE, d)
          var p = c.context.getImageData(0, 0, u, l)
          if ((e.arrayPostDivide(d, p.data), c.context.putImageData(p, 0, 0), a)) {
            var f = new Pe(c.width, c.height, 1)
            ;(f.context.scale(1, -1), f.context.drawImage(c.canvas, 0, -l), c.destroy(), (c = f))
          }
          return (s && r.destroy(true), c.canvas)
        }),
        (e.prototype.pixels = function (t) {
          var n,
            i,
            r,
            o = this.renderer,
            a = false
          ;(t && (t instanceof en ? (r = t) : ((r = this.renderer.generateTexture(t)), (a = true))),
            r
              ? ((n = r.baseTexture.resolution), (i = r.frame), o.renderTexture.bind(r))
              : ((n = o.resolution),
                ((i = Hi).width = o.width),
                (i.height = o.height),
                o.renderTexture.bind(null)))
          var s = i.width * n,
            u = i.height * n,
            l = new Uint8Array(4 * s * u),
            c = o.gl
          return (
            c.readPixels(i.x * n, i.y * n, s, u, c.RGBA, c.UNSIGNED_BYTE, l),
            a && r.destroy(true),
            e.arrayPostDivide(l, l),
            l
          )
        }),
        (e.prototype.destroy = function () {
          ;((this.renderer.extract = null), (this.renderer = null))
        }),
        (e.arrayPostDivide = function (e, t) {
          for (var n = 0; n < e.length; n += 4) {
            var i = (t[n + 3] = e[n + 3])
            0 !== i
              ? ((t[n] = Math.round(Math.min((255 * e[n]) / i, 255))),
                (t[n + 1] = Math.round(Math.min((255 * e[n + 1]) / i, 255))),
                (t[n + 2] = Math.round(Math.min((255 * e[n + 2]) / i, 255))))
              : ((t[n] = e[n]), (t[n + 1] = e[n + 1]), (t[n + 2] = e[n + 2]))
          }
        }),
        e
      )
    })(),
    Zi = n(55784) /* 55784__mod */,
    zi = n.n(Zi),
    Yi = n(82940) /* 82940__mod */,
    Wi = n.n(Yi)
  function Xi() {}
  function qi(e, t, n, i) {
    var r = 0,
      o = e.length
    !(function a(s) {
      s || r === o
        ? n && n(s)
        : i
          ? setTimeout(function () {
              t(e[r++], a)
            }, 1)
          : t(e[r++], a)
    })()
  }
  function Ki(e) {
    return function () {
      if (null === e) throw new Error("Callback was already called.")
      var t = e
      ;((e = null), t.apply(this, arguments))
    }
  }
  function $i(e, t) {
    if (null == t) t = 1
    else if (0 === t) throw new Error("Concurrency must not be zero")
    var n = 0,
      i = {
        _tasks: [],
        concurrency: t,
        saturated: Xi,
        unsaturated: Xi,
        buffer: t / 4,
        empty: Xi,
        drain: Xi,
        error: Xi,
        started: false,
        paused: false,
        push: function (e, t) {
          r(e, false, t)
        },
        kill: function () {
          ;((n = 0), (i.drain = Xi), (i.started = false), (i._tasks = []))
        },
        unshift: function (e, t) {
          r(e, true, t)
        },
        process: function () {
          for (; !i.paused && n < i.concurrency && i._tasks.length; ) {
            var t = i._tasks.shift()
            ;(0 === i._tasks.length && i.empty(),
              (n += 1) === i.concurrency && i.saturated(),
              e(t.data, Ki(o(t))))
          }
        },
        length: function () {
          return i._tasks.length
        },
        running: function () {
          return n
        },
        idle: function () {
          return i._tasks.length + n === 0
        },
        pause: function () {
          true !== i.paused && (i.paused = true)
        },
        resume: function () {
          if (false !== i.paused) {
            i.paused = false
            for (var e = 1; e <= i.concurrency; e++) i.process()
          }
        },
      }
    function r(e, t, n) {
      if (null != n && "function" != typeof n) throw new Error("task callback must be a function")
      if (((i.started = true), null == e && i.idle()))
        setTimeout(function () {
          return i.drain()
        }, 1)
      else {
        var r = { data: e, callback: "function" == typeof n ? n : Xi }
        ;(t ? i._tasks.unshift(r) : i._tasks.push(r),
          setTimeout(function () {
            return i.process()
          }, 1))
      }
    }
    function o(e) {
      return function () {
        ;((n -= 1),
          e.callback.apply(e, arguments),
          null != arguments[0] && i.error(arguments[0], e.data),
          n <= i.concurrency - i.buffer && i.unsaturated(),
          i.idle() && i.drain(),
          i.process())
      }
    }
    return i
  }
  var Ji = {}
  function Qi(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n]
      ;((i.enumerable = i.enumerable || false),
        (i.configurable = true),
        "value" in i && (i.writable = true),
        Object.defineProperty(e, i.key, i))
    }
  }
  function er(e, t, n) {
    return (t && Qi(e.prototype, t), n && Qi(e, n), e)
  }
  var tr = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest()),
    nr = null
  function ir() {}
  var rr = (function () {
    function e(t, n, i) {
      if ("string" != typeof t || "string" != typeof n)
        throw new Error("Both name and url are required for constructing a resource.")
      ;((i = i || {}),
        (this._flags = 0),
        this._setFlag(e.STATUS_FLAGS.DATA_URL, 0 === n.indexOf("data:")),
        (this.name = t),
        (this.url = n),
        (this.extension = this._getExtension()),
        (this.data = null),
        (this.crossOrigin = true === i.crossOrigin ? "anonymous" : i.crossOrigin),
        (this.timeout = i.timeout || 0),
        (this.loadType = i.loadType || this._determineLoadType()),
        (this.xhrType = i.xhrType),
        (this.metadata = i.metadata || {}),
        (this.error = null),
        (this.xhr = null),
        (this.children = []),
        (this.type = e.TYPE.UNKNOWN),
        (this.progressChunk = 0),
        (this._dequeue = ir),
        (this._onLoadBinding = null),
        (this._elementTimer = 0),
        (this._boundComplete = this.complete.bind(this)),
        (this._boundOnError = this._onError.bind(this)),
        (this._boundOnProgress = this._onProgress.bind(this)),
        (this._boundOnTimeout = this._onTimeout.bind(this)),
        (this._boundXhrOnError = this._xhrOnError.bind(this)),
        (this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this)),
        (this._boundXhrOnAbort = this._xhrOnAbort.bind(this)),
        (this._boundXhrOnLoad = this._xhrOnLoad.bind(this)),
        (this.onStart = new (Wi())()),
        (this.onProgress = new (Wi())()),
        (this.onComplete = new (Wi())()),
        (this.onAfterMiddleware = new (Wi())()))
    }
    ;((e.setExtensionLoadType = function (t, n) {
      or(e._loadTypeMap, t, n)
    }),
      (e.setExtensionXhrType = function (t, n) {
        or(e._xhrTypeMap, t, n)
      }))
    var t = e.prototype
    return (
      (t.complete = function () {
        ;(this._clearEvents(), this._finish())
      }),
      (t.abort = function (t) {
        if (!this.error) {
          if (((this.error = new Error(t)), this._clearEvents(), this.xhr)) this.xhr.abort()
          else if (this.xdr) this.xdr.abort()
          else if (this.data)
            if (this.data.src) this.data.src = e.EMPTY_GIF
            else for (; this.data.firstChild; ) this.data.removeChild(this.data.firstChild)
          this._finish()
        }
      }),
      (t.load = function (t) {
        var n = this
        if (!this.isLoading)
          if (this.isComplete)
            t &&
              setTimeout(function () {
                return t(n)
              }, 1)
          else
            switch (
              (t && this.onComplete.once(t),
              this._setFlag(e.STATUS_FLAGS.LOADING, true),
              this.onStart.dispatch(this),
              (false !== this.crossOrigin && "string" == typeof this.crossOrigin) ||
                (this.crossOrigin = this._determineCrossOrigin(this.url)),
              this.loadType)
            ) {
              case e.LOAD_TYPE.IMAGE:
                ;((this.type = e.TYPE.IMAGE), this._loadElement("image"))
                break
              case e.LOAD_TYPE.AUDIO:
                ;((this.type = e.TYPE.AUDIO), this._loadSourceElement("audio"))
                break
              case e.LOAD_TYPE.VIDEO:
                ;((this.type = e.TYPE.VIDEO), this._loadSourceElement("video"))
                break
              case e.LOAD_TYPE.XHR:
              default:
                tr && this.crossOrigin ? this._loadXdr() : this._loadXhr()
            }
      }),
      (t._hasFlag = function (e) {
        return 0 != (this._flags & e)
      }),
      (t._setFlag = function (e, t) {
        this._flags = t ? this._flags | e : this._flags & ~e
      }),
      (t._clearEvents = function () {
        ;(clearTimeout(this._elementTimer),
          this.data &&
            this.data.removeEventListener &&
            (this.data.removeEventListener("error", this._boundOnError, false),
            this.data.removeEventListener("load", this._boundComplete, false),
            this.data.removeEventListener("progress", this._boundOnProgress, false),
            this.data.removeEventListener("canplaythrough", this._boundComplete, false)),
          this.xhr &&
            (this.xhr.removeEventListener
              ? (this.xhr.removeEventListener("error", this._boundXhrOnError, false),
                this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, false),
                this.xhr.removeEventListener("abort", this._boundXhrOnAbort, false),
                this.xhr.removeEventListener("progress", this._boundOnProgress, false),
                this.xhr.removeEventListener("load", this._boundXhrOnLoad, false))
              : ((this.xhr.onerror = null),
                (this.xhr.ontimeout = null),
                (this.xhr.onprogress = null),
                (this.xhr.onload = null))))
      }),
      (t._finish = function () {
        if (this.isComplete)
          throw new Error("Complete called again for an already completed resource.")
        ;(this._setFlag(e.STATUS_FLAGS.COMPLETE, true),
          this._setFlag(e.STATUS_FLAGS.LOADING, false),
          this.onComplete.dispatch(this))
      }),
      (t._loadElement = function (e) {
        ;(this.metadata.loadElement
          ? (this.data = this.metadata.loadElement)
          : "image" === e && undefined !== window.Image
            ? (this.data = new Image())
            : (this.data = document.createElement(e)),
          this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
          this.metadata.skipSource || (this.data.src = this.url),
          this.data.addEventListener("error", this._boundOnError, false),
          this.data.addEventListener("load", this._boundComplete, false),
          this.data.addEventListener("progress", this._boundOnProgress, false),
          this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout)))
      }),
      (t._loadSourceElement = function (e) {
        if (
          (this.metadata.loadElement
            ? (this.data = this.metadata.loadElement)
            : "audio" === e && undefined !== window.Audio
              ? (this.data = new Audio())
              : (this.data = document.createElement(e)),
          null !== this.data)
        ) {
          if (
            (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
            !this.metadata.skipSource)
          )
            if (navigator.isCocoonJS)
              this.data.src = Array.isArray(this.url) ? this.url[0] : this.url
            else if (Array.isArray(this.url))
              for (var t = this.metadata.mimeType, n = 0; n < this.url.length; ++n)
                this.data.appendChild(
                  this._createSource(e, this.url[n], Array.isArray(t) ? t[n] : t),
                )
            else {
              var i = this.metadata.mimeType
              this.data.appendChild(this._createSource(e, this.url, Array.isArray(i) ? i[0] : i))
            }
          ;(this.data.addEventListener("error", this._boundOnError, false),
            this.data.addEventListener("load", this._boundComplete, false),
            this.data.addEventListener("progress", this._boundOnProgress, false),
            this.data.addEventListener("canplaythrough", this._boundComplete, false),
            this.data.load(),
            this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout)))
        } else this.abort("Unsupported element: " + e)
      }),
      (t._loadXhr = function () {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType())
        var t = (this.xhr = new XMLHttpRequest())
        ;(t.open("GET", this.url, true),
          (t.timeout = this.timeout),
          this.xhrType === e.XHR_RESPONSE_TYPE.JSON || this.xhrType === e.XHR_RESPONSE_TYPE.DOCUMENT
            ? (t.responseType = e.XHR_RESPONSE_TYPE.TEXT)
            : (t.responseType = this.xhrType),
          t.addEventListener("error", this._boundXhrOnError, false),
          t.addEventListener("timeout", this._boundXhrOnTimeout, false),
          t.addEventListener("abort", this._boundXhrOnAbort, false),
          t.addEventListener("progress", this._boundOnProgress, false),
          t.addEventListener("load", this._boundXhrOnLoad, false),
          t.send())
      }),
      (t._loadXdr = function () {
        "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType())
        var e = (this.xhr = new XDomainRequest())
        ;((e.timeout = this.timeout || 5e3),
          (e.onerror = this._boundXhrOnError),
          (e.ontimeout = this._boundXhrOnTimeout),
          (e.onprogress = this._boundOnProgress),
          (e.onload = this._boundXhrOnLoad),
          e.open("GET", this.url, true),
          setTimeout(function () {
            return e.send()
          }, 1))
      }),
      (t._createSource = function (e, t, n) {
        n || (n = e + "/" + this._getExtension(t))
        var i = document.createElement("source")
        return ((i.src = t), (i.type = n), i)
      }),
      (t._onError = function (e) {
        this.abort("Failed to load element using: " + e.target.nodeName)
      }),
      (t._onProgress = function (e) {
        e && e.lengthComputable && this.onProgress.dispatch(this, e.loaded / e.total)
      }),
      (t._onTimeout = function () {
        this.abort("Load timed out.")
      }),
      (t._xhrOnError = function () {
        var e = this.xhr
        this.abort(
          ar(e) + " Request failed. Status: " + e.status + ', text: "' + e.statusText + '"',
        )
      }),
      (t._xhrOnTimeout = function () {
        var e = this.xhr
        this.abort(ar(e) + " Request timed out.")
      }),
      (t._xhrOnAbort = function () {
        var e = this.xhr
        this.abort(ar(e) + " Request was aborted by the user.")
      }),
      (t._xhrOnLoad = function () {
        var t = this.xhr,
          n = "",
          i = undefined === t.status ? 200 : t.status
        if (
          (("" !== t.responseType && "text" !== t.responseType && undefined !== t.responseType) ||
            (n = t.responseText),
          0 === i && (n.length > 0 || t.responseType === e.XHR_RESPONSE_TYPE.BUFFER)
            ? (i = 200)
            : 1223 === i && (i = 204),
          2 === ((i / 100) | 0))
        ) {
          if (this.xhrType === e.XHR_RESPONSE_TYPE.TEXT)
            ((this.data = n), (this.type = e.TYPE.TEXT))
          else if (this.xhrType === e.XHR_RESPONSE_TYPE.JSON)
            try {
              ;((this.data = JSON.parse(n)), (this.type = e.TYPE.JSON))
            } catch (e) {
              return void this.abort("Error trying to parse loaded json: " + e)
            }
          else if (this.xhrType === e.XHR_RESPONSE_TYPE.DOCUMENT)
            try {
              if (window.DOMParser) {
                var r = new DOMParser()
                this.data = r.parseFromString(n, "text/xml")
              } else {
                var o = document.createElement("div")
                ;((o.innerHTML = n), (this.data = o))
              }
              this.type = e.TYPE.XML
            } catch (e) {
              return void this.abort("Error trying to parse loaded xml: " + e)
            }
          else this.data = t.response || n
          this.complete()
        } else this.abort("[" + t.status + "] " + t.statusText + ": " + t.responseURL)
      }),
      (t._determineCrossOrigin = function (e, t) {
        if (0 === e.indexOf("data:")) return ""
        if (window.origin !== window.location.origin) return "anonymous"
        ;((t = t || window.location), nr || (nr = document.createElement("a")), (nr.href = e))
        var n =
            (!(e = zi()(nr.href, { strictMode: true })).port && "" === t.port) || e.port === t.port,
          i = e.protocol ? e.protocol + ":" : ""
        return e.host === t.hostname && n && i === t.protocol ? "" : "anonymous"
      }),
      (t._determineXhrType = function () {
        return e._xhrTypeMap[this.extension] || e.XHR_RESPONSE_TYPE.TEXT
      }),
      (t._determineLoadType = function () {
        return e._loadTypeMap[this.extension] || e.LOAD_TYPE.XHR
      }),
      (t._getExtension = function () {
        var e = this.url,
          t = ""
        if (this.isDataUrl) {
          var n = e.indexOf("/")
          t = e.substring(n + 1, e.indexOf(";", n))
        } else {
          var i = e.indexOf("?"),
            r = e.indexOf("#"),
            o = Math.min(i > -1 ? i : e.length, r > -1 ? r : e.length)
          t = (e = e.substring(0, o)).substring(e.lastIndexOf(".") + 1)
        }
        return t.toLowerCase()
      }),
      (t._getMimeFromXhrType = function (t) {
        switch (t) {
          case e.XHR_RESPONSE_TYPE.BUFFER:
            return "application/octet-binary"
          case e.XHR_RESPONSE_TYPE.BLOB:
            return "application/blob"
          case e.XHR_RESPONSE_TYPE.DOCUMENT:
            return "application/xml"
          case e.XHR_RESPONSE_TYPE.JSON:
            return "application/json"
          case e.XHR_RESPONSE_TYPE.DEFAULT:
          case e.XHR_RESPONSE_TYPE.TEXT:
          default:
            return "text/plain"
        }
      }),
      er(e, [
        {
          key: "isDataUrl",
          get: function () {
            return this._hasFlag(e.STATUS_FLAGS.DATA_URL)
          },
        },
        {
          key: "isComplete",
          get: function () {
            return this._hasFlag(e.STATUS_FLAGS.COMPLETE)
          },
        },
        {
          key: "isLoading",
          get: function () {
            return this._hasFlag(e.STATUS_FLAGS.LOADING)
          },
        },
      ]),
      e
    )
  })()
  function or(e, t, n) {
    ;(t && 0 === t.indexOf(".") && (t = t.substring(1)), t && (e[t] = n))
  }
  function ar(e) {
    return e.toString().replace("object ", "")
  }
  ;((rr.STATUS_FLAGS = { NONE: 0, DATA_URL: 1, COMPLETE: 2, LOADING: 4 }),
    (rr.TYPE = { UNKNOWN: 0, JSON: 1, XML: 2, IMAGE: 3, AUDIO: 4, VIDEO: 5, TEXT: 6 }),
    (rr.LOAD_TYPE = { XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4 }),
    (rr.XHR_RESPONSE_TYPE = {
      DEFAULT: "text",
      BUFFER: "arraybuffer",
      BLOB: "blob",
      DOCUMENT: "document",
      JSON: "json",
      TEXT: "text",
    }),
    (rr._loadTypeMap = {
      gif: rr.LOAD_TYPE.IMAGE,
      png: rr.LOAD_TYPE.IMAGE,
      bmp: rr.LOAD_TYPE.IMAGE,
      jpg: rr.LOAD_TYPE.IMAGE,
      jpeg: rr.LOAD_TYPE.IMAGE,
      tif: rr.LOAD_TYPE.IMAGE,
      tiff: rr.LOAD_TYPE.IMAGE,
      webp: rr.LOAD_TYPE.IMAGE,
      tga: rr.LOAD_TYPE.IMAGE,
      svg: rr.LOAD_TYPE.IMAGE,
      "svg+xml": rr.LOAD_TYPE.IMAGE,
      mp3: rr.LOAD_TYPE.AUDIO,
      ogg: rr.LOAD_TYPE.AUDIO,
      wav: rr.LOAD_TYPE.AUDIO,
      mp4: rr.LOAD_TYPE.VIDEO,
      webm: rr.LOAD_TYPE.VIDEO,
    }),
    (rr._xhrTypeMap = {
      xhtml: rr.XHR_RESPONSE_TYPE.DOCUMENT,
      html: rr.XHR_RESPONSE_TYPE.DOCUMENT,
      htm: rr.XHR_RESPONSE_TYPE.DOCUMENT,
      xml: rr.XHR_RESPONSE_TYPE.DOCUMENT,
      tmx: rr.XHR_RESPONSE_TYPE.DOCUMENT,
      svg: rr.XHR_RESPONSE_TYPE.DOCUMENT,
      tsx: rr.XHR_RESPONSE_TYPE.DOCUMENT,
      gif: rr.XHR_RESPONSE_TYPE.BLOB,
      png: rr.XHR_RESPONSE_TYPE.BLOB,
      bmp: rr.XHR_RESPONSE_TYPE.BLOB,
      jpg: rr.XHR_RESPONSE_TYPE.BLOB,
      jpeg: rr.XHR_RESPONSE_TYPE.BLOB,
      tif: rr.XHR_RESPONSE_TYPE.BLOB,
      tiff: rr.XHR_RESPONSE_TYPE.BLOB,
      webp: rr.XHR_RESPONSE_TYPE.BLOB,
      tga: rr.XHR_RESPONSE_TYPE.BLOB,
      json: rr.XHR_RESPONSE_TYPE.JSON,
      text: rr.XHR_RESPONSE_TYPE.TEXT,
      txt: rr.XHR_RESPONSE_TYPE.TEXT,
      ttf: rr.XHR_RESPONSE_TYPE.BUFFER,
      otf: rr.XHR_RESPONSE_TYPE.BUFFER,
    }),
    (rr.EMPTY_GIF =
      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="))
  var sr = window.URL || window.webkitURL
  var ur = {
      caching: function (e, t) {
        var n = this
        ;(Ji[e.url]
          ? ((e.data = Ji[e.url]), e.complete())
          : e.onComplete.once(function () {
              return (Ji[n.url] = n.data)
            }),
          t())
      },
      parsing: function (e, t) {
        if (e.data) {
          if (e.xhr && e.xhrType === rr.XHR_RESPONSE_TYPE.BLOB)
            if (window.Blob && "string" != typeof e.data) {
              if (0 === e.data.type.indexOf("image")) {
                var n = sr.createObjectURL(e.data)
                return (
                  (e.blob = e.data),
                  (e.data = new Image()),
                  (e.data.src = n),
                  (e.type = rr.TYPE.IMAGE),
                  void (e.data.onload = function () {
                    ;(sr.revokeObjectURL(n), (e.data.onload = null), t())
                  })
                )
              }
            } else {
              var i = e.xhr.getResponseHeader("content-type")
              if (i && 0 === i.indexOf("image"))
                return (
                  (e.data = new Image()),
                  (e.data.src =
                    "data:" +
                    i +
                    ";base64," +
                    (function (e) {
                      for (var t = "", n = 0; n < e.length; ) {
                        for (var i = [0, 0, 0], r = [0, 0, 0, 0], o = 0; o < i.length; ++o)
                          n < e.length ? (i[o] = 255 & e.charCodeAt(n++)) : (i[o] = 0)
                        switch (
                          ((r[0] = i[0] >> 2),
                          (r[1] = ((3 & i[0]) << 4) | (i[1] >> 4)),
                          (r[2] = ((15 & i[1]) << 2) | (i[2] >> 6)),
                          (r[3] = 63 & i[2]),
                          n - (e.length - 1))
                        ) {
                          case 2:
                            ;((r[3] = 64), (r[2] = 64))
                            break
                          case 1:
                            r[3] = 64
                        }
                        for (var a = 0; a < r.length; ++a)
                          t +=
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                              r[a],
                            )
                      }
                      return t
                    })(e.xhr.responseText)),
                  (e.type = rr.TYPE.IMAGE),
                  void (e.data.onload = function () {
                    ;((e.data.onload = null), t())
                  })
                )
            }
          t()
        } else t()
      },
    },
    lr = /(#[\w-]+)?$/,
    cr = (function () {
      function e(t, n) {
        var i = this
        ;(undefined === t && (t = ""),
          undefined === n && (n = 10),
          (this.baseUrl = t),
          (this.progress = 0),
          (this.loading = false),
          (this.defaultQueryString = ""),
          (this._beforeMiddleware = []),
          (this._afterMiddleware = []),
          (this._resourcesParsing = []),
          (this._boundLoadResource = function (e, t) {
            return i._loadResource(e, t)
          }),
          (this._queue = $i(this._boundLoadResource, n)),
          this._queue.pause(),
          (this.resources = {}),
          (this.onProgress = new (Wi())()),
          (this.onError = new (Wi())()),
          (this.onLoad = new (Wi())()),
          (this.onStart = new (Wi())()),
          (this.onComplete = new (Wi())()))
        for (var r = 0; r < e._defaultBeforeMiddleware.length; ++r)
          this.pre(e._defaultBeforeMiddleware[r])
        for (var o = 0; o < e._defaultAfterMiddleware.length; ++o)
          this.use(e._defaultAfterMiddleware[o])
      }
      var t = e.prototype
      return (
        (t.add = function (e, t, n, i) {
          if (Array.isArray(e)) {
            for (var r = 0; r < e.length; ++r) this.add(e[r])
            return this
          }
          if (
            ("object" == typeof e &&
              ((i = t || e.callback || e.onComplete),
              (n = e),
              (t = e.url),
              (e = e.name || e.key || e.url)),
            "string" != typeof t && ((i = n), (n = t), (t = e)),
            "string" != typeof t)
          )
            throw new Error("No url passed to add resource to loader.")
          if (
            ("function" == typeof n && ((i = n), (n = null)),
            this.loading && (!n || !n.parentResource))
          )
            throw new Error("Cannot add resources while the loader is running.")
          if (this.resources[e]) throw new Error('Resource named "' + e + '" already exists.')
          if (
            ((t = this._prepareUrl(t)),
            (this.resources[e] = new rr(e, t, n)),
            "function" == typeof i && this.resources[e].onAfterMiddleware.once(i),
            this.loading)
          ) {
            for (var o = n.parentResource, a = [], s = 0; s < o.children.length; ++s)
              o.children[s].isComplete || a.push(o.children[s])
            var u = (o.progressChunk * (a.length + 1)) / (a.length + 2)
            ;(o.children.push(this.resources[e]), (o.progressChunk = u))
            for (var l = 0; l < a.length; ++l) a[l].progressChunk = u
            this.resources[e].progressChunk = u
          }
          return (this._queue.push(this.resources[e]), this)
        }),
        (t.pre = function (e) {
          return (this._beforeMiddleware.push(e), this)
        }),
        (t.use = function (e) {
          return (this._afterMiddleware.push(e), this)
        }),
        (t.reset = function () {
          for (var e in ((this.progress = 0),
          (this.loading = false),
          this._queue.kill(),
          this._queue.pause(),
          this.resources)) {
            var t = this.resources[e]
            ;(t._onLoadBinding && t._onLoadBinding.detach(), t.isLoading && t.abort())
          }
          return ((this.resources = {}), this)
        }),
        (t.load = function (e) {
          if (("function" == typeof e && this.onComplete.once(e), this.loading)) return this
          if (this._queue.idle()) (this._onStart(), this._onComplete())
          else {
            for (var t = 100 / this._queue._tasks.length, n = 0; n < this._queue._tasks.length; ++n)
              this._queue._tasks[n].data.progressChunk = t
            ;(this._onStart(), this._queue.resume())
          }
          return this
        }),
        (t._prepareUrl = function (e) {
          var t,
            n = zi()(e, { strictMode: true })
          if (
            ((t =
              n.protocol || !n.path || 0 === e.indexOf("//")
                ? e
                : this.baseUrl.length &&
                    this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 &&
                    "/" !== e.charAt(0)
                  ? this.baseUrl + "/" + e
                  : this.baseUrl + e),
            this.defaultQueryString)
          ) {
            var i = lr.exec(t)[0]
            ;(-1 !== (t = t.substr(0, t.length - i.length)).indexOf("?")
              ? (t += "&" + this.defaultQueryString)
              : (t += "?" + this.defaultQueryString),
              (t += i))
          }
          return t
        }),
        (t._loadResource = function (e, t) {
          var n = this
          ;((e._dequeue = t),
            qi(
              this._beforeMiddleware,
              function (t, i) {
                t.call(n, e, function () {
                  i(e.isComplete ? {} : null)
                })
              },
              function () {
                e.isComplete
                  ? n._onLoad(e)
                  : ((e._onLoadBinding = e.onComplete.once(n._onLoad, n)), e.load())
              },
              true,
            ))
        }),
        (t._onStart = function () {
          ;((this.progress = 0), (this.loading = true), this.onStart.dispatch(this))
        }),
        (t._onComplete = function () {
          ;((this.progress = 100),
            (this.loading = false),
            this.onComplete.dispatch(this, this.resources))
        }),
        (t._onLoad = function (e) {
          var t = this
          ;((e._onLoadBinding = null),
            this._resourcesParsing.push(e),
            e._dequeue(),
            qi(
              this._afterMiddleware,
              function (n, i) {
                n.call(t, e, i)
              },
              function () {
                ;(e.onAfterMiddleware.dispatch(e),
                  (t.progress = Math.min(100, t.progress + e.progressChunk)),
                  t.onProgress.dispatch(t, e),
                  e.error ? t.onError.dispatch(e.error, t, e) : t.onLoad.dispatch(t, e),
                  t._resourcesParsing.splice(t._resourcesParsing.indexOf(e), 1),
                  t._queue.idle() && 0 === t._resourcesParsing.length && t._onComplete())
              },
              true,
            ))
        }),
        er(e, [
          {
            key: "concurrency",
            get: function () {
              return this._queue.concurrency
            },
            set: function (e) {
              this._queue.concurrency = e
            },
          },
        ]),
        e
      )
    })()
  ;((cr._defaultBeforeMiddleware = []),
    (cr._defaultAfterMiddleware = []),
    (cr.pre = function (e) {
      return (cr._defaultBeforeMiddleware.push(e), cr)
    }),
    (cr.use = function (e) {
      return (cr._defaultAfterMiddleware.push(e), cr)
    }))
  var dr = rr,
    hr = function (e, t) {
      return (
        (hr =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        hr(e, t)
      )
    }
  var pr = (function () {
      function e() {}
      return (
        (e.use = function (e, t) {
          ;(e.data &&
            e.type === rr.TYPE.IMAGE &&
            (e.texture = Jt.fromLoader(e.data, e.url, e.name)),
            t())
        }),
        e
      )
    })(),
    fr = (function (e) {
      function t(n, i) {
        for (var r = e.call(this, n, i) || this, o = 0; o < t._plugins.length; ++o) {
          var a = t._plugins[o],
            s = a.pre,
            u = a.use
          ;(s && r.pre(s), u && r.use(u))
        }
        return ((r._protected = false), r)
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(hr(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        (t.prototype.destroy = function () {
          this._protected || this.reset()
        }),
        Object.defineProperty(t, "shared", {
          get: function () {
            var e = t._shared
            return (e || (((e = new t())._protected = true), (t._shared = e)), e)
          },
          enumerable: false,
          configurable: true,
        }),
        (t.registerPlugin = function (e) {
          return (t._plugins.push(e), e.add && e.add(), t)
        }),
        (t._plugins = []),
        t
      )
    })(cr)
  ;(fr.registerPlugin({ use: ur.parsing }), fr.registerPlugin(pr))
  var _r = (function () {
      function e() {}
      return (
        (e.init = function (e) {
          ;((e = Object.assign({ sharedLoader: false }, e)),
            (this.loader = e.sharedLoader ? fr.shared : new fr()))
        }),
        (e.destroy = function () {
          this.loader && (this.loader.destroy(), (this.loader = null))
        }),
        e
      )
    })(),
    gr = function (e, t) {
      return (
        (gr =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        gr(e, t)
      )
    }
  function mr(e, t) {
    function n() {
      this.constructor = e
    }
    ;(gr(e, t),
      (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var vr,
    yr,
    Cr = (function (e) {
      function t(t, n, i, r) {
        ;(undefined === t && (t = 1500), undefined === i && (i = 16384), undefined === r && (r = false))
        var o = e.call(this) || this
        return (
          i > 16384 && (i = 16384),
          (o._properties = [false, true, false, false, false]),
          (o._maxSize = t),
          (o._batchSize = i),
          (o._buffers = null),
          (o._bufferUpdateIDs = []),
          (o._updateID = 0),
          (o.interactiveChildren = false),
          (o.blendMode = O.NORMAL),
          (o.autoResize = r),
          (o.roundPixels = true),
          (o.baseTexture = null),
          o.setProperties(n),
          (o._tint = 0),
          (o.tintRgb = new Float32Array(4)),
          (o.tint = 16777215),
          o
        )
      }
      return (
        mr(t, e),
        (t.prototype.setProperties = function (e) {
          e &&
            ((this._properties[0] =
              "vertices" in e || "scale" in e ? !!e.vertices || !!e.scale : this._properties[0]),
            (this._properties[1] = "position" in e ? !!e.position : this._properties[1]),
            (this._properties[2] = "rotation" in e ? !!e.rotation : this._properties[2]),
            (this._properties[3] = "uvs" in e ? !!e.uvs : this._properties[3]),
            (this._properties[4] =
              "tint" in e || "alpha" in e ? !!e.tint || !!e.alpha : this._properties[4]))
        }),
        (t.prototype.updateTransform = function () {
          this.displayObjectUpdateTransform()
        }),
        Object.defineProperty(t.prototype, "tint", {
          get: function () {
            return this._tint
          },
          set: function (e) {
            ;((this._tint = e), re(e, this.tintRgb))
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.render = function (e) {
          var t = this
          this.visible &&
            !(this.worldAlpha <= 0) &&
            this.children.length &&
            this.renderable &&
            (this.baseTexture ||
              ((this.baseTexture = this.children[0]._texture.baseTexture),
              this.baseTexture.valid ||
                this.baseTexture.once("update", function () {
                  return t.onChildrenChange(0)
                })),
            e.batch.setObjectRenderer(e.plugins.particle),
            e.plugins.particle.render(this))
        }),
        (t.prototype.onChildrenChange = function (e) {
          for (var t = Math.floor(e / this._batchSize); this._bufferUpdateIDs.length < t; )
            this._bufferUpdateIDs.push(0)
          this._bufferUpdateIDs[t] = ++this._updateID
        }),
        (t.prototype.dispose = function () {
          if (this._buffers) {
            for (var e = 0; e < this._buffers.length; ++e) this._buffers[e].destroy()
            this._buffers = null
          }
        }),
        (t.prototype.destroy = function (t) {
          ;(e.prototype.destroy.call(this, t),
            this.dispose(),
            (this._properties = null),
            (this._buffers = null),
            (this._bufferUpdateIDs = null))
        }),
        t
      )
    })(dt),
    br = (function () {
      function e(e, t, n) {
        ;((this.geometry = new dn()),
          (this.indexBuffer = null),
          (this.size = n),
          (this.dynamicProperties = []),
          (this.staticProperties = []))
        for (var i = 0; i < e.length; ++i) {
          var r = e[i]
          ;((r = {
            attributeName: r.attributeName,
            size: r.size,
            uploadFunction: r.uploadFunction,
            type: r.type || D.FLOAT,
            offset: r.offset,
          }),
            t[i] ? this.dynamicProperties.push(r) : this.staticProperties.push(r))
        }
        ;((this.staticStride = 0),
          (this.staticBuffer = null),
          (this.staticData = null),
          (this.staticDataUint32 = null),
          (this.dynamicStride = 0),
          (this.dynamicBuffer = null),
          (this.dynamicData = null),
          (this.dynamicDataUint32 = null),
          (this._updateID = 0),
          this.initBuffers())
      }
      return (
        (e.prototype.initBuffers = function () {
          var e = this.geometry,
            t = 0
          ;((this.indexBuffer = new on(pe(this.size), true, true)),
            e.addIndex(this.indexBuffer),
            (this.dynamicStride = 0))
          for (var n = 0; n < this.dynamicProperties.length; ++n) {
            ;(((a = this.dynamicProperties[n]).offset = t),
              (t += a.size),
              (this.dynamicStride += a.size))
          }
          var i = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4)
          ;((this.dynamicData = new Float32Array(i)),
            (this.dynamicDataUint32 = new Uint32Array(i)),
            (this.dynamicBuffer = new on(this.dynamicData, false, false)))
          var r = 0
          this.staticStride = 0
          for (n = 0; n < this.staticProperties.length; ++n) {
            ;(((a = this.staticProperties[n]).offset = r),
              (r += a.size),
              (this.staticStride += a.size))
          }
          var o = new ArrayBuffer(this.size * this.staticStride * 4 * 4)
          ;((this.staticData = new Float32Array(o)),
            (this.staticDataUint32 = new Uint32Array(o)),
            (this.staticBuffer = new on(this.staticData, true, false)))
          for (n = 0; n < this.dynamicProperties.length; ++n) {
            var a = this.dynamicProperties[n]
            e.addAttribute(
              a.attributeName,
              this.dynamicBuffer,
              0,
              a.type === D.UNSIGNED_BYTE,
              a.type,
              4 * this.dynamicStride,
              4 * a.offset,
            )
          }
          for (n = 0; n < this.staticProperties.length; ++n) {
            a = this.staticProperties[n]
            e.addAttribute(
              a.attributeName,
              this.staticBuffer,
              0,
              a.type === D.UNSIGNED_BYTE,
              a.type,
              4 * this.staticStride,
              4 * a.offset,
            )
          }
        }),
        (e.prototype.uploadDynamic = function (e, t, n) {
          for (var i = 0; i < this.dynamicProperties.length; i++) {
            var r = this.dynamicProperties[i]
            r.uploadFunction(
              e,
              t,
              n,
              r.type === D.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData,
              this.dynamicStride,
              r.offset,
            )
          }
          this.dynamicBuffer._updateID++
        }),
        (e.prototype.uploadStatic = function (e, t, n) {
          for (var i = 0; i < this.staticProperties.length; i++) {
            var r = this.staticProperties[i]
            r.uploadFunction(
              e,
              t,
              n,
              r.type === D.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData,
              this.staticStride,
              r.offset,
            )
          }
          this.staticBuffer._updateID++
        }),
        (e.prototype.destroy = function () {
          ;((this.indexBuffer = null),
            (this.dynamicProperties = null),
            (this.dynamicBuffer = null),
            (this.dynamicData = null),
            (this.dynamicDataUint32 = null),
            (this.staticProperties = null),
            (this.staticBuffer = null),
            (this.staticData = null),
            (this.staticDataUint32 = null),
            this.geometry.destroy())
        }),
        e
      )
    })(),
    wr = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.shader = null),
          (n.properties = null),
          (n.tempMatrix = new qe()),
          (n.properties = [
            {
              attributeName: "aVertexPosition",
              size: 2,
              uploadFunction: n.uploadVertices,
              offset: 0,
            },
            {
              attributeName: "aPositionCoord",
              size: 2,
              uploadFunction: n.uploadPosition,
              offset: 0,
            },
            { attributeName: "aRotation", size: 1, uploadFunction: n.uploadRotation, offset: 0 },
            { attributeName: "aTextureCoord", size: 2, uploadFunction: n.uploadUvs, offset: 0 },
            {
              attributeName: "aColor",
              size: 1,
              type: D.UNSIGNED_BYTE,
              uploadFunction: n.uploadTint,
              offset: 0,
            },
          ]),
          (n.shader = Qn.from(
            "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n",
            "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",
            {},
          )),
          (n.state = ei.for2d()),
          n
        )
      }
      return (
        mr(t, e),
        (t.prototype.render = function (e) {
          var t = e.children,
            n = e._maxSize,
            i = e._batchSize,
            r = this.renderer,
            o = t.length
          if (0 !== o) {
            o > n && !e.autoResize && (o = n)
            var a = e._buffers
            a || (a = e._buffers = this.generateBuffers(e))
            var s = t[0]._texture.baseTexture
            ;((this.state.blendMode = le(e.blendMode, s.alphaMode)), r.state.set(this.state))
            var u = r.gl,
              l = e.worldTransform.copyTo(this.tempMatrix)
            ;(l.prepend(r.globalUniforms.uniforms.projectionMatrix),
              (this.shader.uniforms.translationMatrix = l.toArray(true)),
              (this.shader.uniforms.uColor = ce(
                e.tintRgb,
                e.worldAlpha,
                this.shader.uniforms.uColor,
                s.alphaMode,
              )),
              (this.shader.uniforms.uSampler = s),
              this.renderer.shader.bind(this.shader))
            for (var c = false, d = 0, h = 0; d < o; d += i, h += 1) {
              var p = o - d
              ;(p > i && (p = i), h >= a.length && a.push(this._generateOneMoreBuffer(e)))
              var f = a[h]
              f.uploadDynamic(t, d, p)
              var _ = e._bufferUpdateIDs[h] || 0
              ;((c = c || f._updateID < _) &&
                ((f._updateID = e._updateID), f.uploadStatic(t, d, p)),
                r.geometry.bind(f.geometry),
                u.drawElements(u.TRIANGLES, 6 * p, u.UNSIGNED_SHORT, 0))
            }
          }
        }),
        (t.prototype.generateBuffers = function (e) {
          for (
            var t = [], n = e._maxSize, i = e._batchSize, r = e._properties, o = 0;
            o < n;
            o += i
          )
            t.push(new br(this.properties, r, i))
          return t
        }),
        (t.prototype._generateOneMoreBuffer = function (e) {
          var t = e._batchSize,
            n = e._properties
          return new br(this.properties, n, t)
        }),
        (t.prototype.uploadVertices = function (e, t, n, i, r, o) {
          for (var a = 0, s = 0, u = 0, l = 0, c = 0; c < n; ++c) {
            var d = e[t + c],
              h = d._texture,
              p = d.scale.x,
              f = d.scale.y,
              _ = h.trim,
              g = h.orig
            ;(_
              ? ((a = (s = _.x - d.anchor.x * g.width) + _.width),
                (u = (l = _.y - d.anchor.y * g.height) + _.height))
              : ((a = g.width * (1 - d.anchor.x)),
                (s = g.width * -d.anchor.x),
                (u = g.height * (1 - d.anchor.y)),
                (l = g.height * -d.anchor.y)),
              (i[o] = s * p),
              (i[o + 1] = l * f),
              (i[o + r] = a * p),
              (i[o + r + 1] = l * f),
              (i[o + 2 * r] = a * p),
              (i[o + 2 * r + 1] = u * f),
              (i[o + 3 * r] = s * p),
              (i[o + 3 * r + 1] = u * f),
              (o += 4 * r))
          }
        }),
        (t.prototype.uploadPosition = function (e, t, n, i, r, o) {
          for (var a = 0; a < n; a++) {
            var s = e[t + a].position
            ;((i[o] = s.x),
              (i[o + 1] = s.y),
              (i[o + r] = s.x),
              (i[o + r + 1] = s.y),
              (i[o + 2 * r] = s.x),
              (i[o + 2 * r + 1] = s.y),
              (i[o + 3 * r] = s.x),
              (i[o + 3 * r + 1] = s.y),
              (o += 4 * r))
          }
        }),
        (t.prototype.uploadRotation = function (e, t, n, i, r, o) {
          for (var a = 0; a < n; a++) {
            var s = e[t + a].rotation
            ;((i[o] = s), (i[o + r] = s), (i[o + 2 * r] = s), (i[o + 3 * r] = s), (o += 4 * r))
          }
        }),
        (t.prototype.uploadUvs = function (e, t, n, i, r, o) {
          for (var a = 0; a < n; ++a) {
            var s = e[t + a]._texture._uvs
            s
              ? ((i[o] = s.x0),
                (i[o + 1] = s.y0),
                (i[o + r] = s.x1),
                (i[o + r + 1] = s.y1),
                (i[o + 2 * r] = s.x2),
                (i[o + 2 * r + 1] = s.y2),
                (i[o + 3 * r] = s.x3),
                (i[o + 3 * r + 1] = s.y3),
                (o += 4 * r))
              : ((i[o] = 0),
                (i[o + 1] = 0),
                (i[o + r] = 0),
                (i[o + r + 1] = 0),
                (i[o + 2 * r] = 0),
                (i[o + 2 * r + 1] = 0),
                (i[o + 3 * r] = 0),
                (i[o + 3 * r + 1] = 0),
                (o += 4 * r))
          }
        }),
        (t.prototype.uploadTint = function (e, t, n, i, r, o) {
          for (var a = 0; a < n; ++a) {
            var s = e[t + a],
              u = s._texture.baseTexture.alphaMode > 0,
              l = s.alpha,
              c = l < 1 && u ? de(s._tintRGB, l) : s._tintRGB + ((255 * l) << 24)
            ;((i[o] = c), (i[o + r] = c), (i[o + 2 * r] = c), (i[o + 3 * r] = c), (o += 4 * r))
          }
        }),
        (t.prototype.destroy = function () {
          ;(e.prototype.destroy.call(this),
            this.shader && (this.shader.destroy(), (this.shader = null)),
            (this.tempMatrix = null))
        }),
        t
      )
    })(vn)
  ;(!(function (e) {
    ;((e.MITER = "miter"), (e.BEVEL = "bevel"), (e.ROUND = "round"))
  })(vr || (vr = {})),
    (function (e) {
      ;((e.BUTT = "butt"), (e.ROUND = "round"), (e.SQUARE = "square"))
    })(yr || (yr = {})))
  var xr = {
      adaptive: true,
      maxLength: 10,
      minSegments: 8,
      maxSegments: 2048,
      epsilon: 1e-4,
      _segmentsCount: function (e, t) {
        if ((undefined === t && (t = 20), !this.adaptive || !e || isNaN(e))) return t
        var n = Math.ceil(e / this.maxLength)
        return (
          n < this.minSegments
            ? (n = this.minSegments)
            : n > this.maxSegments && (n = this.maxSegments),
          n
        )
      },
    },
    Tr = (function () {
      function e() {
        ;((this.color = 16777215),
          (this.alpha = 1),
          (this.texture = Jt.WHITE),
          (this.matrix = null),
          (this.visible = false),
          this.reset())
      }
      return (
        (e.prototype.clone = function () {
          var t = new e()
          return (
            (t.color = this.color),
            (t.alpha = this.alpha),
            (t.texture = this.texture),
            (t.matrix = this.matrix),
            (t.visible = this.visible),
            t
          )
        }),
        (e.prototype.reset = function () {
          ;((this.color = 16777215),
            (this.alpha = 1),
            (this.texture = Jt.WHITE),
            (this.matrix = null),
            (this.visible = false))
        }),
        (e.prototype.destroy = function () {
          ;((this.texture = null), (this.matrix = null))
        }),
        e
      )
    })(),
    Sr = function (e, t) {
      return (
        (Sr =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        Sr(e, t)
      )
    }
  function Lr(e, t) {
    function n() {
      this.constructor = e
    }
    ;(Sr(e, t),
      (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var Er = {
      build: function (e) {
        e.points = e.shape.points.slice()
      },
      triangulate: function (e, t) {
        var n = e.points,
          i = e.holes,
          r = t.points,
          o = t.indices
        if (n.length >= 6) {
          for (var a = [], s = 0; s < i.length; s++) {
            var u = i[s]
            ;(a.push(n.length / 2), (n = n.concat(u.points)))
          }
          var l = K()(n, a, 2)
          if (!l) return
          var c = r.length / 2
          for (s = 0; s < l.length; s += 3)
            (o.push(l[s] + c), o.push(l[s + 1] + c), o.push(l[s + 2] + c))
          for (s = 0; s < n.length; s++) r.push(n[s])
        }
      },
    },
    Ar = {
      build: function (e) {
        var t,
          n,
          i = e.shape,
          r = e.points,
          o = i.x,
          a = i.y
        if (((r.length = 0), e.type === Fe.CIRC)) ((t = i.radius), (n = i.radius))
        else {
          var s = e.shape
          ;((t = s.width), (n = s.height))
        }
        if (0 !== t && 0 !== n) {
          var u = Math.floor(30 * Math.sqrt(i.radius)) || Math.floor(15 * Math.sqrt(t + n))
          u /= 2.3
          for (var l = (2 * Math.PI) / u, c = 0; c < u - 0.5; c++)
            r.push(o + Math.sin(-l * c) * t, a + Math.cos(-l * c) * n)
          r.push(r[0], r[1])
        }
      },
      triangulate: function (e, t) {
        var n = e.points,
          i = t.points,
          r = t.indices,
          o = i.length / 2,
          a = o,
          s = e.shape,
          u = e.matrix,
          l = s.x,
          c = s.y
        i.push(e.matrix ? u.a * l + u.c * c + u.tx : l, e.matrix ? u.b * l + u.d * c + u.ty : c)
        for (var d = 0; d < n.length; d += 2) (i.push(n[d], n[d + 1]), r.push(o++, a, o))
      },
    },
    Ir = {
      build: function (e) {
        var t = e.shape,
          n = t.x,
          i = t.y,
          r = t.width,
          o = t.height,
          a = e.points
        ;((a.length = 0), a.push(n, i, n + r, i, n + r, i + o, n, i + o))
      },
      triangulate: function (e, t) {
        var n = e.points,
          i = t.points,
          r = i.length / 2
        ;(i.push(n[0], n[1], n[2], n[3], n[6], n[7], n[4], n[5]),
          t.indices.push(r, r + 1, r + 2, r + 1, r + 2, r + 3))
      },
    }
  function Mr(e, t, n) {
    return e + (t - e) * n
  }
  function Pr(e, t, n, i, r, o, a) {
    undefined === a && (a = [])
    for (var s = a, u = 0, l = 0, c = 0, d = 0, h = 0, p = 0, f = 0, _ = 0; f <= 20; ++f)
      ((u = Mr(e, n, (_ = f / 20))),
        (l = Mr(t, i, _)),
        (c = Mr(n, r, _)),
        (d = Mr(i, o, _)),
        (h = Mr(u, c, _)),
        (p = Mr(l, d, _)),
        s.push(h, p))
    return s
  }
  var Or = {
    build: function (e) {
      var t = e.shape,
        n = e.points,
        i = t.x,
        r = t.y,
        o = t.width,
        a = t.height,
        s = Math.max(0, Math.min(t.radius, Math.min(o, a) / 2))
      ;((n.length = 0),
        s
          ? (Pr(i, r + s, i, r, i + s, r, n),
            Pr(i + o - s, r, i + o, r, i + o, r + s, n),
            Pr(i + o, r + a - s, i + o, r + a, i + o - s, r + a, n),
            Pr(i + s, r + a, i, r + a, i, r + a - s, n))
          : n.push(i, r, i + o, r, i + o, r + a, i, r + a))
    },
    triangulate: function (e, t) {
      for (
        var n = e.points,
          i = t.points,
          r = t.indices,
          o = i.length / 2,
          a = K()(n, null, 2),
          s = 0,
          u = a.length;
        s < u;
        s += 3
      )
        (r.push(a[s] + o), r.push(a[s + 1] + o), r.push(a[s + 2] + o))
      for (s = 0, u = n.length; s < u; s++) i.push(n[s], n[++s])
    },
  }
  function Rr(e, t, n, i, r, o, a, s) {
    var u, l
    a ? ((u = i), (l = -n)) : ((u = -i), (l = n))
    var c = e - n * r + u,
      d = t - i * r + l,
      h = e + n * o + u,
      p = t + i * o + l
    return (s.push(c, d), s.push(h, p), 2)
  }
  function kr(e, t, n, i, r, o, a, s) {
    var u = n - e,
      l = i - t,
      c = Math.atan2(u, l),
      d = Math.atan2(r - e, o - t)
    s && c < d ? (c += 2 * Math.PI) : !s && c > d && (d += 2 * Math.PI)
    var h = c,
      p = d - c,
      f = Math.abs(p),
      _ = Math.sqrt(u * u + l * l),
      g = 1 + (((15 * f * Math.sqrt(_)) / Math.PI) >> 0),
      m = p / g
    if (((h += m), s)) {
      ;(a.push(e, t), a.push(n, i))
      for (var v = 1, y = h; v < g; v++, y += m)
        (a.push(e, t), a.push(e + Math.sin(y) * _, t + Math.cos(y) * _))
      ;(a.push(e, t), a.push(r, o))
    } else {
      ;(a.push(n, i), a.push(e, t))
      for (v = 1, y = h; v < g; v++, y += m)
        (a.push(e + Math.sin(y) * _, t + Math.cos(y) * _), a.push(e, t))
      ;(a.push(r, o), a.push(e, t))
    }
    return 2 * g
  }
  function Nr(e, t) {
    e.lineStyle.native
      ? (function (e, t) {
          var n = 0,
            i = e.shape,
            r = e.points || i.points,
            o = i.type !== Fe.POLY || i.closeStroke
          if (0 !== r.length) {
            var a = t.points,
              s = t.indices,
              u = r.length / 2,
              l = a.length / 2,
              c = l
            for (a.push(r[0], r[1]), n = 1; n < u; n++)
              (a.push(r[2 * n], r[2 * n + 1]), s.push(c, c + 1), c++)
            o && s.push(c, l)
          }
        })(e, t)
      : (function (e, t) {
          var n = e.shape,
            i = e.points || n.points.slice(),
            r = t.closePointEps
          if (0 !== i.length) {
            var o = e.lineStyle,
              a = new We(i[0], i[1]),
              s = new We(i[i.length - 2], i[i.length - 1]),
              u = n.type !== Fe.POLY || n.closeStroke,
              l = Math.abs(a.x - s.x) < r && Math.abs(a.y - s.y) < r
            if (u) {
              ;((i = i.slice()), l && (i.pop(), i.pop(), s.set(i[i.length - 2], i[i.length - 1])))
              var c = 0.5 * (a.x + s.x),
                d = 0.5 * (s.y + a.y)
              ;(i.unshift(c, d), i.push(c, d))
            }
            var h = t.points,
              p = i.length / 2,
              f = i.length,
              _ = h.length / 2,
              g = o.width / 2,
              m = g * g,
              v = o.miterLimit * o.miterLimit,
              y = i[0],
              C = i[1],
              b = i[2],
              w = i[3],
              x = 0,
              T = 0,
              S = -(C - w),
              L = y - b,
              E = 0,
              A = 0,
              I = Math.sqrt(S * S + L * L)
            ;((S /= I), (L /= I), (S *= g), (L *= g))
            var M = o.alignment,
              P = 2 * (1 - M),
              O = 2 * M
            ;(u ||
              (o.cap === yr.ROUND
                ? (f +=
                    kr(
                      y - S * (P - O) * 0.5,
                      C - L * (P - O) * 0.5,
                      y - S * P,
                      C - L * P,
                      y + S * O,
                      C + L * O,
                      h,
                      true,
                    ) + 2)
                : o.cap === yr.SQUARE && (f += Rr(y, C, S, L, P, O, true, h))),
              h.push(y - S * P, C - L * P),
              h.push(y + S * O, C + L * O))
            for (var R = 1; R < p - 1; ++R) {
              ;((y = i[2 * (R - 1)]),
                (C = i[2 * (R - 1) + 1]),
                (b = i[2 * R]),
                (w = i[2 * R + 1]),
                (x = i[2 * (R + 1)]),
                (T = i[2 * (R + 1) + 1]),
                (S = -(C - w)),
                (L = y - b),
                (S /= I = Math.sqrt(S * S + L * L)),
                (L /= I),
                (S *= g),
                (L *= g),
                (E = -(w - T)),
                (A = b - x),
                (E /= I = Math.sqrt(E * E + A * A)),
                (A /= I),
                (E *= g),
                (A *= g))
              var k = b - y,
                N = C - w,
                D = b - x,
                B = T - w,
                F = N * D - B * k,
                U = F < 0
              if (Math.abs(F) < 0.1) (h.push(b - S * P, w - L * P), h.push(b + S * O, w + L * O))
              else {
                var G = (-S + y) * (-L + w) - (-S + b) * (-L + C),
                  j = (-E + x) * (-A + w) - (-E + b) * (-A + T),
                  H = (k * j - D * G) / F,
                  V = (B * G - N * j) / F,
                  Z = (H - b) * (H - b) + (V - w) * (V - w),
                  z = b + (H - b) * P,
                  Y = w + (V - w) * P,
                  W = b - (H - b) * O,
                  X = w - (V - w) * O,
                  q = U ? P : O
                Z <= Math.min(k * k + N * N, D * D + B * B) + q * q * m
                  ? o.join === vr.BEVEL || Z / m > v
                    ? (U
                        ? (h.push(z, Y),
                          h.push(b + S * O, w + L * O),
                          h.push(z, Y),
                          h.push(b + E * O, w + A * O))
                        : (h.push(b - S * P, w - L * P),
                          h.push(W, X),
                          h.push(b - E * P, w - A * P),
                          h.push(W, X)),
                      (f += 2))
                    : o.join === vr.ROUND
                      ? U
                        ? (h.push(z, Y),
                          h.push(b + S * O, w + L * O),
                          (f += kr(b, w, b + S * O, w + L * O, b + E * O, w + A * O, h, true) + 4),
                          h.push(z, Y),
                          h.push(b + E * O, w + A * O))
                        : (h.push(b - S * P, w - L * P),
                          h.push(W, X),
                          (f += kr(b, w, b - S * P, w - L * P, b - E * P, w - A * P, h, false) + 4),
                          h.push(b - E * P, w - A * P),
                          h.push(W, X))
                      : (h.push(z, Y), h.push(W, X))
                  : (h.push(b - S * P, w - L * P),
                    h.push(b + S * O, w + L * O),
                    o.join === vr.BEVEL ||
                      Z / m > v ||
                      (o.join === vr.ROUND
                        ? (f += U
                            ? kr(b, w, b + S * O, w + L * O, b + E * O, w + A * O, h, true) + 2
                            : kr(b, w, b - S * P, w - L * P, b - E * P, w - A * P, h, false) + 2)
                        : (U ? (h.push(W, X), h.push(W, X)) : (h.push(z, Y), h.push(z, Y)),
                          (f += 2))),
                    h.push(b - E * P, w - A * P),
                    h.push(b + E * O, w + A * O),
                    (f += 2))
              }
            }
            ;((y = i[2 * (p - 2)]),
              (C = i[2 * (p - 2) + 1]),
              (b = i[2 * (p - 1)]),
              (S = -(C - (w = i[2 * (p - 1) + 1]))),
              (L = y - b),
              (S /= I = Math.sqrt(S * S + L * L)),
              (L /= I),
              (S *= g),
              (L *= g),
              h.push(b - S * P, w - L * P),
              h.push(b + S * O, w + L * O),
              u ||
                (o.cap === yr.ROUND
                  ? (f +=
                      kr(
                        b - S * (P - O) * 0.5,
                        w - L * (P - O) * 0.5,
                        b - S * P,
                        w - L * P,
                        b + S * O,
                        w + L * O,
                        h,
                        false,
                      ) + 2)
                  : o.cap === yr.SQUARE && (f += Rr(b, w, S, L, P, O, false, h))))
            var K = t.indices,
              $ = xr.epsilon * xr.epsilon
            for (R = _; R < f + _ - 2; ++R)
              ((y = h[2 * R]),
                (C = h[2 * R + 1]),
                (b = h[2 * (R + 1)]),
                (w = h[2 * (R + 1) + 1]),
                (x = h[2 * (R + 2)]),
                (T = h[2 * (R + 2) + 1]),
                Math.abs(y * (w - T) + b * (T - C) + x * (C - w)) < $ || K.push(R, R + 1, R + 2))
          }
        })(e, t)
  }
  var Dr,
    Br = (function (e) {
      function t(t, n, i, r, o, a) {
        undefined === a && (a = 0)
        o = o || r / 2
        for (var s = (-1 * Math.PI) / 2 + a, u = 2 * i, l = Ue / u, c = [], d = 0; d < u; d++) {
          var h = d % 2 ? o : r,
            p = d * l + s
          c.push(t + h * Math.cos(p), n + h * Math.sin(p))
        }
        return e.call(this, c) || this
      }
      return (Lr(t, e), t)
    })(ze),
    Fr = (function () {
      function e() {}
      return (
        (e.curveTo = function (e, t, n, i, r, o) {
          var a = o[o.length - 2],
            s = o[o.length - 1] - t,
            u = a - e,
            l = i - t,
            c = n - e,
            d = Math.abs(s * c - u * l)
          if (d < 1e-8 || 0 === r)
            return ((o[o.length - 2] === e && o[o.length - 1] === t) || o.push(e, t), null)
          var h = s * s + u * u,
            p = l * l + c * c,
            f = s * l + u * c,
            _ = (r * Math.sqrt(h)) / d,
            g = (r * Math.sqrt(p)) / d,
            m = (_ * f) / h,
            v = (g * f) / p,
            y = _ * c + g * u,
            C = _ * l + g * s,
            b = u * (g + m),
            w = s * (g + m),
            x = c * (_ + v),
            T = l * (_ + v)
          return {
            cx: y + e,
            cy: C + t,
            radius: r,
            startAngle: Math.atan2(w - C, b - y),
            endAngle: Math.atan2(T - C, x - y),
            anticlockwise: u * l > c * s,
          }
        }),
        (e.arc = function (e, t, n, i, r, o, a, s, u) {
          for (
            var l = a - o,
              c = xr._segmentsCount(Math.abs(l) * r, 40 * Math.ceil(Math.abs(l) / Ue)),
              d = l / (2 * c),
              h = 2 * d,
              p = Math.cos(d),
              f = Math.sin(d),
              _ = c - 1,
              g = (_ % 1) / _,
              m = 0;
            m <= _;
            ++m
          ) {
            var v = d + o + h * (m + g * m),
              y = Math.cos(v),
              C = -Math.sin(v)
            u.push((p * y + f * C) * r + n, (p * -C + f * y) * r + i)
          }
        }),
        e
      )
    })(),
    Ur = (function () {
      function e() {}
      return (
        (e.curveLength = function (e, t, n, i, r, o, a, s) {
          for (
            var u = 0,
              l = 0,
              c = 0,
              d = 0,
              h = 0,
              p = 0,
              f = 0,
              _ = 0,
              g = 0,
              m = 0,
              v = 0,
              y = e,
              C = t,
              b = 1;
            b <= 10;
            ++b
          )
            ((m =
              y -
              (_ =
                (f = (p = (h = 1 - (l = b / 10)) * h) * h) * e +
                3 * p * l * n +
                3 * h * (c = l * l) * r +
                (d = c * l) * a)),
              (v = C - (g = f * t + 3 * p * l * i + 3 * h * c * o + d * s)),
              (y = _),
              (C = g),
              (u += Math.sqrt(m * m + v * v)))
          return u
        }),
        (e.curveTo = function (t, n, i, r, o, a, s) {
          var u = s[s.length - 2],
            l = s[s.length - 1]
          s.length -= 2
          var c = xr._segmentsCount(e.curveLength(u, l, t, n, i, r, o, a)),
            d = 0,
            h = 0,
            p = 0,
            f = 0,
            _ = 0
          s.push(u, l)
          for (var g = 1, m = 0; g <= c; ++g)
            ((p = (h = (d = 1 - (m = g / c)) * d) * d),
              (_ = (f = m * m) * m),
              s.push(
                p * u + 3 * h * m * t + 3 * d * f * i + _ * o,
                p * l + 3 * h * m * n + 3 * d * f * r + _ * a,
              ))
        }),
        e
      )
    })(),
    Gr = (function () {
      function e() {}
      return (
        (e.curveLength = function (e, t, n, i, r, o) {
          var a = e - 2 * n + r,
            s = t - 2 * i + o,
            u = 2 * n - 2 * e,
            l = 2 * i - 2 * t,
            c = 4 * (a * a + s * s),
            d = 4 * (a * u + s * l),
            h = u * u + l * l,
            p = 2 * Math.sqrt(c + d + h),
            f = Math.sqrt(c),
            _ = 2 * c * f,
            g = 2 * Math.sqrt(h),
            m = d / f
          return (
            (_ * p + f * d * (p - g) + (4 * h * c - d * d) * Math.log((2 * f + m + p) / (m + g))) /
            (4 * _)
          )
        }),
        (e.curveTo = function (t, n, i, r, o) {
          for (
            var a = o[o.length - 2],
              s = o[o.length - 1],
              u = xr._segmentsCount(e.curveLength(a, s, t, n, i, r)),
              l = 0,
              c = 0,
              d = 1;
            d <= u;
            ++d
          ) {
            var h = d / u
            ;((l = a + (t - a) * h),
              (c = s + (n - s) * h),
              o.push(l + (t + (i - t) * h - l) * h, c + (n + (r - n) * h - c) * h))
          }
        }),
        e
      )
    })(),
    jr = (function () {
      function e() {
        this.reset()
      }
      return (
        (e.prototype.begin = function (e, t, n) {
          ;(this.reset(), (this.style = e), (this.start = t), (this.attribStart = n))
        }),
        (e.prototype.end = function (e, t) {
          ;((this.attribSize = t - this.attribStart), (this.size = e - this.start))
        }),
        (e.prototype.reset = function () {
          ;((this.style = null),
            (this.size = 0),
            (this.start = 0),
            (this.attribStart = 0),
            (this.attribSize = 0))
        }),
        e
      )
    })(),
    Hr =
      (((Dr = {})[Fe.POLY] = Er),
      (Dr[Fe.CIRC] = Ar),
      (Dr[Fe.ELIP] = Ar),
      (Dr[Fe.RECT] = Ir),
      (Dr[Fe.RREC] = Or),
      Dr),
    Vr = [],
    Zr = [],
    zr = {
      buildPoly: Er,
      buildCircle: Ar,
      buildRectangle: Ir,
      buildRoundedRectangle: Or,
      FILL_COMMANDS: Hr,
      BATCH_POOL: Vr,
      DRAW_CALL_POOL: Zr,
      buildLine: Nr,
      Star: Br,
      ArcUtils: Fr,
      BezierUtils: Ur,
      QuadraticUtils: Gr,
      BatchPart: jr,
    },
    Yr = (function () {
      function e(e, t, n, i) {
        ;(undefined === t && (t = null),
          undefined === n && (n = null),
          undefined === i && (i = null),
          (this.shape = e),
          (this.lineStyle = n),
          (this.fillStyle = t),
          (this.matrix = i),
          (this.type = e.type),
          (this.points = []),
          (this.holes = []))
      }
      return (
        (e.prototype.clone = function () {
          return new e(this.shape, this.fillStyle, this.lineStyle, this.matrix)
        }),
        (e.prototype.destroy = function () {
          ;((this.shape = null),
            (this.holes.length = 0),
            (this.holes = null),
            (this.points.length = 0),
            (this.points = null),
            (this.lineStyle = null),
            (this.fillStyle = null))
        }),
        e
      )
    })(),
    Wr = new We(),
    Xr = new ot(),
    qr = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.uvsFloat32 = null),
          (t.indicesUint16 = null),
          (t.points = []),
          (t.colors = []),
          (t.uvs = []),
          (t.indices = []),
          (t.textureIds = []),
          (t.graphicsData = []),
          (t.dirty = 0),
          (t.batchDirty = -1),
          (t.cacheDirty = -1),
          (t.clearDirty = 0),
          (t.drawCalls = []),
          (t.batches = []),
          (t.shapeIndex = 0),
          (t._bounds = new ot()),
          (t.boundsDirty = -1),
          (t.boundsPadding = 0),
          (t.batchable = false),
          (t.indicesUint16 = null),
          (t.uvsFloat32 = null),
          (t.closePointEps = 1e-4),
          t
        )
      }
      return (
        Lr(t, e),
        Object.defineProperty(t.prototype, "bounds", {
          get: function () {
            return (
              this.boundsDirty !== this.dirty &&
                ((this.boundsDirty = this.dirty), this.calculateBounds()),
              this._bounds
            )
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.invalidate = function () {
          ;((this.boundsDirty = -1),
            this.dirty++,
            this.batchDirty++,
            (this.shapeIndex = 0),
            (this.points.length = 0),
            (this.colors.length = 0),
            (this.uvs.length = 0),
            (this.indices.length = 0),
            (this.textureIds.length = 0))
          for (var e = 0; e < this.drawCalls.length; e++)
            (this.drawCalls[e].texArray.clear(), Zr.push(this.drawCalls[e]))
          this.drawCalls.length = 0
          for (e = 0; e < this.batches.length; e++) {
            var t = this.batches[e]
            ;(t.reset(), Vr.push(t))
          }
          this.batches.length = 0
        }),
        (t.prototype.clear = function () {
          return (
            this.graphicsData.length > 0 &&
              (this.invalidate(), this.clearDirty++, (this.graphicsData.length = 0)),
            this
          )
        }),
        (t.prototype.drawShape = function (e, t, n, i) {
          ;(undefined === t && (t = null), undefined === n && (n = null), undefined === i && (i = null))
          var r = new Yr(e, t, n, i)
          return (this.graphicsData.push(r), this.dirty++, this)
        }),
        (t.prototype.drawHole = function (e, t) {
          if ((undefined === t && (t = null), !this.graphicsData.length)) return null
          var n = new Yr(e, null, null, t),
            i = this.graphicsData[this.graphicsData.length - 1]
          return ((n.lineStyle = i.lineStyle), i.holes.push(n), this.dirty++, this)
        }),
        (t.prototype.destroy = function () {
          e.prototype.destroy.call(this)
          for (var t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy()
          ;((this.points.length = 0),
            (this.points = null),
            (this.colors.length = 0),
            (this.colors = null),
            (this.uvs.length = 0),
            (this.uvs = null),
            (this.indices.length = 0),
            (this.indices = null),
            this.indexBuffer.destroy(),
            (this.indexBuffer = null),
            (this.graphicsData.length = 0),
            (this.graphicsData = null),
            (this.drawCalls.length = 0),
            (this.drawCalls = null),
            (this.batches.length = 0),
            (this.batches = null),
            (this._bounds = null))
        }),
        (t.prototype.containsPoint = function (e) {
          for (var t = this.graphicsData, n = 0; n < t.length; ++n) {
            var i = t[n]
            if (
              i.fillStyle.visible &&
              i.shape &&
              (i.matrix ? i.matrix.applyInverse(e, Wr) : Wr.copyFrom(e),
              i.shape.contains(Wr.x, Wr.y))
            ) {
              var r = false
              if (i.holes)
                for (var o = 0; o < i.holes.length; o++) {
                  if (i.holes[o].shape.contains(Wr.x, Wr.y)) {
                    r = true
                    break
                  }
                }
              if (!r) return true
            }
          }
          return false
        }),
        (t.prototype.updateBatches = function (e) {
          if (this.graphicsData.length) {
            if (this.validateBatching()) {
              this.cacheDirty = this.dirty
              var t = this.uvs,
                n = this.graphicsData,
                i = null,
                r = null
              this.batches.length > 0 && (r = (i = this.batches[this.batches.length - 1]).style)
              for (var o = this.shapeIndex; o < n.length; o++) {
                this.shapeIndex++
                var a = n[o],
                  s = a.fillStyle,
                  u = a.lineStyle
                ;(Hr[a.type].build(a), a.matrix && this.transformPoints(a.points, a.matrix))
                for (var l = 0; l < 2; l++) {
                  var c = 0 === l ? s : u
                  if (c.visible) {
                    var d = c.texture.baseTexture,
                      h = this.indices.length,
                      p = this.points.length / 2
                    ;((d.wrapMode = F.REPEAT), 0 === l ? this.processFill(a) : this.processLine(a))
                    var f = this.points.length / 2 - p
                    0 !== f &&
                      (i && !this._compareStyles(r, c) && (i.end(h, p), (i = null)),
                      i ||
                        ((i = Vr.pop() || new jr()).begin(c, h, p), this.batches.push(i), (r = c)),
                      this.addUvs(this.points, t, c.texture, p, f, c.matrix))
                  }
                }
              }
              var _ = this.indices.length,
                g = this.points.length / 2
              if ((i && i.end(_, g), 0 !== this.batches.length)) {
                if (this.indicesUint16 && this.indices.length === this.indicesUint16.length)
                  this.indicesUint16.set(this.indices)
                else {
                  var m = g > 65535 && e
                  this.indicesUint16 = m
                    ? new Uint32Array(this.indices)
                    : new Uint16Array(this.indices)
                }
                ;((this.batchable = this.isBatchable()),
                  this.batchable ? this.packBatches() : this.buildDrawCalls())
              } else this.batchable = true
            }
          } else this.batchable = true
        }),
        (t.prototype._compareStyles = function (e, t) {
          return (
            !(!e || !t) &&
            e.texture.baseTexture === t.texture.baseTexture &&
            e.color + e.alpha === t.color + t.alpha &&
            !!e.native == !!t.native
          )
        }),
        (t.prototype.validateBatching = function () {
          if (this.dirty === this.cacheDirty || !this.graphicsData.length) return false
          for (var e = 0, t = this.graphicsData.length; e < t; e++) {
            var n = this.graphicsData[e],
              i = n.fillStyle,
              r = n.lineStyle
            if (i && !i.texture.baseTexture.valid) return false
            if (r && !r.texture.baseTexture.valid) return false
          }
          return true
        }),
        (t.prototype.packBatches = function () {
          ;(this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs)))
          for (var e = this.batches, t = 0, n = e.length; t < n; t++)
            for (var i = e[t], r = 0; r < i.size; r++) {
              var o = i.start + r
              this.indicesUint16[o] = this.indicesUint16[o] - i.attribStart
            }
        }),
        (t.prototype.isBatchable = function () {
          if (this.points.length > 131070) return false
          for (var e = this.batches, n = 0; n < e.length; n++) if (e[n].style.native) return false
          return this.points.length < 2 * t.BATCHABLE_SIZE
        }),
        (t.prototype.buildDrawCalls = function () {
          for (var e = ++Nt._globalBatch, t = 0; t < this.drawCalls.length; t++)
            (this.drawCalls[t].texArray.clear(), Zr.push(this.drawCalls[t]))
          this.drawCalls.length = 0
          var n = this.colors,
            i = this.textureIds,
            r = Zr.pop()
          ;(r || ((r = new Mi()).texArray = new Pi()),
            (r.texArray.count = 0),
            (r.start = 0),
            (r.size = 0),
            (r.type = R.TRIANGLES))
          var o = 0,
            a = null,
            s = 0,
            u = false,
            l = R.TRIANGLES,
            c = 0
          this.drawCalls.push(r)
          for (t = 0; t < this.batches.length; t++) {
            var d = this.batches[t],
              h = d.style,
              p = h.texture.baseTexture
            ;(u !== !!h.native &&
              ((l = (u = !!h.native) ? R.LINES : R.TRIANGLES), (a = null), (o = 8), e++),
              a !== p &&
                ((a = p),
                p._batchEnabled !== e &&
                  (8 === o &&
                    (e++,
                    (o = 0),
                    r.size > 0 &&
                      ((r = Zr.pop()) || ((r = new Mi()).texArray = new Pi()),
                      this.drawCalls.push(r)),
                    (r.start = c),
                    (r.size = 0),
                    (r.texArray.count = 0),
                    (r.type = l)),
                  (p.touched = 1),
                  (p._batchEnabled = e),
                  (p._batchLocation = o),
                  (p.wrapMode = 10497),
                  (r.texArray.elements[r.texArray.count++] = p),
                  o++)),
              (r.size += d.size),
              (c += d.size),
              (s = p._batchLocation),
              this.addColors(n, h.color, h.alpha, d.attribSize, d.attribStart),
              this.addTextureIds(i, s, d.attribSize, d.attribStart))
          }
          ;((Nt._globalBatch = e), this.packAttributes())
        }),
        (t.prototype.packAttributes = function () {
          for (
            var e = this.points,
              t = this.uvs,
              n = this.colors,
              i = this.textureIds,
              r = new ArrayBuffer(3 * e.length * 4),
              o = new Float32Array(r),
              a = new Uint32Array(r),
              s = 0,
              u = 0;
            u < e.length / 2;
            u++
          )
            ((o[s++] = e[2 * u]),
              (o[s++] = e[2 * u + 1]),
              (o[s++] = t[2 * u]),
              (o[s++] = t[2 * u + 1]),
              (a[s++] = n[u]),
              (o[s++] = i[u]))
          ;(this._buffer.update(r), this._indexBuffer.update(this.indicesUint16))
        }),
        (t.prototype.processFill = function (e) {
          e.holes.length
            ? (this.processHoles(e.holes), Er.triangulate(e, this))
            : Hr[e.type].triangulate(e, this)
        }),
        (t.prototype.processLine = function (e) {
          Nr(e, this)
          for (var t = 0; t < e.holes.length; t++) Nr(e.holes[t], this)
        }),
        (t.prototype.processHoles = function (e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t]
            ;(Hr[n.type].build(n), n.matrix && this.transformPoints(n.points, n.matrix))
          }
        }),
        (t.prototype.calculateBounds = function () {
          var e = this._bounds,
            t = Xr,
            n = qe.IDENTITY
          ;(this._bounds.clear(), t.clear())
          for (var i = 0; i < this.graphicsData.length; i++) {
            var r = this.graphicsData[i],
              o = r.shape,
              a = r.type,
              s = r.lineStyle,
              u = r.matrix || qe.IDENTITY,
              l = 0
            if (s && s.visible) {
              var c = s.alignment
              ;((l = s.width),
                a === Fe.POLY ? (l *= 0.5 + Math.abs(0.5 - c)) : (l *= Math.max(0, c)))
            }
            if (
              (n !== u && (t.isEmpty() || (e.addBoundsMatrix(t, n), t.clear()), (n = u)),
              a === Fe.RECT || a === Fe.RREC)
            ) {
              var d = o
              t.addFramePad(d.x, d.y, d.x + d.width, d.y + d.height, l, l)
            } else if (a === Fe.CIRC) {
              var h = o
              t.addFramePad(h.x, h.y, h.x, h.y, h.radius + l, h.radius + l)
            } else if (a === Fe.ELIP) {
              var p = o
              t.addFramePad(p.x, p.y, p.x, p.y, p.width + l, p.height + l)
            } else {
              var f = o
              e.addVerticesMatrix(n, f.points, 0, f.points.length, l, l)
            }
          }
          ;(t.isEmpty() || e.addBoundsMatrix(t, n), e.pad(this.boundsPadding, this.boundsPadding))
        }),
        (t.prototype.transformPoints = function (e, t) {
          for (var n = 0; n < e.length / 2; n++) {
            var i = e[2 * n],
              r = e[2 * n + 1]
            ;((e[2 * n] = t.a * i + t.c * r + t.tx), (e[2 * n + 1] = t.b * i + t.d * r + t.ty))
          }
        }),
        (t.prototype.addColors = function (e, t, n, i, r) {
          undefined === r && (r = 0)
          var o = de((t >> 16) + (65280 & t) + ((255 & t) << 16), n)
          e.length = Math.max(e.length, r + i)
          for (var a = 0; a < i; a++) e[r + a] = o
        }),
        (t.prototype.addTextureIds = function (e, t, n, i) {
          ;(undefined === i && (i = 0), (e.length = Math.max(e.length, i + n)))
          for (var r = 0; r < n; r++) e[i + r] = t
        }),
        (t.prototype.addUvs = function (e, t, n, i, r, o) {
          undefined === o && (o = null)
          for (var a = 0, s = t.length, u = n.frame; a < r; ) {
            var l = e[2 * (i + a)],
              c = e[2 * (i + a) + 1]
            if (o) {
              var d = o.a * l + o.c * c + o.tx
              ;((c = o.b * l + o.d * c + o.ty), (l = d))
            }
            ;(a++, t.push(l / u.width, c / u.height))
          }
          var h = n.baseTexture
          ;(u.width < h.width || u.height < h.height) && this.adjustUvs(t, n, s, r)
        }),
        (t.prototype.adjustUvs = function (e, t, n, i) {
          for (
            var r = t.baseTexture,
              o = 1e-6,
              a = n + 2 * i,
              s = t.frame,
              u = s.width / r.width,
              l = s.height / r.height,
              c = s.x / s.width,
              d = s.y / s.height,
              h = Math.floor(e[n] + o),
              p = Math.floor(e[n + 1] + o),
              f = n + 2;
            f < a;
            f += 2
          )
            ((h = Math.min(h, Math.floor(e[f] + o))), (p = Math.min(p, Math.floor(e[f + 1] + o))))
          ;((c -= h), (d -= p))
          for (f = n; f < a; f += 2) ((e[f] = (e[f] + c) * u), (e[f + 1] = (e[f + 1] + d) * l))
        }),
        (t.BATCHABLE_SIZE = 100),
        t
      )
    })(Ni),
    Kr = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return (
          (t.width = 0),
          (t.alignment = 0.5),
          (t.native = false),
          (t.cap = yr.BUTT),
          (t.join = vr.MITER),
          (t.miterLimit = 10),
          t
        )
      }
      return (
        Lr(t, e),
        (t.prototype.clone = function () {
          var e = new t()
          return (
            (e.color = this.color),
            (e.alpha = this.alpha),
            (e.texture = this.texture),
            (e.matrix = this.matrix),
            (e.visible = this.visible),
            (e.width = this.width),
            (e.alignment = this.alignment),
            (e.native = this.native),
            (e.cap = this.cap),
            (e.join = this.join),
            (e.miterLimit = this.miterLimit),
            e
          )
        }),
        (t.prototype.reset = function () {
          ;(e.prototype.reset.call(this),
            (this.color = 0),
            (this.alignment = 0.5),
            (this.width = 0),
            (this.native = false))
        }),
        t
      )
    })(Tr),
    $r = new Float32Array(3),
    Jr = {},
    Qr = (function (e) {
      function t(t) {
        undefined === t && (t = null)
        var n = e.call(this) || this
        return (
          (n._geometry = t || new qr()),
          n._geometry.refCount++,
          (n.shader = null),
          (n.state = ei.for2d()),
          (n._fillStyle = new Tr()),
          (n._lineStyle = new Kr()),
          (n._matrix = null),
          (n._holeMode = false),
          (n.currentPath = null),
          (n.batches = []),
          (n.batchTint = -1),
          (n.batchDirty = -1),
          (n.vertexData = null),
          (n.pluginName = "batch"),
          (n._transformID = -1),
          (n.tint = 16777215),
          (n.blendMode = O.NORMAL),
          n
        )
      }
      return (
        Lr(t, e),
        Object.defineProperty(t.prototype, "geometry", {
          get: function () {
            return this._geometry
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.clone = function () {
          return (this.finishPoly(), new t(this._geometry))
        }),
        Object.defineProperty(t.prototype, "blendMode", {
          get: function () {
            return this.state.blendMode
          },
          set: function (e) {
            this.state.blendMode = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "tint", {
          get: function () {
            return this._tint
          },
          set: function (e) {
            this._tint = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "fill", {
          get: function () {
            return this._fillStyle
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "line", {
          get: function () {
            return this._lineStyle
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.lineStyle = function (e) {
          if ((undefined === e && (e = null), "number" == typeof e)) {
            var t = arguments
            e = {
              width: t[0] || 0,
              color: t[1] || 0,
              alpha: undefined !== t[2] ? t[2] : 1,
              alignment: undefined !== t[3] ? t[3] : 0.5,
              native: !!t[4],
            }
          }
          return this.lineTextureStyle(e)
        }),
        (t.prototype.lineTextureStyle = function (e) {
          if ("number" == typeof e) {
            Se("v5.2.0", "Please use object-based options for Graphics#lineTextureStyle")
            var t = arguments,
              n = t[0],
              i = t[1],
              r = t[2],
              o = t[3],
              a = t[4],
              s = t[5],
              u = t[6]
            ;((e = {
              width: n,
              texture: i,
              color: r,
              alpha: o,
              matrix: a,
              alignment: s,
              native: u,
            }),
              Object.keys(e).forEach(function (t) {
                return undefined === e[t] && delete e[t]
              }))
          }
          ;((e = Object.assign(
            {
              width: 0,
              texture: Jt.WHITE,
              color: e && e.texture ? 16777215 : 0,
              alpha: 1,
              matrix: null,
              alignment: 0.5,
              native: false,
              cap: yr.BUTT,
              join: vr.MITER,
              miterLimit: 10,
            },
            e,
          )),
            this.currentPath && this.startPoly())
          var l = e.width > 0 && e.alpha > 0
          return (
            l
              ? (e.matrix && ((e.matrix = e.matrix.clone()), e.matrix.invert()),
                Object.assign(this._lineStyle, { visible: l }, e))
              : this._lineStyle.reset(),
            this
          )
        }),
        (t.prototype.startPoly = function () {
          if (this.currentPath) {
            var e = this.currentPath.points,
              t = this.currentPath.points.length
            t > 2 &&
              (this.drawShape(this.currentPath),
              (this.currentPath = new ze()),
              (this.currentPath.closeStroke = false),
              this.currentPath.points.push(e[t - 2], e[t - 1]))
          } else ((this.currentPath = new ze()), (this.currentPath.closeStroke = false))
        }),
        (t.prototype.finishPoly = function () {
          this.currentPath &&
            (this.currentPath.points.length > 2
              ? (this.drawShape(this.currentPath), (this.currentPath = null))
              : (this.currentPath.points.length = 0))
        }),
        (t.prototype.moveTo = function (e, t) {
          return (
            this.startPoly(),
            (this.currentPath.points[0] = e),
            (this.currentPath.points[1] = t),
            this
          )
        }),
        (t.prototype.lineTo = function (e, t) {
          this.currentPath || this.moveTo(0, 0)
          var n = this.currentPath.points,
            i = n[n.length - 2],
            r = n[n.length - 1]
          return ((i === e && r === t) || n.push(e, t), this)
        }),
        (t.prototype._initCurve = function (e, t) {
          ;(undefined === e && (e = 0),
            undefined === t && (t = 0),
            this.currentPath
              ? 0 === this.currentPath.points.length && (this.currentPath.points = [e, t])
              : this.moveTo(e, t))
        }),
        (t.prototype.quadraticCurveTo = function (e, t, n, i) {
          this._initCurve()
          var r = this.currentPath.points
          return (0 === r.length && this.moveTo(0, 0), Gr.curveTo(e, t, n, i, r), this)
        }),
        (t.prototype.bezierCurveTo = function (e, t, n, i, r, o) {
          return (this._initCurve(), Ur.curveTo(e, t, n, i, r, o, this.currentPath.points), this)
        }),
        (t.prototype.arcTo = function (e, t, n, i, r) {
          this._initCurve(e, t)
          var o = this.currentPath.points,
            a = Fr.curveTo(e, t, n, i, r, o)
          if (a) {
            var s = a.cx,
              u = a.cy,
              l = a.radius,
              c = a.startAngle,
              d = a.endAngle,
              h = a.anticlockwise
            this.arc(s, u, l, c, d, h)
          }
          return this
        }),
        (t.prototype.arc = function (e, t, n, i, r, o) {
          if ((undefined === o && (o = false), i === r)) return this
          if ((!o && r <= i ? (r += Ue) : o && i <= r && (i += Ue), 0 === r - i)) return this
          var a = e + Math.cos(i) * n,
            s = t + Math.sin(i) * n,
            u = this._geometry.closePointEps,
            l = this.currentPath ? this.currentPath.points : null
          if (l) {
            var c = Math.abs(l[l.length - 2] - a),
              d = Math.abs(l[l.length - 1] - s)
            ;(c < u && d < u) || l.push(a, s)
          } else (this.moveTo(a, s), (l = this.currentPath.points))
          return (Fr.arc(a, s, e, t, n, i, r, o, l), this)
        }),
        (t.prototype.beginFill = function (e, t) {
          return (
            undefined === e && (e = 0),
            undefined === t && (t = 1),
            this.beginTextureFill({ texture: Jt.WHITE, color: e, alpha: t })
          )
        }),
        (t.prototype.beginTextureFill = function (e) {
          if (e instanceof Jt) {
            Se("v5.2.0", "Please use object-based options for Graphics#beginTextureFill")
            var t = arguments,
              n = t[0],
              i = t[1],
              r = t[2],
              o = t[3]
            ;((e = { texture: n, color: i, alpha: r, matrix: o }),
              Object.keys(e).forEach(function (t) {
                return undefined === e[t] && delete e[t]
              }))
          }
          ;((e = Object.assign({ texture: Jt.WHITE, color: 16777215, alpha: 1, matrix: null }, e)),
            this.currentPath && this.startPoly())
          var a = e.alpha > 0
          return (
            a
              ? (e.matrix && ((e.matrix = e.matrix.clone()), e.matrix.invert()),
                Object.assign(this._fillStyle, { visible: a }, e))
              : this._fillStyle.reset(),
            this
          )
        }),
        (t.prototype.endFill = function () {
          return (this.finishPoly(), this._fillStyle.reset(), this)
        }),
        (t.prototype.drawRect = function (e, t, n, i) {
          return this.drawShape(new He(e, t, n, i))
        }),
        (t.prototype.drawRoundedRect = function (e, t, n, i, r) {
          return this.drawShape(new Ye(e, t, n, i, r))
        }),
        (t.prototype.drawCircle = function (e, t, n) {
          return this.drawShape(new Ve(e, t, n))
        }),
        (t.prototype.drawEllipse = function (e, t, n, i) {
          return this.drawShape(new Ze(e, t, n, i))
        }),
        (t.prototype.drawPolygon = function () {
          for (var e, t = arguments, n = [], i = 0; i < arguments.length; i++) n[i] = t[i]
          var r = true,
            o = n[0]
          o.points ? ((r = o.closeStroke), (e = o.points)) : (e = Array.isArray(n[0]) ? n[0] : n)
          var a = new ze(e)
          return ((a.closeStroke = r), this.drawShape(a), this)
        }),
        (t.prototype.drawShape = function (e) {
          return (
            this._holeMode
              ? this._geometry.drawHole(e, this._matrix)
              : this._geometry.drawShape(
                  e,
                  this._fillStyle.clone(),
                  this._lineStyle.clone(),
                  this._matrix,
                ),
            this
          )
        }),
        (t.prototype.drawStar = function (e, t, n, i, r, o) {
          return (undefined === o && (o = 0), this.drawPolygon(new Br(e, t, n, i, r, o)))
        }),
        (t.prototype.clear = function () {
          return (
            this._geometry.clear(),
            this._lineStyle.reset(),
            this._fillStyle.reset(),
            this._boundsID++,
            (this._matrix = null),
            (this._holeMode = false),
            (this.currentPath = null),
            this
          )
        }),
        (t.prototype.isFastRect = function () {
          var e = this._geometry.graphicsData
          return (
            1 === e.length &&
            e[0].shape.type === Fe.RECT &&
            !(e[0].lineStyle.visible && e[0].lineStyle.width)
          )
        }),
        (t.prototype._render = function (e) {
          this.finishPoly()
          var t = this._geometry,
            n = e.context.supports.uint32Indices
          ;(t.updateBatches(n),
            t.batchable
              ? (this.batchDirty !== t.batchDirty && this._populateBatches(),
                this._renderBatched(e))
              : (e.batch.flush(), this._renderDirect(e)))
        }),
        (t.prototype._populateBatches = function () {
          var e = this._geometry,
            t = this.blendMode,
            n = e.batches.length
          ;((this.batchTint = -1),
            (this._transformID = -1),
            (this.batchDirty = e.batchDirty),
            (this.batches.length = n),
            (this.vertexData = new Float32Array(e.points)))
          for (var i = 0; i < n; i++) {
            var r = e.batches[i],
              o = r.style.color,
              a = new Float32Array(this.vertexData.buffer, 4 * r.attribStart * 2, 2 * r.attribSize),
              s = new Float32Array(e.uvsFloat32.buffer, 4 * r.attribStart * 2, 2 * r.attribSize),
              u = {
                vertexData: a,
                blendMode: t,
                indices: new Uint16Array(e.indicesUint16.buffer, 2 * r.start, r.size),
                uvs: s,
                _batchRGB: re(o),
                _tintRGB: o,
                _texture: r.style.texture,
                alpha: r.style.alpha,
                worldAlpha: 1,
              }
            this.batches[i] = u
          }
        }),
        (t.prototype._renderBatched = function (e) {
          if (this.batches.length) {
            ;(e.batch.setObjectRenderer(e.plugins[this.pluginName]),
              this.calculateVertices(),
              this.calculateTints())
            for (var t = 0, n = this.batches.length; t < n; t++) {
              var i = this.batches[t]
              ;((i.worldAlpha = this.worldAlpha * i.alpha), e.plugins[this.pluginName].render(i))
            }
          }
        }),
        (t.prototype._renderDirect = function (e) {
          var t = this._resolveDirectShader(e),
            n = this._geometry,
            i = this.tint,
            r = this.worldAlpha,
            o = t.uniforms,
            a = n.drawCalls
          ;((o.translationMatrix = this.transform.worldTransform),
            (o.tint[0] = (((i >> 16) & 255) / 255) * r),
            (o.tint[1] = (((i >> 8) & 255) / 255) * r),
            (o.tint[2] = ((255 & i) / 255) * r),
            (o.tint[3] = r),
            e.shader.bind(t),
            e.geometry.bind(n, t),
            e.state.set(this.state))
          for (var s = 0, u = a.length; s < u; s++) this._renderDrawCallDirect(e, n.drawCalls[s])
        }),
        (t.prototype._renderDrawCallDirect = function (e, t) {
          for (
            var n = t.texArray, i = t.type, r = t.size, o = t.start, a = n.count, s = 0;
            s < a;
            s++
          )
            e.texture.bind(n.elements[s], s)
          e.geometry.draw(i, r, o)
        }),
        (t.prototype._resolveDirectShader = function (e) {
          var t = this.shader,
            n = this.pluginName
          if (!t) {
            if (!Jr[n]) {
              for (var i = e.plugins.batch.MAX_TEXTURES, r = new Int32Array(i), o = 0; o < i; o++)
                r[o] = o
              var a = {
                  tint: new Float32Array([1, 1, 1, 1]),
                  translationMatrix: new qe(),
                  default: _n.from({ uSamplers: r }, true),
                },
                s = e.plugins[n]._shader.program
              Jr[n] = new Qn(s, a)
            }
            t = Jr[n]
          }
          return t
        }),
        (t.prototype._calculateBounds = function () {
          this.finishPoly()
          var e = this._geometry
          if (e.graphicsData.length) {
            var t = e.bounds,
              n = t.minX,
              i = t.minY,
              r = t.maxX,
              o = t.maxY
            this._bounds.addFrame(this.transform, n, i, r, o)
          }
        }),
        (t.prototype.containsPoint = function (e) {
          return (
            this.worldTransform.applyInverse(e, t._TEMP_POINT),
            this._geometry.containsPoint(t._TEMP_POINT)
          )
        }),
        (t.prototype.calculateTints = function () {
          if (this.batchTint !== this.tint) {
            this.batchTint = this.tint
            for (var e = re(this.tint, $r), t = 0; t < this.batches.length; t++) {
              var n = this.batches[t],
                i = n._batchRGB,
                r =
                  ((e[0] * i[0] * 255) << 16) +
                  ((e[1] * i[1] * 255) << 8) +
                  (0 | (e[2] * i[2] * 255))
              n._tintRGB = (r >> 16) + (65280 & r) + ((255 & r) << 16)
            }
          }
        }),
        (t.prototype.calculateVertices = function () {
          var e = this.transform._worldID
          if (this._transformID !== e) {
            this._transformID = e
            for (
              var t = this.transform.worldTransform,
                n = t.a,
                i = t.b,
                r = t.c,
                o = t.d,
                a = t.tx,
                s = t.ty,
                u = this._geometry.points,
                l = this.vertexData,
                c = 0,
                d = 0;
              d < u.length;
              d += 2
            ) {
              var h = u[d],
                p = u[d + 1]
              ;((l[c++] = n * h + r * p + a), (l[c++] = o * p + i * h + s))
            }
          }
        }),
        (t.prototype.closePath = function () {
          var e = this.currentPath
          return (e && (e.closeStroke = true), this)
        }),
        (t.prototype.setMatrix = function (e) {
          return ((this._matrix = e), this)
        }),
        (t.prototype.beginHole = function () {
          return (this.finishPoly(), (this._holeMode = true), this)
        }),
        (t.prototype.endHole = function () {
          return (this.finishPoly(), (this._holeMode = false), this)
        }),
        (t.prototype.destroy = function (t) {
          ;(this._geometry.refCount--,
            0 === this._geometry.refCount && this._geometry.dispose(),
            (this._matrix = null),
            (this.currentPath = null),
            this._lineStyle.destroy(),
            (this._lineStyle = null),
            this._fillStyle.destroy(),
            (this._fillStyle = null),
            (this._geometry = null),
            (this.shader = null),
            (this.vertexData = null),
            (this.batches.length = 0),
            (this.batches = null),
            e.prototype.destroy.call(this, t))
        }),
        (t._TEMP_POINT = new We()),
        t
      )
    })(dt),
    eo = function (e, t) {
      return (
        (eo =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        eo(e, t)
      )
    }
  var to,
    no = new We(),
    io = new Uint16Array([0, 1, 2, 0, 2, 3]),
    ro = (function (e) {
      function t(t) {
        var n = e.call(this) || this
        return (
          (n._anchor = new Xe(
            n._onAnchorUpdate,
            n,
            t ? t.defaultAnchor.x : 0,
            t ? t.defaultAnchor.y : 0,
          )),
          (n._texture = null),
          (n._width = 0),
          (n._height = 0),
          (n._tint = null),
          (n._tintRGB = null),
          (n.tint = 16777215),
          (n.blendMode = O.NORMAL),
          (n._cachedTint = 16777215),
          (n.uvs = null),
          (n.texture = t || Jt.EMPTY),
          (n.vertexData = new Float32Array(8)),
          (n.vertexTrimmedData = null),
          (n._transformID = -1),
          (n._textureID = -1),
          (n._transformTrimmedID = -1),
          (n._textureTrimmedID = -1),
          (n.indices = io),
          (n.pluginName = "batch"),
          (n.isSprite = true),
          (n._roundPixels = Y.ROUND_PIXELS),
          n
        )
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(eo(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        (t.prototype._onTextureUpdate = function () {
          ;((this._textureID = -1),
            (this._textureTrimmedID = -1),
            (this._cachedTint = 16777215),
            this._width &&
              (this.scale.x = (be(this.scale.x) * this._width) / this._texture.orig.width),
            this._height &&
              (this.scale.y = (be(this.scale.y) * this._height) / this._texture.orig.height))
        }),
        (t.prototype._onAnchorUpdate = function () {
          ;((this._transformID = -1), (this._transformTrimmedID = -1))
        }),
        (t.prototype.calculateVertices = function () {
          var e = this._texture
          if (this._transformID !== this.transform._worldID || this._textureID !== e._updateID) {
            ;(this._textureID !== e._updateID && (this.uvs = this._texture._uvs.uvsFloat32),
              (this._transformID = this.transform._worldID),
              (this._textureID = e._updateID))
            var t = this.transform.worldTransform,
              n = t.a,
              i = t.b,
              r = t.c,
              o = t.d,
              a = t.tx,
              s = t.ty,
              u = this.vertexData,
              l = e.trim,
              c = e.orig,
              d = this._anchor,
              h = 0,
              p = 0,
              f = 0,
              _ = 0
            if (
              (l
                ? ((h = (p = l.x - d._x * c.width) + l.width),
                  (f = (_ = l.y - d._y * c.height) + l.height))
                : ((h = (p = -d._x * c.width) + c.width), (f = (_ = -d._y * c.height) + c.height)),
              (u[0] = n * p + r * _ + a),
              (u[1] = o * _ + i * p + s),
              (u[2] = n * h + r * _ + a),
              (u[3] = o * _ + i * h + s),
              (u[4] = n * h + r * f + a),
              (u[5] = o * f + i * h + s),
              (u[6] = n * p + r * f + a),
              (u[7] = o * f + i * p + s),
              this._roundPixels)
            )
              for (var g = Y.RESOLUTION, m = 0; m < u.length; ++m)
                u[m] = Math.round(((u[m] * g) | 0) / g)
          }
        }),
        (t.prototype.calculateTrimmedVertices = function () {
          if (this.vertexTrimmedData) {
            if (
              this._transformTrimmedID === this.transform._worldID &&
              this._textureTrimmedID === this._texture._updateID
            )
              return
          } else this.vertexTrimmedData = new Float32Array(8)
          ;((this._transformTrimmedID = this.transform._worldID),
            (this._textureTrimmedID = this._texture._updateID))
          var e = this._texture,
            t = this.vertexTrimmedData,
            n = e.orig,
            i = this._anchor,
            r = this.transform.worldTransform,
            o = r.a,
            a = r.b,
            s = r.c,
            u = r.d,
            l = r.tx,
            c = r.ty,
            d = -i._x * n.width,
            h = d + n.width,
            p = -i._y * n.height,
            f = p + n.height
          ;((t[0] = o * d + s * p + l),
            (t[1] = u * p + a * d + c),
            (t[2] = o * h + s * p + l),
            (t[3] = u * p + a * h + c),
            (t[4] = o * h + s * f + l),
            (t[5] = u * f + a * h + c),
            (t[6] = o * d + s * f + l),
            (t[7] = u * f + a * d + c))
        }),
        (t.prototype._render = function (e) {
          ;(this.calculateVertices(),
            e.batch.setObjectRenderer(e.plugins[this.pluginName]),
            e.plugins[this.pluginName].render(this))
        }),
        (t.prototype._calculateBounds = function () {
          var e = this._texture.trim,
            t = this._texture.orig
          !e || (e.width === t.width && e.height === t.height)
            ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData))
            : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
        }),
        (t.prototype.getLocalBounds = function (t) {
          return 0 === this.children.length
            ? ((this._bounds.minX = this._texture.orig.width * -this._anchor._x),
              (this._bounds.minY = this._texture.orig.height * -this._anchor._y),
              (this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x)),
              (this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y)),
              t ||
                (this._localBoundsRect || (this._localBoundsRect = new He()),
                (t = this._localBoundsRect)),
              this._bounds.getRectangle(t))
            : e.prototype.getLocalBounds.call(this, t)
        }),
        (t.prototype.containsPoint = function (e) {
          this.worldTransform.applyInverse(e, no)
          var t = this._texture.orig.width,
            n = this._texture.orig.height,
            i = -t * this.anchor.x,
            r = 0
          return no.x >= i && no.x < i + t && ((r = -n * this.anchor.y), no.y >= r && no.y < r + n)
        }),
        (t.prototype.destroy = function (t) {
          if (
            (e.prototype.destroy.call(this, t),
            this._texture.off("update", this._onTextureUpdate, this),
            (this._anchor = null),
            "boolean" == typeof t ? t : t && t.texture)
          ) {
            var n = "boolean" == typeof t ? t : t && t.baseTexture
            this._texture.destroy(!!n)
          }
          this._texture = null
        }),
        (t.from = function (e, n) {
          return new t(e instanceof Jt ? e : Jt.from(e, n))
        }),
        Object.defineProperty(t.prototype, "roundPixels", {
          get: function () {
            return this._roundPixels
          },
          set: function (e) {
            ;(this._roundPixels !== e && (this._transformID = -1), (this._roundPixels = e))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            return Math.abs(this.scale.x) * this._texture.orig.width
          },
          set: function (e) {
            var t = be(this.scale.x) || 1
            ;((this.scale.x = (t * e) / this._texture.orig.width), (this._width = e))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "height", {
          get: function () {
            return Math.abs(this.scale.y) * this._texture.orig.height
          },
          set: function (e) {
            var t = be(this.scale.y) || 1
            ;((this.scale.y = (t * e) / this._texture.orig.height), (this._height = e))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "anchor", {
          get: function () {
            return this._anchor
          },
          set: function (e) {
            this._anchor.copyFrom(e)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "tint", {
          get: function () {
            return this._tint
          },
          set: function (e) {
            ;((this._tint = e), (this._tintRGB = (e >> 16) + (65280 & e) + ((255 & e) << 16)))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "texture", {
          get: function () {
            return this._texture
          },
          set: function (e) {
            this._texture !== e &&
              (this._texture && this._texture.off("update", this._onTextureUpdate, this),
              (this._texture = e || Jt.EMPTY),
              (this._cachedTint = 16777215),
              (this._textureID = -1),
              (this._textureTrimmedID = -1),
              e &&
                (e.baseTexture.valid
                  ? this._onTextureUpdate()
                  : e.once("update", this._onTextureUpdate, this)))
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(dt),
    oo = function (e, t) {
      return (
        (oo =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        oo(e, t)
      )
    }
  !(function (e) {
    ;((e[(e.LINEAR_VERTICAL = 0)] = "LINEAR_VERTICAL"),
      (e[(e.LINEAR_HORIZONTAL = 1)] = "LINEAR_HORIZONTAL"))
  })(to || (to = {}))
  var ao = {
      align: "left",
      breakWords: false,
      dropShadow: false,
      dropShadowAlpha: 1,
      dropShadowAngle: Math.PI / 6,
      dropShadowBlur: 0,
      dropShadowColor: "black",
      dropShadowDistance: 5,
      fill: "black",
      fillGradientType: to.LINEAR_VERTICAL,
      fillGradientStops: [],
      fontFamily: "Arial",
      fontSize: 26,
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: 0,
      lineJoin: "miter",
      miterLimit: 10,
      padding: 0,
      stroke: "black",
      strokeThickness: 0,
      textBaseline: "alphabetic",
      trim: false,
      whiteSpace: "pre",
      wordWrap: false,
      wordWrapWidth: 100,
      leading: 0,
    },
    so = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
    uo = (function () {
      function e(e) {
        ;((this.styleID = 0), this.reset(), ho(this, e, e))
      }
      return (
        (e.prototype.clone = function () {
          var t = {}
          return (ho(t, this, ao), new e(t))
        }),
        (e.prototype.reset = function () {
          ho(this, ao, ao)
        }),
        Object.defineProperty(e.prototype, "align", {
          get: function () {
            return this._align
          },
          set: function (e) {
            this._align !== e && ((this._align = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "breakWords", {
          get: function () {
            return this._breakWords
          },
          set: function (e) {
            this._breakWords !== e && ((this._breakWords = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "dropShadow", {
          get: function () {
            return this._dropShadow
          },
          set: function (e) {
            this._dropShadow !== e && ((this._dropShadow = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "dropShadowAlpha", {
          get: function () {
            return this._dropShadowAlpha
          },
          set: function (e) {
            this._dropShadowAlpha !== e && ((this._dropShadowAlpha = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "dropShadowAngle", {
          get: function () {
            return this._dropShadowAngle
          },
          set: function (e) {
            this._dropShadowAngle !== e && ((this._dropShadowAngle = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "dropShadowBlur", {
          get: function () {
            return this._dropShadowBlur
          },
          set: function (e) {
            this._dropShadowBlur !== e && ((this._dropShadowBlur = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "dropShadowColor", {
          get: function () {
            return this._dropShadowColor
          },
          set: function (e) {
            var t = co(e)
            this._dropShadowColor !== t && ((this._dropShadowColor = t), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "dropShadowDistance", {
          get: function () {
            return this._dropShadowDistance
          },
          set: function (e) {
            this._dropShadowDistance !== e && ((this._dropShadowDistance = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "fill", {
          get: function () {
            return this._fill
          },
          set: function (e) {
            var t = co(e)
            this._fill !== t && ((this._fill = t), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "fillGradientType", {
          get: function () {
            return this._fillGradientType
          },
          set: function (e) {
            this._fillGradientType !== e && ((this._fillGradientType = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "fillGradientStops", {
          get: function () {
            return this._fillGradientStops
          },
          set: function (e) {
            ;(function (e, t) {
              if (!Array.isArray(e) || !Array.isArray(t)) return false
              if (e.length !== t.length) return false
              for (var n = 0; n < e.length; ++n) if (e[n] !== t[n]) return false
              return true
            })(this._fillGradientStops, e) || ((this._fillGradientStops = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "fontFamily", {
          get: function () {
            return this._fontFamily
          },
          set: function (e) {
            this.fontFamily !== e && ((this._fontFamily = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "fontSize", {
          get: function () {
            return this._fontSize
          },
          set: function (e) {
            this._fontSize !== e && ((this._fontSize = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "fontStyle", {
          get: function () {
            return this._fontStyle
          },
          set: function (e) {
            this._fontStyle !== e && ((this._fontStyle = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "fontVariant", {
          get: function () {
            return this._fontVariant
          },
          set: function (e) {
            this._fontVariant !== e && ((this._fontVariant = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "fontWeight", {
          get: function () {
            return this._fontWeight
          },
          set: function (e) {
            this._fontWeight !== e && ((this._fontWeight = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "letterSpacing", {
          get: function () {
            return this._letterSpacing
          },
          set: function (e) {
            this._letterSpacing !== e && ((this._letterSpacing = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "lineHeight", {
          get: function () {
            return this._lineHeight
          },
          set: function (e) {
            this._lineHeight !== e && ((this._lineHeight = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "leading", {
          get: function () {
            return this._leading
          },
          set: function (e) {
            this._leading !== e && ((this._leading = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "lineJoin", {
          get: function () {
            return this._lineJoin
          },
          set: function (e) {
            this._lineJoin !== e && ((this._lineJoin = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "miterLimit", {
          get: function () {
            return this._miterLimit
          },
          set: function (e) {
            this._miterLimit !== e && ((this._miterLimit = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "padding", {
          get: function () {
            return this._padding
          },
          set: function (e) {
            this._padding !== e && ((this._padding = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "stroke", {
          get: function () {
            return this._stroke
          },
          set: function (e) {
            var t = co(e)
            this._stroke !== t && ((this._stroke = t), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "strokeThickness", {
          get: function () {
            return this._strokeThickness
          },
          set: function (e) {
            this._strokeThickness !== e && ((this._strokeThickness = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "textBaseline", {
          get: function () {
            return this._textBaseline
          },
          set: function (e) {
            this._textBaseline !== e && ((this._textBaseline = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "trim", {
          get: function () {
            return this._trim
          },
          set: function (e) {
            this._trim !== e && ((this._trim = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "whiteSpace", {
          get: function () {
            return this._whiteSpace
          },
          set: function (e) {
            this._whiteSpace !== e && ((this._whiteSpace = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "wordWrap", {
          get: function () {
            return this._wordWrap
          },
          set: function (e) {
            this._wordWrap !== e && ((this._wordWrap = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(e.prototype, "wordWrapWidth", {
          get: function () {
            return this._wordWrapWidth
          },
          set: function (e) {
            this._wordWrapWidth !== e && ((this._wordWrapWidth = e), this.styleID++)
          },
          enumerable: false,
          configurable: true,
        }),
        (e.prototype.toFontString = function () {
          var e = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize,
            t = this.fontFamily
          Array.isArray(this.fontFamily) || (t = this.fontFamily.split(","))
          for (var n = t.length - 1; n >= 0; n--) {
            var i = t[n].trim()
            ;(!/([\"\'])[^\'\"]+\1/.test(i) && so.indexOf(i) < 0 && (i = '"' + i + '"'), (t[n] = i))
          }
          return (
            this.fontStyle +
            " " +
            this.fontVariant +
            " " +
            this.fontWeight +
            " " +
            e +
            " " +
            t.join(",")
          )
        }),
        e
      )
    })()
  function lo(e) {
    return "number" == typeof e
      ? oe(e)
      : ("string" == typeof e && 0 === e.indexOf("0x") && (e = e.replace("0x", "#")), e)
  }
  function co(e) {
    if (Array.isArray(e)) {
      for (var t = 0; t < e.length; ++t) e[t] = lo(e[t])
      return e
    }
    return lo(e)
  }
  function ho(e, t, n) {
    for (var i in n) Array.isArray(t[i]) ? (e[i] = t[i].slice()) : (e[i] = t[i])
  }
  var po = (function () {
      function e(e, t, n, i, r, o, a, s, u) {
        ;((this.text = e),
          (this.style = t),
          (this.width = n),
          (this.height = i),
          (this.lines = r),
          (this.lineWidths = o),
          (this.lineHeight = a),
          (this.maxLineWidth = s),
          (this.fontProperties = u))
      }
      return (
        (e.measureText = function (t, n, i, r) {
          ;(undefined === r && (r = e._canvas), (i = null == i ? n.wordWrap : i))
          var o = n.toFontString(),
            a = e.measureFont(o)
          0 === a.fontSize && ((a.fontSize = n.fontSize), (a.ascent = n.fontSize))
          var s = r.getContext("2d")
          s.font = o
          for (
            var u = (i ? e.wordWrap(t, n, r) : t).split(/(?:\r\n|\r|\n)/),
              l = new Array(u.length),
              c = 0,
              d = 0;
            d < u.length;
            d++
          ) {
            var h = s.measureText(u[d]).width + (u[d].length - 1) * n.letterSpacing
            ;((l[d] = h), (c = Math.max(c, h)))
          }
          var p = c + n.strokeThickness
          n.dropShadow && (p += n.dropShadowDistance)
          var f = n.lineHeight || a.fontSize + n.strokeThickness,
            _ = Math.max(f, a.fontSize + n.strokeThickness) + (u.length - 1) * (f + n.leading)
          return (
            n.dropShadow && (_ += n.dropShadowDistance),
            new e(t, n, p, _, u, l, f + n.leading, c, a)
          )
        }),
        (e.wordWrap = function (t, n, i) {
          undefined === i && (i = e._canvas)
          for (
            var r = i.getContext("2d"),
              o = 0,
              a = "",
              s = "",
              u = Object.create(null),
              l = n.letterSpacing,
              c = n.whiteSpace,
              d = e.collapseSpaces(c),
              h = e.collapseNewlines(c),
              p = !d,
              f = n.wordWrapWidth + l,
              _ = e.tokenize(t),
              g = 0;
            g < _.length;
            g++
          ) {
            var m = _[g]
            if (e.isNewline(m)) {
              if (!h) {
                ;((s += e.addLine(a)), (p = !d), (a = ""), (o = 0))
                continue
              }
              m = " "
            }
            if (d) {
              var v = e.isBreakingSpace(m),
                y = e.isBreakingSpace(a[a.length - 1])
              if (v && y) continue
            }
            var C = e.getFromCache(m, l, u, r)
            if (C > f)
              if (
                ("" !== a && ((s += e.addLine(a)), (a = ""), (o = 0)),
                e.canBreakWords(m, n.breakWords))
              )
                for (var b = e.wordWrapSplit(m), w = 0; w < b.length; w++) {
                  for (var x = b[w], T = 1; b[w + T]; ) {
                    var S = b[w + T],
                      L = x[x.length - 1]
                    if (e.canBreakChars(L, S, m, w, n.breakWords)) break
                    ;((x += S), T++)
                  }
                  w += x.length - 1
                  var E = e.getFromCache(x, l, u, r)
                  ;(E + o > f && ((s += e.addLine(a)), (p = false), (a = ""), (o = 0)),
                    (a += x),
                    (o += E))
                }
              else {
                a.length > 0 && ((s += e.addLine(a)), (a = ""), (o = 0))
                var A = g === _.length - 1
                ;((s += e.addLine(m, !A)), (p = false), (a = ""), (o = 0))
              }
            else
              (C + o > f && ((p = false), (s += e.addLine(a)), (a = ""), (o = 0)),
                (a.length > 0 || !e.isBreakingSpace(m) || p) && ((a += m), (o += C)))
          }
          return (s += e.addLine(a, false))
        }),
        (e.addLine = function (t, n) {
          return (undefined === n && (n = true), (t = e.trimRight(t)), (t = n ? t + "\n" : t))
        }),
        (e.getFromCache = function (e, t, n, i) {
          var r = n[e]
          if ("number" != typeof r) {
            var o = e.length * t
            ;((r = i.measureText(e).width + o), (n[e] = r))
          }
          return r
        }),
        (e.collapseSpaces = function (e) {
          return "normal" === e || "pre-line" === e
        }),
        (e.collapseNewlines = function (e) {
          return "normal" === e
        }),
        (e.trimRight = function (t) {
          if ("string" != typeof t) return ""
          for (var n = t.length - 1; n >= 0; n--) {
            var i = t[n]
            if (!e.isBreakingSpace(i)) break
            t = t.slice(0, -1)
          }
          return t
        }),
        (e.isNewline = function (t) {
          return "string" == typeof t && e._newlines.indexOf(t.charCodeAt(0)) >= 0
        }),
        (e.isBreakingSpace = function (t) {
          return "string" == typeof t && e._breakingSpaces.indexOf(t.charCodeAt(0)) >= 0
        }),
        (e.tokenize = function (t) {
          var n = [],
            i = ""
          if ("string" != typeof t) return n
          for (var r = 0; r < t.length; r++) {
            var o = t[r]
            e.isBreakingSpace(o) || e.isNewline(o)
              ? ("" !== i && (n.push(i), (i = "")), n.push(o))
              : (i += o)
          }
          return ("" !== i && n.push(i), n)
        }),
        (e.canBreakWords = function (e, t) {
          return t
        }),
        (e.canBreakChars = function (e, t, n, i, r) {
          return true
        }),
        (e.wordWrapSplit = function (e) {
          return e.split("")
        }),
        (e.measureFont = function (t) {
          if (e._fonts[t]) return e._fonts[t]
          var n = { ascent: 0, descent: 0, fontSize: 0 },
            i = e._canvas,
            r = e._context
          r.font = t
          var o = e.METRICS_STRING + e.BASELINE_SYMBOL,
            a = Math.ceil(r.measureText(o).width),
            s = Math.ceil(r.measureText(e.BASELINE_SYMBOL).width),
            u = 2 * s
          ;((s = (s * e.BASELINE_MULTIPLIER) | 0),
            (i.width = a),
            (i.height = u),
            (r.fillStyle = "#f00"),
            r.fillRect(0, 0, a, u),
            (r.font = t),
            (r.textBaseline = "alphabetic"),
            (r.fillStyle = "#000"),
            r.fillText(o, 0, s))
          var l = r.getImageData(0, 0, a, u).data,
            c = l.length,
            d = 4 * a,
            h = 0,
            p = 0,
            f = false
          for (h = 0; h < s; ++h) {
            for (var _ = 0; _ < d; _ += 4)
              if (255 !== l[p + _]) {
                f = true
                break
              }
            if (f) break
            p += d
          }
          for (n.ascent = s - h, p = c - d, f = false, h = u; h > s; --h) {
            for (_ = 0; _ < d; _ += 4)
              if (255 !== l[p + _]) {
                f = true
                break
              }
            if (f) break
            p -= d
          }
          return ((n.descent = h - s), (n.fontSize = n.ascent + n.descent), (e._fonts[t] = n), n)
        }),
        (e.clearMetrics = function (t) {
          ;(undefined === t && (t = ""), t ? delete e._fonts[t] : (e._fonts = {}))
        }),
        e
      )
    })(),
    fo = (function () {
      try {
        var e = new OffscreenCanvas(0, 0),
          t = e.getContext("2d")
        return t && t.measureText ? e : document.createElement("canvas")
      } catch (e) {
        return document.createElement("canvas")
      }
    })()
  ;((fo.width = fo.height = 10),
    (po._canvas = fo),
    (po._context = fo.getContext("2d")),
    (po._fonts = {}),
    (po.METRICS_STRING = "|ÉqÅ"),
    (po.BASELINE_SYMBOL = "M"),
    (po.BASELINE_MULTIPLIER = 1.4),
    (po._newlines = [10, 13]),
    (po._breakingSpaces = [
      9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288,
    ]))
  var _o = { texture: true, children: false, baseTexture: true },
    go = (function (e) {
      function t(t, n, i) {
        var r = this,
          o = false
        ;(i || ((i = document.createElement("canvas")), (o = true)), (i.width = 3), (i.height = 3))
        var a = Jt.from(i)
        return (
          (a.orig = new He()),
          (a.trim = new He()),
          ((r = e.call(this, a) || this)._ownCanvas = o),
          (r.canvas = i),
          (r.context = r.canvas.getContext("2d")),
          (r._resolution = Y.RESOLUTION),
          (r._autoResolution = true),
          (r._text = null),
          (r._style = null),
          (r._styleListener = null),
          (r._font = ""),
          (r.text = t),
          (r.style = n),
          (r.localStyleID = -1),
          r
        )
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(oo(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        (t.prototype.updateText = function (e) {
          var t = this._style
          if (
            (this.localStyleID !== t.styleID &&
              ((this.dirty = true), (this.localStyleID = t.styleID)),
            this.dirty || !e)
          ) {
            this._font = this._style.toFontString()
            var n,
              i,
              r = this.context,
              o = po.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
              a = o.width,
              s = o.height,
              u = o.lines,
              l = o.lineHeight,
              c = o.lineWidths,
              d = o.maxLineWidth,
              h = o.fontProperties
            ;((this.canvas.width = Math.ceil((Math.max(1, a) + 2 * t.padding) * this._resolution)),
              (this.canvas.height = Math.ceil((Math.max(1, s) + 2 * t.padding) * this._resolution)),
              r.scale(this._resolution, this._resolution),
              r.clearRect(0, 0, this.canvas.width, this.canvas.height),
              (r.font = this._font),
              (r.lineWidth = t.strokeThickness),
              (r.textBaseline = t.textBaseline),
              (r.lineJoin = t.lineJoin),
              (r.miterLimit = t.miterLimit))
            for (var p = t.dropShadow ? 2 : 1, f = 0; f < p; ++f) {
              var _ = t.dropShadow && 0 === f,
                g = _ ? Math.ceil(Math.max(1, s) + 2 * t.padding) : 0,
                m = g * this._resolution
              if (_) {
                ;((r.fillStyle = "black"), (r.strokeStyle = "black"))
                var v = t.dropShadowColor,
                  y = re("number" == typeof v ? v : ae(v)),
                  C = t.dropShadowBlur * this._resolution,
                  b = t.dropShadowDistance * this._resolution
                ;((r.shadowColor =
                  "rgba(" +
                  255 * y[0] +
                  "," +
                  255 * y[1] +
                  "," +
                  255 * y[2] +
                  "," +
                  t.dropShadowAlpha +
                  ")"),
                  (r.shadowBlur = C),
                  (r.shadowOffsetX = Math.cos(t.dropShadowAngle) * b),
                  (r.shadowOffsetY = Math.sin(t.dropShadowAngle) * b + m))
              } else
                ((r.fillStyle = this._generateFillStyle(t, u, o)),
                  (r.strokeStyle = t.stroke),
                  (r.shadowColor = "black"),
                  (r.shadowBlur = 0),
                  (r.shadowOffsetX = 0),
                  (r.shadowOffsetY = 0))
              for (var w = 0; w < u.length; w++)
                ((n = t.strokeThickness / 2),
                  (i = t.strokeThickness / 2 + w * l + h.ascent),
                  "right" === t.align
                    ? (n += d - c[w])
                    : "center" === t.align && (n += (d - c[w]) / 2),
                  t.stroke &&
                    t.strokeThickness &&
                    this.drawLetterSpacing(u[w], n + t.padding, i + t.padding - g, true),
                  t.fill && this.drawLetterSpacing(u[w], n + t.padding, i + t.padding - g))
            }
            this.updateTexture()
          }
        }),
        (t.prototype.drawLetterSpacing = function (e, t, n, i) {
          undefined === i && (i = false)
          var r = this._style.letterSpacing
          if (0 !== r)
            for (
              var o = t,
                a = Array.from ? Array.from(e) : e.split(""),
                s = this.context.measureText(e).width,
                u = 0,
                l = 0;
              l < a.length;
              ++l
            ) {
              var c = a[l]
              ;(i ? this.context.strokeText(c, o, n) : this.context.fillText(c, o, n),
                (o += s - (u = this.context.measureText(e.substring(l + 1)).width) + r),
                (s = u))
            }
          else i ? this.context.strokeText(e, t, n) : this.context.fillText(e, t, n)
        }),
        (t.prototype.updateTexture = function () {
          var e = this.canvas
          if (this._style.trim) {
            var t = Oe(e)
            t.data &&
              ((e.width = t.width), (e.height = t.height), this.context.putImageData(t.data, 0, 0))
          }
          var n = this._texture,
            i = this._style,
            r = i.trim ? 0 : i.padding,
            o = n.baseTexture
          ;((n.trim.width = n._frame.width = Math.ceil(e.width / this._resolution)),
            (n.trim.height = n._frame.height = Math.ceil(e.height / this._resolution)),
            (n.trim.x = -r),
            (n.trim.y = -r),
            (n.orig.width = n._frame.width - 2 * r),
            (n.orig.height = n._frame.height - 2 * r),
            this._onTextureUpdate(),
            o.setRealSize(e.width, e.height, this._resolution),
            this._recursivePostUpdateTransform(),
            (this.dirty = false))
        }),
        (t.prototype._render = function (t) {
          ;(this._autoResolution &&
            this._resolution !== t.resolution &&
            ((this._resolution = t.resolution), (this.dirty = true)),
            this.updateText(true),
            e.prototype._render.call(this, t))
        }),
        (t.prototype.getLocalBounds = function (t) {
          return (this.updateText(true), e.prototype.getLocalBounds.call(this, t))
        }),
        (t.prototype._calculateBounds = function () {
          ;(this.updateText(true), this.calculateVertices(), this._bounds.addQuad(this.vertexData))
        }),
        (t.prototype._generateFillStyle = function (e, t, n) {
          var i,
            r = e.fill
          if (!Array.isArray(r)) return r
          if (1 === r.length) return r[0]
          var o = e.dropShadow ? e.dropShadowDistance : 0,
            a = e.padding || 0,
            s = Math.ceil(this.canvas.width / this._resolution) - o - 2 * a,
            u = Math.ceil(this.canvas.height / this._resolution) - o - 2 * a,
            l = r.slice(),
            c = e.fillGradientStops.slice()
          if (!c.length) for (var d = l.length + 1, h = 1; h < d; ++h) c.push(h / d)
          if (
            (l.unshift(r[0]),
            c.unshift(0),
            l.push(r[r.length - 1]),
            c.push(1),
            e.fillGradientType === to.LINEAR_VERTICAL)
          ) {
            i = this.context.createLinearGradient(s / 2, a, s / 2, u + a)
            var p = 0,
              f = (n.fontProperties.fontSize + e.strokeThickness) / u
            for (h = 0; h < t.length; h++)
              for (var _ = n.lineHeight * h, g = 0; g < l.length; g++) {
                var m = _ / u + ("number" == typeof c[g] ? c[g] : g / l.length) * f,
                  v = Math.max(p, m)
                ;((v = Math.min(v, 1)), i.addColorStop(v, l[g]), (p = v))
              }
          } else {
            i = this.context.createLinearGradient(a, u / 2, s + a, u / 2)
            var y = l.length + 1,
              C = 1
            for (h = 0; h < l.length; h++) {
              var b = undefined
              ;((b = "number" == typeof c[h] ? c[h] : C / y), i.addColorStop(b, l[h]), C++)
            }
          }
          return i
        }),
        (t.prototype.destroy = function (t) {
          ;("boolean" == typeof t && (t = { children: t }),
            (t = Object.assign({}, _o, t)),
            e.prototype.destroy.call(this, t),
            this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
            (this.context = null),
            (this.canvas = null),
            (this._style = null))
        }),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            return (this.updateText(true), Math.abs(this.scale.x) * this._texture.orig.width)
          },
          set: function (e) {
            this.updateText(true)
            var t = be(this.scale.x) || 1
            ;((this.scale.x = (t * e) / this._texture.orig.width), (this._width = e))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "height", {
          get: function () {
            return (this.updateText(true), Math.abs(this.scale.y) * this._texture.orig.height)
          },
          set: function (e) {
            this.updateText(true)
            var t = be(this.scale.y) || 1
            ;((this.scale.y = (t * e) / this._texture.orig.height), (this._height = e))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "style", {
          get: function () {
            return this._style
          },
          set: function (e) {
            ;((e = e || {}),
              (this._style = e instanceof uo ? e : new uo(e)),
              (this.localStyleID = -1),
              (this.dirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "text", {
          get: function () {
            return this._text
          },
          set: function (e) {
            ;((e = String(null == e ? "" : e)),
              this._text !== e && ((this._text = e), (this.dirty = true)))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "resolution", {
          get: function () {
            return this._resolution
          },
          set: function (e) {
            ;((this._autoResolution = false),
              this._resolution !== e && ((this._resolution = e), (this.dirty = true)))
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(ro)
  Y.UPLOADS_PER_FRAME = 4
  var mo = function (e, t) {
    return (
      (mo =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }),
      mo(e, t)
    )
  }
  var vo = (function () {
    function e(e) {
      ;((this.maxItemsPerFrame = e), (this.itemsLeft = 0))
    }
    return (
      (e.prototype.beginFrame = function () {
        this.itemsLeft = this.maxItemsPerFrame
      }),
      (e.prototype.allowedToUpload = function () {
        return this.itemsLeft-- > 0
      }),
      e
    )
  })()
  function yo(e, t) {
    var n = false
    if (e && e._textures && e._textures.length)
      for (var i = 0; i < e._textures.length; i++)
        if (e._textures[i] instanceof Jt) {
          var r = e._textures[i].baseTexture
          ;-1 === t.indexOf(r) && (t.push(r), (n = true))
        }
    return n
  }
  function Co(e, t) {
    if (e.baseTexture instanceof Nt) {
      var n = e.baseTexture
      return (-1 === t.indexOf(n) && t.push(n), true)
    }
    return false
  }
  function bo(e, t) {
    if (e._texture && e._texture instanceof Jt) {
      var n = e._texture.baseTexture
      return (-1 === t.indexOf(n) && t.push(n), true)
    }
    return false
  }
  function wo(e, t) {
    return t instanceof go && (t.updateText(true), true)
  }
  function xo(e, t) {
    if (t instanceof uo) {
      var n = t.toFontString()
      return (po.measureFont(n), true)
    }
    return false
  }
  function To(e, t) {
    if (e instanceof go) {
      ;(-1 === t.indexOf(e.style) && t.push(e.style), -1 === t.indexOf(e) && t.push(e))
      var n = e._texture.baseTexture
      return (-1 === t.indexOf(n) && t.push(n), true)
    }
    return false
  }
  function So(e, t) {
    return e instanceof uo && (-1 === t.indexOf(e) && t.push(e), true)
  }
  var Lo = (function () {
    function e(e) {
      var t = this
      ;((this.limiter = new vo(Y.UPLOADS_PER_FRAME)),
        (this.renderer = e),
        (this.uploadHookHelper = null),
        (this.queue = []),
        (this.addHooks = []),
        (this.uploadHooks = []),
        (this.completes = []),
        (this.ticking = false),
        (this.delayedTick = function () {
          t.queue && t.prepareItems()
        }),
        this.registerFindHook(To),
        this.registerFindHook(So),
        this.registerFindHook(yo),
        this.registerFindHook(Co),
        this.registerFindHook(bo),
        this.registerUploadHook(wo),
        this.registerUploadHook(xo))
    }
    return (
      (e.prototype.upload = function (e, t) {
        ;("function" == typeof e && ((t = e), (e = null)),
          e && this.add(e),
          this.queue.length
            ? (t && this.completes.push(t),
              this.ticking || ((this.ticking = true), mt.system.addOnce(this.tick, this, pt.UTILITY)))
            : t && t())
      }),
      (e.prototype.tick = function () {
        setTimeout(this.delayedTick, 0)
      }),
      (e.prototype.prepareItems = function () {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
          var e = this.queue[0],
            t = false
          if (e && !e._destroyed)
            for (var n = 0, i = this.uploadHooks.length; n < i; n++)
              if (this.uploadHooks[n](this.uploadHookHelper, e)) {
                ;(this.queue.shift(), (t = true))
                break
              }
          t || this.queue.shift()
        }
        if (this.queue.length) mt.system.addOnce(this.tick, this, pt.UTILITY)
        else {
          this.ticking = false
          var r = this.completes.slice(0)
          this.completes.length = 0
          for (n = 0, i = r.length; n < i; n++) r[n]()
        }
      }),
      (e.prototype.registerFindHook = function (e) {
        return (e && this.addHooks.push(e), this)
      }),
      (e.prototype.registerUploadHook = function (e) {
        return (e && this.uploadHooks.push(e), this)
      }),
      (e.prototype.add = function (e) {
        for (var t = 0, n = this.addHooks.length; t < n && !this.addHooks[t](e, this.queue); t++);
        if (e instanceof dt) for (t = e.children.length - 1; t >= 0; t--) this.add(e.children[t])
        return this
      }),
      (e.prototype.destroy = function () {
        ;(this.ticking && mt.system.remove(this.tick, this),
          (this.ticking = false),
          (this.addHooks = null),
          (this.uploadHooks = null),
          (this.renderer = null),
          (this.completes = null),
          (this.queue = null),
          (this.limiter = null),
          (this.uploadHookHelper = null))
      }),
      e
    )
  })()
  function Eo(e, t) {
    return t instanceof Nt && (t._glTextures[e.CONTEXT_UID] || e.texture.bind(t), true)
  }
  function Ao(e, t) {
    if (!(t instanceof Qr)) return false
    var n = t.geometry
    ;(t.finishPoly(), n.updateBatches())
    for (var i = n.batches, r = 0; r < i.length; r++) {
      var o = i[r].style.texture
      o && Eo(e, o.baseTexture)
    }
    return (n.batchable || e.geometry.bind(n, t._resolveDirectShader(e)), true)
  }
  function Io(e, t) {
    return e instanceof Qr && (t.push(e), true)
  }
  var Mo = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this
        return (
          (n.uploadHookHelper = n.renderer),
          n.registerFindHook(Io),
          n.registerUploadHook(Eo),
          n.registerUploadHook(Ao),
          n
        )
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(mo(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        t
      )
    })(Lo),
    Po = (function () {
      function e(e) {
        ;((this.maxMilliseconds = e), (this.frameStart = 0))
      }
      return (
        (e.prototype.beginFrame = function () {
          this.frameStart = Date.now()
        }),
        (e.prototype.allowedToUpload = function () {
          return Date.now() - this.frameStart < this.maxMilliseconds
        }),
        e
      )
    })(),
    Oo = (function () {
      function e(e, t, n) {
        ;(undefined === n && (n = null),
          (this._texture = e instanceof Jt ? e : null),
          (this.baseTexture = e instanceof Nt ? e : this._texture.baseTexture),
          (this.textures = {}),
          (this.animations = {}),
          (this.data = t))
        var i = this.baseTexture.resource
        ;((this.resolution = this._updateResolution(n || (i ? i.url : null))),
          (this._frames = this.data.frames),
          (this._frameKeys = Object.keys(this._frames)),
          (this._batchIndex = 0),
          (this._callback = null))
      }
      return (
        (e.prototype._updateResolution = function (e) {
          undefined === e && (e = null)
          var t = this.data.meta.scale,
            n = Be(e, null)
          return (
            null === n && (n = undefined !== t ? parseFloat(t) : 1),
            1 !== n && this.baseTexture.setResolution(n),
            n
          )
        }),
        (e.prototype.parse = function (t) {
          ;((this._batchIndex = 0),
            (this._callback = t),
            this._frameKeys.length <= e.BATCH_SIZE
              ? (this._processFrames(0), this._processAnimations(), this._parseComplete())
              : this._nextBatch())
        }),
        (e.prototype._processFrames = function (t) {
          for (var n = t, i = e.BATCH_SIZE; n - t < i && n < this._frameKeys.length; ) {
            var r = this._frameKeys[n],
              o = this._frames[r],
              a = o.frame
            if (a) {
              var s = null,
                u = null,
                l = false !== o.trimmed && o.sourceSize ? o.sourceSize : o.frame,
                c = new He(
                  0,
                  0,
                  Math.floor(l.w) / this.resolution,
                  Math.floor(l.h) / this.resolution,
                )
              ;((s = o.rotated
                ? new He(
                    Math.floor(a.x) / this.resolution,
                    Math.floor(a.y) / this.resolution,
                    Math.floor(a.h) / this.resolution,
                    Math.floor(a.w) / this.resolution,
                  )
                : new He(
                    Math.floor(a.x) / this.resolution,
                    Math.floor(a.y) / this.resolution,
                    Math.floor(a.w) / this.resolution,
                    Math.floor(a.h) / this.resolution,
                  )),
                false !== o.trimmed &&
                  o.spriteSourceSize &&
                  (u = new He(
                    Math.floor(o.spriteSourceSize.x) / this.resolution,
                    Math.floor(o.spriteSourceSize.y) / this.resolution,
                    Math.floor(a.w) / this.resolution,
                    Math.floor(a.h) / this.resolution,
                  )),
                (this.textures[r] = new Jt(this.baseTexture, s, c, u, o.rotated ? 2 : 0, o.anchor)),
                Jt.addToCache(this.textures[r], r))
            }
            n++
          }
        }),
        (e.prototype._processAnimations = function () {
          var e = this.data.animations || {}
          for (var t in e) {
            this.animations[t] = []
            for (var n = 0; n < e[t].length; n++) {
              var i = e[t][n]
              this.animations[t].push(this.textures[i])
            }
          }
        }),
        (e.prototype._parseComplete = function () {
          var e = this._callback
          ;((this._callback = null), (this._batchIndex = 0), e.call(this, this.textures))
        }),
        (e.prototype._nextBatch = function () {
          var t = this
          ;(this._processFrames(this._batchIndex * e.BATCH_SIZE),
            this._batchIndex++,
            setTimeout(function () {
              t._batchIndex * e.BATCH_SIZE < t._frameKeys.length
                ? t._nextBatch()
                : (t._processAnimations(), t._parseComplete())
            }, 0))
        }),
        (e.prototype.destroy = function (e) {
          var t
          for (var n in (undefined === e && (e = false), this.textures)) this.textures[n].destroy()
          ;((this._frames = null),
            (this._frameKeys = null),
            (this.data = null),
            (this.textures = null),
            e &&
              (null === (t = this._texture) || undefined === t || t.destroy(),
              this.baseTexture.destroy()),
            (this._texture = null),
            (this.baseTexture = null))
        }),
        (e.BATCH_SIZE = 1e3),
        e
      )
    })(),
    Ro = (function () {
      function e() {}
      return (
        (e.use = function (t, n) {
          var i = this,
            r = t.name + "_image"
          if (t.data && t.type === dr.TYPE.JSON && t.data.frames && !i.resources[r]) {
            var o = {
                crossOrigin: t.crossOrigin,
                metadata: t.metadata.imageMetadata,
                parentResource: t,
              },
              a = e.getResourcePath(t, i.baseUrl)
            i.add(r, a, o, function (e) {
              if (e.error) n(e.error)
              else {
                var i = new Oo(e.texture, t.data, t.url)
                i.parse(function () {
                  ;((t.spritesheet = i), (t.textures = i.textures), n())
                })
              }
            })
          } else n()
        }),
        (e.getResourcePath = function (e, t) {
          return e.isDataUrl
            ? e.data.meta.image
            : $.resolve(e.url.replace(t, ""), e.data.meta.image)
        }),
        e
      )
    })(),
    ko = function (e, t) {
      return (
        (ko =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        ko(e, t)
      )
    }
  function No(e, t) {
    function n() {
      this.constructor = e
    }
    ;(ko(e, t),
      (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var Do = new We(),
    Bo = (function (e) {
      function t(t, n, i) {
        ;(undefined === n && (n = 100), undefined === i && (i = 100))
        var r = e.call(this, t) || this
        return (
          (r.tileTransform = new rt()),
          (r._width = n),
          (r._height = i),
          (r.uvMatrix = r.texture.uvMatrix || new ii(t)),
          (r.pluginName = "tilingSprite"),
          (r.uvRespectAnchor = false),
          r
        )
      }
      return (
        No(t, e),
        Object.defineProperty(t.prototype, "clampMargin", {
          get: function () {
            return this.uvMatrix.clampMargin
          },
          set: function (e) {
            ;((this.uvMatrix.clampMargin = e), this.uvMatrix.update(true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "tileScale", {
          get: function () {
            return this.tileTransform.scale
          },
          set: function (e) {
            this.tileTransform.scale.copyFrom(e)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "tilePosition", {
          get: function () {
            return this.tileTransform.position
          },
          set: function (e) {
            this.tileTransform.position.copyFrom(e)
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype._onTextureUpdate = function () {
          ;(this.uvMatrix && (this.uvMatrix.texture = this._texture), (this._cachedTint = 16777215))
        }),
        (t.prototype._render = function (e) {
          var t = this._texture
          t &&
            t.valid &&
            (this.tileTransform.updateLocalTransform(),
            this.uvMatrix.update(),
            e.batch.setObjectRenderer(e.plugins[this.pluginName]),
            e.plugins[this.pluginName].render(this))
        }),
        (t.prototype._calculateBounds = function () {
          var e = this._width * -this._anchor._x,
            t = this._height * -this._anchor._y,
            n = this._width * (1 - this._anchor._x),
            i = this._height * (1 - this._anchor._y)
          this._bounds.addFrame(this.transform, e, t, n, i)
        }),
        (t.prototype.getLocalBounds = function (t) {
          return 0 === this.children.length
            ? ((this._bounds.minX = this._width * -this._anchor._x),
              (this._bounds.minY = this._height * -this._anchor._y),
              (this._bounds.maxX = this._width * (1 - this._anchor._x)),
              (this._bounds.maxY = this._height * (1 - this._anchor._y)),
              t ||
                (this._localBoundsRect || (this._localBoundsRect = new He()),
                (t = this._localBoundsRect)),
              this._bounds.getRectangle(t))
            : e.prototype.getLocalBounds.call(this, t)
        }),
        (t.prototype.containsPoint = function (e) {
          this.worldTransform.applyInverse(e, Do)
          var t = this._width,
            n = this._height,
            i = -t * this.anchor._x
          if (Do.x >= i && Do.x < i + t) {
            var r = -n * this.anchor._y
            if (Do.y >= r && Do.y < r + n) return true
          }
          return false
        }),
        (t.prototype.destroy = function (t) {
          ;(e.prototype.destroy.call(this, t), (this.tileTransform = null), (this.uvMatrix = null))
        }),
        (t.from = function (e, n) {
          return (
            "number" == typeof n &&
              (Se("5.3.0", "TilingSprite.from use options instead of width and height args"),
              (n = { width: n, height: arguments[2] })),
            new t(Jt.from(e, n), n.width, n.height)
          )
        }),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            return this._width
          },
          set: function (e) {
            this._width = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "height", {
          get: function () {
            return this._height
          },
          set: function (e) {
            this._height = e
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(ro),
    Fo =
      "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n",
    Uo = new qe(),
    Go = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this,
          i = { globals: n.renderer.globalUniforms }
        return (
          (n.shader = Qn.from(
            Fo,
            "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n",
            i,
          )),
          (n.simpleShader = Qn.from(
            Fo,
            "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 texSample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = texSample * uColor;\n}\n",
            i,
          )),
          (n.quad = new pn()),
          (n.state = ei.for2d()),
          n
        )
      }
      return (
        No(t, e),
        (t.prototype.render = function (e) {
          var t = this.renderer,
            n = this.quad,
            i = n.vertices
          ;((i[0] = i[6] = e._width * -e.anchor.x),
            (i[1] = i[3] = e._height * -e.anchor.y),
            (i[2] = i[4] = e._width * (1 - e.anchor.x)),
            (i[5] = i[7] = e._height * (1 - e.anchor.y)),
            e.uvRespectAnchor &&
              (((i = n.uvs)[0] = i[6] = -e.anchor.x),
              (i[1] = i[3] = -e.anchor.y),
              (i[2] = i[4] = 1 - e.anchor.x),
              (i[5] = i[7] = 1 - e.anchor.y)),
            n.invalidate())
          var r = e._texture,
            o = r.baseTexture,
            a = e.tileTransform.localTransform,
            s = e.uvMatrix,
            u = o.isPowerOfTwo && r.frame.width === o.width && r.frame.height === o.height
          u &&
            (o._glTextures[t.CONTEXT_UID]
              ? (u = o.wrapMode !== F.CLAMP)
              : o.wrapMode === F.CLAMP && (o.wrapMode = F.REPEAT))
          var l = u ? this.simpleShader : this.shader,
            c = r.width,
            d = r.height,
            h = e._width,
            p = e._height
          ;(Uo.set((a.a * c) / h, (a.b * c) / p, (a.c * d) / h, (a.d * d) / p, a.tx / h, a.ty / p),
            Uo.invert(),
            u
              ? Uo.prepend(s.mapCoord)
              : ((l.uniforms.uMapCoord = s.mapCoord.toArray(true)),
                (l.uniforms.uClampFrame = s.uClampFrame),
                (l.uniforms.uClampOffset = s.uClampOffset)),
            (l.uniforms.uTransform = Uo.toArray(true)),
            (l.uniforms.uColor = he(e.tint, e.worldAlpha, l.uniforms.uColor, o.alphaMode)),
            (l.uniforms.translationMatrix = e.transform.worldTransform.toArray(true)),
            (l.uniforms.uSampler = r),
            t.shader.bind(l),
            t.geometry.bind(n),
            (this.state.blendMode = le(e.blendMode, o.alphaMode)),
            t.state.set(this.state),
            t.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0))
        }),
        t
      )
    })(vn),
    jo = function (e, t) {
      return (
        (jo =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        jo(e, t)
      )
    }
  function Ho(e, t) {
    function n() {
      this.constructor = e
    }
    ;(jo(e, t),
      (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var Vo = (function () {
      function e(e, t) {
        ;((this.uvBuffer = e),
          (this.uvMatrix = t),
          (this.data = null),
          (this._bufferUpdateId = -1),
          (this._textureUpdateId = -1),
          (this._updateID = 0))
      }
      return (
        (e.prototype.update = function (e) {
          if (
            e ||
            this._bufferUpdateId !== this.uvBuffer._updateID ||
            this._textureUpdateId !== this.uvMatrix._updateID
          ) {
            ;((this._bufferUpdateId = this.uvBuffer._updateID),
              (this._textureUpdateId = this.uvMatrix._updateID))
            var t = this.uvBuffer.data
            ;((this.data && this.data.length === t.length) ||
              (this.data = new Float32Array(t.length)),
              this.uvMatrix.multiplyUvs(t, this.data),
              this._updateID++)
          }
        }),
        e
      )
    })(),
    Zo = new We(),
    zo = new ze(),
    Yo = (function (e) {
      function t(t, n, i, r) {
        undefined === r && (r = R.TRIANGLES)
        var o = e.call(this) || this
        return (
          (o.geometry = t),
          t.refCount++,
          (o.shader = n),
          (o.state = i || ei.for2d()),
          (o.drawMode = r),
          (o.start = 0),
          (o.size = 0),
          (o.uvs = null),
          (o.indices = null),
          (o.vertexData = new Float32Array(1)),
          (o.vertexDirty = 0),
          (o._transformID = -1),
          (o._roundPixels = Y.ROUND_PIXELS),
          (o.batchUvs = null),
          o
        )
      }
      return (
        Ho(t, e),
        Object.defineProperty(t.prototype, "uvBuffer", {
          get: function () {
            return this.geometry.buffers[1]
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "verticesBuffer", {
          get: function () {
            return this.geometry.buffers[0]
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "material", {
          get: function () {
            return this.shader
          },
          set: function (e) {
            this.shader = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "blendMode", {
          get: function () {
            return this.state.blendMode
          },
          set: function (e) {
            this.state.blendMode = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "roundPixels", {
          get: function () {
            return this._roundPixels
          },
          set: function (e) {
            ;(this._roundPixels !== e && (this._transformID = -1), (this._roundPixels = e))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "tint", {
          get: function () {
            return this.shader.tint
          },
          set: function (e) {
            this.shader.tint = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "texture", {
          get: function () {
            return this.shader.texture
          },
          set: function (e) {
            this.shader.texture = e
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype._render = function (e) {
          var n = this.geometry.buffers[0].data
          this.shader.batchable && this.drawMode === R.TRIANGLES && n.length < 2 * t.BATCHABLE_SIZE
            ? this._renderToBatch(e)
            : this._renderDefault(e)
        }),
        (t.prototype._renderDefault = function (e) {
          var t = this.shader
          ;((t.alpha = this.worldAlpha),
            t.update && t.update(),
            e.batch.flush(),
            t.program.uniformData.translationMatrix &&
              (t.uniforms.translationMatrix = this.transform.worldTransform.toArray(true)),
            e.shader.bind(t),
            e.state.set(this.state),
            e.geometry.bind(this.geometry, t),
            e.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount))
        }),
        (t.prototype._renderToBatch = function (e) {
          var t = this.geometry
          ;(this.shader.uvMatrix && (this.shader.uvMatrix.update(), this.calculateUvs()),
            this.calculateVertices(),
            (this.indices = t.indexBuffer.data),
            (this._tintRGB = this.shader._tintRGB),
            (this._texture = this.shader.texture))
          var n = this.material.pluginName
          ;(e.batch.setObjectRenderer(e.plugins[n]), e.plugins[n].render(this))
        }),
        (t.prototype.calculateVertices = function () {
          var e = this.geometry,
            t = e.buffers[0].data
          if (
            e.vertexDirtyId !== this.vertexDirty ||
            this._transformID !== this.transform._worldID
          ) {
            ;((this._transformID = this.transform._worldID),
              this.vertexData.length !== t.length && (this.vertexData = new Float32Array(t.length)))
            for (
              var n = this.transform.worldTransform,
                i = n.a,
                r = n.b,
                o = n.c,
                a = n.d,
                s = n.tx,
                u = n.ty,
                l = this.vertexData,
                c = 0;
              c < l.length / 2;
              c++
            ) {
              var d = t[2 * c],
                h = t[2 * c + 1]
              ;((l[2 * c] = i * d + o * h + s), (l[2 * c + 1] = r * d + a * h + u))
            }
            if (this._roundPixels) {
              var p = Y.RESOLUTION
              for (c = 0; c < l.length; ++c) l[c] = Math.round(((l[c] * p) | 0) / p)
            }
            this.vertexDirty = e.vertexDirtyId
          }
        }),
        (t.prototype.calculateUvs = function () {
          var e = this.geometry.buffers[1]
          this.shader.uvMatrix.isSimple
            ? (this.uvs = e.data)
            : (this.batchUvs || (this.batchUvs = new Vo(e, this.shader.uvMatrix)),
              this.batchUvs.update(),
              (this.uvs = this.batchUvs.data))
        }),
        (t.prototype._calculateBounds = function () {
          ;(this.calculateVertices(),
            this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length))
        }),
        (t.prototype.containsPoint = function (e) {
          if (!this.getBounds().contains(e.x, e.y)) return false
          this.worldTransform.applyInverse(e, Zo)
          for (
            var t = this.geometry.getBuffer("aVertexPosition").data,
              n = zo.points,
              i = this.geometry.getIndex().data,
              r = i.length,
              o = 4 === this.drawMode ? 3 : 1,
              a = 0;
            a + 2 < r;
            a += o
          ) {
            var s = 2 * i[a],
              u = 2 * i[a + 1],
              l = 2 * i[a + 2]
            if (
              ((n[0] = t[s]),
              (n[1] = t[s + 1]),
              (n[2] = t[u]),
              (n[3] = t[u + 1]),
              (n[4] = t[l]),
              (n[5] = t[l + 1]),
              zo.contains(Zo.x, Zo.y))
            )
              return true
          }
          return false
        }),
        (t.prototype.destroy = function (t) {
          ;(e.prototype.destroy.call(this, t),
            this.geometry.refCount--,
            0 === this.geometry.refCount && this.geometry.dispose(),
            (this.geometry = null),
            (this.shader = null),
            (this.state = null),
            (this.uvs = null),
            (this.indices = null),
            (this.vertexData = null))
        }),
        (t.BATCHABLE_SIZE = 100),
        t
      )
    })(dt),
    Wo = (function (e) {
      function t(t, n) {
        var i = this,
          r = {
            uSampler: t,
            alpha: 1,
            uTextureMatrix: qe.IDENTITY,
            uColor: new Float32Array([1, 1, 1, 1]),
          }
        return (
          (n = Object.assign({ tint: 16777215, alpha: 1, pluginName: "batch" }, n)).uniforms &&
            Object.assign(r, n.uniforms),
          ((i =
            e.call(
              this,
              n.program ||
                Jn.from(
                  "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n",
                  "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n",
                ),
              r,
            ) || this)._colorDirty = false),
          (i.uvMatrix = new ii(t)),
          (i.batchable = undefined === n.program),
          (i.pluginName = n.pluginName),
          (i.tint = n.tint),
          (i.alpha = n.alpha),
          i
        )
      }
      return (
        Ho(t, e),
        Object.defineProperty(t.prototype, "texture", {
          get: function () {
            return this.uniforms.uSampler
          },
          set: function (e) {
            this.uniforms.uSampler !== e &&
              ((this.uniforms.uSampler = e), (this.uvMatrix.texture = e))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "alpha", {
          get: function () {
            return this._alpha
          },
          set: function (e) {
            e !== this._alpha && ((this._alpha = e), (this._colorDirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "tint", {
          get: function () {
            return this._tint
          },
          set: function (e) {
            e !== this._tint &&
              ((this._tint = e),
              (this._tintRGB = (e >> 16) + (65280 & e) + ((255 & e) << 16)),
              (this._colorDirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.update = function () {
          if (this._colorDirty) {
            this._colorDirty = false
            var e = this.texture.baseTexture
            he(this._tint, this._alpha, this.uniforms.uColor, e.alphaMode)
          }
          this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
        }),
        t
      )
    })(Qn),
    Xo = (function (e) {
      function t(t, n, i) {
        var r = e.call(this) || this,
          o = new on(t),
          a = new on(n, true),
          s = new on(i, true, true)
        return (
          r
            .addAttribute("aVertexPosition", o, 2, false, D.FLOAT)
            .addAttribute("aTextureCoord", a, 2, false, D.FLOAT)
            .addIndex(s),
          (r._updateId = -1),
          r
        )
      }
      return (
        Ho(t, e),
        Object.defineProperty(t.prototype, "vertexDirtyId", {
          get: function () {
            return this.buffers[0]._updateID
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(dn),
    qo = function (e, t) {
      return (
        (qo =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        qo(e, t)
      )
    }
  var Ko = function () {
      ;((this.info = []),
        (this.common = []),
        (this.page = []),
        (this.char = []),
        (this.kerning = []))
    },
    $o = (function () {
      function e() {}
      return (
        (e.test = function (e) {
          return "string" == typeof e && 0 === e.indexOf("info face=")
        }),
        (e.parse = function (e) {
          var t = e.match(/^[a-z]+\s+.+$/gm),
            n = { info: [], common: [], page: [], char: [], chars: [], kerning: [], kernings: [] }
          for (var i in t) {
            var r = t[i].match(/^[a-z]+/gm)[0],
              o = t[i].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
              a = {}
            for (var s in o) {
              var u = o[s].split("="),
                l = u[0],
                c = u[1].replace(/"/gm, ""),
                d = parseFloat(c),
                h = isNaN(d) ? c : d
              a[l] = h
            }
            n[r].push(a)
          }
          var p = new Ko()
          return (
            n.info.forEach(function (e) {
              return p.info.push({ face: e.face, size: parseInt(e.size, 10) })
            }),
            n.common.forEach(function (e) {
              return p.common.push({ lineHeight: parseInt(e.lineHeight, 10) })
            }),
            n.page.forEach(function (e) {
              return p.page.push({ id: parseInt(e.id, 10), file: e.file })
            }),
            n.char.forEach(function (e) {
              return p.char.push({
                id: parseInt(e.id, 10),
                page: parseInt(e.page, 10),
                x: parseInt(e.x, 10),
                y: parseInt(e.y, 10),
                width: parseInt(e.width, 10),
                height: parseInt(e.height, 10),
                xoffset: parseInt(e.xoffset, 10),
                yoffset: parseInt(e.yoffset, 10),
                xadvance: parseInt(e.xadvance, 10),
              })
            }),
            n.kerning.forEach(function (e) {
              return p.kerning.push({
                first: parseInt(e.first, 10),
                second: parseInt(e.second, 10),
                amount: parseInt(e.amount, 10),
              })
            }),
            p
          )
        }),
        e
      )
    })(),
    Jo = (function () {
      function e() {}
      return (
        (e.test = function (e) {
          return (
            e instanceof XMLDocument &&
            e.getElementsByTagName("page").length &&
            null !== e.getElementsByTagName("info")[0].getAttribute("face")
          )
        }),
        (e.parse = function (e) {
          for (
            var t = new Ko(),
              n = e.getElementsByTagName("info"),
              i = e.getElementsByTagName("common"),
              r = e.getElementsByTagName("page"),
              o = e.getElementsByTagName("char"),
              a = e.getElementsByTagName("kerning"),
              s = 0;
            s < n.length;
            s++
          )
            t.info.push({
              face: n[s].getAttribute("face"),
              size: parseInt(n[s].getAttribute("size"), 10),
            })
          for (s = 0; s < i.length; s++)
            t.common.push({ lineHeight: parseInt(i[s].getAttribute("lineHeight"), 10) })
          for (s = 0; s < r.length; s++)
            t.page.push({
              id: parseInt(r[s].getAttribute("id"), 10) || 0,
              file: r[s].getAttribute("file"),
            })
          for (s = 0; s < o.length; s++) {
            var u = o[s]
            t.char.push({
              id: parseInt(u.getAttribute("id"), 10),
              page: parseInt(u.getAttribute("page"), 10) || 0,
              x: parseInt(u.getAttribute("x"), 10),
              y: parseInt(u.getAttribute("y"), 10),
              width: parseInt(u.getAttribute("width"), 10),
              height: parseInt(u.getAttribute("height"), 10),
              xoffset: parseInt(u.getAttribute("xoffset"), 10),
              yoffset: parseInt(u.getAttribute("yoffset"), 10),
              xadvance: parseInt(u.getAttribute("xadvance"), 10),
            })
          }
          for (s = 0; s < a.length; s++)
            t.kerning.push({
              first: parseInt(a[s].getAttribute("first"), 10),
              second: parseInt(a[s].getAttribute("second"), 10),
              amount: parseInt(a[s].getAttribute("amount"), 10),
            })
          return t
        }),
        e
      )
    })(),
    Qo = (function () {
      function e() {}
      return (
        (e.test = function (e) {
          if ("string" == typeof e && e.indexOf("<font>") > -1) {
            var t = new self.DOMParser().parseFromString(e, "text/xml")
            return Jo.test(t)
          }
          return false
        }),
        (e.parse = function (e) {
          var t = new window.DOMParser().parseFromString(e, "text/xml")
          return Jo.parse(t)
        }),
        e
      )
    })(),
    ea = [$o, Jo, Qo]
  function ta(e) {
    for (var t = 0; t < ea.length; t++) if (ea[t].test(e)) return ea[t]
    return null
  }
  function na(e, t, n, i, r, o, a) {
    var s = n.text,
      u = n.fontProperties
    ;(t.translate(i, r), t.scale(o, o))
    var l = a.strokeThickness / 2,
      c = -a.strokeThickness / 2
    if (
      ((t.font = a.toFontString()),
      (t.lineWidth = a.strokeThickness),
      (t.textBaseline = a.textBaseline),
      (t.lineJoin = a.lineJoin),
      (t.miterLimit = a.miterLimit),
      (t.fillStyle = (function (e, t, n, i, r, o) {
        var a,
          s = n.fill
        if (!Array.isArray(s)) return s
        if (1 === s.length) return s[0]
        var u = n.dropShadow ? n.dropShadowDistance : 0,
          l = n.padding || 0,
          c = Math.ceil(e.width / i) - u - 2 * l,
          d = Math.ceil(e.height / i) - u - 2 * l,
          h = s.slice(),
          p = n.fillGradientStops.slice()
        if (!p.length) for (var f = h.length + 1, _ = 1; _ < f; ++_) p.push(_ / f)
        if (
          (h.unshift(s[0]),
          p.unshift(0),
          h.push(s[s.length - 1]),
          p.push(1),
          n.fillGradientType === to.LINEAR_VERTICAL)
        ) {
          a = t.createLinearGradient(c / 2, l, c / 2, d + l)
          var g = 0,
            m = (o.fontProperties.fontSize + n.strokeThickness) / d
          for (_ = 0; _ < r.length; _++)
            for (var v = o.lineHeight * _, y = 0; y < h.length; y++) {
              var C = v / d + ("number" == typeof p[y] ? p[y] : y / h.length) * m,
                b = Math.max(g, C)
              ;((b = Math.min(b, 1)), a.addColorStop(b, h[y]), (g = b))
            }
        } else {
          a = t.createLinearGradient(l, d / 2, c + l, d / 2)
          var w = h.length + 1,
            x = 1
          for (_ = 0; _ < h.length; _++) {
            var T = undefined
            ;((T = "number" == typeof p[_] ? p[_] : x / w), a.addColorStop(T, h[_]), x++)
          }
        }
        return a
      })(e, t, a, o, [s], n)),
      (t.strokeStyle = a.stroke),
      a.dropShadow)
    ) {
      var d = a.dropShadowColor,
        h = re("number" == typeof d ? d : ae(d)),
        p = a.dropShadowBlur * o,
        f = a.dropShadowDistance * o
      ;((t.shadowColor =
        "rgba(" + 255 * h[0] + "," + 255 * h[1] + "," + 255 * h[2] + "," + a.dropShadowAlpha + ")"),
        (t.shadowBlur = p),
        (t.shadowOffsetX = Math.cos(a.dropShadowAngle) * f),
        (t.shadowOffsetY = Math.sin(a.dropShadowAngle) * f))
    } else
      ((t.shadowColor = "black"), (t.shadowBlur = 0), (t.shadowOffsetX = 0), (t.shadowOffsetY = 0))
    ;(a.stroke && a.strokeThickness && t.strokeText(s, l, c + n.lineHeight - u.descent),
      a.fill && t.fillText(s, l, c + n.lineHeight - u.descent),
      t.setTransform(1, 0, 0, 1, 0, 0),
      (t.fillStyle = "rgba(0, 0, 0, 0)"))
  }
  var ia = (function () {
      function e(e, t, n) {
        var i = e.info[0],
          r = e.common[0],
          o = Be(e.page[0].file),
          a = {}
        ;((this._ownsTextures = n),
          (this.font = i.face),
          (this.size = i.size),
          (this.lineHeight = r.lineHeight / o),
          (this.chars = {}),
          (this.pageTextures = a))
        for (var s = 0; s < e.page.length; s++) {
          var u = e.page[s],
            l = u.id,
            c = u.file
          a[l] = t instanceof Array ? t[s] : t[c]
        }
        for (s = 0; s < e.char.length; s++) {
          var d = e.char[s],
            h = ((l = d.id), d.page),
            p = e.char[s],
            f = p.x,
            _ = p.y,
            g = p.width,
            m = p.height,
            v = p.xoffset,
            y = p.yoffset,
            C = p.xadvance
          ;((_ /= o), (g /= o), (m /= o), (v /= o), (y /= o), (C /= o))
          var b = new He((f /= o) + a[h].frame.x / o, _ + a[h].frame.y / o, g, m)
          this.chars[l] = {
            xOffset: v,
            yOffset: y,
            xAdvance: C,
            kerning: {},
            texture: new Jt(a[h].baseTexture, b),
            page: h,
          }
        }
        for (s = 0; s < e.kerning.length; s++) {
          var w = e.kerning[s],
            x = w.first,
            T = w.second,
            S = w.amount
          ;((x /= o), (T /= o), (S /= o), this.chars[T] && (this.chars[T].kerning[x] = S))
        }
      }
      return (
        (e.prototype.destroy = function () {
          for (var e in this.chars)
            (this.chars[e].texture.destroy(), (this.chars[e].texture = null))
          for (var e in this.pageTextures)
            (this._ownsTextures && this.pageTextures[e].destroy(true), (this.pageTextures[e] = null))
          ;((this.chars = null), (this.pageTextures = null))
        }),
        (e.install = function (t, n, i) {
          var r
          if (t instanceof Ko) r = t
          else {
            var o = ta(t)
            if (!o) throw new Error("Unrecognized data format for font.")
            r = o.parse(t)
          }
          n instanceof Jt && (n = [n])
          var a = new e(r, n, i)
          return ((e.available[a.font] = a), a)
        }),
        (e.uninstall = function (t) {
          var n = e.available[t]
          if (!n) throw new Error("No font found named '" + t + "'")
          ;(n.destroy(), delete e.available[t])
        }),
        (e.from = function (t, n, i) {
          if (!t) throw new Error("[BitmapFont] Property `name` is required.")
          var r = Object.assign({}, e.defaultOptions, i),
            o = r.chars,
            a = r.padding,
            s = r.resolution,
            u = r.textureWidth,
            l = r.textureHeight,
            c = (function (e) {
              "string" == typeof e && (e = [e])
              for (var t = [], n = 0, i = e.length; n < i; n++) {
                var r = e[n]
                if (Array.isArray(r)) {
                  if (2 !== r.length)
                    throw new Error(
                      "[BitmapFont]: Invalid character range length, expecting 2 got " +
                        r.length +
                        ".",
                    )
                  var o = r[0].charCodeAt(0),
                    a = r[1].charCodeAt(0)
                  if (a < o) throw new Error("[BitmapFont]: Invalid character range.")
                  for (var s = o, u = a; s <= u; s++) t.push(String.fromCharCode(s))
                } else t.push.apply(t, r.split(""))
              }
              if (0 === t.length)
                throw new Error("[BitmapFont]: Empty set when resolving characters.")
              return t
            })(o),
            d = n instanceof uo ? n : new uo(n),
            h = u,
            p = new Ko()
          ;((p.info[0] = { face: d.fontFamily, size: d.fontSize }),
            (p.common[0] = { lineHeight: d.fontSize }))
          for (var f, _, g, m = 0, v = 0, y = 0, C = [], b = 0; b < c.length; b++) {
            f ||
              (((f = document.createElement("canvas")).width = u),
              (f.height = l),
              (_ = f.getContext("2d")),
              (g = new Nt(f, { resolution: s })),
              C.push(new Jt(g)),
              p.page.push({ id: C.length - 1, file: "" }))
            var w = po.measureText(c[b], d, false, f),
              x = w.width,
              T = Math.ceil(w.height),
              S = Math.ceil(("italic" === d.fontStyle ? 2 : 1) * x)
            if (v >= l - T * s) {
              if (0 === v)
                throw new Error(
                  "[BitmapFont] textureHeight " +
                    l +
                    "px is too small for " +
                    d.fontSize +
                    "px fonts",
                )
              ;(--b, (f = null), (_ = null), (g = null), (v = 0), (m = 0), (y = 0))
            } else if (((y = Math.max(T + w.fontProperties.descent, y)), S * s + m >= h))
              (--b, (v += y * s), (v = Math.ceil(v)), (m = 0), (y = 0))
            else {
              na(f, _, w, m, v, s, d)
              var L = w.text.charCodeAt(0)
              ;(p.char.push({
                id: L,
                page: C.length - 1,
                x: m / s,
                y: v / s,
                width: S,
                height: T,
                xoffset: 0,
                yoffset: 0,
                xadvance: Math.ceil(
                  x -
                    (d.dropShadow ? d.dropShadowDistance : 0) -
                    (d.stroke ? d.strokeThickness : 0),
                ),
              }),
                (m += (S + 2 * a) * s),
                (m = Math.ceil(m)))
            }
          }
          var E = new e(p, C, true)
          return (undefined !== e.available[t] && e.uninstall(t), (e.available[t] = E), E)
        }),
        (e.ALPHA = [["a", "z"], ["A", "Z"], " "]),
        (e.NUMERIC = [["0", "9"]]),
        (e.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "]),
        (e.ASCII = [[" ", "~"]]),
        (e.defaultOptions = {
          resolution: 1,
          textureWidth: 512,
          textureHeight: 512,
          padding: 4,
          chars: e.ALPHANUMERIC,
        }),
        (e.available = {}),
        e
      )
    })(),
    ra = [],
    oa = [],
    aa = (function (e) {
      function t(n, i) {
        undefined === i && (i = {})
        var r = e.call(this) || this
        ;((r._tint = 16777215),
          i.font &&
            (Se("5.3.0", "PIXI.BitmapText constructor style.font property is deprecated."),
            r._upgradeStyle(i)))
        var o = Object.assign({}, t.styleDefaults, i),
          a = o.align,
          s = o.tint,
          u = o.maxWidth,
          l = o.letterSpacing,
          c = o.fontName,
          d = o.fontSize
        if (!ia.available[c]) throw new Error('Missing BitmapFont "' + c + '"')
        return (
          (r._activePagesMeshData = []),
          (r._textWidth = 0),
          (r._textHeight = 0),
          (r._align = a),
          (r._tint = s),
          (r._fontName = c),
          (r._fontSize = d || ia.available[c].size),
          (r._text = n),
          (r._maxWidth = u),
          (r._maxLineHeight = 0),
          (r._letterSpacing = l),
          (r._anchor = new Xe(
            function () {
              r.dirty = true
            },
            r,
            0,
            0,
          )),
          (r._roundPixels = Y.ROUND_PIXELS),
          (r.dirty = true),
          (r._textureCache = {}),
          r
        )
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(qo(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        (t.prototype.updateText = function () {
          for (
            var e,
              t = ia.available[this._fontName],
              n = this._fontSize / t.size,
              i = new We(),
              r = [],
              o = [],
              a = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ",
              s = a.length,
              u = (this._maxWidth * t.size) / this._fontSize,
              l = null,
              c = 0,
              d = 0,
              h = 0,
              p = -1,
              f = 0,
              _ = 0,
              g = 0,
              m = 0;
            m < s;
            m++
          ) {
            var v = a.charCodeAt(m),
              y = a.charAt(m)
            if ((/(?:\s)/.test(y) && ((p = m), (f = c)), "\r" !== y && "\n" !== y)) {
              var C = t.chars[v]
              if (C) {
                l && C.kerning[l] && (i.x += C.kerning[l])
                var b = oa.pop() || { texture: Jt.EMPTY, line: 0, charCode: 0, position: new We() }
                ;((b.texture = C.texture),
                  (b.line = h),
                  (b.charCode = v),
                  (b.position.x = i.x + C.xOffset + this._letterSpacing / 2),
                  (b.position.y = i.y + C.yOffset),
                  r.push(b),
                  (i.x += C.xAdvance + this._letterSpacing),
                  (c = i.x),
                  (g = Math.max(g, C.yOffset + C.texture.height)),
                  (l = v),
                  -1 !== p &&
                    u > 0 &&
                    i.x > u &&
                    (Ce(r, 1 + p - ++_, 1 + m - p),
                    (m = p),
                    (p = -1),
                    o.push(f),
                    (d = Math.max(d, f)),
                    h++,
                    (i.x = 0),
                    (i.y += t.lineHeight),
                    (l = null)))
              }
            } else
              (o.push(c),
                (d = Math.max(d, c)),
                ++h,
                ++_,
                (i.x = 0),
                (i.y += t.lineHeight),
                (l = null))
          }
          var w = a.charAt(a.length - 1)
          "\r" !== w && "\n" !== w && (/(?:\s)/.test(w) && (c = f), o.push(c), (d = Math.max(d, c)))
          var x = []
          for (m = 0; m <= h; m++) {
            var T = 0
            ;("right" === this._align
              ? (T = d - o[m])
              : "center" === this._align && (T = (d - o[m]) / 2),
              x.push(T))
          }
          var S = r.length,
            L = {},
            E = [],
            A = this._activePagesMeshData
          for (m = 0; m < A.length; m++) ra.push(A[m])
          for (m = 0; m < S; m++) {
            var I = (F = r[m].texture).baseTexture.uid
            if (!L[I]) {
              if (!(z = ra.pop())) {
                var M = new Xo(),
                  P = new Wo(Jt.EMPTY)
                z = {
                  index: 0,
                  indexCount: 0,
                  vertexCount: 0,
                  uvsCount: 0,
                  total: 0,
                  mesh: new Yo(M, P),
                  vertices: null,
                  uvs: null,
                  indices: null,
                }
              }
              ;((z.index = 0),
                (z.indexCount = 0),
                (z.vertexCount = 0),
                (z.uvsCount = 0),
                (z.total = 0))
              var O = this._textureCache
              ;((O[I] = O[I] || new Jt(F.baseTexture)),
                (z.mesh.texture = O[I]),
                (z.mesh.tint = this._tint),
                E.push(z),
                (L[I] = z))
            }
            L[I].total++
          }
          for (m = 0; m < A.length; m++) -1 === E.indexOf(A[m]) && this.removeChild(A[m].mesh)
          for (m = 0; m < E.length; m++) E[m].mesh.parent !== this && this.addChild(E[m].mesh)
          for (var m in ((this._activePagesMeshData = E), L)) {
            var R = (z = L[m]).total
            if (
              !((null === (e = z.indices) || undefined === e ? undefined : e.length) > 6 * R) ||
              z.vertices.length < 2 * Yo.BATCHABLE_SIZE
            )
              ((z.vertices = new Float32Array(8 * R)),
                (z.uvs = new Float32Array(8 * R)),
                (z.indices = new Uint16Array(6 * R)))
            else for (var k = z.total, N = z.vertices, D = 4 * k * 2; D < N.length; D++) N[D] = 0
            z.mesh.size = 6 * R
          }
          for (m = 0; m < S; m++) {
            var B = (y = r[m]).position.x + x[y.line]
            this._roundPixels && (B = Math.round(B))
            var F,
              U = B * n,
              G = y.position.y * n,
              j = L[(F = y.texture).baseTexture.uid],
              H = F.frame,
              V = F._uvs,
              Z = j.index++
            ;((j.indices[6 * Z + 0] = 0 + 4 * Z),
              (j.indices[6 * Z + 1] = 1 + 4 * Z),
              (j.indices[6 * Z + 2] = 2 + 4 * Z),
              (j.indices[6 * Z + 3] = 0 + 4 * Z),
              (j.indices[6 * Z + 4] = 2 + 4 * Z),
              (j.indices[6 * Z + 5] = 3 + 4 * Z),
              (j.vertices[8 * Z + 0] = U),
              (j.vertices[8 * Z + 1] = G),
              (j.vertices[8 * Z + 2] = U + H.width * n),
              (j.vertices[8 * Z + 3] = G),
              (j.vertices[8 * Z + 4] = U + H.width * n),
              (j.vertices[8 * Z + 5] = G + H.height * n),
              (j.vertices[8 * Z + 6] = U),
              (j.vertices[8 * Z + 7] = G + H.height * n),
              (j.uvs[8 * Z + 0] = V.x0),
              (j.uvs[8 * Z + 1] = V.y0),
              (j.uvs[8 * Z + 2] = V.x1),
              (j.uvs[8 * Z + 3] = V.y1),
              (j.uvs[8 * Z + 4] = V.x2),
              (j.uvs[8 * Z + 5] = V.y2),
              (j.uvs[8 * Z + 6] = V.x3),
              (j.uvs[8 * Z + 7] = V.y3))
          }
          for (var m in ((this._textWidth = d * n),
          (this._textHeight = (i.y + t.lineHeight) * n),
          L)) {
            var z = L[m]
            if (0 !== this.anchor.x || 0 !== this.anchor.y)
              for (
                var Y = 0,
                  W = this._textWidth * this.anchor.x,
                  X = this._textHeight * this.anchor.y,
                  q = 0;
                q < z.total;
                q++
              )
                ((z.vertices[Y++] -= W),
                  (z.vertices[Y++] -= X),
                  (z.vertices[Y++] -= W),
                  (z.vertices[Y++] -= X),
                  (z.vertices[Y++] -= W),
                  (z.vertices[Y++] -= X),
                  (z.vertices[Y++] -= W),
                  (z.vertices[Y++] -= X))
            this._maxLineHeight = g * n
            var K = z.mesh.geometry.getBuffer("aVertexPosition"),
              $ = z.mesh.geometry.getBuffer("aTextureCoord"),
              J = z.mesh.geometry.getIndex()
            ;((K.data = z.vertices),
              ($.data = z.uvs),
              (J.data = z.indices),
              K.update(),
              $.update(),
              J.update())
          }
          for (m = 0; m < r.length; m++) oa.push(r[m])
        }),
        (t.prototype.updateTransform = function () {
          ;(this.validate(), this.containerUpdateTransform())
        }),
        (t.prototype.getLocalBounds = function () {
          return (this.validate(), e.prototype.getLocalBounds.call(this))
        }),
        (t.prototype.validate = function () {
          this.dirty && (this.updateText(), (this.dirty = false))
        }),
        Object.defineProperty(t.prototype, "tint", {
          get: function () {
            return this._tint
          },
          set: function (e) {
            if (this._tint !== e) {
              this._tint = e
              for (var t = 0; t < this._activePagesMeshData.length; t++)
                this._activePagesMeshData[t].mesh.tint = e
            }
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "align", {
          get: function () {
            return this._align
          },
          set: function (e) {
            this._align !== e && ((this._align = e), (this.dirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "fontName", {
          get: function () {
            return this._fontName
          },
          set: function (e) {
            if (!ia.available[e]) throw new Error('Missing BitmapFont "' + e + '"')
            this._fontName !== e && ((this._fontName = e), (this.dirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "fontSize", {
          get: function () {
            return this._fontSize
          },
          set: function (e) {
            this._fontSize !== e && ((this._fontSize = e), (this.dirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "anchor", {
          get: function () {
            return this._anchor
          },
          set: function (e) {
            "number" == typeof e ? this._anchor.set(e) : this._anchor.copyFrom(e)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "text", {
          get: function () {
            return this._text
          },
          set: function (e) {
            ;((e = String(null == e ? "" : e)),
              this._text !== e && ((this._text = e), (this.dirty = true)))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "maxWidth", {
          get: function () {
            return this._maxWidth
          },
          set: function (e) {
            this._maxWidth !== e && ((this._maxWidth = e), (this.dirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "maxLineHeight", {
          get: function () {
            return (this.validate(), this._maxLineHeight)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "textWidth", {
          get: function () {
            return (this.validate(), this._textWidth)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "letterSpacing", {
          get: function () {
            return this._letterSpacing
          },
          set: function (e) {
            this._letterSpacing !== e && ((this._letterSpacing = e), (this.dirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "roundPixels", {
          get: function () {
            return this._roundPixels
          },
          set: function (e) {
            e !== this._roundPixels && ((this._roundPixels = e), (this.dirty = true))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "textHeight", {
          get: function () {
            return (this.validate(), this._textHeight)
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype._upgradeStyle = function (e) {
          if ("string" == typeof e.font) {
            var t = e.font.split(" ")
            ;((e.fontName = 1 === t.length ? t[0] : t.slice(1).join(" ")),
              t.length >= 2 && (e.fontSize = parseInt(t[0], 10)))
          } else
            ((e.fontName = e.font.name),
              (e.fontSize =
                "number" == typeof e.font.size ? e.font.size : parseInt(e.font.size, 10)))
        }),
        (t.prototype.destroy = function (t) {
          var n = this._textureCache
          for (var i in n) {
            ;(n[i].destroy(), delete n[i])
          }
          ;((this._textureCache = null), e.prototype.destroy.call(this, t))
        }),
        (t.registerFont = function (e, t) {
          return (
            Se("5.3.0", "PIXI.BitmapText.registerFont is deprecated, use PIXI.BitmapFont.install"),
            ia.install(e, t)
          )
        }),
        Object.defineProperty(t, "fonts", {
          get: function () {
            return (
              Se("5.3.0", "PIXI.BitmapText.fonts is deprecated, use PIXI.BitmapFont.available"),
              ia.available
            )
          },
          enumerable: false,
          configurable: true,
        }),
        (t.styleDefaults = { align: "left", tint: 16777215, maxWidth: 0, letterSpacing: 0 }),
        t
      )
    })(dt),
    sa = (function () {
      function e() {}
      return (
        (e.add = function () {
          dr.setExtensionXhrType("fnt", dr.XHR_RESPONSE_TYPE.TEXT)
        }),
        (e.use = function (t, n) {
          var i = ta(t.data)
          if (i)
            for (
              var r = e.getBaseUrl(this, t),
                o = i.parse(t.data),
                a = {},
                s = function (e) {
                  ;((a[e.metadata.pageFile] = e.texture),
                    Object.keys(a).length === o.page.length &&
                      ((t.bitmapFont = ia.install(o, a, true)), n()))
                },
                u = 0;
              u < o.page.length;
              ++u
            ) {
              var l = o.page[u].file,
                c = r + l,
                d = false
              for (var h in this.resources) {
                var p = this.resources[h]
                if (p.url === c) {
                  ;((p.metadata.pageFile = l),
                    p.texture ? s(p) : p.onAfterMiddleware.add(s),
                    (d = true))
                  break
                }
              }
              if (!d) {
                var f = {
                  crossOrigin: t.crossOrigin,
                  loadType: dr.LOAD_TYPE.IMAGE,
                  metadata: Object.assign({ pageFile: l }, t.metadata.imageMetadata),
                  parentResource: t,
                }
                this.add(c, f, s)
              }
            }
          else n()
        }),
        (e.getBaseUrl = function (t, n) {
          var i = n.isDataUrl ? "" : e.dirname(n.url)
          return (
            n.isDataUrl &&
              ("." === i && (i = ""),
              t.baseUrl && i && "/" === t.baseUrl.charAt(t.baseUrl.length - 1) && (i += "/")),
            (i = i.replace(t.baseUrl, "")) && "/" !== i.charAt(i.length - 1) && (i += "/"),
            i
          )
        }),
        (e.dirname = function (e) {
          var t = e
            .replace(/\\/g, "/")
            .replace(/\/$/, "")
            .replace(/\/[^\/]*$/, "")
          return t === e ? "." : "" === t ? "/" : t
        }),
        e
      )
    })(),
    ua = function (e, t) {
      return (
        (ua =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        ua(e, t)
      )
    }
  var la = (function (e) {
      function t(t) {
        undefined === t && (t = 1)
        var n =
          e.call(
            this,
            Ai,
            "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",
            { uAlpha: 1 },
          ) || this
        return ((n.alpha = t), n)
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(ua(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        Object.defineProperty(t.prototype, "alpha", {
          get: function () {
            return this.uniforms.uAlpha
          },
          set: function (e) {
            this.uniforms.uAlpha = e
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(ti),
    ca = function (e, t) {
      return (
        (ca =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        ca(e, t)
      )
    }
  function da(e, t) {
    function n() {
      this.constructor = e
    }
    ;(ca(e, t),
      (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var ha,
    pa,
    fa,
    _a,
    ga,
    ma,
    va,
    ya,
    Ca,
    ba,
    wa,
    xa,
    Ta,
    Sa,
    La,
    Ea,
    Aa,
    Ia = {
      5: [0.153388, 0.221461, 0.250301],
      7: [0.071303, 0.131514, 0.189879, 0.214607],
      9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
      11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
      13: [0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641],
      15: [489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697, 0.197448],
    },
    Ma = [
      "varying vec2 vBlurTexCoords[%size%];",
      "uniform sampler2D uSampler;",
      "void main(void)",
      "{",
      "    gl_FragColor = vec4(0.0);",
      "    %blur%",
      "}",
    ].join("\n")
  ;(!(function (e) {
    ;((e[(e.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
      (e[(e.WEBGL = 1)] = "WEBGL"),
      (e[(e.WEBGL2 = 2)] = "WEBGL2"))
  })(ha || (ha = {})),
    (function (e) {
      ;((e[(e.UNKNOWN = 0)] = "UNKNOWN"),
        (e[(e.WEBGL = 1)] = "WEBGL"),
        (e[(e.CANVAS = 2)] = "CANVAS"))
    })(pa || (pa = {})),
    (function (e) {
      ;((e[(e.COLOR = 16384)] = "COLOR"),
        (e[(e.DEPTH = 256)] = "DEPTH"),
        (e[(e.STENCIL = 1024)] = "STENCIL"))
    })(fa || (fa = {})),
    (function (e) {
      ;((e[(e.NORMAL = 0)] = "NORMAL"),
        (e[(e.ADD = 1)] = "ADD"),
        (e[(e.MULTIPLY = 2)] = "MULTIPLY"),
        (e[(e.SCREEN = 3)] = "SCREEN"),
        (e[(e.OVERLAY = 4)] = "OVERLAY"),
        (e[(e.DARKEN = 5)] = "DARKEN"),
        (e[(e.LIGHTEN = 6)] = "LIGHTEN"),
        (e[(e.COLOR_DODGE = 7)] = "COLOR_DODGE"),
        (e[(e.COLOR_BURN = 8)] = "COLOR_BURN"),
        (e[(e.HARD_LIGHT = 9)] = "HARD_LIGHT"),
        (e[(e.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
        (e[(e.DIFFERENCE = 11)] = "DIFFERENCE"),
        (e[(e.EXCLUSION = 12)] = "EXCLUSION"),
        (e[(e.HUE = 13)] = "HUE"),
        (e[(e.SATURATION = 14)] = "SATURATION"),
        (e[(e.COLOR = 15)] = "COLOR"),
        (e[(e.LUMINOSITY = 16)] = "LUMINOSITY"),
        (e[(e.NORMAL_NPM = 17)] = "NORMAL_NPM"),
        (e[(e.ADD_NPM = 18)] = "ADD_NPM"),
        (e[(e.SCREEN_NPM = 19)] = "SCREEN_NPM"),
        (e[(e.NONE = 20)] = "NONE"),
        (e[(e.SRC_OVER = 0)] = "SRC_OVER"),
        (e[(e.SRC_IN = 21)] = "SRC_IN"),
        (e[(e.SRC_OUT = 22)] = "SRC_OUT"),
        (e[(e.SRC_ATOP = 23)] = "SRC_ATOP"),
        (e[(e.DST_OVER = 24)] = "DST_OVER"),
        (e[(e.DST_IN = 25)] = "DST_IN"),
        (e[(e.DST_OUT = 26)] = "DST_OUT"),
        (e[(e.DST_ATOP = 27)] = "DST_ATOP"),
        (e[(e.ERASE = 26)] = "ERASE"),
        (e[(e.SUBTRACT = 28)] = "SUBTRACT"),
        (e[(e.XOR = 29)] = "XOR"))
    })(_a || (_a = {})),
    (function (e) {
      ;((e[(e.POINTS = 0)] = "POINTS"),
        (e[(e.LINES = 1)] = "LINES"),
        (e[(e.LINE_LOOP = 2)] = "LINE_LOOP"),
        (e[(e.LINE_STRIP = 3)] = "LINE_STRIP"),
        (e[(e.TRIANGLES = 4)] = "TRIANGLES"),
        (e[(e.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
        (e[(e.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN"))
    })(ga || (ga = {})),
    (function (e) {
      ;((e[(e.RGBA = 6408)] = "RGBA"),
        (e[(e.RGB = 6407)] = "RGB"),
        (e[(e.ALPHA = 6406)] = "ALPHA"),
        (e[(e.LUMINANCE = 6409)] = "LUMINANCE"),
        (e[(e.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
        (e[(e.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
        (e[(e.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL"))
    })(ma || (ma = {})),
    (function (e) {
      ;((e[(e.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
        (e[(e.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
        (e[(e.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
        (e[(e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] = "TEXTURE_CUBE_MAP_POSITIVE_X"),
        (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] = "TEXTURE_CUBE_MAP_NEGATIVE_X"),
        (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] = "TEXTURE_CUBE_MAP_POSITIVE_Y"),
        (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] = "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
        (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] = "TEXTURE_CUBE_MAP_POSITIVE_Z"),
        (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] = "TEXTURE_CUBE_MAP_NEGATIVE_Z"))
    })(va || (va = {})),
    (function (e) {
      ;((e[(e.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
        (e[(e.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
        (e[(e.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
        (e[(e.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
        (e[(e.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
        (e[(e.FLOAT = 5126)] = "FLOAT"),
        (e[(e.HALF_FLOAT = 36193)] = "HALF_FLOAT"))
    })(ya || (ya = {})),
    (function (e) {
      ;((e[(e.NEAREST = 0)] = "NEAREST"), (e[(e.LINEAR = 1)] = "LINEAR"))
    })(Ca || (Ca = {})),
    (function (e) {
      ;((e[(e.CLAMP = 33071)] = "CLAMP"),
        (e[(e.REPEAT = 10497)] = "REPEAT"),
        (e[(e.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT"))
    })(ba || (ba = {})),
    (function (e) {
      ;((e[(e.OFF = 0)] = "OFF"), (e[(e.POW2 = 1)] = "POW2"), (e[(e.ON = 2)] = "ON"))
    })(wa || (wa = {})),
    (function (e) {
      ;((e[(e.NPM = 0)] = "NPM"),
        (e[(e.UNPACK = 1)] = "UNPACK"),
        (e[(e.PMA = 2)] = "PMA"),
        (e[(e.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
        (e[(e.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
        (e[(e.PREMULTIPLY_ALPHA = 2)] = "PREMULTIPLY_ALPHA"))
    })(xa || (xa = {})),
    (function (e) {
      ;((e[(e.NO = 0)] = "NO"),
        (e[(e.YES = 1)] = "YES"),
        (e[(e.AUTO = 2)] = "AUTO"),
        (e[(e.BLEND = 0)] = "BLEND"),
        (e[(e.CLEAR = 1)] = "CLEAR"),
        (e[(e.BLIT = 2)] = "BLIT"))
    })(Ta || (Ta = {})),
    (function (e) {
      ;((e[(e.AUTO = 0)] = "AUTO"), (e[(e.MANUAL = 1)] = "MANUAL"))
    })(Sa || (Sa = {})),
    (function (e) {
      ;((e.LOW = "lowp"), (e.MEDIUM = "mediump"), (e.HIGH = "highp"))
    })(La || (La = {})),
    (function (e) {
      ;((e[(e.NONE = 0)] = "NONE"),
        (e[(e.SCISSOR = 1)] = "SCISSOR"),
        (e[(e.STENCIL = 2)] = "STENCIL"),
        (e[(e.SPRITE = 3)] = "SPRITE"))
    })(Ea || (Ea = {})),
    (function (e) {
      ;((e[(e.NONE = 0)] = "NONE"),
        (e[(e.LOW = 2)] = "LOW"),
        (e[(e.MEDIUM = 4)] = "MEDIUM"),
        (e[(e.HIGH = 8)] = "HIGH"))
    })(Aa || (Aa = {})))
  var Pa = (function (e) {
      function t(t, n, i, r, o) {
        ;(undefined === n && (n = 8),
          undefined === i && (i = 4),
          undefined === r && (r = Y.FILTER_RESOLUTION),
          undefined === o && (o = 5))
        var a = this,
          s = (function (e, t) {
            var n,
              i = Math.ceil(e / 2),
              r =
                "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }",
              o = ""
            n = t
              ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);"
              : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);"
            for (var a = 0; a < e; a++) {
              var s = n.replace("%index%", a.toString())
              ;((o += s = s.replace("%sampleIndex%", a - (i - 1) + ".0")), (o += "\n"))
            }
            return (r = r.replace("%blur%", o)).replace("%size%", e.toString())
          })(o, t),
          u = (function (e) {
            for (var t, n = Ia[e], i = n.length, r = Ma, o = "", a = 0; a < e; a++) {
              var s =
                "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace(
                  "%index%",
                  a.toString(),
                )
              ;((t = a),
                a >= i && (t = e - a - 1),
                (o += s = s.replace("%value%", n[t].toString())),
                (o += "\n"))
            }
            return (r = r.replace("%blur%", o)).replace("%size%", e.toString())
          })(o)
        return (
          ((a = e.call(this, s, u) || this).horizontal = t),
          (a.resolution = r),
          (a._quality = 0),
          (a.quality = i),
          (a.blur = n),
          a
        )
      }
      return (
        da(t, e),
        (t.prototype.apply = function (e, t, n, i) {
          if (
            (n
              ? this.horizontal
                ? (this.uniforms.strength = (1 / n.width) * (n.width / t.width))
                : (this.uniforms.strength = (1 / n.height) * (n.height / t.height))
              : this.horizontal
                ? (this.uniforms.strength = (1 / e.renderer.width) * (e.renderer.width / t.width))
                : (this.uniforms.strength =
                    (1 / e.renderer.height) * (e.renderer.height / t.height)),
            (this.uniforms.strength *= this.strength),
            (this.uniforms.strength /= this.passes),
            1 === this.passes)
          )
            e.applyFilter(this, t, n, i)
          else {
            var r = e.getFilterTexture(),
              o = e.renderer,
              a = t,
              s = r
            ;((this.state.blend = false), e.applyFilter(this, a, s, Ta.CLEAR))
            for (var u = 1; u < this.passes - 1; u++) {
              ;(e.bindAndClear(a, Ta.BLIT), (this.uniforms.uSampler = s))
              var l = s
              ;((s = a), (a = l), o.shader.bind(this), o.geometry.draw(5))
            }
            ;((this.state.blend = true), e.applyFilter(this, s, n, i), e.returnFilterTexture(r))
          }
        }),
        Object.defineProperty(t.prototype, "blur", {
          get: function () {
            return this.strength
          },
          set: function (e) {
            ;((this.padding = 1 + 2 * Math.abs(e)), (this.strength = e))
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "quality", {
          get: function () {
            return this._quality
          },
          set: function (e) {
            ;((this._quality = e), (this.passes = e))
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(ti),
    Oa = (function (e) {
      function t(t, n, i, r) {
        ;(undefined === t && (t = 8),
          undefined === n && (n = 4),
          undefined === i && (i = Y.FILTER_RESOLUTION),
          undefined === r && (r = 5))
        var o = e.call(this) || this
        return (
          (o.blurXFilter = new Pa(true, t, n, i, r)),
          (o.blurYFilter = new Pa(false, t, n, i, r)),
          (o.resolution = i),
          (o.quality = n),
          (o.blur = t),
          (o.repeatEdgePixels = false),
          o
        )
      }
      return (
        da(t, e),
        (t.prototype.apply = function (e, t, n, i) {
          var r = Math.abs(this.blurXFilter.strength),
            o = Math.abs(this.blurYFilter.strength)
          if (r && o) {
            var a = e.getFilterTexture()
            ;(this.blurXFilter.apply(e, t, a, Ta.CLEAR),
              this.blurYFilter.apply(e, a, n, i),
              e.returnFilterTexture(a))
          } else o ? this.blurYFilter.apply(e, t, n, i) : this.blurXFilter.apply(e, t, n, i)
        }),
        (t.prototype.updatePadding = function () {
          this._repeatEdgePixels
            ? (this.padding = 0)
            : (this.padding =
                2 *
                Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)))
        }),
        Object.defineProperty(t.prototype, "blur", {
          get: function () {
            return this.blurXFilter.blur
          },
          set: function (e) {
            ;((this.blurXFilter.blur = this.blurYFilter.blur = e), this.updatePadding())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "quality", {
          get: function () {
            return this.blurXFilter.quality
          },
          set: function (e) {
            this.blurXFilter.quality = this.blurYFilter.quality = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "blurX", {
          get: function () {
            return this.blurXFilter.blur
          },
          set: function (e) {
            ;((this.blurXFilter.blur = e), this.updatePadding())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "blurY", {
          get: function () {
            return this.blurYFilter.blur
          },
          set: function (e) {
            ;((this.blurYFilter.blur = e), this.updatePadding())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "blendMode", {
          get: function () {
            return this.blurYFilter.blendMode
          },
          set: function (e) {
            this.blurYFilter.blendMode = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "repeatEdgePixels", {
          get: function () {
            return this._repeatEdgePixels
          },
          set: function (e) {
            ;((this._repeatEdgePixels = e), this.updatePadding())
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(ti),
    Ra = function (e, t) {
      return (
        (Ra =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        Ra(e, t)
      )
    }
  var ka = (function (e) {
    function t() {
      var t = this,
        n = {
          m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
          uAlpha: 1,
        }
      return (
        ((t =
          e.call(
            this,
            Ii,
            "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",
            n,
          ) || this).alpha = 1),
        t
      )
    }
    return (
      (function (e, t) {
        function n() {
          this.constructor = e
        }
        ;(Ra(e, t),
          (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
      })(t, e),
      (t.prototype._loadMatrix = function (e, t) {
        undefined === t && (t = false)
        var n = e
        ;(t && (this._multiply(n, this.uniforms.m, e), (n = this._colorMatrix(n))),
          (this.uniforms.m = n))
      }),
      (t.prototype._multiply = function (e, t, n) {
        return (
          (e[0] = t[0] * n[0] + t[1] * n[5] + t[2] * n[10] + t[3] * n[15]),
          (e[1] = t[0] * n[1] + t[1] * n[6] + t[2] * n[11] + t[3] * n[16]),
          (e[2] = t[0] * n[2] + t[1] * n[7] + t[2] * n[12] + t[3] * n[17]),
          (e[3] = t[0] * n[3] + t[1] * n[8] + t[2] * n[13] + t[3] * n[18]),
          (e[4] = t[0] * n[4] + t[1] * n[9] + t[2] * n[14] + t[3] * n[19] + t[4]),
          (e[5] = t[5] * n[0] + t[6] * n[5] + t[7] * n[10] + t[8] * n[15]),
          (e[6] = t[5] * n[1] + t[6] * n[6] + t[7] * n[11] + t[8] * n[16]),
          (e[7] = t[5] * n[2] + t[6] * n[7] + t[7] * n[12] + t[8] * n[17]),
          (e[8] = t[5] * n[3] + t[6] * n[8] + t[7] * n[13] + t[8] * n[18]),
          (e[9] = t[5] * n[4] + t[6] * n[9] + t[7] * n[14] + t[8] * n[19] + t[9]),
          (e[10] = t[10] * n[0] + t[11] * n[5] + t[12] * n[10] + t[13] * n[15]),
          (e[11] = t[10] * n[1] + t[11] * n[6] + t[12] * n[11] + t[13] * n[16]),
          (e[12] = t[10] * n[2] + t[11] * n[7] + t[12] * n[12] + t[13] * n[17]),
          (e[13] = t[10] * n[3] + t[11] * n[8] + t[12] * n[13] + t[13] * n[18]),
          (e[14] = t[10] * n[4] + t[11] * n[9] + t[12] * n[14] + t[13] * n[19] + t[14]),
          (e[15] = t[15] * n[0] + t[16] * n[5] + t[17] * n[10] + t[18] * n[15]),
          (e[16] = t[15] * n[1] + t[16] * n[6] + t[17] * n[11] + t[18] * n[16]),
          (e[17] = t[15] * n[2] + t[16] * n[7] + t[17] * n[12] + t[18] * n[17]),
          (e[18] = t[15] * n[3] + t[16] * n[8] + t[17] * n[13] + t[18] * n[18]),
          (e[19] = t[15] * n[4] + t[16] * n[9] + t[17] * n[14] + t[18] * n[19] + t[19]),
          e
        )
      }),
      (t.prototype._colorMatrix = function (e) {
        var t = new Float32Array(e)
        return ((t[4] /= 255), (t[9] /= 255), (t[14] /= 255), (t[19] /= 255), t)
      }),
      (t.prototype.brightness = function (e, t) {
        var n = [e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 1, 0]
        this._loadMatrix(n, t)
      }),
      (t.prototype.greyscale = function (e, t) {
        var n = [e, e, e, 0, 0, e, e, e, 0, 0, e, e, e, 0, 0, 0, 0, 0, 1, 0]
        this._loadMatrix(n, t)
      }),
      (t.prototype.blackAndWhite = function (e) {
        this._loadMatrix(
          [0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0, 0, 0, 1, 0],
          e,
        )
      }),
      (t.prototype.hue = function (e, t) {
        e = ((e || 0) / 180) * Math.PI
        var n = Math.cos(e),
          i = Math.sin(e),
          r = 1 / 3,
          o = (0, Math.sqrt)(r),
          a = [
            n + (1 - n) * r,
            r * (1 - n) - o * i,
            r * (1 - n) + o * i,
            0,
            0,
            r * (1 - n) + o * i,
            n + r * (1 - n),
            r * (1 - n) - o * i,
            0,
            0,
            r * (1 - n) - o * i,
            r * (1 - n) + o * i,
            n + r * (1 - n),
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ]
        this._loadMatrix(a, t)
      }),
      (t.prototype.contrast = function (e, t) {
        var n = (e || 0) + 1,
          i = -0.5 * (n - 1),
          r = [n, 0, 0, 0, i, 0, n, 0, 0, i, 0, 0, n, 0, i, 0, 0, 0, 1, 0]
        this._loadMatrix(r, t)
      }),
      (t.prototype.saturate = function (e, t) {
        undefined === e && (e = 0)
        var n = (2 * e) / 3 + 1,
          i = -0.5 * (n - 1),
          r = [n, i, i, 0, 0, i, n, i, 0, 0, i, i, n, 0, 0, 0, 0, 0, 1, 0]
        this._loadMatrix(r, t)
      }),
      (t.prototype.desaturate = function () {
        this.saturate(-1)
      }),
      (t.prototype.negative = function (e) {
        this._loadMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0], e)
      }),
      (t.prototype.sepia = function (e) {
        this._loadMatrix(
          [
            0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999, 0, 0, 0.272,
            0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0,
          ],
          e,
        )
      }),
      (t.prototype.technicolor = function (e) {
        this._loadMatrix(
          [
            1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0, 11.793603434377337,
            -0.3087833385928097, 1.7658908555458428, -0.10601743074722245, 0, -70.35205161461398,
            -0.231103377548616, -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0,
            0, 1, 0,
          ],
          e,
        )
      }),
      (t.prototype.polaroid = function (e) {
        this._loadMatrix(
          [
            1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016, -0.016, 1.483, 0, 0,
            0, 0, 0, 1, 0,
          ],
          e,
        )
      }),
      (t.prototype.toBGR = function (e) {
        this._loadMatrix([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], e)
      }),
      (t.prototype.kodachrome = function (e) {
        this._loadMatrix(
          [
            1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0, 63.72958762196502,
            -0.16404339962244616, 1.0835251566291304, -0.05498805115633132, 0, 24.732407896706203,
            -0.16786010706155763, -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0,
            0, 0, 1, 0,
          ],
          e,
        )
      }),
      (t.prototype.browni = function (e) {
        this._loadMatrix(
          [
            0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0, 47.43192855600873,
            -0.037703249837783157, 0.8609577587992641, 0.15059552388459913, 0, -36.96841498319127,
            0.24113635128153335, -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283,
            0, 0, 0, 1, 0,
          ],
          e,
        )
      }),
      (t.prototype.vintage = function (e) {
        this._loadMatrix(
          [
            0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0, 9.651285835294123,
            0.02578397704808868, 0.6441188644374771, 0.03259127616149294, 0, 7.462829176470591,
            0.0466055556782719, -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0, 0,
            0, 1, 0,
          ],
          e,
        )
      }),
      (t.prototype.colorTone = function (e, t, n, i, r) {
        var o = (((n = n || 16770432) >> 16) & 255) / 255,
          a = ((n >> 8) & 255) / 255,
          s = (255 & n) / 255,
          u = (((i = i || 3375104) >> 16) & 255) / 255,
          l = ((i >> 8) & 255) / 255,
          c = (255 & i) / 255,
          d = [
            0.3,
            0.59,
            0.11,
            0,
            0,
            o,
            a,
            s,
            (e = e || 0.2),
            0,
            u,
            l,
            c,
            (t = t || 0.15),
            0,
            o - u,
            a - l,
            s - c,
            0,
            0,
          ]
        this._loadMatrix(d, r)
      }),
      (t.prototype.night = function (e, t) {
        var n = [-2 * (e = e || 0.1), -e, 0, 0, 0, -e, 0, e, 0, 0, 0, e, 2 * e, 0, 0, 0, 0, 0, 1, 0]
        this._loadMatrix(n, t)
      }),
      (t.prototype.predator = function (e, t) {
        var n = [
          11.224130630493164 * e,
          -4.794486999511719 * e,
          -2.8746118545532227 * e,
          0 * e,
          0.40342438220977783 * e,
          -3.6330697536468506 * e,
          9.193157196044922 * e,
          -2.951810836791992 * e,
          0 * e,
          -1.316135048866272 * e,
          -3.2184197902679443 * e,
          -4.2375030517578125 * e,
          7.476448059082031 * e,
          0 * e,
          0.8044459223747253 * e,
          0,
          0,
          0,
          1,
          0,
        ]
        this._loadMatrix(n, t)
      }),
      (t.prototype.lsd = function (e) {
        this._loadMatrix(
          [2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0, 0, 0, 1, 0],
          e,
        )
      }),
      (t.prototype.reset = function () {
        this._loadMatrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], false)
      }),
      Object.defineProperty(t.prototype, "matrix", {
        get: function () {
          return this.uniforms.m
        },
        set: function (e) {
          this.uniforms.m = e
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "alpha", {
        get: function () {
          return this.uniforms.uAlpha
        },
        set: function (e) {
          this.uniforms.uAlpha = e
        },
        enumerable: false,
        configurable: true,
      }),
      t
    )
  })(ti)
  ka.prototype.grayscale = ka.prototype.greyscale
  var Na = function (e, t) {
    return (
      (Na =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }),
      Na(e, t)
    )
  }
  var Da = (function (e) {
      function t(t, n) {
        var i = this,
          r = new qe()
        return (
          (t.renderable = false),
          ((i =
            e.call(
              this,
              "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n",
              "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",
              {
                mapSampler: t._texture,
                filterMatrix: r,
                scale: { x: 1, y: 1 },
                rotation: new Float32Array([1, 0, 0, 1]),
              },
            ) || this).maskSprite = t),
          (i.maskMatrix = r),
          null == n && (n = 20),
          (i.scale = new We(n, n)),
          i
        )
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(Na(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        (t.prototype.apply = function (e, t, n, i) {
          ;((this.uniforms.filterMatrix = e.calculateSpriteMatrix(
            this.maskMatrix,
            this.maskSprite,
          )),
            (this.uniforms.scale.x = this.scale.x),
            (this.uniforms.scale.y = this.scale.y))
          var r = this.maskSprite.worldTransform,
            o = Math.sqrt(r.a * r.a + r.b * r.b),
            a = Math.sqrt(r.c * r.c + r.d * r.d)
          ;(0 !== o &&
            0 !== a &&
            ((this.uniforms.rotation[0] = r.a / o),
            (this.uniforms.rotation[1] = r.b / o),
            (this.uniforms.rotation[2] = r.c / a),
            (this.uniforms.rotation[3] = r.d / a)),
            e.applyFilter(this, t, n, i))
        }),
        Object.defineProperty(t.prototype, "map", {
          get: function () {
            return this.uniforms.mapSampler
          },
          set: function (e) {
            this.uniforms.mapSampler = e
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(ti),
    Ba = function (e, t) {
      return (
        (Ba =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        Ba(e, t)
      )
    }
  var Fa = (function (e) {
      function t() {
        return (
          e.call(
            this,
            "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputPixel;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
            'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputPixel;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n',
          ) || this
        )
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(Ba(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        t
      )
    })(ti),
    Ua = function (e, t) {
      return (
        (Ua =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        Ua(e, t)
      )
    }
  var Ga = (function (e) {
      function t(t, n) {
        ;(undefined === t && (t = 0.5), undefined === n && (n = Math.random()))
        var i =
          e.call(
            this,
            Ii,
            "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",
            { uNoise: 0, uSeed: 0 },
          ) || this
        return ((i.noise = t), (i.seed = n), i)
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(Ua(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        Object.defineProperty(t.prototype, "noise", {
          get: function () {
            return this.uniforms.uNoise
          },
          set: function (e) {
            this.uniforms.uNoise = e
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "seed", {
          get: function () {
            return this.uniforms.uSeed
          },
          set: function (e) {
            this.uniforms.uSeed = e
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(ti),
    ja = new qe()
  ;((ut.prototype._cacheAsBitmap = false), (ut.prototype._cacheData = null))
  var Ha = function () {
    ;((this.textureCacheId = null),
      (this.originalRender = null),
      (this.originalRenderCanvas = null),
      (this.originalCalculateBounds = null),
      (this.originalGetLocalBounds = null),
      (this.originalUpdateTransform = null),
      (this.originalDestroy = null),
      (this.originalMask = null),
      (this.originalFilterArea = null),
      (this.originalContainsPoint = null),
      (this.sprite = null))
  }
  ;(Object.defineProperties(ut.prototype, {
    cacheAsBitmap: {
      get: function () {
        return this._cacheAsBitmap
      },
      set: function (e) {
        var t
        this._cacheAsBitmap !== e &&
          ((this._cacheAsBitmap = e),
          e
            ? (this._cacheData || (this._cacheData = new Ha()),
              ((t = this._cacheData).originalRender = this.render),
              (t.originalRenderCanvas = this.renderCanvas),
              (t.originalUpdateTransform = this.updateTransform),
              (t.originalCalculateBounds = this.calculateBounds),
              (t.originalGetLocalBounds = this.getLocalBounds),
              (t.originalDestroy = this.destroy),
              (t.originalContainsPoint = this.containsPoint),
              (t.originalMask = this._mask),
              (t.originalFilterArea = this.filterArea),
              (this.render = this._renderCached),
              (this.renderCanvas = this._renderCachedCanvas),
              (this.destroy = this._cacheAsBitmapDestroy))
            : ((t = this._cacheData).sprite && this._destroyCachedDisplayObject(),
              (this.render = t.originalRender),
              (this.renderCanvas = t.originalRenderCanvas),
              (this.calculateBounds = t.originalCalculateBounds),
              (this.getLocalBounds = t.originalGetLocalBounds),
              (this.destroy = t.originalDestroy),
              (this.updateTransform = t.originalUpdateTransform),
              (this.containsPoint = t.originalContainsPoint),
              (this._mask = t.originalMask),
              (this.filterArea = t.originalFilterArea)))
      },
    },
  }),
    (ut.prototype._renderCached = function (e) {
      !this.visible ||
        this.worldAlpha <= 0 ||
        !this.renderable ||
        (this._initCachedDisplayObject(e),
        (this._cacheData.sprite.transform._worldID = this.transform._worldID),
        (this._cacheData.sprite.worldAlpha = this.worldAlpha),
        this._cacheData.sprite._render(e))
    }),
    (ut.prototype._initCachedDisplayObject = function (e) {
      if (!this._cacheData || !this._cacheData.sprite) {
        var t = this.alpha
        ;((this.alpha = 1), e.batch.flush())
        var n = this.getLocalBounds(null, true).clone()
        if (this.filters) {
          var i = this.filters[0].padding
          n.pad(i)
        }
        n.ceil(Y.RESOLUTION)
        var r = e.renderTexture.current,
          o = e.renderTexture.sourceFrame.clone(),
          a = e.renderTexture.destinationFrame.clone(),
          s = e.projection.transform,
          u = en.create({ width: n.width, height: n.height }),
          l = "cacheAsBitmap_" + xe()
        ;((this._cacheData.textureCacheId = l),
          Nt.addToCache(u.baseTexture, l),
          Jt.addToCache(u, l))
        var c = this.transform.localTransform.copyTo(ja).invert().translate(-n.x, -n.y)
        ;((this.render = this._cacheData.originalRender),
          e.render(this, u, true, c, false),
          (e.projection.transform = s),
          e.renderTexture.bind(r, o, a),
          (this.render = this._renderCached),
          (this.updateTransform = this.displayObjectUpdateTransform),
          (this.calculateBounds = this._calculateCachedBounds),
          (this.getLocalBounds = this._getCachedLocalBounds),
          (this._mask = null),
          (this.filterArea = null))
        var d = new ro(u)
        ;((d.transform.worldTransform = this.transform.worldTransform),
          (d.anchor.x = -n.x / n.width),
          (d.anchor.y = -n.y / n.height),
          (d.alpha = t),
          (d._bounds = this._bounds),
          (this._cacheData.sprite = d),
          (this.transform._parentID = -1),
          this.parent
            ? this.updateTransform()
            : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)),
          (this.containsPoint = d.containsPoint.bind(d)))
      }
    }),
    (ut.prototype._renderCachedCanvas = function (e) {
      !this.visible ||
        this.worldAlpha <= 0 ||
        !this.renderable ||
        (this._initCachedDisplayObjectCanvas(e),
        (this._cacheData.sprite.worldAlpha = this.worldAlpha),
        this._cacheData.sprite._renderCanvas(e))
    }),
    (ut.prototype._initCachedDisplayObjectCanvas = function (e) {
      if (!this._cacheData || !this._cacheData.sprite) {
        var t = this.getLocalBounds(null, true),
          n = this.alpha
        this.alpha = 1
        var i = e.context,
          r = e._projTransform
        t.ceil(Y.RESOLUTION)
        var o = en.create({ width: t.width, height: t.height }),
          a = "cacheAsBitmap_" + xe()
        ;((this._cacheData.textureCacheId = a),
          Nt.addToCache(o.baseTexture, a),
          Jt.addToCache(o, a))
        var s = ja
        ;(this.transform.localTransform.copyTo(s),
          s.invert(),
          (s.tx -= t.x),
          (s.ty -= t.y),
          (this.renderCanvas = this._cacheData.originalRenderCanvas),
          e.render(this, o, true, s, false),
          (e.context = i),
          (e._projTransform = r),
          (this.renderCanvas = this._renderCachedCanvas),
          (this.updateTransform = this.displayObjectUpdateTransform),
          (this.calculateBounds = this._calculateCachedBounds),
          (this.getLocalBounds = this._getCachedLocalBounds),
          (this._mask = null),
          (this.filterArea = null))
        var u = new ro(o)
        ;((u.transform.worldTransform = this.transform.worldTransform),
          (u.anchor.x = -t.x / t.width),
          (u.anchor.y = -t.y / t.height),
          (u.alpha = n),
          (u._bounds = this._bounds),
          (this._cacheData.sprite = u),
          (this.transform._parentID = -1),
          this.parent
            ? this.updateTransform()
            : ((this.parent = e._tempDisplayObjectParent),
              this.updateTransform(),
              (this.parent = null)),
          (this.containsPoint = u.containsPoint.bind(u)))
      }
    }),
    (ut.prototype._calculateCachedBounds = function () {
      ;(this._bounds.clear(),
        (this._cacheData.sprite.transform._worldID = this.transform._worldID),
        this._cacheData.sprite._calculateBounds(),
        (this._bounds.updateID = this._boundsID))
    }),
    (ut.prototype._getCachedLocalBounds = function () {
      return this._cacheData.sprite.getLocalBounds(null)
    }),
    (ut.prototype._destroyCachedDisplayObject = function () {
      ;(this._cacheData.sprite._texture.destroy(true),
        (this._cacheData.sprite = null),
        Nt.removeFromCache(this._cacheData.textureCacheId),
        Jt.removeFromCache(this._cacheData.textureCacheId),
        (this._cacheData.textureCacheId = null))
    }),
    (ut.prototype._cacheAsBitmapDestroy = function (e) {
      ;((this.cacheAsBitmap = false), this.destroy(e))
    }),
    (ut.prototype.name = null),
    (dt.prototype.getChildByName = function (e, t) {
      for (var n = 0, i = this.children.length; n < i; n++)
        if (this.children[n].name === e) return this.children[n]
      if (t)
        for (n = 0, i = this.children.length; n < i; n++) {
          if (this.children[n].getChildByName) {
            var r = this.children[n].getChildByName(e, true)
            if (r) return r
          }
        }
      return null
    }),
    (ut.prototype.getGlobalPosition = function (e, t) {
      return (
        undefined === e && (e = new We()),
        undefined === t && (t = false),
        this.parent
          ? this.parent.toGlobal(this.position, e, t)
          : ((e.x = this.position.x), (e.y = this.position.y)),
        e
      )
    }))
  var Va = function (e, t) {
    return (
      (Va =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }),
      Va(e, t)
    )
  }
  function Za(e, t) {
    function n() {
      this.constructor = e
    }
    ;(Va(e, t),
      (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var za = (function (e) {
      function t(t, n, i, r) {
        ;(undefined === t && (t = 100),
          undefined === n && (n = 100),
          undefined === i && (i = 10),
          undefined === r && (r = 10))
        var o = e.call(this) || this
        return ((o.segWidth = i), (o.segHeight = r), (o.width = t), (o.height = n), o.build(), o)
      }
      return (
        Za(t, e),
        (t.prototype.build = function () {
          for (
            var e = this.segWidth * this.segHeight,
              t = [],
              n = [],
              i = [],
              r = this.segWidth - 1,
              o = this.segHeight - 1,
              a = this.width / r,
              s = this.height / o,
              u = 0;
            u < e;
            u++
          ) {
            var l = u % this.segWidth,
              c = (u / this.segWidth) | 0
            ;(t.push(l * a, c * s), n.push(l / r, c / o))
          }
          var d = r * o
          for (u = 0; u < d; u++) {
            var h = u % r,
              p = (u / r) | 0,
              f = p * this.segWidth + h,
              _ = p * this.segWidth + h + 1,
              g = (p + 1) * this.segWidth + h,
              m = (p + 1) * this.segWidth + h + 1
            i.push(f, _, g, _, m, g)
          }
          ;((this.buffers[0].data = new Float32Array(t)),
            (this.buffers[1].data = new Float32Array(n)),
            (this.indexBuffer.data = new Uint16Array(i)),
            this.buffers[0].update(),
            this.buffers[1].update(),
            this.indexBuffer.update())
        }),
        t
      )
    })(Xo),
    Ya = (function (e) {
      function t(t, n, i) {
        ;(undefined === t && (t = 200), undefined === i && (i = 0))
        var r =
          e.call(
            this,
            new Float32Array(4 * n.length),
            new Float32Array(4 * n.length),
            new Uint16Array(6 * (n.length - 1)),
          ) || this
        return ((r.points = n), (r._width = t), (r.textureScale = i), r.build(), r)
      }
      return (
        Za(t, e),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            return this._width
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.build = function () {
          var e = this.points
          if (e) {
            var t = this.getBuffer("aVertexPosition"),
              n = this.getBuffer("aTextureCoord"),
              i = this.getIndex()
            if (!(e.length < 1)) {
              t.data.length / 4 !== e.length &&
                ((t.data = new Float32Array(4 * e.length)),
                (n.data = new Float32Array(4 * e.length)),
                (i.data = new Uint16Array(6 * (e.length - 1))))
              var r = n.data,
                o = i.data
              ;((r[0] = 0), (r[1] = 0), (r[2] = 0), (r[3] = 1))
              for (
                var a = 0, s = e[0], u = this._width * this.textureScale, l = e.length, c = 0;
                c < l;
                c++
              ) {
                var d = 4 * c
                if (this.textureScale > 0) {
                  var h = s.x - e[c].x,
                    p = s.y - e[c].y,
                    f = Math.sqrt(h * h + p * p)
                  ;((s = e[c]), (a += f / u))
                } else a = c / (l - 1)
                ;((r[d] = a), (r[d + 1] = 0), (r[d + 2] = a), (r[d + 3] = 1))
              }
              var _ = 0
              for (c = 0; c < l - 1; c++) {
                d = 2 * c
                ;((o[_++] = d),
                  (o[_++] = d + 1),
                  (o[_++] = d + 2),
                  (o[_++] = d + 2),
                  (o[_++] = d + 1),
                  (o[_++] = d + 3))
              }
              ;(n.update(), i.update(), this.updateVertices())
            }
          }
        }),
        (t.prototype.updateVertices = function () {
          var e = this.points
          if (!(e.length < 1)) {
            for (
              var t, n = e[0], i = 0, r = 0, o = this.buffers[0].data, a = e.length, s = 0;
              s < a;
              s++
            ) {
              var u = e[s],
                l = 4 * s
              ;((r = -((t = s < e.length - 1 ? e[s + 1] : u).x - n.x)), (i = t.y - n.y))
              var c = Math.sqrt(i * i + r * r),
                d = this.textureScale > 0 ? (this.textureScale * this._width) / 2 : this._width / 2
              ;((i /= c),
                (r /= c),
                (i *= d),
                (r *= d),
                (o[l] = u.x + i),
                (o[l + 1] = u.y + r),
                (o[l + 2] = u.x - i),
                (o[l + 3] = u.y - r),
                (n = u))
            }
            this.buffers[0].update()
          }
        }),
        (t.prototype.update = function () {
          this.textureScale > 0 ? this.build() : this.updateVertices()
        }),
        t
      )
    })(Xo),
    Wa = (function (e) {
      function t(t, n, i) {
        undefined === i && (i = 0)
        var r = this,
          o = new Ya(t.height, n, i),
          a = new Wo(t)
        return (
          i > 0 && (t.baseTexture.wrapMode = F.REPEAT),
          ((r = e.call(this, o, a) || this).autoUpdate = true),
          r
        )
      }
      return (
        Za(t, e),
        (t.prototype._render = function (t) {
          var n = this.geometry
          ;((this.autoUpdate || n._width !== this.shader.texture.height) &&
            ((n._width = this.shader.texture.height), n.update()),
            e.prototype._render.call(this, t))
        }),
        t
      )
    })(Yo),
    Xa = (function (e) {
      function t(t, n, i) {
        var r = this,
          o = new za(t.width, t.height, n, i),
          a = new Wo(Jt.WHITE)
        return (((r = e.call(this, o, a) || this).texture = t), r)
      }
      return (
        Za(t, e),
        (t.prototype.textureUpdated = function () {
          this._textureID = this.shader.texture._updateID
          var e = this.geometry
          ;((e.width = this.shader.texture.width),
            (e.height = this.shader.texture.height),
            e.build())
        }),
        Object.defineProperty(t.prototype, "texture", {
          get: function () {
            return this.shader.texture
          },
          set: function (e) {
            this.shader.texture !== e &&
              ((this.shader.texture = e),
              (this._textureID = -1),
              e.baseTexture.valid
                ? this.textureUpdated()
                : e.once("update", this.textureUpdated, this))
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype._render = function (t) {
          ;(this._textureID !== this.shader.texture._updateID && this.textureUpdated(),
            e.prototype._render.call(this, t))
        }),
        (t.prototype.destroy = function (t) {
          ;(this.shader.texture.off("update", this.textureUpdated, this),
            e.prototype.destroy.call(this, t))
        }),
        t
      )
    })(Yo),
    qa = (function (e) {
      function t(t, n, i, r, o) {
        undefined === t && (t = Jt.EMPTY)
        var a = this,
          s = new Xo(n, i, r)
        s.getBuffer("aVertexPosition").static = false
        var u = new Wo(t)
        return (((a = e.call(this, s, u, null, o) || this).autoUpdate = true), a)
      }
      return (
        Za(t, e),
        Object.defineProperty(t.prototype, "vertices", {
          get: function () {
            return this.geometry.getBuffer("aVertexPosition").data
          },
          set: function (e) {
            this.geometry.getBuffer("aVertexPosition").data = e
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype._render = function (t) {
          ;(this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(),
            e.prototype._render.call(this, t))
        }),
        t
      )
    })(Yo),
    Ka = (function (e) {
      function t(t, n, i, r, o) {
        ;(undefined === n && (n = 10),
          undefined === i && (i = 10),
          undefined === r && (r = 10),
          undefined === o && (o = 10))
        var a = e.call(this, Jt.WHITE, 4, 4) || this
        return (
          (a._origWidth = t.orig.width),
          (a._origHeight = t.orig.height),
          (a._width = a._origWidth),
          (a._height = a._origHeight),
          (a._leftWidth = n),
          (a._rightWidth = r),
          (a._topHeight = i),
          (a._bottomHeight = o),
          (a.texture = t),
          a
        )
      }
      return (
        Za(t, e),
        (t.prototype.textureUpdated = function () {
          ;((this._textureID = this.shader.texture._updateID), this._refresh())
        }),
        Object.defineProperty(t.prototype, "vertices", {
          get: function () {
            return this.geometry.getBuffer("aVertexPosition").data
          },
          set: function (e) {
            this.geometry.getBuffer("aVertexPosition").data = e
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype.updateHorizontalVertices = function () {
          var e = this.vertices,
            t = this._getMinScale()
          ;((e[9] = e[11] = e[13] = e[15] = this._topHeight * t),
            (e[17] = e[19] = e[21] = e[23] = this._height - this._bottomHeight * t),
            (e[25] = e[27] = e[29] = e[31] = this._height))
        }),
        (t.prototype.updateVerticalVertices = function () {
          var e = this.vertices,
            t = this._getMinScale()
          ;((e[2] = e[10] = e[18] = e[26] = this._leftWidth * t),
            (e[4] = e[12] = e[20] = e[28] = this._width - this._rightWidth * t),
            (e[6] = e[14] = e[22] = e[30] = this._width))
        }),
        (t.prototype._getMinScale = function () {
          var e = this._leftWidth + this._rightWidth,
            t = this._width > e ? 1 : this._width / e,
            n = this._topHeight + this._bottomHeight,
            i = this._height > n ? 1 : this._height / n
          return Math.min(t, i)
        }),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            return this._width
          },
          set: function (e) {
            ;((this._width = e), this._refresh())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "height", {
          get: function () {
            return this._height
          },
          set: function (e) {
            ;((this._height = e), this._refresh())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "leftWidth", {
          get: function () {
            return this._leftWidth
          },
          set: function (e) {
            ;((this._leftWidth = e), this._refresh())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "rightWidth", {
          get: function () {
            return this._rightWidth
          },
          set: function (e) {
            ;((this._rightWidth = e), this._refresh())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "topHeight", {
          get: function () {
            return this._topHeight
          },
          set: function (e) {
            ;((this._topHeight = e), this._refresh())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "bottomHeight", {
          get: function () {
            return this._bottomHeight
          },
          set: function (e) {
            ;((this._bottomHeight = e), this._refresh())
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype._refresh = function () {
          var e = this.texture,
            t = this.geometry.buffers[1].data
          ;((this._origWidth = e.orig.width), (this._origHeight = e.orig.height))
          var n = 1 / this._origWidth,
            i = 1 / this._origHeight
          ;((t[0] = t[8] = t[16] = t[24] = 0),
            (t[1] = t[3] = t[5] = t[7] = 0),
            (t[6] = t[14] = t[22] = t[30] = 1),
            (t[25] = t[27] = t[29] = t[31] = 1),
            (t[2] = t[10] = t[18] = t[26] = n * this._leftWidth),
            (t[4] = t[12] = t[20] = t[28] = 1 - n * this._rightWidth),
            (t[9] = t[11] = t[13] = t[15] = i * this._topHeight),
            (t[17] = t[19] = t[21] = t[23] = 1 - i * this._bottomHeight),
            this.updateHorizontalVertices(),
            this.updateVerticalVertices(),
            this.geometry.buffers[0].update(),
            this.geometry.buffers[1].update())
        }),
        t
      )
    })(Xa),
    $a = function (e, t) {
      return (
        ($a =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        $a(e, t)
      )
    }
  var Ja = (function (e) {
      function t(t, n) {
        undefined === n && (n = true)
        var i = e.call(this, t[0] instanceof Jt ? t[0] : t[0].texture) || this
        return (
          (i._textures = null),
          (i._durations = null),
          (i._autoUpdate = n),
          (i._isConnectedToTicker = false),
          (i.animationSpeed = 1),
          (i.loop = true),
          (i.updateAnchor = false),
          (i.onComplete = null),
          (i.onFrameChange = null),
          (i.onLoop = null),
          (i._currentTime = 0),
          (i._playing = false),
          (i._previousFrame = null),
          (i.textures = t),
          i
        )
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;($a(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        (t.prototype.stop = function () {
          this._playing &&
            ((this._playing = false),
            this._autoUpdate &&
              this._isConnectedToTicker &&
              (mt.shared.remove(this.update, this), (this._isConnectedToTicker = false)))
        }),
        (t.prototype.play = function () {
          this._playing ||
            ((this._playing = true),
            this._autoUpdate &&
              !this._isConnectedToTicker &&
              (mt.shared.add(this.update, this, pt.HIGH), (this._isConnectedToTicker = true)))
        }),
        (t.prototype.gotoAndStop = function (e) {
          this.stop()
          var t = this.currentFrame
          ;((this._currentTime = e), t !== this.currentFrame && this.updateTexture())
        }),
        (t.prototype.gotoAndPlay = function (e) {
          var t = this.currentFrame
          ;((this._currentTime = e), t !== this.currentFrame && this.updateTexture(), this.play())
        }),
        (t.prototype.update = function (e) {
          if (this._playing) {
            var t = this.animationSpeed * e,
              n = this.currentFrame
            if (null !== this._durations) {
              var i = (this._currentTime % 1) * this._durations[this.currentFrame]
              for (i += (t / 60) * 1e3; i < 0; )
                (this._currentTime--, (i += this._durations[this.currentFrame]))
              var r = Math.sign(this.animationSpeed * e)
              for (
                this._currentTime = Math.floor(this._currentTime);
                i >= this._durations[this.currentFrame];
              )
                ((i -= this._durations[this.currentFrame] * r), (this._currentTime += r))
              this._currentTime += i / this._durations[this.currentFrame]
            } else this._currentTime += t
            this._currentTime < 0 && !this.loop
              ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
              : this._currentTime >= this._textures.length && !this.loop
                ? (this.gotoAndStop(this._textures.length - 1),
                  this.onComplete && this.onComplete())
                : n !== this.currentFrame &&
                  (this.loop &&
                    this.onLoop &&
                    ((this.animationSpeed > 0 && this.currentFrame < n) ||
                      (this.animationSpeed < 0 && this.currentFrame > n)) &&
                    this.onLoop(),
                  this.updateTexture())
          }
        }),
        (t.prototype.updateTexture = function () {
          var e = this.currentFrame
          this._previousFrame !== e &&
            ((this._previousFrame = e),
            (this._texture = this._textures[e]),
            (this._textureID = -1),
            (this._textureTrimmedID = -1),
            (this._cachedTint = 16777215),
            (this.uvs = this._texture._uvs.uvsFloat32),
            this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor),
            this.onFrameChange && this.onFrameChange(this.currentFrame))
        }),
        (t.prototype.destroy = function (t) {
          ;(this.stop(),
            e.prototype.destroy.call(this, t),
            (this.onComplete = null),
            (this.onFrameChange = null),
            (this.onLoop = null))
        }),
        (t.fromFrames = function (e) {
          for (var n = [], i = 0; i < e.length; ++i) n.push(Jt.from(e[i]))
          return new t(n)
        }),
        (t.fromImages = function (e) {
          for (var n = [], i = 0; i < e.length; ++i) n.push(Jt.from(e[i]))
          return new t(n)
        }),
        Object.defineProperty(t.prototype, "totalFrames", {
          get: function () {
            return this._textures.length
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "textures", {
          get: function () {
            return this._textures
          },
          set: function (e) {
            if (e[0] instanceof Jt) ((this._textures = e), (this._durations = null))
            else {
              ;((this._textures = []), (this._durations = []))
              for (var t = 0; t < e.length; t++)
                (this._textures.push(e[t].texture), this._durations.push(e[t].time))
            }
            ;((this._previousFrame = null), this.gotoAndStop(0), this.updateTexture())
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "currentFrame", {
          get: function () {
            var e = Math.floor(this._currentTime) % this._textures.length
            return (e < 0 && (e += this._textures.length), e)
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "playing", {
          get: function () {
            return this._playing
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "autoUpdate", {
          get: function () {
            return this._autoUpdate
          },
          set: function (e) {
            e !== this._autoUpdate &&
              ((this._autoUpdate = e),
              !this._autoUpdate && this._isConnectedToTicker
                ? (mt.shared.remove(this.update, this), (this._isConnectedToTicker = false))
                : this._autoUpdate &&
                  !this._isConnectedToTicker &&
                  this._playing &&
                  (mt.shared.add(this.update, this), (this._isConnectedToTicker = true)))
          },
          enumerable: false,
          configurable: true,
        }),
        t
      )
    })(ro),
    Qa = function (e, t) {
      return (
        (Qa =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        Qa(e, t)
      )
    }
  function es(e, t) {
    function n() {
      this.constructor = e
    }
    ;(Qa(e, t),
      (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
  }
  var ts = "5.0.0"
  function ns() {
    var e = this
    ;(Object.defineProperties(e, {
      SVG_SIZE: {
        get: function () {
          return (
            Se(ts, "PIXI.utils.SVG_SIZE property has moved to PIXI.resources.SVGResource.SVG_SIZE"),
            e.SVGResource.SVG_SIZE
          )
        },
      },
      TransformStatic: {
        get: function () {
          return (
            Se(ts, "PIXI.TransformStatic class has been removed, use PIXI.Transform"),
            e.Transform
          )
        },
      },
      TransformBase: {
        get: function () {
          return (
            Se(ts, "PIXI.TransformBase class has been removed, use PIXI.Transform"),
            e.Transform
          )
        },
      },
      TRANSFORM_MODE: {
        get: function () {
          return (
            Se(ts, "PIXI.TRANSFORM_MODE property has been removed"),
            { STATIC: 0, DYNAMIC: 1 }
          )
        },
      },
      WebGLRenderer: {
        get: function () {
          return (Se(ts, "PIXI.WebGLRenderer class has moved to PIXI.Renderer"), e.Renderer)
        },
      },
      CanvasRenderTarget: {
        get: function () {
          return (
            Se(ts, "PIXI.CanvasRenderTarget class has moved to PIXI.utils.CanvasRenderTarget"),
            e.utils.CanvasRenderTarget
          )
        },
      },
      loader: {
        get: function () {
          return (Se(ts, "PIXI.loader instance has moved to PIXI.Loader.shared"), e.Loader.shared)
        },
      },
      FilterManager: {
        get: function () {
          return (
            Se(ts, "PIXI.FilterManager class has moved to PIXI.systems.FilterSystem"),
            e.systems.FilterSystem
          )
        },
      },
      CanvasTinter: {
        get: function () {
          return (
            Se("5.2.0", "PIXI.CanvasTinter namespace has moved to PIXI.canvasUtils"),
            e.canvasUtils
          )
        },
      },
      GroupD8: {
        get: function () {
          return (Se("5.2.0", "PIXI.GroupD8 namespace has moved to PIXI.groupD8"), e.groupD8)
        },
      },
    }),
      (e.accessibility = {}),
      Object.defineProperties(e.accessibility, {
        AccessibilityManager: {
          get: function () {
            return (
              Se(
                "5.3.0",
                "PIXI.accessibility.AccessibilityManager moved to PIXI.AccessibilityManager",
              ),
              e.AccessibilityManager
            )
          },
        },
      }),
      (e.interaction = {}),
      Object.defineProperties(e.interaction, {
        InteractionManager: {
          get: function () {
            return (
              Se("5.3.0", "PIXI.interaction.InteractionManager moved to PIXI.InteractionManager"),
              e.InteractionManager
            )
          },
        },
        InteractionData: {
          get: function () {
            return (
              Se("5.3.0", "PIXI.interaction.InteractionData moved to PIXI.InteractionData"),
              e.InteractionData
            )
          },
        },
        InteractionEvent: {
          get: function () {
            return (
              Se("5.3.0", "PIXI.interaction.InteractionEvent moved to PIXI.InteractionEvent"),
              e.InteractionEvent
            )
          },
        },
      }),
      (e.prepare = {}),
      Object.defineProperties(e.prepare, {
        BasePrepare: {
          get: function () {
            return (
              Se("5.2.1", "PIXI.prepare.BasePrepare moved to PIXI.BasePrepare"),
              e.BasePrepare
            )
          },
        },
        Prepare: {
          get: function () {
            return (Se("5.2.1", "PIXI.prepare.Prepare moved to PIXI.Prepare"), e.Prepare)
          },
        },
        CanvasPrepare: {
          get: function () {
            return (
              Se("5.2.1", "PIXI.prepare.CanvasPrepare moved to PIXI.CanvasPrepare"),
              e.CanvasPrepare
            )
          },
        },
      }),
      (e.extract = {}),
      Object.defineProperties(e.extract, {
        Extract: {
          get: function () {
            return (Se("5.2.1", "PIXI.extract.Extract moved to PIXI.Extract"), e.Extract)
          },
        },
        CanvasExtract: {
          get: function () {
            return (
              Se("5.2.1", "PIXI.extract.CanvasExtract moved to PIXI.CanvasExtract"),
              e.CanvasExtract
            )
          },
        },
      }),
      (e.extras = {}),
      Object.defineProperties(e.extras, {
        TilingSprite: {
          get: function () {
            return (
              Se(ts, "PIXI.extras.TilingSprite class has moved to PIXI.TilingSprite"),
              e.TilingSprite
            )
          },
        },
        TilingSpriteRenderer: {
          get: function () {
            return (
              Se(
                ts,
                "PIXI.extras.TilingSpriteRenderer class has moved to PIXI.TilingSpriteRenderer",
              ),
              e.TilingSpriteRenderer
            )
          },
        },
        AnimatedSprite: {
          get: function () {
            return (
              Se(ts, "PIXI.extras.AnimatedSprite class has moved to PIXI.AnimatedSprite"),
              e.AnimatedSprite
            )
          },
        },
        BitmapText: {
          get: function () {
            return (
              Se(ts, "PIXI.extras.BitmapText class has moved to PIXI.BitmapText"),
              e.BitmapText
            )
          },
        },
      }),
      (e.TilingSprite.fromFrame = function (t, n, i) {
        return (
          Se("5.3.0", "TilingSprite.fromFrame is deprecated, use TilingSprite.from"),
          e.TilingSprite.from(t, { width: n, height: i })
        )
      }),
      (e.TilingSprite.fromImage = function (t, n, i, r) {
        return (
          undefined === r && (r = {}),
          Se("5.3.0", "TilingSprite.fromImage is deprecated, use TilingSprite.from"),
          r &&
            "object" != typeof r &&
            (r = { scaleMode: arguments[4], resourceOptions: { crossorigin: arguments[3] } }),
          (r.width = n),
          (r.height = i),
          e.TilingSprite.from(t, r)
        )
      }),
      Object.defineProperties(e.utils, {
        getSvgSize: {
          get: function () {
            return (
              Se(
                ts,
                "PIXI.utils.getSvgSize function has moved to PIXI.resources.SVGResource.getSize",
              ),
              e.resources.SVGResource.getSize
            )
          },
        },
      }),
      (e.mesh = {}),
      Object.defineProperties(e.mesh, {
        Mesh: {
          get: function () {
            return (Se(ts, "PIXI.mesh.Mesh class has moved to PIXI.SimpleMesh"), e.SimpleMesh)
          },
        },
        NineSlicePlane: {
          get: function () {
            return (
              Se(ts, "PIXI.mesh.NineSlicePlane class has moved to PIXI.NineSlicePlane"),
              e.NineSlicePlane
            )
          },
        },
        Plane: {
          get: function () {
            return (Se(ts, "PIXI.mesh.Plane class has moved to PIXI.SimplePlane"), e.SimplePlane)
          },
        },
        Rope: {
          get: function () {
            return (Se(ts, "PIXI.mesh.Rope class has moved to PIXI.SimpleRope"), e.SimpleRope)
          },
        },
        RawMesh: {
          get: function () {
            return (Se(ts, "PIXI.mesh.RawMesh class has moved to PIXI.Mesh"), e.Mesh)
          },
        },
        CanvasMeshRenderer: {
          get: function () {
            return (
              Se(ts, "PIXI.mesh.CanvasMeshRenderer class has moved to PIXI.CanvasMeshRenderer"),
              e.CanvasMeshRenderer
            )
          },
        },
        MeshRenderer: {
          get: function () {
            return (
              Se(ts, "PIXI.mesh.MeshRenderer class has moved to PIXI.MeshRenderer"),
              e.MeshRenderer
            )
          },
        },
      }),
      (e.particles = {}),
      Object.defineProperties(e.particles, {
        ParticleContainer: {
          get: function () {
            return (
              Se(ts, "PIXI.particles.ParticleContainer class has moved to PIXI.ParticleContainer"),
              e.ParticleContainer
            )
          },
        },
        ParticleRenderer: {
          get: function () {
            return (
              Se(ts, "PIXI.particles.ParticleRenderer class has moved to PIXI.ParticleRenderer"),
              e.ParticleRenderer
            )
          },
        },
      }),
      (e.ticker = {}),
      Object.defineProperties(e.ticker, {
        Ticker: {
          get: function () {
            return (Se(ts, "PIXI.ticker.Ticker class has moved to PIXI.Ticker"), e.Ticker)
          },
        },
        shared: {
          get: function () {
            return (
              Se(ts, "PIXI.ticker.shared instance has moved to PIXI.Ticker.shared"),
              e.Ticker.shared
            )
          },
        },
      }),
      (e.loaders = {}),
      Object.defineProperties(e.loaders, {
        Loader: {
          get: function () {
            return (Se(ts, "PIXI.loaders.Loader class has moved to PIXI.Loader"), e.Loader)
          },
        },
        Resource: {
          get: function () {
            return (
              Se(ts, "PIXI.loaders.Resource class has moved to PIXI.LoaderResource"),
              e.LoaderResource
            )
          },
        },
        bitmapFontParser: {
          get: function () {
            return (
              Se(
                ts,
                "PIXI.loaders.bitmapFontParser function has moved to PIXI.BitmapFontLoader.use",
              ),
              e.BitmapFontLoader.use
            )
          },
        },
        parseBitmapFontData: {
          get: function () {
            Se(ts, "PIXI.loaders.parseBitmapFontData function has removed")
          },
        },
        spritesheetParser: {
          get: function () {
            return (
              Se(
                ts,
                "PIXI.loaders.spritesheetParser function has moved to PIXI.SpritesheetLoader.use",
              ),
              e.SpritesheetLoader.use
            )
          },
        },
        getResourcePath: {
          get: function () {
            return (
              Se(
                ts,
                "PIXI.loaders.getResourcePath property has moved to PIXI.SpritesheetLoader.getResourcePath",
              ),
              e.SpritesheetLoader.getResourcePath
            )
          },
        },
      }),
      (e.Loader.addPixiMiddleware = function (t) {
        return (
          Se(
            ts,
            "PIXI.loaders.Loader.addPixiMiddleware function is deprecated, use PIXI.loaders.Loader.registerPlugin",
          ),
          e.loaders.Loader.registerPlugin({ use: t() })
        )
      }))
    var t = function (e) {
      return "on" + e.charAt(0).toUpperCase() + e.slice(1)
    }
    ;(Object.assign(e.Loader.prototype, {
      on: function (e) {
        var n = t(e)
        Se(ts, "PIXI.Loader#on is completely deprecated, use PIXI.Loader#" + n + ".add")
      },
      once: function (e) {
        var n = t(e)
        Se(ts, "PIXI.Loader#once is completely deprecated, use PIXI.Loader#" + n + ".once")
      },
      off: function (e) {
        var n = t(e)
        Se(ts, "PIXI.Loader#off is completely deprecated, use PIXI.Loader#" + n + ".detach")
      },
    }),
      Object.defineProperty(e.extract, "WebGLExtract", {
        get: function () {
          return (Se(ts, "PIXI.extract.WebGLExtract method has moved to PIXI.Extract"), e.Extract)
        },
      }),
      Object.defineProperty(e.prepare, "WebGLPrepare", {
        get: function () {
          return (Se(ts, "PIXI.prepare.WebGLPrepare class has moved to PIXI.Prepare"), e.Prepare)
        },
      }),
      (e.Container.prototype._renderWebGL = function (e) {
        ;(Se(ts, "PIXI.Container._renderWebGL method has moved to PIXI.Container._render"),
          this._render(e))
      }),
      (e.Container.prototype.renderWebGL = function (e) {
        ;(Se(ts, "PIXI.Container.renderWebGL method has moved to PIXI.Container.render"),
          this.render(e))
      }),
      (e.DisplayObject.prototype.renderWebGL = function (e) {
        ;(Se(ts, "PIXI.DisplayObject.renderWebGL method has moved to PIXI.DisplayObject.render"),
          this.render(e))
      }),
      (e.Container.prototype.renderAdvancedWebGL = function (e) {
        ;(Se(
          ts,
          "PIXI.Container.renderAdvancedWebGL method has moved to PIXI.Container.renderAdvanced",
        ),
          this.renderAdvanced(e))
      }),
      Object.defineProperties(e.settings, {
        TRANSFORM_MODE: {
          get: function () {
            return (Se(ts, "PIXI.settings.TRANSFORM_MODE property has been removed"), 0)
          },
          set: function () {
            Se(ts, "PIXI.settings.TRANSFORM_MODE property has been removed")
          },
        },
      }))
    var n = e.BaseTexture
    n.prototype.loadSource = function (t) {
      Se(ts, "PIXI.BaseTexture.loadSource method has been deprecated")
      var n = e.resources.autoDetectResource(t)
      ;((n.internal = true), this.setResource(n), this.update())
    }
    var i = false
    ;(Object.defineProperties(n.prototype, {
      hasLoaded: {
        get: function () {
          return (
            Se(
              ts,
              "PIXI.BaseTexture.hasLoaded property has been removed, use PIXI.BaseTexture.valid",
            ),
            this.valid
          )
        },
      },
      imageUrl: {
        get: function () {
          var e
          return (
            Se(
              ts,
              "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url",
            ),
            null === (e = this.resource) || undefined === e ? undefined : e.url
          )
        },
        set: function (e) {
          ;(Se(
            ts,
            "PIXI.BaseTexture.imageUrl property has been removed, use PIXI.BaseTexture.resource.url",
          ),
            this.resource && (this.resource.url = e))
        },
      },
      source: {
        get: function () {
          return (
            Se(
              ts,
              "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source`",
            ),
            this.resource.source
          )
        },
        set: function (e) {
          ;(Se(
            ts,
            "PIXI.BaseTexture.source property has been moved, use `PIXI.BaseTexture.resource.source` if you want to set HTMLCanvasElement. Otherwise, create new BaseTexture.",
          ),
            this.resource && (this.resource.source = e))
        },
      },
      premultiplyAlpha: {
        get: function () {
          return (
            Se(
              "5.2.0",
              "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`",
            ),
            0 !== this.alphaMode
          )
        },
        set: function (e) {
          ;(Se(
            "5.2.0",
            "PIXI.BaseTexture.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`",
          ),
            (this.alphaMode = Number(e)))
        },
      },
      _id: {
        get: function () {
          return (
            i ||
              (Se(
                "5.2.0",
                "PIXI.BaseTexture._id batch local field has been changed to `_batchLocation`",
              ),
              (i = true)),
            this._batchLocation
          )
        },
        set: function (e) {
          this._batchLocation = e
        },
      },
    }),
      (n.fromImage = function (e, t, i, r) {
        Se(ts, "PIXI.BaseTexture.fromImage method has been replaced with PIXI.BaseTexture.from")
        var o = { scale: r, crossorigin: t }
        return n.from(e, { scaleMode: i, resourceOptions: o })
      }),
      (n.fromCanvas = function (e, t) {
        return (
          Se(ts, "PIXI.BaseTexture.fromCanvas method has been replaced with PIXI.BaseTexture.from"),
          n.from(e, { scaleMode: t })
        )
      }),
      (n.fromSVG = function (e, t, i, r) {
        Se(ts, "PIXI.BaseTexture.fromSVG method has been replaced with PIXI.BaseTexture.from")
        var o = { scale: r, crossorigin: t }
        return n.from(e, { scaleMode: i, resourceOptions: o })
      }),
      Object.defineProperties(e.resources.ImageResource.prototype, {
        premultiplyAlpha: {
          get: function () {
            return (
              Se(
                "5.2.0",
                "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`",
              ),
              0 !== this.alphaMode
            )
          },
          set: function (e) {
            ;(Se(
              "5.2.0",
              "PIXI.resources.ImageResource.premultiplyAlpha property has been changed to `alphaMode`, see `PIXI.ALPHA_MODES`",
            ),
              (this.alphaMode = Number(e)))
          },
        },
      }),
      (e.Point.prototype.copy = function (e) {
        return (
          Se(ts, "PIXI.Point.copy method has been replaced with PIXI.Point.copyFrom"),
          this.copyFrom(e)
        )
      }),
      (e.ObservablePoint.prototype.copy = function (e) {
        return (
          Se(
            ts,
            "PIXI.ObservablePoint.copy method has been replaced with PIXI.ObservablePoint.copyFrom",
          ),
          this.copyFrom(e)
        )
      }),
      (e.Rectangle.prototype.copy = function (e) {
        return (
          Se(ts, "PIXI.Rectangle.copy method has been replaced with PIXI.Rectangle.copyFrom"),
          this.copyFrom(e)
        )
      }),
      (e.Matrix.prototype.copy = function (e) {
        return (
          Se(ts, "PIXI.Matrix.copy method has been replaced with PIXI.Matrix.copyTo"),
          this.copyTo(e)
        )
      }),
      (e.systems.StateSystem.prototype.setState = function (e) {
        return (
          Se("v5.1.0", "StateSystem.setState has been renamed to StateSystem.set"),
          this.set(e)
        )
      }),
      Object.assign(e.systems.FilterSystem.prototype, {
        getRenderTarget: function (e, t) {
          return (
            Se(
              ts,
              "PIXI.FilterManager.getRenderTarget method has been replaced with PIXI.systems.FilterSystem#getFilterTexture",
            ),
            this.getFilterTexture(null, t)
          )
        },
        returnRenderTarget: function (e) {
          ;(Se(
            ts,
            "PIXI.FilterManager.returnRenderTarget method has been replaced with PIXI.systems.FilterSystem.returnFilterTexture",
          ),
            this.returnFilterTexture(e))
        },
        calculateScreenSpaceMatrix: function (e) {
          Se(
            ts,
            "PIXI.systems.FilterSystem.calculateScreenSpaceMatrix method is removed, use `(vTextureCoord * inputSize.xy) + outputFrame.xy` instead",
          )
          var t = e.identity(),
            n = this.activeState,
            i = n.sourceFrame,
            r = n.destinationFrame
          return (t.translate(i.x / r.width, i.y / r.height), t.scale(r.width, r.height), t)
        },
        calculateNormalizedScreenSpaceMatrix: function (e) {
          Se(
            ts,
            "PIXI.systems.FilterManager.calculateNormalizedScreenSpaceMatrix method is removed, use `((vTextureCoord * inputSize.xy) + outputFrame.xy) / outputFrame.zw` instead.",
          )
          var t = this.activeState,
            n = t.sourceFrame,
            i = t.destinationFrame,
            r = e.identity()
          r.translate(n.x / i.width, n.y / i.height)
          var o = i.width / n.width,
            a = i.height / n.height
          return (r.scale(o, a), r)
        },
      }),
      Object.defineProperties(e.RenderTexture.prototype, {
        sourceFrame: {
          get: function () {
            return (
              Se(ts, "PIXI.RenderTexture.sourceFrame property has been removed"),
              this.filterFrame
            )
          },
        },
        size: {
          get: function () {
            return (Se(ts, "PIXI.RenderTexture.size property has been removed"), this._frame)
          },
        },
      }))
    var r = (function (e) {
        function t(t, n, i, r) {
          return (
            Se(ts, "PIXI.filters.BlurXFilter class is deprecated, use PIXI.filters.BlurFilterPass"),
            e.call(this, true, t, n, i, r) || this
          )
        }
        return (es(t, e), t)
      })(e.filters.BlurFilterPass),
      o = (function (e) {
        function t(t, n, i, r) {
          return (
            Se(ts, "PIXI.filters.BlurYFilter class is deprecated, use PIXI.filters.BlurFilterPass"),
            e.call(this, false, t, n, i, r) || this
          )
        }
        return (es(t, e), t)
      })(e.filters.BlurFilterPass)
    Object.assign(e.filters, { BlurXFilter: r, BlurYFilter: o })
    var a = e.Sprite,
      s = e.Texture,
      u = e.Graphics
    function l(e, t, n, i) {
      return (
        Se(ts, "PIXI.Sprite." + e + " method is deprecated, use PIXI.Sprite.from"),
        a.from(t, { resourceOptions: { scale: i, crossorigin: n } })
      )
    }
    function c(e, t, n, i) {
      return (
        Se(ts, "PIXI.Texture." + e + " method is deprecated, use PIXI.Texture.from"),
        s.from(t, { resourceOptions: { scale: i, crossorigin: n } })
      )
    }
    ;(u.prototype.generateCanvasTexture ||
      (u.prototype.generateCanvasTexture = function () {
        Se(ts, 'PIXI.Graphics.generateCanvasTexture method is only available in "pixi.js-legacy"')
      }),
      Object.defineProperty(u.prototype, "graphicsData", {
        get: function () {
          return (
            Se(
              ts,
              "PIXI.Graphics.graphicsData property is deprecated, use PIXI.Graphics.geometry.graphicsData",
            ),
            this.geometry.graphicsData
          )
        },
      }),
      (a.fromImage = l.bind(null, "fromImage")),
      (a.fromSVG = l.bind(null, "fromSVG")),
      (a.fromCanvas = l.bind(null, "fromCanvas")),
      (a.fromVideo = l.bind(null, "fromVideo")),
      (a.fromFrame = l.bind(null, "fromFrame")),
      (s.fromImage = c.bind(null, "fromImage")),
      (s.fromSVG = c.bind(null, "fromSVG")),
      (s.fromCanvas = c.bind(null, "fromCanvas")),
      (s.fromVideo = c.bind(null, "fromVideo")),
      (s.fromFrame = c.bind(null, "fromFrame")),
      Object.defineProperty(e.AbstractRenderer.prototype, "autoResize", {
        get: function () {
          return (
            Se(
              ts,
              "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity",
            ),
            this.autoDensity
          )
        },
        set: function (e) {
          ;(Se(
            ts,
            "PIXI.AbstractRenderer.autoResize property is deprecated, use PIXI.AbstractRenderer.autoDensity",
          ),
            (this.autoDensity = e))
        },
      }),
      Object.defineProperty(e.Renderer.prototype, "textureManager", {
        get: function () {
          return (
            Se(
              ts,
              "PIXI.Renderer.textureManager property is deprecated, use PIXI.Renderer.texture",
            ),
            this.texture
          )
        },
      }),
      (e.utils.mixins = {
        mixin: function () {
          Se(ts, "PIXI.utils.mixins.mixin function is no longer available")
        },
        delayMixin: function () {
          Se(ts, "PIXI.utils.mixins.delayMixin function is no longer available")
        },
        performMixins: function () {
          Se(ts, "PIXI.utils.mixins.performMixins function is no longer available")
        },
      }),
      Object.defineProperty(e.BitmapText.prototype, "font", {
        get: function () {
          return (
            Se(
              "5.3.0",
              "PIXI.BitmapText.font property is deprecated, use fontName, fontSize, tint or align properties",
            ),
            { name: this._fontName, size: this._fontSize, tint: this._tint, align: this._align }
          )
        },
        set: function (t) {
          if (
            (Se(
              "5.3.0",
              "PIXI.BitmapText.font property is deprecated, use fontName, fontSize, tint or align properties",
            ),
            t)
          ) {
            var n = { font: t }
            ;(this._upgradeStyle(n),
              (n.fontSize = n.fontSize || e.BitmapFont.available[n.fontName].size),
              (this._fontName = n.fontName),
              (this._fontSize = n.fontSize),
              (this.dirty = true))
          }
        },
      }))
  }
  ;(Li.registerPlugin("accessibility", _t),
    Li.registerPlugin("extract", Vi),
    Li.registerPlugin("interaction", Lt),
    Li.registerPlugin("particle", wr),
    Li.registerPlugin("prepare", Mo),
    Li.registerPlugin("batch", Ui),
    Li.registerPlugin("tilingSprite", Go),
    fr.registerPlugin(sa),
    fr.registerPlugin(Ro),
    Gi.registerPlugin(vt),
    Gi.registerPlugin(_r))
  var is = "5.3.12",
    rs = {
      AlphaFilter: la,
      BlurFilter: Oa,
      BlurFilterPass: Pa,
      ColorMatrixFilter: ka,
      DisplacementFilter: Da,
      FXAAFilter: Fa,
      NoiseFilter: Ga,
    },
    os = function (e, t) {
      return (
        (os =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
          }),
        os(e, t)
      )
    }
  var as = (function () {
    function e(e) {
      ;((this.renderer = e), (this._foundShapes = []))
    }
    return (
      (e.prototype.pushMask = function (e) {
        var t = this.renderer,
          n = e.maskObject || e
        t.context.save()
        var i = this._foundShapes
        if ((this.recursiveFindShapes(n, i), i.length > 0)) {
          var r = t.context
          r.beginPath()
          for (var o = 0; o < i.length; o++) {
            var a = i[o],
              s = a.transform.worldTransform
            ;(this.renderer.setContextTransform(s), this.renderGraphicsShape(a))
          }
          ;((i.length = 0), r.clip())
        }
      }),
      (e.prototype.recursiveFindShapes = function (e, t) {
        e.geometry && e.geometry.graphicsData && t.push(e)
        var n = e.children
        if (n) for (var i = 0; i < n.length; i++) this.recursiveFindShapes(n[i], t)
      }),
      (e.prototype.renderGraphicsShape = function (e) {
        e.finishPoly()
        var t = this.renderer.context,
          n = e.geometry.graphicsData,
          i = n.length
        if (0 !== i)
          for (var r = 0; r < i; r++) {
            var o = n[r].shape
            if (o.type === Fe.POLY) {
              var a = o.points
              t.moveTo(a[0], a[1])
              for (var s = 1; s < a.length / 2; s++) t.lineTo(a[2 * s], a[2 * s + 1])
              a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && t.closePath()
            } else if (o.type === Fe.RECT) (t.rect(o.x, o.y, o.width, o.height), t.closePath())
            else if (o.type === Fe.CIRC) (t.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), t.closePath())
            else if (o.type === Fe.ELIP) {
              var u = 2 * o.width,
                l = 2 * o.height,
                c = o.x - u / 2,
                d = o.y - l / 2,
                h = 0.5522848,
                p = (u / 2) * h,
                f = (l / 2) * h,
                _ = c + u,
                g = d + l,
                m = c + u / 2,
                v = d + l / 2
              ;(t.moveTo(c, v),
                t.bezierCurveTo(c, v - f, m - p, d, m, d),
                t.bezierCurveTo(m + p, d, _, v - f, _, v),
                t.bezierCurveTo(_, v + f, m + p, g, m, g),
                t.bezierCurveTo(m - p, g, c, v + f, c, v),
                t.closePath())
            } else if (o.type === Fe.RREC) {
              var y = o.x,
                C = o.y,
                b = o.width,
                w = o.height,
                x = o.radius,
                T = (Math.min(b, w) / 2) | 0
              ;((x = x > T ? T : x),
                t.moveTo(y, C + x),
                t.lineTo(y, C + w - x),
                t.quadraticCurveTo(y, C + w, y + x, C + w),
                t.lineTo(y + b - x, C + w),
                t.quadraticCurveTo(y + b, C + w, y + b, C + w - x),
                t.lineTo(y + b, C + x),
                t.quadraticCurveTo(y + b, C, y + b - x, C),
                t.lineTo(y + x, C),
                t.quadraticCurveTo(y, C, y, C + x),
                t.closePath())
            }
          }
      }),
      (e.prototype.popMask = function (e) {
        ;(e.context.restore(), e.invalidateBlendMode())
      }),
      (e.prototype.destroy = function () {}),
      e
    )
  })()
  function ss(e) {
    var t = document.createElement("canvas")
    ;((t.width = 6), (t.height = 1))
    var n = t.getContext("2d")
    return ((n.fillStyle = e), n.fillRect(0, 0, 6, 1), t)
  }
  function us() {
    if ("undefined" == typeof document) return false
    var e = ss("#ff00ff"),
      t = ss("#ffff00"),
      n = document.createElement("canvas")
    ;((n.width = 6), (n.height = 1))
    var i = n.getContext("2d")
    ;((i.globalCompositeOperation = "multiply"), i.drawImage(e, 0, 0), i.drawImage(t, 2, 0))
    var r = i.getImageData(2, 0, 1, 1)
    if (!r) return false
    var o = r.data
    return 255 === o[0] && 0 === o[1] && 0 === o[2]
  }
  var ls = new qe(),
    cs = (function (e) {
      function t(n) {
        var i,
          r = e.call(this, M.CANVAS, n) || this
        if (
          ((r.rootContext = r.view.getContext("2d", { alpha: r.transparent })),
          (r.context = r.rootContext),
          (r.refresh = true),
          (r.maskManager = new as(r)),
          (r.smoothProperty = "imageSmoothingEnabled"),
          !r.rootContext.imageSmoothingEnabled)
        ) {
          var o = r.rootContext
          o.webkitImageSmoothingEnabled
            ? (r.smoothProperty = "webkitImageSmoothingEnabled")
            : o.mozImageSmoothingEnabled
              ? (r.smoothProperty = "mozImageSmoothingEnabled")
              : o.oImageSmoothingEnabled
                ? (r.smoothProperty = "oImageSmoothingEnabled")
                : o.msImageSmoothingEnabled && (r.smoothProperty = "msImageSmoothingEnabled")
        }
        return (
          r.initPlugins(t.__plugins),
          (r.blendModes =
            (undefined === i && (i = []),
            us()
              ? ((i[O.NORMAL] = "source-over"),
                (i[O.ADD] = "lighter"),
                (i[O.MULTIPLY] = "multiply"),
                (i[O.SCREEN] = "screen"),
                (i[O.OVERLAY] = "overlay"),
                (i[O.DARKEN] = "darken"),
                (i[O.LIGHTEN] = "lighten"),
                (i[O.COLOR_DODGE] = "color-dodge"),
                (i[O.COLOR_BURN] = "color-burn"),
                (i[O.HARD_LIGHT] = "hard-light"),
                (i[O.SOFT_LIGHT] = "soft-light"),
                (i[O.DIFFERENCE] = "difference"),
                (i[O.EXCLUSION] = "exclusion"),
                (i[O.HUE] = "hue"),
                (i[O.SATURATION] = "saturate"),
                (i[O.COLOR] = "color"),
                (i[O.LUMINOSITY] = "luminosity"))
              : ((i[O.NORMAL] = "source-over"),
                (i[O.ADD] = "lighter"),
                (i[O.MULTIPLY] = "source-over"),
                (i[O.SCREEN] = "source-over"),
                (i[O.OVERLAY] = "source-over"),
                (i[O.DARKEN] = "source-over"),
                (i[O.LIGHTEN] = "source-over"),
                (i[O.COLOR_DODGE] = "source-over"),
                (i[O.COLOR_BURN] = "source-over"),
                (i[O.HARD_LIGHT] = "source-over"),
                (i[O.SOFT_LIGHT] = "source-over"),
                (i[O.DIFFERENCE] = "source-over"),
                (i[O.EXCLUSION] = "source-over"),
                (i[O.HUE] = "source-over"),
                (i[O.SATURATION] = "source-over"),
                (i[O.COLOR] = "source-over"),
                (i[O.LUMINOSITY] = "source-over")),
            (i[O.NORMAL_NPM] = i[O.NORMAL]),
            (i[O.ADD_NPM] = i[O.ADD]),
            (i[O.SCREEN_NPM] = i[O.SCREEN]),
            (i[O.SRC_IN] = "source-in"),
            (i[O.SRC_OUT] = "source-out"),
            (i[O.SRC_ATOP] = "source-atop"),
            (i[O.DST_OVER] = "destination-over"),
            (i[O.DST_IN] = "destination-in"),
            (i[O.DST_OUT] = "destination-out"),
            (i[O.DST_ATOP] = "destination-atop"),
            (i[O.XOR] = "xor"),
            (i[O.SUBTRACT] = "source-over"),
            i)),
          (r._activeBlendMode = null),
          (r._outerBlend = false),
          (r._projTransform = null),
          (r.renderingToScreen = false),
          ne("Canvas"),
          r.resize(r.options.width, r.options.height),
          r
        )
      }
      return (
        (function (e, t) {
          function n() {
            this.constructor = e
          }
          ;(os(e, t),
            (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
        })(t, e),
        (t.prototype.render = function (e, t, n, i, r) {
          if (this.view) {
            ;((this.renderingToScreen = !t), this.emit("prerender"))
            var o = this.resolution
            t
              ? ((t = t.castToBaseTexture())._canvasRenderTarget ||
                  ((t._canvasRenderTarget = new Pe(t.width, t.height, t.resolution)),
                  (t.resource = new zt.CanvasResource(t._canvasRenderTarget.canvas)),
                  (t.valid = true)),
                (this.context = t._canvasRenderTarget.context),
                (this.resolution = t._canvasRenderTarget.resolution))
              : (this.context = this.rootContext)
            var a = this.context
            if (((this._projTransform = i || null), t || (this._lastObjectRendered = e), !r)) {
              var s = e.enableTempParent()
              ;(e.updateTransform(), e.disableTempParent(s))
            }
            if (
              (a.save(),
              a.setTransform(1, 0, 0, 1, 0, 0),
              (a.globalAlpha = 1),
              (this._activeBlendMode = O.NORMAL),
              (this._outerBlend = false),
              (a.globalCompositeOperation = this.blendModes[O.NORMAL]),
              undefined !== n ? n : this.clearBeforeRender)
            )
              if (this.renderingToScreen)
                this.transparent
                  ? a.clearRect(0, 0, this.width, this.height)
                  : ((a.fillStyle = this._backgroundColorString),
                    a.fillRect(0, 0, this.width, this.height))
              else {
                t._canvasRenderTarget.clear()
                var u = t.clearColor
                u[3] > 0 && ((a.fillStyle = oe(se(u))), a.fillRect(0, 0, t.realWidth, t.realHeight))
              }
            var l = this.context
            ;((this.context = a),
              e.renderCanvas(this),
              (this.context = l),
              a.restore(),
              (this.resolution = o),
              (this._projTransform = null),
              this.emit("postrender"))
          }
        }),
        (t.prototype.setContextTransform = function (e, t, n) {
          var i = e,
            r = this._projTransform,
            o = this.resolution
          ;((n = n || o),
            r && ((i = ls).copyFrom(e), i.prepend(r)),
            t
              ? this.context.setTransform(
                  i.a * n,
                  i.b * n,
                  i.c * n,
                  i.d * n,
                  (i.tx * o) | 0,
                  (i.ty * o) | 0,
                )
              : this.context.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * o, i.ty * o))
        }),
        (t.prototype.clear = function (e) {
          var t = this.context
          ;((e = e || this._backgroundColorString),
            !this.transparent && e
              ? ((t.fillStyle = e), t.fillRect(0, 0, this.width, this.height))
              : t.clearRect(0, 0, this.width, this.height))
        }),
        (t.prototype.setBlendMode = function (e, t) {
          var n = e === O.SRC_IN || e === O.SRC_OUT || e === O.DST_IN || e === O.DST_ATOP
          ;(!t && n && (e = O.NORMAL),
            this._activeBlendMode !== e &&
              ((this._activeBlendMode = e),
              (this._outerBlend = n),
              (this.context.globalCompositeOperation = this.blendModes[e])))
        }),
        (t.prototype.destroy = function (t) {
          ;(e.prototype.destroy.call(this, t),
            (this.context = null),
            (this.refresh = true),
            this.maskManager.destroy(),
            (this.maskManager = null),
            (this.smoothProperty = null))
        }),
        (t.prototype.resize = function (t, n) {
          ;(e.prototype.resize.call(this, t, n),
            this.smoothProperty &&
              (this.rootContext[this.smoothProperty] = Y.SCALE_MODE === B.LINEAR))
        }),
        (t.prototype.invalidateBlendMode = function () {
          this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation)
        }),
        (t.registerPlugin = function (e, n) {
          ;((t.__plugins = t.__plugins || {}), (t.__plugins[e] = n))
        }),
        t
      )
    })(Si),
    ds = {
      canvas: null,
      getTintedCanvas: function (e, t) {
        var n = e.texture,
          i = "#" + ("00000" + (0 | (t = ds.roundColor(t))).toString(16)).substr(-6)
        n.tintCache = n.tintCache || {}
        var r,
          o = n.tintCache[i]
        if (o) {
          if (o.tintId === n._updateID) return n.tintCache[i]
          r = n.tintCache[i]
        } else r = document.createElement("canvas")
        if ((ds.tintMethod(n, t, r), (r.tintId = n._updateID), ds.convertTintToImage)) {
          var a = new Image()
          ;((a.src = r.toDataURL()), (n.tintCache[i] = a))
        } else n.tintCache[i] = r
        return r
      },
      getTintedPattern: function (e, t) {
        var n = "#" + ("00000" + (0 | (t = ds.roundColor(t))).toString(16)).substr(-6)
        e.patternCache = e.patternCache || {}
        var i = e.patternCache[n]
        return (
          (i && i.tintId === e._updateID) ||
            (ds.canvas || (ds.canvas = document.createElement("canvas")),
            ds.tintMethod(e, t, ds.canvas),
            ((i = ds.canvas.getContext("2d").createPattern(ds.canvas, "repeat")).tintId =
              e._updateID),
            (e.patternCache[n] = i)),
          i
        )
      },
      tintWithMultiply: function (e, t, n) {
        var i = n.getContext("2d"),
          r = e._frame.clone(),
          o = e.baseTexture.resolution
        ;((r.x *= o),
          (r.y *= o),
          (r.width *= o),
          (r.height *= o),
          (n.width = Math.ceil(r.width)),
          (n.height = Math.ceil(r.height)),
          i.save(),
          (i.fillStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6)),
          i.fillRect(0, 0, r.width, r.height),
          (i.globalCompositeOperation = "multiply"))
        var a = e.baseTexture.getDrawableSource()
        ;(i.drawImage(a, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height),
          (i.globalCompositeOperation = "destination-atop"),
          i.drawImage(a, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height),
          i.restore())
      },
      tintWithOverlay: function (e, t, n) {
        var i = n.getContext("2d"),
          r = e._frame.clone(),
          o = e.baseTexture.resolution
        ;((r.x *= o),
          (r.y *= o),
          (r.width *= o),
          (r.height *= o),
          (n.width = Math.ceil(r.width)),
          (n.height = Math.ceil(r.height)),
          i.save(),
          (i.globalCompositeOperation = "copy"),
          (i.fillStyle = "#" + ("00000" + (0 | t).toString(16)).substr(-6)),
          i.fillRect(0, 0, r.width, r.height),
          (i.globalCompositeOperation = "destination-atop"),
          i.drawImage(
            e.baseTexture.getDrawableSource(),
            r.x,
            r.y,
            r.width,
            r.height,
            0,
            0,
            r.width,
            r.height,
          ),
          i.restore())
      },
      tintWithPerPixel: function (e, t, n) {
        var i = n.getContext("2d"),
          r = e._frame.clone(),
          o = e.baseTexture.resolution
        ;((r.x *= o),
          (r.y *= o),
          (r.width *= o),
          (r.height *= o),
          (n.width = Math.ceil(r.width)),
          (n.height = Math.ceil(r.height)),
          i.save(),
          (i.globalCompositeOperation = "copy"),
          i.drawImage(
            e.baseTexture.getDrawableSource(),
            r.x,
            r.y,
            r.width,
            r.height,
            0,
            0,
            r.width,
            r.height,
          ),
          i.restore())
        for (
          var a = re(t),
            s = a[0],
            u = a[1],
            l = a[2],
            c = i.getImageData(0, 0, r.width, r.height),
            d = c.data,
            h = 0;
          h < d.length;
          h += 4
        )
          ((d[h + 0] *= s), (d[h + 1] *= u), (d[h + 2] *= l))
        i.putImageData(c, 0, 0)
      },
      roundColor: function (e) {
        var t = ds.cacheStepsPerColorChannel,
          n = re(e)
        return (
          (n[0] = Math.min(255, (n[0] / t) * t)),
          (n[1] = Math.min(255, (n[1] / t) * t)),
          (n[2] = Math.min(255, (n[2] / t) * t)),
          se(n)
        )
      },
      cacheStepsPerColorChannel: 8,
      convertTintToImage: false,
      canUseMultiply: us(),
      tintMethod: null,
    }
  ds.tintMethod = ds.canUseMultiply ? ds.tintWithMultiply : ds.tintWithPerPixel
  var hs = Li.create
  ;((Li.create = function (e) {
    if (!(e && e.forceCanvas))
      try {
        return hs(e)
      } catch (e) {}
    return new cs(e)
  }),
    (Nt.prototype.getDrawableSource = function () {
      var e = this.resource
      return e ? e.bitmap || e.source : null
    }),
    (qt.prototype._canvasRenderTarget = null),
    (Jt.prototype.patternCache = null),
    (Jt.prototype.tintCache = null))
  var ps = (function () {
    function e(e) {
      this.renderer = e
    }
    return (
      (e.prototype.render = function (e) {
        var t = this.renderer,
          n = e.worldTransform
        ;((t.context.globalAlpha = e.worldAlpha),
          t.setBlendMode(e.blendMode),
          t.setContextTransform(n, e.roundPixels),
          e.drawMode !== R.TRIANGLES ? this._renderTriangleMesh(e) : this._renderTriangles(e))
      }),
      (e.prototype._renderTriangleMesh = function (e) {
        for (var t = e.geometry.buffers[0].data.length, n = 0; n < t - 2; n++) {
          var i = 2 * n
          this._renderDrawTriangle(e, i, i + 2, i + 4)
        }
      }),
      (e.prototype._renderTriangles = function (e) {
        for (var t = e.geometry.getIndex().data, n = t.length, i = 0; i < n; i += 3) {
          var r = 2 * t[i],
            o = 2 * t[i + 1],
            a = 2 * t[i + 2]
          this._renderDrawTriangle(e, r, o, a)
        }
      }),
      (e.prototype._renderDrawTriangle = function (e, t, n, i) {
        var r = this.renderer.context,
          o = e.geometry.buffers[0].data,
          a = e.uvs,
          s = e.texture
        if (s.valid) {
          var u = 16777215 !== e.tint,
            l = s.baseTexture,
            c = l.width,
            d = l.height
          u &&
            e._cachedTint !== e.tint &&
            ((e._cachedTint = e.tint), (e._tintedCanvas = ds.getTintedCanvas(e, e.tint)))
          var h = u ? e._tintedCanvas : l.getDrawableSource(),
            p = a[t] * l.width,
            f = a[n] * l.width,
            _ = a[i] * l.width,
            g = a[t + 1] * l.height,
            m = a[n + 1] * l.height,
            v = a[i + 1] * l.height,
            y = o[t],
            C = o[n],
            b = o[i],
            w = o[t + 1],
            x = o[n + 1],
            T = o[i + 1],
            S = e.canvasPadding / this.renderer.resolution
          if (S > 0) {
            var L = S / Math.abs(e.worldTransform.a),
              E = S / Math.abs(e.worldTransform.d),
              A = (y + C + b) / 3,
              I = (w + x + T) / 3,
              M = y - A,
              P = w - I,
              O = Math.sqrt(M * M + P * P)
            ;((y = A + (M / O) * (O + L)),
              (w = I + (P / O) * (O + E)),
              (P = x - I),
              (C = A + ((M = C - A) / (O = Math.sqrt(M * M + P * P))) * (O + L)),
              (x = I + (P / O) * (O + E)),
              (P = T - I),
              (b = A + ((M = b - A) / (O = Math.sqrt(M * M + P * P))) * (O + L)),
              (T = I + (P / O) * (O + E)))
          }
          ;(r.save(),
            r.beginPath(),
            r.moveTo(y, w),
            r.lineTo(C, x),
            r.lineTo(b, T),
            r.closePath(),
            r.clip())
          var R = p * m + g * _ + f * v - m * _ - g * f - p * v,
            k = y * m + g * b + C * v - m * b - g * C - y * v,
            N = p * C + y * _ + f * b - C * _ - y * f - p * b,
            D = p * m * b + g * C * _ + y * f * v - y * m * _ - g * f * b - p * C * v,
            B = w * m + g * T + x * v - m * T - g * x - w * v,
            F = p * x + w * _ + f * T - x * _ - w * f - p * T,
            U = p * m * T + g * x * _ + w * f * v - w * m * _ - g * f * T - p * x * v
          ;(r.transform(k / R, B / R, N / R, F / R, D / R, U / R),
            r.drawImage(h, 0, 0, c * l.resolution, d * l.resolution, 0, 0, c, d),
            r.restore(),
            this.renderer.invalidateBlendMode())
        }
      }),
      (e.prototype.renderMeshFlat = function (e) {
        var t = this.renderer.context,
          n = e.geometry.getBuffer("aVertexPosition").data,
          i = n.length / 2
        t.beginPath()
        for (var r = 1; r < i - 2; ++r) {
          var o = 2 * r,
            a = n[o],
            s = n[o + 1],
            u = n[o + 2],
            l = n[o + 3],
            c = n[o + 4],
            d = n[o + 5]
          ;(t.moveTo(a, s), t.lineTo(u, l), t.lineTo(c, d))
        }
        ;((t.fillStyle = "#FF0000"), t.fill(), t.closePath())
      }),
      (e.prototype.destroy = function () {
        this.renderer = null
      }),
      e
    )
  })()
  ;((Y.MESH_CANVAS_PADDING = 0),
    (Wo.prototype._renderCanvas = function (e, t) {
      e.plugins.mesh.render(t)
    }),
    (Ka.prototype._cachedTint = 16777215),
    (Ka.prototype._tintedCanvas = null),
    (Ka.prototype._canvasUvs = null),
    (Ka.prototype._renderCanvas = function (e) {
      var t = e.context,
        n = this.worldTransform,
        i = 16777215 !== this.tint,
        r = this.texture
      if (r.valid) {
        i &&
          this._cachedTint !== this.tint &&
          ((this._cachedTint = this.tint),
          (this._tintedCanvas = ds.getTintedCanvas(this, this.tint)))
        var o = i ? this._tintedCanvas : r.baseTexture.getDrawableSource()
        this._canvasUvs || (this._canvasUvs = [0, 0, 0, 0, 0, 0, 0, 0])
        var a = this.vertices,
          s = this._canvasUvs,
          u = i ? 0 : r.frame.x,
          l = i ? 0 : r.frame.y,
          c = u + r.frame.width,
          d = l + r.frame.height
        ;((s[0] = u),
          (s[1] = u + this._leftWidth),
          (s[2] = c - this._rightWidth),
          (s[3] = c),
          (s[4] = l),
          (s[5] = l + this._topHeight),
          (s[6] = d - this._bottomHeight),
          (s[7] = d))
        for (var h = 0; h < 8; h++) s[h] *= r.baseTexture.resolution
        ;((t.globalAlpha = this.worldAlpha),
          e.setBlendMode(this.blendMode),
          e.setContextTransform(n, this.roundPixels))
        for (var p = 0; p < 3; p++)
          for (var f = 0; f < 3; f++) {
            var _ = 2 * f + 8 * p,
              g = Math.max(1, s[f + 1] - s[f]),
              m = Math.max(1, s[p + 5] - s[p + 4]),
              v = Math.max(1, a[_ + 10] - a[_]),
              y = Math.max(1, a[_ + 11] - a[_ + 1])
            t.drawImage(o, s[f], s[p + 4], g, m, a[_], a[_ + 1], v, y)
          }
      }
    }))
  var fs = false
  ;((Yo.prototype._cachedTint = 16777215),
    (Yo.prototype._tintedCanvas = null),
    (Yo.prototype._renderCanvas = function (e) {
      ;(this.shader.uvMatrix && (this.shader.uvMatrix.update(), this.calculateUvs()),
        this.material._renderCanvas
          ? this.material._renderCanvas(e, this)
          : fs ||
            ((fs = true),
            window.console &&
              console.warn("Mesh with custom shaders are not supported in CanvasRenderer.")))
    }),
    (Yo.prototype._canvasPadding = null),
    Object.defineProperty(Yo.prototype, "canvasPadding", {
      get: function () {
        return null !== this._canvasPadding ? this._canvasPadding : Y.MESH_CANVAS_PADDING
      },
      set: function (e) {
        this._canvasPadding = e
      },
    }),
    (qa.prototype._renderCanvas = function (e) {
      ;(this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(),
        this.shader.update && this.shader.update(),
        this.calculateUvs(),
        this.material._renderCanvas(e, this))
    }),
    (Wa.prototype._renderCanvas = function (e) {
      ;((this.autoUpdate || this.geometry._width !== this.shader.texture.height) &&
        ((this.geometry._width = this.shader.texture.height), this.geometry.update()),
        this.shader.update && this.shader.update(),
        this.calculateUvs(),
        this.material._renderCanvas(e, this))
    }))
  var _s,
    gs = (function () {
      function e(e) {
        ;((this.renderer = e), (this._svgMatrix = null), (this._tempMatrix = new qe()))
      }
      return (
        (e.prototype._calcCanvasStyle = function (e, t) {
          var n
          return (
            e.texture && e.texture.baseTexture !== Jt.WHITE.baseTexture
              ? e.texture.valid
                ? ((n = ds.getTintedPattern(e.texture, t)),
                  this.setPatternTransform(n, e.matrix || qe.IDENTITY))
                : (n = "#808080")
              : (n = "#" + ("00000" + (0 | t).toString(16)).substr(-6)),
            n
          )
        }),
        (e.prototype.render = function (e) {
          var t = this.renderer,
            n = t.context,
            i = e.worldAlpha,
            r = e.transform.worldTransform
          ;(t.setContextTransform(r), t.setBlendMode(e.blendMode))
          for (
            var o,
              a,
              s = e.geometry.graphicsData,
              u = ((e.tint >> 16) & 255) / 255,
              l = ((e.tint >> 8) & 255) / 255,
              c = (255 & e.tint) / 255,
              d = 0;
            d < s.length;
            d++
          ) {
            var h = s[d],
              p = h.shape,
              f = h.fillStyle,
              _ = h.lineStyle,
              g = 0 | h.fillStyle.color,
              m = 0 | h.lineStyle.color
            if (
              (h.matrix && t.setContextTransform(r.copyTo(this._tempMatrix).append(h.matrix)),
              f.visible)
            ) {
              var v =
                (((((g >> 16) & 255) / 255) * u * 255) << 16) +
                (((((g >> 8) & 255) / 255) * l * 255) << 8) +
                ((255 & g) / 255) * c * 255
              o = this._calcCanvasStyle(f, v)
            }
            if (_.visible) {
              var y =
                (((((m >> 16) & 255) / 255) * u * 255) << 16) +
                (((((m >> 8) & 255) / 255) * l * 255) << 8) +
                ((255 & m) / 255) * c * 255
              a = this._calcCanvasStyle(_, y)
            }
            if (
              ((n.lineWidth = _.width),
              (n.lineCap = _.cap),
              (n.lineJoin = _.join),
              (n.miterLimit = _.miterLimit),
              h.type === Fe.POLY)
            ) {
              n.beginPath()
              var C = (A = p).points,
                b = h.holes,
                w = undefined,
                x = undefined,
                T = undefined,
                S = undefined
              n.moveTo(C[0], C[1])
              for (var L = 2; L < C.length; L += 2) n.lineTo(C[L], C[L + 1])
              if ((A.closeStroke && n.closePath(), b.length > 0)) {
                ;((w = 0), (T = C[0]), (S = C[1]))
                for (L = 2; L + 2 < C.length; L += 2)
                  w += (C[L] - T) * (C[L + 3] - S) - (C[L + 2] - T) * (C[L + 1] - S)
                for (var E = 0; E < b.length; E++)
                  if ((C = b[E].shape.points)) {
                    ;((x = 0), (T = C[0]), (S = C[1]))
                    for (L = 2; L + 2 < C.length; L += 2)
                      x += (C[L] - T) * (C[L + 3] - S) - (C[L + 2] - T) * (C[L + 1] - S)
                    if (x * w < 0) {
                      n.moveTo(C[0], C[1])
                      for (L = 2; L < C.length; L += 2) n.lineTo(C[L], C[L + 1])
                    } else {
                      n.moveTo(C[C.length - 2], C[C.length - 1])
                      for (L = C.length - 4; L >= 0; L -= 2) n.lineTo(C[L], C[L + 1])
                    }
                    b[E].shape.closeStroke && n.closePath()
                  }
              }
              ;(f.visible && ((n.globalAlpha = f.alpha * i), (n.fillStyle = o), n.fill()),
                _.visible && ((n.globalAlpha = _.alpha * i), (n.strokeStyle = a), n.stroke()))
            } else if (h.type === Fe.RECT) {
              var A = p
              ;(f.visible &&
                ((n.globalAlpha = f.alpha * i),
                (n.fillStyle = o),
                n.fillRect(A.x, A.y, A.width, A.height)),
                _.visible &&
                  ((n.globalAlpha = _.alpha * i),
                  (n.strokeStyle = a),
                  n.strokeRect(A.x, A.y, A.width, A.height)))
            } else if (h.type === Fe.CIRC) {
              A = p
              ;(n.beginPath(),
                n.arc(A.x, A.y, A.radius, 0, 2 * Math.PI),
                n.closePath(),
                f.visible && ((n.globalAlpha = f.alpha * i), (n.fillStyle = o), n.fill()),
                _.visible && ((n.globalAlpha = _.alpha * i), (n.strokeStyle = a), n.stroke()))
            } else if (h.type === Fe.ELIP) {
              var I = 2 * (A = p).width,
                M = 2 * A.height,
                P = A.x - I / 2,
                O = A.y - M / 2
              n.beginPath()
              var R = 0.5522848,
                k = (I / 2) * R,
                N = (M / 2) * R,
                D = P + I,
                B = O + M,
                F = P + I / 2,
                U = O + M / 2
              ;(n.moveTo(P, U),
                n.bezierCurveTo(P, U - N, F - k, O, F, O),
                n.bezierCurveTo(F + k, O, D, U - N, D, U),
                n.bezierCurveTo(D, U + N, F + k, B, F, B),
                n.bezierCurveTo(F - k, B, P, U + N, P, U),
                n.closePath(),
                f.visible && ((n.globalAlpha = f.alpha * i), (n.fillStyle = o), n.fill()),
                _.visible && ((n.globalAlpha = _.alpha * i), (n.strokeStyle = a), n.stroke()))
            } else if (h.type === Fe.RREC) {
              var G = (A = p).x,
                j = A.y,
                H = A.width,
                V = A.height,
                Z = A.radius,
                z = (Math.min(H, V) / 2) | 0
              ;((Z = Z > z ? z : Z),
                n.beginPath(),
                n.moveTo(G, j + Z),
                n.lineTo(G, j + V - Z),
                n.quadraticCurveTo(G, j + V, G + Z, j + V),
                n.lineTo(G + H - Z, j + V),
                n.quadraticCurveTo(G + H, j + V, G + H, j + V - Z),
                n.lineTo(G + H, j + Z),
                n.quadraticCurveTo(G + H, j, G + H - Z, j),
                n.lineTo(G + Z, j),
                n.quadraticCurveTo(G, j, G, j + Z),
                n.closePath(),
                f.visible && ((n.globalAlpha = f.alpha * i), (n.fillStyle = o), n.fill()),
                _.visible && ((n.globalAlpha = _.alpha * i), (n.strokeStyle = a), n.stroke()))
            }
          }
        }),
        (e.prototype.setPatternTransform = function (e, t) {
          if (false !== this._svgMatrix) {
            if (!this._svgMatrix) {
              var n = document.createElementNS("http://www.w3.org/2000/svg", "svg")
              if (
                (n && n.createSVGMatrix && (this._svgMatrix = n.createSVGMatrix()),
                !this._svgMatrix || !e.setTransform)
              )
                return void (this._svgMatrix = false)
            }
            ;((this._svgMatrix.a = t.a),
              (this._svgMatrix.b = t.b),
              (this._svgMatrix.c = t.c),
              (this._svgMatrix.d = t.d),
              (this._svgMatrix.e = t.tx),
              (this._svgMatrix.f = t.ty),
              e.setTransform(this._svgMatrix.inverse()))
          }
        }),
        (e.prototype.destroy = function () {
          ;((this.renderer = null), (this._svgMatrix = null), (this._tempMatrix = null))
        }),
        e
      )
    })(),
    ms = new qe()
  ;((Qr.prototype.generateCanvasTexture = function (e, t) {
    undefined === t && (t = 1)
    var n = this.getLocalBounds(),
      i = en.create({ width: n.width, height: n.height, scaleMode: e, resolution: t })
    ;(_s || (_s = new cs()),
      this.transform.updateLocalTransform(),
      this.transform.localTransform.copyTo(ms),
      ms.invert(),
      (ms.tx -= n.x),
      (ms.ty -= n.y),
      _s.render(this, i, true, ms))
    var r = Jt.from(i.baseTexture._canvasRenderTarget.canvas, { scaleMode: e })
    return (r.baseTexture.setResolution(t), r)
  }),
    (Qr.prototype.cachedGraphicsData = []),
    (Qr.prototype._renderCanvas = function (e) {
      true !== this.isMask && (this.finishPoly(), e.plugins.graphics.render(this))
    }))
  var vs = new qe(),
    ys = (function () {
      function e(e) {
        this.renderer = e
      }
      return (
        (e.prototype.render = function (e) {
          var t = e._texture,
            n = this.renderer,
            i = n.context,
            r = t._frame.width,
            o = t._frame.height,
            a = e.transform.worldTransform,
            s = 0,
            u = 0,
            l = t.baseTexture.getDrawableSource()
          if (!(t.orig.width <= 0 || t.orig.height <= 0) && t.valid && l && t.valid) {
            ;(n.setBlendMode(e.blendMode, true), (n.context.globalAlpha = e.worldAlpha))
            var c = t.baseTexture.scaleMode === B.LINEAR
            ;(n.smoothProperty && n.context[n.smoothProperty] !== c && (i[n.smoothProperty] = c),
              t.trim
                ? ((s = t.trim.width / 2 + t.trim.x - e.anchor.x * t.orig.width),
                  (u = t.trim.height / 2 + t.trim.y - e.anchor.y * t.orig.height))
                : ((s = (0.5 - e.anchor.x) * t.orig.width),
                  (u = (0.5 - e.anchor.y) * t.orig.height)),
              t.rotate &&
                (a.copyTo(vs),
                (a = vs),
                it.matrixAppendRotationInv(a, t.rotate, s, u),
                (s = 0),
                (u = 0)),
              (s -= r / 2),
              (u -= o / 2),
              n.setContextTransform(a, e.roundPixels, 1),
              e.roundPixels && ((s |= 0), (u |= 0)))
            var d = t.baseTexture.resolution,
              h = n._outerBlend
            ;(h &&
              (i.save(),
              i.beginPath(),
              i.rect(s * n.resolution, u * n.resolution, r * n.resolution, o * n.resolution),
              i.clip()),
              16777215 !== e.tint
                ? ((e._cachedTint === e.tint && e._tintedCanvas.tintId === e._texture._updateID) ||
                    ((e._cachedTint = e.tint), (e._tintedCanvas = ds.getTintedCanvas(e, e.tint))),
                  i.drawImage(
                    e._tintedCanvas,
                    0,
                    0,
                    Math.floor(r * d),
                    Math.floor(o * d),
                    Math.floor(s * n.resolution),
                    Math.floor(u * n.resolution),
                    Math.floor(r * n.resolution),
                    Math.floor(o * n.resolution),
                  ))
                : i.drawImage(
                    l,
                    t._frame.x * d,
                    t._frame.y * d,
                    Math.floor(r * d),
                    Math.floor(o * d),
                    Math.floor(s * n.resolution),
                    Math.floor(u * n.resolution),
                    Math.floor(r * n.resolution),
                    Math.floor(o * n.resolution),
                  ),
              h && i.restore(),
              n.setBlendMode(O.NORMAL))
          }
        }),
        (e.prototype.destroy = function () {
          this.renderer = null
        }),
        e
      )
    })()
  ;((ro.prototype._tintedCanvas = null),
    (ro.prototype._renderCanvas = function (e) {
      e.plugins.sprite.render(this)
    }))
  var Cs = new He(),
    bs = (function () {
      function e(e) {
        this.renderer = e
      }
      return (
        (e.prototype.image = function (e, t, n) {
          var i = new Image()
          return ((i.src = this.base64(e, t, n)), i)
        }),
        (e.prototype.base64 = function (e, t, n) {
          return this.canvas(e).toDataURL(t, n)
        }),
        (e.prototype.canvas = function (e) {
          var t,
            n,
            i,
            r,
            o = this.renderer
          ;(e && (r = e instanceof en ? e : o.generateTexture(e)),
            r
              ? ((t = r.baseTexture._canvasRenderTarget.context),
                (n = r.baseTexture._canvasRenderTarget.resolution),
                (i = r.frame))
              : ((t = o.rootContext),
                (n = o.resolution),
                ((i = Cs).width = this.renderer.width),
                (i.height = this.renderer.height)))
          var a = Math.floor(i.width * n + 1e-4),
            s = Math.floor(i.height * n + 1e-4),
            u = new Pe(a, s, 1),
            l = t.getImageData(i.x * n, i.y * n, a, s)
          return (u.context.putImageData(l, 0, 0), u.canvas)
        }),
        (e.prototype.pixels = function (e) {
          var t,
            n,
            i,
            r,
            o = this.renderer
          return (
            e && (r = e instanceof en ? e : o.generateTexture(e)),
            r
              ? ((t = r.baseTexture._canvasRenderTarget.context),
                (n = r.baseTexture._canvasRenderTarget.resolution),
                (i = r.frame))
              : ((t = o.rootContext), ((i = Cs).width = o.width), (i.height = o.height)),
            t.getImageData(0, 0, i.width * n, i.height * n).data
          )
        }),
        (e.prototype.destroy = function () {
          this.renderer = null
        }),
        e
      )
    })()
  Object.defineProperty(cs.prototype, "extract", {
    get: function () {
      return (
        Se("v5.3.0", "CanvasRenderer#extract is deprecated, use CanvasRenderer#plugins.extract"),
        this.plugins.extract
      )
    },
  })
  var ws = function (e, t) {
    return (
      (ws =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }),
      ws(e, t)
    )
  }
  function xs(e, t) {
    var n = e
    if (t instanceof Nt) {
      var i = t.source,
        r = 0 === i.width ? n.canvas.width : Math.min(n.canvas.width, i.width),
        o = 0 === i.height ? n.canvas.height : Math.min(n.canvas.height, i.height)
      return (n.ctx.drawImage(i, 0, 0, r, o, 0, 0, n.canvas.width, n.canvas.height), true)
    }
    return false
  }
  var Ts = (function (e) {
    function t(t) {
      var n = e.call(this, t) || this
      return (
        (n.uploadHookHelper = n),
        (n.canvas = document.createElement("canvas")),
        (n.canvas.width = 16),
        (n.canvas.height = 16),
        (n.ctx = n.canvas.getContext("2d")),
        n.registerUploadHook(xs),
        n
      )
    }
    return (
      (function (e, t) {
        function n() {
          this.constructor = e
        }
        ;(ws(e, t),
          (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n())))
      })(t, e),
      (t.prototype.destroy = function () {
        ;(e.prototype.destroy.call(this), (this.ctx = null), (this.canvas = null))
      }),
      t
    )
  })(Lo)
  ;((Bo.prototype._renderCanvas = function (e) {
    var t = this._texture
    if (t.baseTexture.valid) {
      var n = e.context,
        i = this.worldTransform,
        r = t.baseTexture,
        o = r.getDrawableSource(),
        a = r.resolution,
        s = ((this.tilePosition.x / this.tileScale.x) % t._frame.width) * a,
        u = ((this.tilePosition.y / this.tileScale.y) % t._frame.height) * a
      if (this._textureID !== this._texture._updateID || this._cachedTint !== this.tint) {
        this._textureID = this._texture._updateID
        var l = new Pe(t._frame.width, t._frame.height, a)
        ;(16777215 !== this.tint
          ? ((this._tintedCanvas = ds.getTintedCanvas(this, this.tint)),
            l.context.drawImage(this._tintedCanvas, 0, 0))
          : l.context.drawImage(o, -t._frame.x * a, -t._frame.y * a),
          (this._cachedTint = this.tint),
          (this._canvasPattern = l.context.createPattern(l.canvas, "repeat")))
      }
      ;((n.globalAlpha = this.worldAlpha),
        e.setBlendMode(this.blendMode),
        e.setContextTransform(i),
        (n.fillStyle = this._canvasPattern),
        n.scale(this.tileScale.x / a, this.tileScale.y / a))
      var c = this.anchor.x * -this._width,
        d = this.anchor.y * -this._height
      this.uvRespectAnchor
        ? (n.translate(s, u),
          n.fillRect(
            -s + c,
            -u + d,
            (this._width / this.tileScale.x) * a,
            (this._height / this.tileScale.y) * a,
          ))
        : (n.translate(s + c, u + d),
          n.fillRect(
            -s,
            -u,
            (this._width / this.tileScale.x) * a,
            (this._height / this.tileScale.y) * a,
          ))
    }
  }),
    (Cr.prototype.renderCanvas = function (e) {
      if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
        var t = e.context,
          n = this.worldTransform,
          i = true,
          r = 0,
          o = 0,
          a = 0,
          s = 0
        ;(e.setBlendMode(this.blendMode),
          (t.globalAlpha = this.worldAlpha),
          this.displayObjectUpdateTransform())
        for (var u = 0; u < this.children.length; ++u) {
          var l = this.children[u]
          if (l.visible && l._texture.valid) {
            var c = l._texture.frame
            if (((t.globalAlpha = this.worldAlpha * l.alpha), l.rotation % (2 * Math.PI) == 0))
              (i && (e.setContextTransform(n, false, 1), (i = false)),
                (r = l.anchor.x * (-c.width * l.scale.x) + l.position.x + 0.5),
                (o = l.anchor.y * (-c.height * l.scale.y) + l.position.y + 0.5),
                (a = c.width * l.scale.x),
                (s = c.height * l.scale.y))
            else {
              ;(i || (i = true), l.displayObjectUpdateTransform())
              var d = l.worldTransform
              ;(e.setContextTransform(d, this.roundPixels, 1),
                (r = l.anchor.x * -c.width + 0.5),
                (o = l.anchor.y * -c.height + 0.5),
                (a = c.width),
                (s = c.height))
            }
            var h = l._texture.baseTexture.resolution
            t.drawImage(
              l._texture.baseTexture.getDrawableSource(),
              c.x * h,
              c.y * h,
              c.width * h,
              c.height * h,
              r * e.resolution,
              o * e.resolution,
              a * e.resolution,
              s * e.resolution,
            )
          }
        }
      }
    }),
    (dt.prototype._renderCanvas = function (e) {}),
    (dt.prototype.renderCanvas = function (e) {
      if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
        ;(this._mask && e.maskManager.pushMask(this._mask), this._renderCanvas(e))
        for (var t = 0, n = this.children.length; t < n; ++t) this.children[t].renderCanvas(e)
        this._mask && e.maskManager.popMask(e)
      }
    }),
    (ut.prototype.renderCanvas = function (e) {}),
    (go.prototype._renderCanvas = function (e) {
      ;(this._autoResolution &&
        this._resolution !== e.resolution &&
        ((this._resolution = e.resolution), (this.dirty = true)),
        this.updateText(true),
        ro.prototype._renderCanvas.call(this, e))
    }),
    cs.registerPlugin("accessibility", _t),
    cs.registerPlugin("extract", bs),
    cs.registerPlugin("graphics", gs),
    cs.registerPlugin("interaction", Lt),
    cs.registerPlugin("mesh", ps),
    cs.registerPlugin("prepare", Ts),
    cs.registerPlugin("sprite", ys))
}
