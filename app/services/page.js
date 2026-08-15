import Header from "../components/Header";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Core Services | Digital Marketing, Web Design & Video Production",
  description:
    "Explore Nine Media's integrated marketing services: Web Development, Meta & Google Ads, SEO, High-End Video Production, and Social Media Growth in Hyderabad.",
  alternates: {
    canonical: "https://ninemedia.in/services",
  },
  openGraph: {
    title: "Core Marketing Services | Nine Media Hyderabad",
    description:
      "Integrated Web Design, Meta & Google Ads, SEO, Video Production, and SMM under one accountable roof.",
    url: "https://ninemedia.in/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-[#08090D] min-h-screen text-slate-100 selection:bg-nm-orange selection:text-white pt-10">
      <Header />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
