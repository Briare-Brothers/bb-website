// The five live wallpaper apps: the facts the landing pages, their layouts, the sitemap and the
// home page's product cards share. Page copy lives in each app's own `app/<slug>/page.tsx`.

export const SITE_URL = 'https://www.briarebrothers.com';

export type AppSlug = 'reactor' | 'enchanted-rose' | 'material-live-wallpaper' | 'gangsters-paradise' | 'hexorb';

export interface WallpaperApp {
  slug: AppSlug;
  /** Short name used in the header, buttons and the home card. */
  name: string;
  /** Words after the name in the H1 and page title, e.g. "3D Live Wallpaper". */
  kind: string;
  packageId: string;
  /** The Play short description; the page lead and the home card text. */
  shortDescription: string;
  /** The meta description for search results and link previews. */
  metaDescription: string;
}

export const apps: Record<AppSlug, WallpaperApp> = {
  reactor: {
    slug: 'reactor',
    name: 'Reactor',
    kind: '3D Live Wallpaper',
    packageId: 'com.space.reactor',
    shortDescription: 'A glowing 3D reactor core with lightning that moves as you tilt your phone.',
    metaDescription:
      'Reactor is a real-time 3D live wallpaper for Android: a glowing reactor core with lightning that moves as you tilt your phone. Three sci-fi scenes, seven colors.',
  },
  'enchanted-rose': {
    slug: 'enchanted-rose',
    name: 'Enchanted Rose',
    kind: 'Live Wallpaper',
    packageId: 'com.space.enchantedrose',
    shortDescription: 'A 3D rose under glass that wilts and drops petals as your battery runs down.',
    metaDescription:
      'Enchanted Rose is a 3D live wallpaper for Android that doubles as a battery meter: a rose under glass that wilts and drops its petals as your battery runs down.',
  },
  'material-live-wallpaper': {
    slug: 'material-live-wallpaper',
    name: 'Materials',
    kind: '3D Live Wallpaper',
    packageId: 'com.space.materiallwp',
    shortDescription: '33 real 3D materials, from flowing lava to carbon fiber, that tilt with you.',
    metaDescription:
      'Materials is a 3D live wallpaper for Android: 33 realistic materials, from flowing lava to carbon fiber, that tilt, shift and catch the light as you move your phone.',
  },
  'gangsters-paradise': {
    slug: 'gangsters-paradise',
    name: 'Gangsters Paradise',
    kind: 'Live Wallpaper',
    packageId: 'com.space.gangsters',
    shortDescription: 'A 3D mafia hideout on your home screen, with rising smoke and a working clock.',
    metaDescription:
      'Gangsters Paradise is a 3D live wallpaper for Android: a mafia hideout with rising smoke, swappable props and a wall clock that keeps your real local time.',
  },
  hexorb: {
    slug: 'hexorb',
    name: 'HexOrb',
    kind: '3D Live Wallpaper',
    packageId: 'com.space.hexorb',
    shortDescription: 'A glowing 3D hexagon orb that ripples at your touch and lights up as you charge.',
    metaDescription:
      'HexOrb is a 3D live wallpaper for Android: a glowing orb of hexagons that ripples at your touch, spins with your swipes and lights up when you plug in.',
  },
};

/** Display order for the sitemap. */
export const appSlugs: AppSlug[] = ['enchanted-rose', 'reactor', 'material-live-wallpaper', 'hexorb', 'gangsters-paradise'];

/** H1 and JSON-LD name, e.g. "Reactor 3D Live Wallpaper". */
export const fullName = (app: WallpaperApp) => `${app.name} ${app.kind}`;

export const playUrl = (app: WallpaperApp) => `https://play.google.com/store/apps/details?id=${app.packageId}`;

export const appPath = (app: WallpaperApp) => `/${app.slug}`;
export const privacyPath = (app: WallpaperApp) => `/${app.slug}/privacy-policy`;
export const termsPath = (app: WallpaperApp) => `/${app.slug}/terms-of-service`;

/** Images under public/apps/<slug>/. The file names are fixed: swap the files, not the code. */
export const iconPath = (app: WallpaperApp) => `/apps/${app.slug}/icon.png`;
export const ogImagePath = (app: WallpaperApp) => `/apps/${app.slug}/og.jpg`;
export const screenshotPaths = (app: WallpaperApp) =>
  [1, 2, 3, 4].map((n) => `/apps/${app.slug}/screen-${n}.jpg`);
