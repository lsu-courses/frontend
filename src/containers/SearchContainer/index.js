import React from "react"
import DebounceInput from "react-debounce-input"
import glamorous from "glamorous"
import style from "utils/style"
import materialColors from "utils/materialColors"

export default class SearchContainer extends React.Component {
  renderBottomBar() {
    const { currentResults } = this.props
    const dept = currentResults[0].abbreviation

    return (
      <JumpToContainer>
        <Jump>
          <JumpIntro>
            Jump To <span>{dept}</span>...
          </JumpIntro>

          {currentResults.map(item => (
            <JumpLink
              key={`${item.abbreviation}_${item.number}_jump_link`}
              href={`#${item.number}`}
            >
              {item.number}
            </JumpLink>
          ))}
        </Jump>
      </JumpToContainer>
    )
  }

  render() {
    const { currentSearch, currentResults, performSearch } = this.props

    return (
      <Container>
        <SearchInput
          minLength={2}
          debounceTimeout={2000}
          type="text"
          placeholder={currentSearch ? "" : "Search"}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          value={currentSearch}
          onChange={event => performSearch(event.target.value)}
        />

        {currentResults && currentResults.length > 0 && this.renderBottomBar()}
      </Container>
    )
  }
}

const Container = glamorous.div({
  backdropFilter: "blur(4px)",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  boxShadow: "0px 29px 50px -8px rgba(0,0,0,0.16)",
  position: "fixed",
  borderRadius: 10,
  transition: "all 0.4s",
  overflow: "hidden",
  zIndex: 9999,
  maxWidth: 750,
  width: 750,
  left: "50%",
  marginLeft: -(750 / 2),
  marginTop: 26,
  transform: "scale(1.04)",
  [style.sizes.mobile]: {
    transform: "none",
    width: "100%",
    top: 0,
    left: 0,
    margin: 0,
    borderRadius: 0,
  },
})

const SearchInput = glamorous(DebounceInput)({
  padding: "28px 40px",
  fontSize: "2rem",
  fontWeight: 200,
  zIndex: 9999,
  border: "none",
  transition: "all 0.4s",
  width: "100%",
  margin: 0,
  "&:focus": {
    outline: "none",
  },
  [style.sizes.mobile]: {
    fontSize: "1.6rem",
  },
})

const JumpToContainer = glamorous.div({
  height: 60,
  backgroundColor: style.colors.lightGray,
  borderTop: `1px solid ${style.colors.gray}`,
  borderBottom: `1px solid ${style.colors.gray}`,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif`,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: 0,
  [style.sizes.mobile]: {
    height: 60,
  },
})

const Jump = glamorous.div({
  display: "flex",
  alignItems: "center",
  overflowX: "scroll",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  height: 60,
  "::-webkit-scrollbar": {
    display: "none",
  },
})

const JumpIntro = glamorous.div({
  letterSpacing: 1,
  textTransform: "uppercase",
  color: "gray",
  fontWeight: 500,
  padding: "0px 20px",
  fontSize: "0.75rem",
  [style.sizes.mobile]: {
    fontSize: "0.75rem",
    minWidth: 100,
  },
  "> span": {
    fontWeight: 800,
  },
})

const JumpLink = glamorous.a({
  minWidth: 50,
  fontSize: "0.9rem",
  textAlign: "center",
  background: "white",
  color: style.colors.darkSlate,
  borderRadius: 8,
  margin: 5,
  padding: "6px 0",
  textDecoration: "none",
  boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.14)",
  transition: "all 0.2s",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    [style.sizes.mobile]: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.14)",
    },
  },
  "&:visited": {
    color: style.colors.darkSlate,
  },
})
