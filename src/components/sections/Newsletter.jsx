export default function Newsletter() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-slate-dark border border-white/10 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-4xl font-black italic uppercase text-white">Stay <span className="text-lime-400">Synced</span></h2>
          <p className="text-slate-500 font-medium">Join 50k+ enthusiasts for hardware drops.</p>
        </div>
        <div className="flex w-full md:w-auto bg-black border border-white/10 rounded-2xl p-2">
          <input type="email" placeholder="Enter Terminal Email" className="bg-transparent px-4 py-3 outline-none text-white font-mono text-sm w-full md:w-64" />
          <button className="bg-lime-400 text-black font-black px-6 py-3 rounded-xl hover:bg-white transition-colors uppercase text-xs">Sync</button>
        </div>
      </div>
    </section>
  );
}