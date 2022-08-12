import "./App.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Card from "./Card";

function App() {
  return( 
  <div>
    <Nav />
    <Hero />
    <Card
      img=""
      rating="5.0"
      reviewCount="(6)" 
      country="USA"
      title="Life lessons with Katie Ledecky"
      price={136}
    />
  </div>
  )}

export default App;
