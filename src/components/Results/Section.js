import React from "react";
import StudentCounter from "components/Results/StudentCounter";
import Interval from "components/Results/Interval";

const Section = (
  {
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
) => (
  <div className="Section">

    <div className="Section__container">

      <div className="Section__info">

        <div className="Section__info__top">

          <div className="Section__info__title">
            <h3 className="header">Section</h3>
            <span className="number">
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

export default Section;
