import { useState } from "react";
import { Search, ExternalLink, Globe, Palette, Video, Megaphone, Award, TrendingUp, X, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioData = {
  "Graphic Design": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    subcategories: {
      "Logo": [
        {
          title: "Tonwin Smartec Limited",
          client: "Construction Technology Company",
          description: "Modern, sleek logo with tech and construction elements",
          impact: "Enhanced brand recognition by 80%",
          image: "/assets/logos/logo1.jpg",
        },
        {
          title: "NeuroUni",
          client: "Innovative tech Startup",
          description: "Futuristic logo symbolizing connectivity and intelligence",
          impact: "Increased investor interest",
          image: "/assets/logos/logo2.jpg",
        },
        {
          title: "Shawamu Foundation",
          client: "Women Empowerment NGO",
          description: "Elegant and empowering logo with feminine motifs",
          impact: "Boosted donor engagement",
          image: "/assets/logos/logo3.jpg",
        },
        {
          title: "Turi",
          client: "Digital marketing Agency",
          description: "Vibrant and dynamic star like logo reflecting creativity",
          impact: "First client acquisition success",
          image: "/assets/logos/logo4.jpg",
        },
        {
          title: "Together Humanity",
          client: "NGO focused to help the less fortunate",
          description: "Unity-themed logo with warm colors",
          impact: "Strengthened community presence",
          image: "/assets/logos/logo5.jpg",
        },
        {
          title: "Mama's Kitchen",
          client: "Restaurant & Food Delivery brand",
          description: "chef hat and spoon logo evoking home-cooked meals",
          impact: "Increased local customer base",
          image: "/assets/logos/logo6.jpg",
        },
        {
          title: "MobileTek",
          client: "Company that sells mobile phones and accessories in bulk",
          description: "Mobile wordmark with sleek, tech-inspired font",
          impact: "Boosted B2B sales inquiries",
          image: "/assets/logos/logo7.jpg",
        },
        {
          title: "MohSam Spa & Salon",
          client: "Beauty and wellness center",
          description: "Soothing logo with floral creatively integrated",
          impact: "Improved patient confidence",
          image: "/assets/logos/logo8.jpg",
        },
        {
          title: "Mohsam Premium Jewellery Store",
          client: "Luxury Jewelry Brand",
          description: "Opulent logo with gem and crown elements",
          impact: "Elevated brand prestige",
          image: "/assets/logos/logo9.jpg",
        },
        {
          title: "Elevate Marketing",
          client: "Digital Marketing Agency",
          description: "Futuristic logo expressing innovation and scalability",
          impact: "Positioned brand as a tech leader",
          image: "/assets/logos/logo10.jpg",
        },
        {
          title: "Eunishar Home & Support Solution",
          client: "Company that offers home cleaning and support services",
          description: "Wordmark logo with sleek, tech-inspired font",
          impact: "Boosted B2B sales inquiries",
          image: "/assets/logos/logo11.jpg",
        },
        {
          title: "Click2Skill",
          client: "Skills Development Platform",
          description: "Futuristic logo expressing innovation and scalability",
          impact: "Enhanced platform credibility",
          image: "/assets/logos/logo12.jpg",
        },
        {
          title: "Flowmax Plumbing Solutions Ltd",
          client: "Plumbing Services Company",
          description: "Futuristic logo expressing innovation and scalability",
          impact: "Increased service bookings",
          image: "/assets/logos/logo13.jpg",
        }
      ],
      "Posters & Flyers": [
        {
          title: "ThanksGiving Invitation Poster",
          client: "Private Client",
          description: "Warm and inviting poster design for Thanksgiving event",
          impact: "More than 4000 attendees",
          image: "/assets/posters/sylvia.jpg",
        },
        {
          title: "Summer Music Festival Flyer",
          client: "City Events Committee",
          description: "Vibrant and energetic flyer capturing the essence of summer concerts",
          impact: "Sold out event in 3 days",
          image: "/assets/posters/poster2.jpg",
        },
        {
          title: "Corporate Conference Poster",
          client: "Tech Solutions Inc",
          description: "Professional and modern design for annual business summit",
          impact: "500+ registrations achieved",
          image: "/assets/posters/poster3.jpg",
        },
        {
          title: "Charity Fundraiser Flyer",
          client: "Hope Foundation",
          description: "Compassionate design highlighting the cause and event details",
          impact: "$50K raised for the cause",
          image: "/assets/posters/poster4.jpg",
        },
        {
          title: "Grand Opening Poster",
          client: "Urban Cafe",
          description: "Eye-catching design to announce new restaurant opening",
          impact: "300+ customers on opening day",
          image: "/assets/posters/poster5.jpg",
        },
        {
          title: "Art Exhibition Flyer",
          client: "Gallery Modern",
          description: "Elegant and artistic design for contemporary art showcase",
          impact: "Record gallery attendance",
          image: "/assets/posters/poster6.jpg",
        },
        {
          title: "Sports Tournament Poster",
          client: "Community Sports League",
          description: "Dynamic and bold design for basketball championship",
          impact: "All teams registered within 1 week",
          image: "/assets/posters/poster7.jpg",
        },
        {
          title: "Wedding Invitation Flyer",
          client: "The Johnsons",
          description: "Romantic and personalized design for special celebration",
          impact: "200 guests confirmed attendance",
          image: "/assets/posters/poster8.jpg",
        },
        {
          title: "Product Launch Poster",
          client: "Innovation Labs",
          description: "Sleek and futuristic design for tech product reveal",
          impact: "1000+ pre-orders secured",
          image: "/assets/posters/poster9.jpg",
        },
        {
          title: "Educational Workshop Flyer",
          client: "Learning Center",
          description: "Informative and approachable design for community workshop",
          impact: "Full capacity enrollment reached",
          image: "/assets/posters/poster10.jpg",
        },
      ],
      "Product Packaging": [
        { title: "Coffee Roasters Pack", client: "Elevation Coffee", description: "Premium packaging with brand colors", impact: "40% increase in shelf appeal", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=512&h=512&fit=crop" },
        { title: "Organic Skincare", client: "Beauty Brand", description: "Eco-friendly packaging design", impact: "Boosted premium perception", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=512&h=512&fit=crop" },
        { title: "Artisan Bakery", client: "Local Bakery", description: "Rustic packaging with wheat elements", impact: "Enhanced brand authenticity", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=512&h=512&fit=crop" }
      ],
      "Invitation Cards": [
        { title: "Wedding Elegance", client: "Private Client", description: "Sophisticated wedding invitation suite", impact: "200+ guests impressed", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=512&h=512&fit=crop" },
        { title: "Corporate Gala", client: "Fortune 500 Company", description: "Premium event invitation design", impact: "95% attendance rate", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=512&h=512&fit=crop" },
        { title: "Birthday Celebration", client: "Private Event", description: "Colorful and festive design", impact: "Memorable first impression", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=512&h=512&fit=crop" }
      ],
      "Campaign Ads": [
        { title: "Digital Marketing Suite", client: "Tech Startup", description: "Complete ad campaign for social media", impact: "300% ROI increase", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=512&h=512&fit=crop" },
        { title: "Product Launch Ads", client: "Consumer Brand", description: "Multi-platform campaign design", impact: "2M+ impressions", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=512&h=512&fit=crop" },
        { title: "Holiday Campaign", client: "Retail Chain", description: "Seasonal promotional materials", impact: "60% sales increase", image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=512&h=512&fit=crop" }
      ],
      "Menus": [
        { title: "Fine Dining Menu", client: "Premium Restaurant", description: "Elegant menu with food photography", impact: "Enhanced dining experience", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=512&h=512&fit=crop" },
        { title: "Cafe Menu Board", client: "Coffee Shop", description: "Modern minimalist design", impact: "Faster order processing", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=512&h=512&fit=crop" },
        { title: "Bar Drinks Menu", client: "Cocktail Lounge", description: "Creative drink presentation", impact: "35% increase in specialty orders", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=512&h=512&fit=crop" }
      ]
    }
  },
  "Video Editing": {
    icon: Video,
    color: "from-red-500 to-orange-500",
    subcategories: {
      "TikTok Reels": [
        { title: "Fashion Brand Reel", client: "Clothing Store", description: "Trendy 30-second product showcase", impact: "500K+ views, 15% conversion", platform: "TikTok", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=512&h=512&fit=crop" },
        { title: "Food Preparation", client: "Restaurant", description: "Quick recipe demonstration", impact: "1M+ views, viral reach", platform: "TikTok", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=512&h=512&fit=crop" },
        { title: "Tech Product Demo", client: "Gadget Company", description: "Fast-paced features highlight", impact: "300K+ views, 20% CTR", platform: "TikTok", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=512&h=512&fit=crop" }
      ],
      "Instagram Reels": [
        { title: "Lifestyle Brand Story", client: "Wellness Company", description: "Aesthetic brand narrative", impact: "200K+ views, high engagement", platform: "Instagram", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=512&h=512&fit=crop" },
        { title: "Travel Destination", client: "Tourism Board", description: "Scenic location showcase", impact: "Boosted bookings by 45%", platform: "Instagram", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=512&h=512&fit=crop" },
        { title: "Fitness Motivation", client: "Gym Chain", description: "Workout transformation reel", impact: "150K+ views, 500+ signups", platform: "Instagram", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=512&h=512&fit=crop" }
      ],
      "YouTube Videos": [
        { title: "Corporate Brand Video", client: "Finance Corporation", description: "Professional company overview", impact: "500K+ views, brand authority", platform: "YouTube", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=512&h=512&fit=crop" },
        { title: "Product Demo Series", client: "Tech Company", description: "Detailed feature walkthroughs", impact: "100K+ views, reduced support tickets", platform: "YouTube", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=512&h=512&fit=crop" },
        { title: "Event Highlight Reel", client: "Conference Organizers", description: "Dynamic event recap", impact: "Promoted future events successfully", platform: "YouTube", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=512&h=512&fit=crop" }
      ]
    }
  },
  "Social Media": {
    icon: Megaphone,
    color: "from-purple-500 to-indigo-500",
    subcategories: {
      "Social Media Covers": [
        { title: "Facebook Business Cover", client: "Marketing Agency", description: "Professional cover design with CTA", impact: "Improved brand consistency", image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=512&h=512&fit=crop" },
        { title: "LinkedIn Company Banner", client: "Corporate Firm", description: "Executive professional design", impact: "Enhanced corporate image", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=512&h=512&fit=crop" },
        { title: "Twitter Header Suite", client: "Tech Influencer", description: "Bold personal branding", impact: "40% follower increase", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=512&h=512&fit=crop" }
      ],
      "Templates Design": [
        { title: "Instagram Story Templates", client: "E-commerce Brand", description: "Branded story template pack", impact: "Consistent brand presence", image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=512&h=512&fit=crop" },
        { title: "LinkedIn Post Templates", client: "Business Coach", description: "Professional content templates", impact: "3x content production speed", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=512&h=512&fit=crop" },
        { title: "YouTube Thumbnail Pack", client: "Content Creator", description: "Attention-grabbing designs", impact: "25% CTR improvement", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=512&h=512&fit=crop" }
      ]
    }
  },
  "Web Development": {
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
    subcategories: {
      "Websites": [
        { title: "Capepcy Hardware", client: "Hardware Store", description: "Full e-commerce website with inventory management", impact: "200% online sales increase", liveLink: "https://www.capepcyhardware.co.ke", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=512&h=512&fit=crop" },
        { title: "Turkana County Website", client: "County Government", description: "Government portal with service delivery features", impact: "Improved citizen access to services", liveLink: "#", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=512&h=512&fit=crop" },
        { title: "Axis Africa Safaris", client: "Tourism Company", description: "Safari booking platform with tour packages", impact: "150% booking increase", liveLink: "https://axisafricasafaris.com/", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=512&h=512&fit=crop" },
        { title: "Hyrax Safaris", client: "Safari Operator", description: "Premium safari experience website", impact: "Enhanced brand positioning", liveLink: "https://hyraxsafaris.com/", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=512&h=512&fit=crop" },
        { title: "Emoni Samuel Portfolio", client: "Personal Brand", description: "Professional portfolio showcasing skills", impact: "Attracted premium clients", liveLink: "https://www.emonisamuel.co.ke", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=512&h=512&fit=crop" }
      ]
    }
  }
};

function CarouselView({ projects, subcategory, color, icon: Icon }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentSlide];

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
      {/* Carousel Image */}
      <div className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900">
        <img 
          src={currentProject.image} 
          alt={currentProject.title}
          className="w-full h-full object-cover"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className={`bg-gradient-to-r ${color} text-white text-sm font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2`}>
            <Icon className="w-4 h-4" />
            {subcategory}
          </div>
        </div>

        {/* Live Link Badge */}
        {currentProject.liveLink && (
          <div className="absolute top-4 right-4">
            <div className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-1">
              <Globe className="w-4 h-4" />
              Live
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        {projects.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}

        {/* Slide Counter */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm font-bold px-4 py-2 rounded-full">
          {currentSlide + 1} / {projects.length}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
        <p className="text-indigo-400 font-semibold mb-3">{currentProject.client}</p>
        <p className="text-slate-300 mb-4">{currentProject.description}</p>
        
        {/* Impact Badge */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-4 py-3 mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
            <p className="text-green-400 font-semibold">{currentProject.impact}</p>
          </div>
        </div>

        {/* Platform (for videos) */}
        {currentProject.platform && (
          <div className="bg-white/5 rounded-lg px-4 py-2 mb-4">
            <p className="text-slate-400 text-sm">Platform: <span className="text-white font-semibold">{currentProject.platform}</span></p>
          </div>
        )}

        {/* Live Link Button */}
        {currentProject.liveLink && (
          <button
            onClick={() => window.open(currentProject.liveLink, "_blank")}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-6 py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            Visit Live Website
          </button>
        )}

        {/* Dot Navigation */}
        {projects.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? 'bg-purple-600 w-8 h-2'
                    : 'bg-white/20 hover:bg-white/40 w-2 h-2'
                } rounded-full`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedSubcategory, setExpandedSubcategory] = useState(null);

  const categories = ["All", ...Object.keys(portfolioData)];

  const filterSubcategories = () => {
    let filtered = [];
    
    Object.entries(portfolioData).forEach(([category, data]) => {
      if (selectedCategory === "All" || selectedCategory === category) {
        Object.entries(data.subcategories).forEach(([subcat, projects]) => {
          const matchesSearch = projects.some(project =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            subcat.toLowerCase().includes(searchQuery.toLowerCase())
          );
          
          if (matchesSearch) {
            filtered.push({
              category,
              subcategory: subcat,
              projects,
              icon: data.icon,
              color: data.color,
              totalProjects: projects.length
            });
          }
        });
      }
    });
    
    return filtered;
  };

  const filteredSubcategories = filterSubcategories();

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
              Explore successful projects across design, development, and digital solutions with carousel view
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
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-sm md:text-base transition-all ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl shadow-purple-500/50"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Subcategories Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredSubcategories.map((item, index) => {
              const Icon = item.icon;
              const isExpanded = expandedSubcategory === `${item.category}-${item.subcategory}`;
              
              return (
                <div key={index} className="group">
                  {/* Subcategory Header - Clickable */}
                  <button
                    onClick={() => setExpandedSubcategory(isExpanded ? null : `${item.category}-${item.subcategory}`)}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-4 hover:bg-white/10 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`bg-gradient-to-r ${item.color} p-3 rounded-xl`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-xl md:text-2xl font-bold text-white">{item.subcategory}</h3>
                          <p className="text-slate-400 text-sm">{item.category} • {item.totalProjects} projects</p>
                        </div>
                      </div>
                      <ChevronRight className={`w-6 h-6 text-white transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>
                  </button>

                  {/* Carousel - Shows when expanded */}
                  {isExpanded && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                      <CarouselView 
                        projects={item.projects}
                        subcategory={item.subcategory}
                        color={item.color}
                        icon={Icon}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredSubcategories.length === 0 && (
            <div className="text-center py-12 md:py-20">
              <Search className="w-16 h-16 md:w-20 md:h-20 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">No projects found</h3>
              <p className="text-slate-400">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}