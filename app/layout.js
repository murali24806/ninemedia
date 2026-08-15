import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata = {
  metadataBase: new URL("https://ninemedia.in"),
  title: {
    default: "Nine Media | Integrated Branding & Digital Marketing Agency",
    template: "%s | Nine Media",
  },
  description:
    "Nine Media is an integrated branding & digital marketing agency helping brands sell more since 2018. Web design, digital marketing, video production, and social media growth.",
  keywords: [
    "Nine Media",
    "Digital Marketing Agency",
    "Branding Agency Hyderabad",
    "Web Design Hyderabad",
    "SEO Services",
    "Meta Ads",
    "Video Production",
    "Social Media Marketing",
  ],
  authors: [{ name: "Nine Media Brand Solutions" }],
  creator: "Nine Media",
  publisher: "Nine Media",
  icons: {
    icon: [
      { url: "/logo-icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/logo-icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Nine Media | Integrated Branding & Digital Marketing Agency",
    description:
      "Nine Media is an integrated branding & digital marketing agency helping brands sell more since 2018. Web design, digital marketing, video production, and social media growth.",
    url: "https://ninemedia.in",
    siteName: "Nine Media Brand Solutions",
    images: [
      {
        url: "/logo-icon.png",
        width: 512,
        height: 512,
        alt: "Nine Media Logo Icon",
      },
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Nine Media Brand Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nine Media | Integrated Branding & Digital Marketing Agency",
    description:
      "Integrated branding & digital marketing agency helping brands sell more since 2018.",
    images: ["/logo-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nine Media Brand Solutions",
  url: "https://ninemedia.in",
  logo: "https://ninemedia.in/logo-icon.png",
  image: "https://ninemedia.in/logo-icon.png",
  description:
    "Integrated branding & digital marketing agency helping brands sell more since 2018.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9063483601",
    contactType: "customer service",
    email: "ninemedia.in@gmail.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
