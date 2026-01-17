import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Showcase from './components/Showcase';
import Details from './components/Details';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial resource load for that "premium" feel
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-charcoal flex items-center justify-center z-50">
        <div className="flex flex-col items-center animate-pulse">
          <div className="h-16 w-16 border-t-2 border-r-2 border-gold rounded-full animate-spin mb-4"></div>
          <span className="font-display text-gold tracking-[0.3em] text-sm">KIYOMI</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col w-full overflow-hidden relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Showcase />
        <Details />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;