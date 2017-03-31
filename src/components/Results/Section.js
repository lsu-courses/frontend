import React, { Component } from "react";
import StudentCounter from "components/Results/StudentCounter";
import Interval from "components/Results/Interval";
import { connect } from "react-redux";
import { addSection } from "redux/ducks/saved";

function onClick(course, number) {
  console.log("Adding section");
  console.log(course);
  console.log(number);
}

class Section extends Component {
  render() {
    const {
      course,
      section,
      section: {
        number,
        title,
        enrollment_available,
        enrollment_current,
        enrollment_is_full,
        enrollment_total,
        timeIntervals,
        special,
        hasSameName
      }
    } = this.props;

    return (
      <div className="Section">

        <div className="Section__container">

          <div className="Section__info">

            <div className="Section__info__top">

              <div className="Section__info__title">
                <h3 className="header">Section</h3>
                <span
                  className="number"
                  onClick={() => this.props.addSection(course, section)}
                >
                  {number}
                </span>
              </div>

            </div>

            <StudentCounter
              enrollment_available={enrollment_available}
              enrollment_current={enrollment_current}
              enrollment_is_full={enrollment_is_full}
              enrollment_total={enrollment_total}
            />
          </div>

          <div className="Section__content">
            <div className="Section__intervals">
              {timeIntervals.map((interval, i) => (
                <Interval key={i} {...interval} />
              ))}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    courses: state.saved.courses
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    addSection: (courses, section) => dispatch(addSection(courses, section))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Section);
