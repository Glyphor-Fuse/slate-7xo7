import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/8951243/pexels-photo-8951243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Close-up of salmon sushi roll on a white ceramic plate, perfect for food photography enthusiasts."
    width="6719"
    height="4355"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/salmon-sushi-on-a-ceramic-plate-8951243/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Ivan S on Pexels
    </a>
  </div>
</div>"
          alt="Masterpiece Sushi"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="block font-sans text-gold text-xs md:text-sm tracking-[0.4em] mb-6 animate-slide-up [animation-delay:200ms] opacity-0">
          EST. 1984
        </span>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-paper mb-6 leading-tight animate-slide-up [animation-delay:400ms] opacity-0 italic">
          The Art of <br /> <span className="not-italic font-display">Silence</span>
        </h2>
        <p className="font-sans text-stone-400 text-sm md:text-base tracking-wider max-w-lg mx-auto mb-12 animate-slide-up [animation-delay:600ms] opacity-0">
          An intimate omakase journey through the seasons of Kyoto.
          <br /> Twelve seats. No menu. Pure trust.
        </p>
        
        <div className="animate-slide-up [animation-delay:800ms] opacity-0">
          <a
            href="#reserve"
            className="inline-block border border-gold/50 text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-500"
          >
            Reserve Your Seat
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="text-paper w-6 h-6" />
      </div>
    </section>
  );
}