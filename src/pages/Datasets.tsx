import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { datasets } from "../data/datasets";
import { Mic, Globe2, AudioWaveform, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const iconMap: Record<string, any> = {
  Mic,
  Globe2,
  AudioWaveform
};

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Datasets() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const ITEMS_PER_PAGE = 6;
  
  const categories = ["All", "ASR", "TTS", "NLP", "Wake Word"];

  const filteredDatasets = activeCategory === "All" 
    ? datasets 
    : datasets.filter(d => d.category === activeCategory);

  const totalPages = Math.ceil(filteredDatasets.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDatasets = filteredDatasets.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-[120px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[200px] md:h-[400px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-medium text-white mb-6 tracking-tight">
            Our Audio Datasets
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-10">
            Explore our comprehensive catalog of high-fidelity, consent-driven audio datasets designed specifically for the complexities of Indian languages and dialects.
          </p>
        </div>
      </section>

      {/* Datasets Grid */}
      <section className="relative z-20 py-12 px-6 md:px-[120px] bg-[#050505] border-t border-white/5 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter */}
          <div className="flex items-center justify-start md:justify-center gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentDatasets.map((dataset) => {
              const Icon = iconMap[dataset.iconName];
              return (
                <TiltCard key={dataset.id} className="group h-full">
                  <Link 
                    to={`/dataset/${dataset.id}`} 
                    aria-label={`View details for ${dataset.title}`}
                    className="relative h-full bg-black border border-white/10 rounded-2xl p-8 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black hover:z-50 overflow-hidden"
                  >
                    {/* Subtle gradient background on hover */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

                    <div className="relative z-10 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="relative z-10 text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors pr-24">{dataset.title}</h3>
                    <p className="relative z-10 text-white/50 text-[15px] mb-6 line-clamp-3 leading-relaxed flex-1">
                      {dataset.shortDescription}
                    </p>
                    <div className="relative z-10 flex flex-wrap gap-2 mb-8">
                      {dataset.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[11px] font-semibold tracking-wide uppercase border border-blue-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="relative z-10 w-full py-3.5 rounded-xl bg-white/5 text-white text-[14px] font-medium border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </Link>
                </TiltCard>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav aria-label="Pagination" className="flex justify-center items-center gap-2 mt-16">
              <button
                onClick={() => {
                  setCurrentPage(p => Math.max(1, p - 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    aria-label={`Page ${i + 1}`}
                    aria-current={currentPage === i + 1 ? "page" : undefined}
                    className={`w-10 h-10 rounded-lg border flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      currentPage === i + 1 
                        ? 'bg-white text-black border-white' 
                        : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  setCurrentPage(p => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </nav>
          )}
        </div>
      </section>
    </div>
  );
}
