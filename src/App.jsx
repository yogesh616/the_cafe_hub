import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import About from './pages/About';

import { cafeData } from './data';
import useImagePreloader from './hooks/useImagePreloader';

export default function App() {
const images = [
'/assets/hero.jpg',

...cafeData.gallery.map((item) => item.src),

...Object.values(cafeData.menu)
  .flat()
  .map((item) => item.img),


];

const loaded = useImagePreloader(images);

return ( <ThemeProvider>
{!loaded ? ( <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950"> <div className="w-14 h-14 border-4 border-zinc-300 border-t-amber-500 rounded-full animate-spin"></div>

      <h2 className="mt-6 text-2xl font-bold">
        Da Pizza Hub
      </h2>

      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        Loading delicious content...
      </p>
    </div>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )}
</ThemeProvider>


);
}
