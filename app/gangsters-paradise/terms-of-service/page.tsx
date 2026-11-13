import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gangsters Paradise Terms of Service',
  description: 'Terms of service for the Gangsters Paradise live wallpaper for Android by Briare Brothers.',
  alternates: {
    canonical: 'https://briarebrothers.com/gangsters-paradise/terms-of-service',
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

export default function TermsOfServicePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 pb-24 md:pt-24">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">Gangsters Paradise</p>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
        <span className="gradient-text">Terms of Service</span>
      </h1>
      <p className="text-zinc-400">Gangsters Paradise live wallpaper for Android</p>
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 13, 2026</p>

      <P>
        These terms apply to Gangsters Paradise (“the app”), a live wallpaper for Android published by Briare Brothers
        (“we”, “us”). By installing or using the app you agree to them. If you don’t agree, please uninstall the app.
      </P>

      <H2>Using the app</H2>
      <P>
        We give you a personal, non-exclusive, non-transferable licence to install and use the app on Android devices
        you own or control, for your own non-commercial use. You may not copy, sell, rent or redistribute the app or its
        artwork, or reverse engineer it except where the law allows you to.
      </P>

      <H2>Getting the app</H2>
      <P>
        The app is distributed through Google Play. Any price is shown in Google Play before you install it, and any
        purchase is made through Google Play under the{' '}
        <a href="https://play.google.com/about/play-terms/" className={linkClass}>
          Google Play Terms of Service
        </a>
        . Refunds follow Google Play’s refund policies.
      </P>
      <P>
        The app may change over time. We may add, change or retire scenes, props, settings or other features, for
        example to keep the app working on new versions of Android or to meet Google Play’s rules.
      </P>

      <H2>What the app shows</H2>
      <P>
        The app shows a fictional gangster hideout. Firearms, alcohol and tobacco appear in it as set dressing. They are
        decoration, not an endorsement of using them, and the app is not meant for children. Its content rating is shown
        in Google Play.
      </P>

      <H2>Your device</H2>
      <P>
        A live wallpaper draws continuously while it is on screen, which uses battery and processing power. The app
        pauses while your home screen is hidden. With “Tilt to look around” switched on, it reads the gyroscope to move
        the camera. You are responsible for choosing settings that suit your device.
      </P>

      <H2>Ownership</H2>
      <P>
        The app, its code, artwork and name belong to Briare Brothers and its licensors. Some artwork is used under
        third-party licences, such as Creative Commons Attribution 4.0. Each is credited, with its licence, in the app
        under Settings › About › Credits and licenses.
      </P>

      <H2>Trademarks</H2>
      <P>
        Brand names, logos and product designs that appear in the app, such as those of drinks and firearms, belong to
        their owners. They appear as decoration and do not mean that their owners endorse the app or are connected with
        it.
      </P>

      <H2>No warranty</H2>
      <P>
        The app is provided “as is”. To the extent the law allows, we make no warranties about it, including that it
        will work without interruption or errors on every device.
      </P>

      <H2>Limitation of liability</H2>
      <P>
        To the extent the law allows, Briare Brothers is not liable for indirect or consequential losses arising from
        your use of the app, and our total liability to you is limited to the amount you paid for the app, if any.
        Nothing in these terms limits liability that can’t be limited by law, or your statutory rights as a consumer,
        including your rights under the consumer protection laws of the European Economic Area and the United Kingdom.
      </P>

      <H2>Changes and ending</H2>
      <P>
        We may update these terms. The new version will be posted on this page with a new effective date, and
        continuing to use the app means you accept it. You can stop using the app at any time by uninstalling it.
      </P>

      <H2>Privacy</H2>
      <P>
        How the app handles information is described in its{' '}
        <a href="/gangsters-paradise/privacy-policy" className={linkClass}>
          Privacy Policy
        </a>
        .
      </P>

      <H2>Contact</H2>
      <P>
        Questions about these terms go to Briare Brothers at{' '}
        <a href="mailto:hello@briarebrothers.com" className={linkClass}>
          hello@briarebrothers.com
        </a>
        .
      </P>
    </article>
  );
}
