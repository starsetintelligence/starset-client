import { BookOpen, FileText, Video, ArrowRight, Download, Search, PlayCircle, ExternalLink, Newspaper, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Floating3DModel from "../components/Floating3DModel";
import { useState } from "react";

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState("");

  const resources = [
    {
      type: "Guide",
      icon: BookOpen,
      title: "Training ASR Models on Indian English",
      desc: "Learn the best practices for handling code-switching and heavy regional accents in your acoustic models.",
      date: "Oct 12, 2026",
      category: "Technical"
    },
    {
      type: "Case Study",
      icon: FileText,
      title: "How FinTechX Reduced Word Error Rate by 40%",
      desc: "A deep dive into how our Call Center dataset helped a leading bank improve their voice bot accuracy.",
      date: "Sep 28, 2026",
      category: "Business"
    },
    {
      type: "Webinar",
      icon: Video,
      title: "The Future of Voice AI in the Subcontinent",
      desc: "Join our lead researchers as they discuss the challenges and breakthroughs in multilingual TTS.",
      date: "Sep 15, 2026",
      category: "Research"
    },
    {
      type: "Documentation",
      icon: FileText,
      title: "Understanding Our JSON Metadata Schema",
      desc: "A comprehensive guide to the rich metadata, including emotion tags and diarization, included with our datasets.",
      date: "Aug 30, 2026",
      category: "Technical"
    }
  ];

  const filteredResources = resources.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-[120px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
              Resources & Insights
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Explore our latest research, guides, and documentation to help you build better voice AI models.
            </p>
            <div className="relative max-w-md mx-auto lg:mx-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[400px]">
            <Floating3DModel color="#a855f7" />
          </div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-20 px-6 md:px-[120px] bg-[#050505] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-medium text-white tracking-tight">Latest Articles</h2>
            <div className="flex gap-4">
              <button className="text-sm text-white/60 hover:text-white transition-colors">All</button>
              <button className="text-sm text-white/60 hover:text-white transition-colors">Technical</button>
              <button className="text-sm text-white/60 hover:text-white transition-colors">Business</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <div key={i} className="bg-black border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 group hover:-translate-y-2 hover:scale-[1.02] cursor-pointer flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70">
                      {resource.type}
                    </span>
                    <span className="text-white/40 text-sm">{resource.date}</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-purple-400 transition-colors">{resource.title}</h3>
                  <p className="text-white/50 leading-relaxed mb-8 flex-1">{resource.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-purple-400 transition-colors mt-auto">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Whitepapers & Case Studies */}
      <section className="py-24 px-6 md:px-[120px] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 tracking-tight">Whitepapers & Case Studies</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-12">
              Deep dives into the technical challenges and business outcomes of implementing voice AI at scale. Our research team regularly publishes findings on linguistic diversity and model performance.
            </p>
            <div className="space-y-6">
              {[
                { title: "The State of Voice AI in India 2026", size: "4.2 MB" },
                { title: "Ethical Data Collection Framework", size: "2.8 MB" },
                { title: "Benchmarking ASR Across 15 Dialects", size: "5.1 MB" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                      <FileText className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium group-hover:text-purple-400 transition-colors">{item.title}</div>
                      <div className="text-white/40 text-xs">{item.size} • PDF</div>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[400px]">
            <Floating3DModel color="#a855f7" />
          </div>
        </div>
      </section>

      {/* Developer Documentation Quick Links */}
      <section className="py-24 px-6 md:px-[120px] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-[32px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Developer Documentation</h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Everything you need to integrate our datasets into your pipeline. From API references to sample code and schema definitions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Newspaper, title: "API Reference" },
                  { icon: Lightbulb, title: "Quickstart Guide" },
                  { icon: FileText, title: "Schema Definitions" },
                  { icon: BookOpen, title: "Best Practices" }
                ].map((link, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-pointer group">
                    <link.icon className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium group-hover:text-white transition-colors">{link.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/3 h-[300px]">
              <Floating3DModel color="#8b5cf6" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 px-6 md:px-[120px] bg-[#050505] border-t border-white/5 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Stay Updated</h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            Get the latest research, dataset releases, and industry insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
            />
            <button className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-white/30 text-xs mt-4">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
        </div>
      </section>
    </div>
  );
}

