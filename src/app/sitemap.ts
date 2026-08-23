import { MetadataRoute } from "next";
import { MOCK_DOCTORS } from "@/components/doctors/DoctorsSection";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.unityonehealthcentre.com";

  const doctorUrls = MOCK_DOCTORS.map((doc) => ({
    url: `${baseUrl}/doctors/${doc.slug}`,
    lastModified: new Date(),
  }));

  const routes = ["", "/about", "/contact", "/privacy", "/terms"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.7,
  }));

  return [...routes, ...doctorUrls];
}