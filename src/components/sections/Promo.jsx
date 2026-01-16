import React from "react";
import Link from "next/link";

export default function Promo() {
  return (
    <section className="w-9/12 mx-auto mt-8 mb-10">
      <div className="bg-lime-400 p-12 md:p-20 rounded-[3rem] flex flex-col items-center text-center space-y-8 overflow-hidden relative shadow-[0_20px_50px_rgba(163,230,53,0.2)]">
        
        {/* Background Decorative Text with subtle floating animation */}
        <div className="absolute top-0 right-0 opacity-10 font-black text-[12rem] md:text-[20rem] leading-none -translate-y-12 translate-x-12 italic select-none pointer-events-none animate-float">
          50%
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6">
          <h2 className="text-black text-5xl md:text-8xl font-black italic uppercase leading-[0.8] tracking-tighter">
            Flash Build <br /> 
            <span className="text-black/80">Discount</span>
          </h2>
          
          <p className="text-black/60 font-bold uppercase tracking-[0.2em] max-w-lg mx-auto text-sm md:text-base">
            Limited time offer on custom PC builds. <br /> 
            Secure your hardware slot now.
          </p>

          {/* Clickable Functional Button */}
          <Link href="/items" className="inline-block">
            <button className="bg-black text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all italic shadow-xl uppercase tracking-widest">
              Claim Rebate
            </button>
          </Link>
        </div>

        {/* Decorative corner element */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-tr-full pointer-events-none"></div>
      </div>
    </section>
  );
}