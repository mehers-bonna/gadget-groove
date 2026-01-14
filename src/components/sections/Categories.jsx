export default function Categories() {
  const cats = ["Processors", "Graphics", "Memory", "Storage", "Cooling", "Peripherals"];
  return (
    <section className="bg-white/5 py-20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cats.map((c, i) => (
            <div key={i} className="h-32 flex items-center justify-center border border-white/10 rounded-2xl hover:bg-lime-400 hover:text-black transition-all cursor-pointer group">
              <span className="font-black italic uppercase text-sm tracking-tighter group-hover:scale-110 transition-transform">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}