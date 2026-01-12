import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send, Lock, Eye, Flame } from "lucide-react";

const Preview = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowButton(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAccess = () => {
    window.open("https://t.me/sjsjssjjwjssjsjs_bot", "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-3 py-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 md:w-48 h-24 md:h-48 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 max-w-sm w-full text-center space-y-4 md:space-y-8">
        {/* Icon */}
        <div className="flex justify-center animate-fade-in">
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
            <Lock className="w-7 h-7 md:w-10 md:h-10 text-primary" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1.5 md:space-y-3 animate-slide-up">
          <h1 className="text-xl md:text-4xl font-bold text-foreground">
            Conteúdo <span className="text-primary">Exclusivo</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg">
            Apenas para membros do grupo VIP
          </p>
        </div>

        {/* Mystery stats */}
        <div className="grid grid-cols-3 gap-2 md:gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg md:rounded-xl p-2 md:p-4">
            <Eye className="w-4 h-4 md:w-6 md:h-6 text-primary mx-auto mb-1 md:mb-2" />
            <p className="text-base md:text-2xl font-bold text-foreground">847</p>
            <p className="text-[10px] md:text-xs text-muted-foreground">Online agora</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg md:rounded-xl p-2 md:p-4">
            <Flame className="w-4 h-4 md:w-6 md:h-6 text-primary mx-auto mb-1 md:mb-2" />
            <p className="text-base md:text-2xl font-bold text-foreground">+18</p>
            <p className="text-[10px] md:text-xs text-muted-foreground">Conteúdo</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg md:rounded-xl p-2 md:p-4">
            <Send className="w-4 h-4 md:w-6 md:h-6 text-primary mx-auto mb-1 md:mb-2" />
            <p className="text-base md:text-2xl font-bold text-foreground">Free</p>
            <p className="text-[10px] md:text-xs text-muted-foreground">Acesso</p>
          </div>
        </div>

        {/* Warning text */}
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xs md:text-sm text-muted-foreground italic">
            ⚠️ Vagas limitadas. O grupo pode fechar a qualquer momento.
          </p>
        </div>

        {/* Countdown or Button */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {!showButton ? (
            <div className="space-y-2 md:space-y-3">
              <p className="text-muted-foreground text-sm md:text-base">Liberando acesso em...</p>
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full border-4 border-primary flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-primary">{countdown}</span>
              </div>
            </div>
          ) : (
            <button 
              onClick={handleAccess}
              className="telegram-button flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg w-full animate-fade-in"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
              Entrar no Grupo VIP
            </button>
          )}
        </div>

        {/* Back link */}
        <button 
          onClick={() => navigate("/")}
          className="text-muted-foreground/60 text-xs md:text-sm hover:text-muted-foreground transition-colors"
        >
          ← Voltar
        </button>
      </div>
    </div>
  );
};

export default Preview;
