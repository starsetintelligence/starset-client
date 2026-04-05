import { useParams, Link } from "react-router-dom";
import { datasets } from "../data/datasets";
import { ArrowLeft, CheckCircle2, Mic, Globe2, AudioWaveform } from "lucide-react";

const iconMap: Record<string, any> = {
  Mic,
  Globe2,
  AudioWaveform
};

export default function DatasetDetail() {
  const { id } = useParams();
  const dataset = datasets.find(d => d.id === id);

  if (!dataset) {
    return <div className="p-20 text-center text-white">Dataset not found</div>;
  }

  const Icon = iconMap[dataset.iconName];

  return (
    <div className="pt-24 md:pt-32 pb-20 px-6 md:px-[120px] max-w-7xl mx-auto w-full">
      <Link to="/datasets" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 md:mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Datasets
      </Link>
      
      {/* Hero */}
      <div className="flex flex-col lg:flex-row gap-12 items-start mb-20">
        <div className="flex-1">
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-6xl font-medium text-white mb-6 tracking-tight">{dataset.title}</h1>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">{dataset.fullDescription}</p>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {dataset.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 text-white/80 text-xs md:text-sm font-medium border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Quick Metrics Card */}
        <div className="w-full lg:w-[400px] bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 shrink-0">
          <h3 className="text-lg font-medium text-white mb-6">Dataset Specifications</h3>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
            <div>
              <div className="text-white/40 text-xs md:sm mb-1">Total Volume</div>
              <div className="text-white font-medium text-base md:text-lg">{dataset.metrics.hours}</div>
            </div>
            <div>
              <div className="text-white/40 text-xs md:sm mb-1">Sample Rate</div>
              <div className="text-white font-medium text-base md:text-lg">{dataset.metrics.sampleRate}</div>
            </div>
            <div>
              <div className="text-white/40 text-xs md:sm mb-1">Unique Speakers</div>
              <div className="text-white font-medium text-base md:text-lg">{dataset.metrics.speakers}</div>
            </div>
            <div>
              <div className="text-white/40 text-xs md:sm mb-1">Delivery Format</div>
              <div className="text-white font-medium text-base md:text-lg">{dataset.metrics.format}</div>
            </div>
          </div>
          <Link to="/contact" className="w-full mt-8 py-4 rounded-xl bg-white text-black text-[15px] font-medium hover:bg-white/90 transition-colors flex items-center justify-center">
            Request Full Sample
          </Link>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Features */}
        <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-10 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
          <h3 className="text-xl md:text-2xl font-medium text-white mb-8">Key Features</h3>
          <ul className="space-y-4 md:space-y-6">
            {dataset.features.map((feature, i) => (
              <li key={i} className="flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white/80 shrink-0" />
                <span className="text-white/70 text-base md:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="bg-black/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-10 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
          <h3 className="text-xl md:text-2xl font-medium text-white mb-8">Included Languages & Dialects</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {dataset.languages.map((lang, i) => (
              <div key={i} className="px-4 py-2 md:px-5 md:py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 text-base md:text-lg">
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
