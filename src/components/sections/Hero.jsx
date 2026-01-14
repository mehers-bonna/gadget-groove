import { Cpu, Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-lime-400/5 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1 border border-lime-400/30 rounded-full bg-lime-400/5 text-lime-400 text-[10px] font-bold tracking-[4px] uppercase animate-pulse">
            Next-Gen Hardware Ready
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase leading-none text-white italic">
            Override <br /> <span className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.3)]">Reality</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-lg font-medium">
            Push your performance beyond limits with GadgetGroove's elite computing components. Built for creators and hardened for gamers.
          </p>
          <div className="flex gap-4">
            <button className="bg-lime-400 text-black font-black px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all flex items-center gap-2 group italic">
              COLLECTION <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-lime-400/20 blur-2xl group-hover:bg-lime-400/40 transition duration-1000"></div>
          <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000" alt="GPU" className="relative rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
      </div>
    </section>
  );
}