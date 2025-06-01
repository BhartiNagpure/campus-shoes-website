"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAudio } from '@/components/audio-provider';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const timelineData: TimelineItem[] = [
  {
    year: '1997',
    title: 'The Beginning',
    description: 'Campus Shoes was founded with a vision to create comfortable, stylish footwear for the Indian youth.',
    position: 'left',
  },
  {
    year: '2005',
    title: 'Expanding Horizons',
    description: 'We launched our first flagship store in Delhi, marking the beginning of our retail journey.',
    position: 'right',
  },
  {
    year: '2010',
    title: 'Innovation Era',
    description: 'Introduced our revolutionary comfort technology, setting new standards in the footwear industry.',
    position: 'left',
  },
  {
    year: '2015',
    title: 'Going National',
    description: 'Expanded to over 100 cities across India, becoming a household name for quality footwear.',
    position: 'right',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched our e-commerce platform, bringing Campus Shoes to every corner of the country.',
    position: 'left',
  },
  {
    year: '2025',
    title: 'Looking Forward',
    description: 'Continuing our journey of innovation and expansion with sustainable practices and global ambitions.',
    position: 'right',
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { playScrollSound } = useAudio();

  if (isInView) {
    playScrollSound();
  }

  return (
    <section id="journey" className="section-padding bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to becoming one of India's most loved footwear brands, our journey has been one of passion, perseverance, and innovation.
          </p>
        </motion.div>
        
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: item.position === 'left' ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`timeline-content ${item.position === 'right' ? 'ml-auto' : ''}`}>
                <div className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;