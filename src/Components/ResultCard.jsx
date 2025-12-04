function ResultCard({ cafe }) {
  return (
    <article className="result-card">
      <div className="result-card-info">
        {/* later: location icon */}
        <img src="src/assets/pin.png" className="pin"></img><h3 className="result-card-title">{cafe.name}</h3>
        <p className="result-card-text">{cafe.description}</p>
      </div>

      <div className="result-card-image">
        {/* later: image */}
      </div>
    </article>
  );
}

export default ResultCard;
