"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useAudio } from '@/components/audio-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PersonaType {
  id: string;
  name: string;
  description: string;
}

interface ProductStyle {
  id: number;
  name: string;
  description: string;
  image: string;
  persona: string;
}

const personas: PersonaType[] = [
  {
    id: "athlete",
    name: "The Athlete",
    description: "Performance-driven footwear for those who push their limits",
  },
  {
    id: "student",
    name: "The Student",
    description: "Versatile, comfortable styles for busy campus life",
  },
  {
    id: "professional",
    name: "The Professional",
    description: "Polished yet comfortable options for the workplace",
  },
  {
    id: "explorer",
    name: "The Explorer",
    description: "Durable designs for outdoor adventures and travel",
  },
];

const styles: ProductStyle[] = [
  {
    id: 1,
    name: "Sprint Pro",
    description: "Lightweight design with responsive cushioning for maximum speed and performance.",
    image: "https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "athlete"
  },
  {
    id: 2,
    name: "CrossTrain X",
    description: "Versatile support for multiple activities, from weightlifting to cardio sessions.",
    image: "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "athlete"
  },
  {
    id: 3,
    name: "Endurance Runner",
    description: "Extra cushioning and support for long-distance runners and endurance athletes.",
    image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "athlete"
  },
  {
    id: 4,
    name: "Campus Casual",
    description: "Everyday style that transitions from lecture halls to coffee shops with ease.",
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "student"
  },
  {
    id: 5,
    name: "Study Session",
    description: "Ultra-comfortable design for those long hours at the library or late-night study groups.",
    image: "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "student"
  },
  {
    id: 6,
    name: "Social Butterfly",
    description: "Eye-catching styles that stand out at campus events and social gatherings.",
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "student"
  },
  {
    id: 7,
    name: "Executive Comfort",
    description: "Sleek, professional appearance with hidden comfort features for all-day meetings.",
    image: "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "professional"
  },
  {
    id: 8,
    name: "Business Casual",
    description: "The perfect balance of professional appearance and casual comfort.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "professional"
  },
  {
    id: 9,
    name: "Commuter Pro",
    description: "Designed for the professional on the move, with extra durability and comfort for daily commutes.",
    image: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "professional"
  },
  {
    id: 10,
    name: "Trail Master",
    description: "Rugged construction with superior grip for hiking and off-road adventures.",
    image: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "explorer"
  },
  {
    id: 11,
    name: "Urban Explorer",
    description: "City-ready style with the durability to handle whatever your adventures throw at you.",
    image: "https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "explorer"
  },
  {
    id: 12,
    name: "All-Terrain Pro",
    description: "Versatile design that transitions from city streets to mountain trails with ease.",
    image: "https://images.pexels.com/photos/2404959/pexels-photo-2404959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    persona: "explorer"
  },
];

const LookbookSection = () => {
  const [activeTab, setActiveTab] = useState("athlete");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { playHoverSound, playClickSound, playScrollSound } = useAudio();
  
  const filteredStyles = styles.filter(style => style.persona === activeTab);

  if (isInView) {
    playScrollSound();
  }

  const handleTabChange = (value: string) => {
    playClickSound();
    setActiveTab(value);
  };

  return (
    <section id="lookbook" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Interactive Lookbook</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover shoes that match your lifestyle. Explore our collections designed for different personalities and find your perfect match.
          </p>
        </motion.div>
        
        <Tabs defaultValue="athlete" value={activeTab} onValueChange={handleTabChange} className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
            {personas.map(persona => (
              <TabsTrigger 
                key={persona.id} 
                value={persona.id}
                onMouseEnter={playHoverSound}
              >
                {persona.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {personas.map(persona => (
            <TabsContent key={persona.id} value={persona.id} className="mt-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">{persona.name}</h3>
                <p className="text-muted-foreground">{persona.description}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="lookbook-grid">
          <AnimatePresence mode="wait">
            {filteredStyles.map((style) => (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className="group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2">{style.name}</h4>
                    <p className="text-muted-foreground mb-4">{style.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full hover:bg-accent hover:text-white transition-colors"
                      onMouseEnter={playHoverSound}
                      onClick={playClickSound}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;