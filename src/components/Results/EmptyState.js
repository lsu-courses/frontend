import React from "react"
import glamorous from "glamorous"
import style from "utils/style"

const EmptyState = ({ search }) => (
  <Container>Searching for "{search}" didn't return anything.</Container>
)

export default EmptyState

const Container = glamorous.div({
  padding: "2rem",
  fontSize: "1.2rem",
  textAlign: "center",
  color: style.colors.almostBlack,
})
