"use client";
import React, { useState } from "react";
import { Facebook, Twitter, Instagram, Globe } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Access Denied: Email required!", {
        style: { background: "#1e293b", color: "#fff" }
      });
      return;
    }
    toast.success("Subscription Synced!", {
      icon: "📡",
      style: { borderRadius: "10px", background: "#a3e635", color: "#000" }
    });
    setEmail("");
  };

  return (
    <footer className="w-9/12 mx-auto border-t border-white/5 pt-20 pb-10">
      <Toaster position="bottom-right" />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand & Logo Section */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="GadgetGroove Logo" className="w-10 h-10 object-contain" />
            <h2 className="text-3xl font-black italic text-white uppercase tracking-tighter">
              Gadget<span className="text-lime-400">Groove</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm text-sm leading-loose font-medium">
            High-performance computing and next-gen hardware delivered. We specialize in components that push the boundaries of digital reality.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-lime-400 hover:bg-white/10 transition-all">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-lime-400 hover:bg-white/10 transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-lime-400 hover:bg-white/10 transition-all">
              <Twitter size={20} />
            </a>
            <a href="https://gadgetgroove.com" target="_blank" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-lime-400 hover:bg-white/10 transition-all">
              <Globe size={20} />
            </a>
          </div>
        </div>

        {/* Project Related Navigation */}
        <div className="md:col-span-3">
          <h3 className="text-white font-black uppercase text-xs tracking-[4px] mb-8 opacity-50">Navigation</h3>
          <ul className="space-y-4 text-sm font-bold text-slate-500 uppercase italic">
            <li><Link href="/" className="hover:text-lime-400 transition-colors">Home Interface</Link></li>
            <li><Link href="/dashboard/add-item" className="hover:text-lime-400 transition-colors">Add Component</Link></li>
            <li><Link href="/items" className="hover:text-lime-400 transition-colors">Build Rig</Link></li>
          </ul>
        </div>

        {/* Functional Newsletter Input */}
        <div className="md:col-span-4">
          <h3 className="text-white font-black uppercase text-xs tracking-[4px] mb-8 opacity-50">System Updates</h3>
          <form onSubmit={handleSubscribe} className="relative group">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="system@access.com" 
              className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-lime-400 outline-none transition-all font-mono text-sm"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-lime-400 text-black font-black px-6 rounded-xl hover:bg-white transition-all uppercase text-[10px]"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-[9px] text-slate-600 uppercase tracking-widest font-bold italic">
            Join 50k+ enthusiasts syncing their setup.
          </p>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center text-[10px] font-bold text-slate-600 tracking-[3px] uppercase">
        <p>© 2026 GADGETGROOVE CORE. ALL SYSTEMS OPERATIONAL.</p>
      </div>
    </footer>
  );
};

export default Footer;