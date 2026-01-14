// Tool er poriborte Toolbox ba Wrench use korte hobe
import { ShieldCheck, Truck, Toolbox } from "lucide-react";

export default function Services() {
  const srv = [
    { 
      icon: <Truck />, 
      title: "Hyper Delivery", 
      desc: "Same day dispatch on all in-stock cores." 
    },
    { 
      icon: <ShieldCheck />, 
      title: "Full Warranty", 
      desc: "3-year minimum security on every component." 
    },
    { 
      icon: <Toolbox />, // Ekhane Toolbox use kora hoyeche
      title: "Tech Support", 
      desc: "24/7 expert handshake for your build issues." 
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
      {srv.map((s, i) => (
        <div key={i} className="text-center space-y-4 group">
          <div className="mx-auto w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all">
            {s.icon}
          </div>
          <h3 className="text-xl font-black italic uppercase text-white">{s.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </section>
  );
}