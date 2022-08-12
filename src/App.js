import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Card from "./Card";
import dataArry from "./data.js"

function App() {

  const cards = dataArry.map(item => 
    <Card 
        key={item.id}
        item={item}
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
