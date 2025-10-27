import clientLogo from "@/assets/client-logo.png";

const LogoCarousel = () => {
  const logos = [
    { name: "Client 1", width: "120px" },
    { name: "Client 2", width: "140px" },
    { name: "Client 3", width: "110px" },
    { name: "Client 4", width: "130px" },
    { name: "Client 5", width: "125px" },
    { name: "Client 6", width: "115px" },
    { name: "Client 7", width: "135px" },
    { name: "Client 8", width: "120px" },
  ];

  return (
    <section className="w-full py-12 bg-muted/30 overflow-hidden">
      <div className="relative">
        <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex items-center justify-center mx-8 flex-shrink-0"
              style={{ width: logo.width }}
            >
              <img 
                src={clientLogo} 
                alt={logo.name}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex items-center justify-center mx-8 flex-shrink-0"
              style={{ width: logo.width }}
            >
              <img 
                src={clientLogo} 
                alt={logo.name}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
