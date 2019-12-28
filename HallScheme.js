/**
 * - rowNumbersLeft (*boolean*, default: *true*) Render row numbers on the left.
 * - rowNumbersRight (*boolean*, default: *false*) Render row numbers on the right.
 */
function HallScheme(options) {
  if (typeof options !== 'object') {
    throw new Error('The HallScheme constructor requires options');
  }
  if (typeof options.scheme !== 'object') {
    throw new Error('The .scheme property is required in constructor options');
  }
  this.scheme = options.scheme;
  this.seatStates = options.seatStates || {};
  this.rowNumbersLeft = options.rowNumbersLeft === undefined ? true : options.rowNumbersLeft;
  this.rowNumbersRight = options.rowNumbersRight === undefined ? true : options.rowNumbersRight;
  if (otions.el) {
    if (typeof options.el === 'string' || options.el instanceof String) {
      this.elem = document.querySelector(options.el);
    } else {
      this.elem = options.el;
    }
    this.elemIsOur = false;
  } else {
    this.elem = document.createElement('div');
    this.elemIsOur = true;
  }

  this.bindEventHandlers();
}

/**
 * Releases the resources taken by the widget.
 */
HallScheme.prototype.destroy = function() {
  this.unbindEventHandlers();

  if (this.elemIsOur && this.elem.parentNode) {
    this.elem.parentNode.removeChild(this.elem);
  } else if (!this.elemIsOur) {
    this.elem.className = this.elem.className.replace('hall-scheme', '');
  }

  this.elem.innerHTML = '';
};

/**
 * Returns number of rows.
 */
HallScheme.prototype.getRowCount = function() {
  return this.scheme.rows.length;
};

/**
 * Returns number of seats in the row.
 * 
 * @param {integer} row Row number starting from 1.
 */
HallScheme.prototype.getSeatCount = function(row) {
  if (row <= 0 || row > this.getRowCount()) {
    throw new Error('Row number is out of range');
  }
  var seatSequences = this.scheme.rows[row - 1];
  var count = 0;
  for (var i = 0; i < seatSequences.length; i++) {
    count += +seatSequences[i].seats;
  }
  return count;
};

/**
 * Returns total number of seats in the hall.
 * 
 * @return {integer} Number of seats in the hall.
 */
HallScheme.prototype.getTotalSeatCount = function() {
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
HallScheme.prototype.getSeatStates = function(row, seat) {
  var states = [];
  for (var stateName in this.seatStates) {
    if (this.seatStates.hasOwnProperty(stateName)) {
      var seats = this.seatStates[stateName];
      for (var i = 0; i < seats.length; i++) {
        if (seats[i][0] === row && seats[i][1] === seat) {
          states.push(stateName);
          break;
        }
      }
    }
  }
  return states;
};

/**
 * Renders the hall scheme as DOM.
 * 
 * @return {HTMLElement} Root DOM element of the widget.
 */
HallScheme.prototype.render = function() {
  var rowsElem = document.createElement('div');
  rowsElem.className = 'hall-scheme__rows';

  for (var i = 1; i <= this.getRowCount(); i++) {
    var rowElem = document.createElement('div');
    rowElem.className = 'hall-scheme__row';
    rowElem.dataset.row = i;

    if (this.rowNumbersLeft) {
      var rowNumElem = document.createElement('div');
      rowNumElem.className = 'hall-scheme__row-number';
      rowNumElem.textContent = i;
      rowElem.appendChild(rowNumElem);
    }

    rowElem.appendChild(this.renderRowContent(i));

    if (this.rowNumbersRight) {
      var rowNumElem = document.createElement('div');
      rowNumElem.className = 'hall-scheme__row-number';
      rowNumElem.textContent = i;
      rowElem.appendChild(rowNumElem);
    }

    rowsElem.appendChild(rowElem);
  }

  if (this.elem.className.indexOf('hall-scheme') < 0) {
    this.elem.className += ' hall-scheme';
  }
  this.elem.innerHTML = '';
  this.elem.appendChild(rowsElem);

  return this.elem;
};

/**
 * @param {integer} row Row number starting from 1.
 */
HallScheme.prototype.renderRowContent = function(row) {
  var rowElem = document.createElement('div');
  rowElem.className = 'hall-scheme__row-content';

  var seatSequences = this.scheme.rows[row - 1];
  for (var i = 0; i < seatSequences.length; i++) {
    var seatNumber = 1;
    // Render offsets as invisible seats holding space.
    // This method allows configuring sizes in CSS.
    var offset = seatSequences[i].offset || 0;
    for (var j = 0; j < offset; j++) {
      var spacerElem = document.createElement('div');
      spacerElem.className = 'hall-scheme__spacer';
      rowElem.appendChild(spacerElem);
    }
    // Render seats
    var count = seatSequences[i].seats || 0;
    for (var j = 0; j < count; j++) {
      var seatStates = this.getSeatStates(row, seatNumber);
      var seatClasses = seatStates.map(function(state) {
        return 'hall-scheme__seat--state_' + state;
      });
      seatClasses.unshift('hall-scheme__seat');
      
      var seatElem = document.createElement('div');
      seatElem.className = seatClasses.join(' ');
      seatElem.dataset.row = row;
      seatElem.dataset.seat = seatNumber;
      seatElem.textContent = seatNumber;
      rowElem.appendChild(seatElem);

      seatNumber++;
    }
  }

  return rowElem;
};

HallScheme.prototype.bindEventHandlers = function() {
  var self = this;
  this.elem.addEventHandler('click', function(event) {
    this.handleMouseClick.call(self, event)
  });
  this.elem.addEventHandler('contextmenu', function(event) {
    this.handleMouseClick.call(self, event)
  });
};

HallScheme.prototype.handleMouseClick = function(event) {
  function closest(elem, selector) {
    if (elem === null) {
      return null;
    }
    if (elem.matches(selector)) {
      return elem;
    }
    return closest(elem.parentNode, selector);
  }
  var seatElem = closest(event.target, '.hall-scheme__seat');
  if (seatElem) {
    var handler = this[event.type === 'click' ? 'onSeatClick' : 'onSeatContextMenu'];
    if (handler) {
      var seatData = {
        row: +seatElem.dataset.row,
        seat: +seatElem.dataset.seat,
      };
      handler.call(this, seatData, event);
    }
  }
};

HallScheme.prototype.unbindEventHandlers = function() {
  this.elem.removeEventListener('click', this.handleMouseClick);
  this.elem.removeEventListener('contextmenu', this.handleMouseClick);
};
