import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | Whole-Brain Growth Agency Hyderabad",
  description:
    "Learn about Nine Media's whole-brain marketing strategy, data-driven analytical engine, and high-impact visual creative team in Hyderabad.",
  alternates: {
    canonical: "https://ninemedia.in/about",
  },
  openGraph: {
    title: "About Nine Media | Integrated Marketing Agency Hyderabad",
    description:
      "Learn about Nine Media's whole-brain marketing strategy, data-driven analytical engine, and high-impact visual creative team.",
    url: "https://ninemedia.in/about",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-[#08090D] min-h-screen text-slate-100 selection:bg-nm-orange selection:text-white pt-10">
      <Header />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
