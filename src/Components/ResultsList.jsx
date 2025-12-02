import ResultCard from "./ResultCard";

function ResultsList({ cafes }) {
  return (
    <div className="results-list">
      {cafes.map((cafe) => (
        <ResultCard key={cafe.id} cafe={cafe} />
      ))}
    </div>
  );
}

export default ResultsList;