export default function Testimonials() {
  return (
    <section className="w-9/12 mx-auto -mt-10 mb-20">
      <div className="relative bg-[#1e293b]/20 border border-white/5 rounded-[3rem] px-8 py-16 md:px-20 overflow-hidden">
        
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-400/30 to-transparent"></div>

        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <div className="text-lime-400 font-bold tracking-[8px] uppercase text-[10px] opacity-70">
            User Experience
          </div>
          
          <h2 className="text-2xl md:text-5xl font-black text-white italic leading-tight tracking-tighter">
            "The RTX performance and GadgetGroove's customer service are <span className="text-lime-400">lightyears ahead</span>. My rendering time dropped by 60%."
          </h2>

          <div className="flex flex-col items-center gap-4">
            {/* User Avatar Placeholder */}
            <div className="w-16 h-16 rounded-2xl bg-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.3)] rotate-3 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center text-black font-black text-xl italic">
              AR
            </div>
            <div>
              <p className="text-white font-black uppercase text-base italic tracking-tight">Alex Rivera</p>
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[3px]">3D Lead Designer</p>
            </div>
          </div>
        </div>

        {/* Decorative Quote Icon in background */}
        <div className="absolute -bottom-10 -right-10 text-white/5 font-serif text-[20rem] italic select-none">
          ”
        </div>
      </div>
    </section>
  );
}