import { CheckCircle2, MessageSquare, Zap } from "lucide-react";

export default function ContactSales() {
  return (
    <div className="w-full py-20 px-6 md:px-[120px] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Info */}
          <div className="pt-10">
            <h1 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight">
              Talk to our data experts
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-12">
              Whether you need access to our existing catalog or require custom data collection, our team is ready to help you scale your AI models.
            </p>

            <div className="space-y-8">
              {[
                { icon: Zap, title: "Custom Data Collection", desc: "Need something specific? We can deploy our network to collect custom audio tailored to your exact requirements." },
                { icon: CheckCircle2, title: "Enterprise Licensing", desc: "Flexible licensing options designed for scale, with full commercial rights and indemnification." },
                { icon: MessageSquare, title: "Dedicated Support", desc: "Get direct access to our data scientists and linguists to help integrate our datasets into your pipeline." }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{item.title}</h3>
                      <p className="text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
            <h2 className="text-2xl font-medium text-white mb-8">Get in touch</h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Work Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Company Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">How can we help?</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-white text-black font-medium rounded-xl px-4 py-4 hover:bg-white/90 transition-colors mt-4 text-lg">
                Submit Request
              </button>
              
              <p className="text-center text-white/40 text-xs mt-4">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
