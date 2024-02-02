import React from 'react';
import AlphaCard from "../components/AlphaCard";
import "../styles/homePageStyle.css";
import { upperAlpha } from "../components/alphabet";
let cards = 5;
const HomePage = () => {
  let ref = window.innerWidth;
  console.log(ref)
  if((ref < 1100) && (ref >= 800)){
    console.log(ref)
    cards = 4;
  } else if(ref < 800){
    cards = 3;
  } else if(ref < 600){
    cards = 2;
  } else if(ref < 480) {
    cards = 1;
  } else {
    cards = 5;
  }

  return (
    <div className="container"> 
   
      <div className="card-container">
        <AlphaCard cards={cards} letters={upperAlpha}/>
      </div>
    </div>
  );
};

export default HomePage;
