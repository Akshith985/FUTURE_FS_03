import React, { useState } from 'react';

// --- Types ---
interface MenuItemProps {
  name: string;
  price: string;
  notes: string;
}

const MenuItem = ({ name, price, notes }: MenuItemProps) => (
  <div className="flex justify-between items-start mb-8 group">
    <div>
      <h4 className="text-lg font-medium group-hover:text-blue-700 transition-colors">{name}</h4>
      <p className="text-xs font-sans text-stone-500 uppercase tracking-widest mt-1">{notes}</p>
    </div>
    <span className="font-sans text-stone-400">{price}</span>
  </div>
);

// --- The Overlay Component ---
export const MenuOverlay = ({ close }: { close: () => void }) => {
  return (
    <div className="fixed inset-0 bg-[#FDFCF8] z-50 p-10 overflow-y-auto animate-in fade-in duration-300">
      <button onClick={close} className="absolute top-10 right-10 font-sans tracking-widest uppercase text-xs border-b border-black">Close</button>
      
      <div className="max-w-2xl mx-auto mt-20">
        <h2 className="text-4xl mb-12 italic border-b border-stone-200 pb-4">Liquid Inspiration</h2>
        
        <div className="grid gap-x-12">
          <MenuItem name="The Hemingway" price="$4.50" notes="Double Espresso / Bold / No Nonsense" />
          <MenuItem name="The Brontë" price="$5.50" notes="Earl Grey / Lavender / Steamed Oat Milk" />
          <MenuItem name="Plot Armor" price="$6.00" notes="Cold Brew / High Caffeine / For Deadlines" />
          <MenuItem name="Ink & Quill" price="$5.00" notes="Charcoal Latte / Vanilla / Artistic Finish" />
        </div>

        <h2 className="text-4xl mb-12 mt-20 italic border-b border-stone-200 pb-4">Light Fare</h2>
        <MenuItem name="The Editor's Choice" price="$12.00" notes="Avocado Sourdough / Chili Flakes / Sea Salt" />
      </div>
    </div>
  );
};