(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hall-plan"] = factory();
	else
		root["HallPlan"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/assets/theatre-screen.svg":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/assets/theatre-screen.svg ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg id=\"Слой_2\" data-name=\"Слой 2\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 694 60\"><defs><style>.cls-1{fill:url(#linear-gradient);}.cls-2{fill:#d9d9d9;}.cls-3{fill:#e6e6e6;}</style><linearGradient id=\"linear-gradient\" x1=\"346.5\" y1=\"60\" x2=\"346.5\" y2=\"16.89\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#fff\"/><stop offset=\"1\" stop-color=\"#e6e6e6\"/></linearGradient></defs><title>Screen</title><path class=\"cls-1\" d=\"M22,43,17,60H676l-4-19S457,15,338,17,22,43,22,43Z\"/><path class=\"cls-2\" d=\"M495.88,27.34c80.23,3.88,167,14.67,177.74,16a2.26,2.26,0,0,0,1.9-.67l17.87-18.38a2.14,2.14,0,0,0-1.19-3.61c-16.34-2.23-79.51-10.39-162.91-15.59C436.24-.69,353.5,0,346.51.06s-88.75-.75-181.8,5.05C81.31,10.31,18.14,18.47,1.8,20.7A2.14,2.14,0,0,0,.61,24.31L18.48,42.69a2.26,2.26,0,0,0,1.9.67c10.71-1.35,97.51-12.14,177.74-16,77.62-3.76,144.46-3.06,148.39-3S418.26,23.58,495.88,27.34Z\"/><path class=\"cls-3\" d=\"M495,29.5C574.79,33.34,661.09,44,671.74,45.36a2.23,2.23,0,0,0,1.88-.66l17.77-18.19a2.12,2.12,0,0,0-1.18-3.58c-16.24-2.2-79.05-10.29-162-15.43-92.51-5.74-174.77-5.07-181.73-5s-88.24-.74-180.75,5C82.84,12.64,20,20.73,3.79,22.93a2.12,2.12,0,0,0-1.18,3.58L20.38,44.7a2.23,2.23,0,0,0,1.88.66C32.91,44,119.21,33.34,199,29.5c77.17-3.72,143.62-3,147.53-3S417.85,25.78,495,29.5Z\"/></svg>\n");

/***/ }),

/***/ "./src/hall-plan.scss":
/*!****************************!*\
  !*** ./src/hall-plan.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! exports provided: closest, addClass, removeClass, toggleClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
function closest(elem, selector) {
    if (elem === null) {
        return null;
    }
    if (elem.matches(selector)) {
        return elem;
    }
    if (!elem.parentNode || elem.parentNode.nodeType !== Node.ELEMENT_NODE) {
        return null;
    }
    return closest(elem.parentNode, selector);
}
function addClass(elem) {
    var _a;
    var tokens = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tokens[_i - 1] = arguments[_i];
    }
    if (elem.classList) {
        (_a = elem.classList).add.apply(_a, tokens);
    }
    else {
        var classes = elem.className.split(' ').filter(function (c) { return c.length > 0; });
        for (var _b = 0, tokens_1 = tokens; _b < tokens_1.length; _b++) {
            var token = tokens_1[_b];
            if (classes.indexOf(token) < 0) {
                classes.push(token);
            }
        }
        elem.className = classes.join(' ');
    }
}
function removeClass(elem) {
    var _a;
    var tokens = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        tokens[_i - 1] = arguments[_i];
    }
    if (elem.classList) {
        (_a = elem.classList).remove.apply(_a, tokens);
    }
    else {
        var classes = elem.className.split(' ').filter(function (name) { return name.length > 0; });
        for (var _b = 0, tokens_2 = tokens; _b < tokens_2.length; _b++) {
            var token = tokens_2[_b];
            var i = classes.indexOf(token);
            if (i >= 0) {
                classes.splice(i, 1);
            }
        }
        elem.className = classes.join(' ');
    }
}
function toggleClass(elem, token) {
    if (elem.classList && elem.classList.toggle) {
        return elem.classList.toggle(token);
    }
    else {
        var classes = elem.className.split(' ').filter(function (name) { return name.length > 0; });
        var i = classes.indexOf(token);
        if (i >= 0) {
            classes.splice(i, 1);
        }
        else {
            classes.push(token);
        }
        elem.className = classes.join(' ');
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _raw_loader_assets_theatre_screen_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader?!./assets/theatre-screen.svg */ "./node_modules/raw-loader/dist/cjs.js!./src/assets/theatre-screen.svg");
/* harmony import */ var _hall_plan_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hall-plan.scss */ "./src/hall-plan.scss");
/* harmony import */ var _hall_plan_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hall_plan_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



