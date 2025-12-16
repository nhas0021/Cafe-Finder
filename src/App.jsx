import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Map from "./Components/Map";
import ResultsSection from "./Components/ResultsSection";

function App() {
  const [cafes, setCafes] = useState([]); // <-- dynamic cafes from Map

  return (
    <div className="app">
      <Header />
      <main className="main-layout">
        <Map onCafesChange={setCafes} />
        <ResultsSection cafes={cafes} />
      </main>
    </div>
  );
}

export default App;
