import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Materials LWP Privacy Policy',
  description:
    'Privacy policy for the Materials LWP live wallpaper for Android by Briare Brothers. Version 3.0 sends nothing about you to us. Versions with a “Share anonymous usage data” switch send crash reports to Sentry and usage data to Google Analytics for Firebase, and that switch turns both off. The optional in-app purchase is handled by Google Play.',
  alternates: {
    canonical: 'https://www.briarebrothers.com/material-live-wallpaper/privacy-policy',
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
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">Materials LWP</p>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
        <span className="gradient-text">Privacy Policy</span>
      </h1>
      <p className="text-zinc-400">Materials LWP live wallpaper for Android</p>
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 27, 2026</p>

      <p className="border-l-2 border-blue-500 pl-5 py-1 text-zinc-300 leading-relaxed">
        <strong className={strongClass}>The short version:</strong> Version 3.0 of Materials LWP sends nothing about
        you to us. Versions with a “Share anonymous usage data” switch at the bottom of the settings screen send a crash
        report when something goes wrong, and usage data: how long the wallpaper is on screen each day, which settings
        you choose, which of the app’s screens you open and the steps of a purchase. Both carry a random ID for your copy
        of the app instead of anything that names you, and that one switch turns both off. Nothing the app sends
        includes your name, contacts, precise location or advertising ID. The app has no ads or accounts, and we never
        sell your information. Its optional in-app purchase is sold through Google Play. For it, the app checks with
        Google Play what your Google account owns each time it starts, and Google’s billing component in the app sends
        Google its own logs. The app never sees your payment details.
      </p>

      <H2>Who we are</H2>
      <P>
        Materials LWP (“the app”) is an Android live wallpaper published by Briare Brothers (“we”, “us”) as Space Cadet
        Apps, under the package name{' '}
        <code className="px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.06] font-mono text-[0.9em] text-zinc-200">
          com.space.materiallwp
        </code>
        . This policy explains what the app does with information on your device. It covers the app only, not our
        website and not Google Play.
      </P>

      <H2>Information we collect</H2>
      <P>
        Version 3.0 sends no information to us. Versions with a “Share anonymous usage data” switch collect crash and
        error reports, which they send to Sentry, the crash-reporting service we use, and usage data, which they send to
        Google Analytics for Firebase. Both are described below, under “Crash reports” and “Usage data”. What the in-app
        purchase exchanges with Google is described under “The in-app purchase”. The app has:
      </P>
      <Ul>
        <li>no user accounts or sign-in;</li>
        <li>no advertising and no advertising ID;</li>
        <li>no server of its own;</li>
        <li>no access to your location, contacts, camera, microphone, photos or files.</li>
      </Ul>

      <H2>Crash reports</H2>
      <P>
        In versions with the “Share anonymous usage data” switch, when the app crashes, stops responding or runs into an
        error, it sends a report to Sentry so we can find and fix the problem. If your phone is offline at the time, or
        Android isn’t letting the wallpaper use the network, the report waits on your phone. It’s sent the next time the
        wallpaper is on screen and online. A report contains:
      </P>
      <Ul>
        <li>
          <strong className={strongClass}>The error:</strong> what went wrong, which part of the app’s code was running,
          and the app’s recent log messages. These say when the wallpaper was shown or hidden, whether it was in the
          wallpaper picker’s preview, its frame rate and quality level, and problems such as a setting that couldn’t be
          read.
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
        , and deletes them automatically after its retention period, which is at most 90 days. Turning off “Share
        anonymous usage data” turns crash reports off, as described under “Turning usage data and crash reports off”
        below.
      </P>

      <H2>Usage data</H2>
      <P>
        Versions of the app with a “Share anonymous usage data” switch at the bottom of the settings screen also send
        usage data. It tells us how many phones use the wallpaper, how long it’s on screen and which settings people
        choose, so we know what to improve. The app sends it to Google Analytics for Firebase, the analytics service we
        use. Outside the European Economic Area (EEA) and the United Kingdom, the switch starts on, and you can turn it
        off at any time. In the EEA and the UK it starts off, and the app sends no usage data and no crash reports until
        you turn it on. To tell where your phone is, the app checks your SIM card’s country, your mobile network’s
        country, your time zone and your phone’s language, on the phone itself, without sending them anywhere. If it
        can’t tell, the switch starts off. Usage data includes:
      </P>
      <Ul>
        <li>
          <strong className={strongClass}>A daily summary:</strong> for each day the wallpaper was used, how many minutes
          it was on screen, how many times it appeared, how many times you changed a setting, and whether it was your
          home screen wallpaper. It’s sent the next time the wallpaper runs on a later day.
        </li>
        <li>
          <strong className={strongClass}>Your settings:</strong> with each daily summary, the value of each choice on
          the settings screen, such as the material, the gyroscope mode and the swiping speed, and whether you have
          unlocked the full version.
        </li>
        <li>
          <strong className={strongClass}>Wallpaper changes:</strong> when you set Materials LWP as your live
          wallpaper, or replace it with another one.
        </li>
        <li>
          <strong className={strongClass}>The app’s own screens:</strong> when you open the app’s launcher screen,
          settings screen or purchase screen, and for how long. On the purchase screen, also when you start the
          purchase, and whether it went through, was cancelled or was restored from an earlier one. Google Analytics
          also records each completed purchase with the product, its price and currency.
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

      <H2>The in-app purchase</H2>
      <P>
        The app offers one optional in-app purchase that unlocks all materials. It is sold through Google Play: the
        purchase, the payment and any refund are handled entirely by Google, under the{' '}
        <a href="https://policies.google.com/privacy" className={linkClass}>
          Google privacy policy
        </a>
        . The app never sees your card or other payment details.
      </P>
      <P>
        Each time the app starts, including when Android starts the wallpaper, it asks the Google Play Store app on
        your phone which of the app’s products your Google account owns. It does this whether or not you have bought
        anything. This is how the materials unlock, and how they come back after you reinstall the app or move to a new
        device, including for a purchase made in an earlier version. The app keeps only a yes-or-no “unlocked” setting
        from the answer, not a list of what you bought, as described under “Settings stored on your device” below. It
        also confirms each purchase to Google Play, as Google requires.
      </P>
      <P>
        Apart from the purchase steps in usage data, which the “Share anonymous usage data” switch turns off, the app
        sends nothing about your purchase to us, and it has no server of its own. Your purchase record is kept by
        Google, and you can see it in your Google Play order history. As the seller, we can look up orders in our
        Google Play Console, and we do so only to handle refunds and support requests.
      </P>
      <P>
        For the purchase, the app includes the Google Play Billing Library, Google’s component for selling in-app
        products. Besides talking to the Google Play Store app, the library sends Google its own logs. These go to
        Google, not to us, and Google handles them under its privacy policy.
      </P>

      <H2>Settings stored on your device</H2>
      <P>
        The app remembers the choices you make on its settings screen: the material, the material scale, the gyroscope
        mode, sensitivity, springiness and inversion, the swiping speed and the double-tap action. It also remembers
        whether you have unlocked the full version, so the wallpaper works without a connection, and keeps a count it
        uses to notice that a purchase has been refunded. These are saved in the app’s private storage on your device,
        and they are removed when you clear the app’s data or uninstall the app. They stay on your phone, except that
        versions sharing usage data send your choices and whether the full version is unlocked with the daily summary,
        as described under “Usage data” above.
      </P>
      <P>
        In versions with the “Share anonymous usage data” switch, the same private storage holds the random install ID,
        any crash reports waiting to be sent, the day’s usage counts until they’re sent, and the app-instance ID Google
        Analytics created. Clearing the app’s data or uninstalling the app removes them too, and the app then gets new
        IDs.
      </P>

      <H2>Device features the app uses</H2>
      <Ul>
        <li>
          <strong className={strongClass}>Gyroscope.</strong> Unless you choose “Disable Gyroscope”, the app reads the
          gyroscope to rotate or shift the material, or move the light, as you tilt your phone. The readings are used
          in real time and are not recorded.
        </li>
        <li>
          <strong className={strongClass}>Touch.</strong> Swiping across your home screen moves the material, and a
          double tap can open the settings screen or pick a random material, as you choose. Touches are handled on the
          device and are not recorded.
        </li>
      </Ul>

      <H2>Permissions</H2>
      <P>
        The app requests Google Play’s billing permission so it can offer the in-app purchase, and declares that it
        looks for Google Play’s billing service on your phone. It also requests two of Android’s standard permissions:
        internet access, and seeing whether the phone is online. Google’s billing component uses them to send its logs,
        and versions with the “Share anonymous usage data” switch use them for crash reports and usage data too. Those
        versions also request two permissions for Google Analytics: one to keep the phone awake for a moment so it can
        finish sending, and Google Play’s install referrer permission, which lets it ask Google Play how the app was
        installed. The app’s other permissions are private ones that Android requires for its own wallpaper service. It
        requests no permission that gives access to your contacts, location, camera, microphone, photos or files.
      </P>

      <H2>Third parties</H2>
      <P>
        The app is distributed through Google Play. Google may collect information about downloads, installs,
        purchases and crashes under its own privacy policy. The app includes the Google Play Billing Library, Google’s
        component that lets it ask the Google Play Store app on your phone about the purchase. The library also sends
        Google its own logs, as described under “The in-app purchase” above. Versions with the “Share anonymous usage
        data” switch also include Sentry and Google Analytics for Firebase, described under “Crash reports” and “Usage
        data” above, which handle data for us as our service providers. The app is built with the Unity engine, with
        Unity’s analytics, advertising, purchasing and crash-reporting services switched off, and we share nothing with
        other companies.
      </P>

      <H2>Children</H2>
      <P>
        The app is not directed at children under 13. It collects nothing from anyone beyond the crash reports and usage
        data described above, which contain no name, contact details or advertising ID, whoever is using the phone.
        What its in-app purchase exchanges with Google is described under “The in-app purchase” above. Purchases are
        made through Google Play, under the Google account’s own settings.
      </P>

      <H2>Your rights and deleting your data</H2>
      <P>
        Version 3.0 sends us no information about you, so for it there is nothing for us to access, correct, export or
        delete. For versions with the “Share anonymous usage data” switch, we hold two kinds of information: crash
        reports, which Sentry deletes after at most 90 days, and usage data, which we delete after at most 14 months.
        Neither contains your name or contact details, so we usually can’t tell which records came from you. If you
        email us your phone’s model and roughly when you used the app or when it crashed, we will delete the matching
        crash reports and usage data within 30 days. To stop sending either, turn off “Share anonymous usage data” in
        the settings.
      </P>
      <P>
        To remove the settings, the “unlocked” setting, the IDs, usage counts and waiting reports stored on your device,
        clear the app’s data in Android’s settings or uninstall the app. Your purchase stays with your Google account, so
        the unlock comes back if you install the app again. The purchase record itself, and the Billing Library’s logs,
        are held by Google under its own privacy policy.
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
