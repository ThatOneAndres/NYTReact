import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/ArticleList";


class Search extends Component {
    state = {
        search: "",
        start: "",
        end: "",
        results: []
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
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
              <SearchForm
                handleInputChange = {this.handleInputChange}
                handleFormSubmit = {this.handleFormSubmit}
              />
              <SearchResults results = {this.state.results}/>
            </div>
        );
    }
}