import { BookOpen, FileText, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Resources() {
  const resources = [
    {
      type: "Guide",
      icon: BookOpen,
      title: "Training ASR Models on Indian English",
      desc: "Learn the best practices for handling code-switching and heavy regional accents in your acoustic models.",
      date: "Oct 12, 2026"
    },
    {
      type: "Case Study",
      icon: FileText,
      title: "How FinTechX Reduced Word Error Rate by 40%",
      desc: "A deep dive into how our Call Center dataset helped a leading bank improve their voice bot accuracy.",
      date: "Sep 28, 2026"
    },
    {
      type: "Webinar",
      icon: Video,
      title: "The Future of Voice AI in the Subcontinent",
      desc: "Join our lead researchers as they discuss the challenges and breakthroughs in multilingual TTS.",
      date: "Sep 15, 2026"
    },
    {
      type: "Documentation",
      icon: FileText,
      title: "Understanding Our JSON Metadata Schema",
      desc: "A comprehensive guide to the rich metadata, including emotion tags and diarization, included with our datasets.",
      date: "Aug 30, 2026"
    }
  ];

  return (
    <div className="w-full">
      <section className="relative pt-32 pb-20 px-6 md:px-[120px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Resources & Insights
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
            Explore our latest research, guides, and documentation to help you build better voice AI models.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 md:px-[120px] bg-[#050505] border-t border-white/5 min-h-[50vh] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, i) => {
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
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors">{resource.title}</h3>
                  <p className="text-white/50 leading-relaxed mb-8 flex-1">{resource.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-blue-400 transition-colors mt-auto">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
