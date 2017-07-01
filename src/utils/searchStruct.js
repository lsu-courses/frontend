const departmentNames = ["csc", "bio"]
const teacherNames = ["duncan", "kooima"]

const searchSections = {
  DEPARTMENT_NAME: "DEPARTMENT_NAME",
  COURSE_NAME: "COURSE_NAME",
  COURSE_NUMBER: "COURSE_NUMBER",
  TEACHER_NAME: "TEACHER_NAME",
}

// dont do this on frontend. only do the cached name searching on backend.
// on frontend, if they have a number and just change that number, search from the working set,
// and if otherwise or if that search fails in some way, resend a new request to the api and reset
// the current state of the frontend display is

function searchStruct(input) {
  let sections = []
  let parts = input.split(" ").map(p => p.toLowerCase())

  parts.map(part => {
    if (departmentNames.find(name => name === part)) {
      sections.push({
        type: searchSections.DEPARTMENT_NAME,
        value: part,
      })
    } else if (teacherNames.find(name => name === part)) {
      sections.push({
        type: searchSections.TEACHER_NAME,
        value: part,
      })
    }
  })

  return sections
}

export default searchStruct
