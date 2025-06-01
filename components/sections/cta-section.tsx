"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAudio } from '@/components/audio-provider';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const CtaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });
  const { playHoverSound, playClickSound } = useAudio();

  const handleButtonHover = () => {
    playHoverSound();
  };

  return (
    <section 
      className="py-20 bg-accent text-white"
      ref={ref}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Find Your Campus Story</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Every journey begins with a single step. Make yours count with the perfect pair of Campus shoes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-accent hover:bg-white/90 flex items-center"
              onMouseEnter={handleButtonHover}
              onClick={playClickSound}
            >
              <ShoppingBag className="mr-2" size={20} />
              Shop Collection
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 flex items-center"
              onMouseEnter={handleButtonHover}
              onClick={playClickSound}
            >
              Find a Store
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;