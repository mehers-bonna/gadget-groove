"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-lime-400"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 md:p-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-lime-400 pl-6">
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
            Hardware <span className="text-lime-400">Catalog</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[5px] mt-2">
            System Inventory: {products.length} Units Detected
          </p>
        </div>

        {/* Item list grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item) => (
            <div key={item._id} className="group bg-[#0f172a]/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-lime-400/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden p-4">
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Price Tag Overlay */}
                  <div className="absolute top-4 right-4 bg-lime-400 text-black px-4 py-1 rounded-full font-black italic text-sm shadow-lg">
                    ${item.price}
                  </div>
                </div>
              </div>

              {/* Item Card Body */}
              <div className="px-8 pb-8 pt-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lime-400 text-[9px] font-black uppercase tracking-[3px] opacity-70">
                     {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-black mb-3 group-hover:text-lime-400 transition-colors uppercase italic tracking-tight leading-none h-12 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-xs line-clamp-2 mb-8 font-medium leading-relaxed">
                  {item.description}
                </p>

                {/* Updated Action Button */}
                <div className="pt-6 border-t border-white/5">
                  <Link href={`/items/${item._id}`} className="block">
                    <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[3px] italic flex items-center justify-center gap-3 group-hover:bg-lime-400 group-hover:text-black group-hover:border-lime-400 transition-all duration-300">
                      View Full Specs <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}