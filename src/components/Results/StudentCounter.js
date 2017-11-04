import React from "react"
import glamorous from "glamorous"
import style from "utils/style"

export default ({
  enrollment_available,
  enrollment_current,
  enrollment_is_full,
  enrollment_total,
}) => {
  let percent =
    Number(enrollment_total) === 0
      ? 100
      : Math.trunc(Number(enrollment_current) / Number(enrollment_total) * 100)

  return (
    <Container>
      <Percent>{percent}% Full</Percent>

      <Amount>
        {enrollment_available}/{enrollment_total} Spots Left
      </Amount>

      <Bar>
        <BarFill percent={percent} />
      </Bar>
    </Container>
  )
}

const Container = glamorous.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 4,
  width: 120,
  [style.sizes.mobile]: {
    width: 150,
  },
})

const Percent = glamorous.div({
  fontSize: "0.95rem",
  paddingBottom: 6,
})

const Amount = glamorous.div({
  fontSize: "0.77rem",
  paddingBottom: 16,
  color: "gray",
})

const Bar = glamorous.div({
  width: "100%",
  height: 20,
  borderRadius: 10,
  background: style.colors.gray,
  overflow: "hidden",
})

const BarFill = glamorous.div(({ percent }) => {
  let bar_suffix = "low"

  if (percent > 20 && percent < 46) bar_suffix = "less"
  if (percent > 45 && percent < 55) bar_suffix = "medium"
  if (percent > 54 && percent < 75) bar_suffix = "high"
  if (percent > 74 && percent < 85) bar_suffix = "higher"
  if (percent > 84 && percent < 93) bar_suffix = "highest"
  if (percent > 92 && percent < 100) bar_suffix = "danger"
  if (percent >= 100) bar_suffix = "full"

  const styles = {
    height: "100%",
  }

  switch (bar_suffix) {
    case "low":
      return {
        ...styles,
        width: "25%",
        background:
          "linear-gradient(90deg, rgb(106, 225, 107), rgb(38, 131, 38))",
      }
    case "less":
      return {
        ...styles,
        width: "40%",
        background:
          "linear-gradient(90deg, rgb(106, 225, 107), rgb(38, 131, 38))",
      }
    case "medium":
      return {
        ...styles,
        width: "50%",
        background:
          "linear-gradient(90deg, rgb(231, 203, 102), rgb(185, 152, 33))",
      }
    case "high":
      return {
        ...styles,
        width: "60%",
        background:
          "linear-gradient(90deg, rgb(216, 109, 79), rgb(129, 59, 29))",
      }
    case "higher":
      return {
        ...styles,
        width: "72%",
        background:
          "linear-gradient(90deg, rgb(216, 109, 79), rgb(129, 59, 29))",
      }
    case "highest":
      return {
        ...styles,
        width: "77%",
        background:
          "linear-gradient(90deg, rgb(216, 79, 79), rgb(129, 29, 29))",
      }
    case "danger":
      return {
        ...styles,
        width: "85%",
        background: "linear-gradient(90deg, rgb(175, 42, 42), rgb(90, 18, 18))",
      }
    case "full":
    default:
      return {
        ...styles,
        width: "100%",
        background: "linear-gradient(90deg, rgb(175, 42, 42), rgb(90, 18, 18))",
      }
  }
})
