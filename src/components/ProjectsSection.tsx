import { useState, useEffect } from "react";
import { ExternalLink, Globe, ChevronLeft, ChevronRight, Award } from "lucide-react";

const portfolioData = {
  "Logo Design": {
    description: "I create memorable and impactful logos through a strategic process: understanding your brand essence, researching your industry and competitors, sketching multiple concepts, refining the best ideas digitally, and delivering versatile logo files that work across all platforms. Each logo is crafted to be timeless, scalable, and uniquely yours.",
    projects: [
      
      { title: "NeuroUni", image: "/assets/logos/logo2.png" },
      { title: "Vineyard Vacations", image: "/assets/logos/vineyard.png" },
      { title: "BNA Creatives ", image: "/assets/logos/bna.png" },
      { title: "Shawamu Foundation", image: "/assets/logos/logo3.png" },
      { title: "Turi", image: "/assets/logos/logo4.png" },
      { title: "Together Humanity", image: "/assets/logos/logo5.png" },
      { title: "Mama's Kitchen", image: "/assets/logos/logo6.png" },
      { title: "Lillys Poultry Farm", image: "/assets/logos/lily.png" },
      { title: "MohSam Spa & Salon", image: "/assets/logos/logo8.png" },
      { title: "Anza Hub", image: "/assets/logos/anza.png" },
      { title: "Eunishar Home & Support", image: "/assets/logos/logo11.png" },
      { title: "Click2Skill", image: "/assets/logos/logo12.png" },
      { title: "Flowmax Plumbing Solutions", image: "/assets/logos/logo13.png" }
    ]
  },
  "Posters & Flyers": {
    description: "My poster and flyer designs capture attention and communicate your message effectively. I combine eye-catching visuals, strategic typography, and compelling layouts to create designs that stand out in any environment—whether digital or print. From event promotions to business announcements, each design is crafted to engage your target audience.",
    projects: [
      { title: "Mugithi Fiesta", image: "/assets/posters/mugithifiesta.jpg" },
      { title: "ThanksGiving Invitation", image: "/assets/posters/sylvia.jpg" },
      { title: "Christmas Celebration", image: "/assets/posters/mercy.jpg" },
      { title: "Visit Childrens Home", image: "/assets/posters/kwetunyumbani.jpg" },
      { title: "Tours & Travel ", image: "/assets/posters/tour.jpg" },
      { title: "Restaurant Menu", image: "/assets/menu/best_menu.jpg" },
      { title: "Election", image: "/assets/posters/mwale.jpg" },
     
    ]
  },
  "Menus": {
    description: "I design restaurant menus that enhance the dining experience and drive sales. My process includes organizing items for easy navigation, creating visual hierarchy that guides the eye, incorporating appetizing imagery when appropriate, and ensuring the design reflects your restaurant's atmosphere and cuisine style.",
    projects: [
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0001.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0002.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0003.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0004.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0005.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0006.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0007.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0008.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0009.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0010.jpg" },
     { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0011.jpg" },
      { title: "Freds Ranch Menu", image: "/assets/menu/fredsranch_page-0012.jpg" },
      { title: "AL Rayan Restaurant Menu", image: "/assets/menu/best_menu.jpg" },
      { title: "Solai Coffee", image: "/assets/menu/solai_pricelist.jpg" },
  
    ]
  },
  "Club Posters": {
    description: "I design high-energy club posters that capture the vibe and excitement of nightlife. Using bold typography, dynamic compositions, and vibrant colors, I create designs that grab attention and drive attendance. Each poster is optimized for both print and social media promotion.",
    projects: [
      { title: "Caribbean Sunday Vibes", image: "/assets/posters/caribbean.webp" },
      { title: "Samidoh Weekend Schedule", image: "/assets/posters/samidoh.jpg" },
       { title: "TakeOver Kitale Edition", image: "/assets/posters/takeover.jpg" },
      { title: "Hallowen Party", image: "/assets/posters/hallowen.webp" },
       { title: "Infinity Groove", image: "/assets/posters/infinitygroove.jpg" },
      { title: "Battle of Deejays", image: "/assets/posters/battle.webp" },
       { title: "Ladies Night Party", image: "/assets/posters/ladiesnight.jpg" },
      { title: "Ladies Night", image: "/assets/posters/ladies.jpg" },
       { title: "Visit Childrens Home", image: "/assets/posters/kwetunyumbani.jpg" },
      { title: "Karaoke Ladies Night", image: "/assets/posters/karaoke-night.jpg" },
       { title: "Infinity", image: "/assets/posters/infinity.jpg" },
      { title: "Mugithi Fiesta", image: "/assets/posters/mugithifiesta.jpg" },
       { title: "Urban Vibes", image: "/assets/posters/urbanvibes.jpg" },
      { title: "Reggae Party", image: "/assets/posters/reggae.jpg" },
       { title: "Karaoke Party", image: "/assets/posters/karaoke.jpg" },
      { title: "Sold Out Vibes Party", image: "/assets/posters/soldoutvibes.webp" },
       { title: "Free Goat Party ", image: "/assets/posters/freegoat.jpg" },
      { title: "Groove Party", image: "/assets/posters/groove.jpg" },
       { title: "2PM Weekend Party", image: "/assets/posters/2pm.jpg" },
      { title: "Ballers Brunch", image: "/assets/posters/ballersbrunch.jpg" },
    ]
  },
  
  "Web Development": {
    description: "I build modern, responsive websites that deliver results. My development process includes planning the site architecture, designing user-friendly interfaces, developing with clean code, and ensuring optimal performance across all devices. From e-commerce platforms to corporate websites, I create digital experiences that engage and convert.",
    projects: [
      {
        title: "Capepcy Hardware",
        description: "Full e-commerce website with inventory management",
        liveLink: "https://www.capepcyhardware.co.ke",
        image: "/assets/posters/capepcy.jpg"
      },
      {
        title: "Turkana County Website",
        description: "Government portal with service delivery features",
        liveLink: "https://turkana.go.ke/",
        image: "/assets/posters/turkana.jpg"
      },
      {
        title: "Axis Africa Safaris",
        description: "Safari booking platform with tour packages",
        liveLink: "https://axisafricasafaris.com/",
        image: "/assets/posters/axis.jpg"
      },
      {
        title: "Hyrax Safaris",
        description: "Premium safari experience website",
        liveLink: "https://hyraxsafaris.com/",
        image: "/assets/posters/hyrax.jpg"
      },
      {
        title: "Fred's Ranch & Resort",
        description: "Restaurant located in Isinya",
        liveLink: "https://fredsranch.co.ke/",
        image: "/assets/posters/fredsranch.jpg"
      },
      {
        title: "Emoni Samuel Portfolio",
        description: "Professional portfolio showcasing skills",
        liveLink: "https://www.emonisamuel.co.ke",
        image: "/assets/posters/emoni.jpg"
      }
    ]
  }
};

function Carousel({ projects, autoSlide = true, interval = 15000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, interval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={index} className="min-w-full px-1">
              <div className="bg-white rounded-xl p-3 md:p-4">
                <div className="h-48 md:h-64 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h4 className="text-center mt-2 md:mt-3 font-bold text-slate-800 text-sm md:text-base">{project.title}</h4>
                {project.description && (
                  <p className="text-center text-xs md:text-sm text-slate-600 mt-1">{project.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-slate-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg transition-all"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-slate-800" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-1.5 md:gap-2 mt-3 md:mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 md:h-2 rounded-full transition-all ${
              index === currentIndex ? "w-6 md:w-8 bg-indigo-500" : "w-1.5 md:w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 backdrop-blur-xl mb-3">
              <Award className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold text-xs md:text-sm">Featured Work</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-3 text-white">
              My <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto px-4">
              Explore my creative journey through various design disciplines and web development projects
            </p>
          </div>

          {/* Portfolio Categories */}
          <div className="space-y-10 md:space-y-12">
            {Object.entries(portfolioData).map(([category, data], idx) => (
              <div key={idx} className="space-y-4 md:space-y-5">
                {/* Category Header */}
                <div className="text-center max-w-3xl mx-auto px-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                    {category}
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    {data.description}
                  </p>
                </div>

                {/* Content */}
                {category === "Web Development" ? (
                  // Grid layout for Web Development
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 px-4">
                    {data.projects.map((project, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                      >
                        <div className="relative h-40 md:h-48 bg-white flex items-center justify-center p-3">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-2 right-2">
                            <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                              <Globe className="w-3 h-3" />
                              Live
                            </div>
                          </div>
                        </div>
                        <div className="p-3 md:p-4">
                          <h3 className="text-sm md:text-base font-bold text-white mb-1 md:mb-2 group-hover:text-indigo-300 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs md:text-sm text-slate-400 mb-3">{project.description}</p>
                          <button
                            onClick={() => window.open(project.liveLink, "_blank")}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-3 py-2 rounded-lg flex items-center justify-center gap-2 transition-all text-xs md:text-sm"
                          >
                            <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                            Visit Website
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Carousel for other categories
                  <Carousel projects={data.projects} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}