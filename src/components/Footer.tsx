import { Heart, ArrowUp, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Globe, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSocialClick = (platform) => {
    const links = {
      facebook: "https://www.facebook.com/profile.php?id=61580678667530",
      instagram: "https://www.instagram.com/Emoni_Samuel",
      linkedin: "https://www.linkedin.com/in/samuelemoni/",
      tiktok: "https://www.tiktok.com/@sam_e254"
    };
    window.open(links[platform], "_blank");
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" }
  ];

  const services = [
    "Logo & Brand Identity Design",
    "Website Design & Development",
    "Video Production & Editing",
    "Professional Document Design",
    "Custom Software Development",
    "IT Support & Networking"
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5 animate-pulse"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? "rgba(99, 102, 241, 0.3)" : i % 3 === 1 ? "rgba(168, 85, 247, 0.3)" : "rgba(236, 72, 153, 0.3)"
              } 0%, transparent 70%)`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${15 + i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-16 pb-16 border-b border-white/10">
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img src="/es.png" alt="Samuel Emoni Logo" className="w-full h-28object-contain" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Professional creative design and modern web solutions that elevate your brand and transform your digital presence.
              </p>
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-semibold text-indigo-300">Trusted Since 2020</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                      className="text-sm text-slate-400 hover:text-indigo-400 transition-colors hover:translate-x-1 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-indigo-400 group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-slate-400">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                Contact
              </h4>
              <ul className="space-y-4 mb-6">
                <li>
                  <a 
                    href="tel:+254727492545" 
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all">
                      <Phone className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Call / WhatsApp</div>
                      <span className="font-semibold text-white">+254 727 492 545</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:samuelemoni18@gmail.com" 
                    className="flex items-center gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                      <Mail className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Email</div>
                      <span className="font-semibold text-white text-xs">samuelemoni18@gmail.com</span>
                    </div>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Location</div>
                    <span className="font-semibold text-white">Nairobi, Kenya</span>
                  </div>
                </li>
              </ul>

              {/* Social Media */}
              <div>
                <p className="text-xs font-semibold text-slate-400 mb-3">Connect With Me</p>
                <div className="flex gap-2">
                  <button
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/50 flex items-center justify-center transition-all hover:scale-110"
                    onClick={() => handleSocialClick('facebook')}
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500/20 hover:border-pink-500/50 flex items-center justify-center transition-all hover:scale-110"
                    onClick={() => handleSocialClick('instagram')}
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-600/20 hover:border-blue-600/50 flex items-center justify-center transition-all hover:scale-110"
                    onClick={() => handleSocialClick('linkedin')}
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </button>
                  <button
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-gray-600/20 hover:border-gray-600/50 flex items-center justify-center transition-all hover:scale-110"
                    onClick={() => handleSocialClick('tiktok')}
                  >
                    <Globe className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

           {/* Bottom Footer */}
          <div className="flex flex-col items-center gap-6 pt-8 border-t border-white/10">
            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-slate-400">
                © {currentYear} <span className="font-bold text-white bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">Samuel A. Emoni</span> - All Rights Reserved
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Professional Graphic Design & Web Development Services
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 shadow-2xl shadow-purple-500/50 flex items-center justify-center group transition-all hover:scale-110"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </footer>
  );
}