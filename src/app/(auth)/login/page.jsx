"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { LogIn, Chrome, Cpu, Lock, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleMockLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // [cite: 2026-01-05] Requirement: Implement mock login using hardcoded email & password
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.ok) {
      toast.success("CORE ACCESS GRANTED");
      // [cite: 2026-01-05] Requirement: On successful login, redirect to items/lists page
      router.push("/items");
    } else {
      toast.error("ENCRYPTION MISMATCH: ACCESS DENIED");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4">
      {/* Visual background effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="w-full max-w-md bg-[#0f172a] border-t-4 border-lime-400 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <div className="inline-flex p-4 bg-lime-400/10 rounded-full mb-4 border border-lime-400/20">
            <Cpu className="text-lime-400 w-10 h-10 animate-pulse" />
          </div>
          <h2 className="text-3xl font-black italic uppercase text-white tracking-tighter">
            System <span className="text-lime-400 text-glow">Auth</span>
          </h2>
          <p className="text-slate-500 text-[10px] uppercase tracking-[5px] mt-2 font-bold">
            Hardware Control Terminal
          </p>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleMockLogin} className="space-y-6">
          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-lime-400">
              <ShieldCheck size={18} />
            </div>
            <input
              type="email"
              placeholder="Admin Identifier (Email)"
              className="w-full bg-[#020617] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:border-lime-400 outline-none transition-all font-mono text-sm"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-lime-400">
              <Lock size={18} />
            </div>
            <input
              type="password"
              placeholder="Access Key (Password)"
              className="w-full bg-[#020617] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:border-lime-400 outline-none transition-all font-mono text-sm"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Primary Login Button */}
          <button 
            disabled={isLoading}
            className="w-full bg-lime-400 text-black font-black py-4 rounded-xl hover:bg-white transition-all uppercase italic text-sm flex items-center justify-center space-x-2 shadow-lg shadow-lime-400/20 active:scale-95 disabled:opacity-50"
          >
            {isLoading ? <span>Decrypting...</span> : (
              <>
                <LogIn size={20} />
                <span>Initialize Login</span>
              </>
            )}
          </button>
        </form>

        {/* Social Login Section */}
        <div className="mt-10">
          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t border-white/5 w-full"></div>
            <span className="bg-[#0f172a] px-3 text-[10px] text-slate-600 uppercase font-bold tracking-widest absolute">
              Secondary Sync
            </span>
          </div>
          
          {/* [cite: 2026-01-05] Requirement: Optional (Highly Recommended) Use NextAuth.js for social login */}
          <button 
            onClick={() => signIn("google", { callbackUrl: "/items" })}
            className="w-full bg-[#1e293b] text-white font-bold py-4 rounded-xl border border-white/5 hover:border-lime-400/50 transition-all flex items-center justify-center space-x-3 group"
          >
            <Chrome size={20} className="text-slate-400 group-hover:text-lime-400 transition-colors" />
            <span className="uppercase text-xs tracking-wider font-black">Sync with Google</span>
          </button>
        </div>

        {/* Requirements Badge */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-[9px] text-slate-600 uppercase font-mono tracking-tighter">
            Encryption: AES-256 | Credentials Stored in Secure Cookies
          </p>
        </div>
      </div>
    </div>
  );
}