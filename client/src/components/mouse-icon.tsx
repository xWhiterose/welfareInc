export default function MouseIcon() {
  return (
    <div 
      className="mouse-scroll-icon"
      style={{
        position: 'fixed',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 99999,
        cursor: 'pointer',
        pointerEvents: 'auto'
      }}
      onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24"
        style={{
          color: '#ffffff',
          filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))'
        }}
      >
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M6 7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4zm6 0v4"
        />
      </svg>
    </div>
  );
}