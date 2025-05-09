
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
    <section id="legacy" className="py-20 bg-spice-turmeric/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Our Legacy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through time, celebrating our milestones and growth through the years.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
          
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
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-primary font-medium mb-2">{item.year}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
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
