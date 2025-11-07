import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Thanks! We will reach out shortly.'), 900);
  };

  return (
    <section id="contact" className="bg-black text-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Contact Us</h2>
          <p className="mt-2 text-zinc-400">Get a quote, request a catalog, or start a wholesale partnership.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-4 py-3 outline-none focus:border-red-600" placeholder="First name" required />
              <input className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-4 py-3 outline-none focus:border-red-600" placeholder="Last name" required />
            </div>
            <input type="email" className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-4 py-3 outline-none focus:border-red-600" placeholder="Email" required />
            <input className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-4 py-3 outline-none focus:border-red-600" placeholder="Company" />
            <textarea rows={5} className="w-full rounded-md border border-zinc-800 bg-zinc-950/60 px-4 py-3 outline-none focus:border-red-600" placeholder="How can we help?" required />
            <button type="submit" className="rounded-md bg-red-600 px-6 py-3 font-medium hover:bg-red-500">Send Message</button>
            {status && <p className="text-sm text-green-400">{status}</p>}
          </form>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
            <h3 className="text-xl font-semibold">Global Export Office</h3>
            <p className="mt-2 text-zinc-400">We ship worldwide with end-to-end logistics support.</p>
            <div className="mt-6 space-y-3 text-sm text-zinc-300">
              <p>support@flowforge.tools</p>
              <p>+1 (555) 012-3456</p>
              <p>Mon–Fri, 9:00–18:00 (UTC)</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-zinc-400">
              <div className="rounded-md bg-black/40 p-4 ring-1 ring-inset ring-zinc-800">Fast lead times</div>
              <div className="rounded-md bg-black/40 p-4 ring-1 ring-inset ring-zinc-800">OEM & private label</div>
              <div className="rounded-md bg-black/40 p-4 ring-1 ring-inset ring-zinc-800">Custom kitting</div>
              <div className="rounded-md bg-black/40 p-4 ring-1 ring-inset ring-zinc-800">Warranty support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
