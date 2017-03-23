import React, { Component } from "react";
import { connect } from "react-redux";
import Course from "components/Results/Course";

class InformationContainer extends Component {
  render() {
    return (
      <div className="InformationContainer">
        Showing {this.props.current_set.length} results...
        <div>
          Jump to...
          {this.props.current_set.map(item => (
            <a href={`#${item.number}`}>{item.abbreviation} {item.number}, </a>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    current_set: state.search.current_set,
    current_loading: state.search.current_loading,
    current_department: state.search.current_department,
    department_cache: state.search.department_cache,
    has_search: state.search.has_search
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(
  InformationContainer
);
