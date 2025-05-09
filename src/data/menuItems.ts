
export type MenuCategory = 'beverages' | 'desserts' | 'main' | 'starters';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: MenuCategory;
  isVegetarian: boolean;
  rating: number;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in a rich, creamy tomato sauce flavored with aromatic spices.",
    price: 320,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "main",
    isVegetarian: false,
    rating: 4.9
  },
  {
    id: 2,
    name: "Paneer Tikka Masala",
    description: "Cubes of cottage cheese marinated in spices and grilled to perfection.",
    price: 280,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a5678c4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "main",
    isVegetarian: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
    price: 250,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlyeWFuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "main",
    isVegetarian: true,
    rating: 4.5
  },
  {
    id: 4,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
    price: 280,
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJpcnlhbml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "main",
    isVegetarian: false,
    rating: 4.8
  },
  {
    id: 5,
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with milk, cardamom, cinnamon, and ginger.",
    price: 80,
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "beverages",
    isVegetarian: true,
    rating: 4.6
  },
  {
    id: 6,
    name: "Mango Lassi",
    description: "Refreshing yogurt-based drink blended with sweet mangoes and cardamom.",
    price: 120,
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuZ28lMjBsYXNzaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "beverages",
    isVegetarian: true,
    rating: 4.7
  },
  {
    id: 7,
    name: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in rose-flavored sugar syrup.",
    price: 150,
    image: "https://images.unsplash.com/photo-1546101269-7362c69542b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VsYWIlMjBqYW11bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "desserts",
    isVegetarian: true,
    rating: 4.9
  },
  {
    id: 8,
    name: "Kheer",
    description: "Creamy rice pudding flavored with cardamom, saffron, and garnished with nuts.",
    price: 180,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2hlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "desserts",
    isVegetarian: true,
    rating: 4.6
  },
  {
    id: 9,
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas, served with chutney.",
    price: 100,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "starters",
    isVegetarian: true,
    rating: 4.7
  },
  {
    id: 10,
    name: "Chicken Tikka",
    description: "Tender chicken pieces marinated in yogurt and spices, grilled to perfection.",
    price: 220,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "starters",
    isVegetarian: false,
    rating: 4.8
  },
  {
    id: 11,
    name: "Palak Paneer",
    description: "Cottage cheese cubes in a creamy spinach gravy flavored with spices.",
    price: 260,
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa7a10b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWslMjBwYW5lZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "main",
    isVegetarian: true,
    rating: 4.6
  },
  {
    id: 12,
    name: "Tandoori Roti",
    description: "Traditional Indian bread baked in a clay oven, perfect with curries.",
    price: 40,
    image: "https://images.unsplash.com/photo-1619413364488-aaebf37b933f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm90aXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    category: "main",
    isVegetarian: true,
    rating: 4.5
  }
];
