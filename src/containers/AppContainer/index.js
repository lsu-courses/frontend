import React, { Component } from "react";
import SearchContainer from "containers/SearchContainer";
import ResultsContainer from "containers/ResultsContainer";
import InformationContainer from "containers/InformationContainer";

import "styles/index.sass";

class AppContainer extends Component {
  render() {
    return (
      <div className="AppContainer">
        <SearchContainer />
        <ResultsContainer />
      </div>
    );
  }
}

export default AppContainer;
