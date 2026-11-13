import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enchanted Rose Privacy Policy',
  description:
    'Privacy policy for the Enchanted Rose live wallpaper for Android by Briare Brothers. From version 6.0 the app has no internet access and collects no personal information.',
  alternates: {
    canonical: 'https://briarebrothers.com/enchanted-rose/privacy-policy',
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
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">Enchanted Rose</p>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
        <span className="gradient-text">Privacy Policy</span>
      </h1>
      <p className="text-zinc-400">Enchanted Rose live wallpaper for Android</p>
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 13, 2026</p>

      <p className="border-l-2 border-blue-500 pl-5 py-1 text-zinc-300 leading-relaxed">
        <strong className={strongClass}>The short version:</strong> From version 6.0, Enchanted Rose does not collect,
        store, share or sell any personal information. The app has no access to the internet, so nothing about you or
        your device leaves your phone. Version 5.2, the version before it, sends usage and crash data to Google
        Firebase, as described under “Earlier versions” below. Updating to 6.0 stops that.
      </p>

      <H2>Who we are</H2>
      <P>
        Enchanted Rose (“the app”) is an Android live wallpaper published by Briare Brothers (“we”, “us”) under the
        package name{' '}
        <code className="px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.06] font-mono text-[0.9em] text-zinc-200">
          com.space.enchantedrose
        </code>
        . This policy explains what the app does with information on your device. It covers the app only, not our
        website and not Google Play.
      </P>

      <H2>Information we collect</H2>
      <P>None, in version 6.0 and later. The app has:</P>
      <Ul>
        <li>no user accounts or sign-in;</li>
        <li>no analytics, crash reporting or usage tracking;</li>
        <li>no advertising and no advertising ID;</li>
        <li>no in-app purchases;</li>
        <li>
          no network access. The app does not request Android’s internet permission, so it cannot send or receive
          data.
        </li>
      </Ul>

      <H2>Settings stored on your device</H2>
      <P>
        The app remembers the choices you make on its settings screen: the petal color, background, pedestal style,
        glass jar and jar type, rotation speed, sparkles, charging effects, the swipe, double-tap and free life control
        options, and the gyroscope options. These choices are saved in the app’s private storage on your device. They
        are never transmitted anywhere, and they are removed when you clear the app’s data or uninstall the app.
      </P>
      <P>
        When you update from an earlier version, the app copies your existing settings into its new settings screen.
        This happens on your phone; nothing is sent.
      </P>

      <H2>Device features the app uses</H2>
      <Ul>
        <li>
          <strong className={strongClass}>Battery.</strong> The app reads the battery level and whether the phone is
          plugged in, so that the rose wilts as the battery drains, recovers as it charges, and shows the charging
          effects. These readings are used in real time and are not recorded.
        </li>
        <li>
          <strong className={strongClass}>Gyroscope.</strong> With the Gyroscope setting on, the app reads the
          gyroscope to move the scene as you tilt your phone. The readings are used in real time and are not recorded.
        </li>
        <li>
          <strong className={strongClass}>Touch.</strong> Swipes on your home screen turn the rose, a double tap can
          change the petal color or open the settings screen, and with free life control on, a drag sets how far the
          rose has wilted. Touches are handled on the device and are not recorded.
        </li>
      </Ul>

      <H2>Permissions</H2>
      <P>
        Version 6.0 and later declares only the private permissions Android requires for the app’s own wallpaper
        service. It requests no permission that gives access to your contacts, location, camera, microphone, files or
        the internet.
      </P>

      <H2>Earlier versions</H2>
      <P>
        Versions before 6.0 were built on a different framework. Version 5.2, the last of them, has internet access
        and includes three Google services: Firebase Analytics, Firebase Crashlytics and Firebase Remote Config. While
        you use it, it sends Google:
      </P>
      <Ul>
        <li>
          <strong className={strongClass}>Usage events</strong>, such as the wallpaper starting or becoming visible;
        </li>
        <li>
          <strong className={strongClass}>Crash reports</strong>, if the app crashes;
        </li>
        <li>
          <strong className={strongClass}>Device information</strong> that these services collect as standard: an
          app-instance ID, the device model, Android and app versions, an approximate location (country or region)
          derived from your IP address and, where Android makes it available, the advertising ID.
        </li>
      </Ul>
      <P>
        Remote Config also downloads configuration for the app from Google. We use this information to count how many
        people use the wallpaper and to find and fix crashes. We do not sell it or use it for advertising. Google
        processes it on our behalf under the{' '}
        <a href="https://firebase.google.com/support/privacy" className={linkClass}>
          Firebase privacy and security terms
        </a>{' '}
        and the{' '}
        <a href="https://policies.google.com/privacy" className={linkClass}>
          Google Privacy Policy
        </a>
        , and keeps it for a limited period set by those services.
      </P>
      <P>
        Version 5.2 also requests Google Play’s billing permission for an optional in-app purchase. Google Play
        processes that purchase, and the app never sees your payment details.
      </P>
      <P>
        Version 6.0 removes all of these services. Once it is available on Google Play, updating stops all collection,
        and your settings carry over.
      </P>

      <H2>Third parties</H2>
      <P>
        The app is distributed through Google Play. Google may collect information about downloads, installs and
        crashes under its own privacy policy. Version 6.0 and later includes no third-party software that collects
        data. It is built with the Unity engine, and because the app has no network access, none of its components can
        report anything.
      </P>

      <H2>Children</H2>
      <P>
        Version 6.0 and later collects no personal information from anyone, including children. If you believe a child
        used an earlier version and you want its data deleted, contact us as described below.
      </P>

      <H2>Your rights and deleting your data</H2>
      <P>
        For version 6.0 and later, we hold no information about you, so there is nothing for us to access, correct,
        export or delete. To remove the settings stored on your device, clear the app’s data in Android’s settings or
        uninstall the app.
      </P>
      <P>
        If you have used an earlier version and want to know what analytics or crash data Google holds for it, or want
        it deleted, email{' '}
        <a href="mailto:hello@briarebrothers.com" className={linkClass}>
          hello@briarebrothers.com
        </a>
        . We will delete whatever we can identify from the details you give us within 30 days.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        If the app ever changes in a way that affects this policy, we will update this page and the effective date
        above. Use of the app is also covered by its{' '}
        <a href="/enchanted-rose/terms-of-service" className={linkClass}>
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
