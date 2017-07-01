import React from "react"

const WelcomeCard = props =>
  <div className="Card Card--padding animated fadeInUp">
    <h2>Welcome</h2>
    <h1 className="Card__title">LSU Courses</h1>
    <p>
      Easily <span>search</span> courses, find open sections, and{" "}
      <span>plan</span> your schedule.
    </p>
    <span>
      Created by <a href="http://cmwall.io">Cody Wall</a> and{" "}
      <a href="http://elsealabs.com">Connor Elsea</a>
    </span>
  </div>

export default WelcomeCard