/**
 * Hall plan widget.
 */
var HallPlan = /** @class */ (function () {
    function HallPlan(options) {
        var _this = this;
        this.activeSeatPos = null;
        this.handleMouseClick = function (event) {
            var seatElem = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["closest"])(event.target, '.hall-plan__seat');
            if (seatElem) {
                var seatPos = {
                    row: +seatElem.dataset.row,
                    seat: +seatElem.dataset.seat,
                };
                var handler = event.type === 'click' ? _this.onSeatClick : _this.onSeatContextMenu;
                if (_this.selectable && event.type === 'click') {
                    _this.setSeatActive(seatPos);
                }
                if (handler) {
                    handler.call(_this, seatPos, event);
                }
            }
        };
        this.scheme = options.scheme;
        this.seatDirection = options.scheme.seatDirection || 'ltr';
        this.seatStates = options.scheme.seatStates || {};
        this.rowNumbersLeft = options.rowNumbersLeft === undefined ? true : options.rowNumbersLeft;
        this.rowNumbersRight = options.rowNumbersRight === undefined ? true : options.rowNumbersRight;
        this.selectable = !!options.selectable;
        this.screenText = options.screenText !== undefined ? options.screenText : 'Screen';
        this.showScreen = options.showScreen !== undefined ? options.showScreen : true;
        this.onSeatClick = options.onSeatClick;
        this.onSeatContextMenu = options.onSeatContextMenu;
        if (options.el) {
            this.elem = (typeof options.el === 'string' || options.el instanceof String)
                ? document.querySelector(options.el)
                : options.el;
            this.elemIsOur = false;
        }
        else {
            this.elem = document.createElement('div');
            this.elemIsOur = true;
        }
        this.bindEventHandlers();
    }
    /**
     * Releases the resources taken by the widget.
     */
    HallPlan.prototype.destroy = function () {
        this.unbindEventHandlers();
        if (this.elemIsOur && this.elem.parentNode) {
            this.elem.parentNode.removeChild(this.elem);
        }
        else if (!this.elemIsOur) {
            this.elem.className = this.elem.className.replace('hall-plan', '');
        }
        this.elem.innerHTML = '';
        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(this.elem, 'hall-plan', 'hall-plan--rtl', 'hall-plan--ltr');
    };
    /**
     * Returns number of rows.
     */
    HallPlan.prototype.getRowCount = function () {
        return this.scheme.rows.length;
    };
    /**
     * Returns number of seats in the row.
     *
     * @param {integer} row Row number starting from 1.
     */
    HallPlan.prototype.getSeatCount = function (row) {
        if (row <= 0 || row > this.getRowCount()) {
            throw new Error('Row number is out of range');
        }
        return this.scheme.rows[row - 1].reduce(function (count, seq) { return count + seq.seats; }, 0);
    };
    /**
     * Returns total number of seats in the hall.
     *
     * @return {integer} Number of seats in the hall.
     */
    HallPlan.prototype.getTotalSeatCount = function () {
        var count = 0;
        for (var i = 1; i <= this.getRowCount(); i++) {
            count += this.getSeatCount(i);
        }
        return count;
    };
    /**
     * Returns the list of the states of the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     */
    HallPlan.prototype.getSeatStates = function (row, seat) {
        var states = [];
        for (var _i = 0, _a = Object.keys(this.seatStates); _i < _a.length; _i++) {
            var stateName = _a[_i];
            for (var _b = 0, _c = this.seatStates[stateName]; _b < _c.length; _b++) {
                var seatPos = _c[_b];
                if (seatPos[0] === row && seatPos[1] === seat) {
                    states.push(stateName);
                    break;
                }
            }
        }
        return states;
    };
    /**
     * Sets the list of the states of the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string[]} states New state list.
     */
    HallPlan.prototype.setSeatStates = function (row, seat, states) {
        for (var _i = 0, _a = Object.keys(this.scheme.seatStates); _i < _a.length; _i++) {
            var stateName = _a[_i];
            if (states.indexOf(stateName)) {
                this.setSeatState(row, seat, stateName);
            }
            else {
                this.unsetSeatState(row, seat, stateName);
            }
        }
        this.updateAllSeatStates();
    };
    /**
     * Determines whether the seat has the specified state.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string} state New state name.
     */
    HallPlan.prototype.hasSeatState = function (row, seat, state) {
        var seats = this.scheme.seatStates[state];
        if (seats) {
            for (var _i = 0, seats_1 = seats; _i < seats_1.length; _i++) {
                var seatPos = seats_1[_i];
                if (seatPos[0] === row && seatPos[1] === seat) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Sets the state to the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string} state New state name.
     */
    HallPlan.prototype.setSeatState = function (row, seat, state) {
        if (!this.hasSeatState(row, seat, state)) {
            if (!this.scheme.seatStates[state]) {
                this.scheme.seatStates[state] = [];
            }
            this.scheme.seatStates[state].push([row, seat]);
            this.updateSeatStates(row, seat);
        }
    };
    /**
     * Unsets the state to the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string} state New state name.
     */
    HallPlan.prototype.unsetSeatState = function (row, seat, state) {
        var seats = this.scheme.seatStates[state];
        if (seats) {
            for (var i = 0; i < seats.length; i++) {
                var seatPos = this.scheme.seatStates[state][i];
                if (seatPos[0] === row && seatPos[1] === seat) {
                    seats.splice(i, 1);
                    if (seats.length === 0) {
                        delete this.scheme.seatStates[state];
                    }
                    this.updateSeatStates(row, seat);
                    break;
                }
            }
        }
    };
    /**
     * Toggles the state to the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string} state State name.
     */
    HallPlan.prototype.toggleSeatState = function (row, seat, state) {
        if (this.hasSeatState(row, seat, state)) {
            this.unsetSeatState(row, seat, state);
        }
        else {
            this.setSeatState(row, seat, state);
        }
    };
    /**
     * Returns the position of active (selected) seat or null if no seat is active.
     */
    HallPlan.prototype.getActiveSeat = function () {
        return this.activeSeatPos;
    };
    /**
     * Checks whether the seat at the specified position is active.
     */
    HallPlan.prototype.isSeatActive = function (seatPos) {
        if (this.activeSeatPos) {
            var _a = this.activeSeatPos, row = _a.row, seat = _a.seat;
            return row === seatPos.row && seat === seatPos.seat;
        }
        return false;
    };
    /**
     * Sets the seat active / inactive (i.e. selected or not).
     */
    HallPlan.prototype.setSeatActive = function (seatPos) {
        // Deactivate the former one
        if (!seatPos || !this.isSeatActive(seatPos)) {
            var formerSeatPos = this.getActiveSeat();
            if (formerSeatPos) {
                var row = formerSeatPos.row, seat = formerSeatPos.seat;
                var seatElem = this.elem.querySelector(".hall-plan__seat[data-row=\"" + row + "\"][data-seat=\"" + seat + "\"]");
                if (seatElem) {
                    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["removeClass"])(seatElem, 'hall-plan__seat--active');
                }
            }
        }
        // Activate the new one
        if (seatPos && !this.isSeatActive(seatPos)) {
            var row = seatPos.row, seat = seatPos.seat;
            var seatElem = this.elem.querySelector(".hall-plan__seat[data-row=\"" + row + "\"][data-seat=\"" + seat + "\"]");
            if (seatElem) {
                Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["addClass"])(seatElem, 'hall-plan__seat--active');
            }
        }
        // Update internal state
        this.activeSeatPos = seatPos ? __assign({}, seatPos) : null;
    };
    /**
     * Returns maximum seat count in row.
     */
    HallPlan.prototype.getMaxSeatCountInRow = function () {
        var max = 0;
        for (var i = 1; i <= this.getRowCount(); i++) {
            var count = this.getSeatCount(i);
            if (count > max) {
                max = count;
            }
        }
        return max;
    };
    /**
     * Renders the hall scheme as DOM.
     *
     * @return {HTMLDivElement} Root DOM element of the widget.
     */
    HallPlan.prototype.render = function () {
        var rowsElem = document.createElement('div');
        rowsElem.className = 'hall-plan__rows';
        for (var i = 1; i <= this.getRowCount(); i++) {
            var rowElem = document.createElement('div');
            rowElem.className = 'hall-plan__row';
            rowElem.dataset.row = i.toString();
            if (this.rowNumbersLeft) {
                var rowNumElem = document.createElement('div');
                rowNumElem.className = 'hall-plan__row-number';
                rowNumElem.textContent = i.toString();
                rowElem.appendChild(rowNumElem);
            }
            rowElem.appendChild(this.renderRowContent(i));
            if (this.rowNumbersRight) {
                var rowNumElem = document.createElement('div');
                rowNumElem.className = 'hall-plan__row-number';
                rowNumElem.textContent = i.toString();
                rowElem.appendChild(rowNumElem);
            }
            rowsElem.appendChild(rowElem);
        }
        var classes = ['hall-plan', "hall-plan--" + this.seatDirection];
        if (this.selectable) {
            classes.push('hall-plan--selectable');
        }
        if (this.selectable || this.onSeatClick || this.onSeatContextMenu) {
            classes.push('hall-plan--clickable');
        }
        _helpers__WEBPACK_IMPORTED_MODULE_2__["addClass"].apply(void 0, __spreadArrays([this.elem], classes));
        this.elem.innerHTML = '';
        if (this.showScreen) {
            this.elem.appendChild(this.renderScreen());
        }
        this.elem.appendChild(rowsElem);
        return this.elem;
    };
    HallPlan.prototype.renderScreen = function () {
        var wrap = document.createElement('div');
        wrap.className = 'hall-plan__screen-wrap';
        if (this.rowNumbersLeft) {
            var spacer = document.createElement('div');
            spacer.className = 'hall-plan__screen-spacer';
            wrap.appendChild(spacer);
        }
        var screen = document.createElement('div');
        screen.className = 'hall-plan__screen';
        screen.innerHTML = _raw_loader_assets_theatre_screen_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
        wrap.appendChild(screen);
        var text = document.createElement('div');
        text.className = 'hall-plan__screen-text';
        text.textContent = this.screenText;
        screen.appendChild(text);
        if (this.rowNumbersRight) {
            var spacer = document.createElement('div');
            spacer.className = 'hall-plan__screen-spacer';
            wrap.appendChild(spacer);
        }
        return wrap;
    };
    /**
     * @param {integer} row Row number starting from 1.
     */
    HallPlan.prototype.renderRowContent = function (row) {
        var rowElem = document.createElement('div');
        rowElem.className = 'hall-plan__row-content';
        var totalSpacing = this.getMaxSeatCountInRow();
        var cellWidth = (100 / totalSpacing).toFixed(4) + '%';
        var spacingRendered = 0;
        var seatNumber = 1;
        for (var _i = 0, _a = this.scheme.rows[row - 1]; _i < _a.length; _i++) {
            var seatSequence = _a[_i];
            // Render offsets as invisible seats holding space.
            // This method allows configuring sizes in CSS.
            var offset = seatSequence.offset || 0;
            spacingRendered += offset;
            for (var j = 0; j < offset; j++) {
                var spacerElem = document.createElement('div');
                spacerElem.className = 'hall-plan__spacer';
                spacerElem.style.width = cellWidth;
                rowElem.appendChild(spacerElem);
            }
            // Render seats
            var count = seatSequence.seats || 0;
            spacingRendered += count;
            for (var j = 0; j < count; j++) {
                var seatClasses = this.getSeatStates(row, seatNumber)
                    .map(function (state) { return 'hall-plan__seat--state_' + state; });
                if (this.activeSeatPos &&
                    this.activeSeatPos.row === row &&
                    this.activeSeatPos.seat === seatNumber) {
                    seatClasses.push('hall-plan__seat--active');
                }
                seatClasses.unshift('hall-plan__seat');
                var spacerElem = document.createElement('div');
                spacerElem.className = 'hall-plan__spacer';
                spacerElem.style.width = cellWidth;
                var seatElem = document.createElement('div');
                seatElem.className = seatClasses.join(' ');
                seatElem.dataset.row = row.toString();
                seatElem.dataset.seat = seatNumber.toString();
                seatElem.textContent = seatNumber.toString();
                spacerElem.appendChild(seatElem);
                rowElem.appendChild(spacerElem);
                seatNumber++;
            }
        }
        // Render spacing at the end
        var spacingLeft = totalSpacing - spacingRendered;
        for (var j = 0; j < spacingLeft; j++) {
            var spacerElem = document.createElement('div');
            spacerElem.className = 'hall-plan__spacer';
            spacerElem.style.width = cellWidth;
            rowElem.appendChild(spacerElem);
        }
        return rowElem;
    };
    HallPlan.prototype.updateAllSeatStates = function () {
        var seatNodes = this.elem.querySelectorAll('.hall-plan__seat');
        var seatElems = Array.prototype.slice.call(seatNodes);
        for (var _i = 0, seatElems_1 = seatElems; _i < seatElems_1.length; _i++) {
            var seatElem = seatElems_1[_i];
            var row = parseInt(seatElem.dataset.row, 10);
            var seat = parseInt(seatElem.dataset.seat, 10);
            var seatClasses = this.getSeatStates(row, seat)
                .map(function (state) { return 'hall-plan__seat--state_' + state; });
            seatClasses.unshift('hall-plan__seat');
            seatElem.className = seatClasses.join(' ');
        }
    };
    HallPlan.prototype.updateSeatStates = function (row, seat) {
        var seatElem = this.elem.querySelector(".hall-plan__seat[data-row=\"" + row + "\"][data-seat=\"" + seat + "\"]");
        if (seatElem) {
            var seatClasses = this.getSeatStates(row, seat)
                .map(function (state) { return 'hall-plan__seat--state_' + state; });
            seatClasses.unshift('hall-plan__seat');
            seatElem.className = seatClasses.join(' ');
        }
    };
    HallPlan.prototype.bindEventHandlers = function () {
        this.elem.addEventListener('click', this.handleMouseClick);
        this.elem.addEventListener('contextmenu', this.handleMouseClick);
    };
    HallPlan.prototype.unbindEventHandlers = function () {
        this.elem.removeEventListener('click', this.handleMouseClick);
        this.elem.removeEventListener('contextmenu', this.handleMouseClick);
    };
    return HallPlan;
}());
/* harmony default export */ __webpack_exports__["default"] = (HallPlan);


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=hall-plan.js.map