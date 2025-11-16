import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        w-full fixed top-0  left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? "flex justify-center bg-transparent" : "bg-black"}
      `}
    >
      {/* Inner Box */}
      <div
        className={`
            sm:w-[100%]  
          transition-all duration-300 px-4 sm:px-6
          ${scrolled 
            ? "rounded-2xl mt-3 backdrop-blur-xl bg-white/10 dark:bg-gray-900/20 shadow-xl border border-white/20 scale-95"
            : "rounded-none mt-0 bg-black border-b border-white/10"
          }
        `}
      >
        <div className="flex h-14 w-102  items-center justify-between ]">
          
          <div className="text-white font-semibold">Frontend Developer</div>

          <nav className="hidden md:flex items-center gap-6">
            <a className="text-sm text-gray-300 hover:text-white" href="/">Home</a>
            <a className="text-sm text-gray-300 hover:text-white" href="/about">About</a>
            <a className="text-sm text-gray-300 hover:text-white" href="/projects">Projects</a>
            <a className="text-sm text-gray-300 hover:text-white" href="/contact">Contact</a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
    {open && (
  <div className="
      md:hidden w-full 
      bg-white/10 
      backdrop-blur-xl 
      text-white px-6 py-6 
      space-y-4 
      border border-white/20 
      rounded-xl 
      mt-2 mx-3 
      animate-slideDown
    "
  >
    <a href="/" className="block text-lg" onClick={() => setOpen(false)}>Home</a>
    <a href="/about" className="block text-lg" onClick={() => setOpen(false)}>About</a>
    <a href="/projects" className="block text-lg" onClick={() => setOpen(false)}>Projects</a>
    <a href="/contact" className="block text-lg" onClick={() => setOpen(false)}>Contact</a>
  </div>
)}

    </header>
  );
}

export default Header;
