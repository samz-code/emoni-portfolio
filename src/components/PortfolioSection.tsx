import { useState } from "react";
import { ExternalLink, Globe, Image, Palette, Video, Code, ChevronLeft, ChevronRight, Sparkles, ArrowRight, Award, TrendingUp } from "lucide-react";

// Logo portfolio items (20 logos)
const logoItems = [
  { title: "FinTech Nexus Logo", client: "Financial Technology", description: "Modern geometric logo symbolizing secure digital transactions and innovation.", year: "2024", industry: "Financial Technology", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=800&fit=crop" },
  { title: "Green Harvest Organics", client: "Organic Food & Agriculture", description: "Nature-inspired logo featuring leaf elements and earthy typography.", year: "2024", industry: "Organic Food", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&h=800&fit=crop" },
  { title: "Apex Legal Partners", client: "Law Firm", description: "Professional emblem with pillars and scales representing justice and authority.", year: "2024", industry: "Legal Services", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=800&fit=crop" },
  { title: "CloudSync Solutions", client: "Cloud Computing", description: "Abstract cloud formation with data flow elements in gradient blues.", year: "2023", industry: "Technology", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=800&fit=crop" },
  { title: "Vital Health Clinic", client: "Healthcare Provider", description: "Caring and trustworthy medical symbol with modern sans-serif typography.", year: "2023", industry: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=800&fit=crop" },
  { title: "Urban Threads Boutique", client: "Fashion Retail", description: "Elegant script logo with custom lettering for contemporary clothing brand.", year: "2023", industry: "Fashion", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=800&fit=crop" },
  { title: "Pixel Studios", client: "Digital Media Agency", description: "Creative pixel-based icon representing digital artistry and design innovation.", year: "2023", industry: "Creative Services", image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=800&fit=crop" },
  { title: "Summit Investment Group", client: "Finance & Investment", description: "Mountain peak symbol with bold typography conveying growth and stability.", year: "2024", industry: "Finance", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=800&fit=crop" },
  { title: "ByteForge Technologies", client: "Software Development", description: "Tech-focused logo with binary code elements and angular geometry.", year: "2024", industry: "Technology", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=800&fit=crop" },
  { title: "Artisan Bakery Co.", client: "Artisan Bread Makers", description: "Handcrafted wheat icon with rustic typography.", year: "2023", industry: "Food & Beverage", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=800&fit=crop" },
  { title: "Momentum Fitness Hub", client: "Fitness Center", description: "Dynamic motion symbol with bold lettering representing energy and transformation.", year: "2023", industry: "Health & Fitness", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop" },
  { title: "Emerald Property Group", client: "Luxury Real Estate", description: "Sophisticated property icon with premium color palette for luxury homes.", year: "2024", industry: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop" },
  { title: "Nexus Consulting", client: "Business Services", description: "Interconnected nodes representing strategic partnerships and solutions.", year: "2023", industry: "Consulting", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop" },
  { title: "Coastal Seafood Market", client: "Food Retail", description: "Wave and fish elements with fresh, maritime-inspired color scheme.", year: "2023", industry: "Food Retail", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=800&fit=crop" },
  { title: "Quantum Labs", client: "Research & Development", description: "Scientific symbol with atomic structure and futuristic typography.", year: "2024", industry: "Science", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=800&fit=crop" },
  { title: "Harmony Music Academy", client: "Music Education", description: "Musical note integrated with growth symbol for music education.", year: "2022", industry: "Education", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=800&fit=crop" },
  { title: "Shield Security Services", client: "Security Firm", description: "Protective shield emblem with strong typography conveying safety.", year: "2022", industry: "Security", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=800&fit=crop" },
  { title: "Bloom Beauty Spa", client: "Luxury Spa", description: "Delicate floral icon with soft colors for luxury spa experience.", year: "2022", industry: "Beauty & Wellness", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=800&fit=crop" },
  { title: "TechBridge Solutions", client: "IT Services", description: "Bridge metaphor connecting technology and business with modern design.", year: "2022", industry: "IT Services", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop" },
  { title: "Velocity Auto Repair", client: "Automotive Services", description: "Speed-inspired icon with wrench elements for professional auto services.", year: "2022", industry: "Automotive", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=800&fit=crop" }
];

const portfolioCategories = [
  {
    id: "posters-flyers", name: "Posters & Flyers", icon: Image, color: "from-pink-500 to-rose-500",
    items: [
      { title: "Tech Conference 2024", client: "Technology Event", description: "Bold geometric design promoting innovation summit with speaker lineup.", services: ["Poster Design", "Event Marketing"], featured: true, stats: "2K+ Attendees", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop" },
      { title: "Summer Music Festival", client: "Entertainment Promoter", description: "Vibrant gradient poster featuring artist headliners and ticket information.", services: ["Festival Poster", "Marketing"], featured: false, stats: "5K+ Tickets", image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop" },
      { title: "Grand Opening Sale", client: "Retail Store", description: "Eye-catching promotional flyer with discount offers and store details.", services: ["Promotional Flyer", "Sales Campaign"], featured: false, stats: "300+ Customers", image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&h=600&fit=crop" },
      { title: "Charity Gala Night", client: "Non-Profit", description: "Elegant invitation design with event schedule and donation information.", services: ["Event Invitation", "Elegant Design"], featured: true, stats: "$50K Raised", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop" }
    ]
  },
  {
    id: "branding", name: "Branding Identity", icon: Sparkles, color: "from-purple-500 to-indigo-500",
    items: [
      { title: "Nexus Digital Agency", client: "Marketing & Advertising", description: "Complete brand identity with logo, colors, typography, and collateral.", services: ["Logo Design", "Brand Guidelines"], featured: true, stats: "Full Rebrand", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop" },
      { title: "Elevation Coffee Roasters", client: "Food & Beverage", description: "Logo, packaging design, brand colors, and pattern library for coffee brand.", services: ["Packaging Design", "Brand Colors"], featured: true, stats: "Multi-location", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop" },
      { title: "Prime Healthcare Network", client: "Medical Services", description: "Logo family, brand guidelines, and stationery suite for healthcare provider.", services: ["Healthcare Branding", "Signage"], featured: false, stats: "Multi-clinic", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" },
      { title: "Luxe Interior Design", client: "Interior Design", description: "Brand identity with color scheme, typography, and portfolio templates.", services: ["Visual Identity", "Portfolio Design"], featured: false, stats: "Premium Brand", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop" }
    ]
  },
  {
    id: "web", name: "Web Development", icon: Globe, color: "from-cyan-500 to-blue-500",
    items: [
      { title: "ShopHub E-commerce", client: "Multi-vendor Marketplace", description: "Full-featured online marketplace with vendor dashboard and payment integration.", services: ["React", "Node.js", "MongoDB"], liveLink: "https://example.com", featured: true, stats: "Multi-vendor", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" },
      { title: "Corporate Solutions Inc.", client: "Business Portfolio", description: "Professional corporate website with blog, services showcase, and client portal.", services: ["WordPress", "Custom Theme"], liveLink: "https://example.com", featured: true, stats: "SEO Optimized", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" },
      { title: "BookingPro Platform", client: "SaaS Application", description: "Appointment scheduling system with calendar sync and automated reminders.", services: ["Vue.js", "Laravel", "AWS"], liveLink: "https://example.com", featured: false, stats: "Cloud-based", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop" },
      { title: "HealthTrack Dashboard", client: "Web Application", description: "Patient management system with analytics, reporting, and secure storage.", services: ["React", "Express", "MySQL"], liveLink: "https://example.com", featured: false, stats: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" }
    ]
  },
  {
    id: "video", name: "Video Editing", icon: Video, color: "from-red-500 to-orange-500",
    items: [
      { title: "Corporate Brand Video", client: "Global Finance Corp", description: "Professional company overview with motion graphics and testimonial interviews.", services: ["Premiere Pro", "After Effects"], featured: true, stats: "500K+ Views", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop" },
      { title: "Product Demo Series", client: "Tech Innovations Ltd", description: "Feature walkthrough videos with screen recordings and animated callouts.", services: ["Final Cut Pro", "DaVinci"], featured: true, stats: "100K+ Views", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop" },
      { title: "Social Media Content Pack", client: "Fashion Brand", description: "Short-form promotional videos optimized for Instagram and TikTok.", services: ["Premiere Pro", "Canva Pro"], featured: false, stats: "50+ Videos", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop" },
      { title: "Event Highlight Reel", client: "Conference Organizers", description: "Dynamic recap video with keynote moments and attendee testimonials.", services: ["Premiere Pro", "Color Grading"], featured: false, stats: "Event Coverage", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop" }
    ]
  },
  {
    id: "systems", name: "System Development", icon: Code, color: "from-emerald-500 to-green-500",
    items: [
      { title: "RetailPro Inventory", client: "Stock Management", description: "Full-stack inventory tracking and reporting system for retail operations.", services: ["Python", "Django", "PostgreSQL"], featured: true, stats: "Real-time", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" },
      { title: "SchoolSync Platform", client: "Education Administration", description: "Backend development for student records, attendance, and grade management.", services: ["PHP", "Laravel", "MySQL"], featured: true, stats: "Multi-school", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop" },
      { title: "ClinicCare Patient Portal", client: "Healthcare Management", description: "Lead developer for appointment scheduling and medical records system.", services: ["React", "Node.js", "MongoDB"], featured: false, stats: "HIPAA Compliant", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop" },
      { title: "PayStream Billing", client: "Financial Processing", description: "Backend engineer implementing payment gateway integration and invoicing.", services: ["Java", "Spring Boot"], featured: false, stats: "Payment Gateway", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop" }
    ]
  }
];

export default function PortfolioSection() {
  const [logoIndex, setLogoIndex] = useState(0);

  return (
    <section id="portfolio" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-0" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-pink-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 backdrop-blur-xl">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold text-sm md:text-base">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-white">
              Portfolio <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Showcase</span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
              Explore my diverse collection of successful projects across design, development, and digital solutions
            </p>
          </div>

          {/* Logo Carousel */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center justify-between mb-6 md:mb-8 px-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-2xl">
                  <Palette className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">Logo Design Gallery</h3>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setLogoIndex((p) => (p - 1 + logoItems.length) % logoItems.length)} className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center group">
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-125 transition-transform" />
                </button>
                <button onClick={() => setLogoIndex((p) => (p + 1) % logoItems.length)} className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all flex items-center justify-center group">
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:scale-125 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square relative overflow-hidden group">
                  <img src={logoItems[logoIndex].image} alt={logoItems[logoIndex].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-3 md:space-y-4 p-4 md:p-6">
                      <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-xl md:rounded-2xl bg-white/95 shadow-2xl flex items-center justify-center backdrop-blur-sm">
                        <Palette className="w-12 h-12 md:w-16 md:h-16 text-indigo-600" />
                      </div>
                      <div className="space-y-2 bg-slate-950/80 backdrop-blur-xl p-3 md:p-4 rounded-xl border border-white/10">
                        <div className="text-xl md:text-2xl font-bold text-white">{logoItems[logoIndex].title}</div>
                        <div className="text-xs md:text-sm text-indigo-400 font-semibold">{logoItems[logoIndex].client}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full mb-3 md:mb-4 w-fit">
                    Logo #{logoIndex + 1} of {logoItems.length}
                  </div>
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-black mb-2 md:mb-3 text-white">{logoItems[logoIndex].title}</h4>
                  <p className="text-base md:text-lg text-slate-300 mb-3 md:mb-4">
                    <span className="font-semibold text-indigo-400">Client:</span> {logoItems[logoIndex].client}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed mb-4 md:mb-6 text-slate-300">{logoItems[logoIndex].description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6 p-3 md:p-4 bg-white/5 rounded-xl border border-white/10">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Year</div>
                      <div className="text-sm md:text-base font-semibold text-white">{logoItems[logoIndex].year}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Industry</div>
                      <div className="text-sm md:text-base font-semibold text-white">{logoItems[logoIndex].industry}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    <span className="px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-lg border border-white/20">Brand Identity</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-lg border border-white/20">Logo Design</span>
                    <span className="px-3 py-1 bg-white/10 text-white text-xs md:text-sm rounded-lg border border-white/20">Visual Identity</span>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {logoItems.map((_, idx) => (
                      <button key={idx} onClick={() => setLogoIndex(idx)} className={`h-2 rounded-full transition-all duration-300 ${idx === logoIndex ? 'bg-indigo-500 w-8 shadow-lg shadow-indigo-500/50' : 'bg-white/20 hover:bg-white/40 w-2'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Categories */}
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            {portfolioCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.id}>
                  <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 px-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-2xl`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">{category.name}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="group relative">
                        {item.featured && (
                          <div className="absolute -top-3 -right-3 z-20">
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-2xl shadow-yellow-500/50 flex items-center gap-1 animate-pulse">
                              <Award className="w-3 h-3" />
                              Featured
                            </div>
                          </div>
                        )}

                        <div className={`relative bg-white/5 backdrop-blur-xl border ${item.featured ? 'border-indigo-500/50' : 'border-white/10'} rounded-2xl md:rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all hover:-translate-y-2 duration-500 shadow-2xl h-full flex flex-col`}>
                          <div className="aspect-video relative overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                            
                            {item.liveLink && (
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-4 md:px-6 py-2 md:py-3 rounded-xl flex items-center gap-2 hover:scale-110 transition-transform shadow-2xl text-sm md:text-base" onClick={() => window.open(item.liveLink, "_blank")}>
                                  <ExternalLink className="w-4 h-4" />
                                  View Live Site
                                </button>
                              </div>
                            )}

                            {item.stats && (
                              <div className="absolute top-3 md:top-4 left-3 md:left-4">
                                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-2xl flex items-center gap-1">
                                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                                  {item.stats}
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="p-4 md:p-6 flex-1 flex flex-col">
                            <h4 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs md:text-sm font-semibold text-indigo-400 mb-2 md:mb-3">{item.client}</p>
                            <p className="text-xs md:text-sm mb-3 md:mb-4 leading-relaxed text-slate-300 line-clamp-3">{item.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {item.services.slice(0, 3).map((service, serviceIdx) => (
                                <span key={serviceIdx} className="px-2 md:px-3 py-1 bg-white/10 text-white text-xs rounded-lg border border-white/20">
                                  {service}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 lg:mt-20 px-4">
            <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Animated Background Icons */}
              <div className="absolute inset-0 overflow-hidden opacity-5">
                <Sparkles className="absolute top-10 left-10 w-12 h-12 md:w-16 md:h-16 animate-pulse" />
                <Code className="absolute top-20 right-20 w-16 h-16 md:w-20 md:h-20 animate-pulse" style={{ animationDelay: '1s' }} />
                <Palette className="absolute bottom-10 left-20 w-14 h-14 md:w-18 md:h-18 animate-pulse" style={{ animationDelay: '2s' }} />
                <Globe className="absolute bottom-20 right-10 w-12 h-12 md:w-16 md:h-16 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
              
              <div className="relative z-10 text-center">
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-yellow-400 animate-pulse" />
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4 text-white">Ready to Start Your Project?</h3>
                <p className="text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto text-base md:text-lg">
                  Let's collaborate and create something amazing together. Get in touch to discuss your vision!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                  <button 
                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl shadow-2xl shadow-purple-500/50 group transform hover:scale-105 transition-all font-bold inline-flex items-center justify-center gap-2"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                    Start Your Project
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button 
                    className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all font-bold inline-flex items-center justify-center gap-2"
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}