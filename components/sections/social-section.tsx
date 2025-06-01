"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useAudio } from '@/components/audio-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Star, ThumbsUp, Heart } from 'lucide-react';

interface SocialPost {
  id: number;
  username: string;
  image: string;
  caption: string;
  likes: number;
  platform: 'instagram' | 'facebook' | 'twitter';
}

const socialPosts: SocialPost[] = [
  {
    id: 1,
    username: "travelwithriya",
    image: "https://images.pexels.com/photos/2682543/pexels-photo-2682543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Taking my Campus TrailBlaze X on another adventure! These shoes never disappoint. #CampusShoes #AdventureTime",
    likes: 842,
    platform: 'instagram'
  },
  {
    id: 2,
    username: "fitnesswithaj",
    image: "https://images.pexels.com/photos/4753987/pexels-photo-4753987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Morning run in my new Campus AirFlex. Best running shoes I've owned! #MorningRun #CampusShoes",
    likes: 1253,
    platform: 'instagram'
  },
  {
    id: 3,
    username: "streetstyle_sam",
    image: "https://images.pexels.com/photos/2346015/pexels-photo-2346015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Urban vibes with my new Campus kicks. Comfort meets style! #StreetStyle #CampusUrbanStride",
    likes: 967,
    platform: 'instagram'
  },
  {
    id: 4,
    username: "collegedays_neha",
    image: "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Campus life is better with Campus shoes! Love how these go with everything. #CollegeStyle #CampusShoes",
    likes: 753,
    platform: 'instagram'
  },
  {
    id: 5,
    username: "hikerextraordinaire",
    image: "https://images.pexels.com/photos/1159588/pexels-photo-1159588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Summit reached in my trusty Campus hikers. The grip on these is unmatched! #HikingAdventures #CampusExplorer",
    likes: 1089,
    platform: 'instagram'
  },
  {
    id: 6,
    username: "dancewithdiya",
    image: "https://images.pexels.com/photos/5952732/pexels-photo-5952732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    caption: "Perfect shoes for practice sessions! Campus shoes give me the support I need for those long dance rehearsals. #DancerLife #CampusComfort",
    likes: 875,
    platform: 'instagram'
  }
];

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Rajat K.",
    rating: 5,
    comment: "Absolutely love my Campus shoes! They're durable, stylish, and so comfortable for everyday wear."
  },
  {
    id: 2,
    name: "Meera S.",
    rating: 4,
    comment: "Great quality for the price. I use them for my daily gym sessions and they've held up really well."
  },
  {
    id: 3,
    name: "Arjun T.",
    rating: 5,
    comment: "Campus has been my go-to brand for years. Their new designs are even better than before!"
  }
];

const SocialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const { playScrollSound } = useAudio();

  if (isInView) {
    playScrollSound();
  }

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Social Proof & Buzz</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our community is saying about Campus Shoes across social media. Real people, real stories, real love for our products.
          </p>
        </motion.div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Instagram className="mr-2 text-accent" />
            From Our Instagram Community
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {socialPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={`Post by ${post.username}`}
                      fill
                      className="group-hover:scale-105 transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                        {post.username.charAt(0).toUpperCase()}
                      </div>
                      <span className="ml-2 font-medium">@{post.username}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-2">{post.caption}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Heart size={16} className="mr-1" />
                      {post.likes} likes
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Star className="mr-2 text-accent" />
            Customer Reviews
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={`${i < review.rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <p className="mb-4 italic text-muted-foreground">"{review.comment}"</p>
                    <p className="font-medium">{review.name}</p>
                    <div className="flex items-center mt-4">
                      <ThumbsUp size={16} className="mr-1 text-accent" />
                      <span className="text-sm text-muted-foreground">Verified Purchase</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;