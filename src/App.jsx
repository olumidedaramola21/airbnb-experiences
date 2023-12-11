import "./App.css";
import Navbar from "./components/Navbar";
// import Hero from './components/Hero'
import Card from "./components/Card";
import data from "../data.js";

console.log(data)

function App() {
  return (
    <div className="app--container">
      <Navbar />
      {/* <Hero /> */}
      {data.map((d) => (
        <Card
          key={d.id}
          img={d.coverImg}
          rating={d.stats.rating}
          reviewCount={d.stats.reviewCount}
          country={d.location}
          title={d.title}
          price={d.price}
        />
      ))}

      {/* <Card
        
      /> */}
    </div>
  );
}

export default App;
