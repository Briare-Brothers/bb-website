import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gangsters Paradise Privacy Policy',
  description:
    'Privacy policy for the Gangsters Paradise live wallpaper for Android by Briare Brothers. The app collects no personal information and has no internet access.',
  alternates: {
    canonical: 'https://briarebrothers.com/gangsters-paradise/privacy-policy',
  },
};

const linkClass = 'text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-400/40 transition-colors';

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
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">Gangsters Paradise</p>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
        <span className="gradient-text">Privacy Policy</span>
      </h1>
      <p className="text-zinc-400">Gangsters Paradise live wallpaper for Android</p>
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 4, 2026</p>

      <p className="border-l-2 border-blue-500 pl-5 py-1 text-zinc-300 leading-relaxed">
        <strong className="text-white font-semibold">The short version:</strong> Gangsters Paradise does not collect,
        store, share or sell any personal information. The app has no access to the internet, so nothing about you or
        your device ever leaves your phone.
      </p>

      <H2>Who we are</H2>
      <P>
        Gangsters Paradise (“the app”) is an Android live wallpaper published by Briare Brothers (“we”, “us”) under the
        package name{' '}
        <code className="px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.06] font-mono text-[0.9em] text-zinc-200">
          com.space.gangsters
        </code>
        . This policy explains what the app does with information on your device. It covers the app only, not our
        website and not Google Play.
      </P>

      <H2>Information we collect</H2>
      <P>None. The app has:</P>
      <Ul>
        <li>no user accounts or sign-in;</li>
        <li>no analytics, crash reporting or usage tracking;</li>
        <li>no advertising;</li>
        <li>no in-app purchases;</li>
        <li>no network access. The app does not request Android’s internet permission, so it cannot send or receive data.</li>
      </Ul>

      <H2>Settings stored on your device</H2>
      <P>
        The app remembers the choices you make on its settings screen: the scene, drink, smoke, gun and ashtray, the
        smoke and dust effects, camera movement, tilt and the double-tap action. These choices are saved in the app’s
        private storage on your device. They are never transmitted anywhere, and they are removed when you clear the
        app’s data or uninstall the app.
      </P>

      <H2>Device features the app uses</H2>
      <Ul>
        <li>
          <strong className="text-white font-semibold">Gyroscope.</strong> With “Tilt to look around” switched on, the
          app reads the gyroscope to move the camera as you tilt your phone. The readings are used in real time and are
          not recorded.
        </li>
        <li>
          <strong className="text-white font-semibold">Touch.</strong> Swipes and double taps on your home screen
          rotate the camera, recenter it or open the settings screen, as you choose. Touches are handled on the device
          and are not recorded.
        </li>
        <li>
          <strong className="text-white font-semibold">Clock.</strong> The clock on the wall shows your device’s local
          time.
        </li>
      </Ul>

      <H2>Permissions</H2>
      <P>
        The app declares only the private permissions Android requires for its own wallpaper service. It requests no
        permission that gives access to your contacts, location, camera, microphone, files or the internet.
      </P>

      <H2>Third parties</H2>
      <P>
        The app is distributed through Google Play. Google may collect information about downloads, installs and
        crashes under its own privacy policy. The app itself includes no third-party software that collects data. It is
        built with the Unity engine, with Unity’s analytics, advertising and purchasing services switched off, and
        because the app has no network access, none of its components can report anything.
      </P>

      <H2>Children</H2>
      <P>
        The app is not directed at children under 13. It depicts firearms, alcohol and tobacco and is rated accordingly
        on Google Play. Because the app collects no information, it collects none from children either.
      </P>

      <H2>Your rights</H2>
      <P>
        We hold no information about you, so there is nothing for us to access, correct, export or delete. To remove
        the settings stored on your device, clear the app’s data in Android’s settings or uninstall the app.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        If the app ever changes in a way that affects this policy, we will update this page and the effective date
        above.
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
