import React from 'react';
import './Hom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Slick from './Slick';
import { FooterContainer } from './Container';

function App() {
    return ( 
        <div className = "p" >
        <Navbar />
        <h1>Welcome to Adhyayan Pedagogy</h1>
        <Carousel/>
        <center><h2>Explore Courses</h2></center>
        <Slick/>
        <center><h1>Slide the Cards to View...</h1></center>
        <center><h1>Click on Image of the Game to Play and Learn</h1></center>
        <FooterContainer/>
        <center><p>Developed for EPICS by team Pedagogy</p></center>
        </div>
    );
}
export default App;