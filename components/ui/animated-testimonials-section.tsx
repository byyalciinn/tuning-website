"use client";
import { TestimonialsColumn, testimonials } from "./testimonials-columns-1";
import { motion } from "motion/react";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function AnimatedTestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container px-4 md:px-6">
        {/* Keep existing header as requested */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
            Customer Reviews
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-600 md:text-xl">
            Experiences of customers satisfied with our vehicle sales and service
          </p>
        </div>

        {/* Animated testimonials columns */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
} 