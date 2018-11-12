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
/******/ 	return __webpack_require__(__webpack_require__.s = 181);
/******/ })
/************************************************************************/
/******/ ({

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(182)
var $app_style$ = __webpack_require__(183)
var $app_script$ = __webpack_require__(184)

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

/***/ 182:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "settingPage"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "setting"
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
                "value": "设置"
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
                "contentItem"
              ],
              "repeat": {
                "exp": function () {return this.contentList},
                "value": "item"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "itemPart"
                  ],
                  "repeat": {
                    "exp": function () {return this.item.sub},
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
                            "leftPart"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.partItem.title}
                              },
                              "classList": [
                                "partTitle"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.partItem.text}
                              },
                              "shown": function () {return this.partItem.text!=undefined},
                              "style": {
                                "color": "#B7AAAA",
                                "fontSize": "26px"
                              }
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "rightPart"
                          ],
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "shown": function () {return this.partItem.src!=undefined},
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.partItem.description}
                                  }
                                },
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": function () {return this.partItem.src}
                                  },
                                  "style": {
                                    "width": "30px"
                                  }
                                }
                              ]
                            },
                            {
                              "type": "switch",
                              "attr": {
                                "checked": function () {return this.partItem.switch}
                              },
                              "shown": function () {return !(this.partItem.src!=undefined)}
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
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "exit"
          ],
          "events": {
            "click": "showPrompt"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "退出登录"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.exitPromptVisibility},
      "classList": [
        "mask"
      ],
      "events": {
        "click": "hidePrompt"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "exitContent"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/Setting/prompt.png"
              },
              "style": {
                "width": "50px"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "确定要退出吗"
              }
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "choose"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "cancel"
                  ],
                  "events": {
                    "click": "hidePrompt"
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "取消"
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "confirm"
                  ],
                  "events": {
                    "click": "hidePrompt"
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "确定"
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

/***/ 183:
/***/ (function(module, exports) {

module.exports = {
  ".settingPage": {
    "width": "100%",
    "height": "100%"
  },
  ".setting": {
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
    "width": "100%",
    "marginTop": "100px",
    "display": "flex",
    "flexDirection": "column"
  },
  ".contentItem": {
    "width": "100%",
    "display": "flex",
    "flexDirection": "column",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "backgroundColor": "#ffffff",
    "marginTop": "20px"
  },
  ".itemPart": {
    "width": "100%",
    "height": "100px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  ".part1": {
    "width": "100%",
    "display": "flex",
    "justifyContent": "space-between",
    "paddingTop": "20px"
  },
  ".divider": {
    "width": "100%",
    "height": "2px",
    "backgroundColor": "#E5E5E5"
  },
  ".leftPart": {
    "display": "flex",
    "flexDirection": "column"
  },
  ".exit": {
    "marginTop": "20px",
    "width": "100%",
    "height": "120px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  ".exit>text": {
    "color": "#F06405",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "exit"
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
  ".mask": {
    "position": "fixed",
    "width": "100%",
    "height": "100%",
    "top": "0px",
    "left": "0px",
    "backgroundColor": "rgba(0,0,0,0.4)",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".exitContent": {
    "width": "60%",
    "height": "20%",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  ".cancel": {
    "width": "50%",
    "height": "120px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#E5E5E5",
    "borderRightColor": "#E5E5E5",
    "borderBottomColor": "#E5E5E5",
    "borderLeftColor": "#E5E5E5"
  },
  ".confirm": {
    "width": "50%",
    "height": "120px",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#E5E5E5",
    "borderRightColor": "#E5E5E5",
    "borderBottomColor": "#E5E5E5",
    "borderLeftColor": "#E5E5E5"
  }
}

/***/ }),

/***/ 184:
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
        contentList: [{
            sub: [{ title: "账户与安全", src: "/Common/Setting/next.png", description: "" }, { title: "切换语言", src: "/Common/Setting/next.png", description: "" }]
        }, {
            sub: [{ title: "常用地址", src: "/Common/Setting/next.png", description: "" }, { title: "行程安全", src: "/Common/Setting/next.png", description: "" }]
        }, {
            sub: [{ title: "实时路况", text: "打开后地图中将显示实时路况", description: "", switch: true }, { title: "音效提示", text: "打开后将以语音为您播报订单状态", description: "", switch: true }]
        }, {
            sub: [{ title: "清除缓存", src: "/Common/Setting/next.png", description: "2 MB" }]
        }, {
            sub: [{ title: "用户指南", src: "/Common/Setting/next.png", description: "" }, { title: "问题反馈", src: "/Common/Setting/next.png", description: "" }]
        }, {
            sub: [{ title: "版本更新", src: "/Common/Setting/next.png", description: "V5.2.26_456" }, { title: "法律条款与隐私政策", src: "/Common/Setting/next.png", description: "" }, { title: "关于系统", src: "/Common/Setting/next.png", description: "" }]
        }],
        exitPromptVisibility: false
    },
    goBack: function goBack() {
        _system2.default.back();
    },
    showPrompt: function showPrompt() {
        this.exitPromptVisibility = true;
    },
    hidePrompt: function hidePrompt() {
        this.exitPromptVisibility = false;
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