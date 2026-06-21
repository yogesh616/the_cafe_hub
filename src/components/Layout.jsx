import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import WhatsAppBtn from './WhatsAppBtn';
import Footer from "./Footer";

export default function Layout() {
  return (
    /* Strict high-contrast background and text shifting configured here */
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-64px)]">
        <Outlet />
      </main>
      <WhatsAppBtn />
      <Footer />
    </div>
  );
}