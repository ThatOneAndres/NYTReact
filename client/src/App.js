import React, { Component } from 'react';
import Search from "./pages/Search";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron />
          <Route exact path ="/" component = {Search} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
