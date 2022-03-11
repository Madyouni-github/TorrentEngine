import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import styled from "styled-components";


const Wrapper = styled(Container)`
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
`;


const Navi = styled(Nav)`
    margin-left: auto;
`;

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" style={{marginBottom:"10px", display:"block"}}>
            <Wrapper>
                <Navbar.Brand href="/">TorrentEngine</Navbar.Brand>
                <Navi>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/feedback">Feedback</Nav.Link>
                    <Nav.Link href="https://github.com/Madyouni-github" target="_blank">Github</Nav.Link>
                </Navi>
            </Wrapper>
        </Navbar>
    );
}

export default Header;