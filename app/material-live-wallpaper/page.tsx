import type { Metadata } from 'next';
import { Compass, Layers, TabletSmartphone } from 'lucide-react';
import AppLanding, { landingMetadata, type Feature, type Included } from '@/components/AppLanding';
import { apps } from '@/lib/apps';

// Copy: Work/material-live-wallpaper/Store Listing/2026/play-listing.md, section 2. The route keeps
// its old name because the app's settings screen links to the legal pages under it.
const app = apps['material-live-wallpaper'];

export const metadata: Metadata = landingMetadata(app);

const intro =
  'Give your home screen a surface you can almost touch. Materials is a 3D live wallpaper of realistic, real-world materials that tilt, turn and catch the light as you move your phone.';

const features: Feature[] = [
  {
    icon: Layers,
    color: '#38bdf8',
    title: '33 materials',
    body: 'Flowing lava, obsidian, amethyst, emerald and rose quartz. Hammered gold, copper plate, galvanic steel, diamond plate and a mirrored finish. Carbon fiber, a circuit board and a spaceship hull. Brick walls, basalt columns, river stones, a terracotta roof, a moon surface, desert dunes, a frozen lake, crocodile and snake skin, wood planks and more.',
  },
  {
    icon: Compass,
    color: '#a855f7',
    title: 'Moves with you',
    body: 'Two gyroscope effects, together or on their own:',
    bullets: [
      'Rotate Background: the surface turns as you tilt',
      'Rotate Light: the light sweeps across the surface, so metal gleams and stone shows its depth',
    ],
    after: 'Tune the sensitivity and springiness, invert the motion, and set how fast it follows your home screen swipes.',
  },
  {
    icon: TabletSmartphone,
    color: '#22c55e',
    title: 'Made for your screen',
    body: 'Phone or tablet scale, so every material looks right on your device. Double-tap for a random material or to open the settings.',
  },
];

const included: Included = {
  inApp: ['Stone Ground, Desert Dunes, Cafe Booth and Copper Plate', 'Every setting'],
  unlock: ['The other 29 materials'],
  note: 'The unlock is a one-time in-app purchase. No ads and no subscription.',
};

export default function MaterialLiveWallpaperPage() {
  return <AppLanding app={app} intro={intro} features={features} included={included} />;
}
