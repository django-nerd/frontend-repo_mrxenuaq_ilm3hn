import { useEffect, useState } from 'react';
import { Wrench, Pipeline, Gauge } from 'lucide-react';

const catalog = [
  {
    id: 1,
    name: 'Titan Pipe Wrench',
    price: 79.99,
    badge: 'Bestseller',
    icon: Wrench,
    desc: 'Heat-treated steel jaws and anti-slip handle for maximum torque.'
  },
  {
    id: 2,
    name: 'ProPEX Crimp Tool',
    price: 119.0,
    badge: 'New',
    icon: Pipeline,
    desc: 'Precision jaw alignment for leak-proof connections every time.'
  },
  {
    id: 3,
    name: 'Hydra Pressure Gauge',
    price: 49.5,
    badge: 'Limited',
    icon: Gauge,
    desc: 'High-accuracy gauge with shock-resistant casing and red dial.'
  }
];

export default function Products() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="products" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Products</h2>
            <p className="mt-2 text-zinc-400">Export-ready tools engineered for reliability.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-md bg-red-600 px-4 py-2 text-sm font-medium hover:bg-red-500">Request Quote</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 transition-transform duration-500 ${
                  mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex items-center rounded-full bg-red-600/20 px-2.5 py-1 text-xs text-red-400 ring-1 ring-inset ring-red-600/30">{item.badge}</span>
                  <Icon className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold">${item.price.toFixed(2)}</span>
                  <button className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium hover:bg-red-500">Add to Cart</button>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(239,68,68,0.1), transparent 40%)'}} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
