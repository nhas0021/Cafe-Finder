import placeholder from "../assets/placeholder.png";

function ResultCard({ cafe }) {
  return (
    <article className="result-card">
      <div className="result-card-info">
        <div className="result-card-title-row">
          <img src="src/assets/pin.png" className="pin" alt="location pin" />
          <h3 className="result-card-title">{cafe.name}</h3>
        </div>

        {cafe.address && (
          <p className="result-card-text">{cafe.address}</p>
        )}
      </div>

      <div className="result-card-image">
        <img
          src={cafe.photoUrl || placeholder}
          alt={cafe.name}
          className="cafe-image"
        />
      </div>

    </article>
  );
}

export default ResultCard;
