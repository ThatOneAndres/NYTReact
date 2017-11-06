import React, { Component } from "react";
import API from "../utils/API";
import SavedArticles from "../components/SavedArticles";


class Save extends Component {
    state = {
        saved: []
    };


    componentDidMount(){
        this.getArticlesSaved();
        
    }

    getArticlesSaved = () => {
        API.getSaved()
        .then(res => {
            this.setState({saved: res.data});
        })
        .catch(err => this.setState({ error: err.message }));

    };

    handleDelete = url => {
        API.deleteSaved(url)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.getArticlesSaved();
          })
          .catch(err => this.setState({ error: err.message }));
      };

    render() {
        return (
            <div>
              <SavedArticles handleDelete = {this.handleDelete} results = {this.state.saved}/>
            </div>
        );
    }
}

export default Save;