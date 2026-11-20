import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Materials LWP Privacy Policy',
  description:
    'Privacy policy for the Materials LWP live wallpaper for Android by Briare Brothers. The app sends nothing about you to us. Its optional in-app purchase is handled by Google Play, and Google’s billing component in the app sends Google its own logs.',
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
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 19, 2026</p>

      <p className="border-l-2 border-blue-500 pl-5 py-1 text-zinc-300 leading-relaxed">
        <strong className={strongClass}>The short version:</strong> Materials LWP sends nothing about you to us, and we
        never sell your information. It has no ads, no accounts, no analytics and no crash reporting. Its optional
        in-app purchase is sold through Google Play. For it, the app checks with Google Play what your Google account
        owns each time it starts, and Google’s billing component in the app sends Google its own logs. The app never
        sees your payment details.
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
        We collect nothing: the app sends no information to us. What its in-app purchase exchanges with Google is
        described under “The in-app purchase” below. The app has:
      </P>
      <Ul>
        <li>no user accounts or sign-in;</li>
        <li>no advertising and no advertising ID;</li>
        <li>no analytics, crash reporting or usage tracking;</li>
        <li>no server of its own;</li>
        <li>no access to your location, contacts, camera, microphone, photos or files.</li>
      </Ul>

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
        The app sends nothing about your purchase to us, and it has no server to send it to. Your purchase record is
        kept by Google, and you can see it in your Google Play order history. As the seller, we can look up orders in
        our Google Play Console, and we do so only to handle refunds and support requests.
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
        uses to notice that a purchase has been refunded. These are saved in the app’s private storage on your device.
        They are never transmitted anywhere, and they are removed when you clear the app’s data or uninstall the app.
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
        looks for Google Play’s billing service on your phone. Google’s billing component brings two of Android’s
        standard permissions: internet access, and seeing whether the phone is online. It uses them to send its logs.
        The app’s other permissions are private ones that Android requires for its own wallpaper service. It requests
        no permission that gives access to your contacts, location, camera, microphone, photos or files.
      </P>

      <H2>Third parties</H2>
      <P>
        The app is distributed through Google Play. Google may collect information about downloads, installs,
        purchases and crashes under its own privacy policy. The app includes the Google Play Billing Library, Google’s
        component that lets it ask the Google Play Store app on your phone about the purchase. The library also sends
        Google its own logs, as described under “The in-app purchase” above. Apart from that, the app includes no
        third-party software that handles your information. It is built with the Unity engine, with Unity’s analytics,
        advertising, purchasing and crash-reporting services switched off.
      </P>

      <H2>Children</H2>
      <P>
        The app is not directed at children under 13. It sends nothing about anyone to us, children included. What its
        in-app purchase exchanges with Google is described under “The in-app purchase” above. Purchases are made
        through Google Play, under the Google account’s own settings.
      </P>

      <H2>Your rights and deleting your data</H2>
      <P>
        The app sends us no information about you, so there is nothing for us to access, correct, export or delete. To
        remove the settings and the “unlocked” setting stored on your device, clear the app’s data in Android’s settings
        or uninstall the app. Your purchase stays with your Google account, so the unlock comes back if you install the
        app again. The purchase record itself, and the Billing Library’s logs, are held by Google under its own privacy
        policy.
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
