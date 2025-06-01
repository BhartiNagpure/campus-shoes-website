"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useAudio } from '@/components/audio-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Marathon Runner",
    quote: "I've tried dozens of running shoes, but my Campus AirFlex Runners have been my loyal companions through three marathons. The comfort and support they provide is unmatched.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Mumbai, India"
  },
  {
    id: 2,
    name: "Vikram Mehta",
    role: "College Student",
    quote: "As a student who's always on the go, my Urban Strides are perfect for my lifestyle. From lectures to hanging out with friends, they keep me comfortable and looking good.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Delhi, India"
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Hiking Enthusiast",
    quote: "My TrailBlaze X shoes have conquered trails across the Himalayas with me. The grip and durability are exceptional, even in the most challenging terrains.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    location: "Shimla, India"
  }
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { playScrollSound } = useAudio();

  if (isInView) {
    playScrollSound();
  }

  return (
    <section id="stories" className="section-padding bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet the Wearers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our shoes come to life through the experiences of those who wear them. 
            Discover real stories from real people who have made Campus a part of their journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-56 w-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <Quote className="text-accent mb-4" size={32} />
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;