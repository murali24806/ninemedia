import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Get Brand Growth Quote & Strategy Consultation",
  description:
    "Get in touch with Nine Media Brand Solutions in Hyderabad. Book a strategy consultation for digital marketing, web design, or video production.",
  alternates: {
    canonical: "https://ninemedia.in/contact",
  },
  openGraph: {
    title: "Contact Nine Media | Get Brand Growth Quote",
    description:
      "Get in touch with Nine Media Brand Solutions in Hyderabad. Book a consultation today.",
    url: "https://ninemedia.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[#08090D] min-h-screen text-slate-100 selection:bg-nm-orange selection:text-white pt-10">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}
