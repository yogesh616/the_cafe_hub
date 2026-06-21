import { motion } from 'framer-motion';
import { cafeData } from '../data';


export default function Contact() {
  const { address, phone, timings } = cafeData.contact;


  return (
    <div className="py-12 max-w-6xl mx-auto">
     
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Visit Us</h1>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          
          +   Visit us for handcrafted coffee, delicious food,
             and a welcoming atmosphere in the heart of Deeg.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Information & Form Stack */}
        <div className="space-y-8 flex flex-col">
          
          {/* Details Card */}
          <div className="bg-zinc-50 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold mb-6">Details</h2>
            <ul className="space-y-6">
              <li className="flex flex-col">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-bold mb-1">Location</span>
                <span className="text-lg">{address}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-bold mb-1">Hours</span>
                <span className="text-lg">{timings}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-bold mb-1">Reservations</span>
                <a href={`tel:${phone.replace(/\D/g, '')}`} className="text-lg text-amber-600 font-medium hover:text-amber-700 transition-colors">
                  {phone}
                </a>
              </li>
            </ul>
          </div>

         {/* Quick Actions Card */}

<div className="bg-zinc-50 dark:bg-zinc-800/50 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
  <h2 className="text-2xl font-semibold mb-6">
    Get In Touch
  </h2>

  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
    Whether you're planning a family dinner, ordering takeaway,
    or simply looking for a great place to relax, we're always
    happy to hear from you.
  </p>

  <div className="space-y-4">

 
<a
  href={`tel:${phone.replace(/\D/g, '')}`}
  className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-amber-500 transition-colors"
>
  <div>
    <p className="font-semibold">Call Us</p>
    <p className="text-sm text-zinc-500">
      Quick reservations & inquiries
    </p>
  </div>
  <span className="text-xl">📞</span>
</a>

<a
  href={`https://wa.me/${cafeData.contact.whatsapp}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-amber-500 transition-colors"
>
  <div>
    <p className="font-semibold">WhatsApp</p>
    <p className="text-sm text-zinc-500">
      Chat with us directly
    </p>
  </div>
  <span className="text-xl">💬</span>
</a>

<a
  href="https://maps.google.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-amber-500 transition-colors"
>
  <div>
    <p className="font-semibold">Get Directions</p>
    <p className="text-sm text-zinc-500">
      Navigate using Google Maps
    </p>
  </div>
  <span className="text-xl">📍</span>
</a>
 

  </div>

  <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-700">
    <h3 className="font-semibold mb-4">
      Facilities
    </h3>

 
<div className="flex flex-wrap gap-2">
  <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 text-sm">
    Free WiFi
  </span>

  <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 text-sm">
    Family Seating
  </span>

  <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 text-sm">
    Takeaway
  </span>

  <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 text-sm">
    Parking Nearby
  </span>
</div>
 

  </div>
</div>

        </div>

        {/* Google Maps iFrame */}
        <div className="min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800">
          {/* Replace this src URL with the specific embed code for your actual cafe location generated from Google Maps -> Share -> Embed a map */}
          <iframe
            title="Cafe Location Map"
            src=

"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28319.23256757353!2d77.30135839411041!3d27.4722457108302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39730438068460c3%3A0x1b3eaa9309bea2f1!2sDeeg%2C%20Rajasthan%20321203!5e0!3m2!1sen!2sin!4v1782043120638!5m2!1sen!2sin"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter dark:invert-[90%] dark:hue-rotate-180 transition-all duration-300"
          ></iframe>
        </div>
        
      </div>
    </div>
  );
}

