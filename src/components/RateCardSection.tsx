import { useState } from "react";
import { DollarSign, Palette, Monitor, Video, Code, FileText, Network, Sparkles, Search, ArrowRight, AlertTriangle, RefreshCw } from "lucide-react";

const rateCardData = [
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Basic Logo Design", price: "$15", delivery: "2-3 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Premium Logo Design", price: "$40", delivery: "3-5 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Logo + Brand Guide", price: "$80", delivery: "5-7 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Poster/Flyer Design", price: "$10", delivery: "1-2 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Social Media Graphics (5 posts)", price: "$25", delivery: "2-3 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Business Card Design", price: "$12", delivery: "1-2 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Complete Branding Package", price: "$150", delivery: "7-10 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Product Packaging Design", price: "$60", delivery: "5-7 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Single Landing Page", price: "$100", delivery: "3-5 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Business Website (5 pages)", price: "$250", delivery: "7-10 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Business Website (10+ pages)", price: "$450", delivery: "10-14 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "WordPress Website", price: "$200", delivery: "5-7 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "E-commerce Store (Basic)", price: "$300", delivery: "14-21 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "E-commerce Store (Advanced)", price: "$500", delivery: "21-30 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Custom Web Application", price: "$800", delivery: "30+ days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Website Maintenance (Monthly)", price: "$50", delivery: "Ongoing" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Basic Video Edit (up to 3 min)", price: "$50", delivery: "2-3 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Professional Edit (up to 10 min)", price: "$100", delivery: "3-5 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Social Media Reels (3 reels)", price: "$30", delivery: "2-3 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "YouTube Video Package", price: "$80", delivery: "3-5 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Motion Graphics & Animation", price: "$80", delivery: "5-7 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Promotional Video", price: "$100", delivery: "5-7 days" },
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Resume/CV Design", price: "$8", delivery: "1-2 days" },
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Professional Report Design", price: "$30", delivery: "3-5 days" },
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Presentation Design (10 slides)", price: "$35", delivery: "2-4 days" },
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Business Proposal Design", price: "$45", delivery: "3-5 days" },
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Infographic Design", price: "$25", delivery: "2-3 days" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "Database Design & Setup", price: "$150", delivery: "5-7 days" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "API Development (Simple)", price: "$250", delivery: "7-10 days" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "API Development (Complex)", price: "$600", delivery: "14-21 days" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "Custom Software Development", price: "$1,000", delivery: "30+ days" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "Bug Fixes & Code Review", price: "$30/hr", delivery: "As needed" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "Performance Optimization", price: "$40/hr", delivery: "As needed" },
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "Computer Repair & Diagnostics", price: "$15", delivery: "Same day" },
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "Hardware Upgrade Installation", price: "$25", delivery: "1-2 days" },
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "Network Setup (Home/Office)", price: "$60", delivery: "1-2 days" },
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "System Configuration & Setup", price: "$30", delivery: "1 day" },
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "IT Consultation (per hour)", price: "$25/hr", delivery: "As needed" },
];

