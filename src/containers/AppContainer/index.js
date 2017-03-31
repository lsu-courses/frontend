import React, { Component } from "react";
import SearchContainer from "containers/SearchContainer";
import ResultsContainer from "containers/ResultsContainer";

import "styles/index.sass";
import DesktopCalendar from "containers/DesktopCalendar";
import ReactGA from "react-ga";

ReactGA.initialize("UA-96232262-1");

class AppContainer extends Component {
  componentDidMount() {
    ReactGA.pageview("/");
  }

  render() {
    return (
      <div className="AppContainer">
        <DesktopCalendar />
        <SearchContainer />
        <ResultsContainer />
      </div>
    );
  }
}

export default AppContainer;
