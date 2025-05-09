
import { useState } from 'react';
import MenuCard from './MenuCard';
import { useToast } from "@/components/ui/use-toast";
import { menuItems, MenuCategory } from '@/data/menuItems';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const { toast } = useToast();
  
  const categories = [
    { id: 'all', name: 'ALL Items' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'main', name: 'Main Course' },
    { id: 'starters', name: 'Starters' },
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Delicious Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted menu featuring authentic Indian recipes prepared 
            with the finest ingredients and traditional spices.
          </p>
        </div>
        
        {/* Category buttons */}
        <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-none justify-center">
          <div className="flex space-x-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as MenuCategory | 'all')}
                className={`
                  whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all
                  ${activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-foreground hover:bg-primary/10'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Menu items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
