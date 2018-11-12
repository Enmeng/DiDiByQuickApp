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
/******/ 	return __webpack_require__(__webpack_require__.s = 185);
/******/ })
/************************************************************************/
/******/ ({

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(186)
var $app_style$ = __webpack_require__(187)
var $app_script$ = __webpack_require__(188)

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

/***/ 186:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "recommendationPage"
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
                "value": "推荐有奖"
              }
            },
            {
              "type": "image",
              "attr": {
                "src": "/Common/Recommendation/icon_more.png"
              },
              "style": {
                "width": "50px",
                "marginTop": "20px"
              },
              "events": {
                "click": "showShare"
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
                "divider"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "div-tabs"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "div-tabbar"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "推荐乘客"
                      },
                      "events": {
                        "click": function (evt) {this.showContent(1,evt)}
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "推荐司机"
                      },
                      "events": {
                        "click": function (evt) {this.showContent(2,evt)}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "divider"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": function () {return [this.type]}
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "div-tabcontent"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {
                        "show": function () {return this.type==='content_1'}
                      },
                      "classList": [
                        "div-tabcontent-section"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "entireCountry"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "全国"
                              }
                            },
                            {
                              "type": "image",
                              "attr": {
                                "src": "/Common/Recommendation/right.png"
                              },
                              "style": {
                                "width": "30px"
                              }
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "actionPrompt"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "邀请好友，好友享首单5元立减"
                              },
                              "style": {
                                "fontSize": "38px"
                              }
                            },
                            {
                              "type": "text",
                              "attr": {},
                              "style": {
                                "fontSize": "44px",
                                "fontWeight": "bold"
                              },
                              "children": [
                                {
                                  "type": "span",
                                  "attr": {
                                    "value": "您得"
                                  }
                                },
                                {
                                  "type": "span",
                                  "attr": {
                                    "value": "5元"
                                  },
                                  "style": {
                                    "color": "#F06405"
                                  }
                                },
                                {
                                  "type": "span",
                                  "attr": {
                                    "value": "现金"
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
                            "redEnvelope"
                          ],
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": "/Common/Recommendation/red-envelope.png"
                              },
                              "style": {
                                "width": "400px"
                              }
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "rulePrompt"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "点击查看奖励规则 >"
                              },
                              "style": {
                                "fontSize": "34px"
                              }
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "leftRight"
                          ],
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "leftDivider"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "马上邀请好友得奖励"
                              }
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "rightDivider"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "share"
                          ],
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "events": {
                                "click": "share"
                              },
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/Common/Recommendation/wechat.png"
                                  }
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "微信好友"
                                  }
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "events": {
                                "click": "share"
                              },
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/Common/Recommendation/wechat-friend.png"
                                  }
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "微信朋友圈"
                                  }
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/Common/Recommendation/scan.png"
                                  }
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "二维码分享"
                                  }
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": "/Common/Recommendation/more.png"
                                  }
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "更多"
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
                      "attr": {
                        "show": function () {return this.type==='content_2'}
                      },
                      "classList": [
                        "div-tabcontent-section"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "content2"
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
                "content_footer"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "已获得奖励：0元"
                  }
                },
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "去查看 >"
                      }
                    }
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
      "shown": function () {return this.showSharePanel},
      "classList": [
        "sharePanel"
      ],
      "events": {
        "click": "hideShare"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "shareContent"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "platform"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "repeat": {
                    "exp": function () {return this.shareList},
                    "value": "item"
                  },
                  "classList": [
                    "shareItem"
                  ],
                  "events": {
                    "click": "share"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.item.src}
                      },
                      "style": {
                        "width": "70px"
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.item.text}
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
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "cancel"
              ],
              "events": {
                "click": "hideShare"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": "取消"
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

/***/ 187:
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "width": "100%",
    "height": "100%"
  },
  ".recommendationPage": {
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "flexDirection": "column"
  },
  ".title": {
    "position": "fixed",
    "top": "0px",
    "width": "100%",
    "height": "100px",
    "backgroundColor": "#ffffff",
    "textAlign": "center",
    "display": "flex",
    "justifyContent": "space-between"
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
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "marginTop": "102px",
    "width": "100%"
  },
  ".divider": {
    "width": "100%",
    "height": "2px",
    "backgroundColor": "#E5E5E5"
  },
  ".divider>div": {
    "width": "150px",
    "height": "2px",
    "backgroundColor": "#FF0000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "divider"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".content_1": {
    "marginLeft": "120px"
  },
  ".content_2": {
    "marginLeft": "490px"
  },
  ".div-tabs": {
    "flex": 1,
    "flexDirection": "column"
  },
  ".div-tabbar": {
    "height": "100px"
  },
  ".div-tabbar text": {
    "marginTop": "10px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "marginLeft": "10px",
    "flexGrow": 1,
    "textAlign": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "div-tabbar"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".div-tabcontent": {
    "flex": 1
  },
  ".div-tabcontent-section": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  ".redEnvelope": {
    "marginTop": "30px"
  },
  ".entireCountry": {
    "marginTop": "30px"
  },
  ".actionPrompt": {
    "marginTop": "30px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".rulePrompt": {
    "marginTop": "30px",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".actionPrompt>text": {
    "color": "#000000",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "actionPrompt"
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
  ".leftRight": {
    "marginTop": "20px",
    "width": "100%",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  ".leftRight>text": {
    "width": "120%",
    "marginLeft": "5px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "leftRight"
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
  ".leftDivider": {
    "width": "80%",
    "height": "2px",
    "backgroundColor": "#E5E5E5",
    "alignSelf": "center"
  },
  ".rightDivider": {
    "width": "100%",
    "height": "2px",
    "backgroundColor": "#E5E5E5"
  },
  ".share": {
    "width": "100%",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "20px"
  },
  ".share>div": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "23%",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "share"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".share image": {
    "width": "60px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "share"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".content_footer": {
    "width": "100%",
    "height": "150px",
    "justifyContent": "space-between",
    "backgroundColor": "#E5E5E5"
  },
  ".content_footer>div": {
    "justifyContent": "flex-start",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content_footer"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".sharePanel": {
    "position": "fixed",
    "width": "100%",
    "height": "100%",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  ".shareContent": {
    "position": "fixed",
    "width": "100%",
    "height": "500px",
    "backgroundColor": "#ffffff",
    "bottom": "0px",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".platform": {
    "flexWrap": "wrap",
    "marginTop": "30px",
    "marginLeft": "30px"
  },
  ".shareItem": {
    "width": "25%",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "marginTop": "40px"
  },
  ".cancel": {
    "height": "80px",
    "justifyContent": "center",
    "alignContent": "center"
  }
}

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _service = $app_require$('@app-module/service.share');

var _service2 = _interopRequireDefault(_service);

var _system3 = $app_require$('@app-module/system.prompt');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  private: {
    type: "content_1",
    showSharePanel: false,
    shareList: [{ src: "/Common/Recommendation/wechat-friend.png", text: "微信朋友圈" }, { src: "/Common/Recommendation/wechat.png", text: "微信好友" }, { src: "/Common/Recommendation/qqkongjian.png", text: "QQ空间" }, { src: "/Common/Recommendation/qq.png", text: "QQ好友" }, { src: "/Common/Recommendation/zhifubaoshenghuoquan.png", text: "生活圈" }, { src: "/Common/Recommendation/zhifubao.png", text: "支付宝好友" }, { src: "/Common/Recommendation/shuaxin.png", text: "刷新" }]
  },
  goBack: function goBack() {
    _system2.default.back();
  },
  showContent: function showContent(num) {
    this.type = 'content_' + num;
  },
  showShare: function showShare() {
    this.showSharePanel = true;
  },
  hideShare: function hideShare() {
    this.showSharePanel = false;
  },
  share: function share() {
    _service2.default.share({
      shareType: 0,
      title: '标题',
      summary: '摘要',
      targetUrl: 'https://www.baidu.com/',
      platforms: ["WEIXIN"],
      success: function success(data) {
        console.log('handling success');
      },
      fail: function fail(data, code) {
        console.log('handling fail, code = ' + code);
      }
    });
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