import React from "react"
import CourseDescription from "components/Results/CourseDescription"
import Section from "components/Results/Section"
import glamorous from "glamorous"
import style from "utils/style"

export default ({
  course: {
    abbreviation,
    number,
    hours,
    full_title,
    description,
    comments,
    sections,
  },
}) => (
  <Container>
    <Anchor id={number} />
    <Padded>
      <CourseTitle>
        <div>
          <HeadingName>
            <HeadingNameAbbreviation>{abbreviation}</HeadingNameAbbreviation>
            <HeadingNameNumber>{number}</HeadingNameNumber>
          </HeadingName>
          <HeadingFullTitle>{full_title}</HeadingFullTitle>
        </div>

        <HeadingInfo>
          <HeadingInfoNumber>
            <HeadingInfoNumberText>{hours}</HeadingInfoNumberText>
          </HeadingInfoNumber>
          <HeadingInfoText>CREDIT HOURS</HeadingInfoText>
        </HeadingInfo>
      </CourseTitle>

      <CourseDescription description={description} comments={comments} />
    </Padded>

    {sections.map(section => (
      <Section
        key={`course_${number}_section_${section.number}`}
        {...section}
      />
    ))}
  </Container>
)

const Container = glamorous.div({
  backgroundColor: "white",
  borderRadius: 8,
  paddingTop: "1rem",
  maxWidth: "750px",
  margin: "2.5rem auto",
  boxShadow: `0 19px 38px rgba(0, 0, 0, 0.15), 0 15px 12px rgba(0, 0, 0, 0.1)`,
  overflow: "auto",
  [style.sizes.mobile]: {
    margin: "2.5rem .8rem",
  },
})

const Anchor = glamorous.div({
  display: "block",
  position: "relative",
  top: "-14rem",
  visibility: "hidden",
  [style.sizes.mobile]: {
    top: "-12rem",
  },
})

const Padded = glamorous.div({
  padding: "0 1.5rem",
})

const CourseTitle = glamorous.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  [style.sizes.mobile]: {
    flexDirection: "column",
    marginBottom: "1rem",
  },
})

const HeadingName = glamorous.div({
  display: "flex",
  flexDirection: "row",
  maxWidth: 400,
})

const HeadingNameAbbreviation = glamorous.div({
  color: style.colors.almostBlack,
  fontSize: "3.6rem",
  fontWeight: "900",
  paddingRight: ".5rem",
  [style.sizes.mobile]: {
    fontSize: "2.5rem",
  },
})

const HeadingNameNumber = glamorous.div({
  color: style.colors.almostBlack,
  fontSize: "3.6rem",
  fontWeight: "300",
  [style.sizes.mobile]: {
    fontSize: "2.5rem",
  },
})

const HeadingFullTitle = glamorous.div({
  color: "gray",
  fontSize: "1.5rem",
  fontWeight: "300",
  marginBottom: "1rem",
  [style.sizes.mobile]: {
    fontSize: "1.2rem",
  },
})

const HeadingInfo = glamorous.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  fontSize: "1.6rem",
  [style.sizes.mobile]: {
    marginTop: "1rem",
    fontSize: "1rem",
  },
})

const HeadingInfoNumber = glamorous.div({
  backgroundColor: style.colors.almostBlack,
  borderRadius: 10,
  marginRight: ".5rem",
  padding: "5px 10px",
})

const HeadingInfoNumberText = glamorous.div({
  color: "white",
  fontSize: "1rem",
})

const HeadingInfoText = glamorous.div({
  color: style.colors.almostBlack,
  fontSize: "1.2rem",
})
