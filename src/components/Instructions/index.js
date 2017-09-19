import React from "react"
import SearchIcon from "./search-icon"
import glamorous from "glamorous"
import style from "utils/style"

export default class Instructions extends React.Component {
  exampleSearch(text) {
    const { performSearch } = this.props

    return (
      <Example onClick={() => performSearch(text)}>
        <ExampleText>{text}</ExampleText>
        <SearchIconStyled src="/search.png" alt="search" />
      </Example>
    )
  }

  render() {
    return (
      <Container>
        <Title>How to search</Title>

        <ExampleDescription>department name</ExampleDescription>
        <ExampleContainer>
          {this.exampleSearch("BIOL")}
          {this.exampleSearch("MATH")}
        </ExampleContainer>

        <ExampleDescription>department name + course number</ExampleDescription>
        <ExampleContainer>
          {this.exampleSearch("HNRS 2030")}
          {this.exampleSearch("BIOL 1002")}
        </ExampleContainer>

        <ExampleDescription>department name + course name</ExampleDescription>
        <ExampleContainer>
          {this.exampleSearch("MATH algebra")}
          {this.exampleSearch("BIOL micro")}
        </ExampleContainer>

        <Credits>
          App made by <a href="https://cmwall.io">Cody Wall</a> and{" "}
          <a href="https://elsealabs.com">Connor Elsea</a>
        </Credits>
      </Container>
    )
  }
}

const Container = glamorous.div({
  borderRadius: 4,
  maxWidth: "40rem",
  margin: "auto",
  padding: "2rem",
  color: style.colors.almostBlack,
  backgroundColor: "white",
  fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif`,
  boxShadow: `0 19px 38px rgba(0, 0, 0, 0.15), 0 15px 12px rgba(0, 0, 0, 0.1)`,
  [style.sizes.mobile]: {
    margin: "0 17px",
    padding: "2rem",
    marginTop: 0,
  },
})

const Title = glamorous.div({
  marginBottom: "2rem",
  color: style.colors.almostBlack,
  fontSize: "1.9rem",
  textAlign: "center",
  textTransform: "uppercase",
})

const ExampleDescription = glamorous.div({
  fontSize: "1.2rem",
  fontWeight: "300",
  margin: "1rem 0",
  textAlign: "center",
})

const ExampleContainer = glamorous.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: "3rem",
})

const Credits = glamorous.div({
  textAlign: "center",
  marginTop: 40,
})

const Example = glamorous.div({
  backgroundColor: style.colors.lightPurple,
  borderRadius: 5,
  display: "flex",
  flexDirection: "row",
  marginRight: 10,
  padding: 10,
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    [style.sizes.mobile]: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.14)",
    },
  },
})

const ExampleText = glamorous.div({
  color: style.colors.defaultGray,
  fontSize: 16,
  fontWeight: "500",
  marginRight: 10,
})

const SearchIconStyled = glamorous(SearchIcon)({
  color: style.colors.defaultGray,
})
