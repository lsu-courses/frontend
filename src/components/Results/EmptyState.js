import React from "react"
import Instructions from "../Instructions"

const EmptyState = ({ search }) =>
  <div>
    <div className="ResultsContainer__empty-state">
      <h1>
        No results for "{search}"
      </h1>

      <h2>Use exact department abbreviation, such as "MUS" or "BIOL"</h2>
    </div>
    <Instructions />
  </div>

module.exports = EmptyState
