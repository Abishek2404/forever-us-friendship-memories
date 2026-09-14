import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Memory } from '../data/memories';

interface LightboxProps {
  memory: Memory | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ memory, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!memory) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (memory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [memory, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute top-6 right-6 z-50">
            <button
              onClick={onClose}
              className="p-2 text-secondary/60 hover:text-secondary bg-primary/50 rounded-full transition-colors backdrop-blur-md"
              aria-label="Close"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-secondary/60 hover:text-secondary bg-primary/50 rounded-full transition-colors backdrop-blur-md z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-secondary/60 hover:text-secondary bg-primary/50 rounded-full transition-colors backdrop-blur-md z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-full flex items-center justify-center w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={memory.image}
              alt={memory.alt}
              className="max-w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-sm"
              loading="lazy"
            />
            {memory.caption && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/80 backdrop-blur-md px-6 py-3 rounded-sm">
                <p className="font-handwriting text-2xl text-secondary">{memory.caption}</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
