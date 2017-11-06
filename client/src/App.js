import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Save from "./pages/Save";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => 
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Route exact path = "/" component = {Search} />
        <Route exact path = "/saved" component = {Save} />
        <Footer />
      </div>
    </Router>;

export default App;
