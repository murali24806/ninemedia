export default function sitemap() {
  const baseUrl = "https://www.ninemedia.co.in";
  const currentDate = new Date().toISOString();

  const routes = [
    { url: "", priority: 1.0, changeFrequency: "daily" },
    { url: "/about", priority: 0.9, changeFrequency: "weekly" },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" },
    { url: "/portfolio", priority: 0.9, changeFrequency: "weekly" },
    { url: "/case-studies", priority: 0.9, changeFrequency: "weekly" },
    { url: "/careers", priority: 0.8, changeFrequency: "weekly" },
    { url: "/contact", priority: 0.8, changeFrequency: "weekly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
