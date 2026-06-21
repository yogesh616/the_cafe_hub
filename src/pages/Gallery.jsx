import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cafeData } from '../data';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  // Extract unique categories dynamically, plus 'all'
  const categories = ['all', ...new Set(cafeData.gallery.map(item => item.type))];

  const filteredImages = filter === 'all' 
    ? cafeData.gallery 
    : cafeData.gallery.filter(item => item.type === filter);

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Gallery</h1>
        
        {/* Filter Controls */}
        <div className="flex justify-center gap-4 mt-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`cursor-pointer px-6 py-2 rounded-full text-sm font-medium transition-colors capitalize ${
                filter === cat 
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' 
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredImages.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group bg-zinc-200 dark:bg-zinc-800"
              onClick={() => setSelectedImg(item)}
            >
              {/* Replace the div below with an actual img tag once assets are loaded */}
               <img src={item.src} alt={item.type} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" /> 
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-4 right-4 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors z-10"
              >
                ✕
              </button>
              
              {/* Replace with actual image */}
               <img src={selectedImg.src} alt={selectedImg.type} className="w-full h-full object-contain" /> 
             
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}