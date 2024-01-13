import Header from '../components/Header';
import alphaCard from '../components/alphaCard';
import '../styles/homeStyle.css';

const Home = () => {
  return (
   <div className="container">
     <Header />
    <alphaCard />
    <alphaCard />
    <alphaCard />
    <alphaCard />
    <alphaCard />
   </div>
  )
}

export default Home
