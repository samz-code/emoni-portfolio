import { Download, DollarSign, Palette, Monitor, Video, Code, FileText, Network, Sparkles, Phone, Mail, AlertTriangle, ArrowRight } from "lucide-react";

const rateCardData = [
  {
    category: "Graphic Design",
    icon: Palette,
    color: "from-blue-500 to-blue-600",
    items: [
      { service: "Logo Design - Basic", price: "$50" },
      { service: "Logo Design - Professional", price: "$100-150" },
      { service: "Poster/Flyer Design", price: "$40-70" },
      { service: "Social Media Graphics Pack", price: "$60-100" },
      { service: "Complete Branding Package", price: "$250-500" }
    ]
  },
  {
    category: "Web Development",
    icon: Monitor,
    color: "from-purple-500 to-pink-500",
    items: [
      { service: "Landing Page", price: "$300-500" },
      { service: "Business Website (5-10 pages)", price: "$800-1,200" },
      { service: "WordPress Website", price: "$600-1,000" },
      { service: "E-commerce Website", price: "$1,500-3,000" },
      { service: "Custom Web Application", price: "$2,500+" }
    ]
  },
  {
    category: "Video Editing",
    icon: Video,
    color: "from-red-500 to-orange-500",
    items: [
      { service: "Basic Video Edit (up to 5 min)", price: "$80-120" },
      { service: "Professional Edit (up to 10 min)", price: "$200-300" },
      { service: "Motion Graphics & Animation", price: "$150-250" },
      { service: "Social Media Video Package", price: "$100-200" }
    ]
  },
  {
    category: "Document Design",
    icon: FileText,
    color: "from-green-500 to-emerald-500",
    items: [
      { service: "Professional Report Design", price: "$80-150" },
      { service: "Presentation Design", price: "$100-200" },
      { service: "Resume/CV Design", price: "$30-60" },
      { service: "Proposal Design", price: "$100-200" }
    ]
  },
  {
    category: "System Development",
    icon: Code,
    color: "from-indigo-500 to-purple-500",
    items: [
      { service: "Custom Software Development", price: "$3,000+" },
      { service: "Database Design & Setup", price: "$500-1,500" },
      { service: "API Development", price: "$800-2,000" },
      { service: "Bug Fixes & Optimization", price: "$80-150/hr" }
    ]
  },
  {
    category: "Hardware & Networking",
    icon: Network,
    color: "from-cyan-500 to-teal-500",
    items: [
      { service: "Computer Repair", price: "$50-100" },
      { service: "Hardware Upgrade", price: "$40-80" },
      { service: "Network Setup", price: "$150-300" },
      { service: "System Configuration", price: "$80-150" }
    ]
  }
];

