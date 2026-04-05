import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 relative z-10 pt-20 pb-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-white mb-2 tracking-tight">Welcome back</h1>
          <p className="text-white/50">Log in to your Starset Intelligence account.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="you@company.com" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-white/70">Password</label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <button className="w-full bg-white text-black font-medium rounded-xl px-4 py-3 hover:bg-white/90 transition-colors mt-2">
            Sign In
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-white/40 text-sm">OR</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        <div className="space-y-3">
          <button className="w-full bg-white/5 border border-white/10 text-white font-medium rounded-xl px-4 py-3 hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>
          <button className="w-full bg-white/5 border border-white/10 text-white font-medium rounded-xl px-4 py-3 hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
            <Github className="w-5 h-5" />
            Continue with GitHub
          </button>
        </div>

        <p className="text-center text-white/50 text-sm mt-8">
          Don't have an account? <a href="#" className="text-white hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
