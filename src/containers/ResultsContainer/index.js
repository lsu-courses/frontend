import React from "react"
import Loading from "components/Results/Loading"
import Course from "components/Results/Course"
import EmptyState from "components/Results/EmptyState"
import Instructions from "components/Instructions"
import glamorous from "glamorous"
import style from "utils/style"
import PopularSearchCard from "components/PopularSearchCard"
import RecentSearch from "components/RecentSearch"

export default class ResultsContainer extends React.Component {
  renderResults() {
    const { currentSearch, currentResults, loading, performSearch } = this.props

    if (currentResults && currentResults.length > 0) {
      return (
        <div style={{ marginTop: 85 }}>
          {currentResults.map((course, i) => (
            <Course
              course={course}
              key={i + course.abbreviation + course.number}
            />
          ))}
        </div>
      )
    } else if (currentSearch && currentSearch.length > 0 && !loading) {
      return [
        <EmptyState search={currentSearch} performSearch={performSearch} />,
        <Instructions performSearch={performSearch} />,
      ]
    } else {
      return [
        <RecentSearch performSearch={performSearch} />,
        <PopularSearchCard performSearch={performSearch} />,
        <Instructions performSearch={performSearch} />,
      ]
    }
  }

  render() {
    return (
      <Container>
        {this.props.loading && <Loading />}
        {this.renderResults()}
      </Container>
    )
  }
}

const Container = glamorous.div({
  paddingTop: "9rem",
  paddingBottom: "5rem",
  [style.sizes.mobile]: {
    paddingTop: "6rem",
  },
})
