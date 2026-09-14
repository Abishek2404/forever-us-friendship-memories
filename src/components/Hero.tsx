import { motion, useScroll, useTransform } from 'motion/react';
import { memories } from '../data/memories';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Using the strongest group photograph for the hero (fallback to first group image)
  const heroImage = memories.find((m) => m.category === 'group')?.image || memories[0].image;

  return (
    <section className="relative w-full h-[100svh] overflow-hidden film-grain flex flex-col justify-center items-center">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Mobile Background */}
        <img
          src="/Forever_Us_Project_Images/mobile-viwe-hero-bg.png"
          alt="Forever Us Hero"
          className="md:hidden w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Desktop Background */}
        <img
          src={heroImage}
          alt="Forever Us Hero"
          className="hidden md:block w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-primary/40" />
      </motion.div>

      <div className="relative z-10 flex flex-col justify-between md:justify-center items-center text-center px-6 pt-[12vh] pb-[20vh] md:py-0 w-full h-full md:h-auto max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:mb-6"
        >
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight text-secondary leading-none">
            FOREVER<br />US ∞
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-md"
        >
          <p className="font-heading italic text-xl md:text-2xl lg:text-3xl text-secondary/90 mb-5 md:mb-8 leading-snug">
            “Some moments become memories.<br />Some friends become family.”
          </p>
          <p className="font-body text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-accent-gold font-medium">
            GOOD FRIENDS &bull; BETTER DAYS &bull; FOREVER MEMORIES
          </p>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-3 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-secondary/60" />
        </motion.div>
        <span className="font-body text-[10px] tracking-widest text-secondary/60 uppercase">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
