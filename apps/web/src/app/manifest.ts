import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "STRATUM — Pan-African Market Intelligence & Intermediation",
    short_name: "STRATUM",
    description:
      "Bridging Investment Gaps Across Africa Through Intelligence, Insight & Intermediation.",
    start_url: "/",
    display: "standalone",
    background_color: "#00182E",
    theme_color: "#002B49",
    icons: [
      {
        src: "/images/logo/stratfavicon.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
