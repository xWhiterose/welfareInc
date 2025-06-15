import { useEffect, useRef } from 'react';

interface SocialMarqueeProps {
  className?: string;
}

export default function SocialMarquee({ className = "" }: SocialMarqueeProps) {
  const marqueeContentRef = useRef<HTMLUListElement>(null);

  const socialLogos = [
    {
      id: 'tinder',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="currentColor" stroke="none" d="m9 3l10 18h-4L5 3zM5 3v18h4V10.5M19 21V3h-4v10.5"/>
      </svg>`
    },
    {
      id: 'instagram', 
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <g fill="currentColor" stroke="none">
          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/>
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"/>
        </g>
      </svg>`
    },
    {
      id: 'twitter',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="currentColor" stroke="none" d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"/>
      </svg>`
    },
    {
      id: 'tiktok',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="currentColor" stroke="none" d="M21 7.917v4.034A9.95 9.95 0 0 1 16 10v4.5a6.5 6.5 0 1 1-8-6.326V12.5a2.5 2.5 0 1 0 4 2V3h4.083A6.005 6.005 0 0 0 21 7.917"/>
      </svg>`
    },
    {
      id: 'spark',
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path fill="currentColor" stroke="none" d="M18.918 8.174c2.56 4.982.501 11.656-5.38 12.626C5.836 22.487.698 13.084 6.484 7.571C6.793 7.266 7.645 6.476 8 6.222c0 .528.27 3.475 1 3.167c3 0 4-4.222 3.587-7.389c2.7 1.411 4.987 3.376 6.331 6.174"/>
      </svg>`
    }
  ];

  useEffect(() => {
    const marqueeContent = marqueeContentRef.current;
    if (!marqueeContent) return;

    // Clone des éléments pour l'effet continu
    const children = Array.from(marqueeContent.children);
    children.forEach(child => {
      const clone = child.cloneNode(true);
      marqueeContent.appendChild(clone);
    });

    // Définition des propriétés CSS dynamiques
    document.documentElement.style.setProperty('--social-marquee-elements', socialLogos.length.toString());
  }, []);

  return (
    <div className={`social-marquee-container ${className}`}>
      <style jsx>{`
        .social-marquee-container {
          --marquee-width: 100%;
          --marquee-height: 80px;
          --marquee-elements-displayed: 5;
          --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
          --marquee-animation-duration: calc(var(--social-marquee-elements) * 4s);
        }

        .social-marquee {
          width: var(--marquee-width);
          height: var(--marquee-height);
          overflow: hidden;
          position: relative;
          mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%, 
            transparent
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent,
            white 20%,
            white 80%, 
            transparent
          );
        }

        .social-marquee-content {
          list-style: none;
          height: 100%;
          display: flex;
          animation: socialScrolling var(--marquee-animation-duration) linear infinite;
          margin: 0;
          padding: 0;
        }

        @keyframes socialScrolling {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--marquee-element-width) * var(--social-marquee-elements))); }
        }

        .social-marquee-content li {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          width: var(--marquee-element-width);
          max-height: 100%;
          transition: transform 0.3s ease;
        }

        .social-marquee-content li:hover {
          transform: scale(1.2);
        }

        .social-marquee-content li svg {
          width: 60px;
          height: 60px;
          color: #10b981;
          filter: drop-shadow(0 0 10px rgba(16, 185, 129, 0.3));
          transition: all 0.3s ease;
        }

        .social-marquee-content li:hover svg {
          color: #ffffff;
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.6));
        }

        @media (max-width: 768px) {
          .social-marquee-container {
            --marquee-elements-displayed: 3;
            --marquee-height: 60px;
          }
          
          .social-marquee-content li svg {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>

      <div className="social-marquee">
        <ul className="social-marquee-content" ref={marqueeContentRef}>
          {socialLogos.map((logo, index) => (
            <li key={`${logo.id}-${index}`}>
              <div 
                dangerouslySetInnerHTML={{ __html: logo.svg }}
                className="w-full h-full flex items-center justify-center"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}