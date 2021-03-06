import React from "react";
//import "./SearchResults.css";

const SavedArticles = props =>
  <ul className="list-group saved-articles">
    {props.results.map(result =>
      <li key={result.url} className="list-group-item">
        <h3>
            {result.headline}
            <span className = "btn-group pull-right">
                <a href = {result.url} rel = "noopener noreffer" target = "_blank">
                    View Article
                </a>
                <button onClick = {() => props.handleDelete(result.url)} className = "btn btn-primary delete"> Delete </button>
            </span>
        </h3>
      </li>
    )}
  </ul>;

export default SavedArticles;