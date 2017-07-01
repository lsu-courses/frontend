import React from "react"

const StudentCounter = ({
  enrollment_available,
  enrollment_current,
  enrollment_is_full,
  enrollment_total,
}) => {
  let percent = Math.trunc(
    Number(enrollment_current) / Number(enrollment_total) * 100
  )

  let bar_suffix = "low"

  if (percent > 20 && percent < 46) bar_suffix = "less"
  if (percent > 45 && percent < 55) bar_suffix = "medium"
  if (percent > 54 && percent < 75) bar_suffix = "high"
  if (percent > 74 && percent < 85) bar_suffix = "higher"
  if (percent > 84 && percent < 93) bar_suffix = "highest"
  if (percent > 92 && percent < 100) bar_suffix = "danger"
  if (percent >= 100) bar_suffix = "full"

  return (
    <div className="StudentCounter">
      <div className="StudentCounter__percent">
        {percent}% Full
      </div>
      <div className="StudentCounter__amount">
        {enrollment_available}/{enrollment_total} Spots Left
      </div>
      <div className={"StudentCounter__bar"}>
        <div className={`StudentCounter__bar--${bar_suffix}`} />
      </div>
    </div>
  )
}

export default StudentCounter
