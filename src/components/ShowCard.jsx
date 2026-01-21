import { useNavigate } from "react-router-dom";

function ShowCard({ show, airtime }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/show/${show.id}`)}
      className="show-card"
    >
      <div className="time-badge">{airtime}</div>
      <h3>{show.name}</h3>
      <div style={{ marginTop: 'auto' }}>
        <span className="meta-tag">{show.language || 'N/A'}</span>
        {show.genres && show.genres[0] && (
          <span className="meta-tag">{show.genres[0]}</span>
        )}
      </div>
    </div>
  );
}

export default ShowCard;
