import React, { Component } from "react";
import { connect } from "react-redux";
import Course from "components/Results/Course";
import Loading from "components/Results/Loading";
import EmptyState from "components/Results/EmptyState";
import Instructions from "components/Instructions"

class ResultsContainer extends Component {
  _renderResults() {
    if (this.props.current_set.length > 0) {
      return this.props.current_set.map((course, i) => (
        <Course course={course} key={i} />
      ));
    } else if (this.props.has_search) {
      return <EmptyState search={this.props.search_input} />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className="ResultsContainer">
        {this.props.current_loading ? <Loading /> : this._renderResults()}
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
    has_search: state.search.has_search,
    search_input: state.search.search_input
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
