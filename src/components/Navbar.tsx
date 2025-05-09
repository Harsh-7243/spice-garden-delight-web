
import { useState, useEffect } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import Cart from './Cart';
import { useCart } from '@/hooks/useCart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Count total items in cart
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 px-5 py-4 md:px-10 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold font-playfair text-primary">
              Spice Garden
            </h1>
          </a>

          <div className="flex items-center space-x-4">
            <button 
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full font-medium hidden md:block transition-colors"
            >
              Book a Table
            </button>
            
            <div className="relative" onClick={() => setIsCartOpen(!isCartOpen)}>
              <button className="p-2 rounded-full hover:bg-secondary/50 transition-colors relative">
                <ShoppingCart className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-spice-red text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>
              {isCartOpen && <Cart />}
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full hover:bg-secondary/50 transition-colors"
            >
              <Menu className="h-6 w-6" />
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
          className="absolute top-8 right-8 p-2 rounded-full hover:bg-secondary/50 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>
        
        <div className="flex flex-col items-center space-y-6">
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#story" className="nav-link" onClick={() => setIsMenuOpen(false)}>Our Story</a>
          <a href="#menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menu</a>
          <a href="#legacy" className="nav-link" onClick={() => setIsMenuOpen(false)}>Legacy</a>
          <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
