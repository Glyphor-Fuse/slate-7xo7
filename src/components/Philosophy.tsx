export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 md:py-32 bg-charcoal relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <div className="order-2 md:order-1 space-y-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-xs tracking-[0.3em] uppercase">Philosophy</span>
          </div>
          
          <h3 className="font-serif text-4xl md:text-5xl text-paper leading-snug">
            Honoring the <span className="italic text-stone-400">imperfection</span> of nature.
          </h3>
          
          <div className="space-y-6 text-stone-400 font-sans text-sm md:text-base leading-relaxed text-balance">
            <p>
              At Kiyomi, we believe that sushi is not merely food, but a dialogue between the chef, the guest, and the season. We follow the ancient principle of <em className="text-paper font-serif">Shun</em> (旬) — serving ingredients only at their absolute peak of flavor.
            </p>
            <p>
              Our rice is sourced from a single farm in Niigata, seasoned with red vinegar aged for three years. Every cut is deliberate. Every course tells a story of the mountains and seas surrounding Kyoto.
            </p>
          </div>

          <div className="pt-4">
            <img 
              src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/30705879/pexels-photo-30705879.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Macro shot of a pen writing a signature on white paper, emphasizing precision."
    width="4000"
    height="3000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/close-up-of-pen-writing-on-paper-with-signature-30705879/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Muhammed Shafiqul  Islam on Pexels
    </a>
  </div>
</div>" 
              alt="Chef Signature" 
              className="h-16 opacity-60 invert"
            />
            <p className="text-xs text-stone-500 tracking-widest mt-2 uppercase">Head Chef Jiro Tanaka</p>
          </div>
        </div>

        {/* Image Side */}
        <div className="order-1 md:order-2 relative group">
          <div className="absolute top-4 -right-4 w-full h-full border border-gold/20 z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
          <img 
            src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/3296395/pexels-photo-3296395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Close-up of a chef slicing fresh tuna on a wooden board in a kitchen."
    width="2832"
    height="4240"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/person-slicing-fish-meat-3296395/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by cottonbro studio on Pexels
    </a>
  </div>
</div>" 
            alt="Chef Precision" 
            className="relative z-10 w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </div>

      </div>
    </section>
  );
}