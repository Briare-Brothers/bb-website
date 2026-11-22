import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/apps';

// The site is a static export, so robots.txt is written to out/robots.txt at build time.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
