import React from 'react';

const Loader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            color: 'white',
            fontFamily: 'var(--font-heading)'
        }}>
            <div className="loader-spinner" style={{
                border: '4px solid rgba(255,255,255,0.1)',
                borderLeft: '4px solid var(--accent-primary)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                animation: 'spin 1s linear infinite'
            }}></div>
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
};

export default Loader;
