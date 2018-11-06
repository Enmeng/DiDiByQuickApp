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
    "doc-page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content"
      ],
      "events": {
        "longpress": "scaleCanvas"
      },
      "children": [
        {
          "type": "canvas",
          "attr": {
            "id": "newCanvas"
          },
          "classList": [
            "new_canvas"
          ],
          "id": "newCanvas"
        },
        {
          "type": "canvas",
          "attr": {
            "id": "secondCanvas"
          },
          "classList": [
            "new_canvas"
          ],
          "id": "secondCanvas"
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "next"
          },
          "events": {
            "click": "nextCanvas"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = {
  ".content": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "flex-start",
    "alignContent": "flex-start",
    "width": "100%",
    "height": "100%"
  },
  ".new_canvas": {
    "height": "600px",
    "width": "100%"
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

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.router');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    private: {
        drawComplete: false,
        mycanvas: null,
        cx: null
    },
    onInit: function onInit() {
        this.$page.setTitleBar({
            text: 'Canvas'
        });
    },
    onShow: function onShow() {
        if (!this.drawComplete) {
            this.drawCanvas();
        }
        this.draw();
    },
    drawCanvas: function drawCanvas() {
        var canvas = this.$element('newCanvas');
        this.mycanvas = canvas.getContext('2d');
        this.line(100, 80, 100, 480);
        this.line(700, 80, 700, 480);

        this.write("数量/个", 80, 60);
        this.write("月份", 710, 500);
        for (var i = 0; i < 11; i++) {
            this.line(100, 80 + i * 40, 700, 80 + i * 40);
            this.write(200 - i * 20, 80, 80 + i * 40);
        }
        this.wenrect();

        this.drawComplete = true;
    },
    line: function line(aX, aY, bX, bY) {
        this.mycanvas.beginPath();
        this.mycanvas.moveTo(aX, aY);
        this.mycanvas.lineTo(bX, bY);
        this.mycanvas.stroke();
    },
    rect: function rect(X, Y, width, height) {
        this.mycanvas.beginPath();
        this.mycanvas.fillStyle = "#abcdef";
        this.mycanvas.fillRect(X, Y, width, height);

        this.mycanvas.closePath();
    },
    wenrect: function wenrect() {
        var arr = [60, 90, 150, 130, 170, 190, 125, 175, 155, 165, 155, 145];

        for (var i = 0; i < 12; i++) {
            var width = 30;
            var height = arr[i] * 2;
            var X = 110 + i * 40 + i * 10;
            var Y = 480 - height;
            this.rect(X, Y, width, height);
            this.write(i + 1 + "月", 120 + i * 40 + i * 10, 500);
        }
    },
    write: function write(start, ox, oy) {
        this.mycanvas.beginPath();
        this.mycanvas.fillStyle = "black";
        this.mycanvas.fillText(start, ox, oy);
        this.mycanvas.closePath();
    },
    scaleCanvas: function scaleCanvas() {
        _system2.default.showToast({ message: "控件：放大canvas" });
        this.mycanvas.save();
        this.mycanvas.scale(2, 2);
    },
    draw: function draw() {
        var canvas = this.$element('secondCanvas');
        this.cx = canvas.getContext('2d');

        this.drawLine(100, 480, 700, 480, 0.5, '#999999');
        this.drawLine(100, 0, 100, 480, 0.5, '#999999');
        for (var i = 2; i <= 10; i = i + 2) {
            this.cx.fillText(i, 80, 480 - i * 40);
            this.drawLine(100, 480 - i * 40, 700, 480 - i * 40, 0.5, '#f0f0f0');
        }

        var name = ["a", "b", "c", "d"];
        for (var i = 1; i <= 4; i++) {
            this.cx.fillText(name[i - 1], i * 150 + 50, 490);
        }

        var color = ['#ffbfab', '#fee17b', '#effe87', '#c2f3a1', '#effe87'];
        var grades = [7, 8, 6, 10, 8];
        for (var i = 150, j = 0; j < 5; j++, i = i + 20) {
            this.drawLine(i, 480, i, this.g(grades[j]), 20, color[j]);
        }
        grades = [6, 7, 6, 9, 8];
        for (var i = 300, j = 0; j < 5; j++, i = i + 20) {
            this.drawLine(i, 480, i, this.g(grades[j]), 20, color[j]);
        }
        grades = [5, 7, 5, 3, 8];
        for (var i = 450, j = 0; j < 5; j++, i = i + 20) {
            this.drawLine(i, 480, i, this.g(grades[j]), 20, color[j]);
        }
        grades = [5, 7, 5, 7, 8];
        for (var i = 600, j = 0; j < 5; j++, i = i + 20) {
            this.drawLine(i, 480, i, this.g(grades[j]), 20, color[j]);
        }
    },
    g: function g(grade) {
        return 40 * grade;
    },
    drawLine: function drawLine(b_x, b_y, e_x, e_y, width, color) {
        this.cx.strokeStyle = color;
        this.cx.lineWidth = width;
        this.cx.beginPath();
        this.cx.moveTo(b_x, b_y);
        this.cx.lineTo(e_x, e_y);
        this.cx.closePath();
        this.cx.stroke();
    },
    nextCanvas: function nextCanvas() {
        _system4.default.push({
            uri: '/NextCanvas'
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