export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Little Crossroads Wiki",
  shortName: "Little Crossroads",
  logoText: "LC",
  tagline: "Cozy Adventure Game Guide, Walkthrough & Secrets",
  description: "Explore Little Crossroads Wiki with detailed guides, walkthroughs, gameplay tips, secrets, locations, and helpful information for players.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://little-crossroads.wiki",
  supportEmail: "support@little-crossroads.wiki",
  gameUrl: "https://store.steampowered.com/app/3627770/Little_Crossroads/",
  heroVideoId: "emdXRUOawzw", // Little Crossroads Official Trailer
  social: {
    discord: "https://discord.gg/",
    youtube: "https://www.youtube.com/",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
};
