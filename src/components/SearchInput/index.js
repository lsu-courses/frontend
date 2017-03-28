import React from "react";
import DebounceInput from "react-debounce-input";

const SearchInput = props => {
  return (
    <div className="SearchInput">
      <DebounceInput
        minLength={0}
        debounceTimeout={500}
        className="SearchInput__Input"
        type="text"
        placeholder="Search"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        onChange={event => props.performSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;
