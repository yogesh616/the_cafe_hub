import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-amber-600" : "hover:text-amber-600";

  return (
    <nav className="fixed w-full top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <span className="font-bold text-xl tracking-tighter">
          THE CAFE
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/menu" className={navLinkClass}>Menu</NavLink>
          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>

          <button
            onClick={toggleTheme}
            className="cursor-pointer p-2 rounded-full bg-zinc-100 dark:bg-zinc-800"
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i
                className="fa-solid fa-sun"
                style={{ color: "rgb(255, 212, 59)" }}
              ></i>
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="cursor-pointer p-2 rounded-full bg-zinc-100 dark:bg-zinc-800"
          >
            {theme === "light" ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i
                className="fa-solid fa-sun"
                style={{ color: "rgb(255, 212, 59)" }}
              ></i>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl"
          >
            <i
              className={`fa-solid ${
                isOpen ? "fa-xmark" : "fa-bars"
              }`}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col px-4 py-4 gap-4">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/menu"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Menu
            </NavLink>

            <NavLink
              to="/gallery"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </NavLink>

            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}