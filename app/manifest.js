export default function manifest() {
  return {
    name: "Nine Media Brand Solutions",
    short_name: "Nine Media",
    description:
      "Integrated branding & digital marketing agency helping brands sell more since 2018.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090D",
    theme_color: "#08090D",
    icons: [
      {
        src: "/logo-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
