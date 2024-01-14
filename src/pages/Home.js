import Header from "../components/Header";
import alphaCard from "../components/alphaCard";
import "../styles/homeStyle.css";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="card-container">
        <alphaCard />
        <alphaCard />
        <alphaCard />
        <alphaCard />
        <alphaCard />
      </div>
    </div>
  );
};

export default Home;
