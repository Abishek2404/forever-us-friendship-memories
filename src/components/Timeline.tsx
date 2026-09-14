import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { memories } from '../data/memories';

const timelineEvents = [
  "01 — WE ARRIVED",
  "02 — WE MET",
  "03 — WE LAUGHED",
  "04 — WE TOOK PHOTOS",
  "05 — WE MADE MEMORIES",
  "06 — WE WENT HOME"
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Use the first 6 images for the timeline
  const timelineImages = memories.slice(0, 6);

  return (
    <section ref={containerRef} className="bg-secondary text-primary py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            THAT ONE EVENING
          </h2>
          <p className="font-body font-light text-lg md:text-xl text-primary/70">
            “A simple day turned into moments and memories.”
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Mobile Vertical Line */}
        <div className="md:hidden absolute left-[34px] top-0 bottom-0 w-px bg-primary/20">
          <motion.div 
            className="absolute top-0 left-0 right-0 bg-accent-rose origin-top"
            style={{ scaleY: scrollYProgress, bottom: 0 }}
          />
        </div>

        {/* Desktop Horizontal Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-primary/20 -translate-y-1/2">
          <motion.div 
            className="absolute left-0 top-0 bottom-0 bg-accent-rose origin-left"
            style={{ scaleX: scrollYProgress, right: 0 }}
          />
        </div>

        {/* Desktop: Horizontal layout, Mobile: Vertical layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4 relative z-10 py-12 md:py-0">
          {timelineEvents.map((event, i) => {
            const mem = timelineImages[i % timelineImages.length];
            // Alternating positions for desktop
            const isTop = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex items-center md:flex-col gap-6 md:gap-4 w-full md:w-48 ${isTop ? 'md:justify-end' : 'md:justify-start md:mt-48'} pl-16 md:pl-0 relative`}
              >
                {/* Mobile dot indicator */}
                <div className="md:hidden absolute left-[28px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-secondary z-10" />

                {isTop ? (
                  <>
                    <p className="hidden md:block font-body text-xs font-semibold tracking-widest text-primary/60 text-center uppercase mb-4">{event}</p>
                    <div className="hidden md:block w-3 h-3 rounded-full bg-primary border-2 border-secondary z-10 absolute top-1/2 -translate-y-1/2" />
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 shadow-lg shadow-primary/5">
                      <img src={mem.image} alt="Memory" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
                    </div>
                    <p className="md:hidden font-body text-xs font-semibold tracking-widest text-primary/60 uppercase">{event}</p>
                  </>
                ) : (
                  <>
                    <p className="md:hidden font-body text-xs font-semibold tracking-widest text-primary/60 uppercase">{event}</p>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 shadow-lg shadow-primary/5">
                      <img src={mem.image} alt="Memory" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
                    </div>
                    <div className="hidden md:block w-3 h-3 rounded-full bg-primary border-2 border-secondary z-10 absolute top-1/2 -translate-y-1/2" />
                    <p className="hidden md:block font-body text-xs font-semibold tracking-widest text-primary/60 text-center uppercase mt-4">{event}</p>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
