import React from "react";
import CourseDescription from "components/Results/CourseDescription";
import Section from "components/Results/Section";

const haveSameName = sections => {
  const name = sections[0].title;
  sections.forEach(sec => {
    if (sec.title !== name) return false;
  });
  return true;
};

const Course = (
  {
    course,
    course: {
      abbreviation,
      number,
      hours,
      full_title,
      description,
      comments,
      sections
    }
  }
) => (
  <div className="Course animated fadeInUp">
    <span className="anchor" id={`${number}`} />

    <div className="Course__heading">
      <div className="Course__heading__name">
        <h1><span>{abbreviation}</span> {number}</h1>
        {full_title ? <h2>{full_title}</h2> : undefined}
      </div>

      <div className="Course__heading__info">
        <p><span>{hours}</span> Credit Hours</p>
      </div>
    </div>

    {description
      ? <CourseDescription description={description} comments={comments} />
      : undefined}

    <h2 className="Course__header">Sections</h2>

    <div className="Course__sections">
      {sections.map((sec, i) => (
        <Section
          key={i}
          haveSameName={haveSameName(sections)}
          course={course} // eslint-disable-line
          section={sec}
          {...sec}
        />
      ))}
    </div>

  </div>
);

export default Course;
