import React from 'react';

const ShowCard = ({ episode }) => {
    const { show, airtime, name: episodeName } = episode;

    // Choose a genre for gradient mapping (optional fallback)
    const genre = show.genres?.[0]?.toLowerCase() || 'default';

    const getGradient = (g) => {
        switch (g) {
            case 'drama': return 'linear-gradient(135deg, #4f46e5 0%, #312e81 100%)';
            case 'science-fiction':
            case 'sci-fi': return 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)';
            case 'thriller':
            case 'horror': return 'linear-gradient(135deg, #be123c 0%, #881337 100%)';
            case 'comedy': return 'linear-gradient(135deg, #db2777 0%, #831843 100%)';
            default: return 'linear-gradient(135deg, #475569 0%, #1e293b 100%)';
        }
    };

    return (
        <div
            className="program-card"
            style={{
                width: 'auto',
                minHeight: '160px',
                background: getGradient(genre),
                marginBottom: '16px'
            }}
        >
            <div className="program-overlay"></div>
            <div className="program-content">
                <div>
                    {show.image?.medium && (
                        <img
                            src={show.image.medium}
                            alt={show.name}
                            style={{
                                width: '100%',
                                height: '120px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                                marginBottom: '8px',
                                opacity: 0.9
                            }}
                        />
                    )}
                    <h3 className="program-title" style={{ fontSize: '16px' }}>{show.name}</h3>
                    <p className="program-time" style={{ marginTop: '4px' }}>
                        {airtime} • {episodeName}
                    </p>
                </div>

                <div className="program-action" style={{ alignSelf: 'flex-end', marginTop: '8px' }}>
                    <button className="btn-info">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ShowCard;
