import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { cafeData } from '../data';

export default function About() {
return ( <div className="py-12 max-w-6xl mx-auto space-y-16">

 
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center"
  >
    <h1 className="text-4xl font-bold mb-4">
     The Cafe Hub
    </h1>

    <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
      Serving delicious food, refreshing beverages,
      and memorable experiences in the heart of Deeg.
    </p>
  </motion.div>

  <section className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <img
        src="/assets/about.jpg"
        alt="The Cafe Hub"
        className="rounded-2xl w-full h-[350px] object-cover"
      />
    </div>

    <div>
      <h2 className="text-3xl font-bold mb-4">
        Our Story
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
        At The Cafe Hub, we believe great food brings people together.
        Our goal is simple: serve fresh ingredients, delicious meals,
        and create a welcoming space where families and friends can enjoy
        quality time together.
      </p>

      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
        From handcrafted pizzas to satisfying snacks and beverages,
        every item is prepared with care and attention to quality.
      </p>
    </div>
  </section>

  <section>
    <h2 className="text-3xl font-bold text-center mb-10">
      Why Choose Us
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="p-6 rounded-2xl border">
        <div className="text-4xl mb-3">🍕</div>
        <h3 className="font-semibold mb-2">
          Fresh Ingredients
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Quality ingredients in every meal.
        </p>
      </div>

      <div className="p-6 rounded-2xl border">
        <div className="text-4xl mb-3">☕</div>
        <h3 className="font-semibold mb-2">
          Great Beverages
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Refreshing drinks for every taste.
        </p>
      </div>

      <div className="p-6 rounded-2xl border">
        <div className="text-4xl mb-3">🏠</div>
        <h3 className="font-semibold mb-2">
          Cozy Environment
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Relax and enjoy a welcoming atmosphere.
        </p>
      </div>

      <div className="p-6 rounded-2xl border">
        <div className="text-4xl mb-3">😊</div>
        <h3 className="font-semibold mb-2">
          Friendly Service
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Dedicated to customer satisfaction.
        </p>
      </div>
    </div>
  </section>

  <section>
    <h2 className="text-3xl font-bold text-center mb-10">
      Our Location
    </h2>

    <div className="max-w-3xl mx-auto text-center">
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        {cafeData.contact.address}
      </p>
    </div>
  </section>

</div>


);
}
