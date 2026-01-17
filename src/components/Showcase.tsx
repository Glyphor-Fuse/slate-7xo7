export default function Showcase() {
  const items = [
    {
      title: "Akami",
      desc: "Bluefin Tuna",
      img: "https://images.pexels.com/photos/11255187/pexels-photo-11255187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      title: "Uni",
      desc: "Sea Urchin",
      img: "https://images.pexels.com/photos/7243416/pexels-photo-7243416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      title: "Kohada",
      desc: "Gizzard Shad",
      img: "https://images.pexels.com/photos/14469273/pexels-photo-14469273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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