export default function RateCardSection() {
  const handleDownloadPDF = () => {
    const doc = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Rate Card - Samuel A. Emoni</title>
<style>
@page{margin:0.5in}body{font-family:Arial,sans-serif;color:#333;line-height:1.6}
.header{text-align:center;padding:20px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;margin-bottom:30px}
.header h1{margin:0;font-size:32px}.header p{margin:5px 0;font-size:14px}
.contact-info{text-align:center;margin:20px 0;font-size:13px}
.category{margin-bottom:30px;page-break-inside:avoid}
.category-header{background:#f3f4f6;padding:12px;border-left:4px solid #667eea;margin-bottom:15px}
.category-header h2{margin:0;font-size:18px;color:#333}
.rate-item{display:flex;justify-content:space-between;padding:10px 15px;border-bottom:1px solid #e5e7eb}
.rate-item:last-child{border-bottom:none}.service{font-weight:500}
.price{font-weight:bold;color:#667eea}
.notes{background:#fef3c7;padding:15px;border-radius:8px;margin-top:30px;font-size:13px}
.footer{text-align:center;margin-top:40px;padding-top:20px;border-top:2px solid #e5e7eb;font-size:12px;color:#666}
</style></head><body>
<div class="header"><h1>SERVICE RATE CARD</h1><p>Samuel A. Emoni - Graphic Design & Web Solutions</p>
<p>Valid as of ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p></div>
<div class="contact-info"><strong>Contact Information</strong><br>
📧 samuelemoni18@gmail.com | 📱 +254 727 492 545<br>📍 Nairobi, Kenya</div>
${rateCardData.map(cat => `<div class="category"><div class="category-header"><h2>${cat.category}</h2></div>
${cat.items.map(item => `<div class="rate-item"><span class="service">${item.service}</span><span class="price">${item.price}</span></div>`).join('')}</div>`).join('')}
<div class="notes"><strong>⚠️ Important:</strong> Rates are base estimates. Final prices vary based on project scope, complexity, revisions needed, and timeline.<br><br>
<strong>Terms:</strong> 50% deposit, 50% on completion. Includes commercial rights.<br>
Contact for custom quotes.</div>
<div class="footer"><p><strong>Samuel A. Emoni</strong> - 4+ Years Design | 3+ Years Development</p>
<p>© ${new Date().getFullYear()} All rights reserved.</p></div></body></html>`;
    
    const blob = new Blob([doc], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Rate_Card_Samuel_Emoni_${new Date().getFullYear()}.html`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <section id="rate-card" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-0" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/30 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/30 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-pink-500/20 rounded-full blur-[80px] md:blur-[120px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 backdrop-blur-xl">
              <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-white font-semibold text-sm md:text-base">Pricing</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-white">
              Service <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Rates</span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
              Transparent pricing for all services
            </p>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mb-8 md:mb-12 px-4">
            <button 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl shadow-2xl shadow-purple-500/50 transform hover:scale-105 transition-all inline-flex items-center gap-2 text-sm md:text-base"
              onClick={handleDownloadPDF}
            >
              <Download className="w-5 h-5" />
              Download Rate Card
            </button>
          </div>

          {/* Warning */}
          <div className="mb-8 md:mb-12 px-4">
            <div className="bg-orange-500/10 backdrop-blur-xl border border-orange-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg md:text-xl text-white mb-3">Important Notice</h3>
                  <p className="text-sm md:text-base text-slate-300 mb-3">
                    <strong>Rates shown are base estimates.</strong> Final prices vary based on:
                  </p>
                  <ul className="text-xs md:text-sm text-slate-400 space-y-2 ml-4">
                    <li>• Project scope and complexity</li>
                    <li>• Number of revisions needed</li>
                    <li>• Timeline requirements (rush jobs +30-50%)</li>
                    <li>• Additional features or requirements</li>
                  </ul>
                  <p className="text-sm md:text-base text-white font-semibold mt-4">
                    💡 Contact me for accurate custom quotes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rate Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 px-4">
            {rateCardData.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all shadow-2xl group">
                  {/* Header */}
                  <div className="p-5 md:p-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl`}>
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white">{category.category}</h3>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="p-4 md:p-6 space-y-3">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-center">
                        <span className="text-xs md:text-sm text-slate-300 flex-1">{item.service}</span>
                        <span className={`text-sm md:text-base font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent ml-2`}>
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terms Note */}
          <div className="mb-12 md:mb-16 px-4">
            <div className="bg-yellow-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-2xl md:rounded-3xl p-6 md:p-8">
              <div className="flex items-start gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <h3 className="font-bold text-lg md:text-xl text-white">Payment Terms</h3>
              </div>
              <div className="text-xs md:text-sm text-slate-300 space-y-2">
                <p>• <strong>Deposit:</strong> 50% upfront, 50% on completion</p>
                <p>• <strong>Revisions:</strong> 2-3 included, extras charged separately</p>
                <p>• <strong>Rush Jobs:</strong> 24-48hr delivery +30-50% fee</p>
                <p>• <strong>Rights:</strong> Full commercial usage included</p>
                <p>• <strong>Custom Projects:</strong> Quoted after consultation</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-4">
            <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-white">Need a Custom Quote?</h3>
                <p className="text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
                  Get accurate pricing tailored to your project
                </p>
                <button 
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white font-bold px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl shadow-2xl shadow-purple-500/50 transform hover:scale-105 transition-all inline-flex items-center justify-center gap-2 text-sm md:text-base"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}