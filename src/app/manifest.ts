import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Farteks",
    short_name: "Farteks",
    description: "Hydraulic cylinder components manufacturer and OEM supplier.",
    start_url: "/home",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#392B87",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
