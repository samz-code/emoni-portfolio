import { useState, useEffect } from "react";
import { DollarSign, Palette, Monitor, Video, Code, FileText, Network, Sparkles, Search, ArrowRight, AlertTriangle, RefreshCw, CreditCard } from "lucide-react";

const rateCardData = [
  // Graphic Design
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Basic Logo Design", price: "$15", delivery: "2-3 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Premium Logo Design", price: "$40", delivery: "3-5 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Logo + Brand Guide", price: "$80", delivery: "5-7 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Poster/Flyer Design", price: "$10", delivery: "1-2 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Social Media Graphics (5 posts)", price: "$25", delivery: "2-3 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Business Card Design", price: "$12", delivery: "1-2 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Complete Branding Package", price: "$150", delivery: "7-10 days" },
  { category: "Graphic Design", icon: Palette, color: "from-blue-500 to-blue-600", service: "Product Packaging Design", price: "$60", delivery: "5-7 days" },
  
  // Web Development
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Single Landing Page", price: "$100", delivery: "3-5 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Business Website (5 pages)", price: "$250", delivery: "7-10 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Business Website (10+ pages)", price: "$450", delivery: "10-14 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "WordPress Website", price: "$200", delivery: "5-7 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "E-commerce Store (Basic)", price: "$300", delivery: "14-21 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "E-commerce Store (Advanced)", price: "$500", delivery: "21-30 days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Custom Web Application", price: "$800", delivery: "30+ days" },
  { category: "Web Development", icon: Monitor, color: "from-purple-500 to-pink-500", service: "Website Maintenance (Monthly)", price: "$50", delivery: "Ongoing" },
  
  // Video Editing
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Basic Video Edit (up to 3 min)", price: "$50", delivery: "2-3 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Professional Edit (up to 10 min)", price: "$100", delivery: "3-5 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Social Media Reels (3 reels)", price: "$30", delivery: "2-3 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "YouTube Video Package", price: "$80", delivery: "3-5 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Motion Graphics & Animation", price: "$80", delivery: "5-7 days" },
  { category: "Video Editing", icon: Video, color: "from-red-500 to-orange-500", service: "Promotional Video", price: "$100", delivery: "5-7 days" },
  
  // Document Design
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Resume/CV Design", price: "$8", delivery: "1-2 days" },
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Professional Report Design", price: "$30", delivery: "3-5 days" },
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Presentation Design (10 slides)", price: "$35", delivery: "2-4 days" },
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Business Proposal Design", price: "$45", delivery: "3-5 days" },
  { category: "Document Design", icon: FileText, color: "from-green-500 to-emerald-500", service: "Infographic Design", price: "$25", delivery: "2-3 days" },
  
  // System Development
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "Database Design & Setup", price: "$150", delivery: "5-7 days" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "API Development (Simple)", price: "$250", delivery: "7-10 days" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "API Development (Complex)", price: "$600", delivery: "14-21 days" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "Custom Software Development", price: "$1,000", delivery: "30+ days" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "Bug Fixes & Code Review", price: "$30/hr", delivery: "As needed" },
  { category: "System Development", icon: Code, color: "from-indigo-500 to-purple-500", service: "Performance Optimization", price: "$40/hr", delivery: "As needed" },
  
  // Hardware & IT Support
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "Computer Repair & Diagnostics", price: "$15", delivery: "Same day" },
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "Hardware Upgrade Installation", price: "$25", delivery: "1-2 days" },
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "Network Setup (Home/Office)", price: "$60", delivery: "1-2 days" },
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "System Configuration & Setup", price: "$30", delivery: "1 day" },
  { category: "Hardware & IT Support", icon: Network, color: "from-cyan-500 to-teal-500", service: "IT Consultation (per hour)", price: "$25/hr", delivery: "As needed" },
];

