// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"J4Nk":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};
},{}],"awqi":[function(require,module,exports) {
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var k = require("object-assign"),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.concurrent_mode") : 60111,
    y = n ? Symbol.for("react.forward_ref") : 60112,
    z = n ? Symbol.for("react.suspense") : 60113,
    aa = n ? Symbol.for("react.memo") : 60115,
    ba = n ? Symbol.for("react.lazy") : 60116,
    A = "function" === typeof Symbol && Symbol.iterator;

function ca(a, b, d, c, e, g, h, f) {
  if (!a) {
    a = void 0;
    if (void 0 === b) a = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var l = [d, c, e, g, h, f],
          m = 0;
      a = Error(b.replace(/%s/g, function () {
        return l[m++];
      }));
      a.name = "Invariant Violation";
    }
    a.framesToPop = 1;
    throw a;
  }
}

function B(a) {
  for (var b = arguments.length - 1, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) d += "&args[]=" + encodeURIComponent(arguments[c + 1]);

  ca(!1, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", d);
}

var C = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    D = {};

function E(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  "object" !== typeof a && "function" !== typeof a && null != a ? B("85") : void 0;
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = d || C;
}

var H = G.prototype = new F();
H.constructor = G;
k(H, E.prototype);
H.isPureReactComponent = !0;
var I = {
  current: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, d) {
  var c = void 0,
      e = {},
      g = null,
      h = null;
  if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
  var f = arguments.length - 2;
  if (1 === f) e.children = d;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];

    e.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === e[c] && (e[c] = f[c]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: h,
    props: e,
    _owner: J.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var O = /\/+/g,
    P = [];

function Q(a, b, d, c) {
  if (P.length) {
    var e = P.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = d;
    e.context = c;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: d,
    context: c,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, d, c) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
    e = a[h];
    var f = b + T(e, h);
    g += S(e, f, d, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = A && a[A] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(e = a.next()).done;) e = e.value, f = b + T(e, h++), g += S(e, f, d, c);else "object" === e && (d = "" + a, B("31", "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, ""));
  return g;
}

function U(a, b, d) {
  return null == a ? 0 : S(a, "", b, d);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, d) {
  var c = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, c, d, function (a) {
    return a;
  }) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
}

function V(a, b, d, c, e) {
  var g = "";
  null != d && (g = ("" + d).replace(O, "$&/") + "/");
  b = Q(b, g, c, e);
  U(a, fa, b);
  R(b);
}

function W() {
  var a = I.current;
  null === a ? B("321") : void 0;
  return a;
}

var X = {
  Children: {
    map: function (a, b, d) {
      if (null == a) return a;
      var c = [];
      V(a, c, null, b, d);
      return c;
    },
    forEach: function (a, b, d) {
      if (null == a) return a;
      b = Q(null, null, b, d);
      U(a, ea, b);
      R(b);
    },
    count: function (a) {
      return U(a, function () {
        return null;
      }, null);
    },
    toArray: function (a) {
      var b = [];
      V(a, b, null, function (a) {
        return a;
      });
      return b;
    },
    only: function (a) {
      N(a) ? void 0 : B("143");
      return a;
    }
  },
  createRef: function () {
    return {
      current: null
    };
  },
  Component: E,
  PureComponent: G,
  createContext: function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function (a) {
    return {
      $$typeof: y,
      render: a
    };
  },
  lazy: function (a) {
    return {
      $$typeof: ba,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function (a, b) {
    return {
      $$typeof: aa,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function (a, b) {
    return W().useCallback(a, b);
  },
  useContext: function (a, b) {
    return W().useContext(a, b);
  },
  useEffect: function (a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function (a, b, d) {
    return W().useImperativeHandle(a, b, d);
  },
  useDebugValue: function () {},
  useLayoutEffect: function (a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function (a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function (a, b, d) {
    return W().useReducer(a, b, d);
  },
  useRef: function (a) {
    return W().useRef(a);
  },
  useState: function (a) {
    return W().useState(a);
  },
  Fragment: r,
  StrictMode: t,
  Suspense: z,
  createElement: M,
  cloneElement: function (a, b, d) {
    null === a || void 0 === a ? B("267", a) : void 0;
    var c = void 0,
        e = k({}, a.props),
        g = a.key,
        h = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (h = b.ref, f = J.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
    }

    c = arguments.length - 2;
    if (1 === c) e.children = d;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) l[m] = arguments[m + 2];

      e.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: h,
      props: e,
      _owner: f
    };
  },
  createFactory: function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.8.6",
  unstable_ConcurrentMode: x,
  unstable_Profiler: u,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: I,
    ReactCurrentOwner: J,
    assign: k
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;
},{"object-assign":"J4Nk"}],"1n8/":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = require('./cjs/react.development.js');
}
},{"./cjs/react.production.min.js":"awqi"}],"5IvP":[function(require,module,exports) {
var global = arguments[3];
/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c()}finally{g=f,l=Q}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
b}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f)}finally{O=!1}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v()}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v()}};
exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next}while(f!==d);null===c?c=d:c===d&&(d=a,p());
b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
exports.unstable_shouldYield=function(){return!e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};

},{}],"MDSO":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/scheduler.production.min.js');
} else {
  module.exports = require('./cjs/scheduler.development.js');
}
},{"./cjs/scheduler.production.min.js":"5IvP"}],"i17t":[function(require,module,exports) {
/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
'use strict';var aa=require("react"),n=require("object-assign"),r=require("scheduler");function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function x(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:x("227");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}
var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null}else x("198"),k=void 0;fa||(fa=!0,ha=k)}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x("96",a);if(!oa[c]){b.extractEvents?void 0:x("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x("98",d,a)}}}}
function qa(a,b,c){ra[a]?x("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null}function xa(a,b){null==b?x("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ba={injectEventPluginOrder:function(a){la?x("101"):void 0;la=Array.prototype.slice.call(a);na()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x("102",c):void 0,ma[c]=d,b=!0)}b&&na()}};
function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?x("231",b,typeof c):void 0;
return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x("95"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x("33")}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}
function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){this.isPersistent=fb},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
function ub(a,b){switch(a){case "keyup":return-1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function vb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
function yb(a,b){if(wb)return"compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b)}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}
function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb()}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a))}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
var Ub=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for("react.element"):60103,Wb=z?Symbol.for("react.portal"):60106,Xb=z?Symbol.for("react.fragment"):60107,Yb=z?Symbol.for("react.strict_mode"):60108,Zb=z?Symbol.for("react.profiler"):60114,$b=z?Symbol.for("react.provider"):60109,ac=z?Symbol.for("react.context"):60110,bc=z?Symbol.for("react.concurrent_mode"):60111,cc=z?Symbol.for("react.forward_ref"):60112,dc=z?Symbol.for("react.suspense"):60113,ec=z?Symbol.for("react.memo"):
60115,fc=z?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return"function"===typeof a?a:null}
function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return"ConcurrentMode";case Xb:return"Fragment";case Wb:return"Portal";case Zb:return"Profiler";case Yb:return"StrictMode";case dc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return"Context.Consumer";case $b:return"Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
function oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});
["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
sc);D[b]=new C(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null)});
function tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function vc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1)}
function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a)}
function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null)}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a))}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc()}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value)}},Qc=y.extend({view:null,detail:null}),Rc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=
f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
function dd(a,b){if(bd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x("188"):void 0}
function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling}x("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:x("189")}}c.alternate!==d?x("190"):void 0}3!==c.tag?x("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return"keypress"===
a.type?ld(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0)});td.forEach(function(a){wd(a,!1)});
var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l))}Da(g)}}var Bd=!0;
function E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1)}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0)}function Cd(a,b){Hb(Dd,a,b)}
function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a)}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Kd(c)}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Jd(a.document)}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
if(null===(t=m.firstChild))break;p=m;m=t}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode}m=t}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}
function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function $d(a,b){a=n({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function be(a,b){null!=b.dangerouslySetInnerHTML?x("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)}}
function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ie=void 0,je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a]})});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x("61")),null!=b.style&&"object"!==typeof b.style?x("62",""):void 0)}
function re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E(e,a)}c[e]=!0}}}function te(){}var ue=null,ve=null;
function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function xe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback;
function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d)}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
!0):ae(a,!!e.multiple,e.multiple?[]:"",!1))}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--)}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b}var He={},H={current:He},I={current:!1},Ie=He;
function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I,a);F(H,a)}function Le(a){F(I,a);F(H,a)}
function Me(a,b,c){H.current!==He?x("168"):void 0;G(H,b,a);G(I,c,a)}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x("108",ic(b)||"Unknown",e);return n({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b,a);G(I,I.current,a);return!0}
function Pe(a,b,c){var d=a.stateNode;d?void 0:x("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I,a),F(H,a),G(H,b,a)):F(I,a);G(I,c,a)}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function K(a,b,c,d){return new Ue(a,b,c,d)}
function Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
function Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
14;break a;case fc:g=16;d=null;break a}x("130",null==a?a:typeof a,"")}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}
function bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a)}
function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
b>c&&cf(a,b)}df(0,a)}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a)}
function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function L(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new aa.Component).refs;
function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c)}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null)}
function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var zf=Array.isArray;
function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x("309"):void 0,d=c.stateNode);d?void 0:x("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?x("284"):void 0;c._owner?void 0:x("290",a)}return a}
function Bf(a,b){"textarea"!==a.type&&x("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b)}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c)}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x("150"):void 0;h=l.call(h);null==h?x("151"):void 0;
for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h)}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=bf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x("152",h.displayName||h.name||"Component")}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x("174"):void 0;return a}
function Jf(a,b){G(Hf,b,a);G(Gf,a,a);G(N,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c)}F(N,a);G(N,b,a)}function Kf(a){F(N,a);F(Gf,a);F(Hf,a)}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a,a),G(N,c,a))}function Mf(a){Gf.current===a&&(F(N,a),F(Gf,a))}
var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x("321")}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}
function hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0}
function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x("310"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next}return Q}function og(a,b){return"function"===typeof b?b(a):b}
function pg(a){var b=ng(),c=b.queue;null===c?x("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d)}
function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d)}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function vg(){}
function wg(a,b,c){25>eg?void 0:x("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===
d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e)}}
var kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
function Ag(a,b){var c=K(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c)}xg=a;yg=Ee(b)}else a.effectTag|=2,zg=!1,xg=a}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1}
var Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d)}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b)}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo)}
function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?
null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x("156")}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue,a);c._currentValue=b}function Zg(a){var b=Vg.current;F(Vg,a);a.type._context._currentValue=b}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null}
function M(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b)}
function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case sf:Pg=!0}return d}
function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}
function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x("191",c):void 0;c.call(d)}a=a.nextEffect}}
function jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};mh=function(){};
nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te)}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b)}};oh=function(a,b,c,d){c!==d&&kh(b)};
var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){sh(a,c)}else b.current=null}
function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){sh(e,f)}}c=c.next}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){sh(a,f)}break;case 5:rh(a);break;case 4:wh(a)}}
function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return}x("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x("161")}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b)}break;case 6:null===b.stateNode?x("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:x("163")}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b)};return c}
function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Gh(a){switch(a.tag){case 1:J(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}
var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b)}a=a.return}Lh=null;U=0;Mh=-1;Nh=!1;T=null}
function Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,"");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null))}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}V=V.nextEffect}}
function Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x("163")}}V=V.nextEffect}}
function Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
e.child.stateNode;break;case 1:g=e.child.stateNode}hh(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x("163")}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect}}
function Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f)}catch(g){d=!0,e=g}d&&sh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1)}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh()}
function Zh(a,b){Oh=Kh=!0;a.current===b?x("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){e=!1;
f=void 0;try{Th()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c)}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=r.unstable_runWithPriority(r.unstable_NormalPriority,function(){return Ae(g)});Rh=g}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
b>c?b:c;0===b&&(Fh=null);$h(a,b)}
function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E(ab[k],e);break;case "source":E("error",e);break;case "img":case "image":case "link":E("error",e);E("load",e);break;case "form":E("reset",e);E("submit",e);break;case "details":E("toggle",e);break;case "input":wc(e,m);E("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};E("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E("invalid",e),se(p,"onChange")}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=te)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b)}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E("load",
p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case "source":E("error",p);h=m;break;case "img":case "image":case "link":E("error",p);E("load",p);h=m;break;case "form":E("reset",p);E("submit",p);h=m;break;case "details":E("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});E("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
m);h=be(p,m);E("invalid",p);se(t,"onChange");break;default:h=m}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A))}switch(k){case "input":Rb(p);
Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te)}(g=we(f,g))&&kh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?x("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?x("166"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke(b);break;case 18:break;default:x("156")}T=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gh(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
function ci(a,b){Kh?x("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T)}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v}m=m.return}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((ic(k.type)||"A React component")+
" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k))}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c)}}
function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823))}
function mf(a,b){var c=r.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case r.unstable_ImmediatePriority:d=1073741823;break;case r.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case r.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case r.unstable_LowPriority:case r.unstable_IdlePriority:d=1;break;default:x("313")}null!==Lh&&d===U&&--d}c===r.unstable_UserBlockingPriority&&
(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c)}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b))}
function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x("185")))}function ki(a,b,c,d,e){return r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=r.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((r.unstable_now()-ti)/10|0)}
function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&r.unstable_cancelCallback(ni)}mi=b;a=r.unstable_now()-ti;ni=r.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a})}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c)}function $h(a,b){a.expirationTime=b;a.finishedWork=null}
function lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b))}
function Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x("244"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}oi=b;Z=a}var Ei=!1;function di(){return Ei?!0:r.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot}while(a!==li)}Yh(0,!0)}finally{Ei=!1}}
function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x("253"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1)}
function Di(a,b,c){W?x("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)))}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1}
function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){Zh(a,b)})}function Dh(a){null===oi?x("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a)}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1)}}
function Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return r.unstable_runWithPriority(r.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1)}}
function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);x("171");g=void 0}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x("90");Sb(d);yc(d,e)}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1)}};
function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ni.prototype.render=function(a){this._defer?void 0:x("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x("191",c):void 0;c()}}};
function Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0)};
function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a)}}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Li(f._internalRoot)}
function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x("200");return Mi(a,b,null,c)}
var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x("188"):x("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x("200");null==a||void 0===a._reactInternalFiber?
x("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x("187"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1)}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
X;X=!0;try{ki(a)}finally{(X=b)||W||Yh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa)},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return Te(n({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;module.exports=Xi.default||Xi;

},{"react":"1n8/","object-assign":"J4Nk","scheduler":"MDSO"}],"NKHc":[function(require,module,exports) {
'use strict';

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if ("production" !== 'production') {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if ("production" === 'production') {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = require('./cjs/react-dom.production.min.js');
} else {
  module.exports = require('./cjs/react-dom.development.js');
}
},{"./cjs/react-dom.production.min.js":"i17t"}],"7y3A":[function(require,module,exports) {

},{}],"4itQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var CONFIG = {
  API_KEY: '7629dddb1ec68ae1209b400db720c6ec',
  BASE_ENDPOINT: 'http://api.musixmatch.com/ws/1.1'
};
var _default = CONFIG;
exports.default = _default;
},{}],"VShR":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = request;

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function request(url, options) {
  var urlWithApiKey = "".concat(url, "&apikey=").concat(_config.default.API_KEY, "&format=jsonp&callback=jsonp");

  var optionsWithDefaults = _objectSpread({}, options, {
    mode: "cors"
  });

  return fetch(urlWithApiKey, optionsWithDefaults).then(function (response) {
    return response.text();
  }).then(function (response) {
    // NOTE: Looks like API works with JSONP.
    // strip 'callback(' and ');' and parse to JSON.
    return JSON.parse(response.slice(6, response.length - 2));
  }).then(function (response) {
    var statusCode = response.message.header.status_code;

    if (!response.message.header || statusCode >= 400) {
      throw response.message && response.message.header;
    } else {
      return response.message.body;
    }
  });
}
},{"../config":"4itQ"}],"EuDf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../config"));

var _request = _interopRequireDefault(require("../services/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trackResource = {
  findTrack: function findTrack(queryParams) {
    var params = new URLSearchParams(queryParams);
    return (0, _request.default)("".concat(_config.default.BASE_ENDPOINT, "/track.search?").concat(params.toString())).then(function (response) {
      return response.track_list;
    });
  },
  getLyrics: function getLyrics(trackId) {
    return (0, _request.default)("".concat(_config.default.BASE_ENDPOINT, "/track.lyrics.get?track_id=").concat(trackId));
  },
  getTrack: function getTrack(trackId) {
    return (0, _request.default)("".concat(_config.default.BASE_ENDPOINT, "/track.get?track_id=").concat(trackId));
  }
};
var _default = trackResource;
exports.default = _default;
},{"../config":"4itQ","../services/request":"VShR"}],"SpjQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _extends;

function _extends() {
  exports.default = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
},{}],"3Vab":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _objectWithoutPropertiesLoose;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
},{}],"9qb7":[function(require,module,exports) {
var define;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],"2gTp":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if ("production" !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;
},{}],"d+o0":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.uncontrolledPropTypes = uncontrolledPropTypes;
exports.isProp = isProp;
exports.defaultKey = defaultKey;
exports.canAcceptRef = canAcceptRef;

var _invariant = _interopRequireDefault(require("invariant"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if ("production" !== 'production') {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ? "production" !== "production" ? (0, _invariant.default)(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : invariant(false) : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}

function isProp(props, prop) {
  return props[prop] !== undefined;
}

function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
},{"invariant":"2gTp"}],"0rwB":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = useUncontrolled;

var _react = require("react");

var Utils = _interopRequireWildcard(require("./utils"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var defaultValue = result[Utils.defaultKey(fieldName)],
        propsValue = result[fieldName],
        rest = _objectWithoutPropertiesLoose(result, [Utils.defaultKey(fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];
    var prevProps = (0, _react.useRef)({});

    var _useState = (0, _react.useState)(defaultValue),
        stateValue = _useState[0],
        setState = _useState[1];

    var isProp = Utils.isProp(props, fieldName);
    var wasProp = Utils.isProp(prevProps.current, fieldName);
    prevProps.current = props;
    /**
     * If a prop switches from controlled to Uncontrolled
     * reset its value to the defaultValue
     */

    if (!isProp && wasProp) {
      setState(defaultValue);
    }

    var propsHandler = props[handlerName];
    var handler = (0, _react.useCallback)(function (value) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (propsHandler) propsHandler.apply(void 0, [value].concat(args));
      setState(value);
    }, [setState, propsHandler]);
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = isProp ? propsValue : stateValue, _extends2[handlerName] = handler, _extends2));
  }, props);
}

module.exports = exports["default"];
},{"react":"1n8/","./utils":"d+o0"}],"S11h":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _inheritsLoose;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
},{}],"Ii5r":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forwardRef(renderFn, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? renderFn.name || renderFn.displayName : _ref$displayName;

  var render = function render(props, ref) {
    return renderFn(props, ref);
  };

  return Object.assign(_react.default.forwardRef || !allowFallback ? _react.default.forwardRef(render) : function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}
},{"react":"1n8/"}],"BAZo":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _forwardRef = _interopRequireDefault(require("@restart/context/forwardRef"));

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThemeContext = _react.default.createContext(new Map());

var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;
exports.ThemeConsumer = Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new Map();
    Object.keys(_this.props.prefixes).forEach(function (key) {
      _this.prefixes.set(key, _this.props.prefixes[key]);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(_react.default.Component);

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0, _react.useContext)(ThemeContext);
  return prefix || prefixes.get(defaultPrefix) || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return (0, _forwardRef.default)(function (_ref, ref) {
    var props = (0, _extends2.default)({}, _ref);
    props[forwardRefAs] = ref;
    var prefixes = (0, _react.useContext)(ThemeContext);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      // eslint-disable-next-line react/prop-types
      bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}

var _default = ThemeProvider;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/inheritsLoose":"S11h","@restart/context/forwardRef":"Ii5r","react":"1n8/"}],"c50E":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeEventKey = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectableContext = _react.default.createContext();

var makeEventKey = function makeEventKey(eventKey, href) {
  if (eventKey != null) return String(eventKey);
  return href || null;
};

exports.makeEventKey = makeEventKey;
var _default = SelectableContext;
exports.default = _default;
},{"react":"1n8/"}],"OCIn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _SelectableContext = _interopRequireDefault(require("./SelectableContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'button'
};

var AccordionToggle = _react.default.forwardRef(function (_ref, ref) {
  var Component = _ref.as,
      children = _ref.children,
      eventKey = _ref.eventKey,
      _onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "children", "eventKey", "onClick"]);
  var onSelect = (0, _react.useContext)(_SelectableContext.default);
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref,
    onClick: function onClick(e) {
      onSelect(eventKey, e);
      if (_onClick) _onClick(e);
    }
  }, props), children);
});

AccordionToggle.defaultProps = defaultProps;
var _default = AccordionToggle;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","react":"1n8/","./SelectableContext":"c50E"}],"SpGf":[function(require,module,exports) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],"m/mp":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

module.exports = exports["default"];
},{}],"nF2G":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = camelizeStyleName;

var _camelize = _interopRequireDefault(require("./camelize"));

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
 */
var msPattern = /^-ms-/;

function camelizeStyleName(string) {
  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./camelize":"m/mp"}],"ONuB":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = hyphenate;
var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

module.exports = exports["default"];
},{}],"i7ni":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = hyphenateStyleName;

var _hyphenate = _interopRequireDefault(require("./hyphenate"));

/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */
var msPattern = /^ms-/;

function hyphenateStyleName(string) {
  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./hyphenate":"ONuB"}],"PuKc":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = _getComputedStyle;

var _camelizeStyle = _interopRequireDefault(require("../util/camelizeStyle"));

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;
  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;
      prop = (0, _camelizeStyle.default)(prop);
      if (prop == 'float') prop = 'styleFloat';
      var current = node.currentStyle[prop] || null;
      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out

        if (rsLeft) runStyle.left = node.currentStyle.left;
        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px'; // Revert the changed values

        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","../util/camelizeStyle":"nF2G"}],"CFxQ":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = removeStyle;

function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}

module.exports = exports["default"];
},{}],"Vx1w":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];
},{}],"40SE":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(require("../util/inDOM"));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","../util/inDOM":"Vx1w"}],"OFA2":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}

module.exports = exports["default"];
},{}],"cZJ7":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = style;

var _camelizeStyle = _interopRequireDefault(require("../util/camelizeStyle"));

var _hyphenateStyle = _interopRequireDefault(require("../util/hyphenateStyle"));

var _getComputedStyle2 = _interopRequireDefault(require("./getComputedStyle"));

var _removeStyle = _interopRequireDefault(require("./removeStyle"));

var _properties = require("../transition/properties");

var _isTransform = _interopRequireDefault(require("../transition/isTransform"));

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];

    if (!value && value !== 0) {
      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
    } else if ((0, _isTransform.default)(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += _properties.transform + ": " + transforms + ";";
  }

  node.style.cssText += ';' + css;
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","../util/camelizeStyle":"nF2G","../util/hyphenateStyle":"i7ni","./getComputedStyle":"PuKc","./removeStyle":"CFxQ","../transition/properties":"40SE","../transition/isTransform":"OFA2"}],"qh4L":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _properties = _interopRequireDefault(require("./properties"));

var _style = _interopRequireDefault(require("../style"));

function onEnd(node, handler, duration) {
  var fakeEvent = {
    target: node,
    currentTarget: node
  },
      backup;
  if (!_properties.default.end) duration = 0;else if (duration == null) duration = parseDuration(node) || 0;

  if (_properties.default.end) {
    node.addEventListener(_properties.default.end, done, false);
    backup = setTimeout(function () {
      return done(fakeEvent);
    }, (duration || 100) * 1.5);
  } else setTimeout(done.bind(null, fakeEvent), 0);

  function done(event) {
    if (event.target !== event.currentTarget) return;
    clearTimeout(backup);
    event.target.removeEventListener(_properties.default.end, done);
    handler.call(this);
  }
}

onEnd._parseDuration = parseDuration;
var _default = onEnd;
exports.default = _default;

function parseDuration(node) {
  var str = (0, _style.default)(node, _properties.default.duration),
      mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./properties":"40SE","../style":"cZJ7"}],"Asjh":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}],"wVGV":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":"Asjh"}],"5D9O":[function(require,module,exports) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if ("production" !== 'production') {
  var ReactIs = require('react-is'); // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}
},{"./factoryWithThrowingShims":"wVGV"}],"nkXc":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyfill = polyfill;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  } // Binding "this" is important for shallow renderer support.


  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
} // React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.


componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.


  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;

  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }

  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }

  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }

  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  } // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.


  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.


  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }

    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}
},{}],"aUfQ":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var timeoutsShape = "production" !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape = "production" !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : null;
exports.classNamesShape = classNamesShape;
},{"prop-types":"5D9O"}],"4RiQ":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _PropTypes = require("./utils/PropTypes");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes = "production" !== "production" ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;
},{"prop-types":"5D9O","react":"1n8/","react-dom":"NKHc","react-lifecycles-compat":"nkXc","./utils/PropTypes":"aUfQ"}],"ykhp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = triggerBrowserReflow;

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}
},{}],"6ox0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

var _default = createChainedFunction;
exports.default = _default;
},{}],"4hAU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = _interopRequireDefault(require("dom-helpers/style"));

var _react = _interopRequireDefault(require("react"));

var _end = _interopRequireDefault(require("dom-helpers/transition/end"));

var _Transition = _interopRequireWildcard(require("react-transition-group/Transition"));

var _triggerBrowserReflow = _interopRequireDefault(require("./utils/triggerBrowserReflow"));

var _createChainedFunction = _interopRequireDefault(require("./utils/createChainedFunction"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _collapseStyles;

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + parseInt((0, _style.default)(elem, margins[0]), 10) + parseInt((0, _style.default)(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[_Transition.EXITED] = 'collapse', _collapseStyles[_Transition.EXITING] = 'collapsing', _collapseStyles[_Transition.ENTERING] = 'collapsing', _collapseStyles[_Transition.ENTERED] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  dimension: 'height',
  getDimensionValue: getDimensionValue
};

var Collapse =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Collapse, _React$Component);

  function Collapse() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    _this.handleEntering = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this._getScrollDimensionValue(elem, dimension);
    };

    _this.handleEntered = function (elem) {
      elem.style[_this.getDimension()] = null;
    };

    _this.handleExit = function (elem) {
      var dimension = _this.getDimension();

      elem.style[dimension] = _this.props.getDimensionValue(dimension, elem) + "px";
      (0, _triggerBrowserReflow.default)(elem);
    };

    _this.handleExiting = function (elem) {
      elem.style[_this.getDimension()] = '0';
    };

    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.getDimension = function getDimension() {
    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
  }
  /* -- Expanding -- */
  ; // for testing


  _proto._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
    var scroll = "scroll" + dimension[0].toUpperCase() + dimension.slice(1);
    return elem[scroll] + "px";
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        onEnter = _this$props.onEnter,
        onEntering = _this$props.onEntering,
        onEntered = _this$props.onEntered,
        onExit = _this$props.onExit,
        onExiting = _this$props.onExiting,
        className = _this$props.className,
        children = _this$props.children,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children"]);
    delete props.dimension;
    delete props.getDimensionValue;
    var handleEnter = (0, _createChainedFunction.default)(this.handleEnter, onEnter);
    var handleEntering = (0, _createChainedFunction.default)(this.handleEntering, onEntering);
    var handleEntered = (0, _createChainedFunction.default)(this.handleEntered, onEntered);
    var handleExit = (0, _createChainedFunction.default)(this.handleExit, onExit);
    var handleExiting = (0, _createChainedFunction.default)(this.handleExiting, onExiting);
    return _react.default.createElement(_Transition.default, (0, _extends2.default)({
      addEndListener: _end.default
    }, props, {
      "aria-expanded": props.role ? props.in : null,
      onEnter: handleEnter,
      onEntering: handleEntering,
      onEntered: handleEntered,
      onExit: handleExit,
      onExiting: handleExiting
    }), function (state, innerProps) {
      return _react.default.cloneElement(children, (0, _extends2.default)({}, innerProps, {
        className: (0, _classnames.default)(className, children.props.className, collapseStyles[state], _this2.getDimension() === 'width' && 'width')
      }));
    });
  };

  return Collapse;
}(_react.default.Component);

Collapse.defaultProps = defaultProps;
var _default = Collapse;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","dom-helpers/style":"cZJ7","react":"1n8/","dom-helpers/transition/end":"qh4L","react-transition-group/Transition":"4RiQ","./utils/triggerBrowserReflow":"ykhp","./utils/createChainedFunction":"6ox0"}],"bIp9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react.default.createContext(null);

exports.default = _default;
},{"react":"1n8/"}],"tC6T":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _AccordionContext = _interopRequireDefault(require("./AccordionContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionCollapse = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "eventKey"]);
  var contextEventKey = (0, _react.useContext)(_AccordionContext.default);
  return _react.default.createElement(_Collapse.default, (0, _extends2.default)({
    ref: ref,
    in: contextEventKey === eventKey
  }, props), _react.default.createElement("div", null, _react.default.Children.only(children)));
});

var _default = AccordionCollapse;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","react":"1n8/","./Collapse":"4hAU","./AccordionContext":"bIp9"}],"IR7X":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _hook = _interopRequireDefault(require("uncontrollable/hook"));

var _ThemeProvider = require("./ThemeProvider");

var _AccordionToggle = _interopRequireDefault(require("./AccordionToggle"));

var _SelectableContext = _interopRequireDefault(require("./SelectableContext"));

var _AccordionCollapse = _interopRequireDefault(require("./AccordionCollapse"));

var _AccordionContext = _interopRequireDefault(require("./AccordionContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'div'
};

var Accordion = _react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _hook.default)(props, {
    activeKey: 'onSelect'
  }),
      Component = _useUncontrolled.as,
      activeKey = _useUncontrolled.activeKey,
      bsPrefix = _useUncontrolled.bsPrefix,
      children = _useUncontrolled.children,
      className = _useUncontrolled.className,
      onSelect = _useUncontrolled.onSelect,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "activeKey", "bsPrefix", "children", "className", "onSelect"]);

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'accordion');
  return _react.default.createElement(_AccordionContext.default.Provider, {
    value: activeKey
  }, _react.default.createElement(_SelectableContext.default.Provider, {
    value: onSelect
  }, _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    className: (0, _classnames.default)(className, bsPrefix)
  }), children)));
});

Accordion.defaultProps = defaultProps;
Accordion.Toggle = _AccordionToggle.default;
Accordion.Collapse = _AccordionCollapse.default;
var _default = Accordion;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","uncontrollable/hook":"0rwB","./ThemeProvider":"BAZo","./AccordionToggle":"OCIn","./SelectableContext":"c50E","./AccordionCollapse":"tC6T","./AccordionContext":"bIp9"}],"sR8t":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */
function useCommittedRef(value) {
  var ref = (0, _react.useRef)(value);
  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

var _default = useCommittedRef;
exports.default = _default;
},{"react":"1n8/"}],"nAQU":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = useEventCallback;

var _react = require("react");

var _useCommittedRef = _interopRequireDefault(require("./useCommittedRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useEventCallback(fn) {
  var ref = (0, _useCommittedRef.default)(fn);
  return (0, _react.useCallback)(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}
},{"react":"1n8/","./useCommittedRef":"sR8t"}],"dMsm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createWithBsPrefix;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _camelize = _interopRequireDefault(require("dom-helpers/util/camelize"));

var _ThemeProvider = require("../ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = _react.default.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["className", "bsPrefix", "as"]);
    var resolvedPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, prefix);
    return _react.default.createElement(Tag, (0, _extends2.default)({
      ref: ref,
      className: (0, _classnames.default)(className, resolvedPrefix)
    }, props));
  });

  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","dom-helpers/util/camelize":"m/mp","../ThemeProvider":"BAZo"}],"DDdP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(className) {
  return _react.default.forwardRef(function (p, ref) {
    return _react.default.createElement("div", (0, _extends2.default)({}, p, {
      ref: ref,
      className: (0, _classnames.default)(p.className, className)
    }));
  });
};

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","react":"1n8/","classnames":"9qb7"}],"dhH0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _Transition = _interopRequireWildcard(require("react-transition-group/Transition"));

