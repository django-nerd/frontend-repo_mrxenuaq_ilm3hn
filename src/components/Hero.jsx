import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Precision Plumbing Tools
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Export-grade durability. Engineered for professionals. A bold black and red identity to match your craft.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="rounded-md bg-red-600 px-6 py-3 font-medium hover:bg-red-500 transition">Browse Products</a>
            <a href="#about" className="rounded-md border border-zinc-700 px-6 py-3 font-medium hover:border-red-600 transition">About Us</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
    </section>
  );
}
