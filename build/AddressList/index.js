(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 149);
/******/ })
/************************************************************************/
/******/ ({

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(150)
var $app_style$ = __webpack_require__(151)
var $app_script$ = __webpack_require__(152)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 150:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return '当前城市：' + (this.cCity)}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "placeholder": "城市中文名",
            "type": "text"
          },
          "events": {
            "enterkeyclick": "enterKeyClick"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item",
        "addressList"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "省/直辖市"
              },
              "classList": [
                "tipText"
              ]
            },
            {
              "type": "select",
              "attr": {},
              "events": {
                "change": "selectProChange"
              },
              "children": [
                {
                  "type": "option",
                  "attr": {
                    "value": function () {return this.pro},
                    "content": function () {return this.pro}
                  },
                  "repeat": {
                    "exp": function () {return this.listPro},
                    "value": "pro"
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "tipText"
              ],
              "style": {
                "fontSize": "60px"
              },
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "|"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "市/区"
              },
              "classList": [
                "tipText"
              ]
            },
            {
              "type": "select",
              "attr": {},
              "events": {
                "change": "selectCityChange"
              },
              "children": [
                {
                  "type": "option",
                  "attr": {
                    "value": function () {return this.city},
                    "content": function () {return this.city}
                  },
                  "repeat": {
                    "exp": function () {return this.listCity},
                    "value": "city"
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {},
              "classList": [
                "tipText"
              ],
              "style": {
                "fontSize": "60px"
              },
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": "|"
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "区"
              },
              "classList": [
                "tipText"
              ]
            },
            {
              "type": "select",
              "attr": {},
              "events": {
                "change": "selectCountyChange"
              },
              "children": [
                {
                  "type": "option",
                  "attr": {
                    "value": function () {return this.county},
                    "content": function () {return this.county}
                  },
                  "repeat": {
                    "exp": function () {return this.listCounty},
                    "value": "county"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  ".item": {
    "backgroundColor": "rgba(255,255,255,0.1)",
    "marginTop": "20px"
  },
  "input": {
    "width": "80%",
    "height": "60px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#eeeeee",
    "borderRightColor": "#eeeeee",
    "borderBottomColor": "#eeeeee",
    "borderLeftColor": "#eeeeee",
    "fontSize": "30px"
  },
  ".tipText": {
    "marginRight": "20px",
    "color": "rgba(134,185,18,0.8)"
  },
  "option": {
    "marginBottom": "10px"
  },
  ".addressList": {
    "display": "flex",
    "justifyContent": "space-between",
    "alignContent": "space-between"
  }
}

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.fetch');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.prompt');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: {
    currentCity: '',
    cCity: "",
    selectPro: "",
    selectCity: "",
    selectCounty: "",
    listPro: ["请选择"],
    listCity: ["请选择"],
    listCounty: ["请选择"],
    value: ""
  },
  onInit: function onInit() {
    _system4.default.showToast({ message: this.currentCity });

    var that = this;
    _system2.default.fetch({
      url: 'http://10.1.29.16:3000/city',
      success: function success(response) {
        that.listPro = [].concat(JSON.parse(response.data));
      },
      fail: function fail(err, code) {
        _system4.default.showToast({ message: err });
      }
    });
  },
  enterKeyClick: function enterKeyClick(res) {
    this.selectCity = res.value;
  },
  selectProChange: function selectProChange(res) {
    this.selectPro = res.newValue;
    var url = 'http://10.1.29.16:3000/city' + '?currentPro=' + this.selectPro;
    var that = this;
    _system2.default.fetch({
      url: url,
      success: function success(response) {
        that.listCity = [].concat(JSON.parse(response.data));
      },
      fail: function fail(err, code) {
        _system4.default.showToast({ message: err });
      }
    });
  },
  selectCityChange: function selectCityChange(res) {
    this.selectCity = res.newValue;
    var url = 'http://10.1.29.16:3000/city' + '?currentPro=' + this.selectPro + '&&currentCity=' + this.selectCity;
    var that = this;
    _system2.default.fetch({
      url: url,
      success: function success(response) {
        that.listCounty = [].concat(JSON.parse(response.data));
      },
      fail: function fail(err, code) {
        _system4.default.showToast({ message: err });
      }
    });
  },
  selectCountyChange: function selectCountyChange(res) {
    this.selectCounty = res.newValue;
  },
  onHide: function onHide() {}
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map