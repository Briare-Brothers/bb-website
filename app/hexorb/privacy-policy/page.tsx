import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HexOrb Privacy Policy',
  description:
    'Privacy policy for HexOrb 3D, the live wallpaper for Android by Briare Brothers. From version 7.0 the app sends crash reports to Sentry. Versions with a “Share anonymous usage data” switch also send usage data to Google Analytics for Firebase, and that switch turns both off. Google Play handles its in-app purchases.',
  alternates: {
    canonical: 'https://www.briarebrothers.com/hexorb/privacy-policy',
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
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">HexOrb</p>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
        <span className="gradient-text">Privacy Policy</span>
      </h1>
      <p className="text-zinc-400">HexOrb 3D live wallpaper for Android</p>
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 27, 2026</p>

      <p className="border-l-2 border-blue-500 pl-5 py-1 text-zinc-300 leading-relaxed">
        <strong className={strongClass}>The short version:</strong> From version 7.0, HexOrb sends a crash report from
        your phone when something goes wrong. Versions with a “Share anonymous usage data” switch at the bottom of the
        settings screen also send usage data: how long the wallpaper is on screen each day, which settings you choose,
        and which of the app’s screens you open. Both carry a random ID for your copy of the app instead of anything
        that names you, and that one switch turns both off. Nothing the app sends includes your name, contacts, precise
        location or advertising ID. The app has no ads or accounts, and we never sell your information. Google Play
        handles the optional in-app purchases.
      </p>

      <H2>Who we are</H2>
      <P>
        HexOrb 3D (“the app”) is an Android live wallpaper published by Briare Brothers (“we”, “us”) as Space Cadet
        Apps, under the package name{' '}
        <code className="px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.06] font-mono text-[0.9em] text-zinc-200">
          com.space.hexorb
        </code>
        . This policy explains what the app does with information on your device. It covers the app only, not our
        website and not Google Play.
      </P>

      <H2>Information we collect</H2>
      <P>
        In version 7.0 and later, the app collects crash and error reports, which it sends to Sentry, the
        crash-reporting service we use. They’re described under “Crash reports” below. Versions with a “Share anonymous
        usage data” switch also collect usage data, which they send to Google Analytics for Firebase, as described
        under “Usage data” below. The app has:
      </P>
      <Ul>
        <li>no user accounts or sign-in;</li>
        <li>no advertising and no advertising ID;</li>
        <li>no server of its own.</li>
      </Ul>
      <P>
        Version 6.4 and earlier also included Google’s Firebase Analytics and Firebase Crashlytics. Version 7.0 removes
        both. Versions with the “Share anonymous usage data” switch bring back Firebase Analytics only, in the form
        described under “Usage data” below.
      </P>

      <H2>Crash reports</H2>
      <P>
        When the app crashes, stops responding or runs into an error, it sends a report to Sentry so we can find and fix
        the problem. If your phone is offline at the time, or Android isn’t letting the wallpaper use the network, the
        report waits on your phone. It’s sent the next time the wallpaper is on screen and online. A report contains:
      </P>
      <Ul>
        <li>
          <strong className={strongClass}>The error:</strong> what went wrong, which part of the app’s code was running,
          and the app’s recent warning and error messages, which describe problems such as a setting that couldn’t be
          read or a graphics feature the phone doesn’t support.
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
        Reports never include your name, email address, contacts, files, photos, precise location, advertising ID,
        payment details or screenshots, or anything you do in other apps.
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
      <P>
        In versions with the “Share anonymous usage data” switch, turning it off also turns crash reports off, as
        described under “Turning usage data and crash reports off” below. Earlier versions have no setting for this;
        uninstalling the app stops their reports.
      </P>

      <H2>Usage data</H2>
      <P>
        Versions of the app with a “Share anonymous usage data” switch at the bottom of the settings screen also send
        usage data. It tells us how many phones use the wallpaper, how long it’s on screen and which settings people
        choose, so we know what to improve. The app sends it to Google Analytics for Firebase, the analytics service we
        use. The switch starts on, and you can turn it off at any time. Usage data includes:
      </P>
      <Ul>
        <li>
          <strong className={strongClass}>A daily summary:</strong> for each day the wallpaper was used, how many minutes
          it was on screen, how many times it appeared, how many times you changed a setting, and whether it was your
          home screen wallpaper. It’s sent the next time the wallpaper runs on a later day.
        </li>
        <li>
          <strong className={strongClass}>Your settings:</strong> with each daily summary, the value of each choice on
          the settings screen, such as the orb color, swipe mode and brightness, and whether you have unlocked the
          premium settings.
        </li>
        <li>
          <strong className={strongClass}>Wallpaper changes:</strong> when you set HexOrb as your live wallpaper, or
          replace it with another one.
        </li>
        <li>
          <strong className={strongClass}>The app’s own screens:</strong> when you open the app’s launcher screen,
          settings screen or purchase screen, and for how long. On the purchase screen, also when you start a purchase
          and which product you chose, and whether the purchase went through, was cancelled or was restored from an
          earlier one. Google Analytics also records each completed purchase with the product, its price and currency.
        </li>
        <li>
          <strong className={strongClass}>Details Google Analytics adds:</strong> a random app-instance ID that Google
          Analytics creates for your copy of the app, when the app was first opened, the app’s version, the phone’s make,
          model and Android version, its language and screen size, how the app was installed (for example from Google
          Play), and an approximate location (country, region and city), which Google works out from the IP address the
          data comes from. Google Analytics doesn’t store the IP address.
        </li>
      </Ul>
      <P>
        Usage data never includes your name, email address, Google account, contacts, files, photos, precise location,
        advertising ID or payment details, or anything you do in other apps. The app doesn’t request the advertising ID
        permission, and Google Analytics’ advertising features are off.
      </P>
      <P>
        We use usage data only to understand how the wallpaper is used and to improve it. We don’t sell it or use it
        for advertising. Google processes it for us under the{' '}
        <a href="https://firebase.google.com/terms/data-processing-terms" className={linkClass}>
          Firebase data processing terms
        </a>
        , and we have turned off the settings that would let Google use it for its own purposes. We also copy it into
        our own database on Google Cloud, stored in the United States, to make our reports. It’s encrypted on its way
        to Google. Google Analytics keeps it for at most 14 months, and we delete our copy after at most 14 months.
        Reports we make from it keep only totals, such as how many phones used the wallpaper in a week.
      </P>

      <H2>Turning usage data and crash reports off</H2>
      <P>
        In versions with the “Share anonymous usage data” switch, turning it off stops usage data and crash reports
        together: the app stops counting and sends nothing more to Google Analytics or to Sentry, and crash reports
        waiting on your phone stay unsent. Turning it back on starts both again. Turning it off doesn’t delete what was
        already sent; “Your rights and deleting your data” below says how to ask us to.
      </P>

      <H2>Settings stored on your device</H2>
      <P>
        The app remembers the choices you make on its settings screen: the orb color, swipe mode, spin sensitivity,
        double-tap action, brightness and battery color, and whether you have unlocked the premium settings. These
        choices are saved in the app’s private storage on your device, and they are removed when you clear the app’s
        data or uninstall the app. They stay on your phone, except that versions sharing usage data send them with the
        daily summary, as described under “Usage data” above.
      </P>
      <P>
        When you update from an earlier version, the app copies that version’s saved settings into the new version’s
        storage, on the phone. Nothing is sent.
      </P>
      <P>
        The same private storage holds the random install ID, any crash reports waiting to be sent, the day’s usage
        counts until they’re sent, and the app-instance ID Google Analytics created. Clearing the app’s data or
        uninstalling the app removes them too, and the app then gets new IDs.
      </P>

      <H2>Device features the app uses</H2>
      <Ul>
        <li>
          <strong className={strongClass}>Touches and home screen scrolling.</strong> The app reads taps and swipes on
          your home screen, and how far you have scrolled between home screen pages, to make the orb react, spin and
          change color. They are used in real time and are not recorded.
        </li>
        <li>
          <strong className={strongClass}>Battery.</strong> The app reads the battery level and whether the phone is
          charging, to change the orb’s effects while it charges and, if you turn on battery color, to color the orb by
          the battery level. These readings stay on the phone, with one exception: a crash report includes the battery
          level, its temperature and the charging state.
        </li>
      </Ul>

      <H2>In-app purchases</H2>
      <P>
        Optional one-time purchases support the app and unlock its premium settings. Google Play processes the
        purchase: the app never sees your payment details. The app asks Google Play on your phone whether you have
        bought one, so that the premium settings stay unlocked after a reinstall. Google’s handling of purchases is
        described in the{' '}
        <a href="https://policies.google.com/privacy" className={linkClass}>
          Google Privacy Policy
        </a>
        .
      </P>

      <H2>Permissions</H2>
      <P>
        The app requests two of Android’s standard permissions, internet access and seeing whether the phone is online,
        which Google Play’s in-app purchases, crash reports and usage data use. It also requests Google Play’s billing
        permission for the purchases, and private permissions that Android requires for the app’s own wallpaper
        service. Versions with the “Share anonymous usage data” switch also request two permissions for Google
        Analytics: one to keep the
        phone awake for a moment so it can finish sending, and Google Play’s install referrer permission, which lets it
        ask Google Play how the app was installed. The app requests no permission that gives access to your contacts,
        location, camera, microphone or files.
      </P>

      <H2>Third parties</H2>
      <P>
        The app is distributed through Google Play. Google may collect information about downloads, installs, purchases
        and crashes under its own privacy policy. Version 7.0 and later includes Sentry, described under “Crash reports”
        above, and versions with the “Share anonymous usage data” switch also include Google Analytics for Firebase,
        described under “Usage data” above. Both handle data for us as our service providers. The app is built with the
        Unity engine, with Unity’s analytics, crash reporting and performance reporting switched off, and we share
        nothing with other companies.
      </P>

      <H2>Children</H2>
      <P>
        The app collects nothing from anyone beyond the crash reports and usage data described above. These contain no
        name, contact details or advertising ID, whoever is using the phone.
      </P>

      <H2>Your rights and deleting your data</H2>
      <P>
        We hold two kinds of information: crash reports, which Sentry deletes after at most 90 days, and usage data,
        which we delete after at most 14 months. Neither contains your name or contact details, so we usually can’t
        tell which records came from you. If you email us your phone’s model and roughly when you used the app or when
        it crashed, we will delete the matching crash reports and usage data within 30 days. To stop sending either,
        turn off “Share anonymous usage data” in the settings. To remove the settings, IDs, usage counts and waiting
        reports stored on your device, clear the app’s data in Android’s settings or uninstall the app.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        If the app ever changes in a way that affects this policy, we will update this page and the effective date
        above. Use of the app is also covered by its{' '}
        <a href="/hexorb/terms-of-service" className={linkClass}>
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
