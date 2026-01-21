import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchShowDetails } from "../api/tvmaze";

function ShowDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [show, setShow] = useState(null);

    useEffect(() => {
        fetchShowDetails(id)
            .then(data => setShow(data))
            .catch(err => console.error(err));
    }, [id]);

    if (!show) return <div className="container"><p>Loading Show Details...</p></div>;

    const imageUrl = show.image?.original || show.image?.medium;

    return (
        <div className="container">
            <button className="btn-back" onClick={() => navigate("/")}>
                ← Back to Schedule
            </button>

            <div className="detail-hero">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={show.name}
                        className="poster-img"
                    />
                )}

                <div className="detail-content">
                    <h1>{show.name}</h1>

                    <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                        <span className="meta-tag" style={{ background: 'var(--accent-color)' }}>
                            {show.rating?.average || "N/A"} ★
                        </span>
                        <span className="meta-tag">{show.language}</span>
                        {show.genres?.map(g => (
                            <span key={g} className="meta-tag">{g}</span>
                        ))}
                    </div>

                    <div
                        dangerouslySetInnerHTML={{ __html: show.summary }}
                        style={{ color: '#ccc', fontSize: '1.1rem', lineHeight: '1.7' }}
                    />

                    <div style={{ marginTop: '24px', opacity: 0.7 }}>
                        <p><strong>Status:</strong> {show.status}</p>
                        <p><strong>Network:</strong> {show.network?.name || show.webChannel?.name || 'N/A'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowDetailPage;
