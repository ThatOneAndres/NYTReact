import React from "react";
import "./SearchForm.css";

const SearchForm = props =>
  <div className = "main-container">
    <div className = "row">
      <div className = "col-lg-12">
          <div className = "panel panel-primary">
            <div className = "panel-heading">
              <h1 className = "panel-title">
                <strong>
                  Query
                </strong>
              </h1>
            </div>
            <div className = "panel-body">
                <form>
                    <div className = "form-group">
                        <h4> <strong> Title </strong> </h4>
                        <input onChange = {props.handleInputChange} type = "number" value className = "form-control" id = "start" required/>
                        <h4> <strong> Start Year </strong> </h4>
                        <input onChange = {props.handleInputChange} type = "number" value className = "form-control" id = "start" required/>
                        <h4> <strong> End Year </strong> </h4>
                        <input onChange = {props.handleInputChange} type = "number" value className = "form-control" id = "end" required/>
                    </div>
                </form>
                <div className = "pull-right">
                  <button type = "submit" onClick = {props.handleFormSubmit} className = "btn btn-danger">
                      <h4> Submit </h4>
                  </button>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>

export default SearchForm;