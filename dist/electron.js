/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main/electron.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/main/electron.ts":
/*!******************************!*\
  !*** ./app/main/electron.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

function _electron() {
  var data = __webpack_require__(/*! electron */ "electron");

  _electron = function _electron() {
    return data;
  };

  return data;
}

/**
 * @desc electron 主入口
 */
var path = __webpack_require__(/*! path */ "path");

var _require = __webpack_require__(/*! electron */ "electron"),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow,
    ipcRenderer = _require.ipcRenderer;

function isDev() {
  // webpack.DefinePlugin 定义的构建变量
  return "development" === 'development';
}

function createWindow() {
  //　创建浏览器窗口
  var mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true // 注入node模块

    }
  });
  mainWindow.webContents.openDevTools({
    mode: 'right'
  });

  if (isDev()) {
    mainWindow.loadURL("http://127.0.0.1:7001");
  } else {
    mainWindow.loadURL("file://".concat(path.join(__dirname, '../dist/index.html')));
  }
}

app.whenReady().then(function () {
  // app就绪的时候创建一个窗口
  createWindow(); // 监听activate事件，如果此时窗口数量为0的话，就创建窗口

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows.length === 0) createWindow();
  });
}); // 拼接一个根路径， getAppPath是主进程独有的方法

var ROOT_PATH = path.join(app.getAppPath(), '../'); // 监听渲染进程发的消息并回复

