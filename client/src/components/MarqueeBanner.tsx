export default function MarqueeBanner() {
  const socialPlatforms = [
    "Tinder", "Instagram", "X", "TikTok", "Spark", 
    "LinkedIn", "Snapchat", "Discord", "Telegram", "WhatsApp"
  ];

  return (
    <div className="w-full overflow-hidden bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 py-4">
      <div className="marquee-container">
        <div className="marquee-content">
          {socialPlatforms.map((platform, index) => (
            <span 
              key={index}
              className="marquee-item text-green-300 font-medium px-8 text-lg whitespace-nowrap"
            >
              {platform}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {socialPlatforms.map((platform, index) => (
            <span 
              key={`duplicate-${index}`}
              className="marquee-item text-green-300 font-medium px-8 text-lg whitespace-nowrap"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}