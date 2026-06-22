import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cafeData } from '../data';

export default function Home() {
const featuredDishes = [
...cafeData.menu.coffee.slice(0, 1),
...cafeData.menu.snacks.slice(0, 1),
...cafeData.menu.desserts.slice(0, 1),
];

return ( <div className="space-y-24 py-12">

  {/* Hero Section */}
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative h-[70vh] rounded-2xl overflow-hidden flex items-center justify-center bg-zinc-800 border border-zinc-200/10"
  >
    <img
      src="/assets/hero.jpg"
      alt="Cafe Interior"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-20 text-center text-white px-4 max-w-3xl">
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
        Crafted for the Senses
      </h1>

      <p className="text-lg sm:text-xl text-zinc-200 mb-10">
        Experience handcrafted coffee, premium teas, fresh snacks,
        and desserts made with passion every single day.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-10">
        <div>
          <h3 className="text-2xl font-bold">
            {cafeData.stats?.customers}
          </h3>
          <p className="text-sm text-zinc-300">
            Customers
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            {cafeData.stats?.menuItems}
          </h3>
          <p className="text-sm text-zinc-300">
            Menu Items
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            {cafeData.stats?.rating}
          </h3>
          <p className="text-sm text-zinc-300">
            Rating
          </p>
        </div>
      </div>

      <Link
        to="/menu"
        className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-lg"
      >
        Explore Menu
      </Link>
    </div>
  </motion.section>

  {/* Welcome Section */}
  <section className="text-center max-w-3xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-4">
      Welcome to Our Café
    </h2>

    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
      Whether you're stopping by for your morning espresso,
      enjoying a relaxing afternoon tea, or treating yourself
      to our signature desserts, we aim to create a warm and
      memorable experience for every guest.
    </p>
  </section>

  {/* Featured Menu */}
  <section>
    <h2 className="text-3xl font-bold mb-12 text-center tracking-tight text-zinc-900 dark:text-zinc-50">
      Signature Servings
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {featuredDishes.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="group rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="h-56 overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-5">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">
                {item.name}
              </h3>

              <span className="text-amber-600 font-semibold">
                {item.price}
              </span>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>



  {/* Reviews */}
<section>
  <h2 className="text-3xl font-bold text-center mb-12">
    What Our Customers Say
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {cafeData.reviews.map((review, idx) => (
      <motion.div
        key={review.id}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="bg-white dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 shadow-sm"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={review.image}
            alt={review.name}
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <h3 className="font-semibold">
              {review.name}
            </h3>

            <div className="text-amber-500">
              {"★".repeat(review.rating)}
            </div>
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
          "{review.comment}"
        </p>
      </motion.div>
    ))}
  </div>
</section>
</div>


);
}
