import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import StatsBar from './components/StatsBar';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <HeroCanvas />
      <StatsBar />
      <Services />
      <About />
      <WhyUs />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
