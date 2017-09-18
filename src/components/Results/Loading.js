import React from "react"
import glamorous from "glamorous"
import { css } from "glamor"
import style from "utils/style"

export default () => <Spinner />

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
