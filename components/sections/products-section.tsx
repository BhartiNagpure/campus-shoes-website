"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useAudio } from '@/components/audio-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "AirFlex Runner",
    description: "Designed for everyday athletes, the AirFlex Runner combines cutting-edge cushioning with breathable materials for ultimate comfort on any terrain.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["CloudCushion Technology", "Breathable Mesh Upper", "Responsive Midsole", "All-day Comfort"]
  },
  {
    id: 2,
    name: "Urban Stride",
    description: "The perfect blend of style and function, Urban Stride takes you from office to evening with effortless versatility and all-day comfort.",
    image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["Memory Foam Insole", "Premium Materials", "Versatile Design", "Durable Construction"]
  },
  {
    id: 3,
    name: "TrailBlaze X",
    description: "Conquer any path with TrailBlaze X, featuring enhanced grip and durability for adventures that take you off the beaten track.",
    image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    features: ["All-terrain Traction", "Water-resistant Upper", "Protective Toe Cap", "Impact Absorption"]
  }
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { playHoverSound, playClickSound, playScrollSound } = useAudio();

  if (isInView) {
    playScrollSound();
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="products" className="section-padding" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Product with Purpose</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every Campus shoe is crafted with intention – designed to enhance your performance, comfort, and style. 
            Discover the stories behind our most loved creations.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <h4 className="font-semibold mb-2">Features:</h4>
                  <ul className="mb-6 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full"
                    onMouseEnter={playHoverSound}
                    onClick={playClickSound}
                  >
                    Explore {product.name} 
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;