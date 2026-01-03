import { ArrowRight, Star, Users, Award, Briefcase, Sparkles, Zap, Code, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const heroStyles = `
  @keyframes marquee-rtl {
    0% { transform: translateX(0); }
    100% { transform: translateX(-33.333%); }
  }
  @keyframes marquee-ltr {
    0% { transform: translateX(-33.333%); }
    100% { transform: translateX(0); }
  }
  .animate-marquee-rtl {
    animation: marquee-rtl 40s linear infinite;
  }
  .animate-marquee-ltr {
    animation: marquee-ltr 40s linear infinite;
  }
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
`;

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animated Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        color: ['#818cf8', '#c084fc', '#f3248cff'][Math.floor(Math.random() * 3)]
      });
    }

    let animationFrameId;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.vx + (mousePosition.x - 0.5) * 2;
        particle.y += particle.vy + (mousePosition.y - 0.5) * 2;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particles.forEach((particle2, j) => {
          if (i !== j) {
            const dx = particle.x - particle2.x;
            const dy = particle.y - particle2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = particle.color + Math.floor((1 - distance / 100) * 50).toString(16).padStart(2, '0');
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(particle2.x, particle2.y);
              ctx.stroke();
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePosition]);

  const softwares = [
    { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg", color: "#31A8FF" },
    { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", color: "#FF9A00" },
    { name: "Premiere Pro", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg", color: "#9999FF" },
    { name: "After Effects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg", color: "#9999FF" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777BB4" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E34F26" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06B6D4" },
    { name: "Vite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", color: "#646CFF" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#FFFFFF" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "#4FC08D" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007ACC" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "Webpack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg", color: "#8DD6F9" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#FFFFFF" },
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", color: "#FF2D20" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "#092E20" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "#7952B3" },
  ];

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 pt-24 md:pt-28">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-0" />
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
            animationDelay: '1s'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Hero Content */}
            <div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-16">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#CF2676]/20 to-purple-500/20 border border-[#CF2676]/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 backdrop-blur-xl animate-float">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#CF2676] animate-pulse" />
                <span className="text-white font-semibold text-xs md:text-sm">Professional Digital Services</span>
              </div>

              {/* Main Heading with Glowing Effect */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight text-white mb-4 md:mb-6 px-2">
                  Digital Excellence

                  <br />
                  <span className="relative inline-block">
                    <span className="absolute inset-0 blur-2xl md:blur-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-50 animate-pulse" />
                    <span className="relative bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                      Delivered
                    </span>
                  </span>
                </h1>
              </div>
              
              {/* Description with Icons */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-6 max-w-4xl mx-auto mb-6 md:mb-8 px-4">
                <div className="flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-3 md:px-6 py-2 md:py-4 hover:bg-white/10 transition-all group">
                  <Palette className="w-4 h-4 md:w-6 md:h-6 text-pink-400 group-hover:scale-125 transition-transform" />
                  <span className="text-white font-semibold text-xs md:text-base">Graphic Design</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-3 md:px-6 py-2 md:py-4 hover:bg-white/10 transition-all group">
                  <Code className="w-4 h-4 md:w-6 md:h-6 text-indigo-400 group-hover:scale-125 transition-transform" />
                  <span className="text-white font-semibold text-xs md:text-base">Web Dev</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl px-3 md:px-6 py-2 md:py-4 hover:bg-white/10 transition-all group">
                  <Zap className="w-4 h-4 md:w-6 md:h-6 text-purple-400 group-hover:scale-125 transition-transform" />
                  <span className="text-white font-semibold text-xs md:text-base">Programming</span>
                </div>
              </div>

              <p className="text-sm md:text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
                Professional <span className="text-pink-400 font-semibold">Graphic design,Web development</span> and <span className="text-purple-400 font-semibold"> Video production</span> Services <span className="text-indigo-400 font-semibold"> Quality work, </span>delivered on time.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-6 md:pt-8 px-4">
                <button 
                  className="w-full sm:w-auto relative bg-gradient-to-r from-[#CF2676] to-purple-600 hover:from-[#CF2676] hover:to-[#CF2676] text-white text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl shadow-[#CF2676]/50 group transform hover:scale-105 transition-all duration-300 overflow-hidden font-bold"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <span className="relative flex items-center justify-center gap-2 md:gap-3">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
                <button 
                  className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-[#CF2676]/50 backdrop-blur-xl transform hover:scale-105 transition-all duration-300 font-bold"
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Portfolio
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pt-12 md:pt-16 max-w-5xl mx-auto px-4">
                {[
                  { icon: Award, value: "4+", label: "Years Design", color: "indigo" },
                  { icon: Briefcase, value: "3+", label: "Years Dev", color: "purple" },
                  { icon: Star, value: "1000+", label: "Projects", color: "pink" },
                  { icon: Users, value: "500+", label: "Clients", color: "cyan" }
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="relative group cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-${stat.color}-500/20 blur-xl rounded-xl md:rounded-2xl group-hover:bg-${stat.color}-500/40 transition-all`} />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 group-hover:bg-white/10 group-hover:border-white/30 transition-all">
                      <div className="flex flex-col items-center gap-2 md:gap-3">
                        <stat.icon className={`w-6 h-6 md:w-10 md:h-10 text-${stat.color}-400 group-hover:scale-125 group-hover:rotate-12 transition-all`} />
                        <div className="text-2xl md:text-5xl font-black text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs md:text-sm text-white font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Software Marquee - Two Rows */}
        <div className="relative w-full space-y-4 md:space-y-6 py-8 md:py-12 border-t border-b border-white/10 bg-black/30 backdrop-blur-xl">
          {/* Top Row - Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-rtl gap-3 md:gap-6">
              {[...softwares.slice(0, 14), ...softwares.slice(0, 14), ...softwares.slice(0, 14)].map((software, index) => (
                <div
                  key={`top-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative">
                    <div 
                      className="absolute inset-0 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: software.color + '40' }}
                    />
                    <div className="relative flex items-center gap-2 md:gap-4 px-4 md:px-8 py-3 md:py-5 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all hover:scale-110">
                      <div 
                        className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: software.color + '20' }}
                      >
                        <img 
                          src={software.logo} 
                          alt={software.name}
                          className="w-5 h-5 md:w-8 md:h-8 object-contain group-hover:scale-125 transition-transform"
                          style={{ filter: 'drop-shadow(0 0 8px ' + software.color + ')' }}
                        />
                      </div>
                      <span className="text-sm md:text-lg font-bold text-white whitespace-nowrap">{software.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee-ltr gap-3 md:gap-6">
              {[...softwares.slice(14), ...softwares.slice(14), ...softwares.slice(14)].map((software, index) => (
                <div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative">
                    <div 
                      className="absolute inset-0 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: software.color + '40' }}
                    />
                    <div className="relative flex items-center gap-2 md:gap-4 px-4 md:px-8 py-3 md:py-5 bg-white/5 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 transition-all hover:scale-110">
                      <div 
                        className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: software.color + '20' }}
                      >
                        <img 
                          src={software.logo} 
                          alt={software.name}
                          className="w-5 h-5 md:w-8 md:h-8 object-contain group-hover:scale-125 transition-transform"
                          style={{ filter: 'drop-shadow(0 0 8px ' + software.color + ')' }}
                        />
                      </div>
                      <span className="text-sm md:text-lg font-bold text-white whitespace-nowrap">{software.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: heroStyles }} />
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-xl bg-white/5">
          <div className="w-2 h-4 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}