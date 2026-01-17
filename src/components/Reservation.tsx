import { useState } from 'react';

export default function Reservation() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="reserve" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6 max-w-3xl">
        
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl md:text-5xl text-paper mb-4">Reservations</h3>
          <p className="text-stone-400 font-sans text-sm tracking-wider">
            We accept reservations up to two months in advance.
          </p>
        </div>

        <div className="bg-charcoal-light p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
          {formState === 'success' ? (
            <div className="absolute inset-0 bg-charcoal-light flex flex-col items-center justify-center animate-fade-in z-20">
              <div className="text-gold text-5xl mb-4 font-serif italic">Arigato</div>
              <p className="text-stone-300 font-sans tracking-wide">We will contact you shortly to confirm.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-xs text-stone-500 uppercase tracking-widest hover:text-gold transition-colors"
              >
                Make another request
              </button>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className={`space-y-8 transition-opacity duration-500 ${formState === 'submitting' ? 'opacity-50 pointer-events-none' : ''}`}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs text-gold uppercase tracking-[0.2em] ml-1">Name</label>
                <input 
                  required 
                  type="text" 
                  className="w-full bg-charcoal border-b border-stone-700 text-paper px-4 py-3 focus:outline-none focus:border-gold transition-colors font-sans font-light placeholder-stone-700"
                  placeholder="Full Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-gold uppercase tracking-[0.2em] ml-1">Guests</label>
                <select className="w-full bg-charcoal border-b border-stone-700 text-paper px-4 py-3 focus:outline-none focus:border-gold transition-colors font-sans font-light">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gold uppercase tracking-[0.2em] ml-1">Date Preference</label>
              <input 
                required 
                type="date" 
                className="w-full bg-charcoal border-b border-stone-700 text-paper px-4 py-3 focus:outline-none focus:border-gold transition-colors font-sans font-light uppercase text-stone-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gold uppercase tracking-[0.2em] ml-1">Dietary Restrictions</label>
              <textarea 
                rows={3}
                className="w-full bg-charcoal border-b border-stone-700 text-paper px-4 py-3 focus:outline-none focus:border-gold transition-colors font-sans font-light placeholder-stone-700 resize-none"
                placeholder="Please note we cannot accommodate vegetarian or gluten-free requests due to the nature of our course."
              ></textarea>
            </div>

            <div className="pt-4 text-center">
              <button 
                type="submit"
                className="bg-gold/10 text-gold border border-gold/30 px-12 py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 w-full md:w-auto"
              >
                {formState === 'submitting' ? 'Processing...' : 'Request Booking'}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}