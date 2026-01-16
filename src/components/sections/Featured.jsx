import React from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Featured() {
  // Mock data representing famous items
  const featuredItems = [
    { id: "1", name: "RTX 5090 Ti", price: 1999, img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000", cat: "Graphics" },
    { id: "2", name: "Core i9-14900K", price: 589, img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1000", cat: "Processors" },
    { id: "3", name: "Z790 Motherboard", price: 499, img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000", cat: "Hardware" },
    { id: "4", name: "DDR5 64GB RAM", price: 299, img: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1000", cat: "Memory" },
  ];

  return (
    <section className="w-9/12 mx-auto -mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-lime-400 p-1 rounded-sm shadow-[0_0_10px_rgba(163,230,53,0.5)]">
          <Zap size={18} className="text-black fill-black" />
        </div>
        <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
          Featured <span className="text-lime-400">Cores</span>
        </h2>
      </div>

      {/* 4 Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredItems.map((item) => (
          <Link href={`/items/${item.id}`} key={item.id} className="group">
            <div className="relative bg-[#1e293b]/20 border border-white/5 rounded-[2rem] p-5 hover:border-lime-400/40 transition-all duration-500 hover:bg-[#1e293b]/40 h-full flex flex-col">
              
              {/* Image Container */}
              <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-black mb-6">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                  <p className="text-[9px] text-lime-400 font-bold uppercase tracking-[2px]">{item.cat}</p>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3 flex-grow">
                <h3 className="text-white font-bold text-xl leading-tight group-hover:text-lime-400 transition-colors uppercase italic tracking-tight">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2">
                   <span className="text-slate-500 text-[10px] font-bold uppercase italic">MSRP</span>
                   <p className="text-lime-400 font-black text-2xl italic tracking-tighter">${item.price}</p>
                </div>
              </div>

              {/* Bottom Decorative Line that glows on hover */}
              <div className="mt-6 h-1 w-0 bg-lime-400 group-hover:w-full transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)]"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}