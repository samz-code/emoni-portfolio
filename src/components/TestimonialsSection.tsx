import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Award, TrendingUp, Users, Sparkles, ArrowRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    company: "TechStart Solutions",
    role: "CEO & Founder",
    feedback: "Samuel transformed our entire digital presence! From designing our brand identity to developing a stunning website, his attention to detail was exceptional. The results exceeded our expectations, and our customer engagement increased by 150%. Highly professional and creative!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    project: "Brand Identity & Website",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Luxe Fashion Boutique",
    role: "Marketing Director",
    feedback: "Working with Samuel was an absolute pleasure! His graphic design skills are outstanding. He created all our marketing materials including posters, flyers, and social media content. The designs perfectly captured our luxury brand aesthetic and helped us stand out in a competitive market.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    project: "Marketing Design Package",
    location: "New York, NY"
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "FitLife Gym & Wellness",
    role: "Business Owner",
    feedback: "From concept to launch, Samuel handled our complete rebranding and website development flawlessly. His creative process was transparent, communication was excellent, and delivery was on time. Our membership inquiries doubled within the first month. Can't recommend him enough!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    project: "Complete Rebranding & Web Dev",
    location: "Los Angeles, CA"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    company: "Summer Music Festival",
    role: "Event Coordinator",
    feedback: "The promotional materials Samuel designed for our music festival were absolutely stunning! The posters, banners, and digital ads captured the energy and vibe perfectly. We sold out tickets faster than ever before. His creativity and understanding of our vision were impressive!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    project: "Event Marketing Campaign",
    location: "Austin, TX"
  },
  {
    id: 5,
    name: "David Thompson",
    company: "ShopNow E-commerce",
    role: "Founder",
    feedback: "Samuel built us a beautiful, high-performing e-commerce platform that our customers love! The site is fast, intuitive, and mobile-friendly. He integrated payment systems seamlessly and provided excellent post-launch support. Our sales increased by 200% in just three months!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    project: "E-commerce Platform Development",
    location: "Seattle, WA"
  },
  {
    id: 6,
    name: "Lisa Johnson",
    company: "Bright Future Academy",
    role: "Principal",
    feedback: "Samuel developed a comprehensive school management system for us that streamlined all our operations. From student records to attendance tracking, everything is now automated and efficient. The system is user-friendly and saved us countless hours. Exceptional work!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    project: "School Management System",
    location: "Chicago, IL"
  },
  {
    id: 7,
    name: "Robert Williams",
    company: "Global Consulting Partners",
    role: "Managing Partner",
    feedback: "Our corporate video campaign produced by Samuel was phenomenal! The quality, editing, and storytelling were top-notch. The videos perfectly communicated our brand values and have been instrumental in our marketing efforts. Professional, creative, and highly skilled!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    project: "Corporate Video Production",
    location: "Boston, MA"
  },
  {
    id: 8,
    name: "Amanda Foster",
    company: "Wellness Spa & Retreat",
    role: "Owner",
    feedback: "Samuel created our entire brand from scratch - logo, stationery, signage, and website. Everything is cohesive, elegant, and perfectly reflects our spa's tranquil atmosphere. Our clients constantly compliment our branding. The investment was worth every penny!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    project: "Complete Brand Package",
    location: "Miami, FL"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950 overflow-hidden relative">
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
              <MessageSquare className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold">What Clients Say</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">
              Client <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Don't just take my word for it - hear what clients have to say about their experience
            </p>
          </div>

          

          {/* Main Testimonial Carousel */}
          <div className="relative mb-12">
            <div className="max-w-4xl mx-auto relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all shadow-2xl">
              <div className="p-8 md:p-12">
                <Quote className="w-16 h-16 text-indigo-500/30 mb-6" />
                <p className="text-lg md:text-xl mb-8 leading-relaxed text-slate-200">
                  "{testimonials[currentIndex].feedback}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-xl text-white">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-indigo-400 font-semibold">{testimonials[currentIndex].role}</p>
                      <p className="text-sm text-slate-400">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex gap-1 justify-start md:justify-end">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-slate-400">{testimonials[currentIndex].location}</div>
                    <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30">
                      {testimonials[currentIndex].project}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hidden md:flex items-center justify-center group backdrop-blur-xl shadow-xl"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-125 transition-transform" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hidden md:flex items-center justify-center group backdrop-blur-xl shadow-xl"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-indigo-500 shadow-lg shadow-indigo-500/50' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 md:hidden mb-12">
            <button 
              onClick={prevTestimonial}
              className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all font-semibold inline-flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-white/10 border border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all font-semibold inline-flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12 md:p-16 border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Animated Background Icons */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
              <Sparkles className="absolute top-10 left-10 w-16 h-16 animate-pulse" />
              <Star className="absolute top-20 right-20 w-20 h-20 animate-pulse" style={{ animationDelay: '1s' }} />
              <Award className="absolute bottom-10 left-20 w-18 h-18 animate-pulse" style={{ animationDelay: '2s' }} />
              <MessageSquare className="absolute bottom-20 right-10 w-16 h-16 animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-xl border border-white/20">
                <Award className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span className="text-lg font-bold text-white">Join Our Success Stories</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-6 text-white">Ready to Be My Next Success Story?</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Experience the same level of quality, professionalism, and results that these clients achieved
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white text-xl px-12 py-6 rounded-2xl shadow-2xl shadow-purple-500/50 group transform hover:scale-110 transition-all font-bold inline-flex items-center justify-center gap-2"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Start Your Project
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
        </div>
      </div>
    </section>
  );
}