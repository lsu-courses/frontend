import React from "react"
import DebounceInput from "react-debounce-input"
import glamorous from "glamorous"
import style from "utils/style"

export default class SearchContainer extends React.Component {
  renderBottomBar() {
    const { currentResults } = this.props

    return (
      <JumpToContainer>
        <Jump>
          <JumpIntro>Jump to...</JumpIntro>

          {currentResults.map(item => (
            <JumpLink
              key={`${item.abbreviation}_${item.number}_jump_link`}
              href={`#${item.number}`}
            >
              {item.abbreviation} {item.number}
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
          minLength={0}
          debounceTimeout={100}
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
  marginBottom: 30,
  boxShadow: "0px 29px 50px -8px rgba(0,0,0,0.10)",
  position: "fixed",
  left: 0,
  top: -2,
  borderRadius: 8,
  zIndex: 2,
  transition: "all 0.4s",
  overflow: "hidden",
  width: "100%",
})

const SearchInput = glamorous(DebounceInput)({
  padding: "28px 40px",
  fontSize: "2rem",
  fontWeight: 200,
  border: "none",
  transition: "all 0.4s",
  width: "100%",
  "&:focus": {
    outline: "none",
  },
  [style.sizes.mobile]: {
    fontSize: "1.6rem",
    padding: "20px 30px",
  },
})

const JumpToContainer = glamorous.div({
  height: 75,
  backgroundColor: style.colors.lightGray,
  borderTop: `1px solid ${style.colors.gray}`,
  borderBottom: `1px solid ${style.colors.gray}`,
  fontFamily: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Lucida Grande", sans-serif`,
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
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
  height: 75,
})

const JumpIntro = glamorous.div({
  fontStyle: "italic",
  color: "gray",
  padding: "0px 20px",
  [style.sizes.mobile]: {
    fontSize: "0.9rem",
    minWidth: 100,
  },
})

const JumpLink = glamorous.a({
  minWidth: 115,
  textAlign: "center",
  background: "white",
  color: style.colors.darkSlate,
  borderRadius: 8,
  margin: 5,
  padding: "10px 3px",
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
