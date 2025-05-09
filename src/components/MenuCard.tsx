
import { CircleCheck, CircleX } from "lucide-react";
import { MenuItem } from "@/data/menuItems";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/hooks/useCart";

type MenuCardProps = {
  item: MenuItem;
};

const MenuCard = ({ item }: MenuCardProps) => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(item);
    
    toast({
      description: `${item.name} added to your order`,
      className: "bg-primary text-white border-none",
    });
  };
  
  return (
    <div className="menu-card h-full">
      <div className="relative mb-3">
        <img 
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="absolute top-2 right-2">
          {item.isVegetarian ? (
            <div className="flex items-center justify-center bg-white/90 backdrop-blur-sm p-1 rounded-full">
              <CircleCheck className="h-5 w-5 text-green-600" />
            </div>
          ) : (
            <div className="flex items-center justify-center bg-white/90 backdrop-blur-sm p-1 rounded-full">
              <CircleX className="h-5 w-5 text-spice-red" />
            </div>
          )}
        </div>
      </div>
      
      <div className="flex-1">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <div className="flex justify-between items-center mb-3">
          <p className="text-primary font-medium">₹{item.price}</p>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg 
                key={index}
                className={`w-4 h-4 ${index < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
      </div>
      
      <button 
        onClick={handleAddToCart}
        className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg transition-colors mt-auto"
      >
        Add to Order
      </button>
    </div>
  );
};

export default MenuCard;
