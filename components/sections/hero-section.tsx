"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/components/audio-provider';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { playHoverSound, playClickSound } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonHover = () => {
    playHoverSound();
  };

  const handleClick = () => {
    playClickSound();
    const journeySection = document.getElementById('journey');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Campus Shoes Hero"
          fill
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center',
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Step Into <span className="text-accent">Your Story</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Campus Shoes crafts more than footwear – we create companions for your journey. 
            Every step tells your unique story, and we're here to make sure it's one worth telling.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/80 text-white"
              onMouseEnter={handleButtonHover}
              onClick={playClickSound}
            >
              Find Your Perfect Pair
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        onClick={handleClick}
        onMouseEnter={handleButtonHover}
      >
        <ArrowDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
};

export default HeroSection;