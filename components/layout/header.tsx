"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useAudio } from '@/components/audio-provider';
import { Menu, X, Volume2, VolumeX, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAudioEnabled, toggleAudio, playHoverSound, playClickSound } = useAudio();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    playClickSound();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleAudioToggle = () => {
    toggleAudio();
    playClickSound();
  };

  const handleThemeToggle = () => {
    playClickSound();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLinkHover = () => {
    playHoverSound();
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold text-foreground flex items-center space-x-2"
          onMouseEnter={handleLinkHover}
          onClick={playClickSound}
        >
          <span className="text-accent">CAMPUS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="/#journey" 
            className=" hover:text-foreground/80 text-accent transition-colors"
            onMouseEnter={handleLinkHover}
            onClick={playClickSound}
          >
            Our Journey
          </Link>
          <Link 
            href="/#products" 
            className="hover:text-foreground/80 text-accent transition-colors"
            onMouseEnter={handleLinkHover}
            onClick={playClickSound}
          >
            Products
          </Link>
          <Link 
            href="/#stories" 
            className="hover:text-foreground/80 text-accent transition-colors"
            onMouseEnter={handleLinkHover}
            onClick={playClickSound}
          >
            Stories
          </Link>
          <Link 
            href="/#lookbook" 
            className=" hover:text-foreground/80 transition-colors text-accent"
            onMouseEnter={handleLinkHover}
            onClick={playClickSound}
          >
            Lookbook
          </Link>
          <Button 
            className="bg-accent hover:bg-accent/80 text-white"
            onMouseEnter={handleLinkHover}
            onClick={playClickSound}
          >
            Find Your Story
          </Button>
        </nav>

        {/* Controls */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={handleAudioToggle}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            onMouseEnter={handleLinkHover}
          >
            {isAudioEnabled ? <Volume2 size={20} className='text-white'/> : <VolumeX size={20} />}
          </button>
          
          <button 
            onClick={handleThemeToggle}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            onMouseEnter={handleLinkHover}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            className="md:hidden p-2 rounded-full hover:bg-foreground/10 transition-colors"
            onClick={toggleMobileMenu}
            onMouseEnter={handleLinkHover}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-4 space-y-4">
              <Link 
                href="/#journey" 
                className="py-2 text-foreground/80 hover:text-accent transition-colors"
                onMouseEnter={handleLinkHover}
                onClick={() => { playClickSound(); setIsMobileMenuOpen(false); }}
              >
                Our Journey
              </Link>
              <Link 
                href="/#products" 
                className="py-2 text-foreground/80 hover:text-accent transition-colors"
                onMouseEnter={handleLinkHover}
                onClick={() => { playClickSound(); setIsMobileMenuOpen(false); }}
              >
                Products
              </Link>
              <Link 
                href="/#stories" 
                className="py-2 text-foreground/80 hover:text-accent transition-colors"
                onMouseEnter={handleLinkHover}
                onClick={() => { playClickSound(); setIsMobileMenuOpen(false); }}
              >
                Stories
              </Link>
              <Link 
                href="/#lookbook" 
                className="py-2 text-foreground/80 hover:text-accent transition-colors"
                onMouseEnter={handleLinkHover}
                onClick={() => { playClickSound(); setIsMobileMenuOpen(false); }}
              >
                Lookbook
              </Link>
              <Button 
                className="bg-accent hover:bg-accent/80 text-white w-full"
                onMouseEnter={handleLinkHover}
                onClick={() => { playClickSound(); setIsMobileMenuOpen(false); }}
              >
                Find Your Story
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;