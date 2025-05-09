
import { Calendar, Clock, Book, Building } from "lucide-react";

const timelineItems = [
  {
    year: '2005',
    title: 'Restaurant Inauguration',
    description: 'Spice Garden opened its doors in the heart of the city with just 10 tables.',
    icon: Building
  },
  {
    year: '2010',
    title: 'Growth Phase',
    description: 'Expanded our location to accommodate growing customer base and added catering services.',
    icon: Calendar
  },
  {
    year: '2015',
    title: 'Cultural Engagement',
    description: 'Started annual food festivals celebrating regional Indian cuisines and traditions.',
    icon: Book
  },
  {
    year: '2023',
    title: 'Present Day',
    description: 'Award-winning restaurant with multiple locations, cooking classes, and a cookbook.',
    icon: Clock
  }
];

const Legacy = () => {
  return (
    <section id="legacy" className="py-20 bg-spice-darkBrown/90 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffd700' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '400px 400px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 gold-gradient">
            Our Legacy
          </h2>
          <p className="text-spice-gold/80 max-w-2xl mx-auto">
            A journey through time, celebrating our milestones and growth through the years.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-spice-gold/30"></div>
          
          {/* Timeline items */}
          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <h3 className="text-xl font-bold mb-1 text-spice-gold">{item.title}</h3>
                  <p className="gold-gradient font-medium mb-2">{item.year}</p>
                  <p className="text-spice-gold/70">{item.description}</p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-spice-gold rounded-full flex items-center justify-center text-spice-darkBrown shadow-[0_0_10px_#ffd700]">
                    <item.icon className="h-5 w-5" />
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
