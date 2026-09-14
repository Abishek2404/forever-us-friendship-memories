import { motion } from 'motion/react';
import { memories } from '../data/memories';

const captions = [
  { title: "The Photographer", sub: "Always Ready" },
  { title: "The Calm One", sub: "Positive Vibes" },
  { title: "The Silent Support", sub: "Got Your Back" },
  { title: "The Cool One", sub: "Unique Style" },
  { title: "The Fun One", sub: "Brings The Energy" },
  { title: "The Planner", sub: "Keeps Us Together" },
  { title: "The Sweet One", sub: "Balances Everything" }
];

export default function PeopleSection() {
  // Use first 7 images to match captions, or whatever is available
  const peopleImages = memories.slice(10, 17);

  return (
    <section className="bg-secondary text-primary py-24 md:py-32 relative overflow-hidden">
      {/* Subtle texture/paper effect for background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-primary">
            THE PEOPLE BEHIND<br />THE MEMORIES
          </h2>
          <p className="font-handwriting text-2xl md:text-3xl text-primary/70 transform -rotate-2 inline-block">
            “Different personalities. One crazy story.”
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile: horizontal scroll, Desktop: flex wrap / grid */}
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-6 md:gap-8 pb-12 snap-x snap-mandatory px-4 md:px-0 -mx-4 md:mx-0 hide-scrollbar">
          {peopleImages.map((mem, i) => {
            const rot = i % 2 === 0 ? (i % 3 === 0 ? 3 : -2) : (i % 4 === 0 ? -4 : 2);
            const caption = captions[i % captions.length];
            return (
              <motion.div
                key={mem.id}
                initial={{ opacity: 0, y: 30, rotate: rot - 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: rot }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                className="snap-center shrink-0 w-64 md:w-72 bg-white p-4 pb-12 rounded-sm shadow-xl shadow-primary/10 relative"
              >
                {/* Tape detail */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 opacity-80" style={{ border: '1px solid rgba(0,0,0,0.05)' }}></div>
                
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-4 rounded-sm">
                  <img
                    src={mem.image}
                    alt={mem.alt}
                    loading="lazy"
                    className="w-full h-full object-cover filter contrast-[1.05]"
                  />
                </div>
                <div className="absolute bottom-3 left-0 w-full text-center px-4">
                  <p className="font-handwriting text-xl text-primary-light">
                    {caption.title}
                  </p>
                  <p className="font-body text-[10px] text-primary/50 tracking-wider uppercase mt-1">
                    {caption.sub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
