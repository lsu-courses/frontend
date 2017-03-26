import React, { Component } from "react";
import DebounceInput from "react-debounce-input";

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="SearchInput">
        <DebounceInput
          minLength={0}
          debounceTimeout={500}
          className="SearchInput__Input"
          type="text"
          placeholder="Search"
          onChange={event => {
            this.setState({ input: event.target.value });
            this.props.performSearch(event.target.value);
          }}
        />
      </div>
    );
  }
}

export default SearchInput;
