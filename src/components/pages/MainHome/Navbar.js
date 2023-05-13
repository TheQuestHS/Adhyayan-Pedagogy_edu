import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link } from 'react-router-dom';
import Logo from "./Logo.png";
import User from "./userIcon.png";
import './Navbar.css';
export default class Navb extends Component {
    render() {
        return ( 
        <div >
            <>
            <Navbar bg = ""variant = "light" >
            <Container >
            <Navbar.Brand href = "#home" >
            <img src = {Logo}
            width = "80"
            height = "80"
            className = "d-inline-block align-top"
            alt = "" />
            </Navbar.Brand> 
            <b><font size="5"><center><Nav className = "me-auto"> 
            <NavDropdown title="Courses" id="basic-nav-dropdown">
             <NavDropdown.Item href="#action/3.1">
             <Link to="/mem">Memory Mapping</Link></NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.2"><Link to="/Maths">Maths</Link></NavDropdown.Item>
             <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"><Link to="/alphabet">English Alphabets</Link></NavDropdown.Item>
             <NavDropdown.Divider/>
             <NavDropdown.Item href="#action/3.4"><Link to="/animals">Animals</Link></NavDropdown.Item>
             <NavDropdown.Divider/>
             <NavDropdown.Item href="#action/3.5"><Link to="/colors">Colors</Link></NavDropdown.Item>
             <NavDropdown.Divider/>
             <NavDropdown.Item href="#action/3.6"><Link to="/anatomy">Human Anatomy</Link></NavDropdown.Item>
             
              
            </NavDropdown>
            <Nav.Link href = "#features" ><Link to='/about'> About us</Link> </Nav.Link> 
            <Nav.Link href = "#features" ><Link to='/'> Sign-Out</Link> </Nav.Link> 
            </Nav></center></font></b>
            <Nav>
            <ToggleButton className="mb-2"
            id="toggle-check"
            type="checkbox"
            variant="outline-secondary"
            value="1">
            <Link to='/Profile'><img src = {User}
            width = "40"
            height = "40"
            border-radius="50px"
            className = "d-inline-block align-top"
            alt = "" /></Link></ToggleButton>
            </Nav>
            </Container> 
            </Navbar > 
            <br/>
            </> 
        </div>
        )
    }
}