_electron().ipcMain.on('get-root-path', function (event, arg) {
  event.reply('reply-root-path', ROOT_PATH);
});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL21haW4vZWxlY3Ryb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJhcHAiLCJCcm93c2VyV2luZG93IiwiaXBjUmVuZGVyZXIiLCJpc0RldiIsInByb2Nlc3MiLCJjcmVhdGVXaW5kb3ciLCJtYWluV2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJ3ZWJQcmVmZXJlbmNlcyIsIm5vZGVJbnRlZ3JhdGlvbiIsIndlYkNvbnRlbnRzIiwib3BlbkRldlRvb2xzIiwibW9kZSIsImxvYWRVUkwiLCJqb2luIiwiX19kaXJuYW1lIiwid2hlblJlYWR5IiwidGhlbiIsIm9uIiwiZ2V0QWxsV2luZG93cyIsImxlbmd0aCIsIlJPT1RfUEFUSCIsImdldEFwcFBhdGgiLCJpcGNNYWluIiwiZXZlbnQiLCJhcmciLCJyZXBseSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBSkE7QUFDQTtBQUNBO0FBSUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFELENBQXBCOztBQUNBLGVBQTRDQSxtQkFBTyxDQUFDLDBCQUFELENBQW5EO0FBQUEsSUFBUUMsR0FBUixZQUFRQSxHQUFSO0FBQUEsSUFBYUMsYUFBYixZQUFhQSxhQUFiO0FBQUEsSUFBNEJDLFdBQTVCLFlBQTRCQSxXQUE1Qjs7QUFFQSxTQUFTQyxLQUFULEdBQWlCO0FBQ2I7QUFDQSxTQUFPQyxhQUFBLEtBQXlCLGFBQWhDO0FBQ0g7O0FBRUQsU0FBU0MsWUFBVCxHQUF3QjtBQUNwQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxJQUFJTCxhQUFKLENBQWtCO0FBQ2pDTSxTQUFLLEVBQUUsSUFEMEI7QUFFakNDLFVBQU0sRUFBRSxHQUZ5QjtBQUdqQ0Msa0JBQWMsRUFBRTtBQUNaQyxxQkFBZSxFQUFFLElBREwsQ0FDVTs7QUFEVjtBQUhpQixHQUFsQixDQUFuQjtBQVFBSixZQUFVLENBQUNLLFdBQVgsQ0FBdUJDLFlBQXZCLENBQW9DO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBQXBDOztBQUVBLE1BQUdWLEtBQUssRUFBUixFQUFZO0FBQ1JHLGNBQVUsQ0FBQ1EsT0FBWDtBQUNILEdBRkQsTUFFTTtBQUNGUixjQUFVLENBQUNRLE9BQVgsa0JBQTZCaEIsSUFBSSxDQUFDaUIsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLG9CQUFyQixDQUE3QjtBQUNIO0FBQ0o7O0FBRURoQixHQUFHLENBQUNpQixTQUFKLEdBQWdCQyxJQUFoQixDQUFxQixZQUFNO0FBQ3ZCO0FBQ0FiLGNBQVksR0FGVyxDQUd2Qjs7QUFDQUwsS0FBRyxDQUFDbUIsRUFBSixDQUFPLFVBQVAsRUFBbUIsWUFBWTtBQUMzQixRQUFJbEIsYUFBYSxDQUFDbUIsYUFBZCxDQUE0QkMsTUFBNUIsS0FBdUMsQ0FBM0MsRUFBK0NoQixZQUFZO0FBQzlELEdBRkQ7QUFHSCxDQVBELEUsQ0FTQTs7QUFDQSxJQUFNaUIsU0FBUyxHQUFHeEIsSUFBSSxDQUFDaUIsSUFBTCxDQUFVZixHQUFHLENBQUN1QixVQUFKLEVBQVYsRUFBNEIsS0FBNUIsQ0FBbEIsQyxDQUVBOztBQUNBQyxvQkFBUUwsRUFBUixDQUFXLGVBQVgsRUFBNEIsVUFBQ00sS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQ3hDRCxPQUFLLENBQUNFLEtBQU4sQ0FBWSxpQkFBWixFQUErQkwsU0FBL0I7QUFDSCxDQUZELEU7Ozs7Ozs7Ozs7OztBQzlDQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJlbGVjdHJvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL21haW4vZWxlY3Ryb24udHNcIik7XG4iLCIvKipcbiAqIEBkZXNjIGVsZWN0cm9uIOS4u+WFpeWPo1xuICovXG5cbmltcG9ydCB7IGlwY01haW4gfSBmcm9tIFwiZWxlY3Ryb25cIjtcblxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgeyBhcHAsIEJyb3dzZXJXaW5kb3csIGlwY1JlbmRlcmVyIH0gPSByZXF1aXJlKCdlbGVjdHJvbicpXG5cbmZ1bmN0aW9uIGlzRGV2KCkge1xuICAgIC8vIHdlYnBhY2suRGVmaW5lUGx1Z2luIOWumuS5ieeahOaehOW7uuWPmOmHj1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXaW5kb3coKSB7XG4gICAgLy/jgIDliJvlu7rmtY/op4jlmajnqpflj6NcbiAgICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgICAgICB3aWR0aDogMTIwMCxcbiAgICAgICAgaGVpZ2h0OiA4MDAsXG4gICAgICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUgLy8g5rOo5YWlbm9kZeaooeWdl1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scyh7bW9kZToncmlnaHQnfSk7XG5cbiAgICBpZihpc0RldigpKSB7XG4gICAgICAgIG1haW5XaW5kb3cubG9hZFVSTChgaHR0cDovLzEyNy4wLjAuMTo3MDAxYClcbiAgICB9ZWxzZSB7XG4gICAgICAgIG1haW5XaW5kb3cubG9hZFVSTChgZmlsZTovLyR7cGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL2Rpc3QvaW5kZXguaHRtbCcpfWApXG4gICAgfVxufVxuXG5hcHAud2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgLy8gYXBw5bCx57uq55qE5pe25YCZ5Yib5bu65LiA5Liq56qX5Y+jXG4gICAgY3JlYXRlV2luZG93KCk7XG4gICAgLy8g55uR5ZCsYWN0aXZhdGXkuovku7bvvIzlpoLmnpzmraTml7bnqpflj6PmlbDph4/kuLow55qE6K+d77yM5bCx5Yib5bu656qX5Y+jXG4gICAgYXBwLm9uKCdhY3RpdmF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoIEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cy5sZW5ndGggPT09IDAgKSBjcmVhdGVXaW5kb3coKTtcbiAgICB9KVxufSlcblxuLy8g5ou85o6l5LiA5Liq5qC56Lev5b6E77yMIGdldEFwcFBhdGjmmK/kuLvov5vnqIvni6zmnInnmoTmlrnms5VcbmNvbnN0IFJPT1RfUEFUSCA9IHBhdGguam9pbihhcHAuZ2V0QXBwUGF0aCgpLCAnLi4vJyk7XG5cbi8vIOebkeWQrOa4suafk+i/m+eoi+WPkeeahOa2iOaBr+W5tuWbnuWkjVxuaXBjTWFpbi5vbignZ2V0LXJvb3QtcGF0aCcsIChldmVudCwgYXJnKSA9PiB7XG4gICAgZXZlbnQucmVwbHkoJ3JlcGx5LXJvb3QtcGF0aCcsIFJPT1RfUEFUSClcbn0pIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9