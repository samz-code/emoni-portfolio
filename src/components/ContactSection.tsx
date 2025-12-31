import { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle, Send, MapPin, Facebook, Instagram, Linkedin, Globe, Clock, Sparkles, CheckCircle2 } from "lucide-react";

const services = [
  "Logo Design", "Poster/Flyer Design", "Branding Package", "Website Development",
  "WordPress Site", "E-commerce Platform", "Video Editing", "Document Design",
  "System Development", "Hardware/Networking", "UI/UX Design", "Custom Web App", "Other"
];

const budgetRanges = ["Under $100", "$100 - $500", "$500 - $1000", "$1000 - $2500", "Above $2500"];

export default function ContactSection() {
  const [isOnline, setIsOnline] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date();
      const kenyaTime = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Nairobi" }));
      const hours = kenyaTime.getHours();
      const day = kenyaTime.getDay();

      if (day === 0) {
        if (hours >= 9 && hours < 20) {
          setIsOnline(true);
          setStatusMessage("Available Now");
        } else {
          setIsOnline(false);
          setStatusMessage("Offline - Back Sunday 9AM");
        }
      } else if (day === 6) {
        if (hours >= 8 && hours < 22) {
          setIsOnline(true);
          setStatusMessage("Available Now");
        } else {
          setIsOnline(false);
          setStatusMessage("Offline - Back at 8AM");
        }
      } else {
        if (hours >= 8 && hours < 22) {
          setIsOnline(true);
          setStatusMessage("Available Now");
        } else {
          setIsOnline(false);
          setStatusMessage("Offline - Back at 8AM");
        }
      }
    };

    checkOnlineStatus();
    const interval = setInterval(checkOnlineStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
      alert("Please fill in all required fields (Name, Email, Service, and Project Details)");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Prepare message for WhatsApp and Email
    const whatsappMessage = `*New Project Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone || "Not provided"}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Budget:* ${formData.budget || "Not specified"}%0A%0A` +
      `*Project Details:*%0A${formData.message}`;

    // Email subject and body
    const emailSubject = `Project Inquiry: ${formData.service} - ${formData.name}`;
    const emailBody = `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Service: ${formData.service}\n` +
      `Budget: ${formData.budget || "Not specified"}\n\n` +
      `Project Details:\n${formData.message}`;

    // Send to WhatsApp
    window.open(`https://wa.me/254727492545?text=${whatsappMessage}`, "_blank");

    // Send to Email (opens default email client)
    window.location.href = `mailto:emonisamuel54@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
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
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white animate-pulse" />
              <span className="text-white font-semibold text-sm md:text-base">Let's Connect</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-white">
              Get In <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              {/* Status Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                    <span className="font-bold text-white text-sm md:text-base">
                      {isOnline ? "Online" : "Offline"}
                    </span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${isOnline ? 'bg-green-500' : 'bg-gray-500'} text-white`}>
                    {statusMessage}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Sat: 8AM-10PM | Sun: 9AM-8PM (EAT)</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                  <h3 className="text-lg md:text-xl font-black text-white">Contact Information</h3>
                </div>
                <div className="space-y-4">
                  <a href="tel:+254727492545" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Phone</div>
                      <span className="font-semibold text-white text-sm md:text-base">+254 727 492 545</span>
                    </div>
                  </a>
                  <a href="mailto:emonisamuel54@gmail.com" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email</div>
                      <span className="font-semibold text-white text-xs md:text-sm break-all">samuelemoni18@gmail.com</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-xl">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Location</div>
                      <span className="font-semibold text-white text-sm md:text-base">Nairobi, Kenya</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all shadow-2xl">
                <h3 className="text-lg md:text-xl font-black text-white mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <button 
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-4 rounded-xl transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                    onClick={() => window.open("https://wa.me/254727492545", "_blank")}
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Chat
                  </button>
                  <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                    onClick={() => window.open("https://m.me/Emoni Samuel", "_blank")}
                  >
                    <Send className="w-5 h-5" />
                    Messenger
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 hover:bg-white/10 hover:border-white/30 transition-all shadow-2xl">
                <h3 className="text-lg md:text-xl font-black text-white mb-4">Social Media</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    className="bg-white/10 border border-white/20 hover:bg-blue-600 hover:border-blue-600 text-white font-semibold py-2 px-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
                    onClick={() => window.open("https://www.facebook.com/profile.php?id=61580678667530", "_blank")}
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </button>
                  <button 
                    className="bg-white/10 border border-white/20 hover:bg-pink-600 hover:border-pink-600 text-white font-semibold py-2 px-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
                    onClick={() => window.open("https://www.instagram.com/Emoni_Samuel", "_blank")}
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </button>
                  <button 
                    className="bg-white/10 border border-white/20 hover:bg-blue-700 hover:border-blue-700 text-white font-semibold py-2 px-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
                    onClick={() => window.open("https://www.linkedin.com/in/samuelemoni/", "_blank")}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </button>
                  <button 
                    className="bg-white/10 border border-white/20 hover:bg-gray-700 hover:border-gray-700 text-white font-semibold py-2 px-3 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm"
                    onClick={() => window.open("https://www.tiktok.com/@sam_e254", "_blank")}
                  >
                    <Globe className="w-4 h-4" />
                    TikTok
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all shadow-2xl">
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-b border-white/10 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Send a Message</h3>
                <p className="text-sm md:text-base text-slate-300">Fill out the form below and I'll get back to you within 24 hours</p>
              </div>
              
              <div className="p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <CheckCircle2 className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-slate-300">Your inquiry has been sent via WhatsApp and Email. I'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                        <input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Emoni Samuel"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="emoni@example.com"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+254 7XX XXX XXX"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-white mb-2">Service Interested In *</label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                        >
                          <option value="" className="bg-slate-900">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-slate-900">{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all"
                      >
                        <option value="" className="bg-slate-900">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-slate-900">{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">Project Details *</label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell me about your project, timeline, and any specific requirements..."
                        rows={5}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-white mb-2">File Upload (Optional)</label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.png,.zip"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 file:cursor-pointer"
                      />
                      <p className="text-xs text-slate-400 mt-2">
                        Accepted formats: PDF, DOC, DOCX, JPG, PNG, ZIP (Max 10MB)
                      </p>
                    </div>

                    <button 
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white text-lg font-bold py-4 rounded-xl transition-all hover:scale-105 shadow-2xl shadow-purple-500/50 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}