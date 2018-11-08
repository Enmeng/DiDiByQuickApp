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
/******/ 	return __webpack_require__(__webpack_require__.s = 169);
/******/ })
/************************************************************************/
/******/ ({

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(170)
var $app_style$ = __webpack_require__(171)
var $app_script$ = __webpack_require__(172)

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

/***/ 170:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "securityCenterPage"
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
            "value": "安全中心"
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
            "safeImage"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "progress"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "安全意识较强"
                  }
                },
                {
                  "type": "text",
                  "attr": {},
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "80"
                      },
                      "style": {
                        "fontSize": "38px",
                        "fontWeight": "bold"
                      }
                    },
                    {
                      "type": "span",
                      "attr": {
                        "value": "分"
                      }
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
            "safeInformation"
          ],
          "style": {
            "marginLeft": function () {return this.moveValue}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "safeInformationItem"
              ],
              "repeat": {
                "exp": function () {return this.safeInformationList},
                "value": "item"
              },
              "events": {
                "swipe": "moveInformation"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.text}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "informationImage"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.item.src}
                      }
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
            "safeSetting"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "safeSettingItem"
              ],
              "repeat": {
                "exp": function () {return this.safeSettingList},
                "value": "settingItem"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "settingPart1"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.settingItem.title}
                      },
                      "classList": [
                        "itemTitle"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.settingItem.detail}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "settingPart2"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "settingItemValue"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.settingItem.value}
                          }
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.settingItem.action}
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

/***/ 171:
/***/ (function(module, exports) {

module.exports = {
  ".securityCenterPage": {
    "display": "flex",
    "flexDirection": "column"
  },
  ".title": {
    "position": "fixed",
    "top": "0px",
    "width": "100%",
    "height": "100px",
    "backgroundColor": "rgb(245,166,114)",
    "textAlign": "center"
  },
  ".title>text": {
    "left": "30%",
    "fontSize": "38px",
    "fontWeight": "bold",
    "color": "#ffffff",
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
    "justifyContent": "center",
    "marginTop": "-100px"
  },
  ".safeImage": {
    "width": "100%",
    "height": "40%",
    "backgroundColor": "rgb(245,166,114)",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignContent": "flex-start"
  },
  ".progress": {
    "width": "250px",
    "height": "250px",
    "marginTop": "230px",
    "marginLeft": "250px",
    "borderRadius": "125px",
    "borderTopWidth": "8px",
    "borderRightWidth": "8px",
    "borderBottomWidth": "8px",
    "borderLeftWidth": "8px",
    "borderStyle": "solid",
    "borderTopColor": "#F2C931",
    "borderRightColor": "#F2C931",
    "borderBottomColor": "#F2C931",
    "borderLeftColor": "#F2C931",
    "color": "#ffffff",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".progress>text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "progress"
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
  ".safeInformation": {
    "marginTop": "10px",
    "height": "20%",
    "width": "200%",
    "display": "flex",
    "justifyContent": "flex-start"
  },
  ".safeInformationItem": {
    "height": "100%",
    "width": "200px",
    "backgroundColor": "#F7F2F2",
    "marginLeft": "10px",
    "borderRadius": "4px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "flexShrink": 0,
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px"
  },
  ".informationImage": {
    "display": "flex",
    "justifyContent": "flex-end"
  },
  ".informationImage>image": {
    "width": "50px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "informationImage"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".safeSetting": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start"
  },
  ".safeSettingItem": {
    "width": "100%",
    "height": "200px",
    "display": "flex",
    "justifyContent": "space-between",
    "backgroundColor": "#F7F2F2",
    "marginTop": "10px"
  },
  ".settingPart1": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-end"
  },
  ".settingPart1>.itemTitle": {
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
          "v": "settingPart1"
        },
        {
          "t": "child"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "itemTitle"
        }
      ]
    }
  },
  ".settingPart2": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  ".settingPart2>text": {
    "color": "rgb(245,166,114)",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "settingPart2"
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
  ".settingPart2>.settingItemValue": {
    "width": "100px",
    "height": "50px",
    "borderRadius": "20px",
    "backgroundColor": "rgb(245,166,114)",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "settingPart2"
        },
        {
          "t": "child"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "settingItemValue"
        }
      ]
    }
  },
  ".settingPart2>.settingItemValue>text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "settingPart2"
        },
        {
          "t": "child"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "settingItemValue"
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
  }
}

/***/ }),

/***/ 172:
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
        safeInformationList: [{ text: "安全无止境整改进行中", src: "/Common/safe.png" }, { text: "安全问答", src: "/Common/question.png" }, { text: "安全无止境整改进行中", src: "/Common/safe.png" }, { text: "安全问答", src: "/Common/question.png" }, { text: "安全无止境整改进行中", src: "/Common/safe.png" }, { text: "安全问答", src: "/Common/question.png" }, { text: "安全无止境整改进行中", src: "/Common/safe.png" }, { text: "安全问答", src: "/Common/question.png" }, { text: "安全无止境整改进行中", src: "/Common/safe.png" }, { text: "安全问答", src: "/Common/question.png" }],
        moveValue: '0px',
        safeSettingList: [{ title: "紧急联系人", detail: "自动行程分享或一键报警", value: "+5分", action: "去设置" }, { title: "实名认证", detail: "提升您的账号安全，保护您的合法权益", value: "+5分", action: "去认证" }, { title: "实时位置保护", detail: "在您设置的行程范围内，获取您的准确位置", value: "+5分", action: "" }, { title: "形成录音保护", detail: "授权后，行程中车主端会开启录音并加密上传", value: "+5分", action: "去授权" }, { title: "隐私号码保护", detail: "行程中手机号码加密", value: "+5分", action: "" }, { title: "关怀宝", detail: "九项服务，提供行程保障", value: "+5分", action: "" }]
    },
    onShow: function onShow() {},
    goBack: function goBack() {
        _system2.default.back();
    },
    moveInformation: function moveInformation(res) {
        var move = Number(this.moveValue.split('px')[0]);
        if (res.direction == "right") {
            if (move >= 0) {
                move = 0;
            } else {
                this.moveValue = move + 10 + 'px';
            }
        } else if (res.direction == "left") {
            if (move <= this.safeInformationList.length * 200 - 750) {
                this.moveValue = -move + 'px';
            } else {
                this.moveValue = move - 10 + 'px';
            }
        }
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