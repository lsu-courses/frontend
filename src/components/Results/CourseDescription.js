import React from "react"
import Case from "case"
import glamorous from "glamorous"
import style from "utils/style"

export default class CourseDescription extends React.Component {
  replaceAll(target, search, replacement) {
    return target.replace(new RegExp(search, "g"), replacement)
  }

  processComments(comments) {
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
      rep => (newComment = this.replaceAll(newComment, rep[0], rep[1]))
    )
    return newComment
  }

  render() {
    const { description, comments } = this.props

    return (
      <div>
        {description !== undefined &&
        description !== null &&
        description.length > 0 && (
          <div>
            <Title>DETAILS</Title>
            <Content>{description}</Content>
          </div>
        )}

        {comments !== undefined &&
        comments !== null &&
        comments.length > 0 && (
          <div>
            <Title>COMMENTS</Title>
            <Content>{this.processComments(comments) || "No Comments"}</Content>
          </div>
        )}
      </div>
    )
  }
}

const Title = glamorous.div({
  color: style.colors.almostBlack,
  fontSize: "0.8rem",
  fontWeight: "800",
  marginTop: "1rem",
})

const Content = glamorous.div({
  color: "gray",
  fontSize: "0.95rem",
  lineHeight: "1.2rem",
  marginTop: 10,
})
