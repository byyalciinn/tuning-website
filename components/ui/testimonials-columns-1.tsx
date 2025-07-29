"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-white"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg max-w-xs w-full bg-white" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const testimonials = [
  {
    text: "Amazing experience purchasing my BMW X5 from Prodac. The team was professional and the vehicle quality exceeded my expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "John Davis",
    role: "BMW X5 Owner",
  },
  {
    text: "The tuning service for my Porsche 911 was exceptional. Increased performance and maintained reliability. Prodac knows their craft!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Johnson",
    role: "Porsche 911 Owner",
  },
  {
    text: "Professional service from start to finish. Got a great deal on my Mercedes C-Class and the financing options were very competitive.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Mike Smith",
    role: "Mercedes C-Class Owner",
  },
  {
    text: "The team at Prodac transformed my Audi A4 with their custom tuning package. The difference in performance is incredible!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Emma Wilson",
    role: "Audi A4 Owner",
  },
  {
    text: "Excellent customer service and technical expertise. My Tesla Model S performance upgrade was handled with care and precision.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "David Chen",
    role: "Tesla Model S Owner",
  },
  {
    text: "Best automotive service experience I've had. The staff is knowledgeable and truly cares about delivering quality results.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Rodriguez",
    role: "Lexus RX Owner",
  },
  {
    text: "Prodac delivered beyond expectations. My Volkswagen Golf's performance tune is perfect - more power while maintaining fuel efficiency.",
    image: "https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=150&h=150&fit=crop&crop=face",
    name: "James Anderson",
    role: "VW Golf Owner",
  },
  {
    text: "The attention to detail and quality of work is outstanding. My BMW M3 feels like a completely new car after their tuning service.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    name: "Rachel Thompson",
    role: "BMW M3 Owner",
  },
  {
    text: "Professional, reliable, and results-driven. The team helped me find the perfect Audi Q7 and provided excellent after-sales support.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Alexander Brown",
    role: "Audi Q7 Owner",
  },
]; 