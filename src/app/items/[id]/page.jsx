"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, Zap } from "lucide-react";
import Link from "next/link";

export default function ItemDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://gadget-groove-server-lilac.vercel.app/api/products`);
        const data = await res.json();
        const singleItem = data.find(item => item._id === id);
        setProduct(singleItem);
        setLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-lime-400"></div>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Product Not Found</h1>
      <Link href="/items" className="text-lime-400 mt-4 underline">Back to Catalog</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-20">
      <div className="max-w-7xl mx-auto">
        <Link href="/items" className="flex items-center gap-2 text-slate-500 hover:text-lime-400 transition-colors mb-10 uppercase font-black text-xs tracking-widest">
          <ArrowLeft size={16} /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative group">
            <div className="absolute -inset-1 bg-lime-400/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-white/10 rounded-[2.5rem] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-8">
            <div>
              <span className="bg-lime-400 text-black text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-[2px]">
                {product.category}
              </span>
              {/* Show Product Name */}
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mt-4 leading-none text-white">
                {product.title}
              </h1>
            </div>

            {/* Show Product Price */}
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-black text-lime-400 italic">${product.price}</span>
              <span className="text-slate-500 line-through font-bold text-xl">${(product.price * 1.2).toFixed(2)}</span>
            </div>

            {/* Show Full Description */}
            <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl">
              <h4 className="text-xs font-black uppercase tracking-widest text-lime-400 mb-3 flex items-center gap-2">
                <Zap size={14} /> System Specifications
              </h4>
              <p className="text-slate-300 leading-relaxed font-medium">
                {product.description}
              </p>
            </div>

            {/* Status Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                <ShieldCheck className="text-lime-400" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Warranty</p>
                  <p className="text-sm font-bold uppercase">3 Year Limited</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                <Truck className="text-lime-400" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">Delivery</p>
                  <p className="text-sm font-bold uppercase">Ships in 24h</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <div className="px-8 flex flex-col justify-center items-center bg-white/5 rounded-2xl border border-white/10">
                <span className="text-[10px] uppercase font-black text-slate-500">Stock Status</span>
                <span className="text-xl font-black text-white italic">{product.stock || 0} Units</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}