var _end = _interopRequireDefault(require("dom-helpers/transition/end"));

var _triggerBrowserReflow = _interopRequireDefault(require("./utils/triggerBrowserReflow"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _fadeStyles;

var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[_Transition.ENTERING] = 'show', _fadeStyles[_Transition.ENTERED] = 'show', _fadeStyles);

var Fade =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Fade, _React$Component);

  function Fade() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (node) {
      (0, _triggerBrowserReflow.default)(node);
      if (_this.props.onEnter) _this.props.onEnter(node);
    };

    return _this;
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["className", "children"]);
    return _react.default.createElement(_Transition.default, (0, _extends2.default)({
      addEndListener: _end.default
    }, props, {
      onEnter: this.handleEnter
    }), function (status, innerProps) {
      return _react.default.cloneElement(children, (0, _extends2.default)({}, innerProps, {
        className: (0, _classnames.default)('fade', className, children.props.className, fadeStyles[status])
      }));
    });
  };

  return Fade;
}(_react.default.Component);

Fade.defaultProps = defaultProps;
var _default = Fade;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","react-transition-group/Transition":"4RiQ","dom-helpers/transition/end":"qh4L","./utils/triggerBrowserReflow":"ykhp"}],"Yv92":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
var defaultProps = {
  label: 'Close'
};

var CloseButton = _react.default.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick;
  return _react.default.createElement("button", {
    ref: ref,
    type: "button",
    className: "close",
    onClick: onClick
  }, _react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), _react.default.createElement("span", {
    className: "sr-only"
  }, label));
});

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
var _default = CloseButton;
exports.default = _default;
},{"prop-types":"5D9O","react":"1n8/"}],"bk0i":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _assertThisInitialized;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
},{}],"U3GN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _createChainedFunction = _interopRequireDefault(require("./utils/createChainedFunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = SafeAnchor.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        href = _this$props.href,
        onClick = _this$props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.as,
        disabled = _this$props2.disabled,
        onKeyDown = _this$props2.onKeyDown,
        innerRef = _this$props2.innerRef,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["as", "disabled", "onKeyDown", "innerRef"]);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')

      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (innerRef) props.ref = innerRef;
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      onClick: this.handleClick,
      onKeyDown: (0, _createChainedFunction.default)(this.handleKeyDown, onKeyDown)
    }));
  };

  return SafeAnchor;
}(_react.default.Component);

SafeAnchor.defaultProps = defaultProps;
var _default = SafeAnchor;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/assertThisInitialized":"bk0i","@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","./utils/createChainedFunction":"6ox0"}],"2x2v":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _hook = _interopRequireDefault(require("uncontrollable/hook"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _divWithClassName = _interopRequireDefault(require("./utils/divWithClassName"));

var _ThemeProvider = require("./ThemeProvider");

var _Fade = _interopRequireDefault(require("./Fade"));

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  show: true,
  transition: _Fade.default,
  closeLabel: 'Close alert'
};
var controllables = {
  show: 'onClose'
};

var Alert = _react.default.forwardRef(function (uncontrolledProps, ref) {
  var _useControllable = (0, _hook.default)(uncontrolledProps, controllables),
      bsPrefix = _useControllable.bsPrefix,
      show = _useControllable.show,
      closeLabel = _useControllable.closeLabel,
      className = _useControllable.className,
      children = _useControllable.children,
      variant = _useControllable.variant,
      onClose = _useControllable.onClose,
      dismissible = _useControllable.dismissible,
      Transition = _useControllable.transition,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useControllable, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"]);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'alert');
  var handleClose = (0, _useEventCallback.default)(function (e) {
    onClose(false, e);
  });

  var alert = _react.default.createElement("div", (0, _extends2.default)({
    role: "alert"
  }, Transition ? props : undefined, {
    className: (0, _classnames.default)(className, prefix, variant && prefix + "-" + variant, dismissible && prefix + "-dismissible")
  }), dismissible && _react.default.createElement(_CloseButton.default, {
    onClick: handleClose,
    label: closeLabel
  }), children);

  if (!Transition) return show ? alert : null;
  return _react.default.createElement(Transition, (0, _extends2.default)({
    unmountOnExit: true,
    ref: ref
  }, props, {
    in: show
  }), alert);
});

var DivStyledAsH4 = (0, _divWithClassName.default)('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps;
Alert.Link = (0, _createWithBsPrefix.default)('alert-link', {
  Component: _SafeAnchor.default
});
Alert.Heading = (0, _createWithBsPrefix.default)('alert-heading', {
  Component: DivStyledAsH4
});
var _default = Alert;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","uncontrollable/hook":"0rwB","@restart/hooks/useEventCallback":"nAQU","./utils/createWithBsPrefix":"dMsm","./utils/divWithClassName":"DDdP","./ThemeProvider":"BAZo","./Fade":"dhH0","./CloseButton":"Yv92","./SafeAnchor":"U3GN"}],"sdL4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  pill: false
};

var Badge = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      pill = _ref.pill,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "pill", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'badge');
  return _react.default.createElement("span", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, pill && prefix + "-pill", variant && prefix + "-" + variant)
  }));
});

Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
var _default = Badge;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"79vz":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  active: false,
  as: 'li'
};

var BreadcrumbItem = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      className = _ref.className,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "active", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'breadcrumb-item');
  var href = props.href,
      title = props.title,
      target = props.target,
      elementProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["href", "title", "target"]);
  var linkProps = {
    href: href,
    title: title,
    target: target
  };
  return _react.default.createElement(Component, {
    ref: ref,
    className: (0, _classnames.default)(prefix, className, {
      active: active
    }),
    "aria-current": active ? 'page' : undefined
  }, active ? _react.default.createElement("span", (0, _extends2.default)({}, elementProps, {
    className: (0, _classnames.default)({
      active: active
    })
  })) : _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, elementProps, linkProps)));
});

BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps;
var _default = BreadcrumbItem;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./SafeAnchor":"U3GN","./ThemeProvider":"BAZo"}],"FYi9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  label: 'breadcrumb',
  listProps: {},
  as: 'nav'
};

var Breadcrumb = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      listProps = _ref.listProps,
      children = _ref.children,
      label = _ref.label,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "listProps", "children", "label", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'breadcrumb');
  return _react.default.createElement(Component, (0, _extends2.default)({
    "aria-label": label,
    className: className,
    ref: ref
  }, props), _react.default.createElement("ol", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)(prefix, listProps.className)
  }), children));
});

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = defaultProps;
Breadcrumb.Item = _BreadcrumbItem.default;
var _default = Breadcrumb;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo","./BreadcrumbItem":"79vz"}],"Ulc8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn');
  var classes = (0, _classnames.default)(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, props, {
      as: as,
      innerRef: ref,
      className: (0, _classnames.default)(classes, props.disabled && 'disabled')
    }));
  }

  var Component = as || 'button';
  if (ref) props.ref = ref;
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    type: type,
    className: classes
  }));
});

Button.displayName = 'Button';
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo","./SafeAnchor":"U3GN"}],"q8PY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group',
  as: 'div'
};

var ButtonGroup = _react.default.forwardRef(function (props, ref) {
  var bsPrefix = props.bsPrefix,
      size = props.size,
      toggle = props.toggle,
      vertical = props.vertical,
      className = props.className,
      Component = props.as,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["bsPrefix", "size", "toggle", "vertical", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn-group');
  var baseClass = prefix;
  if (vertical) baseClass = prefix + "-vertical";
  return _react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    ref: ref,
    className: (0, _classnames.default)(className, baseClass, size && prefix + "-" + size, toggle && prefix + "-toggle")
  }));
});

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = defaultProps;
var _default = ButtonGroup;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"4vae":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  role: 'toolbar'
};

var ButtonToolbar = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn-toolbar');
  return _react.default.createElement("div", (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix)
  }));
});

ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.defaultProps = defaultProps;
var _default = ButtonToolbar;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"JUoT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'img',
  variant: null
};

var CardImg = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "variant", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card-img');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref,
    className: (0, _classnames.default)(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});

CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
var _default = CardImg;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"01L0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _divWithClassName = _interopRequireDefault(require("./utils/divWithClassName"));

var _CardContext = _interopRequireDefault(require("./CardContext"));

var _CardImg = _interopRequireDefault(require("./CardImg"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DivStyledAsH5 = (0, _divWithClassName.default)('h5');
var DivStyledAsH6 = (0, _divWithClassName.default)('h6');
var CardBody = (0, _createWithBsPrefix.default)('card-body');
var defaultProps = {
  as: 'div',
  body: false
};

var Card = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card');
  var cardContext = (0, _react.useMemo)(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return _react.default.createElement(_CardContext.default.Provider, {
    value: cardContext
  }, _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ? _react.default.createElement(CardBody, null, children) : children));
});

Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg.default;
Card.Title = (0, _createWithBsPrefix.default)('card-title', {
  Component: DivStyledAsH5
});
Card.Subtitle = (0, _createWithBsPrefix.default)('card-subtitle', {
  Component: DivStyledAsH6
});
Card.Body = CardBody;
Card.Link = (0, _createWithBsPrefix.default)('card-link', {
  Component: 'a'
});
Card.Text = (0, _createWithBsPrefix.default)('card-text', {
  Component: 'p'
});
Card.Header = (0, _createWithBsPrefix.default)('card-header');
Card.Footer = (0, _createWithBsPrefix.default)('card-footer');
Card.ImgOverlay = (0, _createWithBsPrefix.default)('card-img-overlay');
var _default = Card;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo","./utils/createWithBsPrefix":"dMsm","./utils/divWithClassName":"DDdP","./CardContext":"bIp9","./CardImg":"JUoT"}],"lRJT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWithBsPrefix.default)('card-columns');

exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm"}],"PWxY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWithBsPrefix.default)('card-deck');

exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm"}],"EjH0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWithBsPrefix.default)('card-group');

exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm"}],"5r1P":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _end = _interopRequireDefault(require("./end"));

exports.end = _end.default;

var _properties = _interopRequireDefault(require("./properties"));

exports.properties = _properties.default;
var _default = {
  end: _end.default,
  properties: _properties.default
};
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./end":"qh4L","./properties":"40SE"}],"pOCK":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = uncontrollable;

var _react = _interopRequireDefault(require("react"));

var _invariant = _interopRequireDefault(require("invariant"));

var Utils = _interopRequireWildcard(require("./utils"));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = Utils.canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(Utils.defaultKey);
  !(canAcceptRef || !methods.length) ? "production" !== "production" ? (0, _invariant.default)(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : invariant(false) : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          _this._values[propName] = value;
          if (!_this.unmounted) _this.forceUpdate();
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let the forceUpdate trigger the update
      return !this._notifying;
    };

    _proto.componentWillMount = function componentWillMount() {
      var _this2 = this;

      var props = this.props;
      this._values = Object.create(null);
      controlledProps.forEach(function (key) {
        _this2._values[key] = props[Utils.defaultKey(key)];
      });
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var props = this.props;
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        if (!Utils.isProp(nextProps, key) && Utils.isProp(props, key)) {
          _this3._values[key] = nextProps[Utils.defaultKey(key)];
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = _objectWithoutPropertiesLoose(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this4.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this4._values[propName];
      });
      return _react.default.createElement(Component, _extends({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(_react.default.Component);

  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = _extends({
    innerRef: function innerRef() {}
  }, Utils.uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (_react.default.forwardRef) {
    WrappedComponent = _react.default.forwardRef(function (props, ref) {
      return _react.default.createElement(UncontrolledComponent, _extends({}, props, {
        innerRef: ref
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, _extends({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}

module.exports = exports["default"];
},{"react":"1n8/","invariant":"2gTp","./utils":"d+o0"}],"UYHu":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWithBsPrefix.default)('carousel-caption', {
  Component: 'div'
});

exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm"}],"lSRV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWithBsPrefix.default)('carousel-item');

exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm"}],"F5PP":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;
exports.forEach = forEach;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */
function map(children, func) {
  var index = 0;
  return _react.default.Children.map(children, function (child) {
    return _react.default.isValidElement(child) ? func(child, index++) : child;
  });
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  var index = 0;

  _react.default.Children.forEach(children, function (child) {
    if (_react.default.isValidElement(child)) func(child, index++);
  });
}
},{"react":"1n8/"}],"Ee1q":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = _interopRequireDefault(require("dom-helpers/style"));

var _transition = _interopRequireDefault(require("dom-helpers/transition"));

var _react = _interopRequireWildcard(require("react"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _CarouselCaption = _interopRequireDefault(require("./CarouselCaption"));

var _CarouselItem = _interopRequireDefault(require("./CarouselItem"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var _ElementChildren = require("./utils/ElementChildren");

var _triggerBrowserReflow = _interopRequireDefault(require("./utils/triggerBrowserReflow"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var countChildren = function countChildren(c) {
  return _react.default.Children.toArray(c).filter(_react.default.isValidElement).length;
}; // TODO: `slide` should be `animate`.


var defaultProps = {
  as: 'div',
  slide: true,
  fade: false,
  interval: 5000,
  keyboard: true,
  pauseOnHover: true,
  wrap: true,
  indicators: true,
  controls: true,
  activeIndex: 0,
  prevIcon: _react.default.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: _react.default.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next'
};

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Carousel, _React$Component);

  function Carousel(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.handleSlideEnd = function () {
      var pendingIndex = _this._pendingIndex;
      _this._isSliding = false;
      _this._pendingIndex = null;
      if (pendingIndex != null) _this.to(pendingIndex);else _this.cycle();
    };

    _this.handleMouseOut = function () {
      _this.cycle();
    };

    _this.handleMouseOver = function () {
      if (_this.props.pauseOnHover) _this.pause();
    };

    _this.handleKeyDown = function (event) {
      if (/input|textarea/i.test(event.target.tagName)) return;

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();

          _this.handlePrev(event);

          break;

        case 'ArrowRight':
          event.preventDefault();

          _this.handleNext(event);

          break;

        default:
          break;
      }
    };

    _this.handleNextWhenVisible = function () {
      if (!_this.isUnmounted && !document.hidden && (0, _style.default)(_this.carousel.current, 'visibility') !== 'hidden') {
        _this.handleNext();
      }
    };

    _this.handleNext = function (e) {
      if (_this._isSliding) return;
      var _this$props = _this.props,
          wrap = _this$props.wrap,
          activeIndex = _this$props.activeIndex;
      var index = activeIndex + 1;
      var count = countChildren(_this.props.children);

      if (index > count - 1) {
        if (!wrap) return;
        index = 0;
      }

      _this.select(index, e, 'next');
    };

    _this.handlePrev = function (e) {
      if (_this._isSliding) return;
      var _this$props2 = _this.props,
          wrap = _this$props2.wrap,
          activeIndex = _this$props2.activeIndex;
      var index = activeIndex - 1;

      if (index < 0) {
        if (!wrap) return;
        index = countChildren(_this.props.children) - 1;
      }

      _this.select(index, e, 'prev');
    };

    _this.state = {
      prevClasses: '',
      currentClasses: 'active'
    };
    _this.isUnmounted = false;
    _this.carousel = _react.default.createRef();
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.cycle();
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var previousActiveIndex = _ref.activeIndex;

    if (nextProps.activeIndex !== previousActiveIndex) {
      var lastPossibleIndex = countChildren(nextProps.children) - 1;
      var nextIndex = Math.max(0, Math.min(nextProps.activeIndex, lastPossibleIndex));
      var direction;

      if (nextIndex === 0 && previousActiveIndex >= lastPossibleIndex || previousActiveIndex <= nextIndex) {
        direction = 'next';
      } else {
        direction = 'prev';
      }

      return {
        direction: direction,
        previousActiveIndex: previousActiveIndex,
        activeIndex: nextIndex
      };
    }

    return null;
  };

  _proto.componentDidUpdate = function componentDidUpdate(_, prevState) {
    var _this2 = this;

    var _this$props3 = this.props,
        bsPrefix = _this$props3.bsPrefix,
        slide = _this$props3.slide,
        onSlideEnd = _this$props3.onSlideEnd;
    if (!slide || this.state.activeIndex === prevState.activeIndex || this._isSliding) return;
    var _this$state = this.state,
        activeIndex = _this$state.activeIndex,
        direction = _this$state.direction;
    var orderClassName, directionalClassName;

    if (direction === 'next') {
      orderClassName = bsPrefix + "-item-next";
      directionalClassName = bsPrefix + "-item-left";
    } else if (direction === 'prev') {
      orderClassName = bsPrefix + "-item-prev";
      directionalClassName = bsPrefix + "-item-right";
    }

    this._isSliding = true;
    this.pause(); // eslint-disable-next-line react/no-did-update-set-state

    this.safeSetState({
      prevClasses: 'active',
      currentClasses: orderClassName
    }, function () {
      var items = _this2.carousel.current.children;
      var nextElement = items[activeIndex];
      (0, _triggerBrowserReflow.default)(nextElement);

      _this2.safeSetState({
        prevClasses: (0, _classnames.default)('active', directionalClassName),
        currentClasses: (0, _classnames.default)(orderClassName, directionalClassName)
      }, function () {
        return _transition.default.end(nextElement, function () {
          _this2.safeSetState({
            prevClasses: '',
            currentClasses: 'active'
          }, _this2.handleSlideEnd);

          if (onSlideEnd) {
            onSlideEnd();
          }
        });
      });
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
    this.isUnmounted = true;
  };

  _proto.safeSetState = function safeSetState(state, cb) {
    var _this3 = this;

    if (this.isUnmounted) return;
    this.setState(state, function () {
      return !_this3.isUnmounted && cb();
    });
  } // This might be a public API.
  ;

  _proto.pause = function pause() {
    this._isPaused = true;
    clearInterval(this._interval);
    this._interval = null;
  };

  _proto.cycle = function cycle() {
    this._isPaused = false;
    clearInterval(this._interval);
    this._interval = null;

    if (this.props.interval && !this._isPaused) {
      this._interval = setInterval(document.visibilityState ? this.handleNextWhenVisible : this.handleNext, this.props.interval);
    }
  };

  _proto.to = function to(index, event) {
    var children = this.props.children;

    if (index < 0 || index > countChildren(children) - 1) {
      return;
    }

    if (this._isSliding) {
      this._pendingIndex = index;
      return;
    }

    this.select(index, event);
  };

  _proto.select = function select(index, event, direction) {
    var _this4 = this;

    clearTimeout(this.selectThrottle);
    if (event && event.persist) event.persist(); // The timeout throttles fast clicks, in order to give any pending state
    // a chance to update and propagate back through props

    this.selectThrottle = setTimeout(function () {
      clearTimeout(_this4.timeout);
      var _this4$props = _this4.props,
          activeIndex = _this4$props.activeIndex,
          onSelect = _this4$props.onSelect;
      if (index === activeIndex || _this4._isSliding || _this4.isUnmounted) return;
      onSelect(index, direction || (index < activeIndex ? 'prev' : 'next'), event);
    }, 50);
  };

  _proto.renderControls = function renderControls(properties) {
    var bsPrefix = this.props.bsPrefix;
    var wrap = properties.wrap,
        children = properties.children,
        activeIndex = properties.activeIndex,
        prevIcon = properties.prevIcon,
        nextIcon = properties.nextIcon,
        prevLabel = properties.prevLabel,
        nextLabel = properties.nextLabel;
    var count = countChildren(children);
    return [(wrap || activeIndex !== 0) && _react.default.createElement(_SafeAnchor.default, {
      key: "prev",
      className: bsPrefix + "-control-prev",
      onClick: this.handlePrev
    }, prevIcon, prevLabel && _react.default.createElement("span", {
      className: "sr-only"
    }, prevLabel)), (wrap || activeIndex !== count - 1) && _react.default.createElement(_SafeAnchor.default, {
      key: "next",
      className: bsPrefix + "-control-next",
      onClick: this.handleNext
    }, nextIcon, nextLabel && _react.default.createElement("span", {
      className: "sr-only"
    }, nextLabel))];
  };

  _proto.renderIndicators = function renderIndicators(children, activeIndex) {
    var _this5 = this;

    var bsPrefix = this.props.bsPrefix;
    var indicators = [];
    (0, _ElementChildren.forEach)(children, function (child, index) {
      indicators.push(_react.default.createElement("li", {
        key: index,
        className: index === activeIndex ? 'active' : null,
        onClick: function onClick(e) {
          return _this5.to(index, e);
        }
      }), // Force whitespace between indicator elements. Bootstrap requires
      // this for correct spacing of elements.
      ' ');
    });
    return _react.default.createElement("ol", {
      className: bsPrefix + "-indicators"
    }, indicators);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        Component = _this$props4.as,
        bsPrefix = _this$props4.bsPrefix,
        slide = _this$props4.slide,
        fade = _this$props4.fade,
        indicators = _this$props4.indicators,
        controls = _this$props4.controls,
        wrap = _this$props4.wrap,
        prevIcon = _this$props4.prevIcon,
        prevLabel = _this$props4.prevLabel,
        nextIcon = _this$props4.nextIcon,
        nextLabel = _this$props4.nextLabel,
        className = _this$props4.className,
        children = _this$props4.children,
        keyboard = _this$props4.keyboard,
        _5 = _this$props4.activeIndex,
        _4 = _this$props4.pauseOnHover,
        _3 = _this$props4.interval,
        _2 = _this$props4.onSelect,
        _1 = _this$props4.onSlideEnd,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props4, ["as", "bsPrefix", "slide", "fade", "indicators", "controls", "wrap", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children", "keyboard", "activeIndex", "pauseOnHover", "interval", "onSelect", "onSlideEnd"]);
    var _this$state2 = this.state,
        activeIndex = _this$state2.activeIndex,
        previousActiveIndex = _this$state2.previousActiveIndex,
        prevClasses = _this$state2.prevClasses,
        currentClasses = _this$state2.currentClasses;
    return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
      _react.default.createElement(Component, (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)(className, bsPrefix, slide && 'slide', fade && bsPrefix + "-fade"),
        onKeyDown: keyboard ? this.handleKeyDown : undefined,
        onMouseOver: this.handleMouseOver,
        onMouseOut: this.handleMouseOut
      }), indicators && this.renderIndicators(children, activeIndex), _react.default.createElement("div", {
        className: bsPrefix + "-inner",
        ref: this.carousel
      }, (0, _ElementChildren.map)(children, function (child, index) {
        var current = index === activeIndex;
        var previous = index === previousActiveIndex;
        return (0, _react.cloneElement)(child, {
          className: (0, _classnames.default)(child.props.className, bsPrefix + "-item", current && currentClasses, previous && prevClasses)
        });
      })), controls && this.renderControls({
        wrap: wrap,
        children: children,
        activeIndex: activeIndex,
        prevIcon: prevIcon,
        prevLabel: prevLabel,
        nextIcon: nextIcon,
        nextLabel: nextLabel
      }))
    );
  };

  return Carousel;
}(_react.default.Component);

Carousel.defaultProps = defaultProps;
var DecoratedCarousel = (0, _ThemeProvider.createBootstrapComponent)((0, _uncontrollable.default)(Carousel, {
  activeIndex: 'onSelect'
}), 'carousel');
DecoratedCarousel.Caption = _CarouselCaption.default;
DecoratedCarousel.Item = _CarouselItem.default;
var _default = DecoratedCarousel;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","dom-helpers/style":"cZJ7","dom-helpers/transition":"5r1P","react":"1n8/","uncontrollable":"pOCK","./CarouselCaption":"UYHu","./CarouselItem":"lSRV","./SafeAnchor":"U3GN","./utils/ElementChildren":"F5PP","./utils/triggerBrowserReflow":"ykhp","./ThemeProvider":"BAZo"}],"0aYE":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  as: 'div'
};

var Col = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span, offset, order;

    if (propValue != null && typeof propValue === 'object') {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span != null) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: _classnames.default.apply(void 0, [className].concat(spans, classes))
  }));
});

Col.displayName = 'Col';
Col.defaultProps = defaultProps;
var _default = Col;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"7DKm":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = qsa;
// Zepto.js
// (c) 2010-2015 Thomas Fuchs
// Zepto.js may be freely distributed under the MIT license.
var simpleSelectorRE = /^[\w-]*$/;
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

function qsa(element, selector) {
  var maybeID = selector[0] === '#',
      maybeClass = selector[0] === '.',
      nameOnly = maybeID || maybeClass ? selector.slice(1) : selector,
      isSimple = simpleSelectorRE.test(nameOnly),
      found;

  if (isSimple) {
    if (maybeID) {
      element = element.getElementById ? element : document;
      return (found = element.getElementById(nameOnly)) ? [found] : [];
    }

    if (element.getElementsByClassName && maybeClass) return toArray(element.getElementsByClassName(nameOnly));
    return toArray(element.getElementsByTagName(selector));
  }

  return toArray(element.querySelectorAll(selector));
}

module.exports = exports["default"];
},{}],"cM/M":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = matches;

var _inDOM = _interopRequireDefault(require("../util/inDOM"));

var _querySelectorAll = _interopRequireDefault(require("./querySelectorAll"));

var matchesCache;

function matches(node, selector) {
  if (!matchesCache && _inDOM.default) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesCache = nativeMatch ? function (node, selector) {
      return nativeMatch.call(node, selector);
    } : ie8MatchesSelector;
  }

  return matchesCache ? matchesCache(node, selector) : null;
}

function ie8MatchesSelector(node, selector) {
  var matches = (0, _querySelectorAll.default)(node.document || node.ownerDocument, selector),
      i = 0;

  while (matches[i] && matches[i] !== node) {
    i++;
  }

  return !!matches[i];
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","../util/inDOM":"Vx1w","./querySelectorAll":"7DKm"}],"t2zx":[function(require,module,exports) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
},{}],"3dLy":[function(require,module,exports) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
},{}],"HOM9":[function(require,module,exports) {
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;
},{}],"E7HD":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],"IxO8":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],"lo/u":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;

for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
var _default = Popper;
exports.default = _default;
},{}],"bHnc":[function(require,module,exports) {
var global = arguments[3];
'use strict';

var key = '__global_unique_id__';

module.exports = function () {
  return global[key] = (global[key] || 0) + 1;
};
},{}],"UQex":[function(require,module,exports) {
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],"F5Lz":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict';

var emptyFunction = require('./emptyFunction');
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


var warning = emptyFunction;

if ("production" !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
},{"./emptyFunction":"UQex"}],"hAlc":[function(require,module,exports) {
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = require('gud');

var _gud2 = _interopRequireDefault(_gud);

var _warning = require('fbjs/lib/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MAX_SIGNED_31_BIT_INT = 1073741823; // Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if ("production" !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
},{"react":"1n8/","prop-types":"5D9O","gud":"bHnc","fbjs/lib/warning":"F5Lz"}],"rdxN":[function(require,module,exports) {
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _implementation = require('./implementation');

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
},{"react":"1n8/","./implementation":"hAlc"}],"Lj7I":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ManagerContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _createReactContext = _interopRequireDefault(require("create-react-context"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ManagerContext = (0, _createReactContext.default)({
  setReferenceNode: undefined,
  referenceNode: undefined
});
exports.ManagerContext = ManagerContext;

var Manager =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Manager, _React$Component);

  function Manager() {
    var _this;

    _this = _React$Component.call(this) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "setReferenceNode", function (referenceNode) {
      if (!referenceNode || _this.state.context.referenceNode === referenceNode) {
        return;
      }

      _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: (0, _extends2.default)({}, context, {
            referenceNode: referenceNode
          })
        };
      });
    });
    _this.state = {
      context: {
        setReferenceNode: _this.setReferenceNode,
        referenceNode: undefined
      }
    };
    return _this;
  }

  var _proto = Manager.prototype;

  _proto.render = function render() {
    return React.createElement(ManagerContext.Provider, {
      value: this.state.context
    }, this.props.children);
  };

  return Manager;
}(React.Component);

exports.default = Manager;
},{"@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/inheritsLoose":"HOM9","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/defineProperty":"IxO8","react":"1n8/","create-react-context":"rdxN"}],"13Kj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeInvoke = exports.unwrapArray = void 0;

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */


exports.unwrapArray = unwrapArray;

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};

exports.safeInvoke = safeInvoke;
},{}],"IVyL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Popper;
exports.placements = exports.InnerPopper = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _popper = _interopRequireDefault(require("popper.js"));

var _Manager = require("./Manager");

var _utils = require("./utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};

var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      data: undefined,
      placement: undefined
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "popperInstance", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "popperNode", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "arrowNode", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      (0, _utils.safeInvoke)(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: (0, _extends2.default)({}, _this.props.modifiers, {
          arrow: (0, _extends2.default)({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : (0, _extends2.default)({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new _popper.default(referenceElement, popperNode, _this.getOptions());
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });
    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    (0, _utils.safeInvoke)(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return (0, _utils.unwrapArray)(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(React.Component);

exports.InnerPopper = InnerPopper;
(0, _defineProperty2.default)(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});
var placements = _popper.default.placements;
exports.placements = placements;

function Popper(_ref) {
  var referenceElement = _ref.referenceElement,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["referenceElement"]);
  return React.createElement(_Manager.ManagerContext.Consumer, null, function (_ref2) {
    var referenceNode = _ref2.referenceNode;
    return React.createElement(InnerPopper, (0, _extends2.default)({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}
},{"@babel/runtime/helpers/objectWithoutPropertiesLoose":"t2zx","@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/inheritsLoose":"HOM9","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/defineProperty":"IxO8","react":"1n8/","popper.js":"lo/u","./Manager":"Lj7I","./utils":"13Kj"}],"XOCG":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function () {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);

    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;
},{}],"N7ml":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reference;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _Manager = require("./Manager");

var _utils = require("./utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "refHandler", function (node) {
      (0, _utils.safeInvoke)(_this.props.innerRef, node);
      (0, _utils.safeInvoke)(_this.props.setReferenceNode, node);
    });
    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.render = function render() {
    (0, _warning.default)(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return (0, _utils.unwrapArray)(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(React.Component);

function Reference(props) {
  return React.createElement(_Manager.ManagerContext.Consumer, null, function (_ref) {
    var setReferenceNode = _ref.setReferenceNode;
    return React.createElement(InnerReference, (0, _extends2.default)({
      setReferenceNode: setReferenceNode
    }, props));
  });
}
},{"@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/inheritsLoose":"HOM9","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/defineProperty":"IxO8","react":"1n8/","warning":"XOCG","./Manager":"Lj7I","./utils":"13Kj"}],"dG6K":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Popper", {
  enumerable: true,
  get: function () {
    return _Popper.default;
  }
});
Object.defineProperty(exports, "placements", {
  enumerable: true,
  get: function () {
    return _Popper.placements;
  }
});
Object.defineProperty(exports, "Manager", {
  enumerable: true,
  get: function () {
    return _Manager.default;
  }
});
Object.defineProperty(exports, "Reference", {
  enumerable: true,
  get: function () {
    return _Reference.default;
  }
});

var _Popper = _interopRequireWildcard(require("./Popper"));

var _Manager = _interopRequireDefault(require("./Manager"));

var _Reference = _interopRequireDefault(require("./Reference"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
},{"./Popper":"IVyL","./Manager":"Lj7I","./Reference":"N7ml"}],"PAqR":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownContext = _react.default.createContext({
  menuRef: function menuRef() {},
  toggleRef: function toggleRef() {},
  onToggle: function onToggle() {},
  toggleNode: undefined,
  alignEnd: null,
  show: null,
  drop: null
});

var _default = DropdownContext;
exports.default = _default;
module.exports = exports.default;
},{"react":"1n8/"}],"MdZy":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(require("../util/inDOM"));

var _default = function () {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  return _inDOM.default ? function (context, node) {
    if (context.contains) {
      return context.contains(node);
    } else if (context.compareDocumentPosition) {
      return context === node || !!(context.compareDocumentPosition(node) & 16);
    } else {
      return fallback(context, node);
    }
  } : fallback;
}();

exports.default = _default;

function fallback(context, node) {
  if (node) do {
    if (node === context) return true;
  } while (node = node.parentNode);
  return false;
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","../util/inDOM":"Vx1w"}],"HAUy":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(require("../util/inDOM"));

var on = function on() {};

if (_inDOM.default) {
  on = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.addEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.attachEvent('on' + eventName, function (e) {
        e = e || window.event;
        e.target = e.target || e.srcElement;
        e.currentTarget = node;
        handler.call(node, e);
      });
    };
  }();
}

var _default = on;
exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","../util/inDOM":"Vx1w"}],"B5P+":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(require("../util/inDOM"));

var off = function off() {};

if (_inDOM.default) {
  off = function () {
    if (document.addEventListener) return function (node, eventName, handler, capture) {
      return node.removeEventListener(eventName, handler, capture || false);
    };else if (document.attachEvent) return function (node, eventName, handler) {
      return node.detachEvent('on' + eventName, handler);
    };
  }();
}

var _default = off;
exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","../util/inDOM":"Vx1w"}],"qZbV":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(require("../util/inDOM"));

var _on = _interopRequireDefault(require("./on"));

var _off = _interopRequireDefault(require("./off"));

var listen = function listen() {};

if (_inDOM.default) {
  listen = function listen(node, eventName, handler, capture) {
    (0, _on.default)(node, eventName, handler, capture);
    return function () {
      (0, _off.default)(node, eventName, handler, capture);
    };
  };
}

var _default = listen;
exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","../util/inDOM":"Vx1w","./on":"HAUy","./off":"B5P+"}],"r4LY":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = ownerDocument;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

module.exports = exports["default"];
},{}],"sjfC":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = _default;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(componentOrElement) {
  return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(componentOrElement));
}

