import screenSvg from '!!raw-loader?!./assets/theatre-screen.svg';
import './hall-plan.scss';
import { addClass, closest, removeClass } from './helpers';

/**
 * Direction of seat number growth in a row.
 * Possible values:
 * - 'rtl' = right-to-left
 * - 'ltr' = left-to-right
 */
export type HallPlanSeatDirection = 'rtl' | 'ltr';

/**
 * Describes continuous sequence of seats in a row.
 */
export interface HallPlanSeatSequence {
  /**
   * Number of seats.
   */
  seats: number;
  /**
   * Offset from the previous sequence in the row or start of the row.
   */
  offset?: number;
}

/**
 * Describes a row of seats.
 */
export type HallPlanSeatRow = HallPlanSeatSequence[];

/**
 * The objects of this class map seat state names to lists of tuples comprising
 * of row number and seat number.
 */
export interface HallPlanSeatStates {
  [stateName: string]: Array<[number, number]>;
}

/**
 * Describes plan of the hall.
 */
export interface HallScheme {
  /**
   * The default direction is left-to-right (ltr).
   */
  seatDirection?: HallPlanSeatDirection;
  rows: HallPlanSeatRow[];
  seatStates?: HallPlanSeatStates;
}

/**
 * Describes seat position.
 */
export interface HallPlanSeatPos {
  row: number;
  seat: number;
}

export type HallPlanOnSeatClickListener = (seatPos: HallPlanSeatPos, event: MouseEvent) => void;

export interface HallPlanConfig {
  /**
   * The main HTML element of the widget.
   * The widget's content will be rendered into it.
   * You may also leave this unspecified. In this case the main element will be
   * created detached from the DOM by the widget object itself. You may use the
   * value the render() function returns to get the element.
   */
  el?: string | HTMLElement;
  /**
   * Hall scheme ( @see HallScheme ).
   */
  scheme: HallScheme;
  /**
   * Whether to render row numbers on the left.
   */
  rowNumbersLeft?: boolean;
  /**
   * Whether to render row numbers on the right.
   */
  rowNumbersRight?: boolean;
  /**
   * Whether seats can be selected or not.
   */
  selectable?: boolean;
  /**
   * Text string displaying over the screen image (default: "Screen").
   */
  screenText?: string;
  /**
   * Whether to display SVG screen image (default: true).
   */
  showScreen?: boolean;
  /**
   * Fires when the user clicks on a seat with LMB.
   */
  onSeatClick?: HallPlanOnSeatClickListener;
  /**
   * Fires when the user clicks on a seat with RMB.
   */
  onSeatContextMenu?: HallPlanOnSeatClickListener;
}

/**
 * Hall plan widget.
 */
export default class HallPlan {
  private elem: HTMLDivElement;
  /**
   * Whether the `elem` property has been created by us.
   */
  private elemIsOur: boolean;
  private scheme: HallScheme;
  private seatDirection: HallPlanSeatDirection;
  private seatStates: HallPlanSeatStates;
  private rowNumbersLeft: boolean;
  private rowNumbersRight: boolean;
  private selectable: boolean;
  private screenText: string;
  private showScreen: boolean;
  private onSeatClick: HallPlanOnSeatClickListener;
  private onSeatContextMenu: HallPlanOnSeatClickListener;
  private activeSeatPos: HallPlanSeatPos = null;

