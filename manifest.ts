import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sylvorn",
    short_name: "Sylvorn",
    description: "Sylvorn delivers cutting-edge IT services, custom software development, and SaaS solutions. Empower your business with our expertise.",
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
