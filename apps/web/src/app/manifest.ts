import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "STRATUM — Pan-African Market Intelligence & Intermediation",
    short_name: "STRATUM",
    description:
      "Bridging Investment Gaps Across Africa Through Intelligence, Insight & Intermediation.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0d14",
    theme_color: "#1E56FF",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
