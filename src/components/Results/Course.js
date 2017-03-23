import React from "react";
import CourseDescription from "components/Results/CourseDescription";
import Section from "components/Results/Section";

const Course = (
  {
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

    {/* COURSE HEADER: Title, number, hours, etc. */}
    <div className="Course__heading">
      <div className="Course__heading__name">
        <h1><span>{abbreviation}</span> {number}</h1>
        <h2>{full_title || "Full Title Not Found"}</h2>
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
        <Section key={i} haveSameName={haveSameName(sections)} {...sec} />
      ))}
    </div>

  </div>
);

const haveSameName = sections => {
  const name = sections[0].title;
  sections.forEach(sec => {
    if (sec.title !== name) return false;
  });
  return true;
};

export default Course;
