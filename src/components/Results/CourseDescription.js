import React from "react";
import Case from "case";

const replaceAll = (target, search, replacement) => {
  return target.replace(new RegExp(search, "g"), replacement);
};

const processComments = comments => {
  let newComment = Case.sentence(comments.join(" ").toLowerCase());
  let replacements = [
    ["tba", "TBA"],
    ["Lec", "Lecture"],
    ["prereq", "pre-requisite"],
    ["aleks", "ALEKS"],
    ["lsu", "LSU"],
    ["nov", "Nov"]
  ];
  replacements.forEach(
    rep => newComment = replaceAll(newComment, rep[0], rep[1])
  );
  return newComment;
};

const CourseDescription = ({ description, comments }) => (
  <div className="CourseDescription">
    <div className="CourseDescription__desc">
      <span className="title">Details</span>
      <span className="content">{description}</span>
    </div>

    {/* TODO: Maybe use component state to allow for a "Read More..." on the comment section. And shorten it. */}

    {comments.length > 0
      ? <div className="CourseDescription__comments">
          <span className="title">Comments</span>
          <span className="content">
            {processComments(comments) || "No Comments"}
          </span>
        </div>
      : undefined}

  </div>
);

export default CourseDescription;
