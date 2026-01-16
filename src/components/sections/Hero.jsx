import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 -mt-30">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-400/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="w-9/12 mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 border border-lime-400/30 rounded-full bg-lime-400/5 text-lime-400 text-[10px] font-bold tracking-[4px] uppercase animate-pulse">
            Next-Gen Hardware Ready
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-[0.9] text-white">
            Override <br /> 
            <span className="text-lime-400 drop-shadow-[0_0_20px_rgba(163,230,53,0.4)]">Reality</span>
          </h1>
          
          <p className="text-slate-400 text-lg max-w-lg font-medium leading-relaxed">
            Push your performance beyond limits with GadgetGroove's elite computing components. Built for creators and hardened for gamers.
          </p>
          
          <div className="flex gap-4">
            <Link href="/items">
              <button className="bg-lime-400 text-black font-black px-10 py-5 rounded-2xl hover:shadow-[0_0_30px_rgba(163,230,53,0.6)] transition-all flex items-center gap-3 group italic text-sm tracking-widest uppercase">
                Explore Collection 
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Animated Image Content */}
        <div className="relative group">
          {/* Animated Glow behind image */}
          <div className="absolute -inset-4 bg-lime-400/20 blur-[100px] group-hover:bg-lime-400/40 transition duration-1000 animate-pulse"></div>
          
          {/* Floating and Hover Animation Container */}
          <div className="relative animate-float transition-all duration-700 group-hover:scale-105 group-hover:rotate-2">
            <img 
              src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000" 
              alt="Elite GPU Hardware" 
              className="rounded-3xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" 
            />
            
            {/* Overlay reflection effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-lime-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Optional Floating Tech Badge */}
          <div className="absolute -bottom-6 -left-6 bg-[#1e293b] border border-white/10 p-4 rounded-2xl shadow-2xl animate-bounce hidden md:block">
            <p className="text-lime-400 font-black text-xl italic tracking-tighter">RTX 4090 TI</p>
            <p className="text-slate-500 text-[10px] uppercase font-bold">Limitless Power</p>
          </div>
        </div>

      </div>
    </section>
  );
}