
import { useState, useEffect } from 'react';
import { Menu, ShoppingCart, X, ArrowUp } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Cart from './Cart';
import { useCart } from '@/hooks/useCart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { cart } = useCart();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Count total items in cart
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 px-5 py-4 md:px-10 transition-all duration-300 ${
          isScrolled ? 'bg-spice-darkBrown shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold font-playfair gold-gradient">
              Spice Garden
            </h1>
          </a>

          <div className="flex items-center space-x-4">
            <button 
              className="button-primary hidden md:block"
            >
              Book a Table
            </button>
            
            <div className="relative" onClick={() => setIsCartOpen(!isCartOpen)}>
              <button className="p-2 rounded-full hover:bg-spice-darkBrown/40 transition-colors gold-glow relative">
                <ShoppingCart className="h-6 w-6 text-spice-gold" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-spice-deepRed text-spice-gold rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              {isCartOpen && <Cart />}
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full hover:bg-spice-darkBrown/40 transition-colors gold-glow"
            >
              <Menu className="h-6 w-6 text-spice-gold" />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Full screen overlay menu */}
      <div 
        className={`overlay-menu ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 p-2 rounded-full hover:bg-spice-gold/10 transition-colors"
        >
          <X className="h-6 w-6 text-spice-gold" />
        </button>
        
        <div className="flex flex-col items-center space-y-8">
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#story" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Story</a>
          <a href="#menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menu</a>
          <a href="#legacy" className="nav-link" onClick={() => setIsMenuOpen(false)}>Legacy</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-spice-deepRed text-spice-gold p-3 rounded-full shadow-lg z-30 transition-all duration-300 gold-glow ${
          showScrollTop ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );
};

export default Navbar;
