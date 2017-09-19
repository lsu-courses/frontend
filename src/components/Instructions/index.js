import React from "react"
import SearchIcon from "./search-icon"
import glamorous from "glamorous"
import { css } from "glamor"
import style from "utils/style"

export default class Instructions extends React.Component {
  exampleSearch(text) {
    const { performSearch } = this.props

    return (
      <Example onClick={() => performSearch(text)}>
        <ExampleText>{text}</ExampleText>
        <SearchIconStyled
          src="/search.png"
          alt="search"
          color={style.colors.almostBlack}
        />
      </Example>
    )
  }

  render() {
    return (
      <Container>
        <Title>How to search</Title>
        <InstructionsTitle>Instructions</InstructionsTitle>

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
          made by <CreditsLink href="https://cmwall.io">
            Cody Wall
          </CreditsLink>{" "}
          and{" "}
          <CreditsLink href="https://elsealabs.com">Connor Elsea</CreditsLink>
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
  color: style.colors.darkSlate,
  backgroundColor: "white",
  fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif`,
  boxShadow: `0 19px 38px rgba(0, 0, 0, 0.15), 0 15px 12px rgba(0, 0, 0, 0.1)`,
  textAlign: "center",
  animation: `${css.keyframes({
    "0%": {
      transform: "translate3d(0, 50%, 0)",
      filter: "blur(5px)",
    },
    "65%": {
      transform: "translate3d(0, -3%, 0)",
    },
    "100%": {
      transform: "none",
      filter: "none",
    },
  })} 0.6s linear`,
  [style.sizes.mobile]: {
    margin: "0 17px",
    padding: "2rem",
    marginTop: 0,
  },
})

const Title = glamorous.div({
  color: "gray",
  textTransform: "uppercase",
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: "0.8rem",
  marginBottom: 5,
})

const InstructionsTitle = glamorous.div({
  fontSize: "2.7rem",
  fontWeight: 700,
  marginBottom: "3rem",
  [style.sizes.mobile]: {
    fontSize: "2rem",
  },
})

const ExampleDescription = glamorous.div({
  fontSize: "1.2rem",
  fontWeight: "300",
  margin: "1rem 0",
})

const ExampleContainer = glamorous.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: "3rem",
})

const Credits = glamorous.div({
  marginTop: "4rem",
})

const CreditsLink = glamorous.a({
  textDecoration: "none",
  color: style.colors.lightPurple,
  fontWeight: "bold",
  "&:hover": {
    textShadow: "1px 0px 0px rgba(150, 150, 150, 1)",
  },
})

const Example = glamorous.div({
  borderRadius: 5,
  display: "flex",
  flexDirection: "row",
  marginRight: 10,
  padding: 10,
  alignItems: "center",
  cursor: "pointer",
  position: "relative",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.14)",
  "&:hover": {
    top: -1,
    boxShadow: "0 2px 4px rgba(0,0,0,0.16), 0 2px 3px rgba(0,0,0,0.23)",
  },
})

const ExampleText = glamorous.div({
  color: style.colors.almostBlack,
  fontSize: 16,
  fontWeight: "500",
  marginRight: 10,
})

const SearchIconStyled = glamorous(SearchIcon)({
  color: style.colors.almostBlack,
})
