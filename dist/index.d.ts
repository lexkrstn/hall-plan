
/**
 * Direction of seat number growth in a row.
 * Possible values:
 * - 'rtl' = right-to-left
 * - 'ltr' = left-to-right
 */
export declare type HallPlanSeatDirection = 'rtl' | 'ltr';
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
export declare type HallPlanSeatRow = HallPlanSeatSequence[];
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
export declare type HallPlanOnSeatClickListener = (seatPos: HallPlanSeatPos, event: MouseEvent) => void;
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
    private elem;
    /**
     * Whether the `elem` property has been created by us.
     */
    private elemIsOur;
    private scheme;
    private seatDirection;
    private seatStates;
    private rowNumbersLeft;
    private rowNumbersRight;
    private selectable;
    private screenText;
    private showScreen;
    private onSeatClick;
    private onSeatContextMenu;
    private activeSeatPos;
    constructor(options: HallPlanConfig);
    /**
     * Releases the resources taken by the widget.
     */
    destroy(): void;
    /**
     * Returns number of rows.
     */
    getRowCount(): number;
    /**
     * Returns number of seats in the row.
     *
     * @param {integer} row Row number starting from 1.
     */
    getSeatCount(row: number): number;
    /**
     * Returns total number of seats in the hall.
     *
     * @return {integer} Number of seats in the hall.
     */
    getTotalSeatCount(): number;
    /**
     * Returns the list of the states of the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     */
    getSeatStates(row: number, seat: number): string[];
    /**
     * Sets the list of the states of the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string[]} states New state list.
     */
    setSeatStates(row: number, seat: number, states: string[]): void;
    /**
     * Determines whether the seat has the specified state.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string} state New state name.
     */
    hasSeatState(row: number, seat: number, state: string): boolean;
    /**
     * Sets the state to the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string} state New state name.
     */
    setSeatState(row: number, seat: number, state: string): void;
    /**
     * Unsets the state to the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string} state New state name.
     */
    unsetSeatState(row: number, seat: number, state: string): void;
    /**
     * Toggles the state to the seat.
     *
     * @param {integer} row Row number starting from 1.
     * @param {integer} seat Seat number starting from 1.
     * @param {string} state State name.
     */
    toggleSeatState(row: number, seat: number, state: string): void;
    /**
     * Returns the position of active (selected) seat or null if no seat is active.
     */
    getActiveSeat(): HallPlanSeatPos;
    /**
     * Checks whether the seat at the specified position is active.
     */
    isSeatActive(seatPos: HallPlanSeatPos): boolean;
    /**
     * Sets the seat active / inactive (i.e. selected or not).
     */
    setSeatActive(seatPos?: HallPlanSeatPos): void;
    /**
     * Returns maximum seat count in row.
     */
    getMaxSeatCountInRow(): number;
    /**
     * Renders the hall scheme as DOM.
     *
     * @return {HTMLDivElement} Root DOM element of the widget.
     */
    render(): HTMLDivElement;
    private renderScreen;
    /**
     * @param {integer} row Row number starting from 1.
     */
    private renderRowContent;
    private updateAllSeatStates;
    private updateSeatStates;
    private bindEventHandlers;
    private unbindEventHandlers;
    private handleMouseClick;
}
