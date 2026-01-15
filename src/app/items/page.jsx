"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, ArrowRight, Cpu, Zap } from "lucide-react";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // [cite: 2026-01-05] Requirement: Fetch and show a list of items from Express Server API
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
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-lime-400"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">
            Hardware <span className="text-lime-400">Catalog</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[5px] mt-2">
            System Inventory: {products.length} Units Detected
          </p>
        </div>

        {/* [cite: 2026-01-05] Requirement: Item list grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item._id} className="group bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-lime-400/50 transition-all duration-500 shadow-2xl">
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-lime-400/20">
                  <span className="text-lime-400 font-black italic">${item.price}</span>
                </div>
              </div>

              {/* [cite: 2026-01-05] Requirement: Item Card including name, description, price */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-lime-400/10 text-lime-400 text-[10px] font-black uppercase px-3 py-1 rounded-md tracking-widest border border-lime-400/20">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-lime-400 transition-colors uppercase italic tracking-tight leading-none">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-2 mb-6 font-medium leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  {/* [cite: 2026-01-05] Requirement: Item Details Page Link */}
                  <Link 
                    href={`/items/${item._id}`}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors"
                  >
                    View Specs <ArrowRight size={14} />
                  </Link>
                  <button className="bg-white text-black p-3 rounded-xl hover:bg-lime-400 transition-all hover:scale-110">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}