export default function RateCardSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currency, setCurrency] = useState("USD"); // USD or KES
  const [exchangeRate, setExchangeRate] = useState(129); // 1 USD = 129 KES (approximate)
  const [loading, setLoading] = useState(false);

  const categories = ["All", ...new Set(rateCardData.map(item => item.category))];

  const fetchExchangeRate = async () => {
    setLoading(true);
    try {
      // Add your API call here if needed
      // For now, keeping the static rate
      setExchangeRate(129);
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
    } finally {
      setLoading(false);
    }
  };

  // Convert price based on currency
  const convertPrice = (priceStr) => {
    // Extract number from price string (e.g., "$50" or "$100/hr")
    const match = priceStr.match(/\$(\d+)/);
    if (!match) return priceStr;
    
    const amount = parseInt(match[1]);
    const suffix = priceStr.includes("/hr") ? "/hr" : "";
    
    if (currency === "KES") {
      return `KES ${(amount * exchangeRate).toLocaleString()}${suffix}`;
    }
    return `${amount}${suffix}`;
  };

  const filteredServices = rateCardData.filter(item => {
    const matchesCategory = selectedCategory === "All" || selectedCategory === item.category;
    const matchesSearch = 
      item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const handleDownloadPDF = () => {
    const doc = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Rate Card - Computer Science Graduate</title>
<style>
@page{margin:0.5in}body{font-family:Arial,sans-serif;color:#333;line-height:1.6}
.header{text-align:center;padding:20px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;margin-bottom:30px}
.header h1{margin:0;font-size:32px}.header p{margin:5px 0;font-size:14px}
.contact-info{text-align:center;margin:20px 0;font-size:13px}
table{width:100%;border-collapse:collapse;margin:20px 0}
th{background:#667eea;color:white;padding:12px;text-align:left;font-size:14px}
td{padding:10px;border-bottom:1px solid #e5e7eb;font-size:13px}
tr:hover{background:#f9fafb}
.category-row{background:#f3f4f6;font-weight:bold;font-size:15px}
.notes{background:#fef3c7;padding:15px;border-radius:8px;margin-top:30px;font-size:13px}
.footer{text-align:center;margin-top:40px;padding-top:20px;border-top:2px solid #e5e7eb;font-size:12px;color:#666}
</style></head><body>
<div class="header"><h1>SERVICE RATE CARD</h1><p>Computer Science Graduate - Chuka University</p>
<p>Valid as of ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p></div>
<div class="contact-info"><strong>Contact Information</strong><br>
📧 samuelemoni18@gmail.com | 📱 +254 727 492 545<br>📍 Nairobi, Kenya</div>
<table>
<thead><tr><th>Service</th><th>Price (USD)</th><th>Delivery Time</th></tr></thead>
<tbody>
${categories.filter(c => c !== "All").map(cat => {
  const items = rateCardData.filter(item => item.category === cat);
  return `<tr class="category-row"><td colspan="3">${cat}</td></tr>
${items.map(item => `<tr><td>${item.service}</td><td>${item.price}</td><td>${item.delivery}</td></tr>`).join('')}`;
}).join('')}
</tbody></table>
<div class="notes"><strong>⚠️ Important:</strong> All prices are base rates. Final costs may vary based on project complexity, revisions, and timeline.<br><br>
<strong>Terms:</strong> 50% deposit required, 50% on completion. Rush delivery (+30-50% fee). 2-3 revisions included.<br>
Contact for custom quotes and package deals.</div>
<div class="footer"><p><strong>Computer Science Graduate - Chuka University</strong></p>
<p>Web Development | Graphic Design | Digital Marketing | IT Solutions</p>
<p>© ${new Date().getFullYear()} All rights reserved.</p></div></body></html>`;
    
    // TODO: Implement PDF download logic here
  };

  return (
    <section id="rate-card" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      {/* Simplified Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 backdrop-blur-xl">
              <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold text-sm md:text-base">Transparent Pricing</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-white">
              Service <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Rates</span>
            </h2>
            <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Clear, competitive pricing for all services - No hidden fees
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8 space-y-4">
            {/* Currency Toggle & Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              {/* Currency Toggle */}
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-1">
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-xs md:text-sm transition-all flex items-center gap-2 ${
                    currency === "USD"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <DollarSign className="w-4 h-4" />
                  USD
                </button>
                <button
                  onClick={() => setCurrency("KES")}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-xs md:text-sm transition-all flex items-center gap-2 ${
                    currency === "KES"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <RefreshCw className="w-4 h-4" />
                  KES
                </button>
              </div>

              {/* Exchange Rate Info */}
              <div className="flex items-center gap-2 text-xs md:text-sm text-slate-400 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span>Live Rate: 1 USD = {exchangeRate} KES</span>
                <button 
                  onClick={fetchExchangeRate}
                  disabled={loading}
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                  title="Refresh exchange rate"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 md:w-6 md:h-6" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 md:pl-16 pr-4 md:pr-6 py-4 md:py-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-xl text-sm md:text-base"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {categories.map((cat) => {
                const categoryData = rateCardData.find(item => item.category === cat);
                const Icon = categoryData?.icon;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-xs md:text-sm transition-all flex items-center gap-2 ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl shadow-purple-500/50 scale-105"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Important Notice */}
          <div className="mb-8">
            <div className="bg-indigo-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-xl p-4 md:p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm md:text-base text-slate-300">
                    <strong className="text-white">Market-Based Pricing:</strong> All prices reflect Kenya market rates and are competitive with local standards. Rush delivery (+30-50%), complex projects, and additional revisions may incur extra charges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rate Table */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-purple-600">
                    <th className="text-left px-4 md:px-6 py-4 text-white font-bold text-sm md:text-base">Service</th>
                    <th className="text-left px-4 md:px-6 py-4 text-white font-bold text-sm md:text-base">Category</th>
                    <th className="text-right px-4 md:px-6 py-4 text-white font-bold text-sm md:text-base">
                      Price ({currency})
                    </th>
                    <th className="text-right px-4 md:px-6 py-4 text-white font-bold text-sm md:text-base">Delivery</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredServices.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <tr
                        key={index}
                        className="border-b border-white/5 hover:bg-white/5 transition-all"
                        style={{
                          animation: `fadeInUp 0.3s ease-out ${index * 0.02}s both`
                        }}
                      >
                        <td className="px-4 md:px-6 py-4 text-white text-sm md:text-base font-medium">
                          {item.service}
                        </td>
                        <td className="px-4 md:px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                              <Icon className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-slate-300 text-xs md:text-sm">{item.category}</span>
                          </div>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-right">
                          <span className={`text-sm md:text-base font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {convertPrice(item.price)}
                          </span>
                        </td>
                        <td className="px-4 md:px-6 py-4 text-right text-slate-400 text-xs md:text-sm">
                          {item.delivery}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* No Results */}
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
                <p className="text-slate-400">Try adjusting your search or filters</p>
              </div>
            )}
          </div>

          {/* Payment Terms */}
          <div className="mt-8 space-y-6">
            {/* Payment Methods */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <CreditCard className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg text-white">Accepted Payment Methods</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 mx-auto mb-2 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.76-4.852a.932.932 0 0 1 .926-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.718-4.459z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">PayPal</p>
                  <p className="text-slate-400 text-xs mt-1">International</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 mx-auto mb-2 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">M-Pesa</p>
                  <p className="text-slate-400 text-xs mt-1">Kenya</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 mx-auto mb-2 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">Equity Bank</p>
                  <p className="text-slate-400 text-xs mt-1">Bank Transfer</p>
                </div>

                <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 mx-auto mb-2 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-sm">Airtel Money</p>
                  <p className="text-slate-400 text-xs mt-1">Mobile Money</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-slate-400">
                  💡 Choose your preferred payment method during checkout
                </p>
              </div>
            </div>

            {/* Payment Terms */}
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

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 md:p-12 border border-white/20 backdrop-blur-xl text-center">
            <h3 className="text-2xl md:text-4xl font-black mb-4 text-white">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Get a custom quote tailored to your specific needs and budget
            </p>
            <button 
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold px-8 md:px-12 py-4 md:py-6 rounded-xl shadow-2xl shadow-purple-500/50 transform hover:scale-105 transition-all inline-flex items-center gap-2 text-sm md:text-base"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Request Custom Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
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