"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Cpu, DollarSign, Image as ImageIcon, Layers, FileText } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function AddItem() {
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    title: "",
    category: "Processor",
    price: "",
    image: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch("https://gadget-groove-server-lilac.vercel.app/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Hardware Core Added Successfully!", {
          style: {
            borderRadius: '10px',
            background: '#a3e635',
            color: '#000',
            fontWeight: 'bold'
          },
        });

        setTimeout(() => {
          router.push("/items");
        }, 2000);

      } else {
        toast.error("Failed to push data to server.");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      toast.error("Server is offline. Check your backend!");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] p-6 md:p-20 flex items-center justify-center">
      <Toaster position="top-right" />
      
      <div className="w-full max-w-3xl bg-slate-900/40 border border-white/5 p-8 md:p-12 rounded-[3rem] backdrop-blur-3xl shadow-2xl">
        
        <div className="mb-10">
          <h1 className="text-4xl font-black italic text-white uppercase tracking-tighter flex items-center gap-4">
            <span className="bg-lime-400 text-black p-2 rounded-xl not-italic">
              <PlusCircle size={32} />
            </span>
            Add New <span className="text-lime-400">Hardware</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[5px] mt-2 ml-16">
            Database Management System
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black text-lime-400 uppercase tracking-widest flex items-center gap-2">
              <Cpu size={14} /> Component Name
            </label>
            <input 
              type="text" required placeholder="e.g. NVIDIA RTX 5090 Ti"
              className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-lime-400 transition-all font-medium"
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              value={formData.title}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-lime-400 uppercase tracking-widest flex items-center gap-2">
              <Layers size={14} /> Category
            </label>
            <select 
              className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-lime-400 appearance-none font-medium"
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              value={formData.category}
            >
              <option className="bg-slate-900">Processor</option>
              <option className="bg-slate-900">GPU</option>
              <option className="bg-slate-900">Motherboard</option>
              <option className="bg-slate-900">RAM/Memory</option>
              <option className="bg-slate-900">Storage</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-lime-400 uppercase tracking-widest flex items-center gap-2">
              <DollarSign size={14} /> Price (USD)
            </label>
            <input 
              type="number" required placeholder="1999.00"
              className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-lime-400 transition-all font-medium"
              onChange={(e) => setFormData({...formData, price: e.target.value})}
              value={formData.price}
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black text-lime-400 uppercase tracking-widest flex items-center gap-2">
              <ImageIcon size={14} /> Image Source URL
            </label>
            <input 
              type="text" required placeholder="https://image-link.com/hardware.jpg"
              className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-lime-400 transition-all font-medium"
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              value={formData.image}
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black text-lime-400 uppercase tracking-widest flex items-center gap-2">
              <FileText size={14} /> Technical Specifications
            </label>
            <textarea 
              rows="4" placeholder="Enter key features and specs..."
              className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-lime-400 transition-all font-medium resize-none"
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              value={formData.description}
            ></textarea>
          </div>

          <button className="md:col-span-2 bg-lime-400 text-black font-black py-6 rounded-2xl hover:bg-white hover:scale-[1.01] transition-all uppercase italic tracking-tighter text-lg shadow-xl">
            Add Hardware Product
          </button>
        </form>
      </div>
    </div>
  );
}