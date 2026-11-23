import type { Metadata } from 'next';
import { BatteryCharging, BatteryMedium, Hand, Moon, Palette } from 'lucide-react';
import AppLanding, { landingMetadata, type Feature, type Included } from '@/components/AppLanding';
import { apps } from '@/lib/apps';

// Copy: Work/enchanted-rose/Store Listing/2026/play-listing.md, section 2. Keep film and character
// names out of it.
const app = apps['enchanted-rose'];

export const metadata: Metadata = landingMetadata(app);

const intro =
  'A single rose under glass, alive on your home screen. Enchanted Rose is a 3D live wallpaper that doubles as a battery meter: as your battery drains, the rose wilts and its petals fall. Plug in your phone and watch life flow back into it.';

const features: Feature[] = [
  {
    icon: BatteryCharging,
    color: '#f43f5e',
    title: 'Your battery, as a rose',
    bullets: [
      'Full bloom at full charge, wilting as the battery runs down',
      'Petals fall one by one as you use your phone',
      'Charging effect: life visibly flows back into the rose while you charge',
      'Life control: slide your finger up and down to bloom and wilt it yourself',
    ],
  },
  {
    icon: Moon,
    color: '#a855f7',
    title: 'A room of its own',
    body: 'Six backgrounds, led by a moonlit gothic room with swaying curtains and an open balcony. Or place the rose on a forest path, in a garden, by a bridge, on a shore or in an old mill.',
  },
  {
    icon: Palette,
    color: '#ec4899',
    title: 'Design your rose',
    bullets: [
      '9 petal colors, from classic Red to Black',
      'Stone, wood or marble pedestal',
      '4 glass jar styles, or no jar at all',
      'Sparkles, rotation speed and camera distance',
    ],
  },
  {
    icon: Hand,
    color: '#3b82f6',
    title: 'Touch and tilt',
    body: 'Swipe to turn the rose, double-tap to change the petal color, and tilt your phone to look around the jar.',
  },
  {
    icon: BatteryMedium,
    color: '#22c55e',
    title: 'Easy on your battery',
    body: "When nothing moves, the wallpaper draws at a calm 30 frames a second, and it stops drawing whenever it's hidden.",
  },
];

const included: Included = {
  inApp: ['Every background, petal color and pedestal', 'The battery bloom and falling petals', 'The charging effect and tilt'],
  unlock: ['Life control', 'Three more glass jar styles', 'Settings for sparkles, the charging effect and the gyroscope'],
  note: 'The unlock is a one-time in-app purchase. No ads and no subscription. If you bought the unlock before, you keep it.',
};

export default function EnchantedRosePage() {
  return <AppLanding app={app} intro={intro} features={features} included={included} />;
}
