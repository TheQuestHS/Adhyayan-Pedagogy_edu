import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../MainHome/Slick.css';

import memmap from "./memmapping.jpg"
import Maths from "./maths.png";
import anatomy from "./anatomy1.jpg"
import Animals from "./Animals.jpg";
import colors from "./Colors.jpg";
import alphabets from "./alphabets.png";
import { Link } from 'react-router-dom';
function Slick() {
   const settings = { 
       dot:true,
       speed: 500,
       infinite:true,
       slidesToShow:3,
       slidesToScroll: 1,
       cssEase: "linear"

}
    return (
       
        <Slider{...settings}>
        
        <div className="card_wrapper">
        <div className="card">
           <div className="card_image">
               <Link to='/mem'><center><img src={memmap} alt=""/></center></Link>
            </div>
            
            <div className="details">
            <center><h2>Memory Mapping</h2></center>
            </div>
            
        </div>
    </div>
    <div className="card_wrapper">
    <div className="card">
       <div className="card_image">
       <Link to='/Maths'><center><img src={Maths} alt=""/></center></Link>
        </div>   
        <div className="details">
        <center><h2>Maths</h2></center>
        </div>
    </div>
</div>
 <div className="card_wrapper">
 <div className="card">
    <div className="card_image">
    <Link to='/alphabet'><center><img src={alphabets} alt=""/></center></Link>
     </div>
     
     <div className="details">
         <center><h2> English Alphabets</h2></center>
     </div>
 </div>
</div>
<div className="card_wrapper">
<div className="card">
<div className="card_image">
<Link to='/animals'><center><img src={Animals} alt=""/></center></Link>
 </div>
 
 <div className="details">
     <center><h2>Animals</h2></center>
 </div>
</div>
</div>
 <div className="card_wrapper">
 <div className="card">
    <div className="card_image">
    <Link to='/colors'><center><img src={colors} alt=""/></center></Link>
     </div>   
     <div className="details">
     <center><h2>Colors</h2></center>
     </div>
 </div>
</div>
<div className="card_wrapper">
            <div className="card">
               <div className="card_image">
                   <Link to='/anatomy'><center><img src={anatomy} alt=""/></center></Link>
                </div>
                
                <div className="details">
                <center><h2>Human Anatomy</h2></center>
                </div>
            </div>
        </div>
        </Slider>
    )
}

export default Slick;
