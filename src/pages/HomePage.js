// import { useEffect, useState } from 'react';
import AlphaCard from "../components/AlphaCard";
import "../styles/homePageStyle.css";
import { upperAlpha } from "../components/alphabet";

let cards = 5;
const HomePage = () => {
  let ref = window.innerWidth;  
     console.log(ref)
     if((ref < 1430) && (ref >= 1150)){
       console.log(ref)
       cards = 4;
     } else if((ref < 1150) && (ref >= 850)){
       cards = 3;
     } else if((ref < 850) && (ref >= 580)){
       cards = 2
     } else if(ref < 580) {
       cards = 1;
     } else {
       cards = 5;
      }

console.log(window.innerWidth)
console.log(cards)
 
  return (
    <div className="container"> 
      <div className="card-container">
        <AlphaCard cards={cards} letters={upperAlpha}/>
      </div>
    </div>
  );
};

export default HomePage;

