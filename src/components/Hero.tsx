
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-spice-darkBrown/80 via-spice-darkBrown/60 to-spice-darkBrown/80 z-10"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1920)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-spice-gold font-playfair mb-4 animate-fade-in">
          Welcome to <span className="block mt-2 gold-gradient">Spice Garden</span>
        </h1>
        <p className="text-2xl text-spice-gold/90 max-w-2xl mx-auto mb-12 animate-fade-in font-playfair italic" style={{animationDelay: '0.2s'}}>
          Flavours of Tradition
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <button 
            className="button-primary"
            onClick={scrollToMenu}
          >
            View Menu
          </button>
          <button 
            className="button-secondary"
          >
            Book a Table
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToMenu} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-spice-gold animate-bounce"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Hero;
