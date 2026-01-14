export default function Promo() {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="bg-lime-400 p-12 rounded-[3rem] flex flex-col items-center text-center space-y-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 font-black text-[15rem] leading-none -translate-y-12 translate-x-12 italic">50%</div>
        <h2 className="text-black text-5xl md:text-7xl font-black italic uppercase leading-none">Flash Build <br /> Discount</h2>
        <p className="text-black/70 font-bold uppercase tracking-widest max-w-md">Limited time offer on custom PC builds. Secure your slot now.</p>
        <button className="bg-black text-white px-10 py-4 rounded-full font-black hover:scale-110 transition-transform italic">CLAIM REBATE</button>
      </div>
    </section>
  );
}