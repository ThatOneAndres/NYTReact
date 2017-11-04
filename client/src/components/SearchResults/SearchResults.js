import React from "react";
import "./SearchResults.css";

const SearchResults = props =>
  <ul className="list-group search-results">
    {props.results.map(result =>
      <li key={result} className="list-group-item">
        <h3>
            {result.title}
            <span className = "btn-group pull-right">
                <a href = {result.url} rel = "noopener noreffer" target = "_blank">
                    View Article
                </a>
            </span>
        </h3>
      </li>
    )}
  </ul>;

export default SearchResults;