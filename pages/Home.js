import React from "react";

const Home = () =>
  <div>
    <div className="jumbotron text-center">
      <div className="overlay">
      </div>
      <div className="background-image">
      </div>
      <div className="caption">
        <h1>Mongo Scraper</h1>
        <p>New York Times Edition</p>
      </div>
    </div>
    <ArticleContainer/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script>
    <script src="../../assets/javascript/index.js"></script>
  </div>

export default Home;