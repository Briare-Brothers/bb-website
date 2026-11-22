import type { Metadata } from 'next';
import { BatteryCharging, Layers, Move3d, Palette, SlidersHorizontal } from 'lucide-react';
import AppLanding, { landingMetadata, type Feature, type Included } from '@/components/AppLanding';
import { apps } from '@/lib/apps';

// Copy: Work/reactor/Store Listing/2026/play-listing.md, section 2.
const app = apps.reactor;

export const metadata: Metadata = landingMetadata(app);

const intro =
  'Turn your home screen into a window onto a living reactor core. Reactor is a real-time 3D live wallpaper: the core churns and pulses, lightning arcs to the electrodes, and the view shifts as you tilt your phone.';

const features: Feature[] = [
  {
    icon: Layers,
    color: '#f97316',
    title: 'Three sci-fi scenes',
    bullets: [
      'Circuit: the core sits on a glowing circuit board, with pulses racing along the traces',
      'Space: a core in deep space beside a black hole, a nebula and drifting dust',
      'Laboratory: a containment chamber with spinning rings at the bottom of a tall shaft',
    ],
  },
  {
    icon: Palette,
    color: '#a855f7',
    title: 'Seven colors',
    body: 'Red, Green, Blue, Yellow, Purple, Pink and White. Double-tap to switch, let the color change on its own, or let it follow your battery level.',
  },
  {
    icon: Move3d,
    color: '#3b82f6',
    title: 'Real 3D, not a video',
    body: 'Tilt your phone to look around the core (gyroscope), or let it turn as you swipe between home screen pages. Choose how far away the camera sits and how smoothly it follows.',
  },
  {
    icon: SlidersHorizontal,
    color: '#ec4899',
    title: 'Make it yours',
    body: "Set the lightning, the core's spin and pulse, the turbine and ring speed, and the space dust.",
  },
  {
    icon: BatteryCharging,
    color: '#22c55e',
    title: 'Easy on your battery',
    body: "Choose 60 or 30 frames a second. The wallpaper stops drawing whenever it's hidden, and slows down when your battery is low or battery saver is on.",
  },
];

const included: Included = {
  inApp: ['The Circuit scene', 'Red, Green and Blue', 'Every setting'],
  unlock: ['The Space and Laboratory scenes', 'Yellow, Purple, Pink and White', 'Battery colors', 'The automatic color change'],
  note: 'The unlock is a one-time in-app purchase. No ads and no subscription. Bought the paid version years ago? Update it on the same phone and everything stays unlocked.',
};

export default function ReactorPage() {
  return <AppLanding app={app} intro={intro} features={features} included={included} />;
}
