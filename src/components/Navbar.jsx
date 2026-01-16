"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { useSession, signOut } from "next-auth/react";
import { User, LogOut, Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Active Link Style Function
  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative bg-[#1e293b] p-1.5 rounded-lg border border-white/10 group-hover:border-lime-400/50 transition-all overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Gadget Groove" 
                className="w-9 h-9 object-contain transform group-hover:scale-110 transition-transform" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                Gadget<span className="text-lime-400">Groove</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-[3px] font-bold -mt-1">Future Tech Store</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-bold text-sm uppercase tracking-widest transition-all relative py-2 
                ${isActive('/') ? 'text-lime-400' : 'text-slate-300 hover:text-lime-400'}`}
            >
              Home
              {isActive('/') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 rounded-full" />}
            </Link>
            
            <Link 
              href="/items" 
              className={`font-bold text-sm uppercase tracking-widest transition-all relative py-2 
                ${isActive('/items') ? 'text-lime-400' : 'text-slate-300 hover:text-lime-400'}`}
            >
              Catalog
              {isActive('/items') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 rounded-full" />}
            </Link>
            
            {session ? (
              <>
                <Link 
                  href="/dashboard/add-item" 
                  className={`flex items-center space-x-1 font-bold text-sm uppercase tracking-widest transition-all relative py-2 
                    ${isActive('/dashboard/add-item') ? 'text-lime-400' : 'text-slate-300 hover:text-lime-400'}`}
                >
                  <Zap size={16} className={isActive('/dashboard/add-item') ? 'fill-lime-400' : ''} />
                  <span>Add Product</span>
                  {isActive('/dashboard/add-item') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-400 rounded-full" />}
                </Link>
                
                <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">Admin</p>
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
              <Link 
                href="/login" 
                className={`px-8 py-3 rounded-full font-black uppercase tracking-tighter transition-all flex items-center gap-2
                  ${isActive('/login') ? 'bg-white text-black' : 'bg-lime-400 text-black hover:bg-white'}`}
              >
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
          <Link href="/" onClick={() => setIsOpen(false)} className={`block text-xl font-bold uppercase italic ${isActive('/') ? 'text-lime-400 underline' : 'text-white'}`}>Home</Link>
          <Link href="/items" onClick={() => setIsOpen(false)} className={`block text-xl font-bold uppercase italic ${isActive('/items') ? 'text-lime-400 underline' : 'text-white'}`}>Catalog</Link>
          {session ? (
            <>
              <Link href="/dashboard/add-item" onClick={() => setIsOpen(false)} className={`block text-xl font-bold uppercase italic ${isActive('/dashboard/add-item') ? 'text-lime-400 underline' : 'text-lime-400'}`}>Add Product</Link>
              <button onClick={() => signOut()} className="w-full text-left text-red-500 font-bold uppercase italic">Log Out System</button>
            </>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)} className={`block text-xl font-bold uppercase italic ${isActive('/login') ? 'text-lime-400 underline' : 'text-lime-400'}`}>Login Terminal</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;