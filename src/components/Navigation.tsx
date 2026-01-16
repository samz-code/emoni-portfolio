import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Projects & Products", href: "#projects-products" },
  { label: "Courses", href: "#courses" },
  { label: "Insights", href: "#insights" },
  { label: "Rate Card", href: "#rate-card" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <img
              src="/Emoni-Samuel.png"
              alt="Brand Logo"
              className="h-14 md:h-16 lg:h-20 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`group relative px-4 py-2 text-lg font-bold transition-all duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-[#CF2676]"
                    : "text-gray-700 hover:text-[#CF2676]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#CF2676] transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    animation: activeSection === item.href.replace("#", "") ? "slideIn 0.3s ease-out" : "none"
                  }}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl">
            <div className="py-4 px-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative block w-full text-left px-4 py-3 text-lg font-bold transition-all duration-300 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[#CF2676]"
                      : "text-gray-700 hover:text-[#CF2676]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#CF2676] transition-all duration-300 ${
                      activeSection === item.href.replace("#", "")
                        ? "w-[calc(100%-2rem)]"
                        : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
}