export default function Showcase() {
  const items = [
    {
      title: "Akami",
      desc: "Bluefin Tuna",
      img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/11255187/pexels-photo-11255187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Gray concrete paving stones in an interlocking pattern creating a textured surface."
    width="4096"
    height="4096"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/photograph-of-paving-stones-11255187/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Seamlesstextures on Pexels
    </a>
  </div>
</div>"
    },
    {
      title: "Uni",
      desc: "Sea Urchin",
      img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/7243416/pexels-photo-7243416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Close-up of appetizing vegetable sushi rolls garnished on a black plate, perfect for Asian cuisine enthusiasts."
    width="4000"
    height="4000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/close-up-shot-of-a-delicious-sushi-on-a-black-plate-7243416/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Emmanuel Zua on Pexels
    </a>
  </div>
</div>"
    },
    {
      title: "Kohada",
      desc: "Gizzard Shad",
      img: "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/14469273/pexels-photo-14469273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
    alt="Delicious crispy sushi rolls topped with fried ingredients served on a wooden tray in a restaurant setting."
    width="4083"
    height="4083"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/close-up-shot-of-slices-of-sushi-14469273/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Alan Retano on Pexels
    </a>
  </div>
</div>"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-charcoal-light relative overflow-hidden">
      {/* Decorative BG Text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
         <span className="font-display text-[20vw] leading-none text-paper select-none absolute -top-20 -left-20">OMAKASE</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-xs tracking-[0.3em] uppercase block mb-4">The Selection</span>
          <h3 className="font-serif text-3xl md:text-4xl text-paper italic">Seasonal Highlights</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="group cursor-default">
              <div className="overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
              </div>
              <div className="text-center">
                <h4 className="font-display text-xl text-paper mb-1 tracking-widest">{item.title}</h4>
                <p className="font-serif text-stone-500 italic text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-stone-400 font-sans text-sm tracking-wide max-w-xl mx-auto">
            Our menu changes daily based on availability. The full Omakase course consists of 20 pieces, starting with light appetizers and progressing to heavier flavors.
          </p>
        </div>
      </div>
    </section>
  );
}