export default function RateCardSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate] = useState(129);

  const categories = ["All", ...new Set(rateCardData.map(item => item.category))];

  const convertPrice = (priceStr) => {
    const match = priceStr.match(/\$(\d+)/);
    if (!match) return priceStr;
    const amount = parseInt(match[1]);
    const suffix = priceStr.includes("/hr") ? "/hr" : "";
    if (currency === "KES") {
      return `KES ${(amount * exchangeRate).toLocaleString()}${suffix}`;
    }
    return `$${amount}${suffix}`;
  };

  const filteredServices = rateCardData.filter(item => {
    const matchesCategory = selectedCategory === "All" || selectedCategory === item.category;
    const matchesSearch = item.service.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="rate-card" className="py-20 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-6 py-3 mb-6 backdrop-blur-xl">
              <DollarSign className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold">Transparent Pricing</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black mb-6 text-white">
              Service <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Rates</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">Clear, competitive pricing for all services - No hidden fees</p>
          </div>

          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-1">
                <button onClick={() => setCurrency("USD")} className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${currency === "USD" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg" : "text-slate-300 hover:text-white"}`}>
                  <DollarSign className="w-4 h-4" />USD
                </button>
                <button onClick={() => setCurrency("KES")} className={`px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${currency === "KES" ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg" : "text-slate-300 hover:text-white"}`}>
                  <RefreshCw className="w-4 h-4" />KES
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span>Rate: 1 USD = {exchangeRate} KES</span>
              </div>
            </div>

            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
              <input type="text" placeholder="Search services..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-16 pr-6 py-5 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-xl" />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => {
                const categoryData = rateCardData.find(item => item.category === cat);
                const Icon = categoryData?.icon;
                return (
                  <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${selectedCategory === cat ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl shadow-purple-500/50 scale-105" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}>
                    {Icon && <Icon className="w-4 h-4" />}{cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <p className="text-base text-slate-300"><strong className="text-white">Market-Based Pricing:</strong> All prices reflect Kenya market rates. Rush delivery (+30-50%), complex projects, and additional revisions may incur extra charges.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-slate-400">Try adjusting your search or filters</p>
              </div>
            ) : (
              categories.filter(cat => cat !== "All").filter(cat => filteredServices.some(item => item.category === cat)).map((category, catIndex) => {
                const categoryServices = filteredServices.filter(item => item.category === category);
                const categoryData = categoryServices[0];
                const Icon = categoryData.icon;
                return (
                  <div key={category} className="group" style={{animation: `fadeInUp 0.5s ease-out ${catIndex * 0.1}s both`}}>
                    <div className={`bg-gradient-to-r ${categoryData.color} rounded-t-2xl p-6 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl`}>
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-white">{category}</h3>
                          <p className="text-white/80 text-sm">{categoryServices.length} Services Available</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl border-x border-b border-white/10 rounded-b-2xl p-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categoryServices.map((service, serviceIndex) => (
                          <a
                            key={serviceIndex}
                            href={`https://wa.me/254727492545?text=Hi! I'm interested in: *${service.service}*%0APrice: ${convertPrice(service.price)}%0ADelivery: ${service.delivery}%0A%0ACan you provide more details?`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/card relative bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 cursor-pointer overflow-hidden block"
                            style={{animation: `slideIn 0.4s ease-out ${serviceIndex * 0.05}s both`}}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover/card:opacity-10 transition-opacity duration-300 rounded-xl`} />
                            <div className="relative z-10">
                              <h4 className="text-white font-bold text-lg mb-3 group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-indigo-400 group-hover/card:to-purple-400 group-hover/card:bg-clip-text transition-all">{service.service}</h4>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-slate-400 text-sm">Price</span>
                                  <span className={`text-2xl font-black bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{convertPrice(service.price)}</span>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                                  <span className="text-slate-400 text-sm">Delivery</span>
                                  <span className="text-white font-semibold text-sm">{service.delivery}</span>
                                </div>
                              </div>
                            </div>
                            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-10 blur-2xl rounded-full transform translate-x-10 -translate-y-10 group-hover/card:scale-150 transition-transform duration-500`} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-8 space-y-6">
            <div className="bg-yellow-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg text-white">Payment Terms & Conditions</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div>
                  <p className="mb-2">• <strong>Payment:</strong> 50% deposit, 50% on completion</p>
                  <p className="mb-2">• <strong>Revisions:</strong> 2-3 revisions included</p>
                  <p className="mb-2">• <strong>Rush Jobs:</strong> 24-48hr delivery +30-50% fee</p>
                </div>
                <div>
                  <p className="mb-2">• <strong>Rights:</strong> Full commercial usage included</p>
                  <p className="mb-2">• <strong>Support:</strong> 30 days post-delivery support</p>
                  <p className="mb-2">• <strong>Refunds:</strong> Case-by-case basis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-white/20 backdrop-blur-xl text-center">
            <h3 className="text-4xl font-black mb-4 text-white">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">Get a custom quote tailored to your specific needs and budget</p>
            <a
              href="https://wa.me/254727492545?text=Hi! I'd like to request a custom quote for my project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold px-12 py-6 rounded-xl shadow-2xl shadow-purple-500/50 transform hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              Request Custom Quote<ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}