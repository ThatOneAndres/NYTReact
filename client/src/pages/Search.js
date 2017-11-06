import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";


class Search extends Component {
    state = {
        search: "",
        start: "",
        end: "",
        results: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getArticles(this.state.search, this.state.start, this.state.end)
          .then(res => {
            if (res.data.response.status === "error") {
              throw new Error(res.message);
            }
            this.setState({ results: res.data.response.docs, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };

      handleSaveSubmit = (headline, url) => {
        //event.preventDefault();
        API.postSaved({"headline": headline,"url": url})
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
          })
          .catch(err => this.setState({ error: err.message }));
      };

    render() {
        return (
            <div>
              <SearchForm
                handleInputChange = {this.handleInputChange}
                handleFormSubmit = {this.handleFormSubmit}
                state = {this.state}
              />
              <SearchResults handleSaveSubmit = {this.handleSaveSubmit} results = {this.state.results}/>
            </div>
        );
    }
}

export default Search;