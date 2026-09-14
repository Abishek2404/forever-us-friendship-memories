import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { memories } from '../data/memories';

export default function FinalMemory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  // Use the strongest emotional group photograph for the final section
  const finalImage = memories.find(m => m.category === 'poster')?.image || memories[memories.length - 1].image;

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] overflow-hidden flex flex-col justify-center items-center">
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <img
          src={finalImage}
          alt="Until the next memory"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full"
      >
        <p className="font-body text-xs md:text-sm tracking-[0.3em] text-accent-gold uppercase mb-8 md:mb-12">
          Until the next memory...
        </p>

        <p className="font-heading italic text-xl md:text-3xl text-secondary/90 mb-12 md:mb-16 max-w-2xl">
          “Forever isn't a time.<br />It's a collection of moments.”
        </p>

        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl tracking-tight text-secondary leading-none mb-12 md:mb-16">
          FRIENDSHIP ∞
        </h2>

        <div className="flex flex-col gap-2 font-body font-light text-sm md:text-base text-secondary/80 mb-16 uppercase tracking-widest">
          <p>“Today's friends.</p>
          <p>Tomorrow's stories.</p>
          <p>Always us.”</p>
        </div>

        <p className="font-handwriting text-2xl md:text-3xl text-secondary/70 transform -rotate-2">
          “Thank you for being part<br />of this chapter.”
        </p>
      </motion.div>
    </section>
  );
}
