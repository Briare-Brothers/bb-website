import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enchanted Rose Privacy Policy',
  description:
    'Privacy policy for the Enchanted Rose live wallpaper for Android by Briare Brothers. From version 6.0 the app sends crash reports to Sentry. From version 6.0.1 it also offers optional in-app purchases, which Google Play handles. Versions with a “Share anonymous usage data” switch also send usage data to Google Analytics for Firebase, and that switch turns both usage data and crash reports off.',
  alternates: {
    canonical: 'https://www.briarebrothers.com/enchanted-rose/privacy-policy',
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
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 27, 2026</p>

      <p className="border-l-2 border-blue-500 pl-5 py-1 text-zinc-300 leading-relaxed">
        <strong className={strongClass}>The short version:</strong> From version 6.0, Enchanted Rose sends a crash
        report from your phone when something goes wrong. A report says what failed, describes your phone, and carries
        a random ID for your copy of the app. Version 6.0.1 adds optional in-app purchases, an unlock and donations,
        sold through Google Play. For them, the app checks with Google Play what your Google account owns, and Google’s
        billing component in the app sends Google its own logs. The app never sees your payment details. Versions with
        a “Share anonymous usage data” switch at the bottom of the settings screen also send usage data: how long the
        wallpaper is on screen each day, which settings you choose, which of the app’s screens you open and the steps
        of a purchase, with a random ID instead of anything that names you. That one switch turns usage data and crash
        reports off. Nothing the app sends includes your name, contacts, precise location or advertising ID. It has no
        ads or accounts, and we never sell your information. Version 5.2, the last version before 6.0, sends usage and
        crash data to Google Firebase, as described under “Earlier versions” below.
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
      <P>
        In version 6.0 and later, the app collects crash and error reports, which it sends to Sentry, the
        crash-reporting service we use. They’re described under “Crash reports” below. Version 6.0 collects nothing
        else. Version 6.0.1 and later also offers in-app purchases through Google Play, and what they exchange with
        Google is described under “In-app purchases” below. Versions with a “Share anonymous usage data” switch also
        collect usage data, which they send to Google Analytics for Firebase, as described under “Usage data” below.
        The app has:
      </P>
      <Ul>
        <li>no user accounts or sign-in;</li>
        <li>no advertising and no advertising ID;</li>
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
          and the app’s recent log messages, such as when the wallpaper was shown or hidden.
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
          the settings screen, such as the petal color, background and rotation speed, and whether you have unlocked the
          extra settings.
        </li>
        <li>
          <strong className={strongClass}>Wallpaper changes:</strong> when you set Enchanted Rose as your live
          wallpaper, or replace it with another one.
        </li>
        <li>
          <strong className={strongClass}>The app’s own screens:</strong> when you open the app’s launcher screen,
          settings screen or purchase screen, and for how long. On the purchase screen, also when you start a purchase
          and which product you chose (the unlock or a donation), and whether the purchase went through, was cancelled
          or was restored from an earlier one. Google Analytics also records each completed purchase with the product,
          its price and currency.
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

      <H2>In-app purchases</H2>
      <P>
        Version 6.0.1 and later offers optional in-app purchases: an unlock for five settings (Jar Type, Sparkles
        Amount, Charging FX, Free Life Control and Gyroscope) and eight donations, each of which also unlocks them.
        They’re sold through Google Play: the purchase, the payment and any refund are handled entirely by Google,
        under the{' '}
        <a href="https://policies.google.com/privacy" className={linkClass}>
          Google privacy policy
        </a>
        . The app never sees your card or other payment details. Version 6.0 has no in-app purchases.
      </P>
      <P>
        Each time the app starts, including when Android starts the wallpaper, it asks the Google Play Store app on
        your phone which of these products your Google account owns. It does this whether or not you have bought
        anything. This is how the unlock comes back after you reinstall the app or move to a new phone, including for a
        purchase made in version 5.2. The app keeps only a yes-or-no “unlocked” setting from the answer, not a list of
        what you bought, as described under “Settings stored on your device” below. It also confirms each purchase to
        Google Play, as Google requires.
      </P>
      <P>
        Apart from the purchase steps in usage data, which the “Share anonymous usage data” switch turns off, the app
        sends nothing about your purchases to us, and it has no server of its own. Your purchase record is kept by
        Google, and you can see it in your Google Play order history. As the seller, we can look up orders in
        our Google Play Console, and we do so only to handle refunds and support requests.
      </P>
      <P>
        For the purchases, the app includes the Google Play Billing Library, Google’s component for selling in-app
        products. Besides talking to the Google Play Store app, the library sends Google its own logs. These go to
        Google, not to us, and Google handles them under its privacy policy.
      </P>

      <H2>Settings stored on your device</H2>
      <P>
        The app remembers the choices you make on its settings screen: the petal color, background, pedestal style,
        glass jar and jar type, rotation speed, sparkles, charging effects, the swipe, double-tap and free life control
        options, and the gyroscope options. These choices are saved in the app’s private storage on your device, and
        they are removed when you clear the app’s data or uninstall the app. They stay on your phone, except that
        versions sharing usage data send them with the daily summary, as described under “Usage data” above.
      </P>
      <P>
        The same private storage holds the random install ID, any crash reports waiting to be sent, the day’s usage
        counts until they’re sent, and the app-instance ID Google Analytics created. Clearing the app’s data or
        uninstalling the app removes them too, and the app then gets new IDs.
      </P>
      <P>
        From version 6.0.1, it also holds a yes-or-no “unlocked” setting, so the unlocked settings work without a
        connection, and a count the app uses to notice that a purchase has been refunded. These stay on your phone,
        except that usage data says whether the extra settings are unlocked. Clearing the app’s data or uninstalling
        the app removes them, and the unlock comes back the next time the app checks with Google Play.
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
          effects. These readings are used in real time and are not recorded. The one exception: a crash report
          includes the battery level and charging state at the time of the crash.
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
        Version 6.0 and later requests two of Android’s standard permissions: internet access, and seeing whether the
        phone is online. In version 6.0 both are only for sending crash reports. From version 6.0.1, Google’s billing
        component uses them for its logs too, and the app also requests Google Play’s billing permission for the
        in-app purchases and declares that it looks for Google Play’s billing service on your phone. Versions with the
        “Share anonymous usage data” switch use internet access and the online check for usage data as well, and
        request two more permissions
        for Google Analytics: one to keep the phone awake for a moment so it can finish sending, and Google Play’s
        install referrer permission, which lets it ask Google Play how the app was installed. The app’s other
        permissions are private ones that Android requires for its own wallpaper service. It requests no permission
        that gives access to your contacts, location, camera, microphone or files.
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
        Version 5.2 also offers optional in-app purchases through Google Play, the same unlock and donations that
        version 6.0.1 sells. Google Play processes those purchases, and the app never sees your payment details.
      </P>
      <P>
        Version 6.0 removes all of these services, the purchases included, so all of its settings are free. Updating to
        6.0 or later stops the usage events, Firebase’s crash reports and the advertising ID, and your settings carry
        over. Version 6.0 then sends only the crash reports described under “Crash reports” above. Version 6.0.1 brings
        the purchases back, without the Firebase services, as described under “In-app purchases” above. Versions with
        the “Share anonymous usage data” switch bring back Firebase Analytics only, without the advertising ID and with
        that switch to turn it off, as described under “Usage data” above.
      </P>

      <H2>Third parties</H2>
      <P>
        The app is distributed through Google Play. Google may collect information about downloads, installs, purchases
        and crashes under its own privacy policy. Version 6.0 and later includes Sentry, described under “Crash
        reports” above, and versions with the “Share anonymous usage data” switch also include Google Analytics for
        Firebase, described under “Usage data” above. Both handle data for us as our service providers. Version 6.0.1
        and later also includes the Google Play Billing Library, which checks your purchases with Google Play and
        sends Google its own logs, as described under “In-app purchases” above. The app is built with the Unity
        engine, but it isn’t connected to Unity’s online services, so Unity’s own analytics and crash reporting don’t
        run in it.
      </P>

      <H2>Children</H2>
      <P>
        Version 6.0 and later collect nothing from anyone beyond the crash reports and usage data described above.
        These contain no name, contact details or advertising ID, whoever is using the phone. Version 6.0.1 and later
        also exchange with Google what their in-app purchases need, described under “In-app purchases” above.
        Purchases are made through Google Play, under the Google account’s own settings. If you believe a child used an
        earlier version and you want its data deleted, contact us as described below.
      </P>

      <H2>Your rights and deleting your data</H2>
      <P>
        For version 6.0 and later, we hold two kinds of information: crash reports, which Sentry deletes after at most
        90 days, and usage data, which we delete after at most 14 months. Neither contains your name or contact
        details, so we usually can’t tell which records came from you. If you email us your phone’s model and roughly
        when you used the app or when it crashed, we will delete the matching crash reports and usage data within 30
        days. To stop sending either, turn off “Share anonymous usage data” in the settings. If you buy something in
        version 6.0.1 or later, we can also see the order in Google Play Console. The
        purchase record itself belongs to your Google account and is held by Google under its own privacy policy, so
        the unlock comes back if you install the app again. To remove the settings, the “unlocked” setting, the IDs,
        usage counts and waiting reports stored on your device, clear the app’s data in Android’s settings or uninstall
        the app.
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
