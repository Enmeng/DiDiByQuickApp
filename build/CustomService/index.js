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
/******/ 	return __webpack_require__(__webpack_require__.s = 177);
/******/ })
/************************************************************************/
/******/ ({

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(178)
var $app_style$ = __webpack_require__(179)
var $app_script$ = __webpack_require__(180)

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

/***/ 178:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "customService"
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
            "value": "客服中心"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "latestOrder"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "lastetOrderItem"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "最近订单"
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
                "value": "您还没有订单"
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
        "content"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "record"
          ],
          "repeat": {
            "exp": function () {return this.records},
            "value": "recordItem"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "recordItemPart1"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.recordItem.src}
                  },
                  "style": {
                    "width": "40px"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.recordItem.title}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "recordItemPart2"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.recordItem.detail}
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
            "question"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "猜您想问"
              },
              "classList": [
                "questionTitle"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "divider"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "questionItem"
              ],
              "repeat": {
                "exp": function () {return this.questions},
                "value": "questionItem"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.questionItem.text}
                  }
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
            "frequentQuestion"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "猜您想问"
              },
              "classList": [
                "frequentQuestionTitle"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "divider"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "frequentQuestionItem"
              ],
              "repeat": {
                "exp": function () {return this.frequentQuestions},
                "value": "frequentQuestionItem"
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "fre"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "part1"
                      ],
                      "children": [
                        {
                          "type": "image",
                          "attr": {
                            "src": function () {return this.frequentQuestionItem.src}
                          },
                          "style": {
                            "width": "40px"
                          }
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.frequentQuestionItem.title}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "part2Divider"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "part3"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.frequentQuestionItem.text1}
                          }
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "divider"
                          ]
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.frequentQuestionItem.text2}
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
            "contact"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "contactCustom"
              ],
              "children": [
                {
                  "type": "a",
                  "attr": {
                    "href": "sms:15019589217",
                    "value": "联系客服"
                  },
                  "classList": [
                    "contactCustomTitle"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "处理车费纠纷、物品遗失等问题"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "contactSafe"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "安全专线"
                  },
                  "classList": [
                    "contactSafeTitle"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "处理交通事故等人身安全问题"
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

/***/ 179:
/***/ (function(module, exports) {

module.exports = {
  ".customService": {
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
  ".latestOrder": {
    "width": "100%",
    "height": "300px",
    "top": "100px",
    "position": "fixed",
    "backgroundColor": "#395571",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "justifyContent": "flex-start",
    "alignItems": "flex-start"
  },
  ".lastetOrderItem>text": {
    "color": "#ffffff",
    "fontSize": "36px",
    "fontWeight": "bold",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "lastetOrderItem"
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
  ".order": {
    "alignSelf": "center",
    "marginLeft": "80px"
  },
  ".order>text": {
    "color": "#C6BFBF",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "order"
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
    "width": "100%",
    "marginTop": "400px"
  },
  ".record": {
    "width": "100%",
    "height": "100px",
    "display": "flex",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "marginBottom": "20px"
  },
  ".recordItemPart1": {
    "display": "flex",
    "justifyContent": "space-between"
  },
  ".question": {
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  },
  ".frequentQuestion": {
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  },
  ".questionTitle": {
    "fontSize": "36px"
  },
  ".frequentQuestionTitle": {
    "fontSize": "36px"
  },
  ".divider": {
    "width": "100%",
    "height": "2px",
    "backgroundColor": "#E5E5E5"
  },
  ".questionItem": {
    "width": "100%",
    "height": "80px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "flex-start"
  },
  ".frequentQuestionItem": {
    "width": "100%",
    "height": "200px",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "flex-start"
  },
  ".questionItem>text": {
    "paddingBottom": "15px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "questionItem"
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
  ".fre": {
    "width": "100%",
    "display": "flex",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "marginBottom": "30px"
  },
  ".part1": {
    "width": "25%",
    "height": "100%",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".part2Divider": {
    "width": "2px",
    "height": "80%",
    "backgroundColor": "#E5E5E5",
    "marginRight": "4%"
  },
  ".part3": {
    "height": "100%",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "flex-start",
    "marginLeft": "20px"
  },
  ".part3>text": {
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "part3"
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
  ".contact": {
    "width": "100%",
    "display": "flex",
    "flexDirection": "column",
    "marginTop": "30px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".contactCustom": {
    "width": "90%",
    "height": "120px",
    "backgroundColor": "#395571",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".contactSafe": {
    "width": "90%",
    "height": "120px",
    "backgroundColor": "#ffffff",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "20px"
  },
  ".contactCustomTitle": {
    "fontSize": "36px"
  },
  ".contactSafeTitle": {
    "fontSize": "36px"
  },
  ".contactCustom>a": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "contactCustom"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "a"
        }
      ]
    }
  },
  ".contactCustom>text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "contactCustom"
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

/***/ 180:
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
        records: [{ src: "/Common/CustomService/hourglass.png", title: "处理进度", detail: "暂无投诉记录" }, { src: "/Common/CustomService/icon_blacklist.png", title: "我的黑名单", detail: "" }],
        questions: [{ text: "如何支付订单" }, { text: "订单无法支付" }, { text: "线下支付了订单怎么办" }, { text: "发票多久寄出" }, { text: "司机提前计费" }],
        frequentQuestions: [{ src: "/Common/CustomService/money.png", title: "支付相关", text1: "预支付车费退款", text2: "为什么要预支付车费" }, { src: "/Common/CustomService/mulu.png", title: "费用相关", text1: "被收了取消费", text2: "拼车费用超出一口价" }, { src: "/Common/CustomService/search.png", title: "查询信息", text1: "查找历史订单", text2: "查询补偿是否到帐" }, { src: "/Common/CustomService/file-invoice.png", title: "发票相关", text1: "如何申请发票", text2: "查询发票开取状态" }]
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