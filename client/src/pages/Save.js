import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SavedArticles from "../components/SavedArticles";


class Save extends Component {
    state = {
        saved: []
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.search, this.state.start, this.state.end)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };

    render() {
        return (
            <div>
              <SavedArticles results = {this.state.results}/>
            </div>
        );
    }
}

export default Search;