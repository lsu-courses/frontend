import { css } from "glamor"
import glamorous from "glamorous"
import style from "utils/style"
import materialColors from "utils/materialColors"

export const CardHeader = glamorous.div({
  width: "100%",
  textAlign: "left",
  marginBottom: 15,
  marginTop: -10,
})

export const Subtitle = glamorous.div({
  color: materialColors.grey[800],
  textTransform: "uppercase",
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: "0.85rem",
})

export const Title = glamorous.div({
  color: materialColors.grey[800],
  fontSize: "2.4rem",
  fontWeight: 700,
  marginBottom: 5,
  [style.sizes.mobile]: {
    fontSize: "2rem",
  },
})

export const Container = glamorous.div({
  borderRadius: 10,
  maxWidth: 750,
  width: 750,
  margin: "auto",
  marginBottom: 45,
  padding: "2rem",
  color: style.colors.darkSlate,
  backgroundColor: "white",
  fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif`,
  boxShadow: "0px 29px 50px -8px rgba(0,0,0,0.10)",
  textAlign: "center",

  animation: `${css.keyframes({
    "0%": {
      transform: "translate3d(0, 50%, 0)",
    },
    "65%": {
      transform: "translate3d(0, -3%, 0) scale(1.03)",
    },
    "100%": {
      transform: "none",
    },
  })} 0.6s ease-in-out`,
  [style.sizes.mobile]: {
    padding: "2rem",
    marginTop: 0,
    width: "90%",
  },
})
