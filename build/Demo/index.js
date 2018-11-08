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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ({

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(130)
__webpack_require__(134)
var $app_template$ = __webpack_require__(138)
var $app_style$ = __webpack_require__(139)
var $app_script$ = __webpack_require__(140)

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

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(131)
var $app_style$ = __webpack_require__(132)
var $app_script$ = __webpack_require__(133)

$app_define$('@app-component/appointment-time', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 131:
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
        "title"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "取消"
              },
              "events": {
                "click": "cancelHandler"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "selectTimeTip"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "选择用车时间"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "起点当地时间"
              }
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
                "value": "确定"
              },
              "style": {
                "color": "#FFA500"
              },
              "events": {
                "click": "confirmHandler"
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
            "date"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "日期"
              }
            },
            {
              "type": "select",
              "attr": {},
              "events": {
                "change": "dateChange"
              },
              "children": [
                {
                  "type": "option",
                  "attr": {
                    "value": function () {return this.$item},
                    "content": function () {return this.$item}
                  },
                  "repeat": function () {return this.dateList}
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "hour"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "时间"
              }
            },
            {
              "type": "select",
              "attr": {},
              "events": {
                "change": "hourChange"
              },
              "children": [
                {
                  "type": "option",
                  "attr": {
                    "value": function () {return this.$item},
                    "content": function () {return this.$item}
                  },
                  "repeat": function () {return this.hourList}
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "minute"
          ],
          "children": [
            {
              "type": "select",
              "attr": {},
              "events": {
                "change": "minuteChange"
              },
              "children": [
                {
                  "type": "option",
                  "attr": {
                    "value": function () {return this.$item},
                    "content": function () {return this.$item}
                  },
                  "repeat": function () {return this.minuteList}
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

/***/ 132:
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "display": "flex",
    "justifyContent": "flex-start",
    "alignContent": "flex-start",
    "flexDirection": "column",
    "width": "100%",
    "height": "100%"
  },
  ".title": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignContent": "space-between"
  },
  ".selectTimeTip": {
    "display": "flex",
    "flexDirection": "column"
  },
  ".content": {
    "display": "flex",
    "justifyContent": "space-between",
    "alignContent": "space-between"
  },
  "select": {
    "marginLeft": "20px"
  }
}

/***/ }),

/***/ 133:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    data: function data() {
        return {
            dateList: [],
            hourList: [],
            minuteList: [],
            dateIndex: 0,
            hourIndex: 0,
            minuteIndex: 0
        };
    },

    onInit: function onInit() {
        this.dateIndex = 0;
        var date = new Date();
        var date1 = date.getMonth() + 1 + "月" + date.getDate() + "日 " + this.changeDayTo(date.getDay());
        this.dateList = [];
        this.dateList.splice(this.dateList.length, 0, date1);
        var hour = date.getHours();
        this.hourList = [];
        this.getRestHour(hour);
        var minute = date.getMinutes();
        this.minuteList = [];
        this.getRestMinute(date.getMinutes());
        var nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        date1 = nextDay.getMonth() + 1 + "月" + nextDay.getDate() + "日 " + this.changeDayTo(nextDay.getDay());
        this.dateList.splice(this.dateList.length, 0, date1);
        nextDay.setDate(nextDay.getDate() + 1);
        date1 = nextDay.getMonth() + 1 + "月" + nextDay.getDate() + "日 " + this.changeDayTo(nextDay.getDay());
        this.dateList.splice(this.dateList.length, 0, date1);
    },
    getRestHour: function getRestHour(hour) {
        this.hourList = [];
        var arr = [];
        for (var i = hour; i <= 23; i++) {
            arr.splice(arr.length, 0, i + "点");
        }
        this.hourList = this.hourList.concat(arr);
    },
    getRestMinute: function getRestMinute(minute) {
        this.minuteList = [];
        minute = Math.floor(minute / 10 + 1) * 10;
        var arr = [];
        for (var i = minute; i <= 60;) {
            arr.splice(arr.length, 0, i + "分");
            i += 10;
        }
        this.minuteList = this.minuteList.concat(arr);
    },
    changeDayTo: function changeDayTo(num) {
        var str = "";
        switch (num) {
            case 0:
                str = "星期日";
                break;
            case 1:
                str = "星期一";
                break;
            case 2:
                str = "星期二";
                break;
            case 3:
                str = "星期三";
                break;
            case 4:
                str = "星期四";
                break;
            case 5:
                str = "星期五";
                break;
            case 6:
                str = "星期六";
                break;
            default:
                break;
        }
        return str;
    },
    dateChange: function dateChange(res) {
        var index = this.dateList.indexOf(res.newValue);
        this.dateIndex = index;
        if (index == 0) {
            var date = new Date();
            var hour = date.getHours();
            var minute = date.getMinutes();
            this.getRestHour(hour);
            this.getRestMinute(minute);
        } else {
            this.getOtherHour();
            this.getOtherMinute();
        }
    },
    getOtherHour: function getOtherHour() {
        this.hourList = [];
        for (var i = 0; i <= 23; i++) {
            this.hourList.splice(this.hourList.length, 0, i + "点");
        }
    },
    getOtherMinute: function getOtherMinute() {
        this.minuteList = [];
        for (var i = 10; i <= 60;) {
            this.minuteList.splice(this.minuteList.length, 0, i + "分");
            i += 10;
        }
    },
    hourChange: function hourChange(res) {
        var index = this.hourList.indexOf(res.newValue);
        this.hourIndex = index;
        if (index == 0 && this.dateIndex == 0) {
            var date = new Date();
            var minute = date.getMinutes();
            this.getRestMinute(minute);
        } else {
            this.getOtherMinute();
        }
    },
    minuteChange: function minuteChange(res) {
        var index = this.minuteList.indexOf(res.newValue);
        this.minuteInde = index;
    },
    cancelHandler: function cancelHandler() {
        this.$dispatch('AppointmentTimeV', { params: { "handler": "cancel" } });
    },
    confirmHandler: function confirmHandler() {
        this.$dispatch('AppointmentTimeV', { params: { "handler": "confirm", "date": this.dateList[this.dateIndex], "hour": this.hourList[this.hourIndex], "minute": this.minuteList[this.minuteIndex] } });
    }

};}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(135)
var $app_style$ = __webpack_require__(136)
var $app_script$ = __webpack_require__(137)

