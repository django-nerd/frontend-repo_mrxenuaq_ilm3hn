export default function About() {
  return (
    <section id="about" className="bg-black text-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">About FlowForge</h2>
            <p className="mt-4 text-zinc-300">
              We design and export high-performance plumbing tools trusted by pros around the world. Our products are engineered with hardened alloys, precision machining, and rigorous quality control to withstand demanding job sites.
            </p>
            <p className="mt-4 text-zinc-400">
              With a bold black-and-red identity, we stand for strength, accuracy, and reliability. Every tool carries our commitment to safety, ergonomics, and longevity.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
            <ul className="space-y-4 text-sm text-zinc-300">
              <li>• Export-grade manufacturing and packaging</li>
              <li>• ISO-compliant QC across all product lines</li>
              <li>• Sourcing network across Asia, EU, and North America</li>
              <li>• Dedicated support for distributors and wholesale partners</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-3xl font-bold text-red-500">10k+</p>
                <p className="text-xs text-zinc-400">Units Shipped / mo</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-500">35+</p>
                <p className="text-xs text-zinc-400">Countries</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-red-500">99.8%</p>
                <p className="text-xs text-zinc-400">On-time Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
