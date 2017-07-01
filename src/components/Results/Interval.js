import React from "react"
import Case from "case"
import Tooltip from "react-tooltip"

function generateClass(day, days) {
  if (days.includes(day)) return `Dates__date Dates__date--selected`
  else return `Dates__date`
}

const Interval = ({
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
  s_cmi,
  s_cmi_written,
  s_cmi_spoken,
  s_cmi_tech,
  s_cmi_visual,
  s_svc,
  comments,
}) => {
  const emblems = genEmblems({
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
    <div className="Interval">
      <div className="Interval__top Interval__portion">
        <div className="Interval__dates">
          <div className="Dates">
            {generateInfoOverlay(is_lab, has_time, "lab")}
            {generateInfoOverlay(s_all_web, has_time, "web")}
            <div className={generateClass("MONDAY", days)}>M</div>
            <div className={generateClass("TUESDAY", days)}>T</div>
            <div className={generateClass("WEDNESDAY", days)}>W</div>
            <div className={generateClass("THURSDAY", days)}>T</div>
            <div className={generateClass("FRIDAY", days)}>F</div>
          </div>
        </div>

        <div className="Interval__info">
          {has_time
            ? <div className="Interval__info__time">
                <span>{formatTime(start)}</span> →{" "}
                <span>{formatTime(end)}</span>
              </div>
            : <div className="Interval__info__time tba">Time TBA</div>}

          {location_building || location_room
            ? <div className="Interval__info__location">
                <span className="room">
                  {location_room + " "}
                </span>
                <span className="building">
                  {Case.capital(location_building)}
                </span>
              </div>
            : <div className="Interval__info__location tba">Location TBA</div>}
        </div>

        <div className="Interval__instructors">
          {instructor[0].name !== ""
            ? instructor.map((inst, i) =>
                <p key={i}>
                  {formatInstructor(inst)}
                </p>
              )
            : <p className="none">No Instructor Listed</p>}
        </div>
      </div>

      {emblems.length > 0 &&
        <div className="Interval__bottom Interval__portion">
          <div className="Interval__emblems">
            {emblems.map((Emblem, i) =>
              <span key={i}>
                {Emblem}
              </span>
            )}
          </div>
        </div>}
    </div>
  )
}

function genEmblems(obj) {
  let emblems = []

  if (obj.s_night) emblems.push(getEmblem("night"))
  if (obj.is_lab) emblems.push(getEmblem("lab"))
  if (obj.s_cmi_spoken) emblems.push(getEmblem("cmi_spoken"))
  if (obj.s_cmi_written) emblems.push(getEmblem("cmi_written"))
  if (obj.s_cmi_visual) emblems.push(getEmblem("cmi_visual"))
  if (obj.s_cmi_tech) emblems.push(getEmblem("cmi_tech"))
  if (obj.s_all_web) emblems.push(getEmblem("all_web"))
  if (obj.s_most_web) emblems.push(getEmblem("most_web"))
  if (obj.s_some_web) emblems.push(getEmblem("some_web"))
  if (obj.s_half_web) emblems.push(getEmblem("half_web"))
  if (obj.s_majors_only) emblems.push(getEmblem("majors_only"))
  if (obj.s_req_dept_perm) emblems.push(getEmblem("req_dept_perm"))
  if (obj.s_req_inst_perm) emblems.push(getEmblem("req_inst_perm"))
  if (obj.comments.length > 0) emblems.push(getEmblem("comments", obj.comments))

  return emblems
}

function getEmblem(type, comments) {
  let tooltipID = `${type}-tooltip-${Math.floor(Math.random() * 50)}`
  let imgSrc = getIconSrc(type)
  let title = getEmblemTitle(type, comments)

  if (comments) tooltipID += Math.floor(Math.random() * 50)

  return (
    <div className="emblem">
      <Tooltip
        className="eblem__tooltip"
        id={tooltipID}
        data-id={tooltipID}
        effect="solid"
        delayShow={0}
      >
        <div className="emblem__tooltip__internal">
          <img src={imgSrc} alt="emblem" />
          <div>
            <h3>
              {title}
            </h3>
            <p>
              {getEmblemText(type, comments)}
            </p>
          </div>
        </div>
      </Tooltip>

      <div className="emblem__container" data-tip data-for={tooltipID}>
        <img src={imgSrc} alt="emblem" />
        <h3>
          {title}
        </h3>
      </div>
    </div>
  )
}

function getIconSrc(type) {
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

function getEmblemTitle(type, comments) {
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

function getEmblemText(type, comments) {
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

function generateInfoOverlay(is_lab, has_time, type) {
  return (
    is_lab &&
    !has_time &&
    <div className="info-overlay">
      {type === "lab" ? "Lab Time TBA" : "Section Online"}
    </div>
  )
}

function formatInstructor(inst) {
  return inst.name ? Case.capital(inst.name).split(" ").join(", ") + "." : ""
}

function formatTime(time) {
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

export default Interval
