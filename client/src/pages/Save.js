import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SavedArticles from "../components/SavedArticles";


class Save extends Component {
    state = {
        saved: []
    };


    componentDidMount(){
        API.getSaved()
        .then(res => {
            console.log(res);
            this.state.saved = res.data;
        })
        .catch(err => this.setState({ error: err.message }));
    }

    handleDelete = event => {
        event.preventDefault();
        console.log(event);
        // API.postSaved(headline, url)
        //   .then(res => {
        //     if (res.data.status === "error") {
        //       throw new Error(res.data.message);
        //     }
        //     console.log(success);
        //   })
        //   .catch(err => this.setState({ error: err.message }));
      };

    render() {
        return (
            <div>
              <SavedArticles handleDelete = {this.handleDelete} results = {this.state.saved}/>
            </div>
        );
    }
}

export default Search;