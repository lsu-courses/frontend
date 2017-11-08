import React from "react"
import glamorous from "glamorous"
import shadow from "utils/shadow"
import style from "utils/style"
import materialColors from "utils/materialColors"
import LightIcon from "./light-bulb"
import { css } from "glamor"

export default class Example extends React.Component {
  render() {
    return (
      <Container>
        <LightIcon color={materialColors.green[300]} />
        <Title>{this.props.title}</Title>
        <Content>{this.props.text}</Content>
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
  padding: "2px 5px",
  textTransform: "uppercase",
  fontWeight: 600,
  letterSpacing: 1,
  fontSize: "0.75rem",
  marginTop: 3,
  animation: `${css.keyframes({
    "0%": {
      transform: "scale(1)",
    },
    "65%": {
      transform: "scale(1.06)",
    },
    "100%": {
      transform: "scale(1)",
    },
  })} 0.6s infinite`,
})

const Content = glamorous.div({
  fontWeight: 400,
  marginTop: 2,
  color: materialColors.grey[400],
})
