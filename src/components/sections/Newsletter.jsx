"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSync = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Enter a valid terminal email!", {
        style: {
          background: "#1e293b",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
        },
      });
      return;
    }

    // Functional Toast Notification
    toast.success("Subscribed Successfully! Stay Connected.", {
      icon: "⚡",
      style: {
        borderRadius: "16px",
        background: "#a3e635",
        color: "#000",
        fontWeight: "bold",
        fontStyle: "italic",
      },
    });
    setEmail("");
  };

  return (
    <section className="w-9/12 mx-auto -mt-18 mb-20">
      <Toaster position="top-right" />

      <div className="bg-[#0f172a] border border-white/5 p-10 md:p-16 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">

        {/* Cyberpunk Background Detail */}
        <div className="absolute top-0 left-0 w-2 h-full bg-lime-400 opacity-20"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white leading-tight">
            Stay <span className="text-lime-400 drop-shadow-[0_0_10px_rgba(163,230,53,0.3)]">Synced</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">
            Join 50k+ enthusiasts for hardware drops.
          </p>
        </div>

        <form
          onSubmit={handleSync}
          className="flex w-full md:w-auto bg-black border border-white/5 rounded-[2rem] p-2.5 shadow-2xl relative z-10"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="bg-transparent px-6 py-4 outline-none text-lime-400 font-sans text-sm w-full md:w-80 placeholder:text-slate-700 tracking-tight"
          />
          <button
            type="submit"
            className="bg-lime-400 text-black font-black px-10 py-4 rounded-[1.5rem] hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:scale-105 transition-all uppercase text-sm italic tracking-widest"
          >
            Subscribe
          </button>
        </form>

        {/* Decorative Grid in Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>
    </section>
  );
}