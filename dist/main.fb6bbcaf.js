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
})({"js/main.js":[function(require,module,exports) {
var ItemsMenu = document.querySelectorAll(".menu li");
var Sections = document.querySelectorAll(".content section");
var Planets = document.querySelectorAll(".planets li");
var PlanetSections = document.querySelectorAll(".planet");
var Explore = document.querySelector(".home .right .btn");
var Staffs = document.querySelectorAll(".staff");
var Dots = document.querySelectorAll(".dots li");
var Steps = document.querySelectorAll(".steps li");
var Techs = document.querySelectorAll(".tech");

var ShowDestination = function ShowDestination() {
  var _loop = function _loop(i) {
    var ItemMenu = ItemsMenu[i];
    ItemMenu.addEventListener("click", function () {
      var Id = ItemMenu.getAttribute("rel"); // gestion du active dans le menu

      for (var m = 0; m < ItemsMenu.length; m++) {
        var MenuEntry = ItemsMenu[m];
        MenuEntry.classList.remove("active");
      }

      ItemMenu.classList.add("active");

      for (var s = 0; s < Sections.length; s++) {
        var Section = Sections[s]; // On ajoute la class hidden a toutes les sections

        Section.classList.add("hidden"); // On supprime toutes les class du body

        document.body.setAttribute("class", ""); // On ajoute la nouvelle class du body

        document.body.classList.add("page-" + Id); // On supprime la class hidden de la section pour l'afficher

        if (Section.classList.contains(Id)) {
          Section.classList.remove("hidden");
        }
      }
    });
  };

  for (var i = 0; i < ItemsMenu.length; i++) {
    _loop(i);
  }

  Explore.addEventListener("click", function () {
    // gestion du active dans le menu
    for (var m = 0; m < ItemsMenu.length; m++) {
      var MenuEntry = ItemsMenu[m];
      MenuEntry.classList.remove("active");
    }

    document.querySelector(".menu li:nth-child(2)").classList.add("active");

    for (var s = 0; s < Sections.length; s++) {
      var Section = Sections[s]; // On ajoute la class hidden a toutes les sections

      Section.classList.add("hidden"); // On supprime toutes les class du body

      document.body.setAttribute("class", ""); // On ajoute la nouvelle class du body

      document.body.classList.add("page-destinations"); // On supprime la class hidden de la section pour l'afficher

      document.querySelector("section.destinations").classList.remove("hidden");
    }
  });
};

var ShowPlanet = function ShowPlanet() {
  var _loop2 = function _loop2(i) {
    var Planet = Planets[i];
    Planet.addEventListener("click", function () {
      var Id = Planet.getAttribute("rel"); // gestion du active dans le sous menu planets

      for (var m = 0; m < Planets.length; m++) {
        var PlanetMenuEntry = Planets[m];
        PlanetMenuEntry.classList.remove("active");
      }

      Planet.classList.add("active");

      for (var s = 0; s < PlanetSections.length; s++) {
        var _Planet = PlanetSections[s]; // On ajoute la class hidden a toutes les sections

        _Planet.classList.add("hidden"); // On supprime la class hidden de la section pour l'afficher


        if (_Planet.classList.contains(Id)) {
          _Planet.classList.remove("hidden");
        }
      }
    });
  };

  for (var i = 0; i < Planets.length; i++) {
    _loop2(i);
  }
};

var ShowCrew = function ShowCrew() {
  var _loop3 = function _loop3(i) {
    var Dot = Dots[i];
    Dot.addEventListener("click", function () {
      var Id = Dot.getAttribute("rel"); // gestion du active dans le sous menu planets

      for (var m = 0; m < Dots.length; m++) {
        var DotMenu = Dots[m];
        DotMenu.classList.remove("active");
      }

      Dot.classList.add("active");

      for (var s = 0; s < Staffs.length; s++) {
        var Staff = Staffs[s]; // On ajoute la class hidden a toutes les sections

        Staff.classList.add("hidden"); // On supprime la class hidden de la section pour l'afficher

        if (Staff.classList.contains(Id)) {
          Staff.classList.remove("hidden");
        }
      }
    });
  };

  for (var i = 0; i < Dots.length; i++) {
    _loop3(i);
  }
};

var ShowTech = function ShowTech() {
  var _loop4 = function _loop4(i) {
    var Step = Steps[i];
    Step.addEventListener("click", function () {
      var Id = Step.getAttribute("rel"); // gestion du active dans le sous menu planets

      /*for (let m = 0; m < Steps.length; m++) {
        let StepMenu = Steps[m];
          StepMenu.classList.remove("active");
      }
      Step.classList.add("active");*/

      for (var s = 0; s < Techs.length; s++) {
        var Tech = Techs[s]; // On ajoute la class hidden a toutes les sections

        Tech.classList.add("hidden"); // On supprime la class hidden de la section pour l'afficher

        if (Tech.classList.contains(Id)) {
          Tech.classList.remove("hidden");
        }
      }
    });
  };

  for (var i = 0; i < Steps.length; i++) {
    _loop4(i);
  }
};

window.addEventListener("load", ShowDestination);
window.addEventListener("load", ShowPlanet);
window.addEventListener("load", ShowCrew);
window.addEventListener("load", ShowTech);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61518" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map