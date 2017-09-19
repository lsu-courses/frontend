import React from "react"
import glamorous from "glamorous"
import style from "utils/style"

export default class Interval extends React.Component {
  generateInfoOverlay(is_lab, has_time, type) {
    return (
      is_lab &&
      !has_time && (
        <InfoOverlay>
          {type === "lab" ? "Lab Time TBA" : "Section Online"}
        </InfoOverlay>
      )
    )
  }

  generateClass(day, days) {
    const firstLetter = day.charAt(0)

    if (days.includes(day)) {
      return <DateSelected>{firstLetter}</DateSelected>
    } else {
      return <DateUnselected>{firstLetter}</DateUnselected>
    }
  }

  genEmblems(obj) {
    let emblems = []

    if (obj.s_night) emblems.push(this.getEmblem("night"))
    if (obj.is_lab) emblems.push(this.getEmblem("lab"))
    if (obj.s_cmi_spoken) emblems.push(this.getEmblem("cmi_spoken"))
    if (obj.s_cmi_written) emblems.push(this.getEmblem("cmi_written"))
    if (obj.s_cmi_visual) emblems.push(this.getEmblem("cmi_visual"))
    if (obj.s_cmi_tech) emblems.push(this.getEmblem("cmi_tech"))
    if (obj.s_all_web) emblems.push(this.getEmblem("all_web"))
    if (obj.s_most_web) emblems.push(this.getEmblem("most_web"))
    if (obj.s_some_web) emblems.push(this.getEmblem("some_web"))
    if (obj.s_half_web) emblems.push(this.getEmblem("half_web"))
    if (obj.s_majors_only) emblems.push(this.getEmblem("majors_only"))
    if (obj.s_req_dept_perm) emblems.push(this.getEmblem("req_dept_perm"))
    if (obj.s_req_inst_perm) emblems.push(this.getEmblem("req_inst_perm"))
    if (obj.comments.length > 0)
      emblems.push(this.getEmblem("comments", obj.comments))

    return emblems
  }

  getEmblem(type, comments) {
    let imgSrc = this.getIconSrc(type)
    let title = this.getEmblemTitle(type, comments)

    return (
      <Emblem>
        <EmblemImage src={imgSrc} alt="emblem" />
        <EmblemTitle>{title}</EmblemTitle>
      </Emblem>
    )
  }

  getIconSrc(type) {
    if (type.includes("web")) return "/online.png"
    if (type === "lab") return "/lab.png"
    if (type === "night") return "/night.png"
    if (type === "cmi_written") return "/written.png"
    if (type === "cmi_spoken") return "/spoken.png"
    if (type.includes("cmi")) return "/com.png"
    if (type === "comments") return "/comments.png"

    if (
      type === "req_dept_perm" ||
      type === "req_inst_perm" ||
      type === "majors_only"
    )
      return "/lock_alt.png"
  }

  getEmblemTitle(type, comments) {
    if (type === "lab") return "Lab"
    if (type === "night") return "Night Course"
    if (type === "cmi") return "Com. Intensive"
    if (type === "cmi_written") return "Intesive: Writing"
    if (type === "cmi_spoken") return "Intesive: Speaking"
    if (type === "cmi_tech") return "Intesive: Technical"
    if (type === "cmi_visual") return "Intesive: Visual"
    if (type === "majors_only") return "Majors Only"
    if (type === "req_dept_perm") return "Req. Department Perm."
    if (type === "req_inst_perm") return "Req. Instructor Perm."
    if (type === "comments")
      return `${comments.length} Comment${comments.length > 1 ? "s" : ""}`
    if (type === "all_web") return "Online"
    if (type === "most_web") return "Mostly Online"
    if (type === "half_web") return "Half Online"
    if (type === "some_web") return "Partially Online"
    return "Undefined"
  }

  getEmblemText(type, comments) {
    const days = "The day(s) above are "
    const course = "Course features intensive "

    if (type === "night") return days + "held at night."
    if (type === "lab") return days + "a lab."
    if (type === "cmi") return days + "communication intensive."
    if (type === "cmi_written") return course + "writing activities."
    if (type === "cmi_spoken") return course + "speaking activities."
    if (type === "cmi_technical") return course + "technical activities."
    if (type === "majors_only") return days + "for majors only."
    if (type === "all_web") return days + "entirely online."
    if (type === "most_web") return days + "mostly online."
    if (type === "half_web") return days + "about half online."
    if (type === "some_web") return days + "offer some portions online"
    if (type === "comments") return comments + ""
    return "No specific details"
  }

  capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
  }

  formatInstructor(inst) {
    return inst.name
      ? inst.name
          .split(" ")
          .map(part => this.capitalize(part))
          .join(", ") + "."
      : ""
  }

  formatTime(time) {
    if (time.toLowerCase().includes("n")) {
      time = time.slice(0, 2) + ":" + time.slice(2, -1) + " PM"
      if (time.substr(0, 1) === "0") {
        return time.slice(1)
      } else {
        return time
      }
    } else {
      return (
        (time.slice(0, -2)[0] === "0" ? time.slice(1, -2) : time.slice(0, -2)) +
        ":" +
        time.slice(-2)
      )
    }
  }

  render() {
    const {
      instructor,
      days,
      has_time,
      start,
      end,
      location_building,
      location_room,
      is_lab,
      s_night,
      s_all_web,
      s_most_web,
      s_half_web,
      s_some_web,
      s_req_dept_perm,
      s_req_inst_perm,
      s_majors_only,
      s_cmi_written,
      s_cmi_spoken,
      s_cmi_tech,
      s_cmi_visual,
      comments,
    } = this.props

    const emblems = this.genEmblems({
      s_night,
      s_all_web,
      s_most_web,
      s_half_web,
      s_some_web,
      is_lab,
      s_cmi_spoken,
      s_cmi_tech,
      s_cmi_written,
      s_cmi_visual,
      s_majors_only,
      s_req_dept_perm,
      s_req_inst_perm,
      comments,
    })

    return (
      <Container>
        <IntervalPortion>
          <Dates>
            {this.generateInfoOverlay(is_lab, has_time, "lab")}
            {this.generateInfoOverlay(s_all_web, has_time, "web")}
            {this.generateClass("MONDAY", days)}
            {this.generateClass("TUESDAY", days)}
            {this.generateClass("WEDNESDAY", days)}
            {this.generateClass("THURSDAY", days)}
            {this.generateClass("FRIDAY", days)}
          </Dates>

          <Info>
            {has_time ? (
              <InfoTime>
                <TimeSpan>{this.formatTime(start)}</TimeSpan> →{" "}
                <TimeSpan>{this.formatTime(end)}</TimeSpan>
              </InfoTime>
            ) : (
              <InfoTime tba>Time TBA</InfoTime>
            )}

            {location_building || location_room ? (
              <Location>
                <span>{location_room + " "}</span>
                <span>
                  {location_building
                    .split(" ")
                    .map(section => this.capitalize(section))
                    .join(" ")}
                </span>
              </Location>
            ) : (
              <Location tba>Location TBA</Location>
            )}
          </Info>

          <Instructors>
            {instructor[0].name !== "" ? (
              instructor.map((inst, i) => (
                <div key={`instructor_${i}`}>{this.formatInstructor(inst)}</div>
              ))
            ) : (
              <NoInstructors>No Instructor Listed</NoInstructors>
            )}
          </Instructors>
        </IntervalPortion>

        {emblems.length > 0 && (
          <IntervalPortion>
            <Emblems>
              {emblems.map((emblem, i) => (
                <span key={`emblem_${i}`}>{emblem}</span>
              ))}
            </Emblems>
          </IntervalPortion>
        )}
      </Container>
    )
  }
}

const Container = glamorous.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: 7,
  paddingLeft: 25,
  paddingTop: 8,
  flexGrow: 1,
  "&:last-of-type": {
    paddingBottom: 0,
    marginTop: 10,
  },
  [style.sizes.mobile]: {
    paddingTop: 22,
    borderTop: `1px dashed ${style.colors.gray}`,
    justifyContent: "center",
  },
})

const IntervalPortion = glamorous.div({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  [style.sizes.mobile]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
})

const Dates = glamorous.div({
  backgroundColor: style.colors.gray,
  borderRadius: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  position: "relative",
  marginRight: 18,
  [style.sizes.mobile]: {
    display: "flex",
    justifyContent: "center",
    marginRight: 0,
    marginBottom: "1rem",
  },
})

const InfoOverlay = glamorous.div({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: 10,
  color: "gray",
  fontSize: "0.86rem",
  fontWeight: 600,
  backgroundColor: style.colors.gray,
  padding: "6px 10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const DateStyles = {
  width: 36,
  textAlign: "center",
  color: style.colors.darkerGray,
  paddingTop: 16,
  paddingBottom: 14,
  "&:last-child": {
    borderRight: "none",
  },
}

const DateSelected = glamorous.div({
  ...DateStyles,
  transform: "scale(1.2)",
  borderRadius: 8,
  background: "linear-gradient(133deg, rgb(72, 72, 72), rgb(25, 25, 25))",
  color: "white",
})

const DateUnselected = glamorous.div(DateStyles)

const Info = glamorous.div({
  textAlign: "left",
  width: 170,
  [style.sizes.mobile]: {
    width: "100%",
  },
})

const InfoTime = glamorous.div(
  {
    fontStyle: "italic",
    color: style.colors.darkSlate,
    "@media (max-width: 750px)": {
      textAlign: "center",
    },
  },
  ({ tba }) => ({
    color: tba && "gray",
  })
)

const TimeSpan = glamorous.span({
  color: style.colors.almostBlack,
  fontWeight: "bold",
  fontStyle: "normal",
})

const Location = glamorous.div(
  {
    [style.sizes.mobile]: {
      textAlign: "center",
    },
  },
  ({ tba }) => ({
    color: tba && "gray",
  })
)

const Instructors = glamorous.div({
  display: "flex",
  alignItems: "flex-start",
  margin: 0,
  [style.sizes.mobile]: {
    textAlign: "center",
    color: "gray",
    marginTop: "1rem",
    marginBottom: "1rem",
  },
})

const NoInstructors = glamorous.p({
  display: "flex",
  alignItems: "flex-start",
  fontSize: "0.9rem",
  color: style.colors.darkSlate,
  margin: 0,
})

const Emblems = glamorous.div({
  paddingTop: 10,
  display: "flex",
  alignItems: "center",
  [style.sizes.mobile]: {
    marginBottom: "1rem",
  },
})

const Emblem = glamorous.div({
  display: "flex",
  alignItems: "center",
})

const EmblemImage = glamorous.img({
  height: 24,
  width: 24,
  transform: "scale(1.1)",
  marginRight: 8,
})

const EmblemTitle = glamorous.div({
  fontSize: "0.7rem",
  textTransform: "uppercase",
  marginRight: 12,
  color: "gray",
})
