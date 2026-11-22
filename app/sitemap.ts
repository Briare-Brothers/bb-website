import type { MetadataRoute } from 'next';
import { SITE_URL, appPath, appSlugs, apps, privacyPath, termsPath } from '@/lib/apps';

// The site is a static export, so the sitemap is written to out/sitemap.xml at build time.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const appPages = appSlugs.flatMap((slug) => {
    const app = apps[slug];
    return [
      { url: `${SITE_URL}${appPath(app)}`, changeFrequency: 'monthly' as const, priority: 0.8 },
      { url: `${SITE_URL}${privacyPath(app)}`, changeFrequency: 'yearly' as const, priority: 0.3 },
      { url: `${SITE_URL}${termsPath(app)}`, changeFrequency: 'yearly' as const, priority: 0.3 },
    ];
  });

  return [{ url: SITE_URL, changeFrequency: 'monthly', priority: 1 }, ...appPages];
}
