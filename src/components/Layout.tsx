import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Background3D from "./Background3D";
import FooterWaveParticles from "./FooterWaveParticles";
import { motion, AnimatePresence } from "motion/react";

export default function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (location.hash) {
      // Small timeout to ensure the new page has rendered before scrolling
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="relative min-h-screen bg-black font-sans text-white overflow-x-hidden selection:bg-white/30 flex flex-col">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Background3D />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex items-center justify-between gap-8 px-6 md:px-12 lg:px-[120px] py-[20px] backdrop-blur-md bg-black/40 sticky top-0 border-b border-white/5 z-50">
          {/* Logo */}
          <div className="flex-1 shrink-0">
            <Link to="/" className="inline-flex items-center gap-2 cursor-pointer">
              <div className="text-white font-bold text-lg md:text-xl tracking-wide flex items-center">
                STARSET<span className="font-light text-white/70">INTELLIGENCE</span>
              </div>
            </Link>
          </div>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-[40px] shrink-0">
            {[
              { name: "Datasets", path: "/datasets" },
              { name: "Solutions", path: "/solutions" },
              { name: "Company", path: "/company" },
              { name: "Resources", path: "/resources" }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center gap-1.5 text-[14px] font-medium text-white/80 hover:text-white transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Nav CTA (Desktop) */}
          <div className="hidden md:flex items-center justify-end gap-6 flex-1 shrink-0">
            <Link to="/login" className="text-[14px] font-medium text-white/80 hover:text-white transition-colors">
              Log in
            </Link>
            <Link to="/contact" className="relative rounded-full p-[0.6px] bg-white/20 overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative bg-black rounded-full px-[24px] py-[9px] flex items-center justify-center">
                {/* Glow streak */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[4px] bg-gradient-to-b from-white/60 to-transparent blur-[3px] rounded-full"></div>
                <span className="relative text-white text-[14px] font-medium z-10">
                  Contact Sales
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-[60] md:hidden bg-black/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-6">
                {[
                  { name: "Datasets", path: "/datasets" },
                  { name: "Solutions", path: "/solutions" },
                  { name: "Company", path: "/company" },
                  { name: "Resources", path: "/resources" }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="h-[1px] bg-white/10 w-full" />
              
              <div className="flex flex-col gap-4">
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-medium text-white/80 hover:text-white transition-colors"
                >
                  Log in
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative rounded-full p-[0.6px] bg-white/20 overflow-hidden group w-full"
                >
                  <div className="relative bg-white rounded-full px-[24px] py-[14px] flex items-center justify-center">
                    <span className="relative text-black text-[16px] font-medium z-10">
                      Contact Sales
                    </span>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      <main className="flex-1 flex flex-col relative z-40">
        <Outlet />
      </main>

      {/* Expanded Footer */}
      <footer className="relative z-40 bg-black border-t border-white/10 pt-20 pb-10 px-6 md:px-[120px] overflow-hidden">
        <FooterWaveParticles />
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2">
              <div className="text-white font-bold text-xl tracking-wide flex items-center mb-6">
                STARSET<span className="font-light text-white/70">INTELLIGENCE</span>
              </div>
              <p className="text-white/50 text-[14px] leading-relaxed max-w-sm mb-6">
                High-accuracy, consent-based audio datasets powering the next generation of voice AI models for the Indian subcontinent and beyond.
              </p>
              <div className="flex items-center gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors backdrop-blur-sm">
                  <span className="text-white/70 text-xs">X</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors backdrop-blur-sm">
                  <span className="text-white/70 text-xs">IN</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium text-[15px] mb-6">Datasets</h4>
              <ul className="space-y-4">
                <li><Link to="/dataset/hindi-conversational" className="text-white/50 hover:text-white text-[14px] transition-colors">Hindi Conversational</Link></li>
                <li><Link to="/dataset/multilingual-commands" className="text-white/50 hover:text-white text-[14px] transition-colors">Multilingual Commands</Link></li>
                <li><Link to="/dataset/indian-english-call-center" className="text-white/50 hover:text-white text-[14px] transition-colors">Call Center Audio</Link></li>
                <li><Link to="/datasets" className="text-white/50 hover:text-white text-[14px] transition-colors">Custom Collection</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium text-[15px] mb-6">Company</h4>
              <ul className="space-y-4">
                <li><Link to="/company" className="text-white/50 hover:text-white text-[14px] transition-colors">About Us</Link></li>
                <li><Link to="/company" className="text-white/50 hover:text-white text-[14px] transition-colors">Careers</Link></li>
                <li><Link to="/resources" className="text-white/50 hover:text-white text-[14px] transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="text-white/50 hover:text-white text-[14px] transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium text-[15px] mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white/50 hover:text-white text-[14px] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/50 hover:text-white text-[14px] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/50 hover:text-white text-[14px] transition-colors">Data Ethics</a></li>
                <li><a href="#" className="text-white/50 hover:text-white text-[14px] transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/40 text-[13px]">
              © 2026 Starset Intelligence. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-[13px] text-white/40">
              <Globe2 className="w-4 h-4" />
              <span>Based in India, serving globally.</span>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
