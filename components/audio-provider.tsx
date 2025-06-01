"use client";

import React, { createContext, useState, useContext, useEffect, useRef } from 'react';
import { Howl } from 'howler';

type AudioContextType = {
  playHoverSound: () => void;
  playClickSound: () => void;
  playPageTransition: () => void;
  playScrollSound: () => void;
  isAudioEnabled: boolean;
  toggleAudio: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const hoverSound = useRef<Howl | null>(null);
  const clickSound = useRef<Howl | null>(null);
  const pageTransitionSound = useRef<Howl | null>(null);
  const scrollSound = useRef<Howl | null>(null);
  
  useEffect(() => {
    // Initialize audio only after user interaction
    const initializeAudio = () => {
      if (!hoverSound.current) {
        hoverSound.current = new Howl({
          src: ['/audio/hover.mp3'],
          volume: 0.2,
        });
      }
      
      if (!clickSound.current) {
        clickSound.current = new Howl({
          src: ['/audio/click.mp3'],
          volume: 0.3,
        });
      }
      
      if (!pageTransitionSound.current) {
        pageTransitionSound.current = new Howl({
          src: ['/audio/transition.mp3'],
          volume: 0.4,
        });
      }
      
      if (!scrollSound.current) {
        scrollSound.current = new Howl({
          src: ['/audio/scroll.mp3'],
          volume: 0.15,
        });
      }
      
      document.removeEventListener('click', initializeAudio);
    };
    
    document.addEventListener('click', initializeAudio, { once: true });
    
    return () => {
      document.removeEventListener('click', initializeAudio);
    };
  }, []);
  
  const playHoverSound = () => {
    if (isAudioEnabled && hoverSound.current) {
      hoverSound.current.play();
    }
  };
  
  const playClickSound = () => {
    if (isAudioEnabled && clickSound.current) {
      clickSound.current.play();
    }
  };
  
  const playPageTransition = () => {
    if (isAudioEnabled && pageTransitionSound.current) {
      pageTransitionSound.current.play();
    }
  };
  
  const playScrollSound = () => {
    if (isAudioEnabled && scrollSound.current) {
      scrollSound.current.play();
    }
  };
  
  const toggleAudio = () => {
    setIsAudioEnabled(prev => !prev);
  };
  
  const value = {
    playHoverSound,
    playClickSound,
    playPageTransition,
    playScrollSound,
    isAudioEnabled,
    toggleAudio,
  };
  
  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};