import React from "react"

const examples = [
  { title: "By department name", searches: ["BIOL", "MATH"] },
  {
    title: "By department name & course number",
    searches: ["HNRS 2030", "BIOL 1002"],
  },
  {
    title: "By department name & course name",
    searches: ["MATH Algebra", "BIOL micro"],
  },
]

const Instructions = props =>
  <div className="Card Card--padding animated fadeInUp">
    <h2>How to search</h2>
    <h1 className="Card__title">Instructions</h1>

    {examples.map((example, ii) =>
      <div className="Example" key={ii}>
        <h2>
          {example.title}
        </h2>
        <div className="Example__searches">
          {example.searches.map((search, i) =>
            <div key={i}>
              {search} <img src="/search.png" alt="search" />
            </div>
          )}
        </div>
      </div>
    )}
  </div>

export default Instructions
