import { MessageSquare, Search, Palette, RefreshCw, CheckCircle, Headphones, ArrowRight, Sparkles, Zap } from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation & Brief",
    description: "Understand client goals and project requirements through detailed discussion",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: Search,
    title: "Research & Concept",
    description: "Develop ideas and inspirations based on market research and trends",
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/20 to-pink-500/10"
  },
  {
    icon: Palette,
    title: "Design & Development",
    description: "Create initial drafts or prototypes with attention to detail",
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-500/20 to-purple-500/10"
  },
  {
    icon: RefreshCw,
    title: "Review & Feedback",
    description: "Share designs and collect valuable input from clients",
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/20 to-red-500/10"
  },
  {
    icon: CheckCircle,
    title: "Revisions & Approval",
    description: "Adjust based on client needs until perfect satisfaction",
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/20 to-emerald-500/10"
  },
  {
    icon: Headphones,
    title: "Final Delivery & Support",
    description: "Deliver files or launch the site with ongoing support",
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-500/20 to-orange-500/10"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 overflow-hidden relative">
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
              <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold">How I Work</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">
              My Creative <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              A proven workflow that ensures quality, efficiency, and client satisfaction at every step
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative mb-16 md:mb-20">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full" />

            <div className="space-y-12 md:space-y-16">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block w-full md:max-w-md ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl group`}>
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`} />
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-xl`}>
                              <step.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1">
                              <span className="text-xs font-bold text-white">Step {index + 1}</span>
                            </div>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                          <p className="text-slate-300 leading-relaxed">{step.description}</p>
                        </div>

                        {/* Arrow indicator */}
                        {index < processSteps.length - 1 && (
                          <div className={`hidden md:block absolute ${index % 2 === 0 ? '-right-4' : '-left-4'} top-1/2 -translate-y-1/2`}>
                            <ArrowRight className={`w-6 h-6 text-white/30 ${index % 2 === 0 ? '' : 'rotate-180'}`} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl border-4 border-white/20 relative z-10 group hover:scale-110 transition-transform`}>
                      <step.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </div>
                    {/* Pulsing ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} animate-ping opacity-20`} />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>

          
          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 md:p-16 border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Animated Background Icons */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
              <Sparkles className="absolute top-10 left-10 w-16 h-16 animate-pulse" />
              <Zap className="absolute top-20 right-20 w-20 h-20 animate-pulse" style={{ animationDelay: '1s' }} />
              <CheckCircle className="absolute bottom-10 left-20 w-18 h-18 animate-pulse" style={{ animationDelay: '2s' }} />
              <Palette className="absolute bottom-20 right-10 w-16 h-16 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-xl border border-white/20">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-lg font-bold text-white">Let's Get Started</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">Ready to Start Your Project?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's work together to bring your vision to life with this proven process that guarantees outstanding results
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white text-xl px-12 py-6 rounded-2xl shadow-2xl shadow-purple-500/50 group transform hover:scale-110 transition-all font-bold inline-flex items-center justify-center gap-2"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Begin Your Journey
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button 
                  className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white text-xl px-12 py-6 rounded-2xl hover:bg-white/20 transform hover:scale-110 transition-all font-bold inline-flex items-center justify-center gap-2 group"
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  View Portfolio
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-lg flex items-center justify-center gap-2 flex-wrap">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Transparent Process</span>
              <span className="text-slate-600">•</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Unlimited Revisions</span>
              <span className="text-slate-600">•</span>
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>24/7 Support</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}