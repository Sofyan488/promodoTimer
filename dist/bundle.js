/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\n/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks.js */ \"./src/tasks.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n\n\n\n\ndocument.getElementById(\"start-btn\").addEventListener(\"click\", _timer_js__WEBPACK_IMPORTED_MODULE_0__.startTimer);\ndocument.getElementById(\"pause-btn\").addEventListener(\"click\", _timer_js__WEBPACK_IMPORTED_MODULE_0__.pauseTimer);\ndocument.getElementById(\"reset-btn\").addEventListener(\"click\", _timer_js__WEBPACK_IMPORTED_MODULE_0__.resetTimer);\n\n\ndocument.getElementById(\"short-btn\").addEventListener(\"click\", () => (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setMode)(\"short\"));\ndocument.getElementById(\"work-btn\").addEventListener(\"click\", () => (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setMode)(\"work\"));\ndocument.getElementById(\"long-btn\").addEventListener(\"click\", () => (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setMode)(\"long\"));\n\n\ndocument.getElementById(\"add-btn\").addEventListener(\"click\", _tasks_js__WEBPACK_IMPORTED_MODULE_1__.addTask);\n\n\n//# sourceURL=webpack://web-2-home-2/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask)\n/* harmony export */ });\nfunction addTask() {\r\n    const taskText = prompt(\"أدخل المهمة:\");\r\n    if (!taskText) return;\r\n\r\n    const taskElement = document.createElement(\"div\");\r\n    taskElement.textContent = taskText;\r\n    taskElement.classList.add(\"task\");\r\n\r\n    document.getElementById(\"tasks-container\").appendChild(taskElement);\r\n}\r\n\n\n//# sourceURL=webpack://web-2-home-2/./src/tasks.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pauseTimer: () => (/* binding */ pauseTimer),\n/* harmony export */   resetTimer: () => (/* binding */ resetTimer),\n/* harmony export */   setMode: () => (/* binding */ setMode),\n/* harmony export */   startTimer: () => (/* binding */ startTimer)\n/* harmony export */ });\nlet timer;\r\nlet timeLeft = 25 * 60; \r\nlet mode = \"work\"; \r\nconst progressBar = document.getElementById(\"progress-bar\");\r\n\r\nfunction updateTimerDisplay() {\r\n    const minutes = Math.floor(timeLeft / 60);\r\n    const seconds = timeLeft % 60;\r\n    document.getElementById(\"minutes\").textContent = String(minutes).padStart(2, \"0\");\r\n    document.getElementById(\"seconds\").textContent = String(seconds).padStart(2, \"0\");\r\n\r\n    progressBar.value = (timeLeft / (25 * 60)) * 100; \r\n}\r\n\r\nfunction startTimer() {\r\n    if (timer) return; \r\n    timer = setInterval(() => {\r\n        if (timeLeft > 0) {\r\n            timeLeft--;\r\n            updateTimerDisplay();\r\n        } else {\r\n            clearInterval(timer);\r\n            timer = null;\r\n            alert(\"الوقت انتهى! 🎉\");\r\n        }\r\n    }, 1000);\r\n}\r\n\r\nfunction pauseTimer() {\r\n    clearInterval(timer);\r\n    timer = null;\r\n}\r\n\r\nfunction resetTimer() {\r\n    clearInterval(timer);\r\n    timer = null;\r\n    timeLeft = mode === \"work\" ? 25 * 60 : mode === \"short\" ? 5 * 60 : 15 * 60;\r\n    updateTimerDisplay();\r\n}\r\n\r\nfunction setMode(newMode) {\r\n    mode = newMode;\r\n    resetTimer();\r\n}\r\n\n\n//# sourceURL=webpack://web-2-home-2/./src/timer.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeColor: () => (/* binding */ changeColor),\n/* harmony export */   updateTimer: () => (/* binding */ updateTimer)\n/* harmony export */ });\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.js */ \"./src/timer.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './notifications.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\n\r\n\r\nconst minutesCount = document.getElementById('minutes');\r\nconst secondsCount = document.getElementById('seconds');\r\nconst startButton = document.getElementById('start-btn');\r\nconst pauseButton = document.getElementById('pause-btn');\r\nconst resetButton = document.getElementById('reset-btn');\r\nconst workInput = document.getElementById('work-duration');\r\nconst breakInput = document.getElementById('break-duration');\r\nconst longBreakInput = document.getElementById('long-break-duration');\r\nconst workButton=document.getElementById('work-btn');\r\nconst shortButton=document.getElementById('short-btn');\r\nconst longButton=document.getElementById('long-btn');\r\nconst tasks=document.getElementById(\"tasks-container\");\r\nconst addButton=document.getElementById(\"add-btn\");\r\nconst progressBar=document.getElementById(\"progress-bar\")\r\nlet currentMode=\"work\";\r\n\r\nconst updateTimer=(time,startTime)=> {\r\n    const minutes = Math.floor(time / 60);\r\n    const seconds = time % 60;\r\n    minutesCount.textContent = String(minutes).padStart(2, '0');\r\n    secondsCount.textContent = String(seconds).padStart(2, '0');\r\n    const progress = (time / startTime) * 100;\r\n    progressBar.setAttribute(\"value\",progress) \r\n\r\n}\r\nconst changeColor=(isWorkSession)=> {\r\n    const mainContainer = document.querySelector(\".main-container\");\r\n    mainContainer.style.backgroundColor = isWorkSession ? \"rgb(29, 175, 61)\" : \"#1ba2ff\";\r\n    startButton.style.backgroundColor = isWorkSession ? \"rgb(141, 248, 150)\" : \"#67c1ff\";\r\n    pauseButton.style.backgroundColor = isWorkSession ? \"rgb(141, 248, 150)\" : \"#67c1ff\";\r\n    resetButton.style.backgroundColor = isWorkSession ? \"rgb(141, 248, 177)\" : \"#67c1ff\";\r\n    workButton.style.backgroundColor = isWorkSession ? \"rgb(154, 248, 141)\" : \"#67c1ff\";\r\n    shortButton.style.backgroundColor = isWorkSession ? \"rgb(141, 248, 189)\" : \"#67c1ff\";\r\n    longButton.style.backgroundColor = isWorkSession ? \"rgb(141, 248, 147)\" : \"#67c1ff\";\r\n    addButton.style.backgroundColor = isWorkSession ? \"rgb(141, 248, 147)\" : \"#67c1ff\";\r\n\r\n}\r\n\r\n\r\nstartButton.addEventListener('click', () => (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.startTimer)(updateTimer, changeColor, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './notifications.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\npauseButton.addEventListener('click', _timer_js__WEBPACK_IMPORTED_MODULE_0__.pauseTimer);\r\nresetButton.addEventListener('click', () => (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.resetTimer)(updateTimer));\r\n\r\nworkButton.addEventListener('click',()=>{(0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.changeMode)(\"work\",updateTimer,changeColor)\r\n    currentMode=\"work\"\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isWorkSession=true;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isBreak=false;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isLongBreak=false;\r\n})\r\nshortButton.addEventListener('click',()=>{;(0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.changeMode)(\"short\",updateTimer,changeColor)\r\n    currentMode=\"short\"\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isBreak=true;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isLongBreak=false;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isWorkSession=false;\r\n\r\n})\r\nlongButton.addEventListener('click',()=>{;(0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.changeMode)(\"long\",updateTimer,changeColor)\r\n    currentMode=\"long\"\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isBreak=false;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isLongBreak=true;\r\n    _timer_js__WEBPACK_IMPORTED_MODULE_0__.sessionState.isWorkSession=false;\r\n})\r\n\r\n\r\naddButton.addEventListener('click',()=>{\r\n    const newTask=document.createElement(\"input\")\r\n    const checkBox=document.createElement(\"input\")\r\n    const doneSpan=document.createElement(\"span\")\r\n    tasks.append(newTask);\r\n    tasks.append(checkBox);\r\n    tasks.append(doneSpan);\r\n    newTask.classList.add(\"task-inputs\");\r\n    checkBox.setAttribute(\"type\",\"checkBox\")\r\n    doneSpan.textContent=\"Done?\"\r\n})\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    workInput.value = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n    breakInput.value = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n    longBreakInput.value = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\n\r\n    (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setDurations)(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(), Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());\r\n    updateTimer(workInput.value*60)\r\n\r\n\r\n});\r\n\r\nworkInput.addEventListener('input', () => {\r\n    validateInput(workInput);\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(workInput.value);\r\n    (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setDurations)(workInput.value, breakInput.value, longBreakInput.value);\r\n    if(currentMode===\"work\"){\r\n        updateTimer(workInput.value*60)\r\n\r\n    }\r\n});\r\n\r\nbreakInput.addEventListener('input', () => {\r\n    validateInput(breakInput);\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(breakInput.value);\r\n    (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setDurations)(workInput.value, breakInput.value, longBreakInput.value);\r\n    if(currentMode===\"short\"){\r\n        updateTimer(breakInput.value*60)\r\n\r\n    }\r\n\r\n\r\n});\r\n\r\nlongBreakInput.addEventListener('input', () => {\r\n    validateInput(longBreakInput);\r\n    Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './settings.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(longBreakInput.value);\r\n    (0,_timer_js__WEBPACK_IMPORTED_MODULE_0__.setDurations)(workInput.value, breakInput.value, longBreakInput.value);\r\n    if(currentMode===\"long\"){\r\n        updateTimer(longBreakInput.value*60)\r\n\r\n    }\r\n\r\n});\r\n\r\n\r\nconst validateInput=(userInput)=> {\r\n    userInput.value = userInput.value.replace(/\\D/g, '');\r\n    if (userInput.value === \"\" || parseInt(userInput.value) < 1) {\r\n        userInput.value = 1; \r\n    }\r\n}\n\n//# sourceURL=webpack://web-2-home-2/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;