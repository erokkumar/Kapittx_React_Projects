import React from 'react';
import ShowCard from './ShowCard';

const ShowList = ({ episodes }) => {
    if (!episodes || episodes.length === 0) {
        return <div style={{ padding: '20px', color: '#888' }}>No shows airing currently.</div>;
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '16px',
            padding: '20px'
        }}>
            {episodes.map((episode) => (
                <ShowCard key={episode.id} episode={episode} />
            ))}
        </div>
    );
};

export default ShowList;
