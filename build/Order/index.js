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
/******/ 	return __webpack_require__(__webpack_require__.s = 165);
/******/ })
/************************************************************************/
/******/ ({

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(166)
var $app_style$ = __webpack_require__(167)
var $app_script$ = __webpack_require__(168)

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

/***/ 166:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "orderPage"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "pageTitle"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Common/back.png"
          },
          "events": {
            "click": "goBack"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "我的订单"
          },
          "classList": [
            "title"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "开发票"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "order"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "已完成的订单"
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "orderItem"
          ],
          "repeat": {
            "exp": function () {return this.orderList},
            "value": "item"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.item.carType}
              }
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/clock.png"
                  },
                  "style": {
                    "width": "30px"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.time}
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
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "dot",
                    "greenDot"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.startAddress}
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
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "dot",
                    "orangeDot"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.item.endAddress}
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

/***/ 167:
/***/ (function(module, exports) {

module.exports = {
  ".orderPage": {
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#E5E5E5"
  },
  ".pageTitle": {
    "display": "flex",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff"
  },
  ".title": {
    "fontSize": "38px",
    "fontWeight": "bold",
    "color": "#000000"
  },
  ".order": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "width": "100%",
    "alignItems": "center"
  },
  ".orderItem": {
    "width": "100%",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "backgroundColor": "#ffffff",
    "marginBottom": "4px"
  },
  ".item": {
    "display": "flex",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  ".dot": {
    "width": "20px",
    "height": "20px",
    "borderRadius": "10px"
  },
  ".greenDot": {
    "backgroundColor": "#46AF17"
  },
  ".orangeDot": {
    "backgroundColor": "#F06405"
  }
}

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$("@app-module/system.router");

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: {
    orderList: [{ carType: "出租车", time: "2018年06月05日 12:00", startAddress: "华南农业大学", endAddress: "五山天天向上便利店" }, { carType: "出租车", time: "2018年06月05日 12:00", startAddress: "华南农业大学", endAddress: "五山天天向上便利店" }]
  },
  goBack: function goBack() {
    _system2.default.back();
  }
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