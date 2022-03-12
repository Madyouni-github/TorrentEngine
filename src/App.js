import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Feedback from "./components/feedback";
import SearchCard from "./components/searchcard";
import Torrents from "./components/torrents";


const Wrapper = styled(Container)`
  margin-top: 70px;
`;

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Wrapper><SearchCard/></Wrapper>}/>
        <Route exact path="/search" element={<Wrapper><Torrents/></Wrapper>}/>
        <Route exact path="/about" element={<Wrapper><About/></Wrapper>}/>
        <Route exact path="/feedback" element={<Wrapper><Feedback/></Wrapper>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
