import React from "react"
import glamorous from "glamorous"
import { css } from "glamor"
import style from "utils/style"
import materialColors from "utils/materialColors"

// export default () => <Spinner />

export default class Loading extends React.Component {
  render() {
    return (
      <Container>
        <img src="./Magnify.gif" style={{ height: 50 }} />{" "}
        <Text>
          <span>Loading</span> Course Results
        </Text>
      </Container>
    )
  }
}

const Container = glamorous.div({
  marginTop: -5,
  marginBottom: 10,
  display: "flex",
  justifyContent: "center",
})

const Text = glamorous.p({
  letterSpacing: 1,
  textTransform: "uppercase",
  fontWeight: 400,
  fontSize: "0.85rem",
  color: materialColors.grey[600],
  marginLeft: 5,
  "> span": {
    fontWeight: 700,
    paddingRight: 3,
  },
})

const Spinner = glamorous.div({
  borderRadius: "50%",
  width: "5rem",
  height: "5rem",
  margin: "2rem auto",
  borderTop: ".5rem solid rgba(0, 0, 0, 0)",
  borderRight: ".5rem solid rgba(0, 0, 0, 0)",
  borderBottom: ".5rem solid rgba(0, 0, 0, 0)",
  borderLeft: `.5rem solid ${style.colors.lightPurple}`,
  animation: `${css.keyframes({
    "0%": { transform: `rotate(0deg)` },
    "100%": { transform: `rotate(360deg)` },
  })} 1.5s linear infinite`,
})
