import { Building2, Users, Globe2, Target } from "lucide-react";

export default function Company() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-[120px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Building the Voice of the Future
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
            We are on a mission to democratize voice AI by providing the highest quality, ethically sourced audio datasets for the world's most diverse linguistic landscapes.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 md:px-[120px] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Hours of Audio", value: "25,000+" },
              { label: "Unique Speakers", value: "100,000+" },
              { label: "Languages & Dialects", value: "40+" },
              { label: "States Covered", value: "28" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/50 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-[120px] bg-[#050505] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Uncompromising Quality", desc: "Every second of audio is meticulously validated and transcribed by native experts." },
              { icon: Users, title: "Ethical Sourcing", desc: "100% consent-driven data collection with fair compensation for all contributors." },
              { icon: Globe2, title: "True Diversity", desc: "Capturing the real voice of India, including deep regional accents and code-switching." },
              { icon: Building2, title: "Enterprise Ready", desc: "Scalable, secure, and fully compliant datasets ready for production AI models." }
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-black border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                  <p className="text-white/50 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
