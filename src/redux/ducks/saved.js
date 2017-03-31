// Action Types

export const ADD_SECTION = "ADD_SECTION";

// Default State

export const defaultState = {
  courses: [],
  courseNames: [],
  hours: 0
};

// Reducer

export default function reducer(state = defaultState, action) {
  const { type, payload } = action;

  console.log(state);

  switch (type) {
    case ADD_SECTION:
      console.log(payload);

      let { abbreviation, number } = payload.course;
      let newCourseNames = [];
      let courseName = abbreviation +
        " " +
        number +
        " " +
        payload.section.number;

      if (state.courseNames.includes(courseName)) {
        console.log("Already saved, cannot save again");
      } else {
        console.log("Not already saved, can save.");

        newCourseNames = [...state.courseNames, courseName];

        let savedCourse = state.courses.find(
          co => co.abbreviation === abbreviation && co.number === number
        );

        if (savedCourse !== undefined) {
          console.log("The parent course was found in the courses array");

          let newSections = [...savedCourse.sections, payload.section];
          let newCourse = { ...savedCourse, sections: newSections };

          let otherCourses = state.courses.filter(
            co =>
              `${co.abbreviation}${co.number}` !== `${abbreviation}${number}`
          );

          let allCourses = [...otherCourses, newCourse];

          console.log(allCourses);

          return {
            ...state,
            courseNames: newCourseNames,
            hours: 0,
            courses: allCourses
          };
        } else {
          console.log("The parent course was not found in the courses array");

          let newSections = [payload.section];
          let newCourse = { ...payload.course, sections: newSections };

          let allCourses = [...state.courses, newCourse];

          let hours = 0;

          for (let i = 0; i < allCourses.length; i++) {
            hours += parseFloat(allCourses[i].hours);
          }

          console.log(allCourses);

          return {
            ...state,
            courseNames: newCourseNames,
            hours: hours,
            courses: allCourses
          };
        }
      }

      return state;

    default:
      return state;
  }
}

// Action Creators

export const addSection = (course, section) => ({
  type: "ADD_SECTION",
  payload: { course, section }
});
