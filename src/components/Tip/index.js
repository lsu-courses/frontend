import React from "react"
import glamorous from "glamorous"
import shadow from "utils/shadow"
import style from "utils/style"
import materialColors from "utils/materialColors"
import LightIcon from "./light-bulb"
import { css } from "glamor"
import Animation from "utils/Animation"

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <LightIcon color={materialColors.green[300]} />
        <Title>{this.props.title}</Title>
        <Animation animationDuration={1} animationDelayOffset={0.5}>
          <Content>{this.props.text}</Content>
        </Animation>
      </Container>
    )
  }
}

const Container = glamorous.div({
  display: "flex",
  alignItems: "center",
  marginTop: 20,
  fontSize: "0.9rem",
  color: materialColors.green[300],
  "> *": {
    marginRight: 10,
  },
})

const Title = glamorous.div({
  color: "white",
  background: materialColors.green[300],
  borderRadius: 4,
  padding: "2px 8px",
  textTransform: "uppercase",
  fontWeight: 700,
  letterSpacing: 1,
  fontSize: "0.75rem",
  marginTop: 3,
  animation: `${css.keyframes({
    "0%": {
      transform: "scale(1)",
      boxShadow: "none",
    },
    "65%": {
      transform: "scale(1.12)",
      boxShadow: shadow(300),
    },
    "100%": {
      transform: "none",
      boxShadow: "none",
    },
  })} 0.9s infinite`,
})

const Content = glamorous.div({
  fontWeight: 400,
  marginTop: 2,
  color: materialColors.grey[400],
})