module.exports = exports.default;
},{"react-dom":"NKHc","dom-helpers/ownerDocument":"r4LY"}],"pXxs":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _contains = _interopRequireDefault(require("dom-helpers/query/contains"));

var _listen = _interopRequireDefault(require("dom-helpers/events/listen"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ownerDocument = _interopRequireDefault(require("./utils/ownerDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var escapeKeyCode = 27;

var noop = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The `<RootCloseWrapper/>` component registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 */


var RootCloseWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RootCloseWrapper, _React$Component);

  function RootCloseWrapper(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.addEventListeners = function () {
      var event = _this.props.event;
      var doc = (0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this))); // Use capture for this listener so it fires before React's listener, to
      // avoid false positives in the contains() check below if the target DOM
      // element is removed in the React mouse callback.

      _this.removeMouseCaptureListener = (0, _listen.default)(doc, event, _this.handleMouseCapture, true);
      _this.removeMouseListener = (0, _listen.default)(doc, event, _this.handleMouse);
      _this.removeKeyupListener = (0, _listen.default)(doc, 'keyup', _this.handleKeyUp);

      if ('ontouchstart' in doc.documentElement) {
        _this.mobileSafariHackListeners = [].slice.call(document.body.children).map(function (el) {
          return (0, _listen.default)(el, 'mousemove', noop);
        });
      }
    };

    _this.removeEventListeners = function () {
      if (_this.removeMouseCaptureListener) _this.removeMouseCaptureListener();
      if (_this.removeMouseListener) _this.removeMouseListener();
      if (_this.removeKeyupListener) _this.removeKeyupListener();
      if (_this.mobileSafariHackListeners) _this.mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };

    _this.handleMouseCapture = function (e) {
      _this.preventMouseRootClose = isModifiedEvent(e) || !isLeftClickEvent(e) || (0, _contains.default)(_reactDom.default.findDOMNode(_assertThisInitialized(_assertThisInitialized(_this))), e.target);
    };

    _this.handleMouse = function (e) {
      if (!_this.preventMouseRootClose && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.handleKeyUp = function (e) {
      if (e.keyCode === escapeKeyCode && _this.props.onRootClose) {
        _this.props.onRootClose(e);
      }
    };

    _this.preventMouseRootClose = false;
    return _this;
  }

  var _proto = RootCloseWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (!this.props.disabled) {
      this.addEventListeners();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.props.disabled && prevProps.disabled) {
      this.addEventListeners();
    } else if (this.props.disabled && !prevProps.disabled) {
      this.removeEventListeners();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.props.disabled) {
      this.removeEventListeners();
    }
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return RootCloseWrapper;
}(_react.default.Component);

RootCloseWrapper.displayName = 'RootCloseWrapper';
RootCloseWrapper.propTypes = {
  /**
   * Callback fired after click or mousedown. Also triggers when user hits `esc`.
   */
  onRootClose: _propTypes.default.func,

  /**
   * Children to render.
   */
  children: _propTypes.default.element,

  /**
   * Disable the the RootCloseWrapper, preventing it from triggering `onRootClose`.
   */
  disabled: _propTypes.default.bool,

  /**
   * Choose which document mouse event to bind to.
   */
  event: _propTypes.default.oneOf(['click', 'mousedown'])
};
RootCloseWrapper.defaultProps = {
  event: 'click'
};
var _default = RootCloseWrapper;
exports.default = _default;
module.exports = exports.default;
},{"dom-helpers/query/contains":"MdZy","dom-helpers/events/listen":"qZbV","prop-types":"5D9O","react":"1n8/","react-dom":"NKHc","./utils/ownerDocument":"sjfC"}],"Eskr":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = forwardRef;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function forwardRef(renderFn, _ref) {
  var displayName = _ref.displayName,
      propTypes = _ref.propTypes,
      defaultProps = _ref.defaultProps,
      _ref$allowFallback = _ref.allowFallback,
      allowFallback = _ref$allowFallback === void 0 ? false : _ref$allowFallback;

  var render = function render(props, ref) {
    return renderFn(props, ref);
  };

  Object.assign(render, {
    displayName: displayName
  });
  if (_react.default.forwardRef || !allowFallback) return Object.assign(_react.default.forwardRef(render), {
    propTypes: propTypes,
    defaultProps: defaultProps
  });
  return Object.assign(function (props) {
    return render(props, null);
  }, {
    displayName: displayName,
    propTypes: propTypes,
    defaultProps: defaultProps
  });
}
},{"react":"1n8/"}],"8mQD":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = mapContextToProps;

var _react = _interopRequireDefault(require("react"));

var _forwardRef = _interopRequireDefault(require("./forwardRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getDisplayName = function getDisplayName(Component) {
  var name = typeof Component === 'string' ? Component : Component.name || Component.displayName;
  return name ? "ContextTransform(" + name + ")" : 'ContextTransform';
};

var ensureConsumer = function ensureConsumer(c) {
  return c.Consumer || c;
};

function $mapContextToProps(_ref, Component) {
  var maybeArrayOfConsumers = _ref.consumers,
      mapToProps = _ref.mapToProps,
      displayName = _ref.displayName,
      _ref$forwardRefAs = _ref.forwardRefAs,
      forwardRefAs = _ref$forwardRefAs === void 0 ? 'ref' : _ref$forwardRefAs;
  var consumers = maybeArrayOfConsumers;

  if (!Array.isArray(maybeArrayOfConsumers)) {
    consumers = [maybeArrayOfConsumers];
  }

  var SingleConsumer = ensureConsumer(consumers[0]);

  function singleRender(props, ref) {
    var _extends2;

    var propsWithRef = _extends((_extends2 = {}, _extends2[forwardRefAs] = ref, _extends2), props);

    return _react.default.createElement(SingleConsumer, null, function (value) {
      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps(value, props)));
    });
  }

  function multiRender(props, ref) {
    var _extends3;

    var propsWithRef = _extends((_extends3 = {}, _extends3[forwardRefAs] = ref, _extends3), props);

    return consumers.reduceRight(function (inner, Context) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var Consumer = ensureConsumer(Context);
        return _react.default.createElement(Consumer, null, function (value) {
          return inner.apply(void 0, args.concat([value]));
        });
      };
    }, function () {
      for (var _len2 = arguments.length, contexts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        contexts[_key2] = arguments[_key2];
      }

      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps.apply(void 0, contexts.concat([props]))));
    })();
  }

  var contextTransform = consumers.length === 1 ? singleRender : multiRender;
  return (0, _forwardRef.default)(contextTransform, {
    displayName: displayName || getDisplayName(Component)
  });
}

function mapContextToProps(maybeOpts, mapToProps, Component) {
  if (arguments.length === 2) return $mapContextToProps(maybeOpts, mapToProps);
  return $mapContextToProps({
    consumers: maybeOpts,
    mapToProps: mapToProps
  }, Component);
}
},{"react":"1n8/","./forwardRef":"Eskr"}],"khX7":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactPopper = require("react-popper");

var _DropdownContext = _interopRequireDefault(require("./DropdownContext"));

var _RootCloseWrapper = _interopRequireDefault(require("./RootCloseWrapper"));

var _mapContextToProps = _interopRequireDefault(require("react-context-toolbox/mapContextToProps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      toggleId: null
    };
    _this.popperIsInitialized = false;

    _this.handleClose = function (e) {
      if (!_this.props.onToggle) return;

      _this.props.onToggle(false, e);
    };

    return _this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps) {
    // If, to the best we can tell, this update won't reinitialize popper,
    // manually schedule an update
    var shouldUpdatePopper = !prevProps.show && this.props.show && this.popperIsInitialized && // a new reference node will already trigger this internally
    prevProps.toggleNode === this.props.toggleNode;

    if (this.props.show && this.props.usePopper && !this.popperIsInitialized) {
      this.popperIsInitialized = true;
    }

    return !!shouldUpdatePopper;
  };

  _proto.componentDidUpdate = function componentDidUpdate(_, __, shouldUpdatePopper) {
    if (shouldUpdatePopper && this.scheduleUpdate) {
      this.scheduleUpdate();
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        show = _this$props.show,
        flip = _this$props.flip,
        menuRef = _this$props.menuRef,
        alignEnd = _this$props.alignEnd,
        drop = _this$props.drop,
        usePopper = _this$props.usePopper,
        toggleNode = _this$props.toggleNode,
        rootCloseEvent = _this$props.rootCloseEvent,
        _this$props$popperCon = _this$props.popperConfig,
        popperConfig = _this$props$popperCon === void 0 ? {} : _this$props$popperCon;
    var placement = alignEnd ? 'bottom-end' : 'bottom-start';
    if (drop === 'up') placement = alignEnd ? 'top-end' : 'top-start';
    if (drop === 'right') placement = alignEnd ? 'right-end' : 'right-start';
    if (drop === 'left') placement = alignEnd ? 'left-end' : 'left-start';
    var menu = null;
    var menuProps = {
      ref: menuRef,
      'aria-labelledby': toggleNode && toggleNode.id
    };
    var childArgs = {
      show: show,
      alignEnd: alignEnd,
      close: this.handleClose
    };

    if (!usePopper) {
      menu = this.props.children(_extends({}, childArgs, {
        props: menuProps
      }));
    } else if (this.popperIsInitialized || show) {
      // Add it this way, so it doesn't override someones usage
      // with react-poppers <Reference>
      if (toggleNode) popperConfig.referenceElement = toggleNode;
      menu = _react.default.createElement(_reactPopper.Popper, _extends({}, popperConfig, {
        innerRef: menuRef,
        placement: placement,
        eventsEnabled: !!show,
        modifiers: _extends({
          flip: {
            enabled: !!flip
          }
        }, popperConfig.modifiers)
      }), function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            popper = _objectWithoutPropertiesLoose(_ref, ["ref", "style"]);

        _this2.scheduleUpdate = popper.scheduleUpdate;
        return _this2.props.children(_extends({}, popper, childArgs, {
          props: _extends({}, menuProps, {
            ref: ref,
            style: style
          })
        }));
      });
    }

    return menu && _react.default.createElement(_RootCloseWrapper.default, {
      disabled: !show,
      event: rootCloseEvent,
      onRootClose: this.handleClose
    }, menu);
  };

  return DropdownMenu;
}(_react.default.Component);

DropdownMenu.displayName = 'ReactOverlaysDropdownMenu';
DropdownMenu.propTypes = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   alignEnd: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   outOfBoundaries: ?boolean,
   *   scheduleUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: _propTypes.default.func.isRequired,

  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: _propTypes.default.bool,

  /**
   * Aligns the dropdown menu to the 'end' of it's placement position.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  alignEnd: _propTypes.default.bool,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: _propTypes.default.bool,
  usePopper: _propTypes.default.oneOf([true, false]),

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: _propTypes.default.object,

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: _propTypes.default.string,

  /** @private */
  onToggle: _propTypes.default.func,

  /** @private */
  menuRef: _propTypes.default.func,

  /** @private */
  drop: _propTypes.default.string,

  /** @private */
  toggleNode: _propTypes.default.any
};
DropdownMenu.defaultProps = {
  usePopper: true
};
var DecoratedDropdownMenu = (0, _mapContextToProps.default)(_DropdownContext.default, function (_ref2, props) {
  var show = _ref2.show,
      alignEnd = _ref2.alignEnd,
      toggle = _ref2.toggle,
      drop = _ref2.drop,
      menuRef = _ref2.menuRef,
      toggleNode = _ref2.toggleNode;
  return {
    drop: drop,
    menuRef: menuRef,
    toggleNode: toggleNode,
    onToggle: toggle,
    show: show == null ? props.show : show,
    alignEnd: alignEnd == null ? props.alignEnd : alignEnd
  };
}, DropdownMenu);
var _default = DecoratedDropdownMenu;
exports.default = _default;
module.exports = exports.default;
},{"prop-types":"5D9O","react":"1n8/","react-popper":"dG6K","./DropdownContext":"PAqR","./RootCloseWrapper":"pXxs","react-context-toolbox/mapContextToProps":"8mQD"}],"3k2j":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _DropdownContext = _interopRequireDefault(require("./DropdownContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: _propTypes.default.func.isRequired
};

function DropdownToggle(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_DropdownContext.default.Consumer, null, function (_ref2) {
    var show = _ref2.show,
        toggle = _ref2.toggle,
        toggleRef = _ref2.toggleRef;
    return children({
      show: show,
      toggle: toggle,
      props: {
        ref: toggleRef,
        'aria-haspopup': true,
        'aria-expanded': !!show
      }
    });
  });
}

DropdownToggle.displayName = 'ReactOverlaysDropdownToggle';
DropdownToggle.propTypes = propTypes;
var _default = DropdownToggle;
exports.default = _default;
module.exports = exports.default;
},{"prop-types":"5D9O","react":"1n8/","./DropdownContext":"PAqR"}],"waAV":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _matches = _interopRequireDefault(require("dom-helpers/query/matches"));

var _querySelectorAll = _interopRequireDefault(require("dom-helpers/query/querySelectorAll"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var Popper = _interopRequireWildcard(require("react-popper"));

var _DropdownContext = _interopRequireDefault(require("./DropdownContext"));

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));

var _DropdownToggle = _interopRequireDefault(require("./DropdownToggle"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: _propTypes.default.func.isRequired,

  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop: _propTypes.default.oneOf(['up', 'left', 'right', 'down']),

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: _propTypes.default.oneOf([false, true, 'keyboard']),

  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: _propTypes.default.string.isRequired,

  /**
   * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
   */
  alignEnd: _propTypes.default.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: _propTypes.default.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```js
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: _propTypes.default.func
};
var defaultProps = {
  itemSelector: '* > *'
};
/**
 * `Dropdown` is set of structural components for building, accessible dropdown menus with close-on-click,
 * keyboard navigation, and correct focus handling. As with all the react-overlay's
 * components its BYOS (bring your own styles). Dropdown is primarily
 * built from three base components, you should compose to build your Dropdowns.
 *
 * - `Dropdown`, which wraps the menu and toggle, and handles keyboard navigation
 * - `Dropdown.Toggle` generally a button that triggers the menu opening
 * - `Dropdown.Menu` The overlaid, menu, positioned to the toggle with PopperJs
 */

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  Dropdown.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var drop = _ref.drop,
        alignEnd = _ref.alignEnd,
        show = _ref.show;
    var lastShow = prevState.context.show;
    return {
      lastShow: lastShow,
      context: _extends({}, prevState.context, {
        drop: drop,
        show: show,
        alignEnd: alignEnd
      })
    };
  };

  function Dropdown(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.handleClick = function (event) {
      _this.toggleOpen(event);
    };

    _this.handleKeyDown = function (event) {
      var key = event.key,
          target = event.target; // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
      // in inscrutability

      var isInput = /input|textarea/i.test(target.tagName);

      if (isInput && (key === ' ' || key !== 'Escape' && _this.menu.contains(target))) {
        return;
      }

      _this._lastSourceEvent = event.type;

      switch (key) {
        case 'ArrowUp':
          {
            var next = _this.getNextFocusedChild(target, -1);

            if (next && next.focus) next.focus();
            event.preventDefault();
            return;
          }

        case 'ArrowDown':
          event.preventDefault();

          if (!_this.props.show) {
            _this.toggleOpen(event);
          } else {
            var _next = _this.getNextFocusedChild(target, 1);

            if (_next && _next.focus) _next.focus();
          }

          return;

        case 'Escape':
        case 'Tab':
          _this.props.onToggle(false, event);

          break;

        default:
      }
    };

    _this._focusInDropdown = false;
    _this.menu = null;
    _this.state = {
      context: {
        close: _this.handleClose,
        toggle: _this.handleClick,
        menuRef: function menuRef(r) {
          _this.menu = r;
        },
        toggleRef: function toggleRef(r) {
          var toggleNode = r && _reactDom.default.findDOMNode(r);

          _this.setState(function (_ref2) {
            var context = _ref2.context;
            return {
              context: _extends({}, context, {
                toggleNode: toggleNode
              })
            };
          });
        }
      }
    };
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var show = this.props.show;
    var prevOpen = prevProps.show;

    if (show && !prevOpen) {
      this.maybeFocusFirst();
    }

    this._lastSourceEvent = null;

    if (!show && prevOpen) {
      // if focus hasn't already moved from the menu let's return it
      // to the toggle
      if (this._focusInDropdown) {
        this._focusInDropdown = false;
        this.focus();
      }
    }
  };

  _proto.getNextFocusedChild = function getNextFocusedChild(current, offset) {
    if (!this.menu) return null;
    var itemSelector = this.props.itemSelector;
    var items = (0, _querySelectorAll.default)(this.menu, itemSelector);
    var index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  _proto.hasMenuRole = function hasMenuRole() {
    return this.menu && (0, _matches.default)(this.menu, '[role=menu]');
  };

  _proto.focus = function focus() {
    var toggleNode = this.state.context.toggleNode;

    if (toggleNode && toggleNode.focus) {
      toggleNode.focus();
    }
  };

  _proto.maybeFocusFirst = function maybeFocusFirst() {
    var type = this._lastSourceEvent;
    var focusFirstItemOnShow = this.props.focusFirstItemOnShow;

    if (focusFirstItemOnShow == null) {
      focusFirstItemOnShow = this.hasMenuRole() ? 'keyboard' : false;
    }

    if (focusFirstItemOnShow === false || focusFirstItemOnShow === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    var itemSelector = this.props.itemSelector;
    var first = (0, _querySelectorAll.default)(this.menu, itemSelector)[0];
    if (first && first.focus) first.focus();
  };

  _proto.toggleOpen = function toggleOpen(event) {
    var show = !this.props.show;
    this.props.onToggle(show, event);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

    delete props.onToggle;

    if (this.menu && this.state.lastShow && !this.props.show) {
      this._focusInDropdown = this.menu.contains(document.activeElement);
    }

    return _react.default.createElement(_DropdownContext.default.Provider, {
      value: this.state.context
    }, _react.default.createElement(Popper.Manager, null, children({
      props: {
        onKeyDown: this.handleKeyDown
      }
    })));
  };

  return Dropdown;
}(_react.default.Component);

Dropdown.displayName = 'ReactOverlaysDropdown';
Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
var UncontrolledDropdown = (0, _uncontrollable.default)(Dropdown, {
  show: 'onToggle'
});
UncontrolledDropdown.Menu = _DropdownMenu.default;
UncontrolledDropdown.Toggle = _DropdownToggle.default;
var _default = UncontrolledDropdown;
exports.default = _default;
module.exports = exports.default;
},{"dom-helpers/query/matches":"cM/M","dom-helpers/query/querySelectorAll":"7DKm","react":"1n8/","react-dom":"NKHc","prop-types":"5D9O","uncontrollable":"pOCK","react-popper":"dG6K","./DropdownContext":"PAqR","./DropdownMenu":"khX7","./DropdownToggle":"3k2j"}],"KQvw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDom = require("react-dom");

var _react = _interopRequireWildcard(require("react"));

var _DropdownMenu = _interopRequireDefault(require("react-overlays/DropdownMenu"));

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref((0, _reactDom.findDOMNode)(r));
  });

  return props;
};

var defaultProps = {
  alignRight: false,
  as: 'div',
  flip: true
};

var DropdownMenu = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      alignRight = _ref.alignRight,
      rootCloseEvent = _ref.rootCloseEvent,
      flip = _ref.flip,
      popperConfig = _ref.popperConfig,
      showProps = _ref.show,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "alignRight", "rootCloseEvent", "flip", "popperConfig", "show", "as"]);
  var isNavbar = (0, _react.useContext)(_NavbarContext.default);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-menu');
  return _react.default.createElement(_DropdownMenu.default, {
    ref: ref // FIXME: the ref situation is out of hand here
    ,
    flip: flip,
    show: showProps,
    alignEnd: alignRight,
    usePopper: !isNavbar,
    popperConfig: popperConfig,
    rootCloseEvent: rootCloseEvent
  }, function (_ref2) {
    var placement = _ref2.placement,
        show = _ref2.show,
        alignEnd = _ref2.alignEnd,
        close = _ref2.close,
        menuProps = _ref2.props;
    wrapRef(menuProps); // For custom components provide additional, non-DOM, props;

    if (typeof Component !== 'string') {
      menuProps.show = show;
      menuProps.close = close;
      menuProps.alignRight = alignEnd;
    }

    var style = props.style;

    if (placement) {
      // we don't need the default popper style,
      // menus are display: none when not shown.
      style = (0, _extends2.default)({}, style, menuProps.style);
      props['x-placement'] = placement;
    }

    return _react.default.createElement(Component, (0, _extends2.default)({}, props, menuProps, {
      style: style,
      className: (0, _classnames.default)(className, prefix, show && 'show', alignEnd && prefix + "-right")
    }));
  });
});

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
var _default = DropdownMenu;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react-dom":"NKHc","react":"1n8/","react-overlays/DropdownMenu":"khX7","./NavbarContext":"bIp9","./ThemeProvider":"BAZo"}],"91/V":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequiredForA11y;
function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}
module.exports = exports['default'];
},{}],"0jJY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactDom = require("react-dom");

var _isRequiredForA11y = _interopRequireDefault(require("prop-types-extra/lib/isRequiredForA11y"));

var _DropdownToggle = _interopRequireDefault(require("react-overlays/DropdownToggle"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapRef = function wrapRef(props) {
  var ref = props.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref((0, _reactDom.findDOMNode)(r));
  });

  return props;
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(DropdownToggle, _React$Component);

  function DropdownToggle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        split = _this$props.split,
        className = _this$props.className,
        children = _this$props.children,
        childBsPrefix = _this$props.childBsPrefix,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "split", "className", "children", "childBsPrefix", "as"]);

    if (childBsPrefix !== undefined) {
      props.bsPrefix = childBsPrefix;
    } // This intentionally forwards size and variant (if set) to the
    // underlying component, to allow it to render size and style variants.


    return _react.default.createElement(_DropdownToggle.default, null, function (_ref) {
      var toggle = _ref.toggle,
          toggleProps = _ref.props;
      return _react.default.createElement(Component, (0, _extends2.default)({
        onClick: toggle,
        className: (0, _classnames.default)(className, bsPrefix, split && bsPrefix + "-split")
      }, wrapRef(toggleProps), props), children);
    });
  };

  return DropdownToggle;
}(_react.default.Component); // Needs to be a class FTM, because it needs to accept a ref that can be used with findDOMNode


DropdownToggle.defaultProps = {
  as: _Button.default
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(DropdownToggle, 'dropdown-toggle');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react-dom":"NKHc","prop-types-extra/lib/isRequiredForA11y":"91/V","react-overlays/DropdownToggle":"3k2j","react":"1n8/","./Button":"Ulc8","./ThemeProvider":"BAZo"}],"OYsU":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavContext = _react.default.createContext(null);

var _default = NavContext;
exports.default = _default;
},{"react":"1n8/"}],"smpl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var _SelectableContext = _interopRequireWildcard(require("./SelectableContext"));

var _ThemeProvider = require("./ThemeProvider");

var _NavContext = _interopRequireDefault(require("./NavContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: _SafeAnchor.default,
  disabled: false
};

var DropdownItem = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      eventKey = _ref.eventKey,
      disabled = _ref.disabled,
      href = _ref.href,
      onClick = _ref.onClick,
      onSelect = _ref.onSelect,
      propActive = _ref.active,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-item');
  var onSelectCtx = (0, _react.useContext)(_SelectableContext.default);
  var navContext = (0, _react.useContext)(_NavContext.default);

  var _ref2 = navContext || {},
      activeKey = _ref2.activeKey;

  var key = (0, _SelectableContext.makeEventKey)(eventKey, href);
  var active = propActive == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : propActive;
  var handleClick = (0, _useEventCallback.default)(function (event) {
    // SafeAnchor handles the disabled case, but we handle it here
    // for other components
    if (disabled) return;
    if (onClick) onClick(event);
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
  });
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    href: href,
    disabled: disabled,
    className: (0, _classnames.default)(className, prefix, active && 'active', disabled && 'disabled'),
    onClick: handleClick
  }), children);
});

DropdownItem.displayName = 'DropdownItem';
DropdownItem.defaultProps = defaultProps;
var _default = DropdownItem;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","@restart/hooks/useEventCallback":"nAQU","./SafeAnchor":"U3GN","./SelectableContext":"c50E","./ThemeProvider":"BAZo","./NavContext":"OYsU"}],"47Qq":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _Dropdown = _interopRequireDefault(require("react-overlays/Dropdown"));

var _hook = _interopRequireDefault(require("uncontrollable/hook"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _ThemeProvider = require("./ThemeProvider");

var _DropdownMenu = _interopRequireDefault(require("./DropdownMenu"));

var _DropdownToggle = _interopRequireDefault(require("./DropdownToggle"));

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _SelectableContext = _interopRequireDefault(require("./SelectableContext"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'div',
  navbar: false
};

var Dropdown = _react.default.forwardRef(function (uncontrolledProps, ref) {
  var _useUncontrolled = (0, _hook.default)(uncontrolledProps, {
    show: 'onToggle'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      drop = _useUncontrolled.drop,
      show = _useUncontrolled.show,
      className = _useUncontrolled.className,
      alignRight = _useUncontrolled.alignRight,
      onSelect = _useUncontrolled.onSelect,
      onToggle = _useUncontrolled.onToggle,
      focusFirstItemOnShow = _useUncontrolled.focusFirstItemOnShow,
      Component = _useUncontrolled.as,
      _4 = _useUncontrolled.navbar,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["bsPrefix", "drop", "show", "className", "alignRight", "onSelect", "onToggle", "focusFirstItemOnShow", "as", "navbar"]);

  var onSelectCtx = (0, _react.useContext)(_SelectableContext.default);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown');
  var handleToggle = (0, _useEventCallback.default)(function (nextShow, event, source) {
    if (source === void 0) {
      source = event.type;
    }

    if (event.currentTarget === document) source = 'rootClose';
    onToggle(nextShow, event, {
      source: source
    });
  });
  var handleSelect = (0, _useEventCallback.default)(function (key, event) {
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
    handleToggle(false, event, 'select');
  });
  return _react.default.createElement(_SelectableContext.default.Provider, {
    value: handleSelect
  }, _react.default.createElement(_Dropdown.default.ControlledComponent, {
    drop: drop,
    show: show,
    alignEnd: alignRight,
    onToggle: handleToggle,
    focusFirstItemOnShow: focusFirstItemOnShow,
    itemSelector: "." + prefix + "-item:not(.disabled):not(:disabled)"
  }, function (_ref) {
    var dropdownProps = _ref.props;
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, dropdownProps, {
      ref: ref,
      className: (0, _classnames.default)(className, show && 'show', (!drop || drop === 'down') && prefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft')
    }));
  }));
});

Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = defaultProps;
Dropdown.Toggle = _DropdownToggle.default;
Dropdown.Menu = _DropdownMenu.default;
Dropdown.Item = _DropdownItem.default;
Dropdown.Header = (0, _createWithBsPrefix.default)('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
Dropdown.Divider = (0, _createWithBsPrefix.default)('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
var _default = Dropdown;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","react-overlays/Dropdown":"waAV","uncontrollable/hook":"0rwB","@restart/hooks/useEventCallback":"nAQU","./ThemeProvider":"BAZo","./DropdownMenu":"KQvw","./DropdownToggle":"0jJY","./DropdownItem":"smpl","./SelectableContext":"c50E","./utils/createWithBsPrefix":"dMsm"}],"Vijh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: _propTypes.default.any,

  /** An `href` passed to the Toggle component */
  href: _propTypes.default.string,

  /** An `onClick` handler passed to the Toggle component */
  onClick: _propTypes.default.func,

  /** The content of the non-toggle Button.  */
  title: _propTypes.default.node.isRequired,

  /** Disables both Buttons  */
  disabled: _propTypes.default.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: _propTypes.default.string,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: _propTypes.default.string,

  /** @ignore */
  bsPrefix: _propTypes.default.string,

  /** @ignore */
  variant: _propTypes.default.string,

  /** @ignore */
  size: _propTypes.default.string
};
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`.
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu related props are passed to the `Dropdown.Menu`
 */

var DropdownButton = _react.default.forwardRef(function (_ref, ref) {
  var title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      rootCloseEvent = _ref.rootCloseEvent,
      variant = _ref.variant,
      size = _ref.size,
      menuRole = _ref.menuRole,
      disabled = _ref.disabled,
      href = _ref.href,
      id = _ref.id,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["title", "children", "bsPrefix", "rootCloseEvent", "variant", "size", "menuRole", "disabled", "href", "id"]);
  return _react.default.createElement(_Dropdown.default, (0, _extends2.default)({
    ref: ref
  }, props), _react.default.createElement(_Dropdown.default.Toggle, {
    id: id,
    href: href,
    size: size,
    variant: variant,
    disabled: disabled,
    childBsPrefix: bsPrefix
  }, title), _react.default.createElement(_Dropdown.default.Menu, {
    role: menuRole,
    rootCloseEvent: rootCloseEvent
  }, children));
});

DropdownButton.displayName = 'DropdownButton';
DropdownButton.propTypes = propTypes;
var _default = DropdownButton;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","react":"1n8/","prop-types":"5D9O","./Dropdown":"47Qq"}],"KZON":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormContext = _react.default.createContext({
  controlId: undefined
});

var _default = FormContext;
exports.default = _default;
},{"react":"1n8/"}],"t11O":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'div'
};

var FormGroup = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "controlId", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-group');
  var context = (0, _react.useMemo)(function () {
    return {
      controlId: controlId
    };
  }, [controlId]);
  return _react.default.createElement(_FormContext.default.Provider, {
    value: context
  }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children));
});

FormGroup.displayName = 'FormGroup';
FormGroup.defaultProps = defaultProps;
var _default = FormGroup;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./FormContext":"KZON","./ThemeProvider":"BAZo"}],"aixw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: _propTypes.default.string.isRequired,
  as: _propTypes.default.elementType
};
var defaultProps = {
  type: 'valid',
  as: 'div'
};

