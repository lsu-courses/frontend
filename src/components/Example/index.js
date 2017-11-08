import React from "react"
import glamorous from "glamorous"
import shadow from "utils/shadow"
import style from "utils/style"
import materialColors from "utils/materialColors"
import SearchIcon from "./search-icon"

export default class Example extends React.Component {
  render() {
    return (
      <ExampleContainer
        onClick={() => this.props.performSearch(this.props.text)}
      >
        <ExampleText>{this.props.text}</ExampleText>
        <SearchIconStyled
          src="/search.png"
          alt="search"
          color={style.colors.almostBlack}
        />
      </ExampleContainer>
    )
  }
}

const SearchIconStyled = glamorous(SearchIcon)({
  color: style.colors.almostBlack,
})

const ExampleContainer = glamorous.div({
  backgroundColor: "white",
  borderRadius: 5,
  display: "flex",
  flexDirection: "row",
  marginRight: 10,
  marginBottom: 10,
  padding: 9,
  alignItems: "center",
  cursor: "pointer",
  position: "relative",
  boxShadow: shadow(300),
  transition: "all 0.3s",
  border: "1px solid " + materialColors.grey[300],
  "&:hover": {
    top: -1,
    boxShadow: shadow(400),
    transform: "scale(1.04)",
  },
})

const ExampleText = glamorous.div({
  color: style.colors.almostBlack,
  fontSize: 16,
  fontWeight: "500",
  marginRight: 10,
})
