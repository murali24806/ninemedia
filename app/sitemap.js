export default function sitemap() {
  const baseUrl = "https://ninemedia.in";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/#about",
    "/#services",
    "/#portfolio",
    "/#case-studies",
    "/#testimonials",
    "/#faq",
    "/#careers",
    "/#contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
