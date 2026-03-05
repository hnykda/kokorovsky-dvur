import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://kokorovsky-dvur.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/historie`, priority: 0.8 },
    { url: `${BASE_URL}/obnova`, priority: 0.8 },
    { url: `${BASE_URL}/zluticky-zamek`, priority: 0.7 },
    { url: `${BASE_URL}/chci-prispet`, priority: 0.9 },
    { url: `${BASE_URL}/aktuality`, priority: 0.8 },
    { url: `${BASE_URL}/partneri`, priority: 0.6 },
  ];
}
