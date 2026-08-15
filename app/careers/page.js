import Header from "../components/Header";
import Careers from "../components/Careers";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Careers & Job Openings | Join Nine Media Team in Hyderabad",
  description:
    "We are hiring! Explore open roles for Creative Strategists, Performance Marketers, Motion Designers, and Account Managers at Nine Media Hyderabad.",
  alternates: {
    canonical: "https://ninemedia.in/careers",
  },
  openGraph: {
    title: "Careers at Nine Media | Job Openings in Hyderabad",
    description:
      "Join Nine Media's creative marketing and performance growth team in Hyderabad. Apply now.",
    url: "https://ninemedia.in/careers",
  },
};

export default function CareersPage() {
  return (
    <main className="bg-[#08090D] min-h-screen text-slate-100 selection:bg-nm-orange selection:text-white pt-10">
      <Header />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}
