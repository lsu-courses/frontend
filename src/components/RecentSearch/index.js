import React from "react"
import glamorous from "glamorous"
import shadow from "utils/shadow"
import style from "utils/style"
import materialColors from "utils/materialColors"
import Example from "components/Example"

export default class RecentSearch extends React.Component {
  getRecentSearches() {
    const searches = JSON.parse(window.localStorage.getItem("searches"))
    return searches
  }

  clearRecentSearches(event) {
    window.localStorage.clear()
  }

  render() {
    return (
      window.localStorage.getItem("searches") && (
        <Container>
          <ExampleTitle>Recent Searches</ExampleTitle>
          <Group>
            {this.getRecentSearches().map(search => (
              <Example text={search} performSearch={this.props.performSearch} />
            ))}
          </Group>
          <Button onClick={this.clearRecentSearches}>Clear Recents</Button>
        </Container>
      )
    )
  }
}

const Button = glamorous.button({
  background: "none",
  border: "none",
  cursor: "pointer",
  color: materialColors.grey[500],
})

const Container = glamorous.div({
  display: "flex",
  alignItems: "center",
  width: 750,
  maxWidth: 750,
  margin: "0 auto",
  zIndex: 9000,
})

const Group = glamorous.div({
  display: "flex",
  zIndex: 9000,
})

const ExampleTitle = glamorous.h3({
  color: materialColors.grey[400],
  textTransform: "uppercase",
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: "0.85rem",
  marginRight: 15,
})
