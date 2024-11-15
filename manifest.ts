import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prayam Infosoft",
    short_name: "Prayam Infosoft",
    description: "Prayam Infosoft delivers cutting-edge IT services, custom software development, and SaaS solutions. Empower your business with our expertise.",
    start_url: "/",
    display: "standalone",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
