export default function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-20 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="text-lime-400 font-mono tracking-[10px] uppercase text-xs">Testimonials</div>
        <p className="text-2xl md:text-4xl font-bold text-white italic">"The RTX performance and GadgetGroove's customer service are lightyears ahead. My rendering time dropped by 60%."</p>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full bg-lime-400"></div>
          <div className="text-left">
            <p className="text-white font-black uppercase text-sm italic">Alex Rivera</p>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest">3D Lead Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
}