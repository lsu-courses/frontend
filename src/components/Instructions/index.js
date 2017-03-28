import React from "react";

const Instructions = () => {
  return (
    <div className="Instructions">
      <h1>Instructions</h1>

      <div className="example">
        <h2>Using department name</h2>
        <div className="children">
          <h3><span>BIOL</span> <img src="/search.png" alt="search" /></h3>
          <h3><span>MATH</span> <img src="/search.png" alt="search" /></h3>
        </div>

      </div>

      {/*<iframe
        src="http://appl106.lsu.edu/reg%5Cschedrequest.nsf/(NoteID)/47826856DDC74A30862580F0007D6CFB?OpenDocument"
        className="inner"
      />*/}

      <div className="example">
        <h2>Using department name & course number</h2>
        <div className="children">
          <h3><span>HNRS 2030</span> <img src="/search.png" alt="search" /></h3>
          <h3><span>BIOL 1002</span> <img src="/search.png" alt="search" /></h3>
        </div>
      </div>

      <div className="example">
        <h2>Using department name & course name</h2>
        <div className="children">
          <h3>
            <span>MATH algebra</span> <img src="/search.png" alt="search" />
          </h3>
          <h3>
            <span>BIOL micro</span> <img src="/search.png" alt="search" />
          </h3>
        </div>
      </div>

      <h2>Website Made by Cody Wall and Connor Elsea</h2>

    </div>
  );
};

export default Instructions;
