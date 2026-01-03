import { useState } from "react";
import { Search, ExternalLink, Globe, Palette, Video, Megaphone, Award, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioData = {
  "Graphic Design": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    projects: [
      {
        title: "Confidence Conferencing and Logistics international Limited",
        client: "logistics and event management company",
        description: "Modern and professional logo with abstract elements",
        impact: "Enhanced brand recognition by 80%",
        image: "/assets/logos/logo1.png",
        subcategory: "Logo Design"
      },
      {
        title: "NeuroUni",
        client: "Innovative tech Startup",
        description: "Futuristic logo symbolizing connectivity and intelligence",
        impact: "Increased investor interest",
        image: "/assets/logos/logo2.png",
        subcategory: "Logo Design"
      },
      {
        title: "Shawamu Foundation",
        client: "Women Empowerment NGO",
        description: "Elegant and empowering logo with feminine motifs",
        impact: "Boosted donor engagement",
        image: "/assets/logos/logo3.png",
        subcategory: "Logo Design"
      },
      {
        title: "Turi",
        client: "Digital marketing Agency",
        description: "Vibrant and dynamic star like logo reflecting creativity",
        impact: "First client acquisition success",
        image: "/assets/logos/logo4.png",
        subcategory: "Logo Design"
      },
      {
        title: "Together Humanity",
        client: "NGO focused to help the less fortunate",
        description: "Unity-themed logo with warm colors",
        impact: "Strengthened community presence",
        image: "/assets/logos/logo5.png",
        subcategory: "Logo Design"
      },
      {
        title: "Mama's Kitchen",
        client: "Restaurant & Food Delivery brand",
        description: "chef hat and spoon logo evoking home-cooked meals",
        impact: "Increased local customer base",
        image: "/assets/logos/logo6.png",
        subcategory: "Logo Design"
      },
      {
        title: "MobileTek",
        client: "Company that sells mobile phones and accessories in bulk",
        description: "Mobile wordmark with sleek, tech-inspired font",
        impact: "Boosted B2B sales inquiries",
        image: "/assets/logos/logo7.png",
        subcategory: "Logo Design"
      },
      {
        title: "MohSam Spa & Salon",
        client: "Beauty and wellness center",
        description: "Soothing logo with floral creatively integrated",
        impact: "Improved patient confidence",
        image: "/assets/logos/logo8.png",
        subcategory: "Logo Design"
      },
      {
        title: "Mohsam Premium Jewellery Store",
        client: "Luxury Jewelry Brand",
        description: "Opulent logo with gem and crown elements",
        impact: "Elevated brand prestige",
        image: "/assets/logos/logo9.png",
        subcategory: "Logo Design"
      },
      {
        title: "Elevate Marketing",
        client: "Digital Marketing Agency",
        description: "Futuristic logo expressing innovation and scalability",
        impact: "Positioned brand as a tech leader",
        image: "/assets/logos/logo10.png",
        subcategory: "Logo Design"
      },
      {
        title: "Eunishar Home & Support Solution",
        client: "Company that offers home cleaning and support services",
        description: "Wordmark logo with sleek, tech-inspired font",
        impact: "Boosted B2B sales inquiries",
        image: "/assets/logos/logo11.png",
        subcategory: "Logo Design"
      },
      {
        title: "Click2Skill",
        client: "Skills Development Platform",
        description: "Futuristic logo expressing innovation and scalability",
        impact: "Enhanced platform credibility",
        image: "/assets/logos/logo12.png",
        subcategory: "Logo Design"
      },
      {
        title: "Flowmax Plumbing Solutions Ltd",
        client: "Plumbing Services Company",
        description: "Futuristic logo expressing innovation and scalability",
        impact: "Increased service bookings",
        image: "/assets/logos/logo13.png",
        subcategory: "Logo Design"
      },
      {
        title: "ThanksGiving Invitation Poster",
        client: "Private Client",
        description: "Warm and inviting poster design for Thanksgiving event",
        impact: "More than 4000 attendees",
        image: "/assets/posters/sylvia.jpg",
        subcategory: "Posters & Flyers"
      },
      {
        title: "Summer Music Festival Flyer",
        client: "City Events Committee",
        description: "Vibrant and energetic flyer capturing the essence of summer concerts",
        impact: "Sold out event in 3 days",
        image: "/assets/posters/mercy.jpg",
        subcategory: "Posters & Flyers"
      },
      {
        title: "Corporate Conference Poster",
        client: "Tech Solutions Inc",
        description: "Professional and modern design for annual business summit",
        impact: "500+ registrations achieved",
        image: "/assets/posters/tour.jpg",
        subcategory: "Posters & Flyers"
      },
      {
        title: "Charity Fundraiser Flyer",
        client: "Hope Foundation",
        description: "Compassionate design highlighting the cause and event details",
        impact: "$50K raised for the cause",
        image: "/assets/posters/mwale.jpg",
        subcategory: "Posters & Flyers"
      },
      {
        title: "Grand Opening Poster",
        client: "Urban Cafe",
        description: "Eye-catching design to announce new restaurant opening",
        impact: "300+ customers on opening day",
        image: "/assets/posters/pauline.jpg",
        subcategory: "Posters & Flyers"
      },
      {
        title: "Art Exhibition Flyer",
        client: "Gallery Modern",
        description: "Elegant and artistic design for contemporary art showcase",
        impact: "Record gallery attendance",
        image: "/assets/posters/poster6.jpg",
        subcategory: "Posters & Flyers"
      },
      {
        title: "Sports Tournament Poster",
        client: "Community Sports League",
        description: "Dynamic and bold design for basketball championship",
        impact: "All teams registered within 1 week",
        image: "/assets/posters/poster7.jpg",
        subcategory: "Posters & Flyers"
      },
      {
        title: "Wedding Invitation Flyer",
        client: "The Johnsons",
        description: "Romantic and personalized design for special celebration",
        impact: "200 guests confirmed attendance",
        image: "/assets/posters/poster8.jpg",
        subcategory: "Posters & Flyers"
      },
      {
        title: "Product Launch Poster",
        client: "Innovation Labs",
        description: "Sleek and futuristic design for tech product reveal",
        impact: "1000+ pre-orders secured",
        image: "/assets/posters/poster9.jpg",
        subcategory: "Posters & Flyers"
      },
      {
        title: "Educational Workshop Flyer",
        client: "Learning Center",
        description: "Informative and approachable design for community workshop",
        impact: "Full capacity enrollment reached",
        image: "/assets/posters/poster10.jpg",
        subcategory: "Posters & Flyers"
      }
    ]
  },
  "Video Editing": {
    icon: Video,
    color: "from-red-500 to-orange-500",
    projects: [
      {
        title: "Fashion Brand Reel",
        client: "Clothing Store",
        description: "Trendy 30-second product showcase",
        impact: "500K+ views, 15% conversion",
        platform: "TikTok",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=512&h=512&fit=crop",
        subcategory: "TikTok Reels"
      },
      {
        title: "Food Preparation",
        client: "Restaurant",
        description: "Quick recipe demonstration",
        impact: "1M+ views, viral reach",
        platform: "TikTok",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=512&h=512&fit=crop",
        subcategory: "TikTok Reels"
      },
      {
        title: "Lifestyle Brand Story",
        client: "Wellness Company",
        description: "Aesthetic brand narrative",
        impact: "200K+ views, high engagement",
        platform: "Instagram",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=512&h=512&fit=crop",
        subcategory: "Instagram Reels"
      },
      {
        title: "Corporate Brand Video",
        client: "Finance Corporation",
        description: "Professional company overview",
        impact: "500K+ views, brand authority",
        platform: "YouTube",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=512&h=512&fit=crop",
        subcategory: "YouTube Videos"
      }
    ]
  },
  "Social Media": {
    icon: Megaphone,
    color: "from-purple-500 to-indigo-500",
    projects: [
      {
        title: "Facebook Business Cover",
        client: "Marketing Agency",
        description: "Professional cover design with CTA",
        impact: "Improved brand consistency",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=512&h=512&fit=crop",
        subcategory: "Social Media Covers"
      },
      {
        title: "Instagram Story Templates",
        client: "E-commerce Brand",
        description: "Branded story template pack",
        impact: "Consistent brand presence",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=512&h=512&fit=crop",
        subcategory: "Templates Design"
      }
    ]
  },
  "Web Development": {
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    projects: [
      {
        title: "Capepcy Hardware",
        client: "Hardware Store",
        description: "Full e-commerce website with inventory management",
        impact: "200% online sales increase",
        liveLink: "https://www.capepcyhardware.co.ke",
        image: "/assets/posters/capepcy.jpg",
        subcategory: "E-commerce Website"
      },
      {
        title: "Turkana County Website",
        client: "County Government",
        description: "Government portal with service delivery features",
        impact: "Improved citizen access to services",
        liveLink: "https://turkana.go.ke/",
        image: "/assets/posters/turkana.jpg",
        subcategory: "Government Portal"
      },
      {
        title: "Axis Africa Safaris",
        client: "Tourism Company",
        description: "Safari booking platform with tour packages",
        impact: "150% booking increase",
        liveLink: "https://axisafricasafaris.com/",
        image: "/assets/posters/axis.jpg",
        subcategory: "Booking Platform"
      },
      {
        title: "Hyrax Safaris",
        client: "Safari Operator",
        description: "Premium safari experience website",
        impact: "Enhanced brand positioning",
        liveLink: "https://hyraxsafaris.com/",
        image: "/assets/posters/hyrax.jpg",
        subcategory: "Tourism Website"
      },
      {
        title: "Emoni Samuel Portfolio",
        client: "Personal Brand",
        description: "Professional portfolio showcasing skills",
        impact: "Attracted premium clients",
        liveLink: "https://www.emonisamuel.co.ke",
        image: "/assets/posters/emoni.jpg",
        subcategory: "Portfolio Website"
      }
    ]
  }
};

