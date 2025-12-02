import "./App.css";
import Header from "./Components/Header";
import Map from "./Components/Map";
import ResultsSection from "./Components/ResultsSection";

function App() {
  const cafes = [
    {
      id: 1,
      name: "Stanley",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a.",
    },
    {
      id: 2,
      name: "Title",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a.",
    },
    {
      id: 3,
      name: "Title",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a.",
    },
  ];

  return (
    <div className="app">
      <Header />
      <main className="main-layout">
        <Map />
        <ResultsSection cafes={cafes} />
      </main>
    </div>
  );
}

export default App;
