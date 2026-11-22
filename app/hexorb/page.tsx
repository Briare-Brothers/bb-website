import type { Metadata } from 'next';
import { BatteryMedium, Hand, Palette, Sparkles, Zap } from 'lucide-react';
import AppLanding, { landingMetadata, type Feature, type Included } from '@/components/AppLanding';
import { apps } from '@/lib/apps';

// Copy: Work/hexorb/Store Listing/2026/play-listing.md, section 2. It describes version 7.0 (Bloom,
// nine colors, the pay-what-you-like unlock); check it matches the build on Play's production track.
const app = apps.hexorb;

export const metadata: Metadata = landingMetadata(app);

const intro =
  'A glowing orb of living hexagons, floating on your home screen. HexOrb is a 3D live wallpaper that ripples when you touch it, spins with your swipes and lights up when you plug in.';

const features: Feature[] = [
  {
    icon: Hand,
    color: '#ef4444',
    title: 'Touch it',
    body: 'Tap the orb and a pulse ripples across its hexagon shell. Swipe to spin it and let it coast to a stop, or let it turn with your home screen pages.',
  },
  {
    icon: Zap,
    color: '#f59e0b',
    title: 'It knows when you charge',
    body: "Plug in your phone and a corona of light rays bursts from the orb's core.",
  },
  {
    icon: Palette,
    color: '#a855f7',
    title: 'Nine colors',
    body: 'Red, Blue, Yellow, Orange, Green, Cyan, Purple, Pink and White. Double-tap to switch colors on the fly.',
  },
  {
    icon: Sparkles,
    color: '#ec4899',
    title: 'Premium glow',
    body: 'Unlock Bloom, a soft glow around every hex line; a brightness control; and battery color, which shifts the orb between green and red with your battery level.',
  },
  {
    icon: BatteryMedium,
    color: '#22c55e',
    title: 'Easy on your battery',
    body: "HexOrb idles at 30 frames a second, speeds up only while you interact, and stops drawing whenever it's hidden.",
  },
];

const included: Included = {
  inApp: ['All nine colors', 'Touch pulses', 'The charging effect', 'Every control'],
  unlockLabel: 'Pay what you like, once, to unlock',
  unlock: ['Bloom', 'A brightness control', 'Battery color'],
  note: 'No ads and no subscription.',
};

export default function HexOrbPage() {
  return <AppLanding app={app} intro={intro} features={features} included={included} />;
}
