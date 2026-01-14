export default function Featured() {
  const products = [
    { name: "RTX 5090 Ti", price: "$1,999", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=400" },
    { name: "Core i9-14900K", price: "$589", img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=400" },
    { name: "Z790 Motherboard", price: "$499", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400" }
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-black italic uppercase mb-12 text-white"><span className="text-lime-400">//</span> Featured Cores</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div key={i} className="bg-slate-card border border-white/5 p-6 rounded-3xl group hover:border-lime-400/50 transition-all">
            <div className="overflow-hidden rounded-2xl mb-4 bg-black">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            <h3 className="text-xl font-bold text-white">{p.name}</h3>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lime-400 font-mono font-bold">{p.price}</span>
              <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-lime-400">Add to Rig +</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}