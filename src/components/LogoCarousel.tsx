const LogoCarousel = () => {
  const logos = [
    { name: "Company 1", width: "120px" },
    { name: "Company 2", width: "140px" },
    { name: "Company 3", width: "110px" },
    { name: "Company 4", width: "130px" },
    { name: "Company 5", width: "125px" },
    { name: "Company 6", width: "115px" },
    { name: "Company 7", width: "135px" },
    { name: "Company 8", width: "120px" },
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
              <div className="w-full h-16 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-semibold">
                {logo.name}
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="flex items-center justify-center mx-8 flex-shrink-0"
              style={{ width: logo.width }}
            >
              <div className="w-full h-16 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-semibold">
                {logo.name}
              </div>
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
