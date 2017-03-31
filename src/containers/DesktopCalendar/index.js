import React, { Component } from "react";
import { connect } from "react-redux";
import CalendarContainer from "containers/CalendarContainer";

class DesktopCalendar extends Component {
  render() {
    return (
      <div className="DesktopCalendar">
        <div className="DesktopCalendar__bar animated flipInX">
          Total Credit Hours: {JSON.stringify(this.props.hours)}
        </div>
        <CalendarContainer />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    hours: state.saved.hours
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopCalendar);
