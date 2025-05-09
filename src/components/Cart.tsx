
import { ShoppingBag, X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  
  // Calculate total price
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  if (cart.length === 0) {
    return (
      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-72 z-50 border border-border">
        <div className="flex flex-col items-center justify-center py-6">
          <ShoppingBag className="h-12 w-12 text-muted-foreground mb-2" />
          <p className="text-muted-foreground">Your cart is empty</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-4 w-72 z-50 border border-border">
      <h3 className="font-medium text-lg mb-3">Your Order</h3>
      
      <div className="max-h-80 overflow-auto">
        {cart.map((item) => (
          <div key={item.id} className="flex items-start py-3 border-b">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-14 h-14 rounded-md object-cover mr-3" 
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-medium">{item.name}</h4>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-muted-foreground hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-primary">₹{item.price.toFixed(2)}</p>
              <div className="flex items-center mt-1">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 flex items-center justify-center border rounded-md"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 flex items-center justify-center border rounded-md"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-2 border-t">
        <div className="flex justify-between font-medium">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-3 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
