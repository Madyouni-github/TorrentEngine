import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import Feedback from "./components/feedback";


const Wrapper = styled(Container)`
  margin-top: 70px;
`;

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/about" element={<Wrapper><About/></Wrapper>}/>
        <Route exact path="/feedback" element={<Wrapper><Feedback/></Wrapper>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
