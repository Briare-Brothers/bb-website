import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Materials LWP Privacy Policy',
  description:
    'Privacy policy for the Materials LWP live wallpaper for Android by Briare Brothers. The app has no ads or accounts and sends only in-app purchase information to RevenueCat.',
  alternates: {
    canonical: 'https://briarebrothers.com/material-live-wallpaper/privacy-policy',
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
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 6, 2026</p>

      <p className="border-l-2 border-blue-500 pl-5 py-1 text-zinc-300 leading-relaxed">
        <strong className={strongClass}>The short version:</strong> Materials LWP has no ads and no accounts, and it
        does not collect your name, email, location or contacts. The only data that leaves your phone is what is needed
        to check and restore the optional in-app purchase: your purchase history, an anonymous ID and basic technical
        details, sent to RevenueCat, the service we use for purchases. We never sell it or use it for advertising.
      </p>

      <H2>Who we are</H2>
      <P>
        Materials LWP (“the app”) is an Android live wallpaper published by Briare Brothers (“we”, “us”) under the
        package name{' '}
        <code className="px-1.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.06] font-mono text-[0.9em] text-zinc-200">
          com.space.materiallwp
        </code>
        . This policy explains what information the app handles and why. It covers the app only, not our website and
        not Google Play.
      </P>

      <H2>Information we collect</H2>
      <P>We do not collect personal information. The app has:</P>
      <Ul>
        <li>no user accounts or sign-in;</li>
        <li>no advertising and no advertising ID;</li>
        <li>no analytics, crash reporting or usage-tracking software of its own;</li>
        <li>no access to your location, contacts, camera, microphone, photos or files.</li>
      </Ul>
      <P>The only information that leaves your device is the purchase information described in the next section.</P>

      <H2>The in-app purchase</H2>
      <P>
        The app offers one optional in-app purchase that unlocks all materials. It is sold through Google Play’s
        billing system. Google handles the payment, and the app never sees your card or other payment details.
      </P>
      <P>
        To check whether you have unlocked the full version, the app uses RevenueCat, a service that validates in-app
        purchases. Each time the wallpaper starts, and when you open the unlock screen, the app connects to RevenueCat
        and sends:
      </P>
      <Ul>
        <li>
          <strong className={strongClass}>Purchase history.</strong> If you have bought the unlock: the item purchased,
          the Google Play purchase token, the purchase date, and the price and currency.
        </li>
        <li>
          <strong className={strongClass}>An anonymous ID.</strong> A random ID that RevenueCat’s software creates for
          your installation of the app. It is not your name, email address or Google account, and the app does not
          link it to them.
        </li>
        <li>
          <strong className={strongClass}>Basic technical information.</strong> The app version, the Android version
          and your device’s language and region setting.
        </li>
      </Ul>
      <P>This information is sent over an encrypted (HTTPS) connection.</P>

      <H2>How we use it</H2>
      <P>We use this information for two purposes only:</P>
      <Ul>
        <li>
          <strong className={strongClass}>Making the purchase work.</strong> Confirming that your purchase is valid,
          unlocking the materials, and restoring the purchase when you reinstall the app or move to a new device.
          Restoring works because the app asks Google Play for the purchases made with your Google account, and
          RevenueCat confirms them.
        </li>
        <li>
          <strong className={strongClass}>Sales figures.</strong> RevenueCat’s dashboard shows us how many unlocks have
          been sold and the revenue from them. We look at these totals; we do not use them to profile you.
        </li>
      </Ul>
      <P>We do not sell this information, use it for advertising, or try to identify you with it.</P>

      <H2>Who receives it</H2>
      <P>We do not sell or share your information with anyone for their own purposes. It is handled only by:</P>
      <Ul>
        <li>
          <strong className={strongClass}>RevenueCat, Inc.</strong>, the service provider that validates and stores
          purchase records on our behalf, under the{' '}
          <a href="https://www.revenuecat.com/privacy" className={linkClass}>
            RevenueCat privacy policy
          </a>
          ;
        </li>
        <li>
          <strong className={strongClass}>Google</strong>, which processes the payment itself through Google Play,
          under the{' '}
          <a href="https://policies.google.com/privacy" className={linkClass}>
            Google privacy policy
          </a>
          .
        </li>
      </Ul>

      <H2>How long we keep it</H2>
      <P>
        RevenueCat keeps your purchase record for as long as we offer the app, so that your purchase can be restored,
        unless you ask us to delete it (see “Your rights and deleting your data” below).
      </P>

      <H2>Settings stored on your device</H2>
      <P>
        The app remembers the choices you make on its settings screen: the material, the material scale, the gyroscope
        mode, sensitivity, springiness and inversion, the swiping speed and the double-tap action. It also remembers
        whether you have unlocked the full version, so the wallpaper works without a connection. These choices are
        saved in the app’s private storage on your device. They are never transmitted anywhere, and they are removed
        when you clear the app’s data or uninstall the app.
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
        The app requests three standard permissions: internet access and network state, so it can reach Google Play
        and RevenueCat for the in-app purchase, and Google Play billing, so it can offer the purchase. It also declares
        the private permissions Android requires for its own wallpaper service. It requests no permission that gives
        access to your contacts, location, camera, microphone, photos or files.
      </P>

      <H2>Third parties</H2>
      <P>
        The app is distributed through Google Play. Google may collect information about downloads, installs and
        crashes under its own privacy policy. Apart from RevenueCat, the app includes no third-party software that
        collects data. It is built with the Unity engine, with Unity’s analytics, advertising, purchasing and
        crash-reporting services switched off.
      </P>

      <H2>Children</H2>
      <P>
        The app is not directed at children under 13, and we do not knowingly collect personal information from
        children. If you believe a child has made a purchase and you want its record deleted, contact us and we will
        delete it.
      </P>

      <H2>Your rights and deleting your data</H2>
      <P>
        There is no account, and we hold no contact details for you. You can ask us what information we hold about
        your purchase, or ask us to delete it, at any time: email{' '}
        <a href="mailto:hello@briarebrothers.com" className={linkClass}>
          hello@briarebrothers.com
        </a>{' '}
        with your Google Play order number (it starts with “GPA.” and appears on the receipt Google emails you), and we
        will delete your record from RevenueCat within 30 days.
      </P>
      <P>
        Deleting the record does not cancel or refund the purchase, which Google keeps under its own policy. If you
        keep using the app afterwards, it will check your purchase with Google Play again and a new record will be
        created so your materials stay unlocked. To stop that, uninstall the app.
      </P>
      <P>
        To remove the settings stored on your device, clear the app’s data in Android’s settings or uninstall the app.
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