  constructor(options: HallPlanConfig) {
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
        ? document.querySelector(options.el as string)
        : options.el as HTMLDivElement;
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
  public destroy(): void {
    this.unbindEventHandlers();

    if (this.elemIsOur && this.elem.parentNode) {
      this.elem.parentNode.removeChild(this.elem);
    } else if (!this.elemIsOur) {
      this.elem.className = this.elem.className.replace('hall-plan', '');
    }

    this.elem.innerHTML = '';
    removeClass(this.elem, 'hall-plan', 'hall-plan--rtl', 'hall-plan--ltr');
  }

  /**
   * Returns number of rows.
   */
  public getRowCount(): number {
    return this.scheme.rows.length;
  }

  /**
   * Returns number of seats in the row.
   *
   * @param {integer} row Row number starting from 1.
   */
  public getSeatCount(row: number): number {
    if (row <= 0 || row > this.getRowCount()) {
      throw new Error('Row number is out of range');
    }
    return this.scheme.rows[row - 1].reduce((count, seq) => count + seq.seats, 0);
  }

  /**
   * Returns total number of seats in the hall.
   *
   * @return {integer} Number of seats in the hall.
   */
  public getTotalSeatCount(): number {
    let count = 0;
    for (let i = 1; i <= this.getRowCount(); i++) {
      count += this.getSeatCount(i);
    }
    return count;
  }

  /**
   * Returns the list of the states of the seat.
   *
   * @param {integer} row Row number starting from 1.
   * @param {integer} seat Seat number starting from 1.
   */
  public getSeatStates(row: number, seat: number): string[] {
    const states: string[] = [];
    for (const stateName of Object.keys(this.seatStates)) {
      for (const seatPos of this.seatStates[stateName]) {
        if (seatPos[0] === row && seatPos[1] === seat) {
          states.push(stateName);
          break;
        }
      }
    }
    return states;
  }

  /**
   * Sets the list of the states of the seat.
   *
   * @param {integer} row Row number starting from 1.
   * @param {integer} seat Seat number starting from 1.
   * @param {string[]} states New state list.
   */
  public setSeatStates(row: number, seat: number, states: string[]): void {
    for (const stateName of Object.keys(this.scheme.seatStates)) {
      if (states.indexOf(stateName)) {
        this.setSeatState(row, seat, stateName);
      } else {
        this.unsetSeatState(row, seat, stateName);
      }
    }
    this.updateAllSeatStates();
  }

  /**
   * Determines whether the seat has the specified state.
   *
   * @param {integer} row Row number starting from 1.
   * @param {integer} seat Seat number starting from 1.
   * @param {string} state New state name.
   */
  public hasSeatState(row: number, seat: number, state: string): boolean {
    const seats = this.scheme.seatStates[state];
    if (seats) {
      for (const seatPos of seats) {
        if (seatPos[0] === row && seatPos[1] === seat) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Sets the state to the seat.
   *
   * @param {integer} row Row number starting from 1.
   * @param {integer} seat Seat number starting from 1.
   * @param {string} state New state name.
   */
  public setSeatState(row: number, seat: number, state: string): void {
    if (!this.hasSeatState(row, seat, state)) {
      if (!this.scheme.seatStates[state]) {
        this.scheme.seatStates[state] = [];
      }
      this.scheme.seatStates[state].push([row, seat]);
      this.updateSeatStates(row, seat);
    }
  }

  /**
   * Unsets the state to the seat.
   *
   * @param {integer} row Row number starting from 1.
   * @param {integer} seat Seat number starting from 1.
   * @param {string} state New state name.
   */
  public unsetSeatState(row: number, seat: number, state: string): void {
    const seats = this.scheme.seatStates[state];
    if (seats) {
      for (let i = 0; i < seats.length; i++) {
        const seatPos = this.scheme.seatStates[state][i];
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
  }

  /**
   * Toggles the state to the seat.
   *
   * @param {integer} row Row number starting from 1.
   * @param {integer} seat Seat number starting from 1.
   * @param {string} state State name.
   */
  public toggleSeatState(row: number, seat: number, state: string): void {
    if (this.hasSeatState(row, seat, state)) {
      this.unsetSeatState(row, seat, state);
    } else {
      this.setSeatState(row, seat, state);
    }
  }

  /**
   * Returns the position of active (selected) seat or null if no seat is active.
   */
  public getActiveSeat(): HallPlanSeatPos {
    return this.activeSeatPos;
  }

  /**
   * Checks whether the seat at the specified position is active.
   */
  public isSeatActive(seatPos: HallPlanSeatPos): boolean {
    if (this.activeSeatPos) {
      const { row, seat } = this.activeSeatPos;
      return row === seatPos.row && seat === seatPos.seat;
    }
    return false;
  }

  /**
   * Sets the seat active / inactive (i.e. selected or not).
   */
  public setSeatActive(seatPos?: HallPlanSeatPos): void {
    // Deactivate the former one
    if (!seatPos || !this.isSeatActive(seatPos)) {
      const formerSeatPos = this.getActiveSeat();
      if (formerSeatPos) {
        const { row, seat } = formerSeatPos;
        const seatElem = this.elem.querySelector(
          `.hall-plan__seat[data-row="${row}"][data-seat="${seat}"]`);
        if (seatElem) {
          removeClass(seatElem as HTMLElement, 'hall-plan__seat--active');
        }
      }
    }
    // Activate the new one
    if (seatPos && !this.isSeatActive(seatPos)) {
      const { row, seat } = seatPos;
      const seatElem = this.elem.querySelector(
        `.hall-plan__seat[data-row="${row}"][data-seat="${seat}"]`) as HTMLElement;
      if (seatElem) {
        addClass(seatElem, 'hall-plan__seat--active');
      }
    }
    // Update internal state
    this.activeSeatPos = seatPos ? { ...seatPos } : null;
  }

  /**
   * Returns maximum seat count in row.
   */
  public getMaxSeatCountInRow(): number {
    let max = 0;
    for (let i = 1; i <= this.getRowCount(); i++) {
      const count = this.getSeatCount(i);
      if (count > max) {
        max = count;
      }
    }
    return max;
  }

  /**
   * Renders the hall scheme as DOM.
   *
   * @return {HTMLDivElement} Root DOM element of the widget.
   */
  public render(): HTMLDivElement {
    const rowsElem: HTMLDivElement = document.createElement('div');
    rowsElem.className = 'hall-plan__rows';

    for (let i = 1; i <= this.getRowCount(); i++) {
      const rowElem: HTMLDivElement = document.createElement('div');
      rowElem.className = 'hall-plan__row';
      rowElem.dataset.row = i.toString();

      if (this.rowNumbersLeft) {
        const rowNumElem: HTMLDivElement = document.createElement('div');
        rowNumElem.className = 'hall-plan__row-number';
        rowNumElem.textContent = i.toString();
        rowElem.appendChild(rowNumElem);
      }

      rowElem.appendChild(this.renderRowContent(i));

      if (this.rowNumbersRight) {
        const rowNumElem: HTMLDivElement = document.createElement('div');
        rowNumElem.className = 'hall-plan__row-number';
        rowNumElem.textContent = i.toString();
        rowElem.appendChild(rowNumElem);
      }

      rowsElem.appendChild(rowElem);
    }

    const classes = ['hall-plan', `hall-plan--${this.seatDirection}`];
    if (this.selectable) {
      classes.push('hall-plan--selectable');
    }
    if (this.selectable || this.onSeatClick || this.onSeatContextMenu) {
      classes.push('hall-plan--clickable');
    }
    addClass(this.elem, ...classes);
    this.elem.innerHTML = '';
    if (this.showScreen) {
      this.elem.appendChild(this.renderScreen());
    }
    this.elem.appendChild(rowsElem);

    return this.elem;
  }

  private renderScreen(): HTMLDivElement {
    const wrap: HTMLDivElement = document.createElement('div');
    wrap.className = 'hall-plan__screen-wrap';

    if (this.rowNumbersLeft) {
      const spacer: HTMLDivElement = document.createElement('div');
      spacer.className = 'hall-plan__screen-spacer';
      wrap.appendChild(spacer);
    }

    const screen: HTMLDivElement = document.createElement('div');
    screen.className = 'hall-plan__screen';
    screen.innerHTML = screenSvg;
    wrap.appendChild(screen);

    const text: HTMLDivElement = document.createElement('div');
    text.className = 'hall-plan__screen-text';
    text.textContent = this.screenText;
    screen.appendChild(text);

    if (this.rowNumbersRight) {
      const spacer: HTMLDivElement = document.createElement('div');
      spacer.className = 'hall-plan__screen-spacer';
      wrap.appendChild(spacer);
    }

    return wrap;
  }

  /**
   * @param {integer} row Row number starting from 1.
   */
  private renderRowContent(row: number): HTMLDivElement {
    const rowElem: HTMLDivElement = document.createElement('div');
    rowElem.className = 'hall-plan__row-content';

    const totalSpacing = this.getMaxSeatCountInRow();
    const cellWidth = (100 / totalSpacing).toFixed(4) + '%';
    let spacingRendered = 0;
    let seatNumber = 1;
    for (const seatSequence of this.scheme.rows[row - 1]) {
      // Render offsets as invisible seats holding space.
      // This method allows configuring sizes in CSS.
      const offset = seatSequence.offset || 0;
      spacingRendered += offset;
      for (let j = 0; j < offset; j++) {
        const spacerElem: HTMLDivElement = document.createElement('div');
        spacerElem.className = 'hall-plan__spacer';
        spacerElem.style.width = cellWidth;
        rowElem.appendChild(spacerElem);
      }
      // Render seats
      const count = seatSequence.seats || 0;
      spacingRendered += count;
      for (let j = 0; j < count; j++) {
        const seatClasses = this.getSeatStates(row, seatNumber)
          .map(state => 'hall-plan__seat--state_' + state);
        if (
          this.activeSeatPos &&
          this.activeSeatPos.row === row &&
          this.activeSeatPos.seat === seatNumber
        ) {
          seatClasses.push('hall-plan__seat--active');
        }
        seatClasses.unshift('hall-plan__seat');

        const spacerElem: HTMLDivElement = document.createElement('div');
        spacerElem.className = 'hall-plan__spacer';
        spacerElem.style.width = cellWidth;

        const seatElem: HTMLDivElement = document.createElement('div');
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
    const spacingLeft = totalSpacing - spacingRendered;
    for (let j = 0; j < spacingLeft; j++) {
      const spacerElem: HTMLDivElement = document.createElement('div');
      spacerElem.className = 'hall-plan__spacer';
      spacerElem.style.width = cellWidth;
      rowElem.appendChild(spacerElem);
    }

    return rowElem;
  }

  private updateAllSeatStates(): void {
    const seatNodes = this.elem.querySelectorAll('.hall-plan__seat');
    const seatElems = Array.prototype.slice.call(seatNodes);
    for (const seatElem of seatElems) {
      const row = parseInt(seatElem.dataset.row, 10);
      const seat = parseInt(seatElem.dataset.seat, 10);
      const seatClasses = this.getSeatStates(row, seat)
          .map(state => 'hall-plan__seat--state_' + state);
      seatClasses.unshift('hall-plan__seat');
      seatElem.className = seatClasses.join(' ');
    }
  }

  private updateSeatStates(row: number, seat: number): void {
    const seatElem = this.elem.querySelector(
      `.hall-plan__seat[data-row="${row}"][data-seat="${seat}"]`);
    if (seatElem) {
      const seatClasses = this.getSeatStates(row, seat)
        .map(state => 'hall-plan__seat--state_' + state);
      seatClasses.unshift('hall-plan__seat');
      seatElem.className = seatClasses.join(' ');
    }
  }

  private bindEventHandlers() {
    this.elem.addEventListener('click', this.handleMouseClick);
    this.elem.addEventListener('contextmenu', this.handleMouseClick);
  }

  private unbindEventHandlers() {
    this.elem.removeEventListener('click', this.handleMouseClick);
    this.elem.removeEventListener('contextmenu', this.handleMouseClick);
  }

  private handleMouseClick = (event: MouseEvent) => {
    const seatElem = closest(event.target as HTMLElement, '.hall-plan__seat');
    if (seatElem) {
      const seatPos: HallPlanSeatPos = {
        row: +seatElem.dataset.row,
        seat: +seatElem.dataset.seat,
      };
      const handler = event.type === 'click' ? this.onSeatClick : this.onSeatContextMenu;
      if (this.selectable && event.type === 'click') {
        this.setSeatActive(seatPos);
      }
      if (handler) {
        handler.call(this, seatPos, event);
      }
    }
  }
}
