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
/******/ 	return __webpack_require__(__webpack_require__.s = 153);
/******/ })
/************************************************************************/
/******/ ({

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(154)
var $app_style$ = __webpack_require__(155)
var $app_script$ = __webpack_require__(156)

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

/***/ 154:
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
            "id": "thirdCanvas"
          },
          "classList": [
            "new_canvas"
          ],
          "id": "thirdCanvas"
        },
        {
          "type": "canvas",
          "attr": {
            "id": "fourthCanvas"
          },
          "classList": [
            "new_canvas"
          ],
          "id": "fourthCanvas"
        }
      ]
    }
  ]
}

/***/ }),

/***/ 155:
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

/***/ 156:
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
        thirdCanvas: null,
        timmer: null,
        thirdCanvasData: null,
        currentValue: 0
    },
    onInit: function onInit() {
        this.$page.setTitleBar({
            text: 'Canvas'
        });
    },
    onShow: function onShow() {
        if (!this.drawComplete) {
            this.drawCanvas();
            var barData = [400, 350, 110, 60, 250, 450, 280, 200, 260, 300];
            var length = 10;
            this.drawBarGraph(100, 0, 700, 500, 10, 25, barData, length);
        }
    },
    drawCanvas: function drawCanvas() {
        this.thirdCanvasData = [320, 160, 280, 360, 290];
        var canvas = this.$element('thirdCanvas');
        this.thirdCanvas = canvas.getContext('2d');
        this.thirdCanvas.beginPath();
        this.thirdCanvas.lineWidth = 1;
        var width = 600;
        var height = 500;
        var padding = 50;

        this.thirdCanvas.moveTo(100, 0);
        this.thirdCanvas.lineTo(100, 480);
        this.thirdCanvas.stroke();

        var data = [50, 150, 250, 350, 450, 550];
        this.thirdCanvas.moveTo(100, 480);
        this.thirdCanvas.lineTo(700, 480);
        this.thirdCanvas.stroke();
        var yNumber = 10;
        var yLength = 400 / 10;
        var xLength = 600 / data.length;

        this.thirdCanvas.beginPath();
        this.thirdCanvas.textAlign = 'center';
        this.thirdCanvas.fillStyle = '#000000';
        this.thirdCanvas.strokeStyle = '#000000';

        for (var i = 1; i < data.length; i++) {
            this.thirdCanvas.moveTo(data[i] + 25, 480);
            this.thirdCanvas.lineTo(data[i] + 25, 475);
            this.thirdCanvas.stroke();
            this.thirdCanvas.fillText(i, data[i] + 25, 490);
        }

        this.thirdCanvas.strokeStyle = "#6C6767";
        for (var i = 0; i <= yNumber; i++) {
            var ylen = yLength * i;
            this.thirdCanvas.moveTo(100, 480 - yLength * i);
            this.thirdCanvas.lineTo(700, 480 - yLength * i);
            this.thirdCanvas.stroke();
            this.thirdCanvas.fillText(ylen, 85, 480 - yLength * i);
        }

        var that = this;
        this.timmer = setInterval(function () {
            if (that.currentValue <= 1) {
                that.currentValue += 0.01;
                that.drawAnimation(data);
            } else {
                clearInterval(that.timmer);
                return;
            }
        }, 100);


        this.drawComplete = true;
    },
    drawAnimation: function drawAnimation(data) {
        this.thirdCanvas.fillStyle = "#5212DE";
        this.thirdCanvas.strokeStyle = "#5212DE";
        for (var i = 0; i < this.thirdCanvasData.length; i++) {
            this.thirdCanvas.fillRect(data[i] + 100, 480 - this.currentValue * this.thirdCanvasData[i], 50, this.currentValue * this.thirdCanvasData[i]);
        }
    },
    drawBarGraph: function drawBarGraph(paddingLeft, paddingTop, width, height, xNumber, yNumber, barData, length) {
        var canvas = this.$element('fourthCanvas');
        var fourthCanvas = canvas.getContext('2d');

        fourthCanvas.textAlign = "center";
        fourthCanvas.strokeStyle = "#000000";

        this.drawX(fourthCanvas, paddingLeft, paddingTop, width, height, xNumber);

        this.drawY(fourthCanvas, paddingLeft, paddingTop, width, height, yNumber);

        this.drawRect(fourthCanvas, paddingLeft, paddingTop, width, height, xNumber, yNumber, barData, length);
    },
    drawX: function drawX(fourthCanvas, paddingLeft, paddingTop, width, height, xNumber) {
        var xy = paddingTop + height;

        var xLen = width / xNumber;
        fourthCanvas.beginPath();
        fourthCanvas.moveTo(paddingLeft, xy);
        fourthCanvas.lineTo(paddingLeft + width, xy);
        fourthCanvas.stroke();

        for (var i = 1; i <= xNumber; i++) {
            fourthCanvas.moveTo(paddingLeft + xLen * i - xLen / 2, xy);
            fourthCanvas.lineTo(paddingLeft + xLen * i - xLen / 2, xy - 5);
            fourthCanvas.stroke();
            fourthCanvas.fillText(i, paddingLeft + xLen * i - xLen / 2, xy + 25);
        }
        fourthCanvas.closePath();
    },
    drawY: function drawY(fourthCanvas, paddingLeft, paddingTop, width, height, yNumber) {
        var yLen = height / yNumber;

        fourthCanvas.beginPath();
        fourthCanvas.moveTo(paddingLeft, paddingTop);
        fourthCanvas.lineTo(paddingLeft, paddingTop + height);
        fourthCanvas.stroke();

        for (var i = 0; i <= yNumber; i++) {
            fourthCanvas.moveTo(paddingLeft, paddingTop + height - i * yLen);
            fourthCanvas.lineTo(paddingLeft + width, paddingTop + height - i * yLen);
            fourthCanvas.stroke();
            fourthCanvas.fillText(i * yLen, paddingLeft - 15, paddingTop + height - i * yLen);
        }
        fourthCanvas.closePath();
    },
    drawRect: function drawRect(fourthCanvas, paddingLeft, paddingTop, width, height, xNumber, yNumber, barData, length) {
        _system2.default.showToast({ message: "length2" + length });
        var xLen = width / xNumber;
        var xy = paddingTop + height;
        var rectWidth = xLen / 2;
        for (var i = 0; i < length; i++) {
            var grad = fourthCanvas.createLinearGradient(paddingLeft + xLen * (i + 1) - xLen / 2, xy, paddingLeft + xLen * (i + 1) - xLen / 2, xy - barData[i]);
            grad.addColorStop(0, "#E8BF0F");
            grad.addColorStop(1, "#ED5A03");
            fourthCanvas.fillStyle = grad;
            fourthCanvas.beginPath();
            fourthCanvas.fillRect(paddingLeft + xLen * i + rectWidth, xy - barData[i], rectWidth, barData[i]);
            fourthCanvas.closePath();
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