import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <Header/>
      <Footer/>
    </Router>
  );
}

export default App;
