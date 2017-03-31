import React, { Component } from "react";
import { connect } from "react-redux";
import WeekView from "components/WeekView";

class CalendarContainer extends Component {
  render() {
    return (
      <div
        className="CalendarContainer"
        style={{
          display: "flex",
          margin: "20px",
          height: 500
        }}
      >
        <WeekView monday={this.props.courses.MONDAY} />
        <WeekView monday={this.props.courses.TUESDAY} />
        <WeekView monday={this.props.courses.WEDNESDAY} />
        <WeekView monday={this.props.courses.THURSDAY} />
        <WeekView monday={this.props.courses.FRIDAY} />
      </div>
    );
  }
}

function coursesToDates(courses) {
  let dates = {
    MONDAY: [],
    TUESDAY: [],
    WEDNESDAY: [],
    THURSDAY: [],
    FRIDAY: [],
    TBA: []
  };

  courses.forEach(course => {
    course.sections.forEach(section => {
      section.timeIntervals.forEach(interval => {
        const time_start_array = formatTime(interval.start)
          .split(" ")[0]
          .split("N")[0]
          .split(":");
        const time_start_num = parseInt(time_start_array.join(""));
        const time_end_array = formatTime(interval.end)
          .split(" ")[0]
          .split("N")[0]
          .split(":");
        const time_end_num = parseInt(time_end_array.join(""));

        const start = { first: time_start_array[0], last: time_start_array[1] };
        const end = { first: time_end_array[0], last: time_end_array[1] };

        console.log("*********");
        console.log(start, end);

        let final_data = {
          department: course.abbreviation,
          number: course.number,
          title: course.full_title,
          section_number: section.number,
          time_start: interval.start,
          time_end: interval.end,
          time_start_num,
          time_end_num,
          start,
          end
        };

        if (interval.days.length === 0) {
          dates["TBA"].push(final_data);
        } else {
          interval.days.forEach(day => {
            dates[day].push(final_data);
          });
        }
      });
    });
  });

  return dates;
}

function formatTime(time) {
  if (time.toLowerCase().includes("n")) {
    time = time.slice(0, 2) + ":" + time.slice(2, -1) + " PM";
    if (time.substr(0, 1) === "0") {
      return time.slice(1);
    } else {
      return time;
    }
  } else {
    return (time.slice(0, -2)[0] === "0"
      ? time.slice(1, -2)
      : time.slice(0, -2)) +
      ":" +
      time.slice(-2);
  }
}

const mapStateToProps = function(state) {
  return {
    courses: coursesToDates(state.saved.courses)
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
