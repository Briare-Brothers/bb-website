import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gangsters Paradise Privacy Policy',
  description:
    'Privacy policy for the Gangsters Paradise live wallpaper for Android by Briare Brothers. From the update that adds crash reporting, the app sends crash reports to Sentry. Earlier versions have no internet access.',
  alternates: {
    canonical: 'https://www.briarebrothers.com/gangsters-paradise/privacy-policy',
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
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">Gangsters Paradise</p>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
        <span className="gradient-text">Privacy Policy</span>
      </h1>
      <p className="text-zinc-400">Gangsters Paradise live wallpaper for Android</p>
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 23, 2026</p>

      <p className="border-l-2 border-blue-500 pl-5 py-1 text-zinc-300 leading-relaxed">
        <strong className={strongClass}>The short version:</strong> From the update that adds crash reporting,
        Gangsters Paradise sends a crash report from your phone when something goes wrong. A report says what failed,
        describes your phone, and carries a random ID for your copy of the app. It never includes your name, contacts or
        precise location. The app has no ads, accounts, purchases or usage tracking, and we never sell your information.
        Earlier versions have no internet access and send nothing.
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
      <P>
        From the update that adds crash reporting, the app collects only crash and error reports, which it sends to
        Sentry, the crash-reporting service we use. They’re described under “Crash reports” below. Earlier versions
        collect nothing and have no internet access. The app has:
      </P>
      <Ul>
        <li>no user accounts or sign-in;</li>
        <li>no analytics or usage tracking, so we don’t learn when or how you use the wallpaper;</li>
        <li>no advertising and no advertising ID;</li>
        <li>no in-app purchases;</li>
        <li>no server of its own.</li>
      </Ul>

      <H2>Crash reports</H2>
      <P>
        When the app crashes, stops responding or runs into an error, it sends a report to Sentry so we can find and fix
        the problem. If your phone is offline at the time, or Android isn’t letting the wallpaper use the network, the
        report waits on your phone. It’s sent the next time the wallpaper is on screen and online. A report contains:
      </P>
      <Ul>
        <li>
          <strong className={strongClass}>The error:</strong> what went wrong, which part of the app’s code was running,
          and a short trail of what happened just before. The trail says when the wallpaper was shown or hidden, which
          scene loaded (the basement or the yakuza den), which of the app’s screens were opened, when the camera was
          recentered, and changes in the battery or network connection. If the app had trouble applying a setting, it
          can also name that setting, its value or the prop involved.
        </li>
        <li>
          <strong className={strongClass}>App details:</strong> the app’s version, the permissions it has, how much
          memory it was using and when it started.
        </li>
        <li>
          <strong className={strongClass}>Device details:</strong>
          <ul className="mt-2 list-[circle] pl-6 space-y-1">
            <li>the phone’s make and model, Android version, processor and graphics chip;</li>
            <li>its memory and storage, total and free;</li>
            <li>its screen size and orientation;</li>
            <li>the battery level, its temperature, and whether the phone is charging;</li>
            <li>whether the phone is on Wi-Fi or mobile data;</li>
            <li>the language, the time zone, and whether the phone is rooted.</li>
          </ul>
        </li>
        <li>
          <strong className={strongClass}>A random install ID</strong> that the app creates the first time it runs. It
          lets us tell how many phones a problem affects. It isn’t linked to your name, your Google account or your
          advertising ID. Clearing the app’s data or uninstalling the app deletes it.
        </li>
        <li>
          <strong className={strongClass}>An approximate location:</strong> Sentry works out the country, and
          sometimes the city, from the IP address the report comes from. The IP address itself isn’t saved with the
          report.
        </li>
      </Ul>
      <P>
        Reports never include your name, email address, contacts, files, photos, precise location, advertising ID or
        screenshots, or anything you do in other apps.
      </P>
      <P>
        We use crash reports only to find and fix problems in the app. We don’t sell them or use them for advertising,
        and apart from Sentry, nobody receives them. Reports are encrypted on their way to Sentry. Sentry stores them
        for us in the United States under its{' '}
        <a href="https://sentry.io/privacy/" className={linkClass}>
          privacy policy
        </a>
        , and deletes them automatically after its retention period, which is at most 90 days.
      </P>
      <P>The app has no setting to turn crash reports off. Uninstalling the app stops them.</P>

      <H2>Settings stored on your device</H2>
      <P>
        The app remembers the choices you make on its settings screen: the scene, drink, smoke, gun and ashtray, the
        smoke and dust effects, camera movement, tilt and the double-tap action. These choices are saved in the app’s
        private storage on your device, and they are removed when you clear the app’s data or uninstall the app. They
        are sent nowhere, except that a crash report can name the scene in use and a setting the app had trouble
        applying, as described under “Crash reports” above.
      </P>
      <P>
        The same private storage holds the random install ID and any crash reports waiting to be sent. Clearing the
        app’s data or uninstalling the app removes them too.
      </P>

      <H2>Device features the app uses</H2>
      <Ul>
        <li>
          <strong className={strongClass}>Gyroscope.</strong> With “Tilt to look around” switched on, the app reads the
          gyroscope to move the camera as you tilt your phone. The readings are used in real time and are not recorded.
        </li>
        <li>
          <strong className={strongClass}>Touch.</strong> Swipes and double taps on your home screen rotate the camera,
          recenter it or open the settings screen, as you choose. Touches are handled on the device and are not
          recorded.
        </li>
        <li>
          <strong className={strongClass}>Clock.</strong> The clock on the wall shows your device’s local time.
        </li>
      </Ul>
      <P>
        The wallpaper itself doesn’t use the battery level. A crash report records it as part of the device details
        described above.
      </P>

      <H2>Permissions</H2>
      <P>
        From the update that adds crash reporting, the app requests two of Android’s standard permissions, internet
        access and seeing whether the phone is online, which crash reports use. Earlier versions request neither. The
        app also declares the private permissions Android requires for its own wallpaper service. It requests no
        permission that gives access to your contacts, location, camera, microphone or files.
      </P>

      <H2>Third parties</H2>
      <P>
        The app is distributed through Google Play. Google may collect information about downloads, installs and
        crashes under its own privacy policy. From the update that adds crash reporting, the app includes one
        third-party service that collects data: Sentry, described under “Crash reports” above. The app is built with the
        Unity engine, with Unity’s analytics, advertising, purchasing, crash-reporting and performance-reporting services
        switched off.
      </P>

      <H2>Children</H2>
      <P>
        The app is not directed at children under 13. It depicts firearms, alcohol and tobacco and is rated accordingly
        on Google Play. The app collects nothing from anyone beyond the crash reports described above. These contain no
        name, contact details or advertising ID, whoever is using the phone.
      </P>

      <H2>Your rights and deleting your data</H2>
      <P>
        The only information we hold is crash reports, and Sentry deletes those after at most 90 days. They contain no
        name or contact details, so we usually can’t tell which reports came from you. If you email us your phone’s
        model and roughly when the app crashed, we will delete the matching reports within 30 days. To remove the
        settings, install ID and waiting reports stored on your device, clear the app’s data in Android’s settings or
        uninstall the app.
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
