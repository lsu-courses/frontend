import React from "react"
import Case from "case"

const replaceAll = (target, search, replacement) => {
  return target.replace(new RegExp(search, "g"), replacement)
}

const processComments = comments => {
  if (comments[0] === "") return "Comment was found to be blank."
  let newComment = Case.sentence(comments.join(" ").toLowerCase())
  let replacements = [
    ["tba", "TBA"],
    ["Lec", "Lecture"],
    ["prereq", "pre-requisite"],
    ["aleks", "ALEKS"],
    ["lsu", "LSU"],
    ["nov", "Nov"],
  ]
  replacements.forEach(
    rep => (newComment = replaceAll(newComment, rep[0], rep[1]))
  )
  return newComment
}

const CourseDescription = ({ description, comments }) =>
  <div className="CourseDescription">
    <div className="CourseDescription__desc">
      <span className="title">Details</span>
      <span className="content">
        {description}
      </span>
    </div>

    {comments.length > 0 &&
      <div className="CourseDescription__comments">
        <span className="title">Comments</span>
        <span className="content">
          {processComments(comments) || "No Comments"}
        </span>
      </div>}
  </div>

export default CourseDescription
