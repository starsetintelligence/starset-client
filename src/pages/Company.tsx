import { Building2, Users, Globe2, Target, Award, Rocket, Heart, ShieldCheck, Linkedin, Twitter, Mail } from "lucide-react";
import Floating3DModel from "../components/Floating3DModel";
import { motion } from "motion/react";

export default function Company() {
  const team = [
    { name: "Arjun Sharma", role: "CEO & Founder", image: "https://picsum.photos/seed/arjun/400/400" },
    { name: "Priya Patel", role: "Head of Data Science", image: "https://picsum.photos/seed/priya/400/400" },
    { name: "Vikram Singh", role: "Chief Technology Officer", image: "https://picsum.photos/seed/vikram/400/400" },
    { name: "Ananya Iyer", role: "Head of Ethics & Compliance", image: "https://picsum.photos/seed/ananya/400/400" }
  ];

  const milestones = [
    { year: "2022", title: "Company Founded", desc: "Starset Intelligence was born with a vision to solve the Indian audio data gap." },
    { year: "2023", title: "10k Hour Milestone", desc: "Reached our first major milestone of 10,000 hours of high-fidelity Hindi audio." },
    { year: "2024", title: "Expansion to 12 Languages", desc: "Successfully scaled our data pipeline to cover 12 major Indian regional languages." },
    { year: "2025", title: "Series A Funding", desc: "Secured $15M in Series A funding to accelerate our global expansion." }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-[120px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
              Building the Voice of the Future
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              We are on a mission to democratize voice AI by providing the highest quality, ethically sourced audio datasets for the world's most diverse linguistic landscapes.
            </p>
          </div>
          <div className="w-full lg:w-1/2 h-[400px]">
            <Floating3DModel color="#3b82f6" />
          </div>
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

      {/* Mission & Vision */}
      <section className="py-24 px-6 md:px-[120px] bg-[#050505] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 tracking-tight">Our Mission & Vision</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Rocket className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">The Mission</h3>
                  <p className="text-white/50 leading-relaxed">To bridge the linguistic divide in AI by creating the world's most accurate and ethically sourced audio datasets for underrepresented languages.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                  <Globe2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">The Vision</h3>
                  <p className="text-white/50 leading-relaxed">A future where every person can interact with technology naturally in their own native language, regardless of dialect or accent.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[400px]">
            <Floating3DModel color="#a855f7" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-[120px] relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Our Core Values</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">These principles guide every decision we make, from data collection to client delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Every second of audio is meticulously validated and transcribed by native experts." },
              { icon: Heart, title: "Ethical Sourcing", desc: "100% consent-driven data collection with fair compensation for all contributors." },
              { icon: Users, title: "True Diversity", desc: "Capturing the real voice of India, including deep regional accents and code-switching." },
              { icon: Award, title: "Enterprise Ready", desc: "Scalable, secure, and fully compliant datasets ready for production AI models." }
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-black border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">{value.title}</h3>
                  <p className="text-white/50 leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 px-6 md:px-[120px] bg-[#050505] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 tracking-tight">Global Presence</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              While our heart is in India, our impact is global. We work with the world's leading AI labs and technology companies to bring nuanced voice interaction to every corner of the planet.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-2xl font-bold text-white mb-1">Bangalore</div>
                <div className="text-white/40 text-sm">Headquarters & Data Hub</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">San Francisco</div>
                <div className="text-white/40 text-sm">Strategic Partnerships</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">London</div>
                <div className="text-white/40 text-sm">European Operations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">Singapore</div>
                <div className="text-white/40 text-sm">APAC Data Center</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[400px]">
            <Floating3DModel color="#10b981" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:px-[120px] relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 tracking-tight">Join our mission</h2>
          <p className="text-white/60 text-lg mb-10 leading-relaxed">
            We're always looking for passionate individuals to join our team of linguists, data scientists, and engineers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-white/90 transition-colors">
              View Openings
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 text-white font-medium border border-white/10 hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

