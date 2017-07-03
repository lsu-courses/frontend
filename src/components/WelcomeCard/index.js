import React from "react"

class WelcomeCard extends React.Component {
  state = {
    help: false,
  }

  render() {
    return (
      <div className="Card Card--padding animated fadeInUp">
        <h2>Welcome</h2>
        <h1 className="Card__title">LSU Courses</h1>
        <p className="Card__paragraph">
          Easily <span>search</span> courses, quickly find open sections, and{" "}
          <span>plan</span> your schedule.
        </p>

        <a
          onClick={e => {
            e.preventDefault()
            this.setState({ help: !this.state.help })
          }}
        >
          Get More Help
        </a>

        {this.state.help &&
          <div className="Card__help">
            <span className="Card__paragraph">
              You can search courses through the search bar located at the top
              of the website. First, type the abbreviation (Such as MATH or
              HNRS) of the department you are interested in searching for. This
              will show all the courses for this department. You can filter them
              further by typing a course number or name.
            </span>
          </div>}

        <span>
          Created by <a href="http://cmwall.io">Cody Wall</a> and{" "}
          <a href="http://elsealabs.com">Connor Elsea</a>
        </span>
      </div>
    )
  }
}

export default WelcomeCard
