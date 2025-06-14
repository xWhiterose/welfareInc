export default function ScrollIndicator() {
  return (
    <>
      {/* Ligne pointillée visible */}
      <div 
        style={{
          position: 'fixed',
          bottom: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '2px',
          height: '80px',
          backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 50%, transparent 50%)',
          backgroundSize: '2px 8px',
          backgroundRepeat: 'repeat-y',
          zIndex: 10000
        }}
      />
      
      {/* Icône souris visible */}
      <div 
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '30px',
          height: '50px',
          border: '3px solid white',
          borderRadius: '15px',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
          zIndex: 10000,
          animation: 'pulse 2s infinite'
        }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        {/* Point de la souris */}
        <div 
          style={{
            position: 'absolute',
            top: '12px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '10px',
            backgroundColor: 'white',
            borderRadius: '2px',
            animation: 'bounce 2s infinite'
          }}
        />
      </div>
      
      {/* Texte SCROLL */}
      <div 
        style={{
          position: 'fixed',
          bottom: '5px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '12px',
          fontWeight: 'bold',
          letterSpacing: '2px',
          zIndex: 10000,
          animation: 'pulse 2s infinite'
        }}
      >
        SCROLL
      </div>
    </>
  );
}