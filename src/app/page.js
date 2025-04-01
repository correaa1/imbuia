import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Influencers from '../components/Influencers';
import Drinks from '../components/Drinks';
import Events from '../components/Events';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Influencers />
      <Drinks />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
}
