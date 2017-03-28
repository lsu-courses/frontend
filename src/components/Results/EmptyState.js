import React from "react";
import Instructions from "../Instructions";

const EmptyState = ({ search }) => {
  return (
    <div>
      <div className="ResultsContainer__empty-state">
        <h1>Searching for "{search}" didn't return anything</h1>
      </div>
      <Instructions />
    </div>
  );
};

module.exports = EmptyState;
