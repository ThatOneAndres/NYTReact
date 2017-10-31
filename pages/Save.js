import React from "react";
import ArticleContainer from "../components/ArticleContainer";

const Save = () =>
  <div>
    <div class="jumbotron text-center">
      <div class="overlay">
      </div>
      <div class="background-image">
      </div>
      <div class="caption">
        <h1>Saved Articles</h1>
        <p>Your Saved Articles</p>
      </div>
    </div>
    <ArticleContainer/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>
    <script src="../../assets/javascript/saved.js"></script>
  </div>

export default Save;