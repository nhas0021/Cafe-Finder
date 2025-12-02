import ResultsList from "./ResultsList";

function ResultsSection({ cafes }) {
  return (
    <section className="results-section">
      <div className="search-header">
        <h2>Search results</h2>
        {/* later: search icon */}
      </div>
      <ResultsList cafes={cafes} />
    </section>
  );
}

export default ResultsSection;
