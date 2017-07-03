import React from "react"

class HelpCard extends React.Component {
  render() {
    return (
      <div className="Card Card--padding animated fadeInUp">
        <h2>Using the Site</h2>
        <h1 className="Card__title">Help</h1>
        <p className="Card__paragraph">
          Use the <span>search bar</span> to find courses that fit into your
          schedule. Learn about that course's pre-requisites, sections when it
          is offered, how full it is, who is teaching it, and where on campus it
          is located.
        </p>
      </div>
    )
  }
}

export default HelpCard
