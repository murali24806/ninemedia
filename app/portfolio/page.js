import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Selected Work & Portfolio | High-Impact Brand Showcase",
  description:
    "Browse Nine Media's work portfolio featuring high-converting brand campaigns, web design projects, beverage marketing, and video production.",
  alternates: {
    canonical: "https://ninemedia.in/portfolio",
  },
  openGraph: {
    title: "Portfolio & Work Samples | Nine Media",
    description:
      "Explore selected brand campaigns, design projects, and performance marketing cases by Nine Media.",
    url: "https://ninemedia.in/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <main className="bg-[#08090D] min-h-screen text-slate-100 selection:bg-nm-orange selection:text-white pt-10">
      <Header />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
