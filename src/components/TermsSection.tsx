import { FileText, Shield, Clock, CreditCard, RefreshCw, AlertCircle, Heart, Sparkles, Zap } from "lucide-react";

const termsItems = [
  {
    icon: CreditCard,
    title: "Payment & Pricing",
    color: "from-green-500 to-emerald-500",
    content: "50% deposit required to start, 50% due upon completion before file delivery. Multiple payment methods accepted: bank transfer, PayPal, M-Pesa, Airtel Money. All prices in rate card are base rates and may vary based on project complexity.",
    highlights: ["50% upfront deposit", "Multiple payment options", "Transparent pricing"]
  },
  {
    icon: RefreshCw,
    title: "Revisions & Timeline",
    color: "from-purple-500 to-pink-500",
    content: "Packages include 2-5 revisions based on tier. Revisions must be requested within 14 days. Standard delivery times listed in rate card. Rush delivery available for additional 30-50% fee. Client delays extend delivery proportionally.",
    highlights: ["2-5 revisions included", "Rush delivery available", "Flexible timelines"]
  },
  {
    icon: Shield,
    title: "Rights & Ownership",
    color: "from-indigo-500 to-purple-500",
    content: "Full ownership and commercial rights transfer to client upon final payment. All source files included. I retain portfolio rights unless NDA signed. Strict confidentiality maintained for all projects.",
    highlights: ["Full ownership on payment", "Source files included", "Portfolio rights retained"]
  },
  {
    icon: AlertCircle,
    title: "Important Policies",
    color: "from-orange-500 to-red-500",
    content: "Deposits are non-refundable but credited to completed work. Either party may terminate with 7 days notice. Services provided 'as is' with 30-day functionality guarantee for web projects. Governed by Kenyan law.",
    highlights: ["Non-refundable deposits", "7-day termination notice", "30-day web guarantee"]
  }
];

export default function TermsSection() {
  return (
    <section id="terms" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5 animate-pulse"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? "rgba(99, 102, 241, 0.3)" : i % 3 === 1 ? "rgba(168, 85, 247, 0.3)" : "rgba(236, 72, 153, 0.3)"
              } 0%, transparent 70%)`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${12 + i * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Dark Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-slate-950/40 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-6 py-3 mb-6 backdrop-blur-xl">
              <Shield className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold">Professional Standards</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">
              Terms & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Conditions</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Clear, transparent terms that protect both parties and ensure a smooth, professional working relationship
            </p>
          </div>

          {/* Main Terms Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
            {termsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-all duration-500`} />
                  
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-2xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                    
                    <p className="text-base text-slate-300 leading-relaxed mb-6">{item.content}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {item.highlights.map((highlight, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 text-white text-xs rounded-lg border border-white/20 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-indigo-400" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Thank You Card */}
          <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 md:p-16 border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Animated Background Icons */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
              <Sparkles className="absolute top-10 left-10 w-16 h-16 animate-pulse" />
              <Shield className="absolute top-20 right-20 w-20 h-20 animate-pulse" style={{ animationDelay: '1s' }} />
              <Heart className="absolute bottom-10 left-20 w-18 h-18 animate-pulse" style={{ animationDelay: '2s' }} />
              <Zap className="absolute bottom-20 right-10 w-16 h-16 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 mb-6 shadow-2xl">
                <Heart className="w-10 h-10 text-white animate-pulse" />
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-4 text-white">Thank You for Your Trust</h3>
              <p className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Samuel A. Emoni - Graphic Design & Web Solutions
              </p>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                Your success is my priority. I'm committed to delivering exceptional quality and building long-term partnerships. Let's create something amazing together!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-5 py-2 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Professional Quality
                </span>
                <span className="px-5 py-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure & Confidential
                </span>
                <span className="px-5 py-2 bg-pink-500/20 text-pink-300 border border-pink-500/30 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Client-First Approach
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}