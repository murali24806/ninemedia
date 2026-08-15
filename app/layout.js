import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata = {
  metadataBase: new URL("https://www.ninemedia.co.in"),
  title: {
    default: "Nine Media | Integrated Branding & Digital Marketing Agency Hyderabad",
    template: "%s | Nine Media Hyderabad",
  },
  description:
    "Nine Media is a top integrated branding & digital marketing agency in Hyderabad helping brands sell more since 2018. Expert web design, Meta ads, SEO, video production, and SMM.",
  keywords: [
    "Nine Media",
    "Nine Media Hyderabad",
    "Digital Marketing Agency Hyderabad",
    "Branding Agency Hyderabad",
    "Best Digital Marketing Agency in Hyderabad",
    "Web Design Agency Hyderabad",
    "SEO Services Hyderabad",
    "Meta Ads Agency",
    "Video Production House Hyderabad",
    "Social Media Marketing Agency",
    "Performance Marketing Hyderabad",
    "Integrated Marketing Agency",
  ],
  authors: [{ name: "Nine Media Brand Solutions", url: "https://www.ninemedia.co.in" }],
  creator: "Nine Media Brand Solutions",
  publisher: "Nine Media Brand Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.ninemedia.co.in",
  },
  icons: {
    icon: [
      { url: "/logo-icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo-icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nine Media | Integrated Branding & Digital Marketing Agency Hyderabad",
    description:
      "Nine Media is a top integrated branding & digital marketing agency in Hyderabad helping brands sell more since 2018. Web design, Meta ads, SEO, video production & SMM under one roof.",
    url: "https://www.ninemedia.co.in",
    siteName: "Nine Media Brand Solutions",
    images: [
      {
        url: "/logo-icon.png",
        width: 512,
        height: 512,
        alt: "Nine Media Brand Solutions Logo Icon",
      },
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Nine Media Brand Solutions - Integrated Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nine Media | Integrated Branding & Digital Marketing Agency Hyderabad",
    description:
      "Top integrated branding & digital marketing agency in Hyderabad helping brands scale since 2018.",
    images: ["/logo-icon.png"],
    creator: "@ninemediain",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "SkOBm5tvLeHcmDoFKgPvjK3H22NKdG6QCzbOUJXcSBY",
  },
  other: {
    "google-site-verification": "SkOBm5tvLeHcmDoFKgPvjK3H22NKdG6QCzbOUJXcSBY",
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.385044;78.486671",
    ICBM: "17.385044, 78.486671",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.ninemedia.co.in/#organization",
  name: "Nine Media Brand Solutions",
  alternateName: "Nine Media",
  url: "https://www.ninemedia.co.in",
  logo: "https://www.ninemedia.co.in/logo-icon.png",
  image: "https://www.ninemedia.co.in/logo-full.png",
  description:
    "Top integrated branding & digital marketing agency in Hyderabad helping client brands scale sales revenue, digital presence, and customer engagement since 2018.",
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9063483601",
    contactType: "customer service",
    email: "ninemedia.in@gmail.com",
    areaServed: ["IN", "Worldwide"],
    availableLanguage: ["English", "Hindi", "Telugu"],
  },
  sameAs: [
    "https://www.instagram.com/ninemediain",
    "https://www.linkedin.com/company/ninemediain",
  ],
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.ninemedia.co.in/#localbusiness",
  name: "Nine Media Brand Solutions - Digital Marketing Agency Hyderabad",
  image: "https://www.ninemedia.co.in/logo-full.png",
  url: "https://www.ninemedia.co.in",
  telephone: "+91-9063483601",
  email: "ninemedia.in@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.385044,
    longitude: 78.486671,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:00",
    },
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.ninemedia.co.in/#website",
  url: "https://www.ninemedia.co.in",
  name: "Nine Media Brand Solutions",
  description: "Integrated Branding & Digital Marketing Agency in Hyderabad",
  publisher: {
    "@id": "https://www.ninemedia.co.in/#organization",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can Nine Media launch our marketing campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Initial strategy alignment and onboarding take 3-5 days. For digital ads and social media management, campaigns can go live within 7 business days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle custom video production and corporate films?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Nine Media provides full-service video production from script writing, filming, equipment setup, motion design to post-production editing.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Nine Media different from traditional agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We bridge traditional branding with data-driven performance digital marketing. One accountable team handles your design, ad spend, and content.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Nine Media located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our headquarters are located in Hyderabad. We serve client brands across India and internationally.",
      },
    },
    {
      "@type": "Question",
      name: "Can we get a custom tailored marketing package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We create custom growth retainers based on your exact targets, ad spend, and brand assets. Contact us on WhatsApp or email for a custom quote.",
      },
    },
  ],
};

const jsonLdSiteNavigation = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Site Navigation Sitelinks",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "About Us",
      description: "Learn about Nine Media's whole-brain marketing & strategy team",
      url: "https://www.ninemedia.co.in/about",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Core Services",
      description: "Integrated web design, Meta ads, SEO, video production & SMM",
      url: "https://www.ninemedia.co.in/services",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Portfolio",
      description: "Explore our portfolio of high-converting brand campaigns",
      url: "https://www.ninemedia.co.in/portfolio",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Case Studies",
      description: "Proven track record of growth metrics delivered for client brands",
      url: "https://www.ninemedia.co.in/case-studies",
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Careers",
      description: "Join Nine Media's creative marketing team in Hyderabad",
      url: "https://www.ninemedia.co.in/careers",
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Contact Us",
      description: "Get in touch for a custom brand growth strategy",
      url: "https://www.ninemedia.co.in/contact",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="SkOBm5tvLeHcmDoFKgPvjK3H22NKdG6QCzbOUJXcSBY" />
        <link rel="icon" href="/logo-icon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/logo-icon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              jsonLdOrganization,
              jsonLdLocalBusiness,
              jsonLdWebSite,
              jsonLdFaq,
              jsonLdSiteNavigation,
            ]),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <CustomCursor />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
