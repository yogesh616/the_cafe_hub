import { motion } from 'framer-motion';
import { cafeData } from '../data';

export default function Menu() {
  const categories = Object.keys(cafeData.menu);

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Menu</h1>
      <div className="space-y-16">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="text-2xl font-semibold mb-6 capitalize border-b border-zinc-200 dark:border-zinc-700 pb-2">
              {category}
            </h2>
            <div className="cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cafeData.menu[category].map((item, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.id} 
                  className="flex gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-amber-500 transition-colors bg-white dark:bg-zinc-800/30"
                >
                  {/* Fixed Image Container */}
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0 border border-zinc-100 dark:border-zinc-700">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        // Fallback handling to prevent completely broken UI if file is missing
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'text-xs', 'text-zinc-400');
                        e.target.parentNode.innerText = 'No Img';
                      }}
                    />
                  </div>
                  
                  {/* Menu Details */}
                  <div className="flex flex-col justify-center flex-grow">
                    <div className="flex justify-between items-baseline gap-2">
                      <h3 className="font-semibold text-lg tracking-tight">{item.name}</h3>
                      <span className="font-semibold text-amber-600 dark:text-amber-500 flex-shrink-0">{item.price}</span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}