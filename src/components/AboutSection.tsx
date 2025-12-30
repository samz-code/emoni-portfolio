import { useState, useEffect } from "react";
import { CheckCircle2, Code, Palette, Target, Heart, Search, Lightbulb, Rocket, CheckCheck, Award, TrendingUp, Users, Zap, Star, Briefcase, Coffee, Globe, Download, Database, MessageCircle, BarChart, DollarSign, Video, Computer, Wrench } from "lucide-react";
export default function AboutSection() {
  const profileImageUrl = "/assets/logos/profile-image.jpg"; // Replace with your actual profile image path
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("journey");

  const mySkills = [
    "Graphic Design",
    "Video Editing",
    "Document Design",
    "Web Development",
    "System Development",
    "Programming",
    "UI/UX Design",
    "Hardware Troubleshooting",
    "Computer Repair",
    "Digital Marketing",
    "Data Management",
    "Database Creation",
    "Data Analysis",
    "Communication Skills",
    "Analytical Skills"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % mySkills.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { 
      title: "Graphic Design", 
      detail: "Logos, Posters, Flyers, Banners, Branding Identity, Templates",
      icon: Palette,
      color: "from-pink-500 to-rose-500"
    },
    { 
      title: "Video Editing", 
      detail: "Professional Video Production & Post-Production",
      icon: Video,
      color: "from-purple-500 to-violet-500"
    },
    { 
      title: "Document Design", 
      detail: "Professional Reports, Proposals, Presentations",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Web Development", 
      detail: "Responsive Websites & Web Applications",
      icon: Globe,
      color: "from-green-500 to-emerald-500"
    },
    { 
      title: "Payment integration Development", 
      detail: "API Payment Gateway Integration",
      icon: DollarSign,
      color: "from-indigo-500 to-blue-500"
    },
    { 
      title: "Programming", 
      detail: "Python, JavaScript, PHP, and More",
      icon: Code,
      color: "from-yellow-500 to-orange-500"
    },
    { 
      title: "UI/UX Design", 
      detail: "User Interface & Experience Design",
      icon: Computer,
      color: "from-pink-500 to-purple-500"
    },
    { 
      title: "Hardware Troubleshooting", 
      detail: "Computer Diagnostics & Problem Solving",
      icon: Zap,
      color: "from-red-500 to-orange-500"
    },
    { 
      title: "Computer Repair", 
      detail: "Hardware Maintenance & Upgrades",
      icon: Wrench,
      color: "from-cyan-500 to-blue-500"
    },
    { 
      title: "Digital Marketing", 
      detail: "Social Media Content, Ads, Campaigns",
      icon: TrendingUp,
      color: "from-violet-500 to-purple-500"
    },
    { 
      title: "Data Management", 
      detail: "Organizing and Managing Complex Data",
      icon: Database,
      color: "from-blue-500 to-indigo-500"
    },
    { 
      title: "Database Creation", 
      detail: "Designing and Building Database Systems",
      icon: Database,
      color: "from-green-500 to-teal-500"
    },
    { 
      title: "Data Analysis", 
      detail: "Interpreting Data for Informed Decisions",
      icon: CheckCircle2,
      color: "from-orange-500 to-red-500"
    },
    { 
      title: "Communication Skills", 
      detail: "Clear and Effective Client Communication",
      icon: MessageCircle,
      color: "from-purple-500 to-pink-500"
    },
    { 
      title: "Analytical Skills", 
      detail: "Problem-Solving and Critical Thinking",
      icon: BarChart,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const values = [
    { icon: Palette, text: "Creativity", color: "from-pink-500 to-rose-500" },
    { icon: Target, text: "Professionalism", color: "from-blue-500 to-cyan-500" },
    { icon: Heart, text: "Client-First Approach", color: "from-red-500 to-pink-500" },
    { icon: Zap, text: "Innovation", color: "from-yellow-500 to-orange-500" }
  ];

  const problemSolvingSteps = [
    {
      icon: Search,
      title: "1. Analysis",
      description: "I dive deep into understanding your brand, goals, and target audience to identify the core challenge.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "2. Strategy",
      description: "I develop a creative strategy tailored to your needs, combining design thinking with technical expertise.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "3. Execution",
      description: "I bring the vision to life with precision, creating designs and solutions that exceed expectations.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CheckCheck,
      title: "4. Delivery",
      description: "I ensure quality results on time, with ongoing support and revisions until you're 100% satisfied.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const journey = [
    {
      year: "2020",
      title: "Started Freelancing",
      description: "Began my journey in graphic design, serving local businesses and individuals.",
      icon: Rocket
    },
    {
      year: "2021",
      title: "Expanded Services",
      description: "Added video editing and document design to my portfolio, reaching 100+ clients.",
      icon: TrendingUp
    },
    {
      year: "2022",
      title: "Web Development",
      description: "Entered the world of web development and programming, completing my first web applications.",
      icon: Code
    },
    {
      year: "2023-2024",
      title: "Full-Stack Professional",
      description: "Became a complete digital solutions provider with 1000+ projects and 500+ satisfied clients worldwide.",
      icon: Award
    }
  ];

  const handleDownloadResume = () => {
    // Replace this with your actual resume file path
    const resumePath = "/path/to/your/resume.pdf";
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = "Samuel_Emoni_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-hidden relative">
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
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 mb-4 md:mb-6 backdrop-blur-xl">
              <Coffee className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-semibold text-sm md:text-base">Get to Know Me</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-white px-4">
              About <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Samuel A. Emoni</span>
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto px-4">
              The Creative Mind & Technical Expert Behind Your Digital Success
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-12 md:mb-20 lg:mb-24">
            {/* Profile Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square rounded-2xl md:rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-1 overflow-hidden backdrop-blur-xl border border-white/20 shadow-2xl shadow-purple-500/20">
                <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden group">
                  <img
                    src={profileImageUrl}
                    alt="Samuel A. Emoni"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  
                  {/* Animated Skill Display */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <div className="bg-gradient-to-r from-indigo-600/95 via-purple-600/95 to-pink-600/95 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 transform transition-all duration-300 hover:scale-105 border border-white/20 shadow-2xl">
                      <h3 className="text-lg md:text-2xl font-black mb-2 md:mb-3 text-white text-center">Samuel A. Emoni</h3>
                      <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                        <p className="text-xs md:text-sm text-white/90 font-semibold">Currently Expert in</p>
                      </div>
                      <div className="bg-white/20 rounded-lg md:rounded-xl p-3 md:p-4 text-center min-h-[50px] md:min-h-[70px] flex items-center justify-center backdrop-blur-sm">
                        <p className="text-base md:text-xl font-black text-white animate-pulse">
                          {mySkills[currentSkillIndex]}
                        </p>
                      </div>
                      <div className="flex justify-center gap-1 md:gap-1.5 mt-3 md:mt-4">
                        {mySkills.map((_, index) => (
                          <div
                            key={index}
                            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                              index === currentSkillIndex 
                                ? 'bg-white w-6 md:w-8 shadow-lg shadow-white/50' 
                                : 'bg-white/40 w-1.5 md:w-2'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-indigo-500/30 rounded-full blur-2xl md:blur-3xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-pink-500/30 rounded-full blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Content */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all shadow-xl">
                <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                  Hi! I'm <strong className="text-indigo-400">Samuel A. Emoni</strong>, a Computer Science Graduate and multi-talented professional with over <strong className="text-purple-400">4 years of experience in creative design</strong> and more than <strong className="text-pink-400">3 years in programming and system development</strong>.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed mt-4">
                  I specialize in <strong className="text-cyan-400">graphic design, video editing, professional document design, web and system development, programming, hardware troubleshooting, and computer repair</strong>. I have successfully completed over <strong className="text-yellow-400">1000 freelance projects</strong> for clients worldwide.
                </p>
              </div>

              {/* Download Resume Button */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30 rounded-xl md:rounded-2xl p-6 md:p-8 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white mb-2">Download My Resume</h4>
                    <p className="text-sm md:text-base text-slate-300">Complete professional background & qualifications</p>
                  </div>
                  <button
                    onClick={handleDownloadResume}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center gap-2 md:gap-3 transform hover:scale-105 transition-all shadow-2xl shadow-green-500/50 group"
                  >
                    <Download className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
                    <span className="text-sm md:text-base">Download Resume</span>
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 backdrop-blur-xl border border-indigo-500/30 rounded-xl md:rounded-2xl p-5 md:p-6 hover:from-indigo-500/20 hover:to-blue-500/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Target className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                    </div>
                    <h4 className="font-bold text-lg md:text-xl text-white">Mission</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    To deliver high-quality, creative, and affordable design and web solutions that help individuals and businesses grow their brands.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-xl md:rounded-2xl p-5 md:p-6 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Rocket className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                    </div>
                    <h4 className="font-bold text-lg md:text-xl text-white">Vision</h4>
                  </div>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    To be a trusted partner for brands looking to stand out through impactful designs and modern digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Tabs */}
          <div className="mb-12 md:mb-20 lg:mb-24">
            <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
              <button
                onClick={() => setActiveTab("journey")}
                className={`px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-lg transition-all ${
                  activeTab === "journey"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl shadow-purple-500/50 scale-105"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                My Journey
              </button>
              <button
                onClick={() => setActiveTab("values")}
                className={`px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl font-bold text-sm md:text-lg transition-all ${
                  activeTab === "values"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl shadow-purple-500/50 scale-105"
                    : "bg-white/5 text-slate-400 hover:bg-white/10"
                }`}
              >
                Core Values
              </button>
            </div>

            {activeTab === "journey" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {journey.map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-white/30 transition-all h-full">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-indigo-400 mb-2">{item.year}</div>
                      <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{item.title}</h4>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {values.map((value, i) => (
                  <div key={i} className="relative group">
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 h-full flex flex-col items-center text-center">
                      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                        <value.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>
                      <h4 className="text-lg md:text-2xl font-bold text-white">{value.text}</h4>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Problem Solving Process */}
          <div className="mb-12 md:mb-20 lg:mb-24">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-center text-white px-4">
              How I <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Solve Your Problems</span>
            </h3>
            <p className="text-center text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto text-sm md:text-base lg:text-lg px-4">
              From initial analysis to final delivery, I follow a proven process that ensures your project succeeds every single time.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {problemSolvingSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-xl md:blur-2xl rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:bg-white/10 hover:border-white/30 transition-all hover:-translate-y-2 h-full shadow-xl">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-2xl`}>
                      <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white animate-pulse" />
                    </div>
                    <h4 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-white">{step.title}</h4>
                    <p className="text-sm md:text-base text-slate-300 leading-relaxed">{step.description}</p>
                  </div>
                  {index < problemSolvingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 md:-right-4 w-6 md:w-8 h-1 bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-8 md:mb-16">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-center text-white px-4">
              Key <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Skills & Expertise</span>
            </h3>
            <p className="text-center text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto text-sm md:text-base lg:text-lg px-4">
              A comprehensive suite of services to bring your digital vision to life
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-lg md:blur-xl rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-all" />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 hover:-translate-y-1 duration-300">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all shadow-xl`}>
                        <skill.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">{skill.title}</h4>
                        <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{skill.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}