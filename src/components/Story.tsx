
import { useState } from 'react';

const storyImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1567188040759-fb8a5678c4d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    quote: "Good food is the foundation of genuine happiness."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    quote: "Cooking is an art, but all art requires knowing something."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    quote: "Food brings people together on many different levels."
  },
];

const Story = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  
  return (
    <section id="story" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded in 2005, Spice Garden began as a small family restaurant with a 
              passion for authentic Indian cuisine. Our founder, Chef Rajesh Sharma, 
              brought recipes passed down through generations from his hometown in 
              Northern India.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              What started as a modest establishment has grown into one of the city's 
              most beloved culinary destinations. We've maintained our commitment to 
              quality, using only the freshest ingredients and traditional cooking 
              methods.
            </p>
            <p className="font-medium text-lg font-playfair italic">
              "Every dish tells a story of culture, tradition, and passion."
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-4 h-[500px]">
            {storyImages.map((image, index) => (
              <div 
                key={image.id}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  index === 2 ? 'col-span-2' : ''
                }`}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img 
                  src={image.url}
                  alt={`Spice Garden ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredImage === image.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div 
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 p-4 ${
                    hoveredImage === image.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="text-white text-center font-playfair italic text-lg">
                    {image.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
