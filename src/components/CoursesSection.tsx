import { useState } from "react";
import { GraduationCap, Award, Clock, Users, Star, ChevronRight, Palette, Video, TrendingUp, Sparkles, BookOpen, CheckCircle, X } from "lucide-react";

const coursesData = [
  {
    id: 1,
    title: "Adobe Photoshop Mastery",
    category: "Graphic Design",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    description: "Master photo editing, digital art, and graphic design with industry-standard Adobe Photoshop",
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    students: "500+",
    rating: 4.9,
    priceKsh: 15000,
    priceUsd: 120,
    modules: [
      "Interface & Tools Overview",
      "Layers & Masking Techniques",
      "Photo Retouching & Enhancement",
      "Digital Art & Illustration",
      "Text Effects & Typography",
      "Color Correction & Grading",
      "Advanced Compositing",
      "Portfolio Project"
    ],
    features: [
      "Live online sessions",
      "Hands-on projects",
      "Certificate of completion",
      "Lifetime access to resources",
      "1-on-1 mentorship"
    ],
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Adobe Illustrator Pro",
    category: "Graphic Design",
    icon: Palette,
    color: "from-orange-500 to-amber-500",
    description: "Create stunning vector graphics, logos, and illustrations with Adobe Illustrator",
    duration: "6 Weeks",
    level: "Beginner to Intermediate",
    students: "450+",
    rating: 4.8,
    priceKsh: 12000,
    priceUsd: 96,
    modules: [
      "Vector Basics & Pen Tool",
      "Shape Building & Pathfinder",
      "Logo Design Fundamentals",
      "Typography & Text Effects",
      "Color Theory & Swatches",
      "Patterns & Brushes",
      "Branding Projects",
      "Print & Export Settings"
    ],
    features: [
      "Real client projects",
      "Design critique sessions",
      "Portfolio building",
      "Industry best practices",
      "Job placement support"
    ],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Video Editing with Adobe Premiere Pro",
    category: "Video Editing",
    icon: Video,
    color: "from-purple-500 to-indigo-500",
    description: "Edit professional videos, reels, and social media content like a pro",
    duration: "10 Weeks",
    level: "All Levels",
    students: "600+",
    rating: 4.9,
    priceKsh: 18000,
    priceUsd: 144,
    modules: [
      "Premiere Pro Interface",
      "Cutting & Trimming Basics",
      "Color Correction & Grading",
      "Audio Editing & Mixing",
      "Motion Graphics & Effects",
      "Title & Text Animation",
      "Social Media Video Formats",
      "YouTube & TikTok Optimization"
    ],
    features: [
      "Edit real projects",
      "Stock footage library access",
      "Weekly assignments",
      "Export for all platforms",
      "Monetization strategies"
    ],
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "After Effects Animation",
    category: "Video Editing",
    icon: Video,
    color: "from-blue-500 to-cyan-500",
    description: "Create stunning motion graphics, animations, and visual effects",
    duration: "8 Weeks",
    level: "Intermediate to Advanced",
    students: "350+",
    rating: 4.7,
    priceKsh: 16000,
    priceUsd: 128,
    modules: [
      "Keyframe Animation",
      "Shape Layers & Masks",
      "Text Animation Presets",
      "Expressions & Scripting Basics",
      "2D Character Animation",
      "Logo Animation",
      "Social Media Motion Graphics",
      "Render Settings & Export"
    ],
    features: [
      "Animation templates",
      "Plugin recommendations",
      "Creative challenges",
      "Portfolio showcase",
      "Freelance opportunities"
    ],
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Canva Design Essentials",
    category: "Canva & Templates",
    icon: Sparkles,
    color: "from-green-500 to-emerald-500",
    description: "Design beautiful social media posts, presentations, and marketing materials with Canva",
    duration: "4 Weeks",
    level: "Beginner Friendly",
    students: "800+",
    rating: 4.9,
    priceKsh: 6000,
    priceUsd: 48,
    modules: [
      "Canva Interface & Tools",
      "Social Media Graphics",
      "Presentation Design",
      "Branding Kit Setup",
      "Template Customization",
      "Design Principles",
      "Content Calendar Planning",
      "Batch Creation Techniques"
    ],
    features: [
      "Canva Pro tips & tricks",
      "100+ custom templates",
      "Brand consistency guide",
      "Time-saving workflows",
      "Design automation"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Digital Marketing Consultation",
    category: "Marketing",
    icon: TrendingUp,
    color: "from-red-500 to-pink-500",
    description: "Learn proven strategies to grow your brand and business through digital marketing",
    duration: "6 Weeks",
    level: "All Levels",
    students: "550+",
    rating: 4.8,
    priceKsh: 20000,
    priceUsd: 160,
    modules: [
      "Digital Marketing Fundamentals",
      "Social Media Strategy",
      "Content Marketing",
      "Email Marketing Campaigns",
      "SEO Basics",
      "Paid Advertising (Facebook/Instagram)",
      "Analytics & Performance Tracking",
      "Building Your Marketing Plan"
    ],
    features: [
      "Marketing templates",
      "Campaign planning tools",
      "Case study analysis",
      "Business growth strategies",
      "Ongoing consultation"
    ],
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Complete Adobe Creative Suite",
    category: "Comprehensive",
    icon: Award,
    color: "from-violet-500 to-purple-500",
    description: "Master Photoshop, Illustrator, InDesign, Premiere Pro & After Effects in one complete program",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    students: "400+",
    rating: 5.0,
    priceKsh: 50000,
    priceUsd: 400,
    modules: [
      "Photoshop Complete",
      "Illustrator Complete",
      "InDesign for Print & Digital",
      "Premiere Pro Video Editing",
      "After Effects Animation",
      "Cross-Application Workflow",
      "Professional Portfolio Development",
      "Career Guidance & Job Prep"
    ],
    features: [
      "All-in-one training",
      "Industry certifications prep",
      "Job placement assistance",
      "Internship opportunities",
      "6 months mentorship"
    ],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop"
  },
  {
    id: 8,
    title: "Social Media Content Creation",
    category: "Marketing",
    icon: Sparkles,
    color: "from-fuchsia-500 to-pink-500",
    description: "Create engaging content for Instagram, TikTok, YouTube and grow your online presence",
    duration: "5 Weeks",
    level: "Beginner to Intermediate",
    students: "700+",
    rating: 4.8,
    priceKsh: 10000,
    priceUsd: 80,
    modules: [
      "Content Strategy Planning",
      "Photography for Social Media",
      "Reels & Short Video Creation",
      "Copywriting & Captions",
      "Hashtag Research",
      "Engagement & Community Building",
      "Analytics & Growth Hacking",
      "Monetization Strategies"
    ],
    features: [
      "Content calendar templates",
      "Viral content analysis",
      "Growth case studies",
      "Influencer collaboration tips",
      "Brand partnership guide"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  }
];

export default function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [currency, setCurrency] = useState("KSH");

  const categories = ["All", "Graphic Design", "Video Editing", "Canva & Templates", "Marketing", "Comprehensive"];

  const filteredCourses = filterCategory === "All" 
    ? coursesData 
    : coursesData.filter(course => course.category === filterCategory);

  return (
    <section id="courses" className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
      {/* Gradient Overlays - Matching Theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-0" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-500/30 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-pink-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-6 py-3 mb-6 backdrop-blur-xl">
              <GraduationCap className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold">Learn & Grow</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white">
              My <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Courses</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Transform your creative skills with expert-led courses in design, video editing, and digital marketing. Learn from industry professionals and build your portfolio.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all ${
                    filterCategory === cat
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Currency Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white/5 backdrop-blur-xl rounded-full p-1 shadow-md border border-white/10">
                <button
                  onClick={() => setCurrency("KSH")}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                    currency === "KSH"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  KSH
                </button>
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                    currency === "USD"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  USD
                </button>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredCourses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedCourse(course)}
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${course.color} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2`}>
                      <Icon className="w-4 h-4" />
                      {course.category}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-slate-200 mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-slate-200">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1 text-slate-200">
                        <Users className="w-4 h-4" />
                        {course.students}
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        {course.rating}
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="inline-block bg-purple-500/30 text-white border border-purple-400/50 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {course.level}
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-3xl font-black text-white">
                        {currency === "KSH" ? `KSH ${course.priceKsh.toLocaleString()}` : `$${course.priceUsd}`}
                      </div>
                      <p className="text-sm text-slate-300">
                        {currency === "KSH" ? `≈ $${course.priceUsd}` : `≈ KSH ${course.priceKsh.toLocaleString()}`}
                      </p>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg">
                      View Details
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedCourse(null)}>
          <div className="bg-slate-900/95 border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="relative h-64 md:h-80">
              <img 
                src={selectedCourse.image} 
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center transition-all shadow-lg border border-white/20"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="absolute bottom-4 left-4">
                <div className={`bg-gradient-to-r ${selectedCourse.color} text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 mb-3`}>
                  <selectedCourse.icon className="w-5 h-5" />
                  {selectedCourse.category}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                {selectedCourse.title}
              </h2>
              
              <p className="text-lg text-slate-100 mb-6">
                {selectedCourse.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-indigo-500/20 border border-indigo-400/50 rounded-xl p-4 text-center">
                  <Clock className="w-6 h-6 text-indigo-300 mx-auto mb-2" />
                  <p className="text-sm text-slate-200">Duration</p>
                  <p className="font-bold text-white">{selectedCourse.duration}</p>
                </div>
                <div className="bg-purple-500/20 border border-purple-400/50 rounded-xl p-4 text-center">
                  <BookOpen className="w-6 h-6 text-purple-300 mx-auto mb-2" />
                  <p className="text-sm text-slate-200">Level</p>
                  <p className="font-bold text-white text-sm">{selectedCourse.level}</p>
                </div>
                <div className="bg-pink-500/20 border border-pink-400/50 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-pink-300 mx-auto mb-2" />
                  <p className="text-sm text-slate-200">Students</p>
                  <p className="font-bold text-white">{selectedCourse.students}</p>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-400/50 rounded-xl p-4 text-center">
                  <Star className="w-6 h-6 text-yellow-300 mx-auto mb-2 fill-current" />
                  <p className="text-sm text-slate-200">Rating</p>
                  <p className="font-bold text-white">{selectedCourse.rating}/5.0</p>
                </div>
              </div>

              {/* Course Modules */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-purple-300" />
                  Course Modules
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedCourse.modules.map((module, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-100">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-300" />
                  What's Included
                </h3>
                <div className="space-y-3">
                  {selectedCourse.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-300 flex-shrink-0" />
                      <span className="text-slate-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enroll Button */}
              <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-white/30 rounded-2xl p-6 mb-6 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-slate-200 mb-1">Course Price</p>
                    <div className="text-4xl font-black text-white">
                      {currency === "KSH" ? `KSH ${selectedCourse.priceKsh.toLocaleString()}` : `${selectedCourse.priceUsd}`}
                    </div>
                    <p className="text-sm text-slate-200 mt-1">
                      {currency === "KSH" ? `≈ ${selectedCourse.priceUsd} USD` : `≈ KSH ${selectedCourse.priceKsh.toLocaleString()}`}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrency("KSH")}
                      className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                        currency === "KSH"
                          ? "bg-white/20 text-white shadow-md border border-white/30"
                          : "bg-transparent text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      KSH
                    </button>
                    <button
                      onClick={() => setCurrency("USD")}
                      className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${
                        currency === "USD"
                          ? "bg-white/20 text-white shadow-md border border-white/30"
                          : "bg-transparent text-slate-300 hover:bg-white/10"
                      }`}
                    >
                      USD
                    </button>
                  </div>
                </div>
                
                {/* Payment Terms */}
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    Payment Terms
                  </h4>
                  <p className="text-slate-100 text-sm leading-relaxed">
                    <span className="font-bold text-green-300">80% deposit required</span> to secure your spot ({currency === "KSH" ? `KSH ${Math.round(selectedCourse.priceKsh * 0.8).toLocaleString()}` : `${Math.round(selectedCourse.priceUsd * 0.8)}`}). Balance of 20% due before course completion.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => {
                  const depositAmount = currency === "KSH" 
                    ? `KSH ${Math.round(selectedCourse.priceKsh * 0.8).toLocaleString()}`
                    : `${Math.round(selectedCourse.priceUsd * 0.8)}`;
                  const totalAmount = currency === "KSH" 
                    ? `KSH ${selectedCourse.priceKsh.toLocaleString()}`
                    : `${selectedCourse.priceUsd}`;
                  const message = `Hi! I'm interested in enrolling for the *${selectedCourse.title}* course.\n\nCourse Price: ${totalAmount}\nDeposit Required (80%): ${depositAmount}\n\nPlease provide payment details and enrollment information.`;
                  window.open(`https://wa.me/254727492545?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Enroll Now via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}