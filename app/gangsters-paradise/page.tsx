import type { Metadata } from 'next';
import { BatteryMedium, Clock, Compass, Layers, Wine } from 'lucide-react';
import AppLanding, { landingMetadata, type Feature, type Included } from '@/components/AppLanding';
import { apps } from '@/lib/apps';

// Copy: Work/gangsters-paradise/Store Listing/2026/play-listing.md, section 2. Keep brand names and
// song lyrics out of it.
const app = apps['gangsters-paradise'];

export const metadata: Metadata = landingMetadata(app);

const intro =
  "Bring the hideout home. Gangsters Paradise is a 3D live wallpaper of a gangster's table, close enough to touch: smoke curling up from the ashtray, a drink, a pistol, stacks of cash, and a wall clock that keeps your real local time.";

const features: Feature[] = [
  {
    icon: Layers,
    color: '#3b82f6',
    title: 'Two hideouts',
    bullets: [
      'The Basement: a gritty underground room',
      'The Yakuza Den: a lantern-lit Japanese room with glowing paper screens',
    ],
  },
  {
    icon: Wine,
    color: '#a855f7',
    title: 'Set the table',
    body: 'Choose the drink, the smoke, the gun and the ashtray. Turn the rising smoke and the falling dust on or off.',
  },
  {
    icon: Clock,
    color: '#f59e0b',
    title: 'A clock that keeps time',
    body: "The clock on the wall shows your phone's real local time, hour and minute hands moving through the day.",
  },
  {
    icon: Compass,
    color: '#ec4899',
    title: 'Real 3D depth',
    body: 'Tilt your phone to look around the table. The camera turns as you swipe between home screen pages, or swipe to rotate it yourself. Double-tap to open the settings or re-center the camera.',
  },
  {
    icon: BatteryMedium,
    color: '#22c55e',
    title: 'Easy on your battery',
    body: "Runs at a steady 30 frames a second and stops drawing whenever it's hidden.",
  },
];

const included: Included = {
  inApp: ['Both hideouts', 'Every prop: the drink, smoke, gun and ashtray', 'Every setting'],
  note: 'No ads and no in-app purchases.',
};

export default function GangstersParadisePage() {
  return (
    <AppLanding
      app={app}
      intro={intro}
      features={features}
      included={included}
    />
  );
}
