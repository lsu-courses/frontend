import React from "react"
import glamorous from "glamorous"
import shadow from "utils/shadow"
import style from "utils/style"
import materialColors from "utils/materialColors"
import SearchIcon from "./search-icon"

export default class Example extends React.Component {
  render() {
    return (
      <ExampleContainer>
        {this.props.text.map(
          t => (t !== "+" ? <ExampleText>{t}</ExampleText> : <And>and</And>)
        )}
        <SearchIcon
          src="/search.png"
          alt="search"
          color={materialColors.grey[400]}
        />
      </ExampleContainer>
    )
  }
}

const And = glamorous.span({
  marginRight: 8,
  fontSize: "0.8rem",
  color: materialColors.grey[400],
})

const ExampleContainer = glamorous.div({
  backgroundColor: materialColors.grey[100],
  borderRadius: 5,
  display: "flex",
  flexDirection: "row",
  marginRight: 7,
  marginLeft: 10,
  padding: 9,
  alignItems: "center",
  position: "relative",
  transition: "all 0.3s",
  border: "1px solid " + materialColors.grey[300],
})

const ExampleText = glamorous.div({
  color: materialColors.grey[600],
  fontSize: 16,
  fontWeight: 400,
  marginRight: 8,
})
