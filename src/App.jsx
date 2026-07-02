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
</ThemeProvider>


);
}
