
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Story from '@/components/Story';
import Legacy from '@/components/Legacy';
import Footer from '@/components/Footer';
import { CartProvider } from '@/hooks/useCart';

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Menu />
        <Story />
        <Legacy />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
