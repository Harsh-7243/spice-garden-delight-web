
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
          className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10 z-10"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1600335895229-6e75511892c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1920&q=80)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-4 animate-fade-in">
          Experience Authentic <span className="text-spice-saffron">Indian Cuisine</span>
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Discover the rich flavors and aromatic spices that define our heritage
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <button 
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Book a Table
          </button>
          <button 
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full font-medium transition-colors"
            onClick={scrollToMenu}
          >
            View Menu
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToMenu} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-10 w-10" />
      </button>
    </div>
  );
};

export default Hero;
