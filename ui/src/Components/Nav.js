import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = ["Home", "Skills", "Experience", "Projects", "Contact"];

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => ({
        id: link.toLowerCase(),
        element: document.getElementById(link.toLowerCase()),
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActive(section.id.charAt(0).toUpperCase() + section.id.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, link) => {
    e.preventDefault();
    setActive(link);
    setIsMobileMenuOpen(false);
    const elementId = link.toLowerCase();
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-4xl">
        <div className="flex items-center justify-between px-4 md:px-6 py-2 rounded-full bg-black/80 backdrop-blur-lg border border-white/10 shadow-lg">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleClick(e, "Home")}
            className="flex items-center space-x-2 cursor-pointer"
            aria-label="Home"
          >
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold">
              J
            </div>
            <span className="text-white font-semibold hidden sm:inline">Jeet</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleClick(e, link)}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black ${
                active === link
                  ? "bg-gradient-to-r from-purple-400 to-pink-500 text-white shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
                aria-label={`Navigate to ${link} section`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-black/95 backdrop-blur-lg border border-white/10 shadow-lg p-4">
            <div className="flex flex-col space-y-2">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleClick(e, link)}
                  className={`px-4 py-2 rounded-lg transition-all text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black ${
                    active === link
                      ? "bg-gradient-to-r from-purple-400 to-pink-500 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                  }`}
                  aria-label={`Navigate to ${link} section`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
