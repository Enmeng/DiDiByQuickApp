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
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
/******/ })
/************************************************************************/
/******/ ({

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(174)
var $app_style$ = __webpack_require__(175)
var $app_script$ = __webpack_require__(176)

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

/***/ 174:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "walletPage"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "title"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Common/back.png"
          },
          "style": {
            "width": "60px",
            "marginTop": "20px"
          },
          "events": {
            "click": "goBack"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "我的钱包"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "walletItem"
          ],
          "repeat": {
            "exp": function () {return this.walletList},
            "value": "item"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.item.title}
              },
              "classList": [
                "walletItemTitle"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "part"
              ],
              "repeat": {
                "exp": function () {return this.item.part},
                "value": "partItem"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "part1"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "partItem1"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.partItem.src}
                          },
                          "style": {
                            "width": "30px",
                            "backgroundColor": "#DAA520"
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.partItem.text}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "partItem2"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.partItem.other}
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "divider"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "card"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "cardTitle"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "卡"
                  },
                  "classList": [
                    "cardMarker"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "查看全部"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "cardItem"
              ],
              "repeat": {
                "exp": function () {return this.cardList},
                "value": "item"
              },
              "style": {
                "backgroundColor": function () {return this.item.backgroundColor}
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "cardPart1"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "cardItemTitle"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.item.src}
                          },
                          "style": {
                            "width": "30px"
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.item.title}
                          }
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.detail}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "cardPart2"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.counter}
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
  ]
}

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = {
  ".walletPage": {
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#E5E5E5"
  },
  ".title": {
    "position": "fixed",
    "top": "0px",
    "width": "100%",
    "height": "100px",
    "backgroundColor": "#ffffff",
    "textAlign": "center"
  },
  ".title>text": {
    "fontSize": "38px",
    "fontWeight": "bold",
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".content": {
    "display": "flex",
    "flexDirection": "column",
    "marginTop": "120px",
    "width": "100%"
  },
  ".walletItem": {
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "marginTop": "10px"
  },
  ".walletItemTitle": {
    "fontSize": "38px",
    "fontWeight": "bold",
    "color": "#000000"
  },
  ".part": {
    "width": "100%",
    "height": "120px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  ".part1": {
    "display": "flex",
    "justifyContent": "space-between"
  },
  ".partItem1": {
    "display": "flex",
    "justifyContent": "flex-start"
  },
  ".divider": {
    "width": "100%",
    "height": "2px",
    "backgroundColor": "#E5E5E5"
  },
  ".card": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "backgroundColor": "#ffffff",
    "marginTop": "10px"
  },
  ".cardTitle": {
    "display": "flex",
    "justifyContent": "space-between"
  },
  ".cardTitle>.cardMarker": {
    "fontSize": "38px",
    "fontWeight": "bold",
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cardTitle"
        },
        {
          "t": "child"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cardMarker"
        }
      ]
    }
  },
  ".cardItem": {
    "display": "flex",
    "justifyContent": "space-between",
    "width": "90%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "height": "200px",
    "marginLeft": "40px",
    "marginBottom": "10px"
  },
  ".cardPart1": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  ".cardItemTitle": {
    "display": "flex"
  }
}

/***/ }),

/***/ 176:
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
        walletList: [{
            title: "余额",
            part: [{ src: "/Common/Wallet/piggy-bank.png", text: "账户余额", other: "0.00元" }, { src: "/Common/Wallet/money_1.png", text: "特惠返利", other: "0.00元" }, { src: "/Common/Wallet/money.png", text: "理财余额", other: "立即查看" }, { src: "/Common/Wallet/easy_integration.png", text: "我的积分", other: "4个" }]
        }, {
            title: "支付方式",
            part: [{ src: "/Common/Wallet/invoice.png", text: "开通免密，下车即走", other: "立即开通" }]
        }, {
            title: "券",
            part: [{ src: "/Common/Wallet/TrainTicket.png", text: "车票", other: "去购买" }]
        }, {
            title: "票据",
            part: [{ src: "/Common/Wallet/Ticket.png", text: "发票（发票，值得信赖的报销助手）", other: "开发票" }]
        }, {
            title: "保险",
            part: [{ src: "/Common/Wallet/insurance.png", text: "只为平安", other: "买保险" }]
        }],
        cardList: [{ backgroundColor: "#486779", src: "/Common/vip.png", title: "专车出行卡", detail: "仅限专车使用", counter: "0.00元" }, { backgroundColor: "#D8D8D8", src: "/Common/vip.png", title: "专车出行卡", detail: "仅限专车使用", counter: "0.00元" }]
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