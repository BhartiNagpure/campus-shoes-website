"use client";

import Link from 'next/link';
import { useAudio } from '@/components/audio-provider';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const { playHoverSound, playClickSound } = useAudio();

  const handleLinkHover = () => {
    playHoverSound();
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">CAMPUS</h3>
            <p className="mb-6 text-primary-foreground/80">
              Step into your story with Campus Shoes. Quality, comfort, and style for every journey.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                onMouseEnter={handleLinkHover}
                onClick={playClickSound}
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                onMouseEnter={handleLinkHover}
                onClick={playClickSound}
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                onMouseEnter={handleLinkHover}
                onClick={playClickSound}
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                onMouseEnter={handleLinkHover}
                onClick={playClickSound}
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  Kids' Collection
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  Store Locator
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                  onMouseEnter={handleLinkHover}
                  onClick={playClickSound}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="mb-4 text-primary-foreground/80">
              Get exclusive offers and updates on new arrivals.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="rounded-r-none border-r-0 focus:ring-0 focus-visible:ring-0"
              />
              <Button 
                type="submit" 
                className="rounded-l-none bg-accent hover:bg-accent/80"
                onMouseEnter={handleLinkHover}
                onClick={playClickSound}
              >
                <Send size={16} />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Campus Shoes. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            <Link 
              href="#" 
              className="hover:text-accent transition-colors"
              onMouseEnter={handleLinkHover}
              onClick={playClickSound}
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="hover:text-accent transition-colors"
              onMouseEnter={handleLinkHover}
              onClick={playClickSound}
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              className="hover:text-accent transition-colors"
              onMouseEnter={handleLinkHover}
              onClick={playClickSound}
            >
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;