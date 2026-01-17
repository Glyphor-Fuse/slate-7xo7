export default function Footer() {
  return (
    <footer className="bg-charcoal py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="font-display text-2xl text-stone-500 tracking-[0.2em] mb-8">KIYOMI</h2>
        
        <div className="flex space-x-8 mb-8">
          <a href="#" className="text-stone-600 hover:text-gold transition-colors text-xs uppercase tracking-widest">Instagram</a>
          <a href="#" className="text-stone-600 hover:text-gold transition-colors text-xs uppercase tracking-widest">Email</a>
        </div>

        <p className="text-[10px] text-stone-700 tracking-widest uppercase text-center">
          &copy; {new Date().getFullYear()} Kiyomi Kyoto. All rights reserved.
        </p>
      </div>
    </footer>
  );
}