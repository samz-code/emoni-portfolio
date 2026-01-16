import { useState } from "react";
import { Palette, Monitor, Video, Code, Wrench, ArrowRight, Sparkles, Zap, Layout, CheckCircle2, Star, TrendingUp } from "lucide-react";

const services = [
  {
    category: "Design & Branding",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-500/20 to-rose-500/10",
    popular: true,
    items: [
      "Logo Design & Brand Identity",
      "Marketing Materials (Posters, Flyers, Banners)",
      "Social Media Graphics & Templates",
      "Professional Documents & Presentations"
    ]
  },
  {
    category: "Web Development",
    icon: Monitor,
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-500/20 to-violet-500/10",
    popular: true,
    items: [
      "Responsive Website Design",
      "WordPress Development",
      "Custom Web Applications",
      "UI/UX Design & Prototyping"
    ]
  },
  {
    category: "Software & Systems",
    icon: Code,
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-500/20 to-blue-500/10",
    popular: true,
    items: [
      "Custom Software Development",
      "API Development & Integration",
      "Database Design & Optimization",
      "System Architecture & Consultation"
    ]
  },
  {
    category: "Video Production",
    icon: Video,
    color: "from-red-500 to-orange-500",
    bgColor: "from-red-500/20 to-orange-500/10",
    popular: false,
    items: [
      "Video Editing & Post-Production",
      "Promotional & Marketing Videos",
      "Motion Graphics & Animation",
      "Color Grading & Effects"
    ]
  },
  {
    category: "Technical Support",
    icon: Wrench,
    color: "from-yellow-500 to-amber-500",
    bgColor: "from-yellow-500/20 to-amber-500/10",
    popular: false,
    items: [
      "Hardware Repair & Upgrades",
      "System Setup & Configuration",
      "Network Installation & Security",
      "Technical Troubleshooting & Support"
    ]
  },
  {
    category: "IT Consultation & Training",
    icon: Sparkles,
    color: "from-cyan-500 to-teal-500",
    bgColor: "from-cyan-500/20 to-teal-500/10",
    popular: false,
    items: [
      "Technology Strategy & Planning",
      "Software & Tools Recommendations",
      "Team Training & Workshops",
      "Digital Transformation Support"
    ]
  }
];

const benefits = [
  { icon: CheckCircle2, text: "Fast Delivery", description: "Quick turnaround without compromising quality" },
  { icon: Star, text: "Premium Quality", description: "Professional results that exceed expectations" },
  { icon: TrendingUp, text: "Affordable Pricing", description: "Competitive rates for all budgets" },
  { icon: Zap, text: "24/7 Support", description: "Always available to assist you" },
];

export default function WhatIDoSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="what-i-do" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-0" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-pink-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold text-sm md:text-base">What I Offer</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-white">
              What <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">I Do</span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
              Professional design, development & technical solutions
            </p>
          </div>

          {/* Benefits Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-16 px-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 group">
                <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-indigo-400 mb-2 md:mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all" />
                <h4 className="text-base md:text-lg font-bold text-white mb-1">{benefit.text}</h4>
                <p className="text-xs md:text-sm text-slate-400">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {services.map((service, idx) => {
              const Icon = service.icon;
              
              return (
                <div 
                  key={idx} 
                  className="group relative"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 z-20">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-2xl shadow-yellow-500/50 flex items-center gap-1 animate-pulse">
                        <Star className="w-3 h-3" />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl`} />
                  
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all hover:-translate-y-2 duration-500 shadow-2xl">
                    {/* Header */}
                    <div className="p-6 border-b border-white/10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                            {service.category}
                          </h3>
                          <p className="text-sm text-slate-400">{service.items.length} Services</p>
                        </div>
                      </div>
                    </div>

                    {/* Services List */}
                    <div className="p-6 space-y-2">
                      {service.items.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors py-2 group/item"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color} flex-shrink-0 group-hover/item:scale-150 transition-all`} />
                          <span className="text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Corner Decoration */}
                    <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <Icon className="w-full h-full transform rotate-12" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center px-4">
            <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Animated Background Icons */}
              <div className="absolute inset-0 overflow-hidden opacity-5">
                <Sparkles className="absolute top-10 left-10 w-16 h-16 animate-pulse" />
                <Code className="absolute top-20 right-20 w-20 h-20 animate-pulse" style={{ animationDelay: '1s' }} />
                <Palette className="absolute bottom-10 left-20 w-18 h-18 animate-pulse" style={{ animationDelay: '2s' }} />
                <Monitor className="absolute bottom-20 right-10 w-16 h-16 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-white">Ready to Start?</h3>
                <p className="text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
                  Let's bring your vision to life with professional quality
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                  <button 
                    className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl shadow-2xl shadow-purple-500/50 group transform hover:scale-105 transition-all font-bold inline-flex items-center justify-center gap-2"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button 
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all font-bold inline-flex items-center justify-center gap-2 group"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                    View Work
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