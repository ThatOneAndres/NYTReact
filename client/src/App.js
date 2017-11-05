import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => 
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Route exact path = "/" component = {Search} />
        <Footer />
      </div>
    </Router>;

export default App;
