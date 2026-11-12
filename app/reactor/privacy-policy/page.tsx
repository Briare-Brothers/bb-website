import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Reactor Privacy Policy',
  description:
    'Privacy policy for The Reactor live wallpaper for Android by Briare Brothers. The app has no ads, analytics or accounts and collects no personal information; Google Play handles its in-app purchase.',
  alternates: {
    canonical: 'https://briarebrothers.com/reactor/privacy-policy',
  },
};

const linkClass = 'text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/40 transition-colors';
const strongClass = 'text-white font-semibold';

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 pt-8 border-t border-white/[0.06] text-xl font-bold tracking-tight text-white">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-zinc-400 leading-relaxed">{children}</p>;
}

function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="mb-4 list-disc pl-6 space-y-2 text-zinc-400 leading-relaxed">{children}</ul>;
}

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 pb-24 md:pt-24">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">The Reactor</p>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
        <span className="gradient-text">Privacy Policy</span>
      </h1>
      <p className="text-zinc-400">The Reactor live wallpaper for Android</p>
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 12, 2026</p>

      <p className="border-l-2 border-blue-500 pl-5 py-1 text-zinc-300 leading-relaxed">
        <strong className={strongClass}>The short version:</strong> The Reactor does not collect, store, share or sell
        any personal information. Your settings stay on your phone, and Google Play handles the optional in-app
        purchase.
      </p>

      <H2>Who we are</H2>
      <P>
        The Reactor (“the app”) is an Android live wallpaper published by Briare Brothers (“we”, “us”) as Space Cadet
        Apps, under the package name{' '}
        <code className="px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.06] font-mono text-[0.9em] text-zinc-200">
          com.space.reactor
        </code>
        . This policy explains what the app does with information on your device. It covers the app only, not our
        website and not Google Play.
      </P>

      <H2>Information we collect</H2>
      <P>None. The app has:</P>
      <Ul>
        <li>no user accounts or sign-in;</li>
        <li>no analytics, crash reporting or usage tracking;</li>
        <li>no advertising and no advertising ID;</li>
        <li>no server of its own. Nothing the app reads on your phone is sent anywhere.</li>
      </Ul>

      <H2>Settings stored on your device</H2>
      <P>
        The app remembers the choices you make on its settings screen: the scene, color, camera, effects and battery
        options. These choices are saved in the app’s private storage on your device. They are never transmitted
        anywhere, and they are removed when you clear the app’s data or uninstall the app.
      </P>

      <H2>Device features the app uses</H2>
      <Ul>
        <li>
          <strong className={strongClass}>Motion sensor.</strong> With camera control set to Tilt, the app reads the
          phone’s rotation sensor to move the camera as you tilt your phone. The readings are used in real time and are
          not recorded.
        </li>
        <li>
          <strong className={strongClass}>Touches.</strong> The app reads taps and swipes on your home screen to change
          the color or turn the camera. They are used in real time and are not recorded.
        </li>
        <li>
          <strong className={strongClass}>Battery.</strong> The app reads the battery level, whether the phone is
          charging and whether battery saver is on, to show battery colors and to lower its frame rate when the battery
          is low. These readings stay on the phone.
        </li>
      </Ul>

      <H2>In-app purchase</H2>
      <P>
        A one-time purchase unlocks extra scenes and colors. Google Play processes the purchase: the app never sees your
        payment details. The app asks Google Play on your phone whether you own the unlock, so that it stays unlocked
        across your phones and after a reinstall. Google’s handling of purchases is described in the{' '}
        <a href="https://policies.google.com/privacy" className={linkClass}>
          Google Privacy Policy
        </a>
        .
      </P>
      <P>
        If your phone had the earlier paid version of The Reactor, the app unlocks itself by checking for that
        version’s saved settings on your phone. That check happens on the device; nothing is sent.
      </P>

      <H2>Third parties</H2>
      <P>
        The app is distributed through Google Play. Google may collect information about downloads, installs, purchases
        and crashes under its own privacy policy. The app is built with the Unity engine, with Unity’s analytics, crash
        reporting and performance reporting switched off, and it shares nothing with other companies.
      </P>

      <H2>Children</H2>
      <P>Because the app collects no personal information, it collects none from children either.</P>

      <H2>Your rights</H2>
      <P>
        We hold no information about you, so there is nothing for us to access, correct, export or delete. To remove
        the settings stored on your device, clear the app’s data in Android’s settings or uninstall the app.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        If the app ever changes in a way that affects this policy, we will update this page and the effective date
        above. Use of the app is also covered by its{' '}
        <a href="/reactor/terms-of-service" className={linkClass}>
          Terms of Service
        </a>
        .
      </P>

      <H2>Contact</H2>
      <P>
        Questions about this policy go to Briare Brothers at{' '}
        <a href="mailto:hello@briarebrothers.com" className={linkClass}>
          hello@briarebrothers.com
        </a>{' '}
        or through{' '}
        <a href="https://briarebrothers.com" className={linkClass}>
          briarebrothers.com
        </a>
        .
      </P>
    </article>
  );
}
