import React, { Component } from "react"
import { connect } from "react-redux"
import SearchInput from "components/SearchInput"
import {
  performSearch,
  requestDepartment,
  filterDepartment,
  clearDepartment,
  setGlobalSearch,
} from "redux/ducks/search"
import ReactGA from "react-ga"

class SearchContainer extends Component {
  _processInput(input) {
    const lower = input.toLowerCase()
    const searchInputArray = lower.split(" ")

    return {
      text: lower,
      searchInputArray,
      rest:
        searchInputArray.length > 1
          ? lower.slice(lower.indexOf(" ")).trim()
          : "",
    }
  }

  _performSearch(input) {
    this.props.setGlobalSearch(input)

    const { text, searchInputArray, rest } = this._processInput(input)

    if (input.length < 2) {
      return this.props.clearDepartment()
    }

    const firstWord = searchInputArray[0]

    ReactGA.event({
      category: "Search",
      action: "User Searched",
      label: text,
    })

    if (isNaN(firstWord)) {
      //if (departments.includes(array[0])) {
      if (true) {
        if (this.props.current_department === firstWord) {
          // The department currently in the working set is the department
          // that the user typed. Do nothing except re-filter
          this.props.filterDepartment(rest)
        } else {
          if (this.props.department_cache[firstWord]) {
            // Department found in cache
            // REDUX: selectDepartmentFromCache
            // - set selected dep
            // - fill working set with dep's courses
            // - filter working set based on criteria
            this.props.filterDepartment(rest, firstWord)
          } else {
            // department not found in cache
            // REDUX: requestDepartmentContent
            // - request dep's courses from server
            // - add courses to cache
            // - set selected dep
            // - fill working set with dep's courses
            // - filter working set based on criteria

            this.props.requestDepartment(firstWord).then(() => {
              this.props.filterDepartment(rest)
            })
          }
        }

        // check if redux has department's courses cached
        //  - redux state is like `cache: { csc: [], math: [], etc: [] }`
        // if so, filter the cached courses into working set and display
        // if not, query the backend for all of that department's courses
      } else {
        //console.log("something else...");
        // can either be course name or teacher. send to api and let it figure out.
        // these cannot be cached.
      }
    } else {
      //console.log("error... you typed number first");
      // error. they typed a number first. ask them what department they want.
    }
  }

  _renderBottomBar() {
    return (
      <div className="SearchContainer__bottom">
        <div className="SearchContainer__bottom__jump">
          <span>Jump to...</span>
          {this.props.current_set.map((item, i) =>
            <a className="animated fadeIn" key={i} href={`#${item.number}`}>
              {item.abbreviation} {item.number}
            </a>
          )}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="SearchContainer">
        <div className="SearchContainer__top">
          <SearchInput performSearch={this._performSearch.bind(this)} />
        </div>

        {this.props.current_set.length > 0 ? this._renderBottomBar() : null}

        <div className="SearchContainer__tools">
          Tools and tool buttons will go here
        </div>

        {/*<div>Has Search: {this.props.has_search ? "Yes" : "No"}</div>*/}
        {/*this.props.current_loading
          ? <div>Loading</div>
          : <pre>{JSON.stringify(this.props.current_set, null, 2)}</pre>*/}
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    results: state.search.results || [],
    current_set: state.search.current_set,
    current_loading: state.search.current_loading,
    current_department: state.search.current_department,
    department_cache: state.search.department_cache,
    has_search: state.search.has_search,
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    performSearch: input => dispatch(performSearch(input)),
    clearDepartment: () => dispatch(clearDepartment()),
    requestDepartment: dept => dispatch(requestDepartment(dept)),
    filterDepartment: (filter, change) =>
      dispatch(filterDepartment(filter, change)),
    setGlobalSearch: input => dispatch(setGlobalSearch(input)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