$app_define$('@app-component/user-panel', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "userInformationPanel"
  ],
  "style": {
    "paddingTop": "40px"
  },
  "events": {
    "click": "panelClickHandler"
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "part",
        "partUser"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Common/user.png"
          },
          "classList": [
            "panel-image"
          ],
          "style": {
            "width": "100px"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "134*****604"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "part",
        "commonPart"
      ],
      "events": {
        "click": "GoToUserPage"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Common/normalUser.png"
          },
          "classList": [
            "panel-image"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "普通用户 >"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "part",
        "partList"
      ],
      "children": [
        {
          "type": "list",
          "attr": {},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "productLeft"
              },
              "classList": [
                "content-item"
              ],
              "events": {
                "click": "GoToOrderPage"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/order.png"
                  },
                  "classList": [
                    "panel-image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "订单"
                  }
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "productLeft"
              },
              "classList": [
                "content-item"
              ],
              "events": {
                "click": "GoToSecurityCenterPage"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/safe.png"
                  },
                  "classList": [
                    "panel-image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "安全"
                  }
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "productLeft"
              },
              "classList": [
                "content-item"
              ],
              "events": {
                "click": "GoToWalletPage"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/wallet.png"
                  },
                  "classList": [
                    "panel-image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "钱包"
                  }
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "productLeft"
              },
              "classList": [
                "content-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/service.png"
                  },
                  "classList": [
                    "panel-image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "客服"
                  }
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "productLeft"
              },
              "classList": [
                "content-item"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/setting.png"
                  },
                  "classList": [
                    "panel-image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "设置"
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
        "part",
        "partBottom"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "btm"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/gift.png"
              },
              "classList": [
                "panel-image"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "推荐有奖"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "btm"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/worker.png"
              },
              "classList": [
                "panel-image"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "车主招募"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "btm"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/student.png"
              },
              "classList": [
                "panel-image"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "学生中心"
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
          "attr": {},
          "classList": [
            "divider"
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
            "value": "法律条款与计价规则>"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports = {
  ".userInformationPanel": {
    "width": "70%",
    "height": "100%",
    "top": "0px",
    "bottom": "0px",
    "left": "0px",
    "backgroundColor": "#ffffff",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignContent": "space-around"
  },
  ".commonPart": {
    "marginLeft": "140px"
  },
  ".partUser": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".partList": {
    "marginLeft": "60px"
  },
  ".panel-image": {
    "width": "50px"
  },
  ".content-item": {
    "paddingBottom": "50px"
  },
  ".partBottom": {
    "display": "flex",
    "alignContent": "flex-start",
    "justifyContent": "space-between"
  },
  ".btm": {
    "width": "25%"
  },
  ".divider": {
    "width": "100%",
    "height": "1px",
    "backgroundColor": "rgba(0,0,0,1)"
  }
}

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {};
  },
  panelClickHandler: function panelClickHandler() {},
  GoToUserPage: function GoToUserPage() {
    _system2.default.push({
      uri: '/CommonUser'
    });
  },
  GoToOrderPage: function GoToOrderPage() {
    _system2.default.push({
      uri: '/Order'
    });
  },
  GoToSecurityCenterPage: function GoToSecurityCenterPage() {
    _system2.default.push({
      uri: '/SecurityCenter'
    });
  },
  GoToWalletPage: function GoToWalletPage() {
    _system2.default.push({
      uri: '/Wallet'
    });
  }
};}

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "tutorial-page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "title-information"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "title-information-item"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/icon-user.png"
              },
              "classList": [
                "title-image",
                "icon-user",
                "title-information-item"
              ],
              "events": {
                "click": "showPanel"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "title-information-item"
          ],
          "events": {
            "click": "GoAddressList"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.currentCity}
              }
            },
            {
              "type": "image",
              "attr": {
                "src": "/Common/icon_down.png"
              },
              "classList": [
                "title-image"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "title-information"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/icon-message.png"
              },
              "classList": [
                "title-image"
              ],
              "events": {
                "click": "messageClick"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "title-information"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/icon-scan.png"
              },
              "classList": [
                "title-image"
              ],
              "events": {
                "click": "openScan"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "tabs",
      "attr": {},
      "style": {
        "height": "80px",
        "marginLeft": "10px"
      },
      "children": [
        {
          "type": "tab-bar",
          "attr": {
            "mode": "scrollable"
          },
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "安全指南"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showSafePage"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "快车"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showMap"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "豪华车"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showLuxury"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "礼橙专车"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showOrange"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "顺风车"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showShunFeng"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "出租车"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showTaxi"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "代驾"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showDriving"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "公交"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showBus"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "单车"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showBike"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "二手车"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showSecond"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "自驾租车"
              },
              "classList": [
                "title-item"
              ],
              "events": {
                "click": "showSelf"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "map",
      "attr": {
        "id": "map",
        "latitude": function () {return this.latitude},
        "longitude": function () {return this.longitude},
        "scale": function () {return this.scale},
        "coordtype": function () {return this.coordtype},
        "showmylocation": function () {return this.showmylocation},
        "markers": function () {return this.markers},
        "controls": function () {return this.controls},
        "show": function () {return this.showMap}
      },
      "id": "map",
      "style": {
        "width": "100%",
        "height": "80%"
      },
      "events": {
        "loaded": "loaded",
        "callouttap": "callouttap",
        "regionchange": "regionchange",
        "controltap": "controltap",
        "markertap": "markerTap"
      }
    },
    {
      "type": "div",
      "attr": {
        "show": function () {return this.otherPage}
      },
      "classList": [
        "otherPage"
      ],
      "style": {
        "width": "100%",
        "height": "80%"
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.otherPageMessage}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {
        "id": "information"
      },
      "classList": [
        "information"
      ],
      "events": {
        "swipe": "swipeHandler"
      },
      "id": "information",
      "style": {
        "height": function () {return this.panelHeight}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "tipInformation"
          ],
          "style": {
            "display": "flex",
            "flexDirection": "column"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/navigation.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "请勿让未成年人独自乘车，需由监护人陪同"
                  }
                }
              ]
            },
            {
              "type": "input",
              "attr": {
                "type": "button",
                "value": "查看详情"
              },
              "events": {
                "click": "showDetail"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "appointment"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "children": [
                {
                  "type": "input",
                  "attr": {
                    "type": "button",
                    "value": "现在"
                  },
                  "classList": [
                    "nowTime"
                  ],
                  "events": {
                    "click": "GoToCanvas"
                  }
                },
                {
                  "type": "input",
                  "attr": {
                    "type": "button",
                    "value": "预约"
                  },
                  "classList": [
                    "nowTime"
                  ],
                  "events": {
                    "click": "appointmentTimeShow"
                  }
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
                    "value": function () {return this.appointmentTime}
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
            "address"
          ],
          "children": [
            {
              "type": "input",
              "attr": {
                "type": "button",
                "value": function () {return this.currentAddress}
              },
              "classList": [
                "startAddress"
              ]
            },
            {
              "type": "input",
              "attr": {
                "type": "button",
                "value": "您要去哪儿"
              },
              "classList": [
                "endAddress"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {
        "show": function () {return this.visibility}
      },
      "classList": [
        "mask"
      ],
      "events": {
        "click": "hidePanel"
      },
      "children": [
        {
          "type": "user-panel",
          "attr": {}
        }
      ]
    },
    {
      "type": "div",
      "attr": {
        "show": function () {return this.appointmentTimeV}
      },
      "classList": [
        "appointmentTimeMask"
      ],
      "events": {
        "click": "appointmentTimeVHide"
      },
      "children": [
        {
          "type": "div",
          "attr": {
            "show": function () {return this.appointmentTimeV}
          },
          "classList": [
            "appointmentTime"
          ],
          "children": [
            {
              "type": "appointment-time",
              "attr": {},
              "events": {
                "appointmenttimev": "AppointmentVHandler"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = {
  ".tutorial-page": {
    "flex": 1,
    "flexDirection": "column",
    "width": "100%",
    "height": "100%"
  },
  ".title-information-item": {
    "width": "300px"
  },
  ".title-image": {
    "width": "40px",
    "marginLeft": "20px"
  },
  ".panel-image": {
    "width": "50px"
  },
  ".tab-bar": {
    "width": "100%"
  },
  ".title-item": {
    "height": "80px",
    "width": "160px",
    "textAlign": "center"
  },
  ".information": {
    "width": "100%",
    "height": "20%",
    "backgroundColor": "rgba(255,255,255,0.1)",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".address": {
    "display": "flex",
    "flexDirection": "column"
  },
  "input": {
    "backgroundColor": "rgba(255,255,255,0.1)",
    "borderRadius": "4px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "rgba(255,255,255,1)",
    "borderRightColor": "rgba(255,255,255,1)",
    "borderBottomColor": "rgba(255,255,255,1)",
    "borderLeftColor": "rgba(255,255,255,1)",
    "color": "rgba(0,0,0,0.5)",
    "fontSize": "26px"
  },
  ".mask": {
    "width": "100%",
    "height": "100%",
    "top": "0px",
    "bottom": "0px",
    "left": "0px",
    "position": "fixed",
    "visibility": "hidden",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  ".appointmentTimeMask": {
    "width": "100%",
    "height": "100%",
    "top": "0px",
    "bottom": "0px",
    "left": "0px",
    "position": "fixed",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  ".appointment": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center"
  },
  ".nowTime": {
    "borderRadius": "30px"
  },
  ".appointmentTime": {
    "width": "100%",
    "height": "50%",
    "bottom": "0px",
    "left": "0px",
    "backgroundColor": "#ffffff",
    "position": "fixed"
  }
}

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.barcode');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.file');

var _system6 = _interopRequireDefault(_system5);

var _system7 = $app_require$('@app-module/system.fetch');

var _system8 = _interopRequireDefault(_system7);

var _system9 = $app_require$('@app-module/system.websocketfactory');

var _system10 = _interopRequireDefault(_system9);

var _system11 = $app_require$('@app-module/system.prompt');

var _system12 = _interopRequireDefault(_system11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var POINT1 = { latitude: 39.9090371069, longitude: 116.3953853161 };
var POINT2 = { latitude: 39.9089550115, longitude: 116.3992842749 };
var currentLocation = {};
var MARKER = {
  id: 2,
  iconPath: '/Common/car.png',
  width: '60px',
  anchor: { x: 0.5, y: 0.5 },
  latitude: 39.9090371069,
  longitude: 116.3953853161
};
exports.default = {
  private: {
    scale: 18,
    timmer: null,

    showmylocation: true,
    markers: [{
      id: 1,
      iconPath: '/Common/icon-center.png',
      width: '60px',
      anchor: { x: 1, y: 1 },
      latitude: 39.9090371069,
      longitude: 116.3953853161,
      callout: {
        content: "2分钟后上车",
        color: "#FABC05",
        padding: "20px 5px 20px 5px",
        borderRadius: "30px",
        display: "always"
      }

    }],
    polylines: null,
    regioncontent: null,
    currentCity: "广州市",
    value: 11,
    controls: [{
      id: 1,
      position: { right: "15px", bottom: "300px", width: "70px" },
      iconPath: "/Common/icon-goback.png"
    }],
    index: 2,
    visibility: false,
    otherPage: false,
    showMap: true,
    otherPageMessage: "",
    panelHeight: "40%",
    currentAddress: "",
    centerLocation: {},
    appointmentTimeV: false,
    appointmentTime: ""
  },
  onInit: function onInit() {
    this.$on('AppointmentTimeV', this.AppointmentVHandler);
  },
  onShow: function onShow() {},
  controltap: function controltap(res) {
    this.value = "controltap";
    var that = this;
    if (currentLocation != null) {
      var marker = Object.assign({}, that.markers[0], { latitude: currentLocation.latitude, longitude: currentLocation.longitude });
      this.markers = that.markers.map(function (t) {
        return t.id === marker.id ? marker : t;
      });
    }
  },
  loaded: function loaded() {
    this.$element("map").moveToMyLocation();
    var that = this;

    this.$element('map').getCenterLocation({
      success: function success(res) {
        var marker = Object.assign({}, that.markers[0], { latitude: res.latitude, longitude: res.longitude });
        that.markers = that.markers.map(function (t) {
          return t.id === marker.id ? marker : t;
        });
        currentLocation.latitude = res.latitude + 10;
        currentLocation.longitude = res.longitude + 10;
        var point = { latitude: res.latitude, longitude: res.longitude };
        currentLocation.longitude = res.longitude;
        that.currentAddress = "当前位置 latitude: " + res.latitude + ",longitude: " + res.longitude;
        that.centerLocation = { latitude: res.latitude, longitude: res.longitude };
      }
    });
  },
  callouttap: function callouttap(res) {},
  getCenterLocation: function getCenterLocation() {},

  openScan: function openScan() {
    var that = this;
    _system4.default.scan({
      success: function success(data) {
        that.value = data.result;
      },
      fail: function fail(data, code) {
        that.value = 'handling fail, code = ' + code;
      }
    });
  },

  regionchange: function regionchange() {

    var that = this;

    this.$element('map').getCenterLocation({
      success: function success(res) {
        var marker = Object.assign({}, that.markers[0], { latitude: res.latitude, longitude: res.longitude });
        that.markers = that.markers.map(function (t) {
          return t.id === marker.id ? marker : t;
        });
        that.centerLocation = Object.assign({}, that.centerLocation, { latitude: res.latitude, longitude: res.longitude });
      }
    });

    this.$element('map').getRegion({
      success: function success(res) {
        var latitude = res.northeast.latitude - res.southwest.latitude;
        var longitude = res.northeast.longitude - res.southwest.longitude;
        clearInterval(that.timmer);
        that.timmer = setInterval(function () {
          var increaseOrNot = Math.round(Math.random());
          var currentLength = that.markers.length;
          if (increaseOrNot == 1) {
            var latitudeTemp = latitude * Math.random() + res.southwest.latitude;
            var longitudeTemp = longitude * Math.random() + res.southwest.longitude;
            var marker = Object.assign({}, MARKER, { id: that.index++, latitude: latitudeTemp, longitude: longitudeTemp });
            that.markers.splice(currentLength, 0, marker);
            var lat = latitudeTemp + 1;

            that.markerTap();
          } else {
            var decreaseIndex = Math.random() * currentLength + 1;
            var _marker = Object.assign({}, that.markers[decreaseIndex]);
            that.markers.splice(decreaseIndex, 1);
          }
        }, 2000);
      }
    });
  },
  markerTap: function markerTap() {
    var that = this;
    var latitudeTemp = void 0,
        longitudeTemp = void 0;
    this.$element('map').getRegion({
      success: function success(res) {
        var latitude = res.northeast.latitude - res.southwest.latitude;
        var longitude = res.northeast.longitude - res.southwest.longitude;
        latitudeTemp = res.northeast.latitude - latitude * Math.random();
        longitudeTemp = res.northeast.longitude - longitude * Math.random();
        that.$element("map").translateMarker({
          markerId: that.index - 1,
          destination: { latitude: latitudeTemp, longitude: longitudeTemp },
          autoRotate: false,
          duration: 10000,
          success: function success() {},
          fail: function fail() {}
        });
      }
    });
  },
  messageClick: function messageClick() {
    _system2.default.push({
      uri: '/DemoDetail'
    });
  },
  GoToCanvas: function GoToCanvas() {
    _system2.default.push({
      uri: '/Canvas'
    });
  },
  GoAddressList: function GoAddressList() {
    _system2.default.push({
      uri: "/AddressList",
      params: {
        currentCity: this.currentCity
      }
    });
  },
  swipeHandler: function swipeHandler(res) {
    var direction = res.direction;
    var pH = Number(this.panelHeight.split('%')[0]);
    if (direction == "up") {
      if (pH < 100) {
        pH += 50;
      } else {
        pH = 100;
      }
      this.panelHeight = pH + '%';
      this.value = pH;
      return;
    } else if (direction == "down") {
      if (pH > 90) {
        pH -= 50;
      } else {
        pH = 40;
      }
      this.panelHeight = pH + '%';
      this.value = pH;
      return;
    }
    return;
  },
  showPanel: function showPanel() {
    this.visibility = true;
  },
  hidePanel: function hidePanel() {
    this.visibility = false;
  },
  showSafePage: function showSafePage() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "安全指南";
  },
  showLuxury: function showLuxury() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "豪华车";
  },
  showOrange: function showOrange() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "礼橙专车";
  },
  showShunFeng: function showShunFeng() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "顺丰车";
  },
  showTaxi: function showTaxi() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "出租车";
  },
  showDriving: function showDriving() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "代驾";
  },
  showBus: function showBus() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "公交";
  },
  showBike: function showBike() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "单车";
  },
  showSecond: function showSecond() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "二手车";
  },
  showSelf: function showSelf() {
    this.otherPage = true;
    this.showMap = false;
    this.otherPageMessage = "自驾租车";
  },
  showMap: function showMap() {
    this.otherPage = false;
    this.showMap = true;
  },
  showDetail: function showDetail() {
    _system2.default.push({
      uri: '/DemoDetail'
    });
  },
  btnClickHandler: function btnClickHandler() {
    var that = this;
    _system6.default.readText({
      uri: '/Common/test.txt',
      success: function success(data) {
        that.value = data.text;
      },
      fail: function fail(data, code) {
        that.value = 'handling fail, code = ' + code;
      }
    });
  },
  appointmentTimeShow: function appointmentTimeShow() {
    this.appointmentTimeV = true;
  },
  AppointmentVHandler: function AppointmentVHandler(event) {
    this.appointmentTimeV = false;
    _system12.default.showToast({ message: event.detail.params });
    var message = event.detail.params;
    if (message.handler == "confirm") {
      this.appointmentTime = "预约时间:" + message.date + message.hour + message.minute;
    }
  },
  appointmentTimeVHide: function appointmentTimeVHide() {
    this.appointmentTimeV = false;
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