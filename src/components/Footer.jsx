import React from "react";
import { Facebook, Twitter, Instagram, Globe, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl font-black italic text-white uppercase">
              Gadget<span className="text-lime-400">Groove</span>
            </h2>
            <p className="text-slate-400 max-w-sm text-sm leading-loose">
              High-performance computing and next-gen hardware delivered. We specialize in components that push the boundaries of digital reality.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Globe].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white/5 rounded-xl text-slate-400 hover:text-lime-400 hover:bg-white/10 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-black uppercase text-xs tracking-[4px] mb-8">Navigation</h3>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><a href="#" className="hover:text-lime-400 transition-colors">GPU CATALOG</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">CPU RIGS</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">PERIPHERALS</a></li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-white font-black uppercase text-xs tracking-[4px] mb-8">Hardware Updates</h3>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="system@access.com" 
                className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-lime-400 outline-none transition-all font-mono"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-lime-400 text-black font-black px-6 rounded-xl hover:bg-white transition-all uppercase text-xs">
                Sync
              </button>
            </div>
            <p className="mt-4 text-[10px] text-slate-600 uppercase tracking-widest">Join 50k+ enthusiasts syncing their setup.</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-600 tracking-[3px] uppercase">
          <p>© 2026 GADGETGROOVE CORE. ALL SYSTEMS OPERATIONAL.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#">Security</a>
            <a href="#">Privacy</a>
            <a href="#">API</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;