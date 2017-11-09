import React from "react"
import glamorous from "glamorous"
import shadow from "utils/shadow"
import style from "utils/style"
import materialColors from "utils/materialColors"
import Example from "components/Example"

export default class RecentSearch extends React.Component {
  state = {
    styles: {},
  }

  constructor(props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
  }

  getRecentSearches() {
    const searches = JSON.parse(window.localStorage.getItem("searches"))
    return searches
  }

  clearRecentSearches(event) {
    window.localStorage.clear()
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll(event) {
    let scrollTop = document.documentElement.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60)

    console.log(scrollTop)

    if (scrollTop > 0) {
      this.setState({
        styles: { opacity: "0", transform: "scale(0.7)" },
      })
    } else {
      this.setState({
        styles: { opacity: "1", transform: "scale(1)" },
      })
    }
  }

  render() {
    return (
      window.localStorage.getItem("searches") && (
        <Container styles={this.state.styles}>
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

const Container = glamorous.div(({ styles }) => ({
  display: "flex",
  alignItems: "center",
  width: 750,
  maxWidth: 750,
  margin: "0 auto",
  zIndex: 9000,
  [style.sizes.mobile]: {
    width: "96%",
    flexDirection: "column",
  },
  ...styles,
  transition: "all 1s",
}))

const Group = glamorous.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  zIndex: 9000,
})

const ExampleTitle = glamorous.h3({
  color: materialColors.grey[400],
  textopacity: "uppercase",
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: "0.85rem",
  marginRight: 15,
})
