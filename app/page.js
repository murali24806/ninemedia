import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroScrollShowcase from "./components/HeroScrollShowcase";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Portfolio from "./components/Portfolio";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import PricingCalculator from "./components/PricingCalculator";
import FAQ from "./components/FAQ";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#08090D] min-h-screen text-slate-100 selection:bg-nm-orange selection:text-white">
      <Header />
      <Hero />
      <HeroScrollShowcase />
      <About />
      <Services />
      <Clients />
      <Portfolio />
      <CaseStudies />
      <Testimonials />
      <PricingCalculator />
      <FAQ />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
