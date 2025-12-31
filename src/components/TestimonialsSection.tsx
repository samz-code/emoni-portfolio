import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Award, Sparkles, ArrowRight, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Peter Kuria",
    company: "Solai Coffee",
    role: "CEO",
    feedback: "Working with Samuel as our Creative Designer has been exceptional. He has successfully shaped and refined our brand identity and digital presence, creating a cohesive visual system that respects our coffee heritage while strongly appealing to modern consumers. The website is both visually compelling and highly functional, and his communication, consistency, and attention to detail have been outstanding throughout.",
    rating: 5,
    project: "Brand Identity & Website",
    location: "Orlando, FL"
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Elegant Events",
    role: "Owner",
    feedback: "Samuel designed all our event marketing materials and they were absolutely stunning! His creativity and attention to detail helped us attract high-end clients. The posters, banners, and invitations perfectly captured the luxury feel we wanted.",
    rating: 5,
    project: "Event Marketing Design",
    location: "Nairobi, Kenya"
  },
  {
    id: 3,
    name: "James Ochieng",
    company: "Coastal Traders Ltd",
    role: "Managing Director",
    feedback: "Samuel optimized and stabilized our Odoo system, significantly improving our inventory management and operational workflows. Stock tracking, sales reporting, and internal processes are now automated, reliable, and accurate. His strong technical expertise combined with a clear understanding of our business requirements delivered measurable efficiency gains across the organization.",
    rating: 5,
    project: "Inventory Management System",
    location: "Mombasa, Kenya"
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    company: "Urban Fitness",
    role: "Founder",
    feedback: "Samuel handled our complete rebranding from logo to website with incredible professionalism. His designs are modern, clean, and exactly what we envisioned. Our member sign-ups increased significantly after the rebrand. Highly recommend!",
    rating: 5,
    project: "Complete Rebranding Package",
    location: "Miami, FL"
  },
  {
    id: 5,
    name: "Jasper Kaur",
    company: "Brightstar Academy",
    role: "Founder & CEO",
    feedback: "The school management system Samuel developed has made our administrative work so much easier. Parents can now access student records online, and fee tracking is automated. He was patient during training and very supportive.",
    rating: 5,
    project: "School Management System",
    location: "Canada"
  },
  {
    id: 6,
    name: "David Chen",
    company: "TechHub Solutions",
    role: "CTO",
    feedback: "Samuel built our custom web application with clean code and excellent functionality. The app is fast, secure, and scalable. His technical expertise and problem-solving skills made the development process smooth and efficient.",
    rating: 4,
    project: "Custom Web Application",
    location: "San Francisco, CA"
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
    <section id="testimonials" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      {/* Gradient Overlays - Like Services Section */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-0" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-pink-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20 px-4">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 backdrop-blur-xl">
              <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold text-sm md:text-base">What Clients Say</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-white">
              Client <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
              Don't just take my word for it - hear what clients have to say about their experience
            </p>
          </div>

          {/* Main Testimonial Carousel */}
          <div className="relative mb-12">
            <div className="max-w-4xl mx-auto relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all shadow-2xl">
              <div className="p-6 md:p-12">
                <Quote className="w-12 h-12 md:w-16 md:h-16 text-indigo-500/30 mb-4 md:mb-6" />
                <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed text-slate-200">
                  "{testimonials[currentIndex].feedback}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-xl">
                      <span className="text-white font-black text-lg md:text-2xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-lg md:text-xl text-white">{testimonials[currentIndex].name}</p>
                      <p className="text-xs md:text-sm text-indigo-400 font-semibold">{testimonials[currentIndex].role}</p>
                      <p className="text-xs md:text-sm text-slate-400">{testimonials[currentIndex].company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex gap-1 justify-start md:justify-end">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-xs md:text-sm text-slate-400">{testimonials[currentIndex].location}</div>
                    <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30">
                      {testimonials[currentIndex].project}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hidden md:flex items-center justify-center group backdrop-blur-xl shadow-xl"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-125 transition-transform" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hidden md:flex items-center justify-center group backdrop-blur-xl shadow-xl"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
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
          <div className="text-center px-4">
            <div className="relative bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 border border-white/20 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Animated Background Icons */}
              <div className="absolute inset-0 overflow-hidden opacity-5">
                <Sparkles className="absolute top-10 left-10 w-16 h-16 animate-pulse" />
                <Star className="absolute top-20 right-20 w-20 h-20 animate-pulse" style={{ animationDelay: '1s' }} />
                <Award className="absolute bottom-10 left-20 w-18 h-18 animate-pulse" style={{ animationDelay: '2s' }} />
                <MessageSquare className="absolute bottom-20 right-10 w-16 h-16 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 backdrop-blur-xl border border-white/20">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
                  <span className="text-sm md:text-lg font-bold text-white">Join Our Success Stories</span>
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-white">Ready to Be My Next Success Story?</h3>
                <p className="text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed">
                  Experience the same level of quality, professionalism, and results that these clients achieved
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                  <button 
                    className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl shadow-2xl shadow-purple-500/50 group transform hover:scale-105 transition-all font-bold inline-flex items-center justify-center gap-2"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button 
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white text-base md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl hover:bg-white/20 transform hover:scale-105 transition-all font-bold inline-flex items-center justify-center gap-2 group"
                    onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                    View Portfolio
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