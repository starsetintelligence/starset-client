import { 
  Mic, 
  MessageSquare, 
  BrainCircuit, 
  Smile, 
  Quote, 
  ArrowRight,
  Car,
  Headset,
  Home,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  HeartHandshake
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Solutions() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-[120px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Solutions for Modern Voice AI
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
            From conversational agents to emotion-aware customer service bots, discover how Starset Intelligence's high-fidelity datasets accelerate your AI development across every major speech discipline.
          </p>
          <button className="relative rounded-full p-[0.6px] bg-white overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="relative bg-white rounded-full px-[32px] py-[14px] flex items-center justify-center">
              <span className="relative text-black text-[15px] font-medium z-10 flex items-center gap-2">
                Discuss Your Use Case
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* Core Applications */}
      <section className="py-24 px-6 md:px-[120px] bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Core AI Applications</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Our datasets are meticulously structured to train, test, and validate models across the four pillars of voice technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ASR */}
            <div className="bg-black border border-white/10 rounded-3xl p-10 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <Mic className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Automatic Speech Recognition (ASR)</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Train robust ASR models capable of understanding heavy regional accents, rapid speech rates, and complex code-switching (e.g., Hinglish). Our data includes varied acoustic environments to ensure your model performs flawlessly in the real world.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Spontaneous & scripted speech</li>
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> 100+ regional Indian dialects</li>
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Background noise variations</li>
              </ul>
            </div>

            {/* TTS */}
            <div className="bg-black border border-white/10 rounded-3xl p-10 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Text-to-Speech (TTS)</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Build natural-sounding, expressive synthetic voices. Our TTS datasets feature high-fidelity studio recordings (48kHz) from professional voice actors, ensuring pristine audio quality free from artifacts or clipping.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Studio-grade 48kHz FLAC</li>
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Phonetically balanced scripts</li>
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Emotional prosody variations</li>
              </ul>
            </div>

            {/* NLP */}
            <div className="bg-black border border-white/10 rounded-3xl p-10 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <BrainCircuit className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Natural Language Processing (NLP)</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Bridge the gap between audio and meaning. Our datasets come with rich, human-verified transcriptions, intent classifications, and entity extraction tags to train LLMs and conversational agents on spoken Indian languages.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Intent & slot tagging</li>
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Named Entity Recognition (NER)</li>
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Semantic similarity pairs</li>
              </ul>
            </div>

            {/* Sentiment Analysis */}
            <div className="bg-black border border-white/10 rounded-3xl p-10 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                <Smile className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Sentiment & Emotion Analysis</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Enable your AI to understand *how* things are said, not just *what* is said. We provide audio datasets meticulously tagged with emotional states (anger, joy, frustration) and overall sentiment scores.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> 7-class emotion tagging</li>
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Call center escalation markers</li>
                <li className="flex items-center gap-3 text-white/80"><div className="w-1.5 h-1.5 rounded-full bg-white/40"></div> Tonal & acoustic feature metadata</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-32 px-6 md:px-[120px] bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-16 tracking-tight text-center">Industry Use Cases</h2>
          
          <div className="space-y-8">
            {/* Use Case 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Headset className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">Customer Service & Call Centers</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-4">
                  Automate QA and build intelligent IVR systems. By training on our <Link to="/dataset/indian-english-call-center" className="text-white underline decoration-white/30 hover:decoration-white">Indian English Call Center</Link> dataset, enterprise clients have reduced false rejection rates by 40% when dealing with diverse regional accents over low-bandwidth telephony channels (8kHz).
                </p>
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-center bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Car className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">Automotive & In-Cabin Assistants</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-4">
                  Build wake-word engines that work reliably with the windows down. Our <Link to="/dataset/multilingual-commands" className="text-white underline decoration-white/30 hover:decoration-white">Multilingual Commands</Link> dataset includes simulated far-field audio and background noise (traffic, AC, music) to ensure in-car assistants respond accurately across 12 Indian languages.
                </p>
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                <Home className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white mb-3">Smart Home & IoT</h3>
                <p className="text-white/60 text-lg leading-relaxed mb-4">
                  Enable seamless control of smart devices for the next billion users. We provide phonetically balanced command datasets that help smart speakers understand intent, even when users code-switch between Hindi and English in the same sentence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Starset Intelligence? */}
      <section className="py-32 px-6 md:px-[120px] bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Why Choose Starset Intelligence?</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We don't just scrape data. We build high-fidelity, ethically sourced datasets designed specifically to solve the hardest problems in voice AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Differentiator 1 */}
            <div className="bg-black border border-white/10 rounded-3xl p-10 hover:border-white/30 transition-all duration-500 group hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)]">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                <ShieldCheck className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Uncompromising Quality</h3>
              <p className="text-white/60 leading-relaxed">
                Every second of audio is meticulously validated and transcribed by native experts. Our rigorous QA process ensures your models train on clean, accurate data, drastically reducing Word Error Rates (WER).
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="bg-black border border-white/10 rounded-3xl p-10 hover:border-white/30 transition-all duration-500 group hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)]">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                <HeartHandshake className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">100% Ethical Sourcing</h3>
              <p className="text-white/60 leading-relaxed">
                We believe in fair AI. All our datasets are built through consent-driven collection with fair compensation for all contributors. Train your models with complete peace of mind and full commercial rights.
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="bg-black border border-white/10 rounded-3xl p-10 hover:border-white/30 transition-all duration-500 group hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)]">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
                <MapPin className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">Deep Regional Expertise</h3>
              <p className="text-white/60 leading-relaxed">
                We capture the true voice of the subcontinent. Our data encompasses complex regional accents, hyper-local dialects, and the natural code-switching patterns (like Hinglish) that generic datasets miss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-[120px] bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-16 tracking-tight text-center">Trusted by AI Pioneers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-white/10 rounded-3xl p-10 relative hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <Quote className="w-12 h-12 text-white/10 absolute top-10 right-10" />
              <p className="text-xl text-white/80 leading-relaxed mb-8 relative z-10">
                "Finding high-quality, consent-driven audio data for regional Indian languages was our biggest bottleneck. Starset Intelligence's conversational datasets allowed us to improve our Marathi and Bengali ASR models' accuracy by over 24% in just two months."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20"></div>
                <div>
                  <div className="text-white font-medium">Dr. Ananya Sharma</div>
                  <div className="text-white/50 text-sm">Head of Voice AI, GlobalTech</div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-white/10 rounded-3xl p-10 relative hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
              <Quote className="w-12 h-12 text-white/10 absolute top-10 right-10" />
              <p className="text-xl text-white/80 leading-relaxed mb-8 relative z-10">
                "The metadata provided by Starset is unparalleled. Having precise speaker diarization and emotion tags baked into the JSON files saved our data science team hundreds of hours of manual annotation. It's truly ready-to-train data."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20"></div>
                <div>
                  <div className="text-white font-medium">Rahul Desai</div>
                  <div className="text-white/50 text-sm">Lead ML Engineer, VoxSystems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Contact Section */}
      <section className="py-32 px-6 md:px-[120px] bg-black border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left: Info */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">Need a Custom Solution?</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Can't find exactly what you're looking for? Our team can build custom audio datasets tailored to your specific acoustic environments, domain terminology, and demographic requirements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Email Us</div>
                    <div className="text-white font-medium">enterprise@starsetintelligence.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Call Us</div>
                    <div className="text-white font-medium">+91 800 123 4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">Headquarters</div>
                    <div className="text-white font-medium">Bangalore, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-1/2 w-full">
              <form className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-sm font-medium">First Name</label>
                    <input type="text" className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="John" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/70 text-sm font-medium">Last Name</label>
                    <input type="text" className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/70 text-sm font-medium">Work Email</label>
                  <input type="email" className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="john@company.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/70 text-sm font-medium">Company</label>
                  <input type="text" className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors" placeholder="Acme Corp" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/70 text-sm font-medium">Tell us about your use case</label>
                  <textarea rows={4} className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none" placeholder="We are building an ASR model for..."></textarea>
                </div>
                <button type="button" className="w-full py-4 rounded-xl bg-white text-black text-[15px] font-medium hover:bg-white/90 transition-colors mt-2">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
