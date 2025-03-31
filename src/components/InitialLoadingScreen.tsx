import React from 'react';

export default function InitialLoadingScreen() {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0a1119',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <div 
        style={{
          width: '80px',
          height: '80px',
          marginBottom: '24px',
          borderRadius: '50%',
          background: 'linear-gradient(90deg, #7c3aed 0%, #a5b4fc 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div style={{ 
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white'
        }}>LB</div>
      </div>
      <div 
        style={{
          width: '120px',
          height: '4px',
          backgroundColor: 'rgba(124, 58, 237, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '30%',
            backgroundColor: '#7c3aed',
            borderRadius: '2px',
            animation: 'loadingAnimation 1.5s infinite'
          }}
        />
      </div>
      <style>{`
        @keyframes loadingAnimation {
          0% { left: -30%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
}