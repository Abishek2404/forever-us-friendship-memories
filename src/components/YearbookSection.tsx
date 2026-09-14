import { motion } from 'motion/react';
import { Paperclip, GraduationCap, Camera, Star, Heart, ArrowRight, ArrowDown } from 'lucide-react';
import { memories } from '../data/memories';

export default function YearbookSection() {
  // Select photos for the yearbook section from the existing memories data
  // (Using the first 4 to map to school1, school2, then, now)
  const schoolPhoto1 = memories[9]?.image;
  const schoolPhoto2 = memories[8]?.image;
  const thenPhoto = memories[8]?.image;
  const nowPhoto = memories[6]?.image;

  const rollCallItems = [
    "01 Smiles",
    "02 Mischief",
    "03 Friendship",
    "04 Memories",
    "05 Growing Up",
    "06 Still Together"
  ];

  return (
    <section className="bg-secondary text-primary py-24 md:py-32 relative overflow-hidden">
      {/* Subtle paper grain texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 1. Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          <div className="flex flex-col items-center justify-center">
            <span className="font-heading text-xl md:text-2xl text-primary/40 mb-2">04</span>
            <span className="font-body text-xs md:text-sm tracking-[0.3em] uppercase font-bold text-primary/60 mb-6">
              SCHOOL DAYS
            </span>
          </div>
          
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary mb-2">
            YEARBOOK
          </h2>
          <p className="font-handwriting text-4xl md:text-5xl text-accent-rose transform -rotate-2 mb-8">
            that never ended.
          </p>
          
          <p className="font-body text-primary/80 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            “Some friendships start in classrooms.<br />But they never end there.”
          </p>

          <div className="hidden md:block absolute top-12 right-0 lg:right-12 xl:right-24 transform rotate-6">
            <Paperclip className="absolute -top-6 -left-4 w-8 h-8 text-primary/30 -rotate-12" />
            <p className="font-handwriting text-2xl text-primary/70">
              “Time flies...<br/>but the friendship doesn't.”
            </p>
          </div>
        </motion.div>

        {/* 2. Photo Layout */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 mb-32">
          {/* Photo 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-72 md:w-80 bg-white p-4 pb-16 shadow-2xl relative rotate-[-2deg] shrink-0"
          >
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm shadow-sm rotate-2 opacity-80" style={{ border: '1px solid rgba(0,0,0,0.05)' }}></div>
             <div className="aspect-[4/3] bg-primary/5 mb-4 overflow-hidden">
               <img src={schoolPhoto1} alt="School Days 2011" className="w-full h-full object-cover filter contrast-[1.05] sepia-[0.2]" loading="lazy" />
             </div>
             <div className="absolute bottom-4 left-0 w-full text-center">
               <p className="font-heading text-lg font-bold tracking-widest text-primary uppercase mb-1">CLASS OF 2011</p>
               <p className="font-handwriting text-xl text-primary/70">“Just kids. Big dreams.”</p>
             </div>
          </motion.div>

          {/* Photo 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-72 md:w-80 bg-white p-4 pb-16 shadow-2xl relative rotate-[3deg] shrink-0 md:mt-16"
          >
             <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-sm shadow-sm -rotate-2 opacity-80" style={{ border: '1px solid rgba(0,0,0,0.05)' }}></div>
             <div className="aspect-[4/3] bg-primary/5 mb-4 overflow-hidden">
               <img src={schoolPhoto2} alt="Same School" className="w-full h-full object-cover filter contrast-[1.05] sepia-[0.1]" loading="lazy" />
             </div>
             <div className="absolute bottom-4 left-0 w-full text-center">
               <p className="font-heading text-lg font-bold tracking-widest text-primary uppercase mb-1">SAME SCHOOL</p>
               <p className="font-handwriting text-xl text-primary/70">“Different days. Same vibes.”</p>
             </div>
          </motion.div>
        </div>

        {/* 3. Roll Call */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto mb-32 relative"
        >
          <GraduationCap className="absolute -top-8 -left-4 md:-left-12 w-10 h-10 text-primary/20 -rotate-12" />
          <Camera className="absolute -bottom-6 -right-4 md:-right-8 w-8 h-8 text-primary/20 rotate-12" />
          
          <h3 className="font-heading text-3xl md:text-4xl text-center mb-8 tracking-[0.2em] uppercase text-primary">
            ROLL CALL
          </h3>
          
          <div 
            className="bg-[#fdfbf7] p-8 md:p-10 rounded-sm shadow-inner relative overflow-hidden" 
            style={{ 
              backgroundImage: 'repeating-linear-gradient(transparent, transparent 47px, rgba(217, 140, 155, 0.2) 47px, rgba(217, 140, 155, 0.2) 48px)', 
              lineHeight: '48px' 
            }}
          >
            {/* Notebook vertical line */}
            <div className="absolute left-10 md:left-14 top-0 bottom-0 w-px bg-accent-rose/30"></div>
            
            <ul className="font-handwriting text-2xl md:text-3xl text-primary/80 pl-8 md:pl-12 flex flex-col gap-[8px]">
              {rollCallItems.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center pr-4 md:pr-8">
                  <span className="translate-y-1">{item}</span>
                  <span className="text-accent-rose transform rotate-6 scale-125">✓</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 4. Then -> Now */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <h3 className="font-heading text-3xl md:text-4xl tracking-widest uppercase mb-16 text-primary flex items-center justify-center gap-4">
            THEN 
            <span className="text-accent-rose font-handwriting text-2xl md:text-3xl lowercase tracking-normal mx-2">to</span> 
            NOW
          </h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
            <div className="w-full max-w-sm">
               <div className="relative p-2 bg-white shadow-xl rotate-1 group">
                 <div className="overflow-hidden">
                   <img src={thenPhoto} alt="2011 Memory" className="w-full aspect-square object-cover sepia-[0.15] transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                 </div>
                 <div className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 font-heading text-sm tracking-widest shadow-md">2011</div>
               </div>
               <p className="font-handwriting text-2xl md:text-3xl text-primary/80 mt-6">“Same faces.<br/>Brighter smiles.”</p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="w-16 h-16 rounded-full bg-primary text-secondary flex items-center justify-center shrink-0 z-10 shadow-2xl cursor-pointer"
            >
               <ArrowRight className="hidden md:block w-7 h-7" />
               <ArrowDown className="block md:hidden w-7 h-7" />
            </motion.div>

            <div className="w-full max-w-sm">
               <div className="relative p-2 bg-white shadow-xl -rotate-1 group">
                 <div className="overflow-hidden">
                   <img src={nowPhoto} alt="2026 Memory" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                 </div>
                 <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 font-heading text-sm tracking-widest shadow-md">2026</div>
               </div>
               <p className="font-handwriting text-2xl md:text-3xl text-primary/80 mt-6">“Different paths.<br/>Same people.”</p>
            </div>
          </div>
        </motion.div>

        {/* 5. Final Message */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center pb-12 relative"
        >
          <Star className="absolute top-0 right-1/4 md:right-1/3 w-6 h-6 text-accent-gold/40 fill-current -rotate-12 hidden md:block" />
          <Heart className="absolute bottom-12 left-1/4 md:left-1/3 w-6 h-6 text-accent-rose/40 fill-current rotate-12 hidden md:block" />
          
          <h2 className="font-handwriting text-5xl md:text-7xl lg:text-8xl text-primary leading-tight mb-8">
            CLASS DISMISSED.<br/>FRIENDSHIP DIDN’T. ∞
          </h2>
          
          <p className="font-body font-medium uppercase tracking-[0.2em] text-primary/60 text-sm md:text-base max-w-md mx-auto mb-12 leading-loose">
            We grew up.<br/>Life changed.<br/>But somehow, we stayed us.
          </p>
          
          <p className="font-handwriting text-2xl md:text-3xl text-primary/80 transform rotate-2 inline-block">
            “Same people.<br/>Same madness.<br/>Forever.”
          </p>
        </motion.div>

      </div>
    </section>
  );
}
