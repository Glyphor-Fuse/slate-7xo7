import { MapPin, Clock, Info } from 'lucide-react';

export default function Details() {
  return (
    <section id="details" className="py-24 bg-charcoal border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Location */}
          <div className="flex flex-col items-center text-center px-4 pt-8 lg:pt-0">
            <MapPin className="text-gold w-8 h-8 mb-6" strokeWidth={1} />
            <h4 className="font-display text-lg text-paper tracking-widest mb-4">Location</h4>
            <p className="text-stone-400 font-sans text-sm leading-relaxed">
              Gion District, Kyoto<br />
              605-0074 Japan<br />
              <span className="text-xs text-stone-600 mt-2 block">(Hidden entrance via bamboo path)</span>
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center text-center px-4 pt-8 lg:pt-0">
            <Clock className="text-gold w-8 h-8 mb-6" strokeWidth={1} />
            <h4 className="font-display text-lg text-paper tracking-widest mb-4">Hours</h4>
            <div className="text-stone-400 font-sans text-sm leading-relaxed space-y-1">
              <p><span className="text-stone-500 w-12 inline-block">Tue-Sat</span> 18:00 - 22:30</p>
              <p><span className="text-stone-500 w-12 inline-block">Sun</span> 17:00 - 21:00</p>
              <p className="text-gold/70 mt-2">Closed Mondays</p>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col items-center text-center px-4 pt-8 lg:pt-0">
            <Info className="text-gold w-8 h-8 mb-6" strokeWidth={1} />
            <h4 className="font-display text-lg text-paper tracking-widest mb-4">Guidance</h4>
            <p className="text-stone-400 font-sans text-sm leading-relaxed max-w-xs">
              ¥33,000 per person<br />
              Service charge not included.<br />
              <span className="text-stone-600 block mt-2">We kindly ask guests to refrain from wearing strong fragrances.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}