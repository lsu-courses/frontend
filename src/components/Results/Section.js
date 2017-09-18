import React from "react"
import StudentCounter from "components/Results/StudentCounter"
import Interval from "components/Results/Interval"
import glamorous from "glamorous"
import style from "utils/style"

export default ({
  number,
  title,
  enrollment_available,
  enrollment_current,
  enrollment_is_full,
  enrollment_total,
  timeIntervals,
  special,
}) => (
  <Container number={number}>
    <Top>
      <Title>
        <TitleHeader>SECTION</TitleHeader>
        <TitleSection>{number}</TitleSection>
      </Title>

      <StudentCounter
        enrollment_available={enrollment_available}
        enrollment_current={enrollment_current}
        enrollment_is_full={enrollment_is_full}
        enrollment_total={enrollment_total}
      />
    </Top>

    <Intervals>
      {timeIntervals &&
        timeIntervals.map((interval, i) => (
          <Interval key={number + title + i} {...interval} />
        ))}
    </Intervals>
  </Container>
)

const Container = glamorous.div(
  {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "20px 30px",
    [style.sizes.mobile]: {
      padding: 0,
      flexDirection: "column",
    },
  },
  ({ number }) => {
    const even = Number(number) % 2 === 0
    return {
      backgroundColor: even ? "white" : style.colors.almostWhite,
      borderBottom: !even && `1px solid ${style.colors.almostWhite}`,
      borderRop: !even && `1px solid ${style.colors.almostWhite}`,
    }
  }
)

const Top = glamorous.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: 13,
  marginRight: 10,
  [style.sizes.mobile]: {
    margin: "1rem 0",
    flexDirection: "row",
    justifyContent: "space-around",
  },
})

const Title = glamorous.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
})

const TitleHeader = glamorous.div({
  color: "gray",
  fontSize: "0.7rem",
  fontWeight: 800,
  textTransform: "uppercase",
  paddingBottom: 5,
  [style.sizes.mobile]: {
    fontSize: "0.85rem",
  },
})

const TitleSection = glamorous.div({
  color: style.colors.almostBlack,
  fontSize: "2.6rem",
  fontWeight: "bold",
  [style.sizes.mobile]: {
    fontSize: "2.8rem",
  },
})

const Intervals = glamorous.div({
  flexGrow: 1,
})
