const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjI4MjUwNiwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDkwRDJmQzAwMzQ4MzY2MjkxYmIxYWQ1QmZkMkJCMkY2ODE1MjEwZDYifQ",
    payload: "eyJkb21haW4iOiJ3YWl0bGlzdC1kZW1vLXZpcmlkLnZlcmNlbC5hcHAifQ",
    signature: "AAAAAAAAAAAAAAAAyhG94Fl3s2MRZwKIYr4qFzl2yhEAAAAAAAA..."
  },
  miniapp: {
    version: "1",
    name: "Waitlist Demo",
    subtitle: "Early Access",
    description: "Join our early access waitlist",
    primaryCategory: "social",
    tags: ["waitlist", "base", "miniapp", "marketing", "ads", "quickstart"],
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;