var Feedback = _react.default.forwardRef(function (_ref, ref) {
  var Component = _ref.as,
      className = _ref.className,
      type = _ref.type,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "className", "type"]);
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, type && type + "-feedback")
  }));
});

Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultProps;
var _default = Feedback;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","prop-types":"5D9O"}],"YLA5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _Feedback = _interopRequireDefault(require("./Feedback"));

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'input'
};

var FormControl = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      type = _ref.type,
      size = _ref.size,
      id = _ref.id,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      plaintext = _ref.plaintext,
      readOnly = _ref.readOnly,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "type", "size", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "as"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-control');
  var classes;

  if (plaintext) {
    var _classes;

    classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
  } else if (type === 'file') {
    var _classes2;

    classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
  } else {
    var _classes3;

    classes = (_classes3 = {}, _classes3[bsPrefix] = true, _classes3[bsPrefix + "-" + size] = size, _classes3);
  }

  "production" !== "production" ? (0, _warning.default)(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    type: type,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: (0, _classnames.default)(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
  }));
});

FormControl.displayName = 'FormControl';
FormControl.defaultProps = defaultProps;
FormControl.Feedback = _Feedback.default;
var _default = FormControl;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","warning":"XOCG","./Feedback":"aixw","./FormContext":"KZON","./ThemeProvider":"BAZo"}],"5ufY":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _FormContext = _interopRequireDefault(require("./FormContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  type: 'checkbox'
};

var FormCheckInput = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      isStatic = _ref.isStatic,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "className", "isValid", "isInvalid", "isStatic"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check-input');

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  return _react.default.createElement("input", (0, _extends2.default)({}, props, {
    ref: ref,
    id: id || controlId,
    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && 'custom-control-input', isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
  }));
});

FormCheckInput.displayName = 'FormCheckInput';
FormCheckInput.defaultProps = defaultProps;
var _default = FormCheckInput;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo","./FormContext":"KZON"}],"vRGI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _FormContext = _interopRequireDefault(require("./FormContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  type: 'checkbox'
};

var FormCheckLabel = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "htmlFor"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check-label');

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  return _react.default.createElement("label", (0, _extends2.default)({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && 'custom-control-label')
  }));
});

FormCheckLabel.displayName = 'FormCheckLabel';
FormCheckLabel.defaultProps = defaultProps;
var _default = FormCheckLabel;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo","./FormContext":"KZON"}],"jwKS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _Feedback = _interopRequireDefault(require("./Feedback"));

var _FormCheckInput = _interopRequireDefault(require("./FormCheckInput"));

var _FormCheckLabel = _interopRequireDefault(require("./FormCheckLabel"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  type: 'checkbox',
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  title: ''
};

var FormCheck = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      disabled = _ref.disabled,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      type = _ref.type,
      label = _ref.label,
      children = _ref.children,
      custom = _ref.custom,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "inline", "disabled", "isValid", "isInvalid", "feedback", "className", "style", "title", "type", "label", "children", "custom"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-check');

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var innerFormContext = (0, _react.useMemo)(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;

  var input = _react.default.createElement(_FormCheckInput.default, (0, _extends2.default)({}, props, {
    type: type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    isStatic: !hasLabel,
    disabled: disabled
  }));

  return _react.default.createElement(_FormContext.default.Provider, {
    value: innerFormContext
  }, _react.default.createElement("div", {
    style: style,
    className: (0, _classnames.default)(className, !custom && bsPrefix, custom && "custom-control custom-" + type, inline && (custom ? 'custom-control' : bsPrefix) + "-inline")
  }, children || _react.default.createElement(_react.default.Fragment, null, input, hasLabel && _react.default.createElement(_FormCheckLabel.default, {
    title: title
  }, label), (isValid || isInvalid) && _react.default.createElement(_Feedback.default, {
    type: isValid ? 'valid' : 'invalid'
  }, feedback))));
});

FormCheck.displayName = 'FormCheck';
FormCheck.defaultProps = defaultProps;
FormCheck.Input = _FormCheckInput.default;
FormCheck.Label = _FormCheckLabel.default;
var _default = FormCheck;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo","./FormContext":"KZON","./Feedback":"aixw","./FormCheckInput":"5ufY","./FormCheckLabel":"vRGI"}],"ql17":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _warning = _interopRequireDefault(require("warning"));

var _Col = _interopRequireDefault(require("./Col"));

var _FormContext = _interopRequireDefault(require("./FormContext"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  column: false,
  srOnly: false
};

var FormLabel = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "column", "srOnly", "className", "htmlFor"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-label');
  var classes = (0, _classnames.default)(className, bsPrefix, srOnly && 'sr-only', column && 'col-form-label');
  if (column) return _react.default.createElement(_Col.default, (0, _extends2.default)({}, props, {
    className: classes,
    as: "label"
  }));
  "production" !== "production" ? (0, _warning.default)(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
  return (// eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    _react.default.createElement("label", (0, _extends2.default)({}, props, {
      htmlFor: htmlFor || controlId,
      ref: ref,
      className: classes
    }))
  );
});

FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
var _default = FormLabel;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","warning":"XOCG","./Col":"0aYE","./FormContext":"KZON","./ThemeProvider":"BAZo"}],"lADZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'small'
};

var FormText = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-text');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }));
});

FormText.displayName = 'FormText';
FormText.defaultProps = defaultProps;
var _default = FormText;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"Bh7W":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

var _FormGroup = _interopRequireDefault(require("./FormGroup"));

var _FormControl = _interopRequireDefault(require("./FormControl"));

var _FormCheck = _interopRequireDefault(require("./FormCheck"));

var _FormLabel = _interopRequireDefault(require("./FormLabel"));

var _FormText = _interopRequireDefault(require("./FormText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  inline: false,
  as: 'form'
};

var Form = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "inline", "className", "validated", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});

Form.displayName = 'Form';
Form.defaultProps = defaultProps;
Form.Row = (0, _createWithBsPrefix.default)('form-row');
Form.Group = _FormGroup.default;
Form.Control = _FormControl.default;
Form.Check = _FormCheck.default;
Form.Label = _FormLabel.default;
Form.Text = _FormText.default;
var _default = Form;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./utils/createWithBsPrefix":"dMsm","./ThemeProvider":"BAZo","./FormGroup":"t11O","./FormControl":"YLA5","./FormCheck":"jwKS","./FormLabel":"ql17","./FormText":"lADZ"}],"148u":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'div',
  fluid: false
};

var Container = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      Component = _ref.as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "fluid", "as", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'container');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, fluid ? prefix + "-fluid" : prefix)
  }));
});

Container.displayName = 'Container';
Container.defaultProps = defaultProps;
var _default = Container;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"J/8J":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        fluid = _this$props.fluid,
        rounded = _this$props.rounded,
        roundedCircle = _this$props.roundedCircle,
        thumbnail = _this$props.thumbnail,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);
    var classes = (0, _classnames.default)(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
    return _react.default.createElement("img", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, classes)
    }));
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Image, 'img');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"ItYf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * Sets image as fluid image.
   */
  fluid: _propTypes.default.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: _propTypes.default.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: _propTypes.default.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: _propTypes.default.bool
};
var defaultProps = {
  fluid: true
};

var FigureImage = _react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["className"]);
  return _react.default.createElement(_Image.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, 'figure-img')
  }));
});

FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = propTypes;
FigureImage.defaultProps = defaultProps;
var _default = FigureImage;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","prop-types":"5D9O","react":"1n8/","./Image":"J/8J"}],"7yF8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FigureCaption = (0, _createWithBsPrefix.default)('figure-caption', {
  Component: 'figcaption'
});
var _default = FigureCaption;
exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm"}],"Hm5s":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _FigureImage = _interopRequireDefault(require("./FigureImage"));

var _FigureCaption = _interopRequireDefault(require("./FigureCaption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Figure = (0, _createWithBsPrefix.default)('figure', {
  Component: 'figure'
});
Figure.Image = _FigureImage.default;
Figure.Caption = _FigureCaption.default;
var _default = Figure;
exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm","./FigureImage":"ItYf","./FigureCaption":"7yF8"}],"lz2A":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
var InputGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(InputGroup, _React$Component);

  function InputGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = InputGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        className = _this$props.className,
        Component = _this$props.as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "size", "className", "as"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, size && bsPrefix + "-" + size)
    }));
  };

  return InputGroup;
}(_react.default.Component);

InputGroup.defaultProps = {
  as: 'div'
};
var InputGroupAppend = (0, _createWithBsPrefix.default)('input-group-append');
var InputGroupPrepend = (0, _createWithBsPrefix.default)('input-group-prepend');
var InputGroupText = (0, _createWithBsPrefix.default)('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return _react.default.createElement(InputGroupText, null, _react.default.createElement("input", (0, _extends2.default)({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return _react.default.createElement(InputGroupText, null, _react.default.createElement("input", (0, _extends2.default)({
    type: "radio"
  }, props)));
};

var DecoratedInputGroup = (0, _ThemeProvider.createBootstrapComponent)(InputGroup, 'input-group');
DecoratedInputGroup.Text = InputGroupText;
DecoratedInputGroup.Radio = InputGroupRadio;
DecoratedInputGroup.Checkbox = InputGroupCheckbox;
DecoratedInputGroup.Append = InputGroupAppend;
DecoratedInputGroup.Prepend = InputGroupPrepend;
var _default = DecoratedInputGroup;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./utils/createWithBsPrefix":"dMsm","./ThemeProvider":"BAZo"}],"Cu65":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'div',
  fluid: false
};

var Jumbotron =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Jumbotron, _React$Component);

  function Jumbotron() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Jumbotron.prototype;

  _proto.render = function render() {
    var _classes;

    var _this$props = this.props,
        Component = _this$props.as,
        className = _this$props.className,
        fluid = _this$props.fluid,
        bsPrefix = _this$props.bsPrefix,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["as", "className", "fluid", "bsPrefix"]);
    var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, classes)
    }));
  };

  return Jumbotron;
}(_react.default.Component);

Jumbotron.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(Jumbotron, 'jumbotron');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","classnames":"9qb7","./ThemeProvider":"BAZo"}],"l3v8":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = mapContextToProps;

var _react = _interopRequireDefault(require("react"));

var _forwardRef = _interopRequireDefault(require("./forwardRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getDisplayName = function getDisplayName(Component) {
  var name = typeof Component === 'string' ? Component : Component.name || Component.displayName;
  return name ? "ContextTransform(" + name + ")" : 'ContextTransform';
};

var ensureConsumer = function ensureConsumer(c) {
  return c.Consumer || c;
};

function $mapContextToProps(_ref, Component) {
  var maybeArrayOfConsumers = _ref.consumers,
      mapToProps = _ref.mapToProps,
      displayName = _ref.displayName,
      _ref$forwardRefAs = _ref.forwardRefAs,
      forwardRefAs = _ref$forwardRefAs === void 0 ? 'ref' : _ref$forwardRefAs;
  var consumers = maybeArrayOfConsumers;

  if (!Array.isArray(maybeArrayOfConsumers)) {
    consumers = [maybeArrayOfConsumers];
  }

  var SingleConsumer = ensureConsumer(consumers[0]);

  function singleRender(props, ref) {
    var _extends2;

    var propsWithRef = _extends((_extends2 = {}, _extends2[forwardRefAs] = ref, _extends2), props);

    return _react.default.createElement(SingleConsumer, null, function (value) {
      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps(value, props)));
    });
  }

  function multiRender(props, ref) {
    var _extends3;

    var propsWithRef = _extends((_extends3 = {}, _extends3[forwardRefAs] = ref, _extends3), props);

    return consumers.reduceRight(function (inner, Context) {
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var Consumer = ensureConsumer(Context);
        return _react.default.createElement(Consumer, null, function (value) {
          return inner.apply(void 0, args.concat([value]));
        });
      };
    }, function () {
      for (var _len2 = arguments.length, contexts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        contexts[_key2] = arguments[_key2];
      }

      return _react.default.createElement(Component, _extends({}, propsWithRef, mapToProps.apply(void 0, contexts.concat([props]))));
    })();
  }

  var contextTransform = consumers.length === 1 ? singleRender : multiRender;
  return (0, _forwardRef.default)(contextTransform, {
    displayName: displayName || getDisplayName(Component)
  });
}

function mapContextToProps(maybeOpts, mapToProps, Component) {
  if (arguments.length === 2) return $mapContextToProps(maybeOpts, mapToProps);
  return $mapContextToProps({
    consumers: maybeOpts,
    mapToProps: mapToProps
  }, Component);
}
},{"react":"1n8/","./forwardRef":"Ii5r"}],"5xvr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabContext = _react.default.createContext(null);

var _default = TabContext;
exports.default = _default;
},{"react":"1n8/"}],"6vlL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _querySelectorAll = _interopRequireDefault(require("dom-helpers/query/querySelectorAll"));

var _mapContextToProps = _interopRequireDefault(require("@restart/context/mapContextToProps"));

var _SelectableContext = _interopRequireWildcard(require("./SelectableContext"));

var _NavContext = _interopRequireDefault(require("./NavContext"));

var _TabContext = _interopRequireDefault(require("./TabContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var AbstractNav =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AbstractNav, _React$Component);

  function AbstractNav() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleSelect = function (key, event) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          parentOnSelect = _this$props.parentOnSelect;
      if (key == null) return;
      if (onSelect) onSelect(key, event);
      if (parentOnSelect) parentOnSelect(key, event);
    };

    _this.handleKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;
      if (onKeyDown) onKeyDown(event);
      var nextActiveChild;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          nextActiveChild = _this.getNextActiveChild(-1);
          break;

        case 'ArrowRight':
        case 'ArrowDown':
          nextActiveChild = _this.getNextActiveChild(1);
          break;

        default:
          return;
      }

      if (!nextActiveChild) return;
      event.preventDefault();

      _this.handleSelect(nextActiveChild.dataset.rbEventKey, event);

      _this._needsRefocus = true;
    };

    _this.attachRef = function (ref) {
      _this.listNode = ref;
    };

    _this.state = {
      navContext: null
    };
    return _this;
  }

  AbstractNav.getDerivedStateFromProps = function getDerivedStateFromProps(_ref) {
    var activeKey = _ref.activeKey,
        getControlledId = _ref.getControlledId,
        getControllerId = _ref.getControllerId,
        role = _ref.role;
    return {
      navContext: {
        role: role,
        // used by NavLink to determine it's role
        activeKey: (0, _SelectableContext.makeEventKey)(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      }
    };
  };

  var _proto = AbstractNav.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (!this._needsRefocus || !this.listNode) return;
    var activeChild = this.listNode.querySelector('[data-rb-event-key].active');
    if (activeChild) activeChild.focus();
  };

  _proto.getNextActiveChild = function getNextActiveChild(offset) {
    if (!this.listNode) return null;
    var items = (0, _querySelectorAll.default)(this.listNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = this.listNode.querySelector('.active');
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.as,
        _ = _this$props2.onSelect,
        _0 = _this$props2.parentOnSelect,
        _1 = _this$props2.getControlledId,
        _2 = _this$props2.getControllerId,
        _3 = _this$props2.activeKey,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["as", "onSelect", "parentOnSelect", "getControlledId", "getControllerId", "activeKey"]);

    if (props.role === 'tablist') {
      props.onKeyDown = this.handleKeyDown;
    }

    return _react.default.createElement(_SelectableContext.default.Provider, {
      value: this.handleSelect
    }, _react.default.createElement(_NavContext.default.Provider, {
      value: this.state.navContext
    }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      onKeyDown: this.handleKeyDown,
      ref: this.attachRef
    }))));
  };

  return AbstractNav;
}(_react.default.Component);

AbstractNav.defaultProps = {
  as: 'ul'
};

var _default = (0, _mapContextToProps.default)([_SelectableContext.default, _TabContext.default], function (parentOnSelect, tabContext, _ref2) {
  var role = _ref2.role;
  if (!tabContext) return {
    parentOnSelect: parentOnSelect
  };
  var activeKey = tabContext.activeKey,
      getControllerId = tabContext.getControllerId,
      getControlledId = tabContext.getControlledId;
  return {
    activeKey: activeKey,
    parentOnSelect: parentOnSelect,
    role: role || 'tablist',
    // pass these two through to avoid having to listen to
    // both Tab and Nav contexts in NavLink
    getControllerId: getControllerId,
    getControlledId: getControlledId
  };
}, AbstractNav);

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","dom-helpers/query/querySelectorAll":"7DKm","@restart/context/mapContextToProps":"l3v8","./SelectableContext":"c50E","./NavContext":"OYsU","./TabContext":"5xvr"}],"vJB8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _NavContext = _interopRequireDefault(require("./NavContext"));

var _SelectableContext = _interopRequireWildcard(require("./SelectableContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  disabled: false
};

var AbstractNavItem = _react.default.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      tabIndex = _ref.tabIndex,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["active", "className", "tabIndex", "eventKey", "onSelect", "onClick", "as"]);
  var navKey = (0, _SelectableContext.makeEventKey)(eventKey, props.href);
  var parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
  var navContext = (0, _react.useContext)(_NavContext.default);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    props['data-rb-event-key'] = navKey;
    props.id = navContext.getControllerId(navKey);
    props['aria-controls'] = navContext.getControlledId(navKey);
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    props.tabIndex = isActive ? tabIndex : -1;
    props['aria-selected'] = isActive;
  }

  var handleOnclick = (0, _useEventCallback.default)(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: (0, _classnames.default)(className, isActive && 'active')
  }));
});

AbstractNavItem.defaultProps = defaultProps;
var _default = AbstractNavItem;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","@restart/hooks/useEventCallback":"nAQU","./NavContext":"OYsU","./SelectableContext":"c50E"}],"lkuV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _AbstractNavItem = _interopRequireDefault(require("./AbstractNavItem"));

var _SelectableContext = require("./SelectableContext");

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListGroupItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ListGroupItem, _React$Component);

  function ListGroupItem() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleClick = function (event) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;

      if (disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (onClick) onClick(event);
    };

    return _this;
  }

  var _proto = ListGroupItem.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        bsPrefix = _this$props2.bsPrefix,
        active = _this$props2.active,
        disabled = _this$props2.disabled,
        className = _this$props2.className,
        variant = _this$props2.variant,
        action = _this$props2.action,
        as = _this$props2.as,
        eventKey = _this$props2.eventKey,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey"]);
    return _react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({}, props, {
      eventKey: (0, _SelectableContext.makeEventKey)(eventKey, props.href) // eslint-disable-next-line
      ,
      as: as || (action ? props.href ? 'a' : 'button' : 'div'),
      onClick: this.handleClick,
      className: (0, _classnames.default)(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
    }));
  };

  return ListGroupItem;
}(_react.default.Component);

ListGroupItem.defaultProps = {
  variant: null,
  active: false,
  disabled: false
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(ListGroupItem, 'list-group-item');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./AbstractNavItem":"vJB8","./SelectableContext":"c50E","./ThemeProvider":"BAZo"}],"v0jb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _ThemeProvider = require("./ThemeProvider");

var _AbstractNav = _interopRequireDefault(require("./AbstractNav"));

var _ListGroupItem = _interopRequireDefault(require("./ListGroupItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ListGroup, _React$Component);

  function ListGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ListGroup.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["className", "bsPrefix", "variant"]);
    return _react.default.createElement(_AbstractNav.default, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, variant && bsPrefix + "-" + variant)
    }));
  };

  return ListGroup;
}(_react.default.Component);

ListGroup.defaultProps = {
  as: 'div',
  variant: null
};
var DecoratedListGroup = (0, _uncontrollable.default)((0, _ThemeProvider.createBootstrapComponent)(ListGroup, 'list-group'), {
  activeKey: 'onSelect'
});
DecoratedListGroup.Item = _ListGroupItem.default;
var _default = DecoratedListGroup;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","uncontrollable":"pOCK","./ThemeProvider":"BAZo","./AbstractNav":"6vlL","./ListGroupItem":"lkuV"}],"MUPb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'div'
};

var Media = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'media');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix)
  }));
});

Media.displayName = 'Media';
Media.defaultProps = defaultProps;
Media.Body = (0, _createWithBsPrefix.default)('media-body');
var _default = Media;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./utils/createWithBsPrefix":"dMsm","./ThemeProvider":"BAZo"}],"a9Br":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = filterEvents;

var _contains = _interopRequireDefault(require("../query/contains"));

var _querySelectorAll = _interopRequireDefault(require("../query/querySelectorAll"));

function filterEvents(selector, handler) {
  return function filterHandler(e) {
    var top = e.currentTarget,
        target = e.target,
        matches = (0, _querySelectorAll.default)(top, selector);
    if (matches.some(function (match) {
      return (0, _contains.default)(match, target);
    })) handler.call(this, e);
  };
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","../query/contains":"MdZy","../query/querySelectorAll":"7DKm"}],"1/7p":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _on = _interopRequireDefault(require("./on"));

exports.on = _on.default;

var _off = _interopRequireDefault(require("./off"));

exports.off = _off.default;

var _filter = _interopRequireDefault(require("./filter"));

exports.filter = _filter.default;

var _listen = _interopRequireDefault(require("./listen"));

exports.listen = _listen.default;
var _default = {
  on: _on.default,
  off: _off.default,
  filter: _filter.default,
  listen: _listen.default
};
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./on":"HAUy","./off":"B5P+","./filter":"a9Br","./listen":"qZbV"}],"VJtT":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = scrollbarSize;

var _inDOM = _interopRequireDefault(require("./inDOM"));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./inDOM":"Vx1w"}],"OKgH":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = activeElement;

var _ownerDocument = _interopRequireDefault(require("./ownerDocument"));

function activeElement(doc) {
  if (doc === void 0) {
    doc = (0, _ownerDocument.default)();
  }

  try {
    return doc.activeElement;
  } catch (e) {
    /* ie throws if no active element */
  }
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./ownerDocument":"r4LY"}],"njtJ":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];
},{}],"V4yr":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createChainableTypeChecker = require('./utils/createChainableTypeChecker');

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
  }

  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(validate);
module.exports = exports['default'];
},{"react":"1n8/","./utils/createChainableTypeChecker":"njtJ"}],"RsE0":[function(require,module,exports) {
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};

},{}],"H1RQ":[function(require,module,exports) {
'use strict';

if ("production" === 'production') {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = require('./cjs/react-is.development.js');
}
},{"./cjs/react-is.production.min.js":"RsE0"}],"aemN":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIs = require('react-is');

var _createChainableTypeChecker = require('./utils/createChainableTypeChecker');

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function elementType(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];

  if (_react2.default.isValidElement(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`,expected an element type (a string ') + ', component class, or function component).');
  }

  if (!(0, _reactIs.isValidElementType)(propValue)) {
    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + ', component class, or function component).');
  }

  return null;
}

exports.default = (0, _createChainableTypeChecker2.default)(elementType);
module.exports = exports['default'];
},{"react":"1n8/","react-is":"H1RQ","./utils/createChainableTypeChecker":"njtJ"}],"ULai":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];
},{}],"NQzu":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(require("./hasClass"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./hasClass":"ULai"}],"hW4d":[function(require,module,exports) {
'use strict';

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};
},{}],"x5t6":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _addClass = _interopRequireDefault(require("./addClass"));

exports.addClass = _addClass.default;

var _removeClass = _interopRequireDefault(require("./removeClass"));

exports.removeClass = _removeClass.default;

var _hasClass = _interopRequireDefault(require("./hasClass"));

exports.hasClass = _hasClass.default;
var _default = {
  addClass: _addClass.default,
  removeClass: _removeClass.default,
  hasClass: _hasClass.default
};
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","./addClass":"NQzu","./removeClass":"hW4d","./hasClass":"ULai"}],"2bOG":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = getWindow;

function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}

module.exports = exports["default"];
},{}],"+Pc5":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = isOverflowing;

var _isWindow = _interopRequireDefault(require("dom-helpers/query/isWindow"));

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _ownerDocument.default)(node);
  var win = (0, _isWindow.default)(doc);
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow.default)(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

module.exports = exports.default;
},{"dom-helpers/query/isWindow":"2bOG","dom-helpers/ownerDocument":"r4LY"}],"bESj":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, exclude, cb) {
  exclude = [].concat(exclude);
  [].forEach.call(container.children, function (node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(show, node) {
  if (!node) return;

  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, _ref2) {
  var root = _ref2.root,
      backdrop = _ref2.backdrop;
  siblings(container, [root, backdrop], function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, _ref3) {
  var root = _ref3.root,
      backdrop = _ref3.backdrop;
  siblings(container, [root, backdrop], function (node) {
    return ariaHidden(false, node);
  });
}
},{}],"fmbs":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _class = _interopRequireDefault(require("dom-helpers/class"));

var _style = _interopRequireDefault(require("dom-helpers/style"));

var _scrollbarSize = _interopRequireDefault(require("dom-helpers/util/scrollbarSize"));

var _isOverflowing = _interopRequireDefault(require("./utils/isOverflowing"));

var _manageAriaHidden = require("./utils/manageAriaHidden");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }
  });
  return idx;
}
/**
 * Proper state managment for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */


var ModalManager =
/*#__PURE__*/
function () {
  function ModalManager(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$hideSiblingNodes = _ref.hideSiblingNodes,
        hideSiblingNodes = _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;

    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = (0, _scrollbarSize.default)();
  }

  var _proto = ModalManager.prototype;

  _proto.isContainerOverflowing = function isContainerOverflowing(modal) {
    var data = this.data[this.containerIndexFromModal(modal)];
    return data && data.overflowing;
  };

  _proto.containerIndexFromModal = function containerIndexFromModal(modal) {
    return findIndexOf(this.data, function (d) {
      return d.modals.indexOf(modal) !== -1;
    });
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var style = {
      overflow: 'hidden' // we are only interested in the actual `style` here
      // becasue we will override it

    };
    containerState.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };

    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style.paddingRight = parseInt((0, _style.default)(container, 'paddingRight') || 0, 10) + this.scrollbarSize + "px";
    }

    (0, _style.default)(container, style);
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var style = containerState.style;
    Object.keys(style).forEach(function (key) {
      container.style[key] = style[key];
    });
  };

  _proto.add = function add(modal, container, className) {
    var modalIdx = this.modals.indexOf(modal);
    var containerIdx = this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);

    if (this.hideSiblingNodes) {
      (0, _manageAriaHidden.hideSiblings)(container, modal);
    }

    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      //right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: (0, _isOverflowing.default)(container)
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }

    data.classes.forEach(_class.default.addClass.bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  };

  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = this.containerIndexFromModal(modal);
    var data = this.data[containerIdx];
    var container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(_class.default.removeClass.bind(null, container));

      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }

      if (this.hideSiblingNodes) {
        (0, _manageAriaHidden.showSiblings)(container, modal);
      }

      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      //otherwise make sure the next top modal is visible to a SR
      var _data$modals = data.modals[data.modals.length - 1],
          backdrop = _data$modals.backdrop,
          dialog = _data$modals.dialog;
      (0, _manageAriaHidden.ariaHidden)(false, dialog);
      (0, _manageAriaHidden.ariaHidden)(false, backdrop);
    }
  };

  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };

  return ModalManager;
}();

var _default = ModalManager;
exports.default = _default;
module.exports = exports.default;
},{"dom-helpers/class":"x5t6","dom-helpers/style":"cZJ7","dom-helpers/util/scrollbarSize":"VJtT","./utils/isOverflowing":"+Pc5","./utils/manageAriaHidden":"bESj"}],"gKRK":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = getContainer;

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getContainer(container, defaultContainer) {
  if (container == null) return defaultContainer;
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || null;
}

module.exports = exports.default;
},{"react-dom":"NKHc"}],"9Sbv":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentOrElement = _interopRequireDefault(require("prop-types-extra/lib/componentOrElement"));

var _inDOM = _interopRequireDefault(require("dom-helpers/util/inDOM"));

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _getContainer = _interopRequireDefault(require("./utils/getContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),
  onContainerResolved: _propTypes.default.func
};

var WaitForContainer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(WaitForContainer, _React$Component);

  function WaitForContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    if (!_inDOM.default) return _assertThisInitialized(_this);
    var container = _this.props.container;
    if (typeof container === 'function') container = container();

    if (container && !_reactDom.default.findDOMNode(container)) {
      // The container is a React component that has not yet been rendered.
      // Don't set the container node yet.
      return _assertThisInitialized(_this);
    }

    _this.setContainer(container);

    return _this;
  }

  var _proto = WaitForContainer.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.container !== this.props.container) {
      this.setContainer(nextProps.container);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    if (!this._container) {
      this.setContainer(this.props.container);
      this.forceUpdate(this.props.onContainerResolved);
    } else if (this.props.onContainerResolved) {
      this.props.onContainerResolved();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._container = null;
  };

  _proto.setContainer = function setContainer(container) {
    this._container = (0, _getContainer.default)(container, (0, _ownerDocument.default)().body);
  };

  _proto.render = function render() {
    return this._container ? this.props.children(this._container) : null;
  };

  return WaitForContainer;
}(_react.default.Component);

WaitForContainer.propTypes = propTypes;
var _default = WaitForContainer;
exports.default = _default;
module.exports = exports.default;
},{"prop-types":"5D9O","prop-types-extra/lib/componentOrElement":"V4yr","dom-helpers/util/inDOM":"Vx1w","dom-helpers/ownerDocument":"r4LY","react":"1n8/","react-dom":"NKHc","./utils/getContainer":"gKRK"}],"Urfp":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentOrElement = _interopRequireDefault(require("prop-types-extra/lib/componentOrElement"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _WaitForContainer = _interopRequireDefault(require("./WaitForContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */
var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.render = function render() {
    var _this = this;

    return this.props.children ? _react.default.createElement(_WaitForContainer.default, {
      container: this.props.container,
      onContainerResolved: this.props.onRendered
    }, function (container) {
      return _reactDom.default.createPortal(_this.props.children, container);
    }) : null;
  };

  return Portal;
}(_react.default.Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),
  onRendered: _propTypes.default.func
};
var _default = Portal;
exports.default = _default;
module.exports = exports.default;
},{"prop-types":"5D9O","prop-types-extra/lib/componentOrElement":"V4yr","react":"1n8/","react-dom":"NKHc","./WaitForContainer":"9Sbv"}],"Wj3o":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _activeElement = _interopRequireDefault(require("dom-helpers/activeElement"));

var _contains = _interopRequireDefault(require("dom-helpers/query/contains"));

var _inDOM = _interopRequireDefault(require("dom-helpers/util/inDOM"));

var _listen = _interopRequireDefault(require("dom-helpers/events/listen"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentOrElement = _interopRequireDefault(require("prop-types-extra/lib/componentOrElement"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ModalManager = _interopRequireDefault(require("./ModalManager"));

var _Portal = _interopRequireDefault(require("./Portal"));

var _getContainer = _interopRequireDefault(require("./utils/getContainer"));

var _ownerDocument = _interopRequireDefault(require("./utils/ownerDocument"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var modalManager = new _ModalManager.default();

function omitProps(props, propTypes) {
  var keys = Object.keys(props);
  var newProps = {};
  keys.map(function (prop) {
    if (!Object.prototype.hasOwnProperty.call(propTypes, prop)) {
      newProps[prop] = props[prop];
    }
  });
  return newProps;
}
/**
 * Love them or hate them, `<Modal />` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
 * The Modal component renders its `children` node in front of a backdrop component.
 *
 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
 *
 * - Manages dialog stacking when one-at-a-time just isn't enough.
 * - Creates a backdrop, for disabling interaction below the modal.
 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
 * - It disables scrolling of the page content while open.
 * - Adds the appropriate ARIA roles are automatically.
 * - Easily pluggable animations via a `<Transition/>` component.
 *
 * Note that, in the same way the backdrop element prevents users from clicking or interacting
 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
 * interact with page content while the Modal is open. To do this, we use a common technique of applying
 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
 * React hierarchy (such as the default: document.body).
 */


var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;
    _this.state = {
      exited: !_this.props.show
    };

    _this.onPortalRendered = function () {
      if (_this.props.onShow) {
        _this.props.onShow();
      } // autofocus after onShow, to not trigger a focus event for previous
      // modals before this one is shown.


      _this.autoFocus();
    };

    _this.onShow = function () {
      var doc = (0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this)));
      var container = (0, _getContainer.default)(_this.props.container, doc.body);

      _this.props.manager.add(_assertThisInitialized(_assertThisInitialized(_this)), container, _this.props.containerClassName);

      _this.removeKeydownListener = (0, _listen.default)(doc, 'keydown', _this.handleDocumentKeyDown);
      _this.removeFocusListener = (0, _listen.default)(doc, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      function () {
        return setTimeout(_this.enforceFocus);
      }, true);
    };

    _this.onHide = function () {
      _this.props.manager.remove(_assertThisInitialized(_assertThisInitialized(_this)));

      _this.removeKeydownListener();

      _this.removeFocusListener();

      if (_this.props.restoreFocus) {
        _this.restoreLastFocus();
      }
    };

    _this.setDialogRef = function (ref) {
      _this.dialog = ref;
    };

    _this.setBackdropRef = function (ref) {
      _this.backdrop = ref && _reactDom.default.findDOMNode(ref);
    };

    _this.handleHidden = function () {
      _this.setState({
        exited: true
      });

      _this.onHide();

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.handleBackdropClick = function (e) {
      if (e.target !== e.currentTarget) {
        return;
      }

      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(e);
      }

      if (_this.props.backdrop === true) {
        _this.props.onHide();
      }
    };

    _this.handleDocumentKeyDown = function (e) {
      if (_this.props.keyboard && e.keyCode === 27 && _this.isTopModal()) {
        if (_this.props.onEscapeKeyDown) {
          _this.props.onEscapeKeyDown(e);
        }

        _this.props.onHide();
      }
    };

    _this.enforceFocus = function () {
      if (!_this.props.enforceFocus || !_this._isMounted || !_this.isTopModal()) {
        return;
      }

      var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(_assertThisInitialized(_assertThisInitialized(_this))));

      if (_this.dialog && !(0, _contains.default)(_this.dialog, currentActiveElement)) {
        _this.dialog.focus();
      }
    };

    _this.renderBackdrop = function () {
      var _this$props2 = _this.props,
          renderBackdrop = _this$props2.renderBackdrop,
          Transition = _this$props2.backdropTransition;
      var backdrop = renderBackdrop({
        ref: _this.setBackdropRef,
        onClick: _this.handleBackdropClick
      });

      if (Transition) {
        backdrop = _react.default.createElement(Transition, {
          appear: true,
          in: _this.props.show
        }, backdrop);
      }

      return backdrop;
    };

    return _this;
  }

  Modal.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if (nextProps.show) {
      return {
        exited: false
      };
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      return {
        exited: true
      };
    }

    return null;
  };

  var _proto = Modal.prototype;

  _proto.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps) {
    if (_inDOM.default && !prevProps.show && this.props.show) {
      this.lastFocus = (0, _activeElement.default)();
    }

    return null;
  };

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this.props.show) {
      this.onShow();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var transition = this.props.transition;

    if (prevProps.show && !this.props.show && !transition) {
      // Otherwise handleHidden will call this.
      this.onHide();
    } else if (!prevProps.show && this.props.show) {
      this.onShow();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$props3 = this.props,
        show = _this$props3.show,
        transition = _this$props3.transition;
    this._isMounted = false;

    if (show || transition && !this.state.exited) {
      this.onHide();
    }
  };

  _proto.autoFocus = function autoFocus() {
    if (!this.props.autoFocus) return;
    var currentActiveElement = (0, _activeElement.default)((0, _ownerDocument.default)(this));

    if (this.dialog && !(0, _contains.default)(this.dialog, currentActiveElement)) {
      this.lastFocus = currentActiveElement;
      this.dialog.focus();
    }
  };

  _proto.restoreLastFocus = function restoreLastFocus() {
    // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
    if (this.lastFocus && this.lastFocus.focus) {
      this.lastFocus.focus();
      this.lastFocus = null;
    }
  };

  _proto.isTopModal = function isTopModal() {
    return this.props.manager.isTopModal(this);
  };

  _proto.render = function render() {
    var _this$props4 = this.props,
        show = _this$props4.show,
        container = _this$props4.container,
        children = _this$props4.children,
        renderDialog = _this$props4.renderDialog,
        _this$props4$role = _this$props4.role,
        role = _this$props4$role === void 0 ? 'dialog' : _this$props4$role,
        Transition = _this$props4.transition,
        backdrop = _this$props4.backdrop,
        className = _this$props4.className,
        style = _this$props4.style,
        onExit = _this$props4.onExit,
        onExiting = _this$props4.onExiting,
        onEnter = _this$props4.onEnter,
        onEntering = _this$props4.onEntering,
        onEntered = _this$props4.onEntered,
        props = _objectWithoutPropertiesLoose(_this$props4, ["show", "container", "children", "renderDialog", "role", "transition", "backdrop", "className", "style", "onExit", "onExiting", "onEnter", "onEntering", "onEntered"]);

    if (!(show || Transition && !this.state.exited)) {
      return null;
    }

    var dialogProps = _extends({
      role: role,
      ref: this.setDialogRef,
      // apparently only works on the dialog role element
      'aria-modal': role === 'dialog' ? true : undefined
    }, omitProps(props, Modal.propTypes), {
      style: style,
      className: className,
      tabIndex: '-1'
    });

    var dialog = renderDialog ? renderDialog(dialogProps) : _react.default.createElement("div", dialogProps, _react.default.cloneElement(children, {
      role: 'document'
    }));

    if (Transition) {
      dialog = _react.default.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        in: show,
        onExit: onExit,
        onExiting: onExiting,
        onExited: this.handleHidden,
        onEnter: onEnter,
        onEntering: onEntering,
        onEntered: onEntered
      }, dialog);
    }

    return _react.default.createElement(_Portal.default, {
      container: container,
      onRendered: this.onPortalRendered
    }, _react.default.createElement(_react.default.Fragment, null, backdrop && this.renderBackdrop(), dialog));
  };

  return Modal;
}(_react.default.Component);

Modal.propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: _propTypes.default.bool,

  /**
   * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: _propTypes.default.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: _propTypes.default.func,

  /**
   * Include a backdrop component.
   */
  backdrop: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['static'])]),

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js
   *  renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: _propTypes.default.func,

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: _propTypes.default.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyDown: _propTypes.default.func,

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: _propTypes.default.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _propTypes.default.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: _elementType.default,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: _elementType.default,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: _propTypes.default.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: _propTypes.default.bool,

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _propTypes.default.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _propTypes.default.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: _propTypes.default.object.isRequired
};
Modal.defaultProps = {
  show: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  onHide: function onHide() {},
  manager: modalManager,
  renderBackdrop: function renderBackdrop(props) {
    return _react.default.createElement("div", props);
  }
};
Modal.Manager = _ModalManager.default;
var _default = Modal;
exports.default = _default;
module.exports = exports.default;
},{"dom-helpers/activeElement":"OKgH","dom-helpers/query/contains":"MdZy","dom-helpers/util/inDOM":"Vx1w","dom-helpers/events/listen":"qZbV","prop-types":"5D9O","prop-types-extra/lib/componentOrElement":"V4yr","prop-types-extra/lib/elementType":"aemN","react":"1n8/","react-dom":"NKHc","./ModalManager":"fmbs","./Portal":"Urfp","./utils/getContainer":"gKRK","./utils/ownerDocument":"sjfC"}],"Kcb4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWithBsPrefix.default)('modal-body');

exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm"}],"Txi+":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalDialog = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      centered = _ref.centered,
      size = _ref.size,
      children = _ref.children,
      scrollable = _ref.scrollable,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "centered", "size", "children", "scrollable"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal');
  var dialogClass = bsPrefix + "-dialog";
  return _react.default.createElement("div", (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(dialogClass, className, size && bsPrefix + "-" + size, centered && dialogClass + "-centered", scrollable && dialogClass + "-scrollable")
  }), _react.default.createElement("div", {
    className: (0, _classnames.default)(bsPrefix + "-content")
  }, children));
});

ModalDialog.displayName = 'ModalDialog';
var _default = ModalDialog;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"Wela":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createWithBsPrefix.default)('modal-footer');

exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm"}],"pBK+":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContext = _react.default.createContext({
  onHide: function onHide() {}
});

var _default = ModalContext;
exports.default = _default;
},{"react":"1n8/"}],"6DJH":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _ThemeProvider = require("./ThemeProvider");

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _ModalContext = _interopRequireDefault(require("./ModalContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};

var ModalHeader = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      onHide = _ref.onHide,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal-header');
  var context = (0, _react.useContext)(_ModalContext.default);
  var handleClick = (0, _useEventCallback.default)(function () {
    if (context) context.onHide();
    if (onHide) onHide();
  });
  return _react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsPrefix)
  }), children, closeButton && _react.default.createElement(_CloseButton.default, {
    label: closeLabel,
    onClick: handleClick
  }));
});

ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps;
var _default = ModalHeader;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","@restart/hooks/useEventCallback":"nAQU","./ThemeProvider":"BAZo","./CloseButton":"Yv92","./ModalContext":"pBK+"}],"QNzf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _divWithClassName = _interopRequireDefault(require("./utils/divWithClassName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DivStyledAsH4 = (0, _divWithClassName.default)('h4');

var _default = (0, _createWithBsPrefix.default)('modal-title', {
  Component: DivStyledAsH4
});

exports.default = _default;
},{"./utils/createWithBsPrefix":"dMsm","./utils/divWithClassName":"DDdP"}],"4EVw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _querySelectorAll = _interopRequireDefault(require("dom-helpers/query/querySelectorAll"));

var _style = _interopRequireDefault(require("dom-helpers/style"));

var _scrollbarSize = _interopRequireDefault(require("dom-helpers/util/scrollbarSize"));

var _ModalManager2 = _interopRequireDefault(require("react-overlays/ModalManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

var BootstrapModalManager =
/*#__PURE__*/
function (_ModalManager) {
  (0, _inheritsLoose2.default)(BootstrapModalManager, _ModalManager);

  function BootstrapModalManager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _ModalManager.call.apply(_ModalManager, [this].concat(args)) || this;

    _this.adjustAndStore = function (prop, element, adjust) {
      var actual = element.style[prop];
      element.dataset[prop] = actual;
      (0, _style.default)(element, prop, parseFloat((0, _style.default)(element, prop)) + adjust + "px");
    };

    _this.restore = function (prop, element) {
      var value = element.dataset[prop];

      if (value !== undefined) {
        delete element.dataset[prop];
        (0, _style.default)(element, prop, value);
      }
    };

    return _this;
  }

  var _proto = BootstrapModalManager.prototype;

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var _this2 = this;

    _ModalManager.prototype.setContainerStyle.call(this, containerState, container);

    if (!containerState.overflowing) return;
    var size = (0, _scrollbarSize.default)();
    (0, _querySelectorAll.default)(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('paddingRight', el, size);
    });
    (0, _querySelectorAll.default)(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, -size);
    });
    (0, _querySelectorAll.default)(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this2.adjustAndStore('margingRight', el, size);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var _this3 = this;

    _ModalManager.prototype.removeContainerStyle.call(this, containerState, container);

    (0, _querySelectorAll.default)(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this3.restore('paddingRight', el);
    });
    (0, _querySelectorAll.default)(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
    (0, _querySelectorAll.default)(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this3.restore('margingRight', el);
    });
  };

  return BootstrapModalManager;
}(_ModalManager2.default);

exports.default = BootstrapModalManager;
},{"@babel/runtime/helpers/esm/inheritsLoose":"S11h","dom-helpers/query/querySelectorAll":"7DKm","dom-helpers/style":"cZJ7","dom-helpers/util/scrollbarSize":"VJtT","react-overlays/ModalManager":"fmbs"}],"5aCv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _events = _interopRequireDefault(require("dom-helpers/events"));

var _ownerDocument = _interopRequireDefault(require("dom-helpers/ownerDocument"));

var _inDOM = _interopRequireDefault(require("dom-helpers/util/inDOM"));

var _scrollbarSize = _interopRequireDefault(require("dom-helpers/util/scrollbarSize"));

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("react-overlays/Modal"));

var _Fade = _interopRequireDefault(require("./Fade"));

var _ModalBody = _interopRequireDefault(require("./ModalBody"));

var _ModalDialog = _interopRequireDefault(require("./ModalDialog"));

var _ModalFooter = _interopRequireDefault(require("./ModalFooter"));

var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));

var _ModalTitle = _interopRequireDefault(require("./ModalTitle"));

var _BootstrapModalManager = _interopRequireDefault(require("./utils/BootstrapModalManager"));

var _ThemeProvider = require("./ThemeProvider");

var _ModalContext = _interopRequireDefault(require("./ModalContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: _ModalDialog.default,
  manager: new _BootstrapModalManager.default()
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return _react.default.createElement(_Fade.default, props);
}

function BackdropTransition(props) {
  return _react.default.createElement(_Fade.default, props);
}
/* eslint-enable no-use-before-define */


var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Modal, _React$Component);

  function Modal(_props, context) {
    var _this;

    _this = _React$Component.call(this, _props, context) || this;

    _this.setModalRef = function (ref) {
      _this._modal = ref;
    };

    _this.handleDialogMouseDown = function () {
      _this._waitingForMouseUp = true;
    };

    _this.handleMouseUp = function (e) {
      if (_this._waitingForMouseUp && e.target === _this._modal.dialog) {
        _this._ignoreBackdropClick = true;
      }

      _this._waitingForMouseUp = false;
    };

    _this.handleClick = function (e) {
      if (_this._ignoreBackdropClick || e.target !== e.currentTarget) {
        _this._ignoreBackdropClick = false;
        return;
      }

      _this.props.onHide();
    };

    _this.handleEnter = function (node) {
      var _this$props;

      if (node) {
        node.style.display = 'block';

        _this.updateDialogStyle(node);
      }

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (_this.props.onEnter) (_this$props = _this.props).onEnter.apply(_this$props, [node].concat(args));
    };

    _this.handleEntering = function (node) {
      var _this$props2;

      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      if (_this.props.onEntering) (_this$props2 = _this.props).onEntering.apply(_this$props2, [node].concat(args)); // FIXME: This should work even when animation is disabled.

      _events.default.on(window, 'resize', _this.handleWindowResize);
    };

    _this.handleExited = function (node) {
      var _this$props3;

      if (node) node.style.display = ''; // RHL removes it sometimes

      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      if (_this.props.onExited) (_this$props3 = _this.props).onExited.apply(_this$props3, args); // FIXME: This should work even when animation is disabled.

      _events.default.off(window, 'resize', _this.handleWindowResize);
    };

    _this.handleWindowResize = function () {
      _this.updateDialogStyle(_this._modal.dialog);
    };

    _this.renderBackdrop = function (props) {
      var _this$props4 = _this.props,
          bsPrefix = _this$props4.bsPrefix,
          backdropClassName = _this$props4.backdropClassName;
      return _react.default.createElement("div", (0, _extends2.default)({}, props, {
        className: (0, _classnames.default)(bsPrefix + "-backdrop", backdropClassName)
      }));
    };

    _this.state = {
      style: {}
    };
    _this.modalContext = {
      onHide: function onHide() {
        return _this.props.onHide();
      }
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Clean up the listener if we need to.
    _events.default.off(window, 'resize', this.handleWindowResize);
  };

  _proto.updateDialogStyle = function updateDialogStyle(node) {
    if (!_inDOM.default) return;
    var manager = this.props.manager;
    var containerIsOverflowing = manager.isContainerOverflowing(this._modal);
    var modalIsOverflowing = node.scrollHeight > (0, _ownerDocument.default)(node).documentElement.clientHeight;
    this.setState({
      style: {
        paddingRight: containerIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined,
        paddingLeft: !containerIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined
      }
    });
  };

  _proto.render = function render() {
    var _this$props5 = this.props,
        bsPrefix = _this$props5.bsPrefix,
        className = _this$props5.className,
        style = _this$props5.style,
        dialogClassName = _this$props5.dialogClassName,
        children = _this$props5.children,
        Dialog = _this$props5.dialogAs,
        show = _this$props5.show,
        animation = _this$props5.animation,
        backdrop = _this$props5.backdrop,
        keyboard = _this$props5.keyboard,
        manager = _this$props5.manager,
        onEscapeKeyDown = _this$props5.onEscapeKeyDown,
        onShow = _this$props5.onShow,
        onHide = _this$props5.onHide,
        container = _this$props5.container,
        autoFocus = _this$props5.autoFocus,
        enforceFocus = _this$props5.enforceFocus,
        restoreFocus = _this$props5.restoreFocus,
        onEntered = _this$props5.onEntered,
        onExit = _this$props5.onExit,
        onExiting = _this$props5.onExiting,
        _ = _this$props5.onExited,
        _1 = _this$props5.onEntering,
        _6 = _this$props5.onEnter,
        _4 = _this$props5.onEntering,
        _2 = _this$props5.backdropClassName,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props5, ["bsPrefix", "className", "style", "dialogClassName", "children", "dialogAs", "show", "animation", "backdrop", "keyboard", "manager", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "onEntered", "onExit", "onExiting", "onExited", "onEntering", "onEnter", "onEntering", "backdropClassName"]);
    var clickHandler = backdrop === true ? this.handleClick : null;
    var baseModalStyle = (0, _extends2.default)({}, style, this.state.style); // Sets `display` always block when `animation` is false

    if (!animation) baseModalStyle.display = 'block';
    return _react.default.createElement(_ModalContext.default.Provider, {
      value: this.modalContext
    }, _react.default.createElement(_Modal.default, {
      show: show,
      backdrop: backdrop,
      container: container,
      keyboard: keyboard,
      autoFocus: autoFocus,
      enforceFocus: enforceFocus,
      restoreFocus: restoreFocus,
      onEscapeKeyDown: onEscapeKeyDown,
      onShow: onShow,
      onHide: onHide,
      onEntered: onEntered,
      onExit: onExit,
      onExiting: onExiting,
      manager: manager,
      ref: this.setModalRef,
      style: baseModalStyle,
      className: (0, _classnames.default)(className, bsPrefix),
      containerClassName: bsPrefix + "-open",
      transition: animation ? DialogTransition : undefined,
      backdropTransition: animation ? BackdropTransition : undefined,
      renderBackdrop: this.renderBackdrop,
      onClick: clickHandler,
      onMouseUp: this.handleMouseUp,
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onExited: this.handleExited
    }, _react.default.createElement(Dialog, (0, _extends2.default)({}, props, {
      onMouseDown: this.handleDialogMouseDown,
      className: dialogClassName
    }), children)));
  };

  return Modal;
}(_react.default.Component);

Modal.defaultProps = defaultProps;
var DecoratedModal = (0, _ThemeProvider.createBootstrapComponent)(Modal, 'modal');
DecoratedModal.Body = _ModalBody.default;
DecoratedModal.Header = _ModalHeader.default;
DecoratedModal.Title = _ModalTitle.default;
DecoratedModal.Footer = _ModalFooter.default;
DecoratedModal.Dialog = _ModalDialog.default;
DecoratedModal.TRANSITION_DURATION = 300;
DecoratedModal.BACKDROP_TRANSITION_DURATION = 150;
var _default = DecoratedModal;
exports.default = _default;
},{"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","dom-helpers/events":"1/7p","dom-helpers/ownerDocument":"r4LY","dom-helpers/util/inDOM":"Vx1w","dom-helpers/util/scrollbarSize":"VJtT","react":"1n8/","react-overlays/Modal":"Wj3o","./Fade":"dhH0","./ModalBody":"Kcb4","./ModalDialog":"Txi+","./ModalFooter":"Wela","./ModalHeader":"6DJH","./ModalTitle":"QNzf","./utils/BootstrapModalManager":"4EVw","./ThemeProvider":"BAZo","./ModalContext":"pBK+"}],"87Sr":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = require('./utils/createChainableTypeChecker');

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];
},{"./utils/createChainableTypeChecker":"njtJ"}],"Osrr":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'div'
};

var NavItem = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-item');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children);
});

NavItem.displayName = 'NavItem';
NavItem.defaultProps = defaultProps;
var _default = NavItem;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"uGb7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var _AbstractNavItem = _interopRequireDefault(require("./AbstractNavItem"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  disabled: false,
  as: _SafeAnchor.default
};

var NavLink = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-link');
  return _react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: (0, _classnames.default)(className, bsPrefix, disabled && 'disabled')
  }));
});

NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
var _default = NavLink;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./SafeAnchor":"U3GN","./AbstractNavItem":"vJB8","./ThemeProvider":"BAZo"}],"hKDS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _all = _interopRequireDefault(require("prop-types-extra/lib/all"));

var _react = _interopRequireWildcard(require("react"));

var _hook = _interopRequireDefault(require("uncontrollable/hook"));

var _ThemeProvider = require("./ThemeProvider");

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var _CardContext = _interopRequireDefault(require("./CardContext"));

var _AbstractNav = _interopRequireDefault(require("./AbstractNav"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  justify: false,
  fill: false,
  as: 'div'
};

var Nav = _react.default.forwardRef(function (uncontrolledProps, ref) {
  var _classNames;

  var _useUncontrolled = (0, _hook.default)(uncontrolledProps, {
    activeKey: 'onSelect'
  }),
      as = _useUncontrolled.as,
      bsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      fill = _useUncontrolled.fill,
      justify = _useUncontrolled.justify,
      navbar = _useUncontrolled.navbar,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      activeKey = _useUncontrolled.activeKey,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav');
  var navbarBsPrefix, cardHeaderBsPrefix;
  var navbarContext = (0, _react.useContext)(_NavbarContext.default);
  var cardContext = (0, _react.useContext)(_CardContext.default);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    navbar = navbar == null ? true : navbar;
  } else if (cardContext) {
    cardHeaderBsPrefix = cardContext.cardHeaderBsPrefix;
  }

  return _react.default.createElement(_AbstractNav.default, (0, _extends2.default)({
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: (0, _classnames.default)(className, (_classNames = {}, _classNames[bsPrefix] = !navbar, _classNames[navbarBsPrefix + "-nav"] = navbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
  }, props), children);
});

Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
Nav.Item = _NavItem.default;
Nav.Link = _NavLink.default;
Nav._Nav = Nav; // for Testing until enzyme is working with context

var _default = Nav;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","prop-types-extra/lib/all":"87Sr","react":"1n8/","uncontrollable/hook":"0rwB","./ThemeProvider":"BAZo","./NavbarContext":"bIp9","./CardContext":"bIp9","./AbstractNav":"6vlL","./NavItem":"Osrr","./NavLink":"uGb7"}],"5waf":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarBrand = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-brand');
  var Component = as || (props.href ? 'a' : 'span');
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }));
});

NavbarBrand.displayName = 'NavbarBrand';
var _default = NavbarBrand;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"r3G9":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _Collapse = _interopRequireDefault(require("./Collapse"));

var _ThemeProvider = require("./ThemeProvider");

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarCollapse = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "bsPrefix"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-collapse');
  return _react.default.createElement(_NavbarContext.default.Consumer, null, function (context) {
    return _react.default.createElement(_Collapse.default, (0, _extends2.default)({
      in: !!(context && context.expanded)
    }, props), _react.default.createElement("div", {
      ref: ref,
      className: bsPrefix
    }, children));
  });
});

NavbarCollapse.displayName = 'NavbarCollapse';
var _default = NavbarCollapse;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","react":"1n8/","./Collapse":"4hAU","./ThemeProvider":"BAZo","./NavbarContext":"bIp9"}],"zP+s":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _ThemeProvider = require("./ThemeProvider");

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  label: 'Toggle navigation',
  as: 'button'
};

var NavbarToggle = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      Component = _ref.as,
      onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "label", "as", "onClick"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-toggler');

  var _ref2 = (0, _react.useContext)(_NavbarContext.default) || {},
      onToggle = _ref2.onToggle,
      expanded = _ref2.expanded;

  var handleClick = (0, _useEventCallback.default)(function (e) {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: (0, _classnames.default)(className, bsPrefix, !!expanded && 'collapsed')
  }), children || _react.default.createElement("span", {
    className: bsPrefix + "-icon"
  }));
});

NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = defaultProps;
var _default = NavbarToggle;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","@restart/hooks/useEventCallback":"nAQU","./ThemeProvider":"BAZo","./NavbarContext":"bIp9"}],"/qrV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _NavbarBrand = _interopRequireDefault(require("./NavbarBrand"));

var _NavbarCollapse = _interopRequireDefault(require("./NavbarCollapse"));

var _NavbarToggle = _interopRequireDefault(require("./NavbarToggle"));

var _ThemeProvider = require("./ThemeProvider");

var _NavbarContext = _interopRequireDefault(require("./NavbarContext"));

var _SelectableContext = _interopRequireDefault(require("./SelectableContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  as: 'nav',
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};

var Navbar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Navbar, _React$Component);

  function Navbar() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleCollapse = function () {
      var _this$props = _this.props,
          onToggle = _this$props.onToggle,
          expanded = _this$props.expanded,
          collapseOnSelect = _this$props.collapseOnSelect,
          onSelect = _this$props.onSelect;
      if (onSelect) onSelect.apply(void 0, arguments);

      if (collapseOnSelect && expanded) {
        onToggle(false);
      }
    };

    _this.handleToggle = function () {
      var _this$props2 = _this.props,
          onToggle = _this$props2.onToggle,
          expanded = _this$props2.expanded;
      onToggle(!expanded);
    };

    _this.state = {
      navbarContext: {
        onToggle: _this.handleToggle
      }
    };
    return _this;
  }

  Navbar.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var bsPrefix = _ref.bsPrefix,
        expanded = _ref.expanded;
    return {
      navbarContext: (0, _extends2.default)({}, prevState.navbarContext, {
        bsPrefix: bsPrefix,
        expanded: expanded
      })
    };
  };

  var _proto = Navbar.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        bsPrefix = _this$props3.bsPrefix,
        expand = _this$props3.expand,
        variant = _this$props3.variant,
        bg = _this$props3.bg,
        fixed = _this$props3.fixed,
        sticky = _this$props3.sticky,
        className = _this$props3.className,
        children = _this$props3.children,
        Component = _this$props3.as,
        _1 = _this$props3.expanded,
        _2 = _this$props3.onToggle,
        _3 = _this$props3.onSelect,
        _4 = _this$props3.collapseOnSelect,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props3, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]); // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one

    if (props.role === undefined && Component !== 'nav') {
      props.role = 'navigation';
    }

    var expandClass = bsPrefix + "-expand";
    if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
    return _react.default.createElement(_NavbarContext.default.Provider, {
      value: this.state.navbarContext
    }, _react.default.createElement(_SelectableContext.default.Provider, {
      value: this.handleCollapse
    }, _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
    }), children)));
  };

  return Navbar;
}(_react.default.Component);

Navbar.defaultProps = defaultProps;
var DecoratedNavbar = (0, _ThemeProvider.createBootstrapComponent)((0, _uncontrollable.default)(Navbar, {
  expanded: 'onToggle'
}), 'navbar');
DecoratedNavbar.Brand = _NavbarBrand.default;
DecoratedNavbar.Toggle = _NavbarToggle.default;
DecoratedNavbar.Collapse = _NavbarCollapse.default;
DecoratedNavbar.Text = (0, _createWithBsPrefix.default)('navbar-text', {
  Component: 'span'
});
var _default = DecoratedNavbar;
exports.default = _default;
},{"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","uncontrollable":"pOCK","./utils/createWithBsPrefix":"dMsm","./NavbarBrand":"5waf","./NavbarCollapse":"r3G9","./NavbarToggle":"zP+s","./ThemeProvider":"BAZo","./NavbarContext":"bIp9","./SelectableContext":"c50E"}],"QNBg":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavDropdown =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(NavDropdown, _React$Component);

  function NavDropdown() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = NavDropdown.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        title = _this$props.title,
        children = _this$props.children,
        bsPrefix = _this$props.bsPrefix,
        rootCloseEvent = _this$props.rootCloseEvent,
        menuRole = _this$props.menuRole,
        disabled = _this$props.disabled,
        active = _this$props.active,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active"]);
    return _react.default.createElement(_Dropdown.default, (0, _extends2.default)({}, props, {
      as: _NavItem.default
    }), _react.default.createElement(_Dropdown.default.Toggle, {
      id: id,
      eventKey: null,
      active: active,
      disabled: disabled,
      childBsPrefix: bsPrefix,
      as: _NavLink.default
    }, title), _react.default.createElement(_Dropdown.default.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return NavDropdown;
}(_react.default.Component);

NavDropdown.Item = _Dropdown.default.Item;
NavDropdown.Divider = _Dropdown.default.Divider;
NavDropdown.Header = _Dropdown.default.Header;
var _default = NavDropdown;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","./Dropdown":"47Qq","./NavItem":"Osrr","./NavLink":"uGb7"}],"Bc0x":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _elementType = _interopRequireDefault(require("prop-types-extra/lib/elementType"));

var _componentOrElement = _interopRequireDefault(require("prop-types-extra/lib/componentOrElement"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Portal = _interopRequireDefault(require("./Portal"));

var _RootCloseWrapper = _interopRequireDefault(require("./RootCloseWrapper"));

var _reactPopper = require("react-popper");

var _forwardRef = _interopRequireDefault(require("react-context-toolbox/forwardRef"));

var _WaitForContainer = _interopRequireDefault(require("./WaitForContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * Built on top of `<Position/>` and `<Portal/>`, the overlay component is
 * great for custom tooltip overlays.
 */
var Overlay =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Overlay, _React$Component);

  function Overlay(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    _this.handleHidden = function () {
      _this.setState({
        exited: true
      });

      if (_this.props.onExited) {
        var _this$props;

        (_this$props = _this.props).onExited.apply(_this$props, arguments);
      }
    };

    _this.state = {
      exited: !props.show
    };
    _this.onHiddenListener = _this.handleHidden.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this._lastTarget = null;
    return _this;
  }

  Overlay.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if (nextProps.show) {
      return {
        exited: false
      };
    } else if (!nextProps.transition) {
      // Otherwise let handleHidden take care of marking exited.
      return {
        exited: true
      };
    }

    return null;
  };

  var _proto = Overlay.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      target: this.getTarget()
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props === prevProps) return;
    var target = this.getTarget();

    if (target !== this.state.target) {
      this.setState({
        target: target
      });
    }
  };

  _proto.getTarget = function getTarget() {
    var target = this.props.target;
    target = typeof target === 'function' ? target() : target;
    return target && _reactDom.default.findDOMNode(target) || null;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        _0 = _this$props2.target,
        container = _this$props2.container,
        containerPadding = _this$props2.containerPadding,
        placement = _this$props2.placement,
        rootClose = _this$props2.rootClose,
        children = _this$props2.children,
        flip = _this$props2.flip,
        _this$props2$popperCo = _this$props2.popperConfig,
        popperConfig = _this$props2$popperCo === void 0 ? {} : _this$props2$popperCo,
        Transition = _this$props2.transition,
        props = _objectWithoutPropertiesLoose(_this$props2, ["target", "container", "containerPadding", "placement", "rootClose", "children", "flip", "popperConfig", "transition"]);

    var target = this.state.target; // Don't un-render the overlay while it's transitioning out.

    var mountOverlay = props.show || Transition && !this.state.exited;

    if (!mountOverlay) {
      // Don't bother showing anything if we don't have to.
      return null;
    }

    var child = children;
    var _popperConfig$modifie = popperConfig.modifiers,
        modifiers = _popperConfig$modifie === void 0 ? {} : _popperConfig$modifie;

    var popperProps = _extends({}, popperConfig, {
      placement: placement,
      referenceElement: target,
      enableEvents: props.show,
      modifiers: _extends({}, modifiers, {
        preventOverflow: _extends({
          padding: containerPadding || 5
        }, modifiers.preventOverflow),
        flip: _extends({
          enabled: !!flip
        }, modifiers.preventOverflow)
      })
    });

    child = _react.default.createElement(_reactPopper.Popper, popperProps, function (_ref) {
      var arrowProps = _ref.arrowProps,
          style = _ref.style,
          ref = _ref.ref,
          popper = _objectWithoutPropertiesLoose(_ref, ["arrowProps", "style", "ref"]);

      _this2.popper = popper;

      var innerChild = _this2.props.children(_extends({}, popper, {
        // popper doesn't set the initial placement
        placement: popper.placement || placement,
        show: props.show,
        arrowProps: arrowProps,
        props: {
          ref: ref,
          style: style
        }
      }));

      if (Transition) {
        var onExit = props.onExit,
            onExiting = props.onExiting,
            onEnter = props.onEnter,
            onEntering = props.onEntering,
            onEntered = props.onEntered;
        innerChild = _react.default.createElement(Transition, {
          in: props.show,
          appear: true,
          onExit: onExit,
          onExiting: onExiting,
          onExited: _this2.onHiddenListener,
          onEnter: onEnter,
          onEntering: onEntering,
          onEntered: onEntered
        }, innerChild);
      }

      return innerChild;
    });

    if (rootClose) {
      child = _react.default.createElement(_RootCloseWrapper.default, {
        onRootClose: props.onHide,
        event: props.rootCloseEvent,
        disabled: props.rootCloseDisabled
      }, child);
    }

    return _react.default.createElement(_Portal.default, {
      container: container
    }, child);
  };

  return Overlay;
}(_react.default.Component);

Overlay.propTypes = _extends({}, _Portal.default.propTypes, {
  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes.default.bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: _propTypes.default.oneOf(_reactPopper.placements),

  /**
   * A Node, Component instance, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes.default.oneOfType([_componentOrElement.default, _propTypes.default.func]),

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: _propTypes.default.bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   outOfBoundaries: ?boolean,
   *   scheduleUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: _propTypes.default.func.isRequired,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: _propTypes.default.object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: _propTypes.default.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: _RootCloseWrapper.default.propTypes.event,

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: _RootCloseWrapper.default.propTypes.disabled,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    var propType = _propTypes.default.func;

    if (props.rootClose) {
      propType = propType.isRequired;
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return propType.apply(void 0, [props].concat(args));
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition: _elementType.default,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes.default.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes.default.func
});

var _default = (0, _forwardRef.default)(function (props, ref) {
  return (// eslint-disable-next-line react/prop-types
    _react.default.createElement(_WaitForContainer.default, {
      container: props.container
    }, function (container) {
      return _react.default.createElement(Overlay, _extends({}, props, {
        ref: ref,
        container: container
      }));
    })
  );
}, {
  displayName: 'withContainer(Overlay)'
});

exports.default = _default;
module.exports = exports.default;
},{"prop-types":"5D9O","prop-types-extra/lib/elementType":"aemN","prop-types-extra/lib/componentOrElement":"V4yr","react":"1n8/","react-dom":"NKHc","./Portal":"Urfp","./RootCloseWrapper":"pXxs","react-popper":"dG6K","react-context-toolbox/forwardRef":"Eskr","./WaitForContainer":"9Sbv"}],"LPDZ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _Overlay = _interopRequireDefault(require("react-overlays/Overlay"));

var _Fade = _interopRequireDefault(require("./Fade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  transition: _Fade.default,
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  var ref = props.ref;
  var aRef = arrowProps.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref((0, _reactDom.findDOMNode)(r));
  });

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
    return aRef((0, _reactDom.findDOMNode)(r));
  });
}

function Overlay(_ref) {
  var overlay = _ref.children,
      transition = _ref.transition,
      outerProps = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "transition"]);
  transition = transition === true ? _Fade.default : transition || null;
  return _react.default.createElement(_Overlay.default, (0, _extends2.default)({}, outerProps, {
    transition: transition
  }), function (_ref2) {
    var overlayProps = _ref2.props,
        arrowProps = _ref2.arrowProps,
        show = _ref2.show,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["props", "arrowProps", "show"]);
    wrapRefs(overlayProps, arrowProps);
    if (typeof overlay === 'function') return overlay((0, _extends2.default)({}, props, overlayProps, {
      show: show,
      arrowProps: arrowProps
    }));
    return _react.default.cloneElement(overlay, (0, _extends2.default)({}, props, overlayProps, {
      arrowProps: arrowProps,
      className: (0, _classnames.default)(overlay.props.className, !transition && show && 'show'),
      style: (0, _extends2.default)({}, overlay.props.style, overlayProps.style)
    }));
  });
}

Overlay.defaultProps = defaultProps;
var _default = Overlay;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","react":"1n8/","react-dom":"NKHc","classnames":"9qb7","react-overlays/Overlay":"Bc0x","./Fade":"dhH0"}],"mLD/":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _contains = _interopRequireDefault(require("dom-helpers/query/contains"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _warning = _interopRequireDefault(require("warning"));

var _Overlay = _interopRequireDefault(require("./Overlay"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RefHolder =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(_react.default.Component);

var normalizeDelay = function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
};

var defaultProps = {
  defaultOverlayShown: false,
  trigger: ['hover', 'focus']
}; // eslint-disable-next-line react/no-multi-comp

var OverlayTrigger =
/*#__PURE__*/
function (_React$Component2) {
  (0, _inheritsLoose2.default)(OverlayTrigger, _React$Component2);

  function OverlayTrigger(props, context) {
    var _this;

    _this = _React$Component2.call(this, props, context) || this;

    _this.getTarget = function () {
      return _reactDom.default.findDOMNode(_this.trigger.current);
    };

    _this.handleShow = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'show';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.show) {
        _this.show();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'show') _this.show();
      }, delay.show);
    };

    _this.handleHide = function () {
      clearTimeout(_this._timeout);
      _this._hoverState = 'hide';
      var delay = normalizeDelay(_this.props.delay);

      if (!delay.hide) {
        _this.hide();

        return;
      }

      _this._timeout = setTimeout(function () {
        if (_this._hoverState === 'hide') _this.hide();
      }, delay.hide);
    };

    _this.handleFocus = function (e) {
      var _this$getChildProps = _this.getChildProps(),
          onFocus = _this$getChildProps.onFocus;

      _this.handleShow(e);

      if (onFocus) onFocus(e);
    };

    _this.handleBlur = function (e) {
      var _this$getChildProps2 = _this.getChildProps(),
          onBlur = _this$getChildProps2.onBlur;

      _this.handleHide(e);

      if (onBlur) onBlur(e);
    };

    _this.handleClick = function (e) {
      var _this$getChildProps3 = _this.getChildProps(),
          onClick = _this$getChildProps3.onClick;

      if (_this.state.show) _this.hide();else _this.show();
      if (onClick) onClick(e);
    };

    _this.handleMouseOver = function (e) {
      _this.handleMouseOverOut(_this.handleShow, e, 'fromElement');
    };

    _this.handleMouseOut = function (e) {
      return _this.handleMouseOverOut(_this.handleHide, e, 'toElement');
    };

    _this.trigger = _react.default.createRef();
    _this.state = {
      show: !!props.defaultShow
    }; // We add aria-describedby in the case where the overlay is a role="tooltip"
    // for other cases describedby isn't appropriate (e.g. a popover with inputs) so we don't add it.

    _this.ariaModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var popper = data.instance.popper;

        var target = _this.getTarget();

        if (!_this.state.show || !target) return data;
        var role = popper.getAttribute('role') || '';

        if (popper.id && role.toLowerCase() === 'tooltip') {
          target.setAttribute('aria-describedby', popper.id);
        }

        return data;
      }
    };
    return _this;
  }

  var _proto2 = OverlayTrigger.prototype;

  _proto2.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this._timeout);
  };

  _proto2.getChildProps = function getChildProps() {
    return _react.default.Children.only(this.props.children).props;
  }; // Simple implementation of mouseEnter and mouseLeave.
  // React's built version is broken: https://github.com/facebook/react/issues/4251
  // for cases when the trigger is disabled and mouseOut/Over can cause flicker
  // moving from one child element to another.


  _proto2.handleMouseOverOut = function handleMouseOverOut(handler, e, relatedNative) {
    var target = e.currentTarget;
    var related = e.relatedTarget || e.nativeEvent[relatedNative];

    if ((!related || related !== target) && !(0, _contains.default)(target, related)) {
      handler(e);
    }
  };

  _proto2.hide = function hide() {
    this.setState({
      show: false
    });
  };

  _proto2.show = function show() {
    this.setState({
      show: true
    });
  };

  _proto2.render = function render() {
    var _this$props = this.props,
        trigger = _this$props.trigger,
        overlay = _this$props.overlay,
        children = _this$props.children,
        _this$props$popperCon = _this$props.popperConfig,
        popperConfig = _this$props$popperCon === void 0 ? {} : _this$props$popperCon,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["trigger", "overlay", "children", "popperConfig"]);
    delete props.delay;
    delete props.defaultShow;

    var child = _react.default.Children.only(children);

    var triggerProps = {};
    var triggers = trigger == null ? [] : [].concat(trigger);

    if (triggers.indexOf('click') !== -1) {
      triggerProps.onClick = this.handleClick;
    }

    if (triggers.indexOf('focus') !== -1) {
      triggerProps.onFocus = this.handleShow;
      triggerProps.onBlur = this.handleHide;
    }

    if (triggers.indexOf('hover') !== -1) {
      "production" !== "production" ? (0, _warning.default)(triggers.length >= 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the ' + 'visibility of the overlay to just mouse users. Consider also ' + 'including the `"focus"` trigger so that touch and keyboard only ' + 'users can see the overlay as well.') : void 0;
      triggerProps.onMouseOver = this.handleMouseOver;
      triggerProps.onMouseOut = this.handleMouseOut;
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(RefHolder, {
      ref: this.trigger
    }, (0, _react.cloneElement)(child, triggerProps)), _react.default.createElement(_Overlay.default, (0, _extends2.default)({}, props, {
      popperConfig: (0, _extends2.default)({}, popperConfig, {
        modifiers: (0, _extends2.default)({}, popperConfig.modifiers, {
          ariaModifier: this.ariaModifier
        })
      }),
      show: this.state.show,
      onHide: this.handleHide,
      target: this.getTarget
    }), overlay));
  };

  return OverlayTrigger;
}(_react.default.Component);

OverlayTrigger.defaultProps = defaultProps;
var _default = OverlayTrigger;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","dom-helpers/query/contains":"MdZy","react":"1n8/","react-dom":"NKHc","warning":"XOCG","./Overlay":"LPDZ"}],"/Wrl":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageItem;
exports.Last = exports.Next = exports.Ellipsis = exports.Prev = exports.First = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-multi-comp */
var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};

function PageItem(_ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);
  var Component = active || disabled ? 'span' : _SafeAnchor.default;
  return _react.default.createElement("li", {
    style: style,
    className: (0, _classnames.default)(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, _react.default.createElement(Component, (0, _extends2.default)({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && _react.default.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
}

PageItem.defaultProps = defaultProps;

function createButton(name, defaultValue, label) {
  var _class, _temp;

  if (label === void 0) {
    label = name;
  }

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inheritsLoose2.default)(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["children"]);
      delete props.active;
      return _react.default.createElement(PageItem, props, _react.default.createElement("span", {
        "aria-hidden": "true"
      }, children || defaultValue), _react.default.createElement("span", {
        className: "sr-only"
      }, label));
    };

    return _class;
  }(_react.default.Component), _class.displayName = name, _temp;
}

var First = createButton('First', "\xAB");
exports.First = First;
var Prev = createButton('Prev', "\u2039", 'Previous');
exports.Prev = Prev;
var Ellipsis = createButton('Ellipsis', "\u2026", 'More');
exports.Ellipsis = Ellipsis;
var Next = createButton('Next', "\u203A");
exports.Next = Next;
var Last = createButton('Last', "\xBB");
exports.Last = Last;
},{"@babel/runtime/helpers/esm/inheritsLoose":"S11h","@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./SafeAnchor":"U3GN"}],"9wqt":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _PageItem = _interopRequireWildcard(require("./PageItem"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
var Pagination =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        size = _this$props.size,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "children", "size"]);
    return _react.default.createElement("ul", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, size && bsPrefix + "-" + size)
    }), children);
  };

  return Pagination;
}(_react.default.Component);

var DecoratedPagination = (0, _ThemeProvider.createBootstrapComponent)(Pagination, 'pagination');
DecoratedPagination.First = _PageItem.First;
DecoratedPagination.Prev = _PageItem.Prev;
DecoratedPagination.Ellipsis = _PageItem.Ellipsis;
DecoratedPagination.Item = _PageItem.default;
DecoratedPagination.Next = _PageItem.Next;
DecoratedPagination.Last = _PageItem.Last;
var _default = DecoratedPagination;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo","./PageItem":"/Wrl"}],"rTP4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _isRequiredForA11y = _interopRequireDefault(require("prop-types-extra/lib/isRequiredForA11y"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  placement: 'right'
};

function Popover(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      title = _ref.title,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "innerRef", "placement", "className", "style", "title", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    role: "tooltip",
    ref: innerRef,
    style: style,
    "x-placement": placement,
    className: (0, _classnames.default)(className, bsPrefix, "bs-popover-" + placement)
  }, props), _react.default.createElement("div", (0, _extends2.default)({
    className: "arrow"
  }, arrowProps)), title && _react.default.createElement("div", {
    className: bsPrefix + "-header h3"
  }, title), _react.default.createElement("div", {
    className: bsPrefix + "-body"
  }, children));
}

Popover.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(Popover, 'popover');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","prop-types-extra/lib/isRequiredForA11y":"91/V","./ThemeProvider":"BAZo"}],"G+nn":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _ElementChildren = require("./utils/ElementChildren");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;

  _react.default.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = _react.default.createElement(DecoratedProgressBar, null);

    if (child.type === element.type) return;
    var childIdentifier = _react.default.isValidElement(child) ? child.type.displayName || child.type.name || child.type : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });

  return error;
}

var defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

var ProgressBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ProgressBar, _React$Component);

  function ProgressBar() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.renderProgressBar = function renderProgressBar(_ref) {
    var _classNames;

    var min = _ref.min,
        now = _ref.now,
        max = _ref.max,
        label = _ref.label,
        srOnly = _ref.srOnly,
        striped = _ref.striped,
        animated = _ref.animated,
        className = _ref.className,
        style = _ref.style,
        variant = _ref.variant,
        bsPrefix = _ref.bsPrefix,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"]);
    return _react.default.createElement("div", (0, _extends2.default)({}, props, {
      role: "progressbar",
      className: (0, _classnames.default)(className, bsPrefix + "-bar", (_classNames = {}, _classNames["bg-" + variant] = variant, _classNames[bsPrefix + "-bar-animated"] = animated, _classNames[bsPrefix + "-bar-striped"] = animated || striped, _classNames)),
      style: (0, _extends2.default)({
        width: getPercentage(now, min, max) + "%"
      }, style),
      "aria-valuenow": now,
      "aria-valuemin": min,
      "aria-valuemax": max
    }), srOnly ? _react.default.createElement("span", {
      className: "sr-only"
    }, label) : label);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        isChild = _this$props.isChild,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["isChild"]);

    if (isChild) {
      return this.renderProgressBar(props);
    }

    var min = props.min,
        now = props.now,
        max = props.max,
        label = props.label,
        srOnly = props.srOnly,
        striped = props.striped,
        animated = props.animated,
        bsPrefix = props.bsPrefix,
        variant = props.variant,
        className = props.className,
        children = props.children,
        wrapperProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"]);
    return _react.default.createElement("div", (0, _extends2.default)({}, wrapperProps, {
      className: (0, _classnames.default)(className, bsPrefix)
    }), children ? (0, _ElementChildren.map)(children, function (child) {
      return (0, _react.cloneElement)(child, {
        isChild: true
      });
    }) : this.renderProgressBar({
      min: min,
      now: now,
      max: max,
      label: label,
      srOnly: srOnly,
      striped: striped,
      animated: animated,
      bsPrefix: bsPrefix,
      variant: variant
    }));
  };

  return ProgressBar;
}(_react.default.Component);

ProgressBar.defaultProps = defaultProps;
var DecoratedProgressBar = (0, _ThemeProvider.createBootstrapComponent)(ProgressBar, 'progress');
var _default = DecoratedProgressBar;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo","./utils/ElementChildren":"F5PP"}],"Gun5":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  aspectRatio: '1by1'
};

var ResponsiveEmbed =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ResponsiveEmbed, _React$Component);

  function ResponsiveEmbed() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ResponsiveEmbed.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        children = _this$props.children,
        aspectRatio = _this$props.aspectRatio,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "children", "aspectRatio"]);

    var child = _react.default.Children.only(children);

    return _react.default.createElement("div", (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(bsPrefix, className, aspectRatio && bsPrefix + "-" + aspectRatio)
    }), _react.default.cloneElement(child, {
      className: (0, _classnames.default)(child.props.className, bsPrefix + "-item")
    }));
  };

  return ResponsiveEmbed;
}(_react.default.Component);

ResponsiveEmbed.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(ResponsiveEmbed, 'embed-responsive');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"l6yG":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Row, _React$Component);

  function Row() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Row.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        noGutters = _this$props.noGutters,
        Component = _this$props.as,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "noGutters", "as", "className"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix, noGutters && 'no-gutters')
    }));
  };

  return Row;
}(_react.default.Component);

Row.defaultProps = {
  as: 'div',
  noGutters: false
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Row, 'row');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"7pFS":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Spinner, _React$Component);

  function Spinner() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Spinner.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        variant = _this$props.variant,
        animation = _this$props.animation,
        size = _this$props.size,
        children = _this$props.children,
        as = _this$props.as,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "variant", "animation", "size", "children", "as", "className"]);
    var Component = as;
    var bsSpinnerPrefix = bsPrefix + "-" + animation;
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsSpinnerPrefix, size && bsSpinnerPrefix + "-" + size, variant && "text-" + variant)
    }), children);
  };

  return Spinner;
}(_react.default.Component);

Spinner.defaultProps = {
  as: 'div'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(Spinner, 'spinner');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"jMAQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @inherits Button, Dropdown
 */
var SplitButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SplitButton, _React$Component);

  function SplitButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SplitButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        bsPrefix = _this$props.bsPrefix,
        size = _this$props.size,
        variant = _this$props.variant,
        title = _this$props.title,
        toggleLabel = _this$props.toggleLabel,
        children = _this$props.children,
        onClick = _this$props.onClick,
        href = _this$props.href,
        target = _this$props.target,
        menuRole = _this$props.menuRole,
        rootCloseEvent = _this$props.rootCloseEvent,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["id", "bsPrefix", "size", "variant", "title", "toggleLabel", "children", "onClick", "href", "target", "menuRole", "rootCloseEvent"]);
    return _react.default.createElement(_Dropdown.default, (0, _extends2.default)({}, props, {
      as: _ButtonGroup.default
    }), _react.default.createElement(_Button.default, {
      size: size,
      variant: variant,
      disabled: props.disabled,
      bsPrefix: bsPrefix,
      href: href,
      target: target,
      onClick: onClick
    }, title), _react.default.createElement(_Dropdown.default.Toggle, {
      split: true,
      id: id,
      size: size,
      variant: variant,
      disabled: props.disabled,
      childBsPrefix: bsPrefix
    }, _react.default.createElement("span", {
      className: "sr-only"
    }, toggleLabel)), _react.default.createElement(_Dropdown.default.Menu, {
      role: menuRole,
      rootCloseEvent: rootCloseEvent
    }, children));
  };

  return SplitButton;
}(_react.default.Component);

SplitButton.defaultProps = {
  toggleLabel: 'Toggle dropdown'
};
var _default = SplitButton;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","./Button":"Ulc8","./ButtonGroup":"q8PY","./Dropdown":"47Qq"}],"Z7qp":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _TabContext = _interopRequireDefault(require("./TabContext"));

var _SelectableContext = _interopRequireDefault(require("./SelectableContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TabContainer, _React$Component);

  function TabContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.getControlledId = function (key) {
      return _this.getKey(key, 'tabpane');
    };

    _this.getControllerId = function (key) {
      return _this.getKey(key, 'tab');
    };

    _this.state = {
      tabContext: {
        onSelect: _this.props.onSelect,
        activeKey: _this.props.activeKey,
        transition: _this.props.transition,
        mountOnEnter: _this.props.mountOnEnter,
        unmountOnExit: _this.props.unmountOnExit,
        getControlledId: _this.getControlledId,
        getControllerId: _this.getControllerId
      }
    };
    return _this;
  }

  TabContainer.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var activeKey = _ref.activeKey,
        mountOnEnter = _ref.mountOnEnter,
        unmountOnExit = _ref.unmountOnExit,
        transition = _ref.transition;
    return {
      tabContext: (0, _extends2.default)({}, prevState.tabContext, {
        activeKey: activeKey,
        mountOnEnter: mountOnEnter,
        unmountOnExit: unmountOnExit,
        transition: transition
      })
    };
  };

  var _proto = TabContainer.prototype;

  _proto.getKey = function getKey(key, type) {
    var _this$props = this.props,
        generateChildId = _this$props.generateChildId,
        id = _this$props.id;
    if (generateChildId) return generateChildId(key, type);
    return id ? id + "-" + type + "-" + key : null;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        onSelect = _this$props2.onSelect;
    return _react.default.createElement(_TabContext.default.Provider, {
      value: this.state.tabContext
    }, _react.default.createElement(_SelectableContext.default.Provider, {
      value: onSelect
    }, children));
  };

  return TabContainer;
}(_react.default.Component);

var _default = (0, _uncontrollable.default)(TabContainer, {
  activeKey: 'onSelect'
});

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","uncontrollable":"pOCK","./TabContext":"5xvr","./SelectableContext":"c50E"}],"KMOT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(TabContent, _React$Component);

  function TabContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        Component = _this$props.as,
        className = _this$props.className,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "as", "className"]);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      className: (0, _classnames.default)(className, bsPrefix)
    }));
  };

  return TabContent;
}(_react.default.Component);

TabContent.defaultProps = {
  as: 'div'
};

var _default = (0, _ThemeProvider.createBootstrapComponent)(TabContent, 'tab-content');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"zl3F":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _TabContext = _interopRequireDefault(require("./TabContext"));

var _SelectableContext = _interopRequireWildcard(require("./SelectableContext"));

var _Fade = _interopRequireDefault(require("./Fade"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useTabContext(props) {
  var context = (0, _react.useContext)(_TabContext.default);
  if (!context) return props;
  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = (0, _objectWithoutPropertiesLoose2.default)(context, ["activeKey", "getControlledId", "getControllerId"]);
  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = (0, _SelectableContext.makeEventKey)(props.eventKey);
  return (0, _extends2.default)({}, props, {
    active: props.active == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || _Fade.default),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

var TabPane = _react.default.forwardRef(function (props, ref) {
  var _useTabContext = useTabContext(props),
      bsPrefix = _useTabContext.bsPrefix,
      className = _useTabContext.className,
      active = _useTabContext.active,
      onEnter = _useTabContext.onEnter,
      onEntering = _useTabContext.onEntering,
      onEntered = _useTabContext.onEntered,
      onExit = _useTabContext.onExit,
      onExiting = _useTabContext.onExiting,
      onExited = _useTabContext.onExited,
      mountOnEnter = _useTabContext.mountOnEnter,
      unmountOnExit = _useTabContext.unmountOnExit,
      Transition = _useTabContext.transition,
      _useTabContext$as = _useTabContext.as,
      Component = _useTabContext$as === void 0 ? 'div' : _useTabContext$as,
      _ = _useTabContext.eventKey,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_useTabContext, ["bsPrefix", "className", "active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tab-pane');
  if (!active && unmountOnExit) return null;

  var pane = _react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    ref: ref,
    role: "tabpanel",
    "aria-hidden": !active,
    className: (0, _classnames.default)(className, prefix, {
      active: active
    })
  }));

  if (Transition) pane = _react.default.createElement(Transition, {
    in: active,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    mountOnEnter: mountOnEnter,
    unmountOnExit: mountOnEnter
  }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
  // conflict with the top level one.

  return _react.default.createElement(_TabContext.default.Provider, {
    value: null
  }, _react.default.createElement(_SelectableContext.default.Provider, {
    value: null
  }, pane));
});

TabPane.displayName = 'TabPane';
var _default = TabPane;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo","./TabContext":"5xvr","./SelectableContext":"c50E","./Fade":"dhH0"}],"A/bh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _TabContainer = _interopRequireDefault(require("./TabContainer"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var _TabPane = _interopRequireDefault(require("./TabPane"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/require-render-return, react/no-unused-prop-types */
var Tab =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
  };

  return Tab;
}(_react.default.Component);

Tab.Container = _TabContainer.default;
Tab.Content = _TabContent.default;
Tab.Pane = _TabPane.default;
var _default = Tab;
exports.default = _default;
},{"@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","./TabContainer":"Z7qp","./TabContent":"KMOT","./TabPane":"zl3F"}],"TVao":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Table, _React$Component);

  function Table() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Table.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        bsPrefix = _this$props.bsPrefix,
        className = _this$props.className,
        striped = _this$props.striped,
        bordered = _this$props.bordered,
        borderless = _this$props.borderless,
        hover = _this$props.hover,
        size = _this$props.size,
        variant = _this$props.variant,
        responsive = _this$props.responsive,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["bsPrefix", "className", "striped", "bordered", "borderless", "hover", "size", "variant", "responsive"]);
    var classes = (0, _classnames.default)(bsPrefix, className, variant && bsPrefix + "-" + variant, size && bsPrefix + "-" + size, striped && bsPrefix + "-striped", bordered && bsPrefix + "-bordered", borderless && bsPrefix + "-borderless", hover && bsPrefix + "-hover");

    var table = _react.default.createElement("table", (0, _extends2.default)({}, props, {
      className: classes
    }));

    if (responsive) {
      var responsiveClass = bsPrefix + "-responsive";

      if (typeof responsive === 'string') {
        responsiveClass = responsiveClass + "-" + responsive;
      }

      return _react.default.createElement("div", {
        className: responsiveClass
      }, table);
    }

    return table;
  };

  return Table;
}(_react.default.Component);

var _default = (0, _ThemeProvider.createBootstrapComponent)(Table, 'table');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./ThemeProvider":"BAZo"}],"/waQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _isRequiredForA11y = _interopRequireDefault(require("prop-types-extra/lib/isRequiredForA11y"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _Nav = _interopRequireDefault(require("./Nav"));

var _NavLink = _interopRequireDefault(require("./NavLink"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _TabContainer = _interopRequireDefault(require("./TabContainer"));

var _TabContent = _interopRequireDefault(require("./TabContent"));

var _TabPane = _interopRequireDefault(require("./TabPane"));

var _ElementChildren = require("./utils/ElementChildren");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabContainer = _TabContainer.default.ControlledComponent;
var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  (0, _ElementChildren.forEach)(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Tabs, _React$Component);

  function Tabs() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tabs.prototype;

  _proto.renderTab = function renderTab(child) {
    var _child$props = child.props,
        title = _child$props.title,
        eventKey = _child$props.eventKey,
        disabled = _child$props.disabled,
        tabClassName = _child$props.tabClassName;

    if (title == null) {
      return null;
    }

    return _react.default.createElement(_NavItem.default, {
      as: _NavLink.default,
      eventKey: eventKey,
      disabled: disabled,
      className: tabClassName
    }, title);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        id = _this$props.id,
        onSelect = _this$props.onSelect,
        transition = _this$props.transition,
        mountOnEnter = _this$props.mountOnEnter,
        unmountOnExit = _this$props.unmountOnExit,
        children = _this$props.children,
        _this$props$activeKey = _this$props.activeKey,
        activeKey = _this$props$activeKey === void 0 ? getDefaultActiveKey(children) : _this$props$activeKey,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);
    return _react.default.createElement(TabContainer, {
      id: id,
      activeKey: activeKey,
      onSelect: onSelect,
      transition: transition,
      mountOnEnter: mountOnEnter,
      unmountOnExit: unmountOnExit
    }, _react.default.createElement(_Nav.default, (0, _extends2.default)({}, props, {
      role: "tablist",
      as: "nav"
    }), (0, _ElementChildren.map)(children, this.renderTab)), _react.default.createElement(_TabContent.default, null, (0, _ElementChildren.map)(children, function (child) {
      var childProps = (0, _extends2.default)({}, child.props);
      delete childProps.title;
      delete childProps.disabled;
      delete childProps.tabClassName;
      return _react.default.createElement(_TabPane.default, childProps);
    })));
  };

  return Tabs;
}(_react.default.Component);

Tabs.defaultProps = defaultProps;

var _default = (0, _uncontrollable.default)(Tabs, {
  activeKey: 'onSelect'
});

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","prop-types-extra/lib/isRequiredForA11y":"91/V","uncontrollable":"pOCK","./Nav":"hKDS","./NavLink":"uGb7","./NavItem":"Osrr","./TabContainer":"Z7qp","./TabContent":"KMOT","./TabPane":"zl3F","./utils/ElementChildren":"F5PP"}],"WGJF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};

var ToggleButton =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ToggleButton, _React$Component);

  function ToggleButton() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      focused: false
    };

    _this.handleFocus = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: true
      });
    };

    _this.handleBlur = function (e) {
      if (e.target.tagName === 'INPUT') _this.setState({
        focused: false
      });
    };

    return _this;
  }

  var _proto = ToggleButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        name = _this$props.name,
        className = _this$props.className,
        checked = _this$props.checked,
        type = _this$props.type,
        onChange = _this$props.onChange,
        value = _this$props.value,
        disabled = _this$props.disabled,
        inputRef = _this$props.inputRef,
        innerRef = _this$props.innerRef,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef", "innerRef"]);
    var focused = this.state.focused;
    return _react.default.createElement(_Button.default, (0, _extends2.default)({}, props, {
      ref: innerRef,
      className: (0, _classnames.default)(className, focused && 'focus', disabled && 'disabled'),
      type: null,
      active: !!checked,
      as: "label"
    }), _react.default.createElement("input", {
      name: name,
      type: type,
      value: value,
      ref: inputRef,
      autoComplete: "off",
      checked: !!checked,
      disabled: !!disabled,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onChange: onChange || noop
    }), children);
  };

  return ToggleButton;
}(_react.default.Component);

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(ToggleButton, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","classnames":"9qb7","react":"1n8/","./Button":"Ulc8"}],"NR7/":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _invariant = _interopRequireDefault(require("invariant"));

var _uncontrollable = _interopRequireDefault(require("uncontrollable"));

var _createChainedFunction = _interopRequireDefault(require("./utils/createChainedFunction"));

var _ElementChildren = require("./utils/ElementChildren");

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var _ToggleButton = _interopRequireDefault(require("./ToggleButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  type: 'radio'
};

var ToggleButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ToggleButtonGroup, _React$Component);

  function ToggleButtonGroup() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ToggleButtonGroup.prototype;

  _proto.getValues = function getValues() {
    var value = this.props.value;
    return value == null ? [] : [].concat(value);
  };

  _proto.handleToggle = function handleToggle(value, event) {
    var _this$props = this.props,
        type = _this$props.type,
        onChange = _this$props.onChange;
    var values = this.getValues();
    var isActive = values.indexOf(value) !== -1;

    if (type === 'radio') {
      if (!isActive) onChange(value, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== value;
      }), event);
    } else {
      onChange([].concat(values, [value]), event);
    }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props2 = this.props,
        children = _this$props2.children,
        type = _this$props2.type,
        name = _this$props2.name,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["children", "type", "name"]);
    delete props.onChange;
    delete props.value;
    var values = this.getValues();
    !(type !== 'radio' || !!name) ? "production" !== "production" ? (0, _invariant.default)(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : (0, _invariant.default)(false) : void 0;
    return _react.default.createElement(_ButtonGroup.default, (0, _extends2.default)({}, props, {
      toggle: true
    }), (0, _ElementChildren.map)(children, function (child) {
      var _child$props = child.props,
          value = _child$props.value,
          onChange = _child$props.onChange;

      var handler = function handler(e) {
        return _this.handleToggle(value, e);
      };

      return _react.default.cloneElement(child, {
        type: type,
        name: child.name || name,
        checked: values.indexOf(value) !== -1,
        onChange: (0, _createChainedFunction.default)(onChange, handler)
      });
    }));
  };

  return ToggleButtonGroup;
}(_react.default.Component);

ToggleButtonGroup.defaultProps = defaultProps;
var UncontrolledToggleButtonGroup = (0, _uncontrollable.default)(ToggleButtonGroup, {
  value: 'onChange'
});
UncontrolledToggleButtonGroup.Button = _ToggleButton.default;
var _default = UncontrolledToggleButtonGroup;
exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","invariant":"2gTp","uncontrollable":"pOCK","./utils/createChainedFunction":"6ox0","./utils/ElementChildren":"F5PP","./ButtonGroup":"q8PY","./ToggleButton":"WGJF"}],"EpPN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _isRequiredForA11y = _interopRequireDefault(require("prop-types-extra/lib/isRequiredForA11y"));

var _ThemeProvider = require("./ThemeProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  placement: 'right'
};

function Tooltip(_ref) {
  var bsPrefix = _ref.bsPrefix,
      innerRef = _ref.innerRef,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "innerRef", "placement", "className", "style", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);
  return _react.default.createElement("div", (0, _extends2.default)({
    ref: innerRef,
    style: style,
    role: "tooltip",
    "x-placement": placement,
    className: (0, _classnames.default)(className, bsPrefix, "bs-tooltip-" + placement)
  }, props), _react.default.createElement("div", (0, _extends2.default)({
    className: "arrow"
  }, arrowProps)), _react.default.createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
}

Tooltip.defaultProps = defaultProps;

var _default = (0, _ThemeProvider.createBootstrapComponent)(Tooltip, 'tooltip');

exports.default = _default;
},{"@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","classnames":"9qb7","react":"1n8/","prop-types-extra/lib/isRequiredForA11y":"91/V","./ThemeProvider":"BAZo"}],"fSld":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Accordion", {
  enumerable: true,
  get: function () {
    return _Accordion2.default;
  }
});
Object.defineProperty(exports, "Alert", {
  enumerable: true,
  get: function () {
    return _Alert2.default;
  }
});
Object.defineProperty(exports, "Badge", {
  enumerable: true,
  get: function () {
    return _Badge2.default;
  }
});
Object.defineProperty(exports, "Breadcrumb", {
  enumerable: true,
  get: function () {
    return _Breadcrumb2.default;
  }
});
Object.defineProperty(exports, "BreadcrumbItem", {
  enumerable: true,
  get: function () {
    return _BreadcrumbItem2.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _Button2.default;
  }
});
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: function () {
    return _ButtonGroup2.default;
  }
});
Object.defineProperty(exports, "ButtonToolbar", {
  enumerable: true,
  get: function () {
    return _ButtonToolbar2.default;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function () {
    return _Card2.default;
  }
});
Object.defineProperty(exports, "CardColumns", {
  enumerable: true,
  get: function () {
    return _CardColumns2.default;
  }
});
Object.defineProperty(exports, "CardDeck", {
  enumerable: true,
  get: function () {
    return _CardDeck2.default;
  }
});
Object.defineProperty(exports, "CardImg", {
  enumerable: true,
  get: function () {
    return _CardImg2.default;
  }
});
Object.defineProperty(exports, "CardGroup", {
  enumerable: true,
  get: function () {
    return _CardGroup2.default;
  }
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function () {
    return _Carousel2.default;
  }
});
Object.defineProperty(exports, "CarouselItem", {
  enumerable: true,
  get: function () {
    return _CarouselItem2.default;
  }
});
Object.defineProperty(exports, "CloseButton", {
  enumerable: true,
  get: function () {
    return _CloseButton2.default;
  }
});
Object.defineProperty(exports, "Col", {
  enumerable: true,
  get: function () {
    return _Col2.default;
  }
});
Object.defineProperty(exports, "Collapse", {
  enumerable: true,
  get: function () {
    return _Collapse2.default;
  }
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function () {
    return _Dropdown2.default;
  }
});
Object.defineProperty(exports, "DropdownButton", {
  enumerable: true,
  get: function () {
    return _DropdownButton2.default;
  }
});
Object.defineProperty(exports, "DropdownItem", {
  enumerable: true,
  get: function () {
    return _DropdownItem2.default;
  }
});
Object.defineProperty(exports, "Fade", {
  enumerable: true,
  get: function () {
    return _Fade2.default;
  }
});
Object.defineProperty(exports, "Form", {
  enumerable: true,
  get: function () {
    return _Form2.default;
  }
});
Object.defineProperty(exports, "FormControl", {
  enumerable: true,
  get: function () {
    return _FormControl2.default;
  }
});
Object.defineProperty(exports, "FormCheck", {
  enumerable: true,
  get: function () {
    return _FormCheck2.default;
  }
});
Object.defineProperty(exports, "FormGroup", {
  enumerable: true,
  get: function () {
    return _FormGroup2.default;
  }
});
Object.defineProperty(exports, "FormLabel", {
  enumerable: true,
  get: function () {
    return _FormLabel2.default;
  }
});
Object.defineProperty(exports, "FormText", {
  enumerable: true,
  get: function () {
    return _FormText2.default;
  }
});
Object.defineProperty(exports, "Container", {
  enumerable: true,
  get: function () {
    return _Container2.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function () {
    return _Image2.default;
  }
});
Object.defineProperty(exports, "Figure", {
  enumerable: true,
  get: function () {
    return _Figure2.default;
  }
});
Object.defineProperty(exports, "InputGroup", {
  enumerable: true,
  get: function () {
    return _InputGroup2.default;
  }
});
Object.defineProperty(exports, "Jumbotron", {
  enumerable: true,
  get: function () {
    return _Jumbotron2.default;
  }
});
Object.defineProperty(exports, "ListGroup", {
  enumerable: true,
  get: function () {
    return _ListGroup2.default;
  }
});
Object.defineProperty(exports, "ListGroupItem", {
  enumerable: true,
  get: function () {
    return _ListGroupItem2.default;
  }
});
Object.defineProperty(exports, "Media", {
  enumerable: true,
  get: function () {
    return _Media2.default;
  }
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function () {
    return _Modal2.default;
  }
});
Object.defineProperty(exports, "ModalBody", {
  enumerable: true,
  get: function () {
    return _ModalBody2.default;
  }
});
Object.defineProperty(exports, "ModalDialog", {
  enumerable: true,
  get: function () {
    return _ModalDialog2.default;
  }
});
Object.defineProperty(exports, "ModalFooter", {
  enumerable: true,
  get: function () {
    return _ModalFooter2.default;
  }
});
Object.defineProperty(exports, "ModalTitle", {
  enumerable: true,
  get: function () {
    return _ModalTitle2.default;
  }
});
Object.defineProperty(exports, "Nav", {
  enumerable: true,
  get: function () {
    return _Nav2.default;
  }
});
Object.defineProperty(exports, "Navbar", {
  enumerable: true,
  get: function () {
    return _Navbar2.default;
  }
});
Object.defineProperty(exports, "NavbarBrand", {
  enumerable: true,
  get: function () {
    return _NavbarBrand2.default;
  }
});
Object.defineProperty(exports, "NavDropdown", {
  enumerable: true,
  get: function () {
    return _NavDropdown2.default;
  }
});
Object.defineProperty(exports, "NavItem", {
  enumerable: true,
  get: function () {
    return _NavItem2.default;
  }
});
Object.defineProperty(exports, "Overlay", {
  enumerable: true,
  get: function () {
    return _Overlay2.default;
  }
});
Object.defineProperty(exports, "OverlayTrigger", {
  enumerable: true,
  get: function () {
    return _OverlayTrigger2.default;
  }
});
Object.defineProperty(exports, "PageItem", {
  enumerable: true,
  get: function () {
    return _PageItem2.default;
  }
});
Object.defineProperty(exports, "Pagination", {
  enumerable: true,
  get: function () {
    return _Pagination2.default;
  }
});
Object.defineProperty(exports, "Popover", {
  enumerable: true,
  get: function () {
    return _Popover2.default;
  }
});
Object.defineProperty(exports, "ProgressBar", {
  enumerable: true,
  get: function () {
    return _ProgressBar2.default;
  }
});
Object.defineProperty(exports, "ResponsiveEmbed", {
  enumerable: true,
  get: function () {
    return _ResponsiveEmbed2.default;
  }
});
Object.defineProperty(exports, "Row", {
  enumerable: true,
  get: function () {
    return _Row2.default;
  }
});
Object.defineProperty(exports, "SafeAnchor", {
  enumerable: true,
  get: function () {
    return _SafeAnchor2.default;
  }
});
Object.defineProperty(exports, "Spinner", {
  enumerable: true,
  get: function () {
    return _Spinner2.default;
  }
});
Object.defineProperty(exports, "SplitButton", {
  enumerable: true,
  get: function () {
    return _SplitButton2.default;
  }
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function () {
    return _Tab2.default;
  }
});
Object.defineProperty(exports, "TabContainer", {
  enumerable: true,
  get: function () {
    return _TabContainer2.default;
  }
});
Object.defineProperty(exports, "TabContent", {
  enumerable: true,
  get: function () {
    return _TabContent2.default;
  }
});
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function () {
    return _Table2.default;
  }
});
Object.defineProperty(exports, "TabPane", {
  enumerable: true,
  get: function () {
    return _TabPane2.default;
  }
});
Object.defineProperty(exports, "Tabs", {
  enumerable: true,
  get: function () {
    return _Tabs2.default;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function () {
    return _ThemeProvider2.default;
  }
});
Object.defineProperty(exports, "ToggleButton", {
  enumerable: true,
  get: function () {
    return _ToggleButton2.default;
  }
});
Object.defineProperty(exports, "ToggleButtonGroup", {
  enumerable: true,
  get: function () {
    return _ToggleButtonGroup2.default;
  }
});
Object.defineProperty(exports, "Tooltip", {
  enumerable: true,
  get: function () {
    return _Tooltip2.default;
  }
});

var _Accordion2 = _interopRequireDefault(require("./Accordion"));

var _Alert2 = _interopRequireDefault(require("./Alert"));

var _Badge2 = _interopRequireDefault(require("./Badge"));

var _Breadcrumb2 = _interopRequireDefault(require("./Breadcrumb"));

var _BreadcrumbItem2 = _interopRequireDefault(require("./BreadcrumbItem"));

var _Button2 = _interopRequireDefault(require("./Button"));

var _ButtonGroup2 = _interopRequireDefault(require("./ButtonGroup"));

var _ButtonToolbar2 = _interopRequireDefault(require("./ButtonToolbar"));

var _Card2 = _interopRequireDefault(require("./Card"));

var _CardColumns2 = _interopRequireDefault(require("./CardColumns"));

var _CardDeck2 = _interopRequireDefault(require("./CardDeck"));

var _CardImg2 = _interopRequireDefault(require("./CardImg"));

var _CardGroup2 = _interopRequireDefault(require("./CardGroup"));

var _Carousel2 = _interopRequireDefault(require("./Carousel"));

var _CarouselItem2 = _interopRequireDefault(require("./CarouselItem"));

var _CloseButton2 = _interopRequireDefault(require("./CloseButton"));

var _Col2 = _interopRequireDefault(require("./Col"));

var _Collapse2 = _interopRequireDefault(require("./Collapse"));

var _Dropdown2 = _interopRequireDefault(require("./Dropdown"));

var _DropdownButton2 = _interopRequireDefault(require("./DropdownButton"));

var _DropdownItem2 = _interopRequireDefault(require("./DropdownItem"));

var _Fade2 = _interopRequireDefault(require("./Fade"));

var _Form2 = _interopRequireDefault(require("./Form"));

var _FormControl2 = _interopRequireDefault(require("./FormControl"));

var _FormCheck2 = _interopRequireDefault(require("./FormCheck"));

var _FormGroup2 = _interopRequireDefault(require("./FormGroup"));

var _FormLabel2 = _interopRequireDefault(require("./FormLabel"));

var _FormText2 = _interopRequireDefault(require("./FormText"));

var _Container2 = _interopRequireDefault(require("./Container"));

var _Image2 = _interopRequireDefault(require("./Image"));

var _Figure2 = _interopRequireDefault(require("./Figure"));

var _InputGroup2 = _interopRequireDefault(require("./InputGroup"));

var _Jumbotron2 = _interopRequireDefault(require("./Jumbotron"));

var _ListGroup2 = _interopRequireDefault(require("./ListGroup"));

var _ListGroupItem2 = _interopRequireDefault(require("./ListGroupItem"));

var _Media2 = _interopRequireDefault(require("./Media"));

var _Modal2 = _interopRequireDefault(require("./Modal"));

var _ModalBody2 = _interopRequireDefault(require("./ModalBody"));

var _ModalDialog2 = _interopRequireDefault(require("./ModalDialog"));

var _ModalFooter2 = _interopRequireDefault(require("./ModalFooter"));

var _ModalTitle2 = _interopRequireDefault(require("./ModalTitle"));

var _Nav2 = _interopRequireDefault(require("./Nav"));

var _Navbar2 = _interopRequireDefault(require("./Navbar"));

var _NavbarBrand2 = _interopRequireDefault(require("./NavbarBrand"));

var _NavDropdown2 = _interopRequireDefault(require("./NavDropdown"));

var _NavItem2 = _interopRequireDefault(require("./NavItem"));

var _Overlay2 = _interopRequireDefault(require("./Overlay"));

var _OverlayTrigger2 = _interopRequireDefault(require("./OverlayTrigger"));

var _PageItem2 = _interopRequireDefault(require("./PageItem"));

var _Pagination2 = _interopRequireDefault(require("./Pagination"));

var _Popover2 = _interopRequireDefault(require("./Popover"));

var _ProgressBar2 = _interopRequireDefault(require("./ProgressBar"));

var _ResponsiveEmbed2 = _interopRequireDefault(require("./ResponsiveEmbed"));

var _Row2 = _interopRequireDefault(require("./Row"));

var _SafeAnchor2 = _interopRequireDefault(require("./SafeAnchor"));

var _Spinner2 = _interopRequireDefault(require("./Spinner"));

var _SplitButton2 = _interopRequireDefault(require("./SplitButton"));

var _Tab2 = _interopRequireDefault(require("./Tab"));

var _TabContainer2 = _interopRequireDefault(require("./TabContainer"));

var _TabContent2 = _interopRequireDefault(require("./TabContent"));

var _Table2 = _interopRequireDefault(require("./Table"));

var _TabPane2 = _interopRequireDefault(require("./TabPane"));

var _Tabs2 = _interopRequireDefault(require("./Tabs"));

var _ThemeProvider2 = _interopRequireDefault(require("./ThemeProvider"));

var _ToggleButton2 = _interopRequireDefault(require("./ToggleButton"));

var _ToggleButtonGroup2 = _interopRequireDefault(require("./ToggleButtonGroup"));

var _Tooltip2 = _interopRequireDefault(require("./Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Accordion":"IR7X","./Alert":"2x2v","./Badge":"sdL4","./Breadcrumb":"FYi9","./BreadcrumbItem":"79vz","./Button":"Ulc8","./ButtonGroup":"q8PY","./ButtonToolbar":"4vae","./Card":"01L0","./CardColumns":"lRJT","./CardDeck":"PWxY","./CardImg":"JUoT","./CardGroup":"EjH0","./Carousel":"Ee1q","./CarouselItem":"lSRV","./CloseButton":"Yv92","./Col":"0aYE","./Collapse":"4hAU","./Dropdown":"47Qq","./DropdownButton":"Vijh","./DropdownItem":"smpl","./Fade":"dhH0","./Form":"Bh7W","./FormControl":"YLA5","./FormCheck":"jwKS","./FormGroup":"t11O","./FormLabel":"ql17","./FormText":"lADZ","./Container":"148u","./Image":"J/8J","./Figure":"Hm5s","./InputGroup":"lz2A","./Jumbotron":"Cu65","./ListGroup":"v0jb","./ListGroupItem":"lkuV","./Media":"MUPb","./Modal":"5aCv","./ModalBody":"Kcb4","./ModalDialog":"Txi+","./ModalFooter":"Wela","./ModalTitle":"QNzf","./Nav":"hKDS","./Navbar":"/qrV","./NavbarBrand":"5waf","./NavDropdown":"QNBg","./NavItem":"Osrr","./Overlay":"LPDZ","./OverlayTrigger":"mLD/","./PageItem":"/Wrl","./Pagination":"9wqt","./Popover":"rTP4","./ProgressBar":"G+nn","./ResponsiveEmbed":"Gun5","./Row":"l6yG","./SafeAnchor":"U3GN","./Spinner":"7pFS","./SplitButton":"jMAQ","./Tab":"A/bh","./TabContainer":"Z7qp","./TabContent":"KMOT","./Table":"TVao","./TabPane":"zl3F","./Tabs":"/waQ","./ThemeProvider":"BAZo","./ToggleButton":"WGJF","./ToggleButtonGroup":"NR7/","./Tooltip":"EpPN"}],"SiyV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("../config"));

var _request = _interopRequireDefault(require("../services/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var albumResource = {
  getAlbum: function getAlbum(albumId) {
    return (0, _request.default)("".concat(_config.default.BASE_ENDPOINT, "/album.get?album_id=").concat(albumId)).then(function (response) {
      return response.album;
    });
  }
};
var _default = albumResource;
exports.default = _default;
},{"../config":"4itQ","../services/request":"VShR"}],"71ia":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _track = _interopRequireDefault(require("../../api/track"));

require("./add-track-overlay.less");

var _reactBootstrap = require("react-bootstrap");

var _album = _interopRequireDefault(require("../../api/album"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AddTrackOverlay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddTrackOverlay, _React$Component);

  function AddTrackOverlay(props) {
    var _this;

    _classCallCheck(this, AddTrackOverlay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddTrackOverlay).call(this, props));
    _this.state = {
      artistName: '',
      trackName: '',
      tracks: [],
      isNoTracksFound: false
    };
    _this.findTracks = _this.findTracks.bind(_assertThisInitialized(_this));
    _this.updateInput = _this.updateInput.bind(_assertThisInitialized(_this));
    _this.chooseTrack = _this.chooseTrack.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddTrackOverlay, [{
    key: "updateInput",
    value: function updateInput(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;
      this.setState(function () {
        return _defineProperty({}, name, value);
      });
    }
  }, {
    key: "findTracks",
    value: function findTracks(event) {
      var _this2 = this;

      event.preventDefault();

      _track.default.findTrack({
        q_track: this.state.trackName,
        q_artist: this.state.artistName
      }).then(function (tracks) {
        _this2.setState(function () {
          var foundTracks = tracks.map(function (track) {
            return track.track;
          });
          return {
            tracks: foundTracks,
            isNoTracksFound: foundTracks.length === 0
          };
        });
      }).catch(console.error);
    }
  }, {
    key: "chooseTrack",
    value: function chooseTrack(selectedTrack) {
      var _this3 = this;

      Promise.all([_track.default.getTrack(selectedTrack.track_id), _album.default.getAlbum(selectedTrack.album_id)]).then(function (response) {
        var _response = _slicedToArray(response, 2),
            track = _response[0].track,
            album = _response[1];

        track.album = album;

        _this3.props.onAddTrack(track);

        _this3.props.onClose();
      }).catch(console.error);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return _react.default.createElement(_reactBootstrap.Modal, {
        show: this.props.isShown,
        onHide: this.props.onClose,
        className: "add-track-overlay"
      }, _react.default.createElement(_reactBootstrap.Modal.Header, {
        closeButton: true
      }, _react.default.createElement(_reactBootstrap.Modal.Title, null, "Add Track")), _react.default.createElement(_reactBootstrap.Modal.Body, {
        className: "add-track-overlay"
      }, _react.default.createElement(_reactBootstrap.Form, null, _react.default.createElement(_reactBootstrap.Form.Group, {
        controlId: "artistName"
      }, _react.default.createElement(_reactBootstrap.Form.Label, null, "Artist name"), _react.default.createElement(_reactBootstrap.Form.Control, {
        name: "artistName",
        placeholder: "Artist name",
        onChange: this.updateInput
      })), _react.default.createElement(_reactBootstrap.Form.Group, {
        controlId: "trackName"
      }, _react.default.createElement(_reactBootstrap.Form.Label, null, "Track name"), _react.default.createElement(_reactBootstrap.Form.Control, {
        name: "trackName",
        placeholder: "Track name",
        onChange: this.updateInput
      })), _react.default.createElement(_reactBootstrap.Button, {
        type: "submit",
        variant: "primary",
        onClick: this.findTracks,
        block: true
      }, "Find")), _react.default.createElement("hr", null), _react.default.createElement("div", {
        className: "add-track-overlay__list-container"
      }, _react.default.createElement(_reactBootstrap.ListGroup, null, this.state.tracks.map(function (track) {
        return _react.default.createElement(_reactBootstrap.ListGroup.Item, {
          action: true,
          key: track.track_id,
          onClick: function onClick() {
            _this4.chooseTrack(track);
          }
        }, track.artist_name, " - ", track.track_name);
      }))), this.state.isNoTracksFound && _react.default.createElement("div", {
        className: "text-center"
      }, "No tracks found")));
    }
  }]);

  return AddTrackOverlay;
}(_react.default.Component);

exports.default = AddTrackOverlay;
},{"react":"1n8/","../../api/track":"EuDf","./add-track-overlay.less":"7y3A","react-bootstrap":"fSld","../../api/album":"SiyV"}],"b8Y8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = storageFactory;

function storageFactory(defaultValue) {
  return {
    load: function load() {
      try {
        return JSON.parse(localStorage.getItem(this.key)) || defaultValue;
      } catch (error) {
        return defaultValue;
      }
    },
    save: function save(item) {
      localStorage.setItem(this.key, JSON.stringify(item));
    }
  };
}
},{}],"Kps0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _storageFactory = _interopRequireDefault(require("./storageFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var playlistService = _objectSpread({
  key: 'playlist'
}, (0, _storageFactory.default)([]), {
  findTrack: function findTrack(trackId) {
    var tracks = this.load();
    return tracks.find(function (track) {
      return track.track_id === trackId;
    });
  },
  numericalSort: function numericalSort(field) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ascending';
    return function (trackA, trackB) {
      return order === 'ascending' ? trackA[field] - trackB[field] : trackB[field] - trackA[field];
    };
  },
  alphabeticalSort: function alphabeticalSort(field) {
    return function (trackA, trackB) {
      var _ref = [trackA[field].toLowerCase(), trackB[field].toLowerCase()],
          lowerCaseFieldA = _ref[0],
          lowerCaseFieldB = _ref[1];

      if (lowerCaseFieldA < lowerCaseFieldB) {
        return -1;
      } else if (lowerCaseFieldA > lowerCaseFieldB) {
        return 1;
      } else {
        return 0;
      }
    };
  },
  sortBy: function sortBy(playlist, field) {
    var sortFn;

    if (field === 'added_at') {
      sortFn = this.numericalSort(field, 'desc');
    } else {
      sortFn = this.alphabeticalSort(field);
    }

    return playlist.sort(sortFn);
  }
});

var _default = playlistService;
exports.default = _default;
},{"./storageFactory":"b8Y8"}],"fsnm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Track;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

require("./track.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Track(props) {
  function handleDelete(event) {
    event.stopPropagation();
    props.onDelete(props.track);
  }

  return _react.default.createElement(_reactBootstrap.Card, {
    className: "track",
    onClick: props.onClick
  }, _react.default.createElement(_reactBootstrap.Card.Img, {
    variant: "top",
    src: "https://via.placeholder.com/150"
  }), _react.default.createElement(_reactBootstrap.Card.Body, null, _react.default.createElement(_reactBootstrap.Card.Title, {
    className: "text-truncate"
  }, props.track.track_name), _react.default.createElement(_reactBootstrap.Card.Text, {
    className: "text-truncate"
  }, props.track.artist_name, _react.default.createElement("br", null), props.track.album_name), _react.default.createElement(_reactBootstrap.Button, {
    variant: "danger",
    onClick: handleDelete
  }, "Delete")));
}
},{"react":"1n8/","react-bootstrap":"fSld","./track.less":"7y3A"}],"EFM4":[function(require,module,exports) {
'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _implementation = require('./implementation');

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
},{"react":"1n8/","./implementation":"hAlc"}],"sIbj":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var isProduction = "production" === 'production';

function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

var _default = warning;
exports.default = _default;
},{}],"7YO4":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash = void 0;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

var _default = resolvePathname;
exports.default = _default;
},{}],"t+Vk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function valueEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();
    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

var _default = valueEqual;
exports.default = _default;
},{}],"1bfQ":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

var _default = invariant;
exports.default = _default;
},{}],"/Wop":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBrowserHistory = createBrowserHistory;
exports.createHashHistory = createHashHistory;
exports.createMemoryHistory = createMemoryHistory;
exports.createLocation = createLocation;
exports.locationsAreEqual = locationsAreEqual;
exports.parsePath = parsePath;
exports.createPath = createPath;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _resolvePathname = _interopRequireDefault(require("resolve-pathname"));

var _valueEqual = _interopRequireDefault(require("value-equal"));

var _tinyWarning = _interopRequireDefault(require("tiny-warning"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}

function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}

function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
}

function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}

function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}

function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}

function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0, _extends2.default)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual.default)(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    "production" !== "production" ? (0, _tinyWarning.default)(prompt == null, 'A history supports only one prompt at a time') : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          "production" !== "production" ? (0, _tinyWarning.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */


function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */


function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */


function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */


function isExtraneousPopstateEvent(event) {
  event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? "production" !== "production" ? (0, _tinyInvariant.default)(false, 'Browser history needs a DOM') : (0, _tinyInvariant.default)(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    "production" !== "production" ? (0, _tinyWarning.default)(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0, _extends2.default)(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    "production" !== "production" ? (0, _tinyWarning.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        "production" !== "production" ? (0, _tinyWarning.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    "production" !== "production" ? (0, _tinyWarning.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        "production" !== "production" ? (0, _tinyWarning.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ? "production" !== "production" ? (0, _tinyInvariant.default)(false, 'Hash history needs a DOM') : (0, _tinyInvariant.default)(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
    "production" !== "production" ? (0, _tinyWarning.default)(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".') : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0, _extends2.default)(history, nextState);
    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
    "production" !== "production" ? (0, _tinyWarning.default)(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        "production" !== "production" ? (0, _tinyWarning.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
    "production" !== "production" ? (0, _tinyWarning.default)(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    "production" !== "production" ? (0, _tinyWarning.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0, _extends2.default)(history, nextState);
    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
    "production" !== "production" ? (0, _tinyWarning.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
    "production" !== "production" ? (0, _tinyWarning.default)(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}
},{"@babel/runtime/helpers/esm/extends":"SpjQ","resolve-pathname":"7YO4","value-equal":"t+Vk","tiny-warning":"sIbj","tiny-invariant":"1bfQ"}],"WQ3f":[function(require,module,exports) {
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

},{}],"Tvs4":[function(require,module,exports) {
var isarray = require('isarray')

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

},{"isarray":"WQ3f"}],"89El":[function(require,module,exports) {
'use strict';

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = require('react-is');
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (ReactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;

},{"react-is":"H1RQ"}],"LI7H":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prompt = Prompt;
exports.Redirect = Redirect;
exports.generatePath = generatePath;
exports.matchPath = matchPath;
exports.withRouter = withRouter;
exports.__RouterContext = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.MemoryRouter = void 0;

var _createReactContext = _interopRequireDefault(require("create-react-context"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tinyWarning = _interopRequireDefault(require("tiny-warning"));

var _history = require("history");

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

var _pathToRegexp = _interopRequireDefault(require("path-to-regexp"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _reactIs = require("react-is");

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Replace with React.createContext once we can assume React 16+
var createNamedContext = function createNamedContext(name) {
  var context = (0, _createReactContext.default)();
  context.Provider.displayName = name + ".Provider";
  context.Consumer.displayName = name + ".Consumer";
  return context;
};

var context =
/*#__PURE__*/
createNamedContext('Router');
/**
 * The public API for putting history on context.
 */

exports.__RouterContext = context;

var Router =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return _react.default.createElement(context.Provider, {
      children: this.props.children || null,
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    });
  };

  return Router;
}(_react.default.Component);

exports.Router = Router;

if ("production" !== "production") {
  Router.propTypes = {
    children: _propTypes.default.node,
    history: _propTypes.default.object.isRequired,
    staticContext: _propTypes.default.object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
    "production" !== "production" ? (0, _tinyWarning.default)(prevProps.history === this.props.history, "You cannot change <Router history>") : void 0;
  };
}
/**
 * The public API for a <Router> that stores location in memory.
 */


var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0, _history.createMemoryHistory)(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(_react.default.Component);

exports.MemoryRouter = MemoryRouter;

if ("production" !== "production") {
  MemoryRouter.propTypes = {
    initialEntries: _propTypes.default.array,
    initialIndex: _propTypes.default.number,
    getUserConfirmation: _propTypes.default.func,
    keyLength: _propTypes.default.number,
    children: _propTypes.default.node
  };

  MemoryRouter.prototype.componentDidMount = function () {
    "production" !== "production" ? (0, _tinyWarning.default)(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : void 0;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(_react.default.Component);
/**
 * The public API for prompting the user before navigating away from a screen.
 */


function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return _react.default.createElement(context.Consumer, null, function (context$$1) {
    !context$$1 ? "production" !== "production" ? (0, _tinyInvariant.default)(false, "You should not use <Prompt> outside a <Router>") : (0, _tinyInvariant.default)(false) : void 0;
    if (!when || context$$1.staticContext) return null;
    var method = context$$1.history.block;
    return _react.default.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if ("production" !== "production") {
  var messageType = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]);

  Prompt.propTypes = {
    when: _propTypes.default.bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];

  var generator = _pathToRegexp.default.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}
/**
 * The public API for navigating programmatically with a component.
 */


function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return _react.default.createElement(context.Consumer, null, function (context$$1) {
    !context$$1 ? "production" !== "production" ? (0, _tinyInvariant.default)(false, "You should not use <Redirect> outside a <Router>") : (0, _tinyInvariant.default)(false) : void 0;
    var history = context$$1.history,
        staticContext = context$$1.staticContext;
    var method = push ? history.push : history.replace;
    var location = (0, _history.createLocation)(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0, _extends2.default)({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return _react.default.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (!(0, _history.locationsAreEqual)(prevProps.to, location)) {
          method(location);
        }
      },
      to: to
    });
  });
}

if ("production" !== "production") {
  Redirect.propTypes = {
    push: _propTypes.default.bool,
    from: _propTypes.default.string,
    to: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = (0, _pathToRegexp.default)(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string") options = {
    path: options
  };
  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return _react.default.Children.count(children) === 0;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return _react.default.createElement(context.Consumer, null, function (context$$1) {
      !context$$1 ? "production" !== "production" ? (0, _tinyInvariant.default)(false, "You should not use <Route> outside a <Router>") : (0, _tinyInvariant.default)(false) : void 0;
      var location = _this.props.location || context$$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$$1.match;
      var props = (0, _extends2.default)({}, context$$1, {
        location: location,
        match: match
      });
      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      if (typeof children === "function") {
        children = children(props);

        if (children === undefined) {
          if ("production" !== "production") {
            var path = _this.props.path;
            "production" !== "production" ? (0, _tinyWarning.default)(false, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : void 0;
          }

          children = null;
        }
      }

      return _react.default.createElement(context.Provider, {
        value: props
      }, children && !isEmptyChildren(children) ? children : props.match ? component ? _react.default.createElement(component, props) : render ? render(props) : null : null);
    });
  };

  return Route;
}(_react.default.Component);

exports.Route = Route;

if ("production" !== "production") {
  Route.propTypes = {
    children: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
    component: function component(props, propName) {
      if (props[propName] && !(0, _reactIs.isValidElementType)(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: _propTypes.default.bool,
    location: _propTypes.default.object,
    path: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
    render: _propTypes.default.func,
    sensitive: _propTypes.default.bool,
    strict: _propTypes.default.bool
  };

  Route.prototype.componentDidMount = function () {
    "production" !== "production" ? (0, _tinyWarning.default)(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : void 0;
    "production" !== "production" ? (0, _tinyWarning.default)(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : void 0;
    "production" !== "production" ? (0, _tinyWarning.default)(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : void 0;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
    "production" !== "production" ? (0, _tinyWarning.default)(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
    "production" !== "production" ? (0, _tinyWarning.default)(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0, _extends2.default)({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0, _extends2.default)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : (0, _history.createPath)(location);
}

function staticHandler(methodName) {
  return function () {
    "production" !== "production" ? (0, _tinyInvariant.default)(false, "You cannot %s with <StaticRouter>", methodName) : (0, _tinyInvariant.default)(false);
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        context = _this$props.context;
    context.action = action;
    context.location = addBasename(basename, (0, _history.createLocation)(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["basename", "context", "location"]);
    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, (0, _history.createLocation)(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return _react.default.createElement(Router, (0, _extends2.default)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(_react.default.Component);

exports.StaticRouter = StaticRouter;

if ("production" !== "production") {
  StaticRouter.propTypes = {
    basename: _propTypes.default.string,
    context: _propTypes.default.object,
    location: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object])
  };

  StaticRouter.prototype.componentDidMount = function () {
    "production" !== "production" ? (0, _tinyWarning.default)(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : void 0;
  };
}
/**
 * The public API for rendering the first <Route> that matches.
 */


var Switch =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return _react.default.createElement(context.Consumer, null, function (context$$1) {
      !context$$1 ? "production" !== "production" ? (0, _tinyInvariant.default)(false, "You should not use <Switch> outside a <Router>") : (0, _tinyInvariant.default)(false) : void 0;
      var location = _this.props.location || context$$1.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      _react.default.Children.forEach(_this.props.children, function (child) {
        if (match == null && _react.default.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0, _extends2.default)({}, child.props, {
            path: path
          })) : context$$1.match;
        }
      });

      return match ? _react.default.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(_react.default.Component);

exports.Switch = Switch;

if ("production" !== "production") {
  Switch.propTypes = {
    children: _propTypes.default.node,
    location: _propTypes.default.object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
    "production" !== "production" ? (0, _tinyWarning.default)(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : void 0;
    "production" !== "production" ? (0, _tinyWarning.default)(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : void 0;
  };
}
/**
 * A public higher-order component to access the imperative API
 */


function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["wrappedComponentRef"]);
    return _react.default.createElement(Route, {
      children: function children(routeComponentProps) {
        return _react.default.createElement(Component, (0, _extends2.default)({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;

  if ("production" !== "production") {
    C.propTypes = {
      wrappedComponentRef: _propTypes.default.func
    };
  }

  return (0, _hoistNonReactStatics.default)(C, Component);
}

if ("production" !== "production") {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}
},{"create-react-context":"EFM4","@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","prop-types":"5D9O","tiny-warning":"sIbj","history":"/Wop","tiny-invariant":"1bfQ","path-to-regexp":"Tvs4","@babel/runtime/helpers/esm/extends":"SpjQ","react-is":"H1RQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","hoist-non-react-statics":"89El"}],"/uc1":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  BrowserRouter: true,
  HashRouter: true,
  Link: true,
  NavLink: true
};
exports.NavLink = NavLink;
exports.Link = exports.HashRouter = exports.BrowserRouter = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

Object.keys(_reactRouter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _reactRouter[key];
    }
  });
});

var _history = require("history");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tinyWarning = _interopRequireDefault(require("tiny-warning"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutPropertiesLoose"));

var _tinyInvariant = _interopRequireDefault(require("tiny-invariant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The public API for a <Router> that uses HTML5 history.
 */
var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0, _history.createBrowserHistory)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return _react.default.createElement(_reactRouter.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(_react.default.Component);

exports.BrowserRouter = BrowserRouter;

if ("production" !== "production") {
  BrowserRouter.propTypes = {
    basename: _propTypes.default.string,
    children: _propTypes.default.node,
    forceRefresh: _propTypes.default.bool,
    getUserConfirmation: _propTypes.default.func,
    keyLength: _propTypes.default.number
  };

  BrowserRouter.prototype.componentDidMount = function () {
    "production" !== "production" ? (0, _tinyWarning.default)(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.") : void 0;
  };
}
/**
 * The public API for a <Router> that uses window.location.hash.
 */


var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0, _history.createHashHistory)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return _react.default.createElement(_reactRouter.Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(_react.default.Component);

exports.HashRouter = HashRouter;

if ("production" !== "production") {
  HashRouter.propTypes = {
    basename: _propTypes.default.string,
    children: _propTypes.default.node,
    getUserConfirmation: _propTypes.default.func,
    hashType: _propTypes.default.oneOf(["hashbang", "noslash", "slash"])
  };

  HashRouter.prototype.componentDidMount = function () {
    "production" !== "production" ? (0, _tinyWarning.default)(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.") : void 0;
  };
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Link, _React$Component);

  function Link() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Link.prototype;

  _proto.handleClick = function handleClick(event, history) {
    if (this.props.onClick) this.props.onClick(event);

    if (!event.defaultPrevented && // onClick prevented default
    event.button === 0 && ( // ignore everything but left clicks
    !this.props.target || this.props.target === "_self") && // let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
        event.preventDefault();
        var method = this.props.replace ? history.replace : history.push;
        method(this.props.to);
      }
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        innerRef = _this$props.innerRef,
        replace = _this$props.replace,
        to = _this$props.to,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["innerRef", "replace", "to"]); // eslint-disable-line no-unused-vars

    return _react.default.createElement(_reactRouter.__RouterContext.Consumer, null, function (context) {
      !context ? "production" !== "production" ? (0, _tinyInvariant.default)(false, "You should not use <Link> outside a <Router>") : (0, _tinyInvariant.default)(false) : void 0;
      var location = typeof to === "string" ? (0, _history.createLocation)(to, null, null, context.location) : to;
      var href = location ? context.history.createHref(location) : "";
      return _react.default.createElement("a", (0, _extends2.default)({}, rest, {
        onClick: function onClick(event) {
          return _this.handleClick(event, context.history);
        },
        href: href,
        ref: innerRef
      }));
    });
  };

  return Link;
}(_react.default.Component);

exports.Link = Link;

if ("production" !== "production") {
  var toType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]);

  var innerRefType = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })]);

  Link.propTypes = {
    innerRef: innerRefType,
    onClick: _propTypes.default.func,
    replace: _propTypes.default.bool,
    target: _propTypes.default.string,
    to: toType.isRequired
  };
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


function NavLink(_ref) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      location = _ref.location,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "strict", "style", "to"]);
  var path = typeof to === "object" ? to.pathname : to; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  return _react.default.createElement(_reactRouter.Route, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;
      var isActive = !!(isActiveProp ? isActiveProp(match, location) : match);
      var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
      var style = isActive ? (0, _extends2.default)({}, styleProp, activeStyle) : styleProp;
      return _react.default.createElement(Link, (0, _extends2.default)({
        "aria-current": isActive && ariaCurrent || null,
        className: className,
        style: style,
        to: to
      }, rest));
    }
  });
}

if ("production" !== "production") {
  var ariaCurrentType = _propTypes.default.oneOf(["page", "step", "location", "date", "time", "true"]);

  NavLink.propTypes = (0, _extends2.default)({}, Link.propTypes, {
    "aria-current": ariaCurrentType,
    activeClassName: _propTypes.default.string,
    activeStyle: _propTypes.default.object,
    className: _propTypes.default.string,
    exact: _reactRouter.Route.propTypes.exact,
    isActive: _propTypes.default.func,
    location: _propTypes.default.object,
    strict: _reactRouter.Route.propTypes.strict,
    style: _propTypes.default.object
  });
}
},{"@babel/runtime/helpers/esm/inheritsLoose":"S11h","react":"1n8/","react-router":"LI7H","history":"/Wop","prop-types":"5D9O","tiny-warning":"sIbj","@babel/runtime/helpers/esm/extends":"SpjQ","@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":"3Vab","tiny-invariant":"1bfQ"}],"QI9N":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      choice: _this.props.initialChoice
    };
    _this.handleChoice = _this.handleChoice.bind(_assertThisInitialized(_this));
    _this.renderChoices = _this.renderChoices.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "handleChoice",
    value: function handleChoice(choice) {
      this.setState(function () {
        return {
          choice: choice
        };
      });
      this.props.onSelect(choice);
    }
  }, {
    key: "renderChoices",
    value: function renderChoices() {
      var _this2 = this;

      return Object.keys(this.props.choices).map(function (key) {
        var _this2$props$choices$ = _this2.props.choices[key],
            label = _this2$props$choices$.label,
            __ = _this2$props$choices$.__;
        return _react.default.createElement(_reactBootstrap.Dropdown.Item, {
          key: label,
          onClick: function onClick() {
            return _this2.handleChoice(_this2.props.choices[key]);
          }
        }, label);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$choice = this.state.choice,
          label = _this$state$choice.label,
          _ = _this$state$choice._;
      return _react.default.createElement(_reactBootstrap.Dropdown, {
        className: "d-inline-block"
      }, _react.default.createElement(_reactBootstrap.Dropdown.Toggle, {
        variant: "primary"
      }, label), _react.default.createElement(_reactBootstrap.Dropdown.Menu, null, this.renderChoices()));
    }
  }]);

  return Dropdown;
}(_react.default.Component);

exports.default = Dropdown;
},{"react":"1n8/","react-bootstrap":"fSld"}],"yBWb":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _storageFactory = _interopRequireDefault(require("./storageFactory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userPerferences = _objectSpread({
  key: 'favorite-playlist-preferences'
}, (0, _storageFactory.default)({}));

var _default = userPerferences;
exports.default = _default;
},{"./storageFactory":"b8Y8"}],"os6s":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlaylistIsFullModal;

var _react = _interopRequireDefault(require("react"));

var _reactBootstrap = require("react-bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PlaylistIsFullModal(props) {
  function handleTrackSelect(track) {
    props.onTrackSelect(track);
    props.onClose();
  }

  return _react.default.createElement(_reactBootstrap.Modal, {
    show: props.isShown,
    onHide: props.onClose
  }, _react.default.createElement(_reactBootstrap.Modal.Header, {
    closeButton: true
  }, _react.default.createElement(_reactBootstrap.Modal.Title, null, "Playlist is full")), _react.default.createElement(_reactBootstrap.Modal.Body, null, "Your playlist is full. You can select a track to be deleted to free space for your other track or you can choose to abort the operation.", props.tracks.map(function (track) {
    return _react.default.createElement(_reactBootstrap.ListGroup.Item, {
      action: true,
      key: track.track_id,
      onClick: function onClick() {
        return handleTrackSelect(track);
      }
    }, track.artist_name, " - ", track.track_name);
  })), _react.default.createElement(_reactBootstrap.Modal.Footer, null, _react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: props.onClose
  }, "Abort")));
}
},{"react":"1n8/","react-bootstrap":"fSld"}],"SGu3":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AddTrackOverlay = _interopRequireDefault(require("../../components/addTrackOverlay/AddTrackOverlay"));

var _playlistStorage = _interopRequireDefault(require("../../services/playlistStorage"));

var _Track = _interopRequireDefault(require("../../components/track/Track"));

var _reactBootstrap = require("react-bootstrap");

var _reactRouterDom = require("react-router-dom");

var _Dropdown = _interopRequireDefault(require("../../components/Dropdown"));

var _userPreferences = _interopRequireDefault(require("../../services/userPreferences"));

var _PlaylistIsFullModal = _interopRequireDefault(require("../../components/PlaylistIsFullModal"));

require("./playlist-page.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SORT_CHOICES = {
  ORIGINAL: {
    label: 'Default',
    value: 'added_at'
  },
  TRACK: {
    label: 'Track',
    value: 'track_name'
  },
  ALBUM: {
    label: 'Album',
    value: 'album_name'
  },
  ARTIST: {
    label: 'Artist',
    value: 'artist_name'
  }
};
var MAX_TRACKS = 19;

var PlaylistPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PlaylistPage, _React$Component);

  function PlaylistPage(props) {
    var _this;

    _classCallCheck(this, PlaylistPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlaylistPage).call(this, props));
    _this.state = {
      isAddTrackOverlayShown: false,
      tracks: _playlistStorage.default.load(),
      sortOrder: _userPreferences.default.load().sortOrder || SORT_CHOICES.ORIGINAL,
      isPlaylistFullModalShown: false
    };
    _this.showAddTrackOverlay = _this.showAddTrackOverlay.bind(_assertThisInitialized(_this));
    _this.hideAddTrackOverlay = _this.hideAddTrackOverlay.bind(_assertThisInitialized(_this));
    _this.addTrack = _this.addTrack.bind(_assertThisInitialized(_this));
    _this.renderTracks = _this.renderTracks.bind(_assertThisInitialized(_this));
    _this.deleteTrack = _this.deleteTrack.bind(_assertThisInitialized(_this));
    _this.handleSort = _this.handleSort.bind(_assertThisInitialized(_this));
    _this.deleteTrack = _this.deleteTrack.bind(_assertThisInitialized(_this));
    _this.showFullPlaylistModal = _this.showFullPlaylistModal.bind(_assertThisInitialized(_this));
    _this.hideFullPlaylistModal = _this.hideFullPlaylistModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PlaylistPage, [{
    key: "showAddTrackOverlay",
    value: function showAddTrackOverlay() {
      if (this.state.tracks.length >= MAX_TRACKS) {
        this.showFullPlaylistModal();
      } else {
        this.setState(function () {
          return {
            isAddTrackOverlayShown: true
          };
        });
      }
    }
  }, {
    key: "hideAddTrackOverlay",
    value: function hideAddTrackOverlay() {
      this.setState(function () {
        return {
          isAddTrackOverlayShown: false
        };
      });
    }
  }, {
    key: "addTrack",
    value: function addTrack(track) {
      this.setState(function (prevState) {
        track.added_at = Date.now();
        var tracks = [track].concat(_toConsumableArray(prevState.tracks));

        _playlistStorage.default.save(tracks);

        return {
          tracks: tracks
        };
      });
    }
  }, {
    key: "renderTracks",
    value: function renderTracks() {
      var _this2 = this;

      return _react.default.createElement(_reactBootstrap.Row, null, this.state.tracks.map(function (track) {
        return _react.default.createElement(_reactBootstrap.Col, {
          sm: 6,
          md: 3,
          key: track.track_id
        }, _react.default.createElement(_Track.default, {
          track: track,
          onDelete: _this2.deleteTrack,
          onClick: function onClick() {
            return _this2.props.history.push("/track/".concat(track.track_id));
          }
        }));
      }));
    }
  }, {
    key: "deleteTrack",
    value: function deleteTrack(trackToDelete) {
      this.setState(function (prevState) {
        var updatedTracks = prevState.tracks.filter(function (track) {
          return track.track_id !== trackToDelete.track_id;
        });

        _playlistStorage.default.save(updatedTracks);

        return {
          tracks: updatedTracks
        };
      });
    }
  }, {
    key: "handleSort",
    value: function handleSort(sortBy) {
      this.setState(function (prevState) {
        var sortedPlaylist = _playlistStorage.default.sortBy(prevState.tracks, sortBy.value);

        _playlistStorage.default.save(sortedPlaylist);

        _userPreferences.default.save({
          sortOrder: sortBy
        });

        return {
          tracks: sortedPlaylist,
          sortOrder: sortBy
        };
      });
    }
  }, {
    key: "showFullPlaylistModal",
    value: function showFullPlaylistModal() {
      this.setState(function () {
        return {
          isPlaylistFullModalShown: true
        };
      });
    }
  }, {
    key: "hideFullPlaylistModal",
    value: function hideFullPlaylistModal() {
      this.setState(function () {
        return {
          isPlaylistFullModalShown: false
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactBootstrap.Container, {
        className: "playlist-page"
      }, _react.default.createElement("div", {
        className: "playlist-page__top-bar"
      }, _react.default.createElement(_reactBootstrap.Button, {
        variant: "success",
        onClick: this.showAddTrackOverlay
      }, "Add Track"), _react.default.createElement("div", {
        className: "playlist-page__sort-by"
      }, _react.default.createElement("span", {
        className: "playlist-page__sort-by-label"
      }, "Sort by"), _react.default.createElement(_Dropdown.default, {
        choices: SORT_CHOICES,
        onSelect: this.handleSort,
        initialChoice: this.state.sortOrder
      }))), _react.default.createElement(_AddTrackOverlay.default, {
        onClose: this.hideAddTrackOverlay,
        onAddTrack: this.addTrack,
        isShown: this.state.isAddTrackOverlayShown,
        key: this.state.isAddTrackOverlayShown
      }), _react.default.createElement(_PlaylistIsFullModal.default, {
        tracks: this.state.tracks,
        onTrackSelect: this.deleteTrack,
        onClose: this.hideFullPlaylistModal,
        isShown: this.state.isPlaylistFullModalShown,
        key: "playlist-is-full-modal-".concat(this.state.isPlaylistFullModalShown)
      }), this.renderTracks(), this.state.tracks.length === 0 && _react.default.createElement("div", null, "Your playlist is empty"));
    }
  }]);

  return PlaylistPage;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(PlaylistPage);

exports.default = _default;
},{"react":"1n8/","../../components/addTrackOverlay/AddTrackOverlay":"71ia","../../services/playlistStorage":"Kps0","../../components/track/Track":"fsnm","react-bootstrap":"fSld","react-router-dom":"/uc1","../../components/Dropdown":"QI9N","../../services/userPreferences":"yBWb","../../components/PlaylistIsFullModal":"os6s","./playlist-page.less":"7y3A"}],"3t7p":[function(require,module,exports) {
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;
},{}],"0ajq":[function(require,module,exports) {
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _forwardRef = _interopRequireDefault(require("@restart/context/forwardRef"));

var _react = _interopRequireWildcard(require("react"));

var ThemeContext = _react.default.createContext(new Map());

var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;
exports.ThemeConsumer = Consumer;

var ThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ThemeProvider, _React$Component);

  function ThemeProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.prefixes = new Map();
    Object.keys(_this.props.prefixes).forEach(function (key) {
      _this.prefixes.set(key, _this.props.prefixes[key]);
    });
    return _this;
  }

  var _proto = ThemeProvider.prototype;

  _proto.render = function render() {
    return _react.default.createElement(Provider, {
      value: this.prefixes
    }, this.props.children);
  };

  return ThemeProvider;
}(_react.default.Component);

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0, _react.useContext)(ThemeContext);
  return prefix || prefixes.get(defaultPrefix) || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  return (0, _forwardRef.default)(function (_ref, ref) {
    var props = (0, _extends2.default)({}, _ref);
    props[forwardRefAs] = ref;
    var prefixes = (0, _react.useContext)(ThemeContext);
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      // eslint-disable-next-line react/prop-types
      bsPrefix: props.bsPrefix || prefixes.get(prefix) || prefix
    }));
  }, {
    displayName: "Bootstrap(" + (Component.displayName || Component.name) + ")"
  });
}

var _default = ThemeProvider;
exports.default = _default;
},{"@babel/runtime/helpers/interopRequireWildcard":"3t7p","@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/inheritsLoose":"HOM9","@restart/context/forwardRef":"Ii5r","react":"1n8/"}],"SdkO":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var defaultProps = {
  as: 'div',
  fluid: false
};

var Container = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      Component = _ref.as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "fluid", "as", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'container');
  return _react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, fluid ? prefix + "-fluid" : prefix)
  }));
});

Container.displayName = 'Container';
Container.defaultProps = defaultProps;
var _default = Container;
exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/objectWithoutPropertiesLoose":"t2zx","classnames":"9qb7","react":"1n8/","./ThemeProvider":"0ajq"}],"6rHF":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = createWithBsPrefix;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _camelize = _interopRequireDefault(require("dom-helpers/util/camelize"));

var _ThemeProvider = require("../ThemeProvider");

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);
};

function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? 'div' : _ref$Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = _react.default.forwardRef( // eslint-disable-next-line react/prop-types
  function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component : _ref2$as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["className", "bsPrefix", "as"]);
    var resolvedPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, prefix);
    return _react.default.createElement(Tag, (0, _extends2.default)({
      ref: ref,
      className: (0, _classnames.default)(className, resolvedPrefix)
    }, props));
  });

  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/objectWithoutPropertiesLoose":"t2zx","classnames":"9qb7","react":"1n8/","dom-helpers/util/camelize":"m/mp","../ThemeProvider":"0ajq"}],"wRgx":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _default = function _default(className) {
  return _react.default.forwardRef(function (p, ref) {
    return _react.default.createElement("div", (0, _extends2.default)({}, p, {
      ref: ref,
      className: (0, _classnames.default)(p.className, className)
    }));
  });
};

exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/extends":"3dLy","react":"1n8/","classnames":"9qb7"}],"RkRZ":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = triggerBrowserReflow;

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  node.offsetHeight; // eslint-disable-line no-unused-expressions
}

module.exports = exports["default"];
},{}],"Vk+O":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _Transition = _interopRequireWildcard(require("react-transition-group/Transition"));

var _end = _interopRequireDefault(require("dom-helpers/transition/end"));

var _triggerBrowserReflow = _interopRequireDefault(require("./utils/triggerBrowserReflow"));

var _fadeStyles;

var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[_Transition.ENTERING] = 'show', _fadeStyles[_Transition.ENTERED] = 'show', _fadeStyles);

var Fade =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Fade, _React$Component);

  function Fade() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handleEnter = function (node) {
      (0, _triggerBrowserReflow.default)(node);
      if (_this.props.onEnter) _this.props.onEnter(node);
    };

    return _this;
  }

  var _proto = Fade.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["className", "children"]);
    return _react.default.createElement(_Transition.default, (0, _extends2.default)({
      addEndListener: _end.default
    }, props, {
      onEnter: this.handleEnter
    }), function (status, innerProps) {
      return _react.default.cloneElement(children, (0, _extends2.default)({}, innerProps, {
        className: (0, _classnames.default)('fade', className, children.props.className, fadeStyles[status])
      }));
    });
  };

  return Fade;
}(_react.default.Component);

Fade.defaultProps = defaultProps;
var _default = Fade;
exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/interopRequireWildcard":"3t7p","@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/objectWithoutPropertiesLoose":"t2zx","@babel/runtime/helpers/inheritsLoose":"HOM9","classnames":"9qb7","react":"1n8/","react-transition-group/Transition":"4RiQ","dom-helpers/transition/end":"qh4L","./utils/triggerBrowserReflow":"RkRZ"}],"tUPr":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
var defaultProps = {
  label: 'Close'
};

var CloseButton = _react.default.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick;
  return _react.default.createElement("button", {
    ref: ref,
    type: "button",
    className: "close",
    onClick: onClick
  }, _react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), _react.default.createElement("span", {
    className: "sr-only"
  }, label));
});

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
var _default = CloseButton;
exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","prop-types":"5D9O","react":"1n8/"}],"0wlH":[function(require,module,exports) {
"use strict";

exports.__esModule = true;
exports.default = void 0;

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      f.apply(this, args);
    };
  }, null);
}

var _default = createChainedFunction;
exports.default = _default;
module.exports = exports["default"];
},{}],"q08u":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _createChainedFunction = _interopRequireDefault(require("./utils/createChainedFunction"));

var defaultProps = {
  as: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = SafeAnchor.prototype;

  _proto.handleClick = function handleClick(event) {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        href = _this$props.href,
        onClick = _this$props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  _proto.handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        Component = _this$props2.as,
        disabled = _this$props2.disabled,
        onKeyDown = _this$props2.onKeyDown,
        innerRef = _this$props2.innerRef,
        props = (0, _objectWithoutPropertiesLoose2.default)(_this$props2, ["as", "disabled", "onKeyDown", "innerRef"]);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')

      props.href = props.href || '#';
    }

    if (disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    if (innerRef) props.ref = innerRef;
    return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      onClick: this.handleClick,
      onKeyDown: (0, _createChainedFunction.default)(this.handleKeyDown, onKeyDown)
    }));
  };

  return SafeAnchor;
}(_react.default.Component);

SafeAnchor.defaultProps = defaultProps;
var _default = SafeAnchor;
exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/objectWithoutPropertiesLoose":"t2zx","@babel/runtime/helpers/assertThisInitialized":"E7HD","@babel/runtime/helpers/inheritsLoose":"HOM9","react":"1n8/","./utils/createChainedFunction":"0wlH"}],"3xdv":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _hook = _interopRequireDefault(require("uncontrollable/hook"));

var _useEventCallback = _interopRequireDefault(require("@restart/hooks/useEventCallback"));

var _createWithBsPrefix = _interopRequireDefault(require("./utils/createWithBsPrefix"));

var _divWithClassName = _interopRequireDefault(require("./utils/divWithClassName"));

var _ThemeProvider = require("./ThemeProvider");

var _Fade = _interopRequireDefault(require("./Fade"));

var _CloseButton = _interopRequireDefault(require("./CloseButton"));

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var defaultProps = {
  show: true,
  transition: _Fade.default,
  closeLabel: 'Close alert'
};
var controllables = {
  show: 'onClose'
};

var Alert = _react.default.forwardRef(function (uncontrolledProps, ref) {
  var _useControllable = (0, _hook.default)(uncontrolledProps, controllables),
      bsPrefix = _useControllable.bsPrefix,
      show = _useControllable.show,
      closeLabel = _useControllable.closeLabel,
      className = _useControllable.className,
      children = _useControllable.children,
      variant = _useControllable.variant,
      onClose = _useControllable.onClose,
      dismissible = _useControllable.dismissible,
      Transition = _useControllable.transition,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useControllable, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"]);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'alert');
  var handleClose = (0, _useEventCallback.default)(function (e) {
    onClose(false, e);
  });

  var alert = _react.default.createElement("div", (0, _extends2.default)({
    role: "alert"
  }, Transition ? props : undefined, {
    className: (0, _classnames.default)(className, prefix, variant && prefix + "-" + variant, dismissible && prefix + "-dismissible")
  }), dismissible && _react.default.createElement(_CloseButton.default, {
    onClick: handleClose,
    label: closeLabel
  }), children);

  if (!Transition) return show ? alert : null;
  return _react.default.createElement(Transition, (0, _extends2.default)({
    unmountOnExit: true,
    ref: ref
  }, props, {
    in: show
  }), alert);
});

var DivStyledAsH4 = (0, _divWithClassName.default)('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps;
Alert.Link = (0, _createWithBsPrefix.default)('alert-link', {
  Component: _SafeAnchor.default
});
Alert.Heading = (0, _createWithBsPrefix.default)('alert-heading', {
  Component: DivStyledAsH4
});
var _default = Alert;
exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/objectWithoutPropertiesLoose":"t2zx","classnames":"9qb7","react":"1n8/","uncontrollable/hook":"0rwB","@restart/hooks/useEventCallback":"nAQU","./utils/createWithBsPrefix":"6rHF","./utils/divWithClassName":"wRgx","./ThemeProvider":"0ajq","./Fade":"Vk+O","./CloseButton":"tUPr","./SafeAnchor":"q08u"}],"nKjr":[function(require,module,exports) {
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ThemeProvider = require("./ThemeProvider");

var _SafeAnchor = _interopRequireDefault(require("./SafeAnchor"));

var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn');
  var classes = (0, _classnames.default)(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return _react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, props, {
      as: as,
      innerRef: ref,
      className: (0, _classnames.default)(classes, props.disabled && 'disabled')
    }));
  }

  var Component = as || 'button';
  if (ref) props.ref = ref;
  return _react.default.createElement(Component, (0, _extends2.default)({}, props, {
    type: type,
    className: classes
  }));
});

Button.displayName = 'Button';
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;
module.exports = exports["default"];
},{"@babel/runtime/helpers/interopRequireDefault":"SpGf","@babel/runtime/helpers/extends":"3dLy","@babel/runtime/helpers/objectWithoutPropertiesLoose":"t2zx","classnames":"9qb7","react":"1n8/","./ThemeProvider":"0ajq","./SafeAnchor":"q08u"}],"gF7b":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("react-bootstrap/Container"));

var _reactRouterDom = require("react-router-dom");

var _playlistStorage = _interopRequireDefault(require("../services/playlistStorage"));

var _Alert = _interopRequireDefault(require("react-bootstrap/Alert"));

var _track = _interopRequireDefault(require("../api/track"));

var _Button = _interopRequireDefault(require("react-bootstrap/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TrackPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TrackPage, _React$Component);

  function TrackPage(props) {
    var _this;

    _classCallCheck(this, TrackPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TrackPage).call(this, props));
    _this.state = {
      lyrics: {}
    };
    _this.trackId = parseInt(_this.props.match.params.id);
    _this.track = _playlistStorage.default.findTrack(_this.trackId);
    _this.gotoPlaylist = _this.gotoPlaylist.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TrackPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.hasLyrics()) {
        _track.default.getLyrics(this.trackId).then(function (response) {
          _this2.setState(function () {
            return {
              lyrics: response.lyrics
            };
          });
        }).catch(console.error);
      }
    }
  }, {
    key: "hasLyrics",
    value: function hasLyrics() {
      return this.track && this.track.has_lyrics === 1;
    }
  }, {
    key: "renderLyrics",
    value: function renderLyrics() {
      if (!this.hasLyrics()) {
        return _react.default.createElement("div", null, "No lyrics for this track");
      } else {
        return _react.default.createElement("div", null, _react.default.createElement("hr", null), _react.default.createElement("pre", null, this.state.lyrics.lyrics_body));
      }
    }
  }, {
    key: "gotoPlaylist",
    value: function gotoPlaylist() {
      this.props.history.push('/');
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_Container.default, null, !this.track && _react.default.createElement(_Alert.default, {
        variant: "warning"
      }, "No such track"), this.track && _react.default.createElement("div", null, _react.default.createElement("div", null, "Name: ", this.track.track_name), _react.default.createElement("div", null, "Artist: ", this.track.artist_name), _react.default.createElement("div", null, "Album: ", this.track.album_name), _react.default.createElement("div", null, "Length: ", this.track.track_length || 'N/A')), this.renderLyrics(), _react.default.createElement(_Button.default, {
        variant: "info",
        onClick: this.gotoPlaylist
      }, "Back to Playlist"));
    }
  }]);

  return TrackPage;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(TrackPage);

exports.default = _default;
},{"react":"1n8/","react-bootstrap/Container":"SdkO","react-router-dom":"/uc1","../services/playlistStorage":"Kps0","react-bootstrap/Alert":"3xdv","../api/track":"EuDf","react-bootstrap/Button":"nKjr"}],"lY9v":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("bootstrap/dist/css/bootstrap.min.css");

var _PlaylistPage = _interopRequireDefault(require("./pages/playlist-page/PlaylistPage"));

var _reactRouterDom = require("react-router-dom");

var _TrackPage = _interopRequireDefault(require("./pages/TrackPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_reactRouterDom.Route, {
        path: "/",
        exact: true,
        component: _PlaylistPage.default
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "/track/:id",
        component: _TrackPage.default
      }));
    }
  }]);

  return App;
}(_react.default.Component);

exports.default = App;
},{"react":"1n8/","bootstrap/dist/css/bootstrap.min.css":"7y3A","./pages/playlist-page/PlaylistPage":"SGu3","react-router-dom":"/uc1","./pages/TrackPage":"gF7b"}],"Focm":[function(require,module,exports) {
"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = _interopRequireDefault(require("./App.js"));

require("./App.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom.default.render(_react.default.createElement(_App.default, null), document.getElementById('root'));
},{"react":"1n8/","react-dom":"NKHc","./App.js":"lY9v","./App.less":"7y3A"}]},{},["Focm"], null)
//# sourceMappingURL=/favorite-playlist-assignment/src.22c24e22.js.map