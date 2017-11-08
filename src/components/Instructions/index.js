import React from "react"
import glamorous from "glamorous"
import { css } from "glamor"

import style from "utils/style"
import Example from "components/Example"
import Fake from "components/Example/fake"
import materialColors from "utils/materialColors"

export default class Instructions extends React.Component {
  render() {
    return (
      <div>
        <Title>Can't find what you're searching for?</Title>
        <Group>
          <ExampleContainer>
            Try <Fake text={["department name"]} />, such as
          </ExampleContainer>
          <ExampleContainer>
            <Example text="BIOL" performSearch={this.props.performSearch} />
            <Example text="MATH" performSearch={this.props.performSearch} />
          </ExampleContainer>
        </Group>

        <Group>
          <ExampleContainer>
            Try <Fake text={["course name", "+", "course number"]} />, such as
          </ExampleContainer>
          <ExampleContainer>
            <Example
              text="HNRS 2030"
              performSearch={this.props.performSearch}
            />
            <Example
              text="BIOL 1002"
              performSearch={this.props.performSearch}
            />
          </ExampleContainer>
        </Group>

        <Group>
          <ExampleContainer>
            Try <Fake text={["course name", "+", "course name"]} />, such as
          </ExampleContainer>
          <ExampleContainer>
            <Example
              text="MATH algebra"
              performSearch={this.props.performSearch}
            />
            <Example
              text="BIOL micro"
              performSearch={this.props.performSearch}
            />
          </ExampleContainer>
        </Group>

        <Credits>
          made by <CreditsLink href="https://cmwall.io">
            Cody Wall
          </CreditsLink>{" "}
          and{" "}
          <CreditsLink href="https://elsealabs.com">Connor Elsea</CreditsLink>
        </Credits>
      </div>
    )
  }
}

const Title = glamorous.h2({
  fontWeight: 100,
  letterSpacing: 1.3,
  fontSize: "2.5rem",
  color: materialColors.grey[400],
  textAlign: "center",
  marginTop: 85,
  marginBottom: 45,
  animation: `${css.keyframes({
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  })} 1.2s ease-in-out`,
})

const Group = glamorous.div({
  marginBottom: 20,
  animation: `${css.keyframes({
    "0%": {
      opacity: 0,
      transform: "translate3d(0, 50%, 0)",
    },
    "65%": {
      transform: "translate3d(0, -3%, 0) scale(1.03)",
    },
    "100%": {
      opacity: 1,
      transform: "none",
    },
  })} 1.2s ease-in-out`,
})

const ExampleContainer = glamorous.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: "0.4rem",
  alignItems: "center",
  color: materialColors.grey[500],
  marginTop: 10,
})

const Credits = glamorous.div({
  marginTop: "6rem",
  textAlign: "center",
})

const CreditsLink = glamorous.a({
  textDecoration: "none",
  color: style.colors.lightPurple,
  fontWeight: "bold",
  "&:hover": {
    textShadow: "1px 0px 0px rgba(150, 150, 150, 1)",
  },
})
