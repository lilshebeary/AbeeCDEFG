import AlphaCard from "../components/AlphaCard";
import "../styles/homePageStyle.css";
import { upperAlpha } from "../components/alphabet";

const HomePage = () => {
  
  return (
    <div className="container"> 
   
      <div className="card-container">
        <AlphaCard cards={1} letters={upperAlpha}/>
      </div>
    </div>
  );
};

export default HomePage;
