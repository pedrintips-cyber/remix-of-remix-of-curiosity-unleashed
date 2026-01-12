import { useState } from "react";
import photo1 from "@/assets/photo5.jpg";
import photo2 from "@/assets/photo6.jpg";
import photo3 from "@/assets/photo7.jpg";
import photo4 from "@/assets/photo8.jpg";
import videoCentral from "@/assets/video-central.mp4";
import { Play, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  const photos = [
    { src: photo1, alt: "Photo 1" },
    { src: photo2, alt: "Photo 2" },
    { src: photo3, alt: "Photo 3" },
    { src: photo4, alt: "Photo 4" },
  ];

  const handleSeeMore = () => {
    navigate("/preview");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center px-3 py-4 md:px-6 md:py-8">
        
        {/* Button - Top */}
        <button 
          onClick={handleSeeMore}
          className="telegram-button flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 text-base md:text-xl mb-6 md:mb-8 animate-fade-in"
        >
          <Send className="w-5 h-5 md:w-6 md:h-6" />
          Ver Mais
        </button>

        {/* Main Content - Video center + 4 photos */}
        <div className="w-full max-w-5xl mx-auto flex-1 flex items-center">
          
          {/* Desktop Layout: 2 photos | video | 2 photos */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 w-full">
            {/* Left column - 2 photos stacked */}
            <div className="flex flex-col gap-4">
              <div className="photo-card flex-1 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <img src={photos[0].src} alt={photos[0].alt} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="photo-card flex-1 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <img src={photos[2].src} alt={photos[2].alt} className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>

            {/* Center - Video */}
            <div className="flex items-center animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <div className="video-container w-full aspect-[9/16] relative cursor-pointer group" onClick={() => setIsPlaying(true)}>
                <video 
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  autoPlay={isPlaying}
                  src={videoCentral}
                  playsInline
                  preload="metadata"
                />
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right column - 2 photos stacked */}
            <div className="flex flex-col gap-4">
              <div className="photo-card flex-1 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <img src={photos[1].src} alt={photos[1].alt} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="photo-card flex-1 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <img src={photos[3].src} alt={photos[3].alt} className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden w-full flex flex-col gap-2">
            {/* Top row: photo | video | photo */}
            <div className="grid grid-cols-4 gap-1.5">
              <div className="photo-card aspect-[3/4] col-span-1 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <img src={photos[0].src} alt={photos[0].alt} className="w-full h-full object-cover rounded-md" />
              </div>
              
              <div className="col-span-2 animate-slide-up" style={{ animationDelay: "0.15s" }}>
                <div className="video-container w-full aspect-[9/16] relative cursor-pointer" onClick={() => setIsPlaying(true)}>
                  <video 
                    className="w-full h-full object-cover"
                    controls={isPlaying}
                    autoPlay={isPlaying}
                    src={videoCentral}
                    playsInline
                    preload="metadata"
                  />
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="w-4 h-4 text-primary-foreground ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="photo-card aspect-[3/4] col-span-1 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <img src={photos[1].src} alt={photos[1].alt} className="w-full h-full object-cover rounded-md" />
              </div>
            </div>

            {/* Bottom row: 2 photos */}
            <div className="grid grid-cols-2 gap-1.5">
              <div className="photo-card aspect-[3/4] animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <img src={photos[2].src} alt={photos[2].alt} className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="photo-card aspect-[3/4] animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <img src={photos[3].src} alt={photos[3].alt} className="w-full h-full object-cover rounded-md" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Index;
