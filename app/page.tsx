"use client";

import React, { useState } from 'react';

/**
 * WRITER'S CAFE - BRANDED FRONTEND
 * Theme: The Focused Inkwell
 * Style: Minimalist, Serif-heavy, High-contrast
 */

// --- 1. SUBSIDIARY COMPONENTS (Included in file) ---

const MenuItem = ({ name, price, notes }: { name: string; price: string; notes: string }) => (
  <div className="flex justify-between items-start mb-10 group">
    <div className="max-w-[80%]">
      <h4 className="text-xl font-medium group-hover:text-blue-700 transition-colors duration-500">{name}</h4>
      <p className="text-xs font-sans text-stone-500 uppercase tracking-widest mt-1.5 leading-relaxed">{notes}</p>
    </div>
    <span className="font-sans text-stone-400 tabular-nums">{price}</span>
  </div>
);

const MenuOverlay = ({ close }: { close: () => void }) => (
  <div className="fixed inset-0 bg-[#FDFCF8] z-[60] p-8 md:p-20 overflow-y-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="max-w-2xl mx-auto">
      <button 
        onClick={close} 
        className="mb-16 font-sans tracking-[0.3em] uppercase text-[10px] border-b border-stone-300 pb-1 hover:border-blue-700 transition-all"
      >
        ← Return to the Desk
      </button>
      
      <section className="mb-20">
        <h2 className="text-5xl mb-12 italic font-light border-b border-stone-100 pb-6">For the Muse</h2>
        <MenuItem name="The Hemingway" price="$4.50" notes="A double shot of espresso. Short, bitter, and honest." />
        <MenuItem name="The Brontë" price="$5.50" notes="Earl Grey tea steeped with dried lavender and local honey." />
        <MenuItem name="The Kerouac" price="$6.00" notes="Nitro cold brew. For those writing at the speed of thought." />
        <MenuItem name="Ink & Quill" price="$5.75" notes="A charcoal-infused vanilla latte. Dark as a midnight draft." />
      </section>

      <section>
        <h2 className="text-5xl mb-12 italic font-light border-b border-stone-100 pb-6">Fuel</h2>
        <MenuItem name="The Editor's Choice" price="$14.00" notes="Thick-cut sourdough, smashed avocado, and a soft-boiled egg." />
        <MenuItem name="Midnight Manuscript" price="$9.00" notes="Dark chocolate tart with sea salt and espresso grounds." />
      </section>
    </div>
  </div>
);

const ReservationForm = ({ close }: { close: () => void }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
    <div className="bg-white p-10 md:p-14 shadow-2xl max-w-md w-full relative border border-stone-100">
      <button onClick={close} className="absolute top-6 right-6 text-stone-400 hover:text-black transition-colors">✕</button>
      <h3 className="text-3xl mb-2 font-light italic">Reserve a Nook</h3>
      <p className="text-stone-500 font-sans text-xs uppercase tracking-widest mb-10">Select your station</p>
      
      <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert("Draft saved. Your desk is reserved."); close(); }}>
        <div className="relative">
          <label className="block font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-1">Writer's Name</label>
          <input type="text" placeholder="e.g. Joan Didion" className="w-full border-b border-stone-200 py-2 outline-none focus:border-blue-700 font-serif italic text-lg transition-colors bg-transparent" required />
        </div>
        <div className="relative">
          <label className="block font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-1">Email Address</label>
          <input type="email" placeholder="correspondence@cafe.com" className="w-full border-b border-stone-200 py-2 outline-none focus:border-blue-700 font-serif italic text-lg transition-colors bg-transparent" required />
        </div>
        <div className="relative">
          <label className="block font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-1">Phone</label>
          <input type="tel" placeholder="+1 (000) 000-0000" className="w-full border-b border-stone-200 py-2 outline-none focus:border-blue-700 font-serif italic text-lg transition-colors bg-transparent" required />
        </div>
        <button className="w-full py-5 bg-[#1a1a1a] text-white font-sans uppercase text-[10px] tracking-[0.3em] hover:bg-blue-700 transition-all shadow-lg">
          Confirm Appointment
        </button>
      </form>
    </div>
  </div>
);

// --- 2. THE MAIN PAGE COMPONENT ---

export default function WritersCafePage() {
  const [showMenu, setShowMenu] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2C2C2C] font-serif selection:bg-blue-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 md:px-12 py-10 sticky top-0 bg-[#FDFCF8]/90 backdrop-blur-md z-40 border-b border-stone-100">
        <h1 className="text-xl font-bold tracking-tighter uppercase leading-none">
          Writer's <span className="italic font-light text-blue-700 block md:inline">Cafe</span>
        </h1>
        <div className="flex items-center space-x-6 md:space-x-12 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold">
          <button onClick={() => setShowMenu(true)} className="hover:text-blue-700 transition decoration-stone-300 underline-offset-8 hover:underline">Catalogue</button>
          <button onClick={() => setIsBooking(true)} className="bg-[#1a1a1a] text-white px-6 py-3 hover:bg-blue-700 transition shadow-md">Book a Desk</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto pt-16 md:pt-24 px-8 pb-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Branding & Copy */}
          <section className="lg:col-span-7">
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 block">Volume IV / Issue 2026</span>
            <h2 className="text-6xl md:text-8xl mb-10 leading-[0.9] tracking-tight text-stone-900">
              Where <span className="italic">ink</span> meets <span className="text-blue-700 font-light">insight.</span>
            </h2>
            <p className="text-xl md:text-2xl text-stone-600 mb-12 max-w-xl leading-relaxed font-light">
              The city's only silent-first cafe. We provide the light, the beans, and the quiet. You provide the story.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="px-6 py-3 border border-stone-200 rounded-full text-[10px] font-sans uppercase tracking-widest">32 Private Nooks</div>
               <div className="px-6 py-3 border border-stone-200 rounded-full text-[10px] font-sans uppercase tracking-widest">Fiber Optic</div>
               <div className="px-6 py-3 border border-stone-200 rounded-full text-[10px] font-sans uppercase tracking-widest">Silent Zone</div>
            </div>
          </section>

          {/* Right: Scrollable Image Section */}
          <section className="lg:col-span-5 relative">
            <div className="h-[600px] overflow-y-auto pr-6 custom-scrollbar group border-l border-stone-100 pl-6">
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden bg-stone-200">
                     <img 
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
                        alt="A lonely typewriter" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2000ms]"
                     />
                  </div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 text-right">01. The Atmosphere</p>
                </div>

                <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden bg-stone-200">
                     <img 
                        src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=800" 
                        alt="Coffee Pour" 
                        className="w-full h-full object-cover grayscale opacity-80"
                     />
                  </div>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 text-right">02. The Fuel</p>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute -bottom-10 left-6 flex items-center space-x-4 animate-bounce opacity-40">
                <div className="w-[1px] h-12 bg-black"></div>
                <span className="font-sans text-[9px] uppercase tracking-[0.3em]">Scroll Down</span>
            </div>
          </section>

        </div>
      </main>

      {/* Overlays */}
      {showMenu && <MenuOverlay close={() => setShowMenu(false)} />}
      {isBooking && <ReservationForm close={() => setIsBooking(false)} />}

      {/* Custom Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #FDFCF8;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2C2C2C;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #1d4ed8;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}