# HallPlan

JavaScript widget that represents seat scheme of a cinema hall.

[DEMO](https://lexkrstn.github.io/hall-plan/media/demo.html)

### Example of usage

```js
var scheme = {
  "seatDirection": "rtl",
  "rows": [
    [{ "seats": 12 }],
    [{ "seats": 12 }],
    [{ "seats": 12 }],
    [{ "seats": 7, "offset": 2 }],
    [{ "seats": 7, "offset": 2 }],
    [{ "seats": 7, "offset": 2 }],
    [{ "seats": 4, "offset": 1 }, { "seats": 3, "offset": 2 }]
  ],
  "seatStates": {
    "reserved": [[5, 4], [5, 5], [6, 4], [6, 5]],
    "booked": [[1, 3], [7, 4]]
  }
};

var plan1 = new HallPlan({
  el: '#hallplan1',
  scheme: scheme,
  rowNumbersLeft: true,
  rowNumbersRight: false,
  selectable: true,
  onSeatClick: function(seatData, mouseEvent) {
    console.log('click', seatData.row, seatData.seat);
  },
});
plan1.render();
```

[API](https://lexkrstn.github.io/hall-plan)
