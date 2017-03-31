import React, { Component } from "react";

import "./index.sass";

class WeekView extends Component {
  // Takes render item which renders

  constructor(props) {
    super(props);

    let height = 1500;
    let start_render_position = 700;
    let end_render_position = 2400;

    this.state = {
      height: height,
      // height * (end pos - start post)
      scale: height / (end_render_position - start_render_position),
      start_render_position,
      end_render_position
      // dates: {
      //   MONDAY: [
      //     { start: { first: 5, last: 30 }, end: { first: 6, last: 59 } },
      //     { start: { first: 7, last: 10 }, end: { first: 9, last: 30 } },
      //     { start: { first: 10, last: 10 }, end: { first: 12, last: 30 } },
      //     { start: { first: 21, last: 0 }, end: { first: 24, last: 0 } }
      //   ]
      // }
    };
  }

  renderItem() {}

  generateHourLine(time) {
    return (
      <span className="line" style={{ top: (time - 700) * this.state.scale }} />
    );
  }

  render() {
    // {this.state.dates.MONDAY.map((interval, i) => {

    return (
      <div className="WeekView">
        <div
          className="WeekView__column"
          style={{
            height: this.state.height + "px",
            position: "relative",
            width: "170px",
            backgroundColor: "#f7f7f7",
            padding: 7
          }}
        >
          {[700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500].map(num =>
            this.generateHourLine(num))}
          {this.props.monday.map((interval, i) => {
            let start_first = parseInt(interval.start.first);
            let start_last = parseInt(interval.start.last) / 60 * 100;

            let end_first = parseInt(interval.end.first);
            let end_last = parseInt(interval.end.last) / 60 * 100;

            if (start_first !== 12) {
              if (end_first < 7) {
                console.log("endfrst");
                end_first += 12;
                start_first += 12;
              }

              if (
                interval.time_start.includes("N") ||
                interval.time_end.includes("N")
              ) {
                end_first += 12;
                start_first += 12;
              }
            }

            if (start_first > end_first) end_first = end_first + 12;

            if (start_first > 0 && start_first < 10)
              start_first = "0" + start_first;
            if (start_first === 0) start_first = "00";

            if (start_last > 0 && start_last < 10)
              start_last = "0" + start_last;
            if (start_last === 0) start_last = "00";

            console.log("---------");

            console.log(start_first, start_last);

            let start_combo = parseInt(`${start_first}${start_last}`);

            console.log(start_combo);

            if (end_first > 0 && end_first < 10) end_first = "0" + end_first;
            if (end_first === 0) end_first = "00";

            if (end_first < 7) end_first += 12;

            if (end_last > 0 && end_last < 10) end_last = "0" + end_last;
            if (end_last === 0) end_last = "00";

            console.log("START FIRST " + start_first);
            console.log("END FIRST " + end_first);

            let end_combo = parseInt(`${end_first}${end_last}`);

            if (end_combo) console.log(end_combo);

            return (
              <div
                className="interval animated bounceIn"
                style={{
                  fontFamily: "BlinkMacSystemFont",
                  height: (end_combo - start_combo) * this.state.scale,
                  position: "absolute",
                  top: (start_combo - 700) * this.state.scale,
                  width: "90%",
                  borderRadius: 5,
                  borderLeft: "4px solid #3b5998",
                  padding: 10,
                  color: "#3b5998"
                }}
                key={i}
              >
                <span className="interval__start interval__time">
                  {interval.time_start}
                </span>
                <span className="interval__info">
                  <span>{interval.department}</span> {interval.number}
                </span>
                <span className="interval__section">
                  Section #{interval.section_number}
                </span>
                <br />
                <span className="interval__end interval__time">
                  {interval.time_end}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default WeekView;