export default function PortfolioSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...Object.keys(portfolioData)];

  // Flatten all projects with category info
  const allProjects = Object.entries(portfolioData).flatMap(([category, data]) =>
    data.projects.map(project => ({
      ...project,
      category,
      icon: data.icon,
      color: data.color
    }))
  );

  // Filter projects
  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === "All" || selectedCategory === project.category;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 backdrop-blur-xl">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold text-sm md:text-base">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-white">
              My <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 md:mb-12">
              Browse through {allProjects.length}+ successful projects across design, development, and digital solutions
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 md:w-6 md:h-6" />
                <input
                  type="text"
                  placeholder="Search projects, clients, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 md:pl-16 pr-4 md:pr-6 py-4 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-xl text-sm md:text-base"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
              {categories.map((cat) => {
                const Icon = cat !== "All" ? portfolioData[cat]?.icon : Award;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base transition-all flex items-center gap-2 ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl shadow-purple-500/50"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Results Count */}
            <p className="text-slate-400 text-sm">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                  }}
                >
                  {/* Image Container - Uniform Height */}
                  <div className="relative h-64 bg-white flex items-center justify-center p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <div className={`bg-gradient-to-r ${project.color} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1`}>
                        <Icon className="w-3 h-3" />
                        {project.category}
                      </div>
                    </div>

                    {/* Live Badge */}
                    {project.liveLink && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          Live
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs text-indigo-400 font-semibold mb-2">{project.subcategory}</p>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-3">{project.client}</p>
                    <div className="flex items-start gap-2 bg-green-500/10 border border-green-500/30 rounded-lg p-2">
                      <TrendingUp className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-green-400">{project.impact}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12 md:py-20">
              <Search className="w-16 h-16 md:w-20 md:h-20 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-slate-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container - Uniform Display */}
            <div className="relative h-96 bg-white flex items-center justify-center p-8">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <div className={`bg-gradient-to-r ${selectedProject.color} text-white text-sm font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2`}>
                  {selectedProject.icon && <selectedProject.icon className="w-4 h-4" />}
                  {selectedProject.category}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-8">
              <p className="text-indigo-400 font-semibold mb-2">{selectedProject.subcategory}</p>
              <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
              <p className="text-xl text-slate-300 mb-6">{selectedProject.client}</p>
              
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <p className="text-slate-300">{selectedProject.description}</p>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <p className="text-green-400 font-semibold">{selectedProject.impact}</p>
                </div>
              </div>

              {selectedProject.platform && (
                <div className="bg-white/5 rounded-xl p-4 mb-6">
                  <p className="text-slate-400">Platform: <span className="text-white font-semibold">{selectedProject.platform}</span></p>
                </div>
              )}

              {selectedProject.liveLink && (
                <button
                  onClick={() => window.open(selectedProject.liveLink, "_blank")}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Website
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}