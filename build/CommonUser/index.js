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
/******/ 	return __webpack_require__(__webpack_require__.s = 161);
/******/ })
/************************************************************************/
/******/ ({

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(162)
var $app_style$ = __webpack_require__(163)
var $app_script$ = __webpack_require__(164)

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

/***/ 162:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "commonUserPage"
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
          "type": "text",
          "attr": {
            "value": "会员主页"
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "里程兑换"
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "part"
      ],
      "repeat": {
        "exp": function () {return this.mileages},
        "value": "item"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.item.url}
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "innerPart"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.item.information}
              }
            },
            {
              "type": "text",
              "attr": {},
              "children": [
                {
                  "type": "span",
                  "attr": {
                    "value": function () {return this.item.count}
                  },
                  "classList": [
                    "itemCount"
                  ]
                },
                {
                  "type": "span",
                  "attr": {
                    "value": "里程"
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

/***/ 163:
/***/ (function(module, exports) {

module.exports = {
  ".commonUserPage": {
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "flexDirection": "column"
  },
  ".pageTitle": {
    "display": "flex",
    "justifyContent": "center"
  },
  ".pageTitle>text": {
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
          "v": "pageTitle"
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
  ".title": {
    "fontSize": "38px",
    "fontWeight": "bold"
  },
  ".part": {
    "width": "100%",
    "height": "200px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#000000",
    "borderRightColor": "#000000",
    "borderBottomColor": "#000000",
    "borderLeftColor": "#000000"
  },
  ".innerPart": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center"
  },
  ".itemCount": {
    "color": "#F08121"
  }
}

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  data: {
    mileages: [{ url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 699 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 39 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 500 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 300 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 320 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 39 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 500 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 300 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 320 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 39 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 500 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 300 }, { url: '/Common/vip.png', information: '3个月亚马逊Prime会员权益', count: 320 }]
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