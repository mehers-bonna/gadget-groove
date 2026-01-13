"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Cpu, ShoppingBag, User, LogOut, Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Real Hardware Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-[#1e293b] p-2 rounded-lg border border-white/10">
                <Cpu className="text-lime-400 w-7 h-7" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                Gadget<span className="text-lime-400">Groove</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-[3px] font-bold -mt-1">Future Tech Store</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-slate-300 hover:text-lime-400 font-bold text-sm uppercase tracking-widest transition-all">Home</Link>
            <Link href="/items" className="text-slate-300 hover:text-lime-400 font-bold text-sm uppercase tracking-widest transition-all">Catalog</Link>
            
            {session ? (
              <>
                <Link href="/dashboard/add-item" className="flex items-center space-x-1 text-slate-300 hover:text-lime-400 font-bold text-sm uppercase tracking-widest transition-all">
                  <Zap size={16} />
                  <span>List Gadget</span>
                </Link>
                <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Authenticated</p>
                    <p className="text-xs text-white font-mono">{session.user?.email}</p>
                  </div>
                  <button 
                    onClick={() => signOut()}
                    className="p-2.5 bg-red-500/10 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all border border-red-500/20"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              </>
            ) : (
              <Link href="/login" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-black transition duration-300 ease-out border-2 border-lime-400 rounded-full group">
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-lime-400 group-hover:translate-x-0 ease">
                  <User size={20} />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-lime-400 transition-all duration-300 transform group-hover:translate-x-full ease uppercase tracking-tighter">Login Account</span>
                <span className="relative invisible uppercase tracking-tighter">Login Account</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsOpen(!isOpen)} className="text-lime-400 p-2 bg-white/5 rounded-lg">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar/Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-white/5 p-6 space-y-6 animate-in slide-in-from-right w-full">
          <Link href="/" className="block text-xl font-bold text-white">HOME</Link>
          <Link href="/items" className="block text-xl font-bold text-white">CATALOG</Link>
          {session ? (
             <button onClick={() => signOut()} className="w-full text-left text-red-500 font-bold">LOGOUT</button>
          ) : (
            <Link href="/login" className="block text-lime-400 font-bold">LOGIN</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;