import React, { Component } from "react"
import SearchContainer from "containers/SearchContainer"
import ResultsContainer from "containers/ResultsContainer"

import "styles/index.sass"

import ReactGA from "react-ga"

ReactGA.initialize("UA-96232262-1")

class AppContainer extends Component {
  componentDidMount() {
    ReactGA.pageview("/")
  }

  render() {
    return (
      <div className="AppContainer">
        <SearchContainer />
        <ResultsContainer />
      </div>
    )
  }
}

export default AppContainer
