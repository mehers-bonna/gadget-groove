import React from "react";

export default function Categories() {
  const cats = [
    "Processors", "Graphics", "Memory", "Storage", "Cooling", "Peripherals",
    "Processors", "Graphics", "Memory", "Storage", "Cooling", "Peripherals"
  ];

  return (
    <section className="w-9/12 mx-auto mt-10 overflow-hidden relative group border-y border-white/5 py-10">
      {/* Side Fades */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Wrapper */}
      <div className="flex w-max animate-marquee gap-8">
        {cats.map((c, i) => (
          <div 
            key={i} 
            className="px-12 py-6 border border-white/10 rounded-2xl bg-white/5 hover:border-lime-400/50 transition-all cursor-default group/item shrink-0"
          >
            <span className="font-black italic uppercase text-xl tracking-[4px] text-slate-500 group-hover/item:text-lime-400 transition-colors">
              {c}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}