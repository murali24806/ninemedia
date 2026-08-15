import Header from "../components/Header";
import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Client Case Studies & Expansion Metrics | Proven Track Record",
  description:
    "Read real client case studies and performance growth metrics delivered by Nine Media across hospitality, sports, D2C, and education sectors.",
  alternates: {
    canonical: "https://ninemedia.in/case-studies",
  },
  openGraph: {
    title: "Client Case Studies | Nine Media",
    description:
      "Real growth metrics, campaigns, and ROI results delivered for SUN International, Hatrick Sports, The Park Hotels, and more.",
    url: "https://ninemedia.in/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="bg-[#08090D] min-h-screen text-slate-100 selection:bg-nm-orange selection:text-white pt-10">
      <Header />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
