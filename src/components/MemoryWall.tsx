import { useState } from 'react';
import { motion } from 'motion/react';
import { memories, Memory } from '../data/memories';
import Lightbox from './Lightbox';

const labels = [
  "Good Friends, Better Days",
  "Same Vibes, Always",
  "Just Us",
  "Better Together",
  "Core Memory",
  "Same Old Madness",
  "Together Always",
  "Moments We Keep",
  "Made To Remember",
  "Good Times",
  "A Moment Worth Keeping",
  "Just Another Good Day",
  "Growing Through The Years",
  "Cool Days, Good Memories",
  "Dressed For The Moment",
  "Grace In Every Moment",
  "A Moment Worth Keeping",
  "Forever Us ∞",
];

export default function MemoryWall() {
  const [activeMemoryIndex, setActiveMemoryIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (activeMemoryIndex === null) return;
    setActiveMemoryIndex((activeMemoryIndex + 1) % memories.length);
  };

  const handlePrev = () => {
    if (activeMemoryIndex === null) return;
    setActiveMemoryIndex((activeMemoryIndex - 1 + memories.length) % memories.length);
  };

  // Create columns for masonry layout
  // Desktop: 3 columns, Mobile: 2 columns
  const col1: Memory[] = [];
  const col2: Memory[] = [];
  const col3: Memory[] = [];

  memories.forEach((mem, i) => {
    if (i % 3 === 0) col1.push(mem);
    else if (i % 3 === 1) col2.push(mem);
    else col3.push(mem);
  });

  const renderColumn = (col: Memory[], colIndex: number) => (
    <div className="flex flex-col gap-4 md:gap-8 flex-1" key={colIndex}>
      {col.map((mem, i) => {
        const originalIndex = memories.findIndex(m => m.id === mem.id);
        const hasLabel = true;
        const labelText = labels[originalIndex % labels.length];
        const isPoster = mem.category === 'poster';

        return (
          <motion.div
            key={mem.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: (colIndex * 0.1) + (i * 0.1) }}
            className={`relative group cursor-pointer ${isPoster ? 'col-span-2' : ''}`}
            onClick={() => setActiveMemoryIndex(originalIndex)}
          >
            <div className="overflow-hidden rounded-sm bg-primary-light">
              <img
                src={mem.image}
                alt={mem.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
            </div>
            
            {hasLabel && (
              <div className="absolute -bottom-3 -right-2 bg-secondary text-primary px-4 py-2 transform rotate-3 shadow-lg pointer-events-none">
                <span className="font-handwriting text-lg md:text-xl">{labelText}</span>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section className="bg-primary text-secondary py-24 md:py-32 film-grain">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-secondary">
            MEMORY WALL
          </h2>
          <p className="font-body font-light text-lg md:text-xl text-secondary/70">
            “A collection of smiles, moments and memories.”
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile: 2 columns, Desktop: 3 columns */}
        <div className="hidden md:flex gap-8">
          {renderColumn(col1, 0)}
          {renderColumn(col2, 1)}
          {renderColumn(col3, 2)}
        </div>
        
        <div className="flex md:hidden gap-4">
          <div className="flex flex-col gap-6 flex-1">
            {memories.filter((_, i) => i % 2 === 0).map((mem, i) => {
               const originalIndex = memories.findIndex(m => m.id === mem.id);
               return (
                <div key={mem.id} className="relative group cursor-pointer mb-2" onClick={() => setActiveMemoryIndex(originalIndex)}>
                  <img src={mem.image} alt={mem.alt} className="w-full h-auto object-cover rounded-sm" loading="lazy" />
                  <div className="absolute -bottom-2 -right-2 z-10 bg-secondary text-primary px-2 py-1 transform rotate-2 shadow-sm pointer-events-none">
                    <span className="font-handwriting text-sm">{labels[originalIndex % labels.length]}</span>
                  </div>
                </div>
               )
            })}
          </div>
          <div className="flex flex-col gap-6 flex-1">
            {memories.filter((_, i) => i % 2 !== 0).map((mem, i) => {
               const originalIndex = memories.findIndex(m => m.id === mem.id);
               return (
                <div key={mem.id} className="relative group cursor-pointer mb-2" onClick={() => setActiveMemoryIndex(originalIndex)}>
                  <img src={mem.image} alt={mem.alt} className="w-full h-auto object-cover rounded-sm" loading="lazy" />
                  <div className="absolute -bottom-2 -left-2 z-10 bg-secondary text-primary px-2 py-1 transform -rotate-2 shadow-sm pointer-events-none">
                    <span className="font-handwriting text-sm">{labels[originalIndex % labels.length]}</span>
                  </div>
                </div>
               )
            })}
          </div>
        </div>
      </div>

      <Lightbox 
        memory={activeMemoryIndex !== null ? memories[activeMemoryIndex] : null}
        onClose={() => setActiveMemoryIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
