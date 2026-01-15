"use client";
import { useState } from "react";
import { PlusCircle, Cpu, DollarSign, Image as ImageIcon, Layers, FileText } from "lucide-react";

export default function AddItem() {
  const [formData, setFormData] = useState({
    title: "",
    category: "Processor",
    price: "",
    image: "",
    description: "",
    stock: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // [cite: 2026-01-05] Frontend (3000) theke Backend (5000) e JSON data pathano
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("🚀 Hardware Core Registered Successfully!");
        setFormData({ title: "", category: "Processor", price: "", image: "", description: "", stock: "" });
      } else {
        alert("❌ Failed to push data to server.");
      }
    } catch (err) {
      console.error("Connection Error:", err);
      alert("❌ Server is offline. Please start your Express backend!");
    }
  };

  return (
    <div className="min-h-screen bg-black p-6 md:p-20 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-slate-900/40 border border-lime-400/10 p-8 md:p-12 rounded-[3rem] backdrop-blur-3xl shadow-[0_0_50px_rgba(163,230,53,0.05)]">
        
        <div className="mb-10">
          <h1 className="text-4xl font-black italic text-white uppercase tracking-tighter flex items-center gap-4">
            <span className="bg-lime-400 text-black p-2 rounded-xl not-italic"><PlusCircle size={32} /></span>
            Sync New <span className="text-lime-400">Hardware</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[5px] mt-2 ml-16">Database Management Terminal</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Component Title */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black text-lime-400 uppercase tracking-widest flex items-center gap-2">
              <Cpu size={14} /> Component Name
            </label>
            <input 
              type="text" required placeholder="e.g. NVIDIA RTX 5090 Ti Founders Edition"
              className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-lime-400 transition-all font-medium"
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              value={formData.title}
            />
          </div>

          {/* Category */}
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

          {/* Price */}
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

          {/* Image URL */}
          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-black text-lime-400 uppercase tracking-widest flex items-center gap-2">
              <ImageIcon size={14} /> Image Source URL
            </label>
            <input 
              type="text" required placeholder="https://unsplash.com/hardware-image.jpg"
              className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-lime-400 transition-all font-medium"
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              value={formData.image}
            />
          </div>

          {/* Description */}
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

          {/* Submit Button */}
          <button className="md:col-span-2 bg-lime-400 text-black font-black py-6 rounded-2xl hover:bg-white hover:scale-[1.02] transition-all uppercase italic tracking-tighter text-lg shadow-[0_10px_20px_rgba(163,230,53,0.2)]">
            Initialize Sync to Cluster
          </button>
        </form>
      </div>
    </div>
  );
}