"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Cpu, User, LogOut, Menu, X, Zap, LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession(); // [cite: 2026-01-05]
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative bg-[#1e293b] p-2 rounded-lg border border-white/10 group-hover:border-lime-400/50 transition-all">
              <Cpu className="text-lime-400 w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                Gadget<span className="text-lime-400">Groove</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-[3px] font-bold -mt-1">Future Tech Store</span>
            </div>
          </Link>

          {/* Desktop Menu - [cite: 2026-01-05] Requirement: Navigation links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-slate-300 hover:text-lime-400 font-bold text-sm uppercase tracking-widest transition-all">Home</Link>
            
            {/* [cite: 2026-01-05] Requirement: Link to Items/Lists page */}
            <Link href="/items" className="text-slate-300 hover:text-lime-400 font-bold text-sm uppercase tracking-widest transition-all">Catalog</Link>
            
            {session ? (
              <>
                {/* [cite: 2026-01-05] Protected Page Link: Add Item */}
                <Link href="/dashboard/add-item" className="flex items-center space-x-1 text-lime-400 hover:text-white font-bold text-sm uppercase tracking-widest transition-all">
                  <Zap size={16} />
                  <span>Add Product</span>
                </Link>
                
                <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Admin Terminal</p>
                    <p className="text-xs text-white font-mono">{session.user?.email}</p>
                  </div>
                  <button 
                    onClick={() => signOut()}
                    className="p-2.5 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all border border-red-500/20"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              </>
            ) : (
              /* [cite: 2026-01-05] Requirement: Link to Login page */
              <Link href="/login" className="bg-lime-400 text-black px-8 py-3 rounded-full font-black uppercase tracking-tighter hover:bg-white transition-all flex items-center gap-2">
                <User size={18} />
                Login Account
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsOpen(!isOpen)} className="text-lime-400 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/5 p-8 space-y-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-xl font-bold text-white uppercase italic">Home</Link>
          <Link href="/items" onClick={() => setIsOpen(false)} className="block text-xl font-bold text-white uppercase italic">Catalog</Link>
          {session ? (
            <>
              <Link href="/dashboard/add-item" onClick={() => setIsOpen(false)} className="block text-xl font-bold text-lime-400 uppercase italic underline">Add Product</Link>
              <button onClick={() => signOut()} className="w-full text-left text-red-500 font-bold uppercase italic">Log Out System</button>
            </>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)} className="block text-lime-400 font-bold text-xl uppercase italic">Login Terminal</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;