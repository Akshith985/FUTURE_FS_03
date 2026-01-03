import React, { useState } from 'react';
interface ReservationFormProps {
  onSubmit: (data: any) => void;
}

export const ReservationForm = ({ onSubmit }: ReservationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    alert("Your desk is waiting for you.");
  };

  return (
    <div className="bg-white p-12 shadow-sm border border-stone-100 max-w-md mx-auto">
      <h3 className="text-2xl mb-8 font-light italic">Secure your workspace</h3>
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="relative">
          <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">Writer's Name</label>
          <input 
            type="text" 
            required
            className="w-full bg-transparent border-b border-stone-200 py-2 focus:border-blue-700 outline-none transition-colors font-serif italic text-lg"
            placeholder="e.g. Virginia Woolf"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="relative">
          <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">Email Address</label>
          <input 
            type="email" 
            required
            className="w-full bg-transparent border-b border-stone-200 py-2 focus:border-blue-700 outline-none transition-colors font-serif italic text-lg"
            placeholder="the@novel.com"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="relative">
          <label className="block font-sans text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">Phone Number</label>
          <input 
            type="tel" 
            required
            className="w-full bg-transparent border-b border-stone-200 py-2 focus:border-blue-700 outline-none transition-colors font-serif italic text-lg"
            placeholder="+1 (555) 000-0000"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full py-4 bg-[#1a1a1a] text-white font-sans uppercase text-xs tracking-widest hover:bg-blue-700 transition-all duration-500 transform hover:-translate-y-1"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};