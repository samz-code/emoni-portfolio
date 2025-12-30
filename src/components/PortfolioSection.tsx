import { useState } from "react";
import { Search, ExternalLink, Globe, Image, Palette, Video, Code, Package, Mail, Megaphone, UtensilsCrossed, Play, FileImage, Award, TrendingUp, X } from "lucide-react";

const portfolioData = {
  "Graphic Design": {
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    subcategories: {
    "Logos": [
{
  title: "FinTech Nexus",
  client: "Financial Technology Company",
  description: "Modern geometric logo symbolizing secure digital transactions",
  impact: "Enhanced brand recognition by 80%",
  image: "/assets/logos/logo1.jpg",
},
{
  title: "Green Harvest",
  client: "Organic Food Brand",
  description: "Nature-inspired logo with leaf elements",
  impact: "Increased customer trust and engagement",
  image: "/assets/logos/logo2.jpg",
},
{
  title: "Apex Legal",
  client: "Law Firm",
  description: "Professional emblem representing justice and authority",
  impact: "Established strong corporate credibility",
  image: "/assets/logos/logo3.jpg",
},
{
  title: "Urban Grid",
  client: "Real Estate Company",
  description: "Minimal architectural logo with clean geometry",
  impact: "Improved brand recall across digital platforms",
  image: "/assets/logos/logo4.jpg",
},
{
  title: "Pulse Media",
  client: "Digital Marketing Agency",
  description: "Bold typographic logo with dynamic rhythm",
  impact: "Boosted social media engagement",
  image: "/assets/logos/logo5.jpg",
},
{
  title: "SwiftPay",
  client: "Mobile Payments Startup",
  description: "Fast, secure payment identity with sharp iconography",
  impact: "Increased app trust and downloads",
  image: "/assets/Logos/logo6.png",
},
{
  title: "EcoBuild",
  client: "Construction & Engineering Firm",
  description: "Sustainable construction identity with solid forms",
  impact: "Strengthened green brand positioning",
  image: "/assets/Logos/logo7.png",
},
{
  title: "Nova Health",
  client: "Healthcare Provider",
  description: "Clean and reassuring medical brand mark",
  impact: "Improved patient confidence",
  image: "/assets/Logos/logo8.png",
},
{
  title: "Crestline Apparel",
  client: "Fashion Brand",
  description: "Elegant wordmark tailored for premium fashion",
  impact: "Elevated brand perception",
  image: "/assets/Logos/logo9.png",
},
{
  title: "Orbit Tech",
  client: "IT Solutions Company",
  description: "Futuristic logo expressing innovation and scalability",
  impact: "Positioned brand as a tech leader",
  image: "/assets/Logos/logo10.png",
}
    ],
      "Posters & Flyers": [
        { title: "Tech Conference 2024", client: "Technology Event", description: "Bold geometric design for innovation summit", impact: "2,000+ attendees attracted", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=512&h=512&fit=crop" },
        { title: "Summer Music Festival", client: "Entertainment Promoter", description: "Vibrant poster with artist lineup", impact: "5,000+ tickets sold", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=512&h=512&fit=crop" },
        { title: "Charity Gala Night", client: "Non-Profit Organization", description: "Elegant invitation design", impact: "$50,000 raised for charity", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=512&h=512&fit=crop" }
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

export default function PortfolioSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...Object.keys(portfolioData)];

  const filterProjects = () => {
    let filtered = [];
    
    Object.entries(portfolioData).forEach(([category, data]) => {
      if (selectedCategory === "All" || selectedCategory === category) {
        Object.entries(data.subcategories).forEach(([subcat, projects]) => {
          projects.forEach(project => {
            const matchesSearch = 
              project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
              project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              category.toLowerCase().includes(searchQuery.toLowerCase()) ||
              subcat.toLowerCase().includes(searchQuery.toLowerCase());
            
            if (matchesSearch) {
              filtered.push({
                ...project,
                category,
                subcategory: subcat,
                icon: data.icon,
                color: data.color
              });
            }
          });
        });
      }
    });
    
    return filtered;
  };

  const filteredProjects = filterProjects();

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
              Explore 100+ successful projects across design, development, and digital solutions
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

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all hover:-translate-y-2 duration-300 shadow-xl h-full">
                    {/* Image */}
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <div className={`bg-gradient-to-r ${project.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-2xl flex items-center gap-1`}>
                          <Icon className="w-3 h-3" />
                          {project.subcategory}
                        </div>
                      </div>

                      {/* Live Link Badge */}
                      {project.liveLink && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-2xl flex items-center gap-1">
                            <Globe className="w-3 h-3" />
                            Live
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-base md:text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-indigo-400 font-semibold mb-2">{project.client}</p>
                      <p className="text-xs text-slate-300 line-clamp-2 mb-3">{project.description}</p>
                      
                      {/* Impact Badge */}
                      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <p className="text-xs text-green-400 font-semibold line-clamp-1">{project.impact}</p>
                        </div>
                      </div>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-slate-900/95 border border-white/20 rounded-2xl md:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 md:h-96 object-cover rounded-t-2xl md:rounded-t-3xl" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="absolute top-4 left-4">
                <div className={`bg-gradient-to-r ${selectedProject.color} text-white text-sm font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2`}>
                  <selectedProject.icon className="w-4 h-4" />
                  {selectedProject.subcategory}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-4xl font-black text-white mb-2">{selectedProject.title}</h2>
              <p className="text-lg text-indigo-400 font-semibold mb-4">{selectedProject.client}</p>
              
              <div className="space-y-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-sm font-bold text-slate-400 mb-1">Description</h4>
                  <p className="text-white">{selectedProject.description}</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/30">
                  <h4 className="text-sm font-bold text-green-400 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Impact & Results
                  </h4>
                  <p className="text-white font-semibold">{selectedProject.impact}</p>
                </div>

                {selectedProject.platform && (
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h4 className="text-sm font-bold text-slate-400 mb-1">Platform</h4>
                    <p className="text-white">{selectedProject.platform}</p>
                  </div>
                )}
              </div>

              {selectedProject.liveLink && (
                <button
                  onClick={() => window.open(selectedProject.liveLink, "_blank")}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-2xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Website
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}