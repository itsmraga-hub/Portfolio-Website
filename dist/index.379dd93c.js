// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lBB98":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _scrollReveal = require("./scripts/scrollReveal");
var _scrollRevealDefault = parcelHelpers.interopDefault(_scrollReveal);
var _tiltAnimation = require("./scripts/tiltAnimation");
var _tiltAnimationDefault = parcelHelpers.interopDefault(_tiltAnimation);
var _scrollRevealConfig = require("./data/scrollRevealConfig");
_scrollRevealDefault.default(_scrollRevealConfig.targetElements, _scrollRevealConfig.defaultProps);
_tiltAnimationDefault.default();

},{"./scripts/scrollReveal":"iy9kx","./scripts/tiltAnimation":"haofX","./data/scrollRevealConfig":"9H7i0","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iy9kx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function initScrollReveal(targetElements, defaultProps) {
    if (!targetElements.length) return;
    ScrollReveal({
        reset: false
    });
    targetElements.forEach(({ element , animation  })=>{
        ScrollReveal().reveal(element, Object.assign({
        }, defaultProps, animation));
    });
}
exports.default = initScrollReveal;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"haofX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vanillaTilt = require("vanilla-tilt");
var _vanillaTiltDefault = parcelHelpers.interopDefault(_vanillaTilt);
function initTiltAnimation() {
    const elements = document.querySelectorAll(".js-tilt");
    _vanillaTiltDefault.default.init(elements);
}
exports.default = initTiltAnimation;

},{"vanilla-tilt":"3IWbd","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3IWbd":[function(require,module,exports) {
'use strict';
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
};
/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.7.2
 */ var VanillaTilt1 = function() {
    function VanillaTilt(element) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        };
        classCallCheck(this, VanillaTilt);
        if (!(element instanceof Node)) throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
        this.width = null;
        this.height = null;
        this.clientWidth = null;
        this.clientHeight = null;
        this.left = null;
        this.top = null;
        // for Gyroscope sampling
        this.gammazero = null;
        this.betazero = null;
        this.lastgammazero = null;
        this.lastbetazero = null;
        this.transitionTimeout = null;
        this.updateCall = null;
        this.event = null;
        this.updateBind = this.update.bind(this);
        this.resetBind = this.reset.bind(this);
        this.element = element;
        this.settings = this.extendSettings(settings);
        this.reverse = this.settings.reverse ? -1 : 1;
        this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
        this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
        this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
        this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
        this.gyroscopeSamples = this.settings.gyroscopeSamples;
        this.elementListener = this.getElementListener();
        if (this.glare) this.prepareGlare();
        if (this.fullPageListening) this.updateClientSize();
        this.addEventListeners();
        this.reset();
        this.updateInitialPosition();
    }
    VanillaTilt.isSettingTrue = function isSettingTrue(setting) {
        return setting === "" || setting === true || setting === 1;
    };
    /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */ VanillaTilt.prototype.getElementListener = function getElementListener() {
        if (this.fullPageListening) return window.document;
        if (typeof this.settings["mouse-event-element"] === "string") {
            var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);
            if (mouseEventElement) return mouseEventElement;
        }
        if (this.settings["mouse-event-element"] instanceof Node) return this.settings["mouse-event-element"];
        return this.element;
    };
    /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */ VanillaTilt.prototype.addEventListeners = function addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this);
        this.onMouseMoveBind = this.onMouseMove.bind(this);
        this.onMouseLeaveBind = this.onMouseLeave.bind(this);
        this.onWindowResizeBind = this.onWindowResize.bind(this);
        this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);
        this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);
        if (this.glare || this.fullPageListening) window.addEventListener("resize", this.onWindowResizeBind);
        if (this.gyroscope) window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    };
    /**
   * Method remove event listeners from current this.elementListener
   */ VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);
        if (this.gyroscope) window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
        if (this.glare || this.fullPageListening) window.removeEventListener("resize", this.onWindowResizeBind);
    };
    VanillaTilt.prototype.destroy = function destroy() {
        clearTimeout(this.transitionTimeout);
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.reset();
        this.removeEventListeners();
        this.element.vanillaTilt = null;
        delete this.element.vanillaTilt;
        this.element = null;
    };
    VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {
        if (event.gamma === null || event.beta === null) return;
        this.updateElementPosition();
        if (this.gyroscopeSamples > 0) {
            this.lastgammazero = this.gammazero;
            this.lastbetazero = this.betazero;
            if (this.gammazero === null) {
                this.gammazero = event.gamma;
                this.betazero = event.beta;
            } else {
                this.gammazero = (event.gamma + this.lastgammazero) / 2;
                this.betazero = (event.beta + this.lastbetazero) / 2;
            }
            this.gyroscopeSamples -= 1;
        }
        var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
        var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;
        var degreesPerPixelX = totalAngleX / this.width;
        var degreesPerPixelY = totalAngleY / this.height;
        var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
        var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
        var posX = angleX / degreesPerPixelX;
        var posY = angleY / degreesPerPixelY;
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.event = {
            clientX: posX + this.left,
            clientY: posY + this.top
        };
        this.updateCall = requestAnimationFrame(this.updateBind);
    };
    VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {
        this.updateElementPosition();
        this.element.style.willChange = "transform";
        this.setTransition();
    };
    VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.event = event;
        this.updateCall = requestAnimationFrame(this.updateBind);
    };
    VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {
        this.setTransition();
        if (this.settings.reset) requestAnimationFrame(this.resetBind);
    };
    VanillaTilt.prototype.reset = function reset() {
        this.event = {
            clientX: this.left + this.width / 2,
            clientY: this.top + this.height / 2
        };
        if (this.element && this.element.style) this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(0deg) " + "rotateY(0deg) " + "scale3d(1, 1, 1)";
        this.resetGlare();
    };
    VanillaTilt.prototype.resetGlare = function resetGlare() {
        if (this.glare) {
            this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
            this.glareElement.style.opacity = "0";
        }
    };
    VanillaTilt.prototype.updateInitialPosition = function updateInitialPosition() {
        if (this.settings.startX === 0 && this.settings.startY === 0) return;
        this.onMouseEnter();
        if (this.fullPageListening) this.event = {
            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
        };
        else this.event = {
            clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
            clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
        };
        var backupScale = this.settings.scale;
        this.settings.scale = 1;
        this.update();
        this.settings.scale = backupScale;
        this.resetGlare();
    };
    VanillaTilt.prototype.getValues = function getValues() {
        var x = void 0, y = void 0;
        if (this.fullPageListening) {
            x = this.event.clientX / this.clientWidth;
            y = this.event.clientY / this.clientHeight;
        } else {
            x = (this.event.clientX - this.left) / this.width;
            y = (this.event.clientY - this.top) / this.height;
        }
        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);
        var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
        var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
        var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
        return {
            tiltX: tiltX,
            tiltY: tiltY,
            percentageX: x * 100,
            percentageY: y * 100,
            angle: angle
        };
    };
    VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {
        var rect = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
    };
    VanillaTilt.prototype.update = function update() {
        var values = this.getValues();
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";
        if (this.glare) {
            this.glareElement.style.transform = "rotate(" + values.angle + "deg) translate(-50%, -50%)";
            this.glareElement.style.opacity = "" + values.percentageY * this.settings["max-glare"] / 100;
        }
        this.element.dispatchEvent(new CustomEvent("tiltChange", {
            "detail": values
        }));
        this.updateCall = null;
    };
    /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */ VanillaTilt.prototype.prepareGlare = function prepareGlare() {
        // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
        if (!this.glarePrerender) {
            // Create glare element
            var jsTiltGlare = document.createElement("div");
            jsTiltGlare.classList.add("js-tilt-glare");
            var jsTiltGlareInner = document.createElement("div");
            jsTiltGlareInner.classList.add("js-tilt-glare-inner");
            jsTiltGlare.appendChild(jsTiltGlareInner);
            this.element.appendChild(jsTiltGlare);
        }
        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
        this.glareElement = this.element.querySelector(".js-tilt-glare-inner");
        if (this.glarePrerender) return;
        Object.assign(this.glareElementWrapper.style, {
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "overflow": "hidden",
            "pointer-events": "none"
        });
        Object.assign(this.glareElement.style, {
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "pointer-events": "none",
            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            "transform": "rotate(180deg) translate(-50%, -50%)",
            "transform-origin": "0% 0%",
            "opacity": "0"
        });
        this.updateGlareSize();
    };
    VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {
        if (this.glare) {
            var glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;
            Object.assign(this.glareElement.style, {
                "width": glareSize + "px",
                "height": glareSize + "px"
            });
        }
    };
    VanillaTilt.prototype.updateClientSize = function updateClientSize() {
        this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    VanillaTilt.prototype.onWindowResize = function onWindowResize() {
        this.updateGlareSize();
        this.updateClientSize();
    };
    VanillaTilt.prototype.setTransition = function setTransition() {
        var _this = this;
        clearTimeout(this.transitionTimeout);
        this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
        if (this.glare) this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing;
        this.transitionTimeout = setTimeout(function() {
            _this.element.style.transition = "";
            if (_this.glare) _this.glareElement.style.transition = "";
        }, this.settings.speed);
    };
    /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be disabled. Can be X or Y
   * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */ VanillaTilt.prototype.extendSettings = function extendSettings(settings) {
        var defaultSettings = {
            reverse: false,
            max: 15,
            startX: 0,
            startY: 0,
            perspective: 1000,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            glare: false,
            "max-glare": 1,
            "glare-prerender": false,
            "full-page-listening": false,
            "mouse-event-element": null,
            reset: true,
            gyroscope: true,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45,
            gyroscopeSamples: 10
        };
        var newSettings = {
        };
        for(var property in defaultSettings){
            if (property in settings) newSettings[property] = settings[property];
            else if (this.element.hasAttribute("data-tilt-" + property)) {
                var attribute = this.element.getAttribute("data-tilt-" + property);
                try {
                    newSettings[property] = JSON.parse(attribute);
                } catch (e) {
                    newSettings[property] = attribute;
                }
            } else newSettings[property] = defaultSettings[property];
        }
        return newSettings;
    };
    VanillaTilt.init = function init(elements, settings) {
        if (elements instanceof Node) elements = [
            elements
        ];
        if (elements instanceof NodeList) elements = [].slice.call(elements);
        if (!(elements instanceof Array)) return;
        elements.forEach(function(element) {
            if (!("vanillaTilt" in element)) element.vanillaTilt = new VanillaTilt(element, settings);
        });
    };
    return VanillaTilt;
}();
if (typeof document !== "undefined") {
    /* expose the class to window */ window.VanillaTilt = VanillaTilt1;
    /**
   * Auto load
   */ VanillaTilt1.init(document.querySelectorAll("[data-tilt]"));
}
module.exports = VanillaTilt1;

},{}],"9H7i0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultProps", ()=>defaultProps
);
parcelHelpers.export(exports, "targetElements", ()=>targetElements
);
const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    // duration: 1000,
    duration: 0,
    desktop: true,
    mobile: true
};
const targetElements = [
    {
        element: ".section-title",
        animation: {
            delay: 0,
            distance: "0px",
            origin: "bottom"
        }
    },
    {
        element: ".hero-title",
        animation: {
            // delay: 500,
            delay: 0,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".hero-cta",
        animation: {
            // delay: 1000,
            delay: 0,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".about-wrapper__image",
        animation: {
            delay: 600,
            origin: "bottom"
        }
    },
    {
        element: ".about-wrapper__info",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".project-wrapper__text",
        animation: {
            // delay: 500,
            delay: 0,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".project-wrapper__image",
        animation: {
            // delay: 1000,
            delay: 500,
            origin: window.innerWidth > 768 ? "right" : "bottom"
        }
    },
    {
        element: ".contact-wrapper",
        animation: {
            // delay: 800,
            delay: 0,
            origin: "bottom"
        }
    }, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["lBB98","hD4hw"], "hD4hw", "parcelRequire4e47")

//# sourceMappingURL=index.379dd93c.js.map
