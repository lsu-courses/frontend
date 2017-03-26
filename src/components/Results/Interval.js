import React from "react";
import Case from "case";
import Tooltip from "react-tooltip";

const generateClass = (day, days) => {
  if (days.includes(day)) return `Dates__date Dates__date--selected`;
  else return `Dates__date`;
};

const Interval = (
  {
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
    comments
  }
) => (
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
              <span>{formatTime(start)}</span> → <span>{formatTime(end)}</span>
            </div>
          : <div className="Interval__info__time tba">Time TBA</div>}

        {location_building || location_room
          ? <div className="Interval__info__location">
              <span className="room">{location_room + " "}</span>
              <span className="building">
                {Case.capital(location_building)}
              </span>
            </div>
          : <div className="Interval__info__location tba">Location TBA</div>}

      </div>

      <div className="Interval__instructors">
        {instructor.map((inst, i) => <p key={i}>{formatInstructor(inst)}</p>)}
      </div>
    </div>

    <div className="Interval__bottom Interval__portion">
      <div className="Interval__emblems">
        {s_night && getEmblem("night")}
        {is_lab && getEmblem("lab")}
        {/*s_cmi && getEmblem("cmi")*/}
        {s_cmi_spoken && getEmblem("cmi_spoken")}
        {s_cmi_written && getEmblem("cmi_written")}
        {s_cmi_visual && getEmblem("cmi_visual")}
        {s_cmi_tech && getEmblem("cmi_tech")}
        {s_majors_only && getEmblem("majors_only")}
        {s_all_web && getEmblem("all_web")}
        {s_most_web && getEmblem("most_web")}
        {s_half_web && getEmblem("half_web")}
        {s_some_web && getEmblem("some_web")}
      </div>
    </div>
  </div>
);

function getEmblem(type) {
  let tooltipID = type + "-tooltip";

  return (
    <div className="emblem">

      <Tooltip
        className="eblem__tooltip"
        id={tooltipID}
        effect="solid"
        delayShow={0}
      >
        <div className="emblem__tooltip__internal">
          <img src={getIconSrc(type)} alt="emblem" />
          <div>
            <h3>{getEmblemTitle(type)}</h3><p>{getEmblemText(type)}</p>
          </div>
        </div>
      </Tooltip>

      <div className="emblem__container" data-tip data-for={tooltipID}>
        <img src={getIconSrc(type)} alt="emblem" />
        <h3>{getEmblemTitle(type)}</h3>
      </div>

    </div>
  );
}

function getIconSrc(type) {
  if (type.includes("web")) return "/online.png";
  if (type === "lab") return "/lab.png";
  if (type === "night") return "/night.png";
  if (type === "cmi_written") return "/written.png";
  if (type === "cmi_spoken") return "/spoken.png";
  if (type.includes("cmi")) return "/com.png";
}

function getEmblemTitle(type) {
  if (type === "lab") return "Lab";
  if (type === "night") return "Night Course";
  if (type === "cmi") return "Com. Intensive";
  if (type === "cmi_written") return "Intesive: Writing";
  if (type === "cmi_spoken") return "Intesive: Speaking";
  if (type === "cmi_tech") return "Intesive: Technical";
  if (type === "cmi_visual") return "Intesive: Visual";
  if (type === "majors_only") return "Majors Only";
  if (type === "all_web") return "Online";
  if (type === "most_web") return "Mostly Online";
  if (type === "half_web") return "Half Online";
  if (type === "some_web") return "Partially Online";
  return "Undefined";
}

function getEmblemText(type) {
  if (type === "night") return "The day(s) above are held at night.";
  if (type === "lab") return "The day(s) above are a lab.";
  if (type === "cmi") return "The day(s) above are communication intensive.";
  if (type === "cmi_written") return "Writing";
  if (type === "majors_only") return "The day(s) above are for majors only.";
  if (type === "all_web") return "The day(s) above are entirely online.";
  if (type === "most_web") return "The day(s) above are mostly online.";
  if (type === "half_web") return "";
  if (type === "some_web") return "";
  return "Undefined";
}

function generateInfoOverlay(is_lab, has_time, type) {
  if (is_lab && !has_time && type === "lab")
    return <div className="info-overlay">Lab Time TBA</div>;
  if (is_lab && !has_time && type === "web")
    return <div className="info-overlay">Section Online</div>;
}

function formatInstructor(inst) {
  return inst.name ? Case.capital(inst.name).split(" ").join(", ") + "." : "";
}

function formatTime(time) {
  if (time.toLowerCase().includes("n")) {
    time = time.slice(0, 2) + ":" + time.slice(2, -1) + " PM";
    if (time.substr(0, 1) === "0") {
      return time.slice(1);
    } else {
      return time;
    }
  } else {
    return (time.slice(0, -2)[0] === "0"
      ? time.slice(1, -2)
      : time.slice(0, -2)) +
      ":" +
      time.slice(-2);
  }
}

export default Interval;
