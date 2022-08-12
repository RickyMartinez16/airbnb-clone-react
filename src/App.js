import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Card from "./Card";
import dataArry from "./data.js"

function App() {

  const cards = dataArry.map(item => 
    <Card 
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
    />
)  
  return( 
  <div>
    <Nav />
    <Hero />
      <section className="card-list">
          {cards}
      </section>
  </div>
  )}

export default App;
