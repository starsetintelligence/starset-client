import { 
  Mic, 
  Globe2, 
  AudioWaveform, 
  ShieldCheck, 
  Target, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Database,
  Headphones,
  Cpu
} from "lucide-react";
import { Link } from "react-router-dom";
import { datasets } from "../data/datasets";
import BackgroundParticles from "../components/BackgroundParticles";

const iconMap: Record<string, any> = {
  Mic,
  Globe2,
  AudioWaveform
};

export default function Home() {
  return (
    <>
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-[100vh] z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Gradient fade to black at the bottom of the hero */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* 3D Particles (Global Overlay) */}
      <BackgroundParticles />

      {/* Hero Content */}
      <div className="relative z-40 flex-1 flex flex-col items-center justify-center px-6 pt-[120px] md:pt-[160px] pb-[80px] md:pb-[102px] min-h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center gap-[32px] md:gap-[40px] w-full max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
            <span className="text-[11px] md:text-[13px] font-medium">
              <span className="text-white/60">Consent-based audio datasets from</span>
              <span className="text-white"> India</span>
            </span>
          </div>

          {/* Heading */}
          <h1 
            className="text-[36px] sm:text-[48px] md:text-[80px] font-medium leading-[1.1] md:leading-[1.05] max-w-[900px] tracking-tight"
            style={{
              backgroundImage: 'linear-gradient(144.5deg, #FFFFFF 28%, rgba(255, 255, 255, 0.4) 115%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Train Voice AI with Unmatched Accuracy
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] md:text-[20px] font-normal text-white/60 max-w-[720px] leading-relaxed">
            Powering seamless AI models with ethically sourced, high-fidelity audio data. Starset Intelligence provides the foundational datasets for creators building the next generation of localized, nuanced, and scalable voice AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            <Link to="/datasets" className="relative rounded-full p-[0.6px] bg-white/80 overflow-hidden group hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              <div className="relative bg-white rounded-full px-[32px] py-[14px] flex items-center justify-center">
                {/* Glow streak */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[4px] bg-gradient-to-b from-white to-transparent blur-[3px] rounded-full"></div>
                <span className="relative text-black text-[15px] font-medium z-10 flex items-center gap-2">
                  Explore Datasets
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link to="/contact" className="relative rounded-full p-[0.6px] bg-white/20 overflow-hidden group hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              <div className="relative bg-black rounded-full px-[32px] py-[14px] flex items-center justify-center">
                <span className="relative text-white text-[15px] font-medium z-10">
                  Download Sample
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Proof / Trusted By */}
      <section className="bg-black border-y border-white/10 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/40 text-[12px] font-semibold mb-8 uppercase tracking-[0.2em]">Powering voice AI for industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            <div className="text-xl font-bold tracking-tighter">ACME Corp</div>
            <div className="text-xl font-bold tracking-widest">NEXUS</div>
            <div className="text-xl font-bold italic">GlobalTech</div>
            <div className="text-xl font-bold font-serif">VoxSystems</div>
            <div className="text-xl font-bold">Aura AI</div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-black py-20 md:py-32 px-6 md:px-[120px] relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">The new standard for audio data</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              We don't just scrape data. We build highly curated, legally compliant datasets designed specifically for the complexities of Indian languages and dialects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:bg-[#111] hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] hover:border-white/20 transition-all duration-300 group hover:-translate-y-1.5 hover:scale-[1.02]">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                <ShieldCheck className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">100% Consent-Driven</h3>
              <p className="text-white/50 text-[15px] leading-relaxed">
                Every hour of audio is ethically sourced from opt-in participants with clear usage rights, ensuring your models are legally compliant and bias-aware.
              </p>
            </div>
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:bg-[#111] hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] hover:border-white/20 transition-all duration-300 group hover:-translate-y-1.5 hover:scale-[1.02]">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                <Target className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">99% Transcription Accuracy</h3>
              <p className="text-white/50 text-[15px] leading-relaxed">
                Our human-in-the-loop QA process guarantees pristine annotations, speaker diarization, and precise timestamping for flawless model training.
              </p>
            </div>
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:bg-[#111] hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] hover:border-white/20 transition-all duration-300 group hover:-translate-y-1.5 hover:scale-[1.02]">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                <Users className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Pan-India Diversity</h3>
              <p className="text-white/50 text-[15px] leading-relaxed">
                Capture the true voice of India with datasets spanning 22+ official languages, 100+ regional dialects, and diverse demographic profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Datasets Section */}
      <section id="datasets" className="relative z-20 bg-[#050505] border-t border-white/5 py-20 md:py-32 px-6 md:px-[120px]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-4 md:mb-6 tracking-tight">Featured Datasets</h2>
              <p className="text-white/60 max-w-xl text-base md:text-[18px] leading-relaxed">
                High-fidelity collections across multiple Indian languages, meticulously transcribed and validated for immediate AI training.
              </p>
            </div>
            <Link to="/datasets" className="text-white text-[15px] font-medium flex items-center gap-2 hover:text-white/80 transition-colors group pb-2">
              View Data Catalog
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {datasets.map((dataset) => {
              const Icon = iconMap[dataset.iconName];
              return (
                <Link to={`/dataset/${dataset.id}`} key={dataset.id} className="relative bg-black border border-white/10 rounded-2xl p-8 hover:border-white/40 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all duration-300 group hover:-translate-y-1.5 hover:scale-[1.02] flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:z-50">
                  {/* Subtle gradient background on hover */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Hover Tooltip Pop-up */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-4 -translate-y-full w-[320px] bg-[#111] border border-white/10 rounded-xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.8)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none">
                    <div className="text-white font-medium text-sm mb-3">Key Features</div>
                    <ul className="space-y-2">
                      {dataset.features.map((feature, idx) => (
                        <li key={idx} className="text-white/60 text-xs flex items-start gap-2 leading-relaxed">
                          <div className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {/* Triangle pointer */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 bg-[#111] border-b border-r border-white/10 transform rotate-45"></div>
                  </div>

                  {/* Primary Language Badge */}
                  {dataset.languages && dataset.languages.length > 0 && (
                    <div className="absolute top-8 right-8 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-white/60 group-hover:text-white/80 group-hover:border-white/20 transition-colors z-10">
                      <Globe2 className="w-3 h-3" />
                      {dataset.languages[0]}
                    </div>
                  )}

                  <div className="relative z-10 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 group-hover:border-white/30 transition-all duration-300">
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="relative z-10 text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors pr-24">{dataset.title}</h3>
                  <p className="relative z-10 text-white/50 text-[15px] mb-6 line-clamp-3 leading-relaxed flex-1">
                    {dataset.shortDescription}
                  </p>
                  <div className="relative z-10 flex flex-wrap gap-2 mb-8">
                    {dataset.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[11px] font-semibold tracking-wide uppercase border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="relative z-10 w-full py-3.5 rounded-xl bg-white/5 text-white text-[14px] font-medium border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-black py-20 md:py-32 px-6 md:px-[120px] relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Built for modern Voice AI</h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              Whether you're building a virtual assistant for rural India or a global transcription service, our data is structured to accelerate your model's time-to-market.
            </p>
            <ul className="space-y-6">
              {[
                { title: "Automatic Speech Recognition (ASR)", desc: "Train models to understand heavy accents and code-switching." },
                { title: "Text-to-Speech (TTS)", desc: "High-fidelity studio recordings for natural sounding synthetic voices." },
                { title: "Speaker Diarization", desc: "Multi-speaker conversational data with precise timestamping." },
                { title: "Sentiment Analysis", desc: "Emotion-tagged audio for advanced customer service AI." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-white/80" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-[16px] mb-1">{item.title}</h4>
                    <p className="text-white/50 text-[14px]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 relative overflow-hidden hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <pre className="text-[13px] text-white/70 font-mono overflow-x-auto">
                <code>{`{
  "dataset_id": "hi_conv_001",
  "audio_filepath": "data/wavs/hi_001.wav",
  "duration": 14.5,
  "metadata": {
    "language": "Hindi",
    "dialect": "Bhojpuri-influenced",
    "speaker_id": "SPK_042",
    "gender": "Female",
    "age_group": "25-34",
    "environment": "Indoor_Quiet"
  },
  "transcription": "हाँ, मैंने कल ही वो फाइल भेज दी थी।",
  "english_translation": "Yes, I sent that file yesterday itself.",
  "consent_verified": true
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Data Pipeline / Process */}
      <section className="bg-[#050505] py-20 md:py-32 px-6 md:px-[120px] relative z-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-12 md:mb-16 tracking-tight">Our Data Pipeline</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>
            
            {[
              { icon: Users, title: "1. Sourcing", desc: "Ethical collection from diverse demographics across India." },
              { icon: Headphones, title: "2. Processing", desc: "Noise reduction, normalization, and strict formatting." },
              { icon: Database, title: "3. Annotation", desc: "Human-in-the-loop transcription and metadata tagging." },
              { icon: Cpu, title: "4. Delivery", desc: "Ready-to-train JSON/WAV pairs delivered securely." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center p-6 rounded-2xl border border-transparent hover:border-white/10 hover:bg-[#0A0A0A] hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] transition-all duration-300 group hover:-translate-y-1.5 hover:scale-[1.02]">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black border border-white/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:border-white/40 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-white/50 text-[14px] leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-20 bg-gradient-to-b from-black to-[#0A0A0A] border-t border-white/10 py-20 md:py-32 px-6 md:px-[120px] text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-medium text-white mb-6 tracking-tight">Scale your AI with confidence.</h2>
          <p className="text-white/60 text-base md:text-xl mb-10 leading-relaxed">
            Join the leading AI labs building the future of voice technology with Starset Intelligence's premium datasets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="relative rounded-full p-[0.6px] bg-white overflow-hidden group hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              <div className="relative bg-white rounded-full px-[40px] py-[16px] flex items-center justify-center">
                <span className="relative text-black text-[16px] font-medium z-10">
                  Talk to an Expert
                </span>
              </div>
            </Link>
            <Link to="/solutions" className="relative rounded-full p-[0.6px] bg-white/20 overflow-hidden group hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
              <div className="relative bg-black rounded-full px-[40px] py-[16px] flex items-center justify-center">
                <span className="relative text-white text-[16px] font-medium z-10">
                  View Solutions
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
