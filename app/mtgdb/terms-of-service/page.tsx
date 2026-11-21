import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MTGDB Terms of Service',
  description:
    'Terms of service for MTGDB, the Magic: The Gathering card database, collection tracker and deck builder for Android and iOS by Briare Brothers, including its one-time MTGDB Pro purchase.',
  alternates: {
    canonical: 'https://briarebrothers.com/mtgdb/terms-of-service',
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

export default function TermsOfServicePage() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-16 pb-24 md:pt-24">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-4">MTGDB</p>
      <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-3">
        <span className="gradient-text">Terms of Service</span>
      </h1>
      <p className="text-zinc-400">MTGDB card database and deck builder for Android and iOS</p>
      <p className="text-sm text-zinc-600 mt-1 mb-10">Effective November 20, 2026</p>

      <P>
        These terms apply to MTGDB (“the app”), a Magic: The Gathering card database, collection tracker and deck
        builder for Android and iOS published by Briare Brothers (“we”, “us”) as Space Cadet Apps, and to the MTGDB Pro
        purchase. By installing or using the app you agree to them. If you don’t agree, please uninstall the app.
      </P>

      <H2>Using the app</H2>
      <P>
        We give you a personal, non-exclusive, non-transferable licence to install and use the app on Android and Apple
        devices you own or control, for your own non-commercial use. You may not copy, sell, rent or redistribute the
        app or its artwork, or reverse engineer it except where the law allows you to. You may not interfere with the
        app’s online services or try to get around its usage limits.
      </P>

      <H2>Accounts</H2>
      <P>
        You can use the app without signing in. You can also create an account with an email address and password,
        with Google, or with Apple. An account syncs your collection and decks between your devices, raises the number
        of decks you can keep, and is needed for the AI deck builder and to buy MTGDB Pro. You are responsible for
        keeping your sign-in details safe and for what is done with your account.
      </P>
      <P>
        You can delete your account in the app under{' '}
        <strong className={strongClass}>Settings › Account › Delete Account</strong>. That permanently deletes your
        collection, decks, tags, life tracker data and the account itself, and cannot be undone. If the app can’t
        complete the deletion, contact us at the email address below and we will do it.
      </P>

      <H2>Your content</H2>
      <P>
        The collection, decks and tags you add to the app are yours. We store them so the app can keep them and
        sync them to your devices, and they are not shown to other users. When you share a deck or card, the app passes
        text or an image to the app you choose, and from there that app’s terms apply.
      </P>
      <P>
        You are responsible for what you type into the app, including deck names, descriptions and AI deck builder
        requests. Don’t enter anything unlawful or anything that infringes someone else’s rights.
      </P>

      <H2>MTGDB Pro</H2>
      <P>
        The app is free. The free version may show ads, limits how many decks you can keep, and includes a small number
        of AI deck generations per account to try. MTGDB Pro is a one-time purchase, not a subscription. It removes the
        ads, removes the deck limit, and lets you keep generating decks with the AI deck builder, up to a daily fair-use
        limit (currently 30 generations a day).
      </P>
      <P>
        The price is shown before you buy. The purchase is made through Google Play or the Apple App Store, under the{' '}
        <a href="https://play.google.com/about/play-terms/" className={linkClass}>
          Google Play Terms of Service
        </a>{' '}
        or the{' '}
        <a href="https://www.apple.com/legal/internet-services/itunes/" className={linkClass}>
          Apple Media Services Terms and Conditions
        </a>
        , and refunds follow that store’s refund policies. You must be signed in to an MTGDB account to buy Pro. Pro
        belongs to that MTGDB account, not to your Google or Apple account, and works on the Android and Apple devices
        where you sign in to it. If Pro doesn’t appear after you reinstall the app or change device, sign in to the same
        account and use <strong className={strongClass}>Settings › Purchases › Restore Purchases</strong>. If the store
        refunds the purchase, Pro is removed. If you delete your MTGDB account, Pro is deleted with it and cannot be
        restored.
      </P>
      <P>
        The app may change over time. We may add, change or retire features, and we may change the free version’s
        limits or the daily AI limit, but we won’t take away what Pro unlocks except where a feature has to change to
        keep the app working, safe or compliant with the stores’ rules, or where an outside service that a feature
        depends on changes or ends.
      </P>

      <H2>AI deck builder</H2>
      <P>
        The AI deck builder builds a deck list from a card or a short description you give it, and can suggest
        replacement cards. To do that, what you enter and the cards involved are sent to our servers and to OpenAI, the
        AI provider we use. Don’t put personal or confidential information in a description.
      </P>
      <P>
        The lists are generated automatically. We check cards against Scryfall’s card data, including format legality,
        but a list can still contain mistakes, so check a deck against the official rules and your event’s requirements
        before you rely on it. The feature has usage limits, described under MTGDB Pro above, and because it depends on
        an outside AI service we may change, limit or suspend it.
      </P>

      <H2>Card data and prices</H2>
      <P>
        Card data, images and rulings come from Scryfall. Prices come from TCGplayer, with Scryfall’s prices as a
        fallback. We don’t control that data and can’t promise it is complete, current or correct. Prices and
        collection or deck values are estimates for information only. They are not an offer to buy or sell or a
        valuation, so check current prices before you buy, sell or trade.
      </P>
      <P>
        Links to TCGplayer in the app may be affiliate links, which means we may earn a commission when you buy through
        them. Anything you buy on TCGplayer is between you and TCGplayer, under its terms.
      </P>

      <H2>Your device</H2>
      <P>
        The app keeps its card database on your device, so it needs storage space, and searching cards works offline.
        Updating the database, loading card images and prices, syncing and the AI deck builder need an internet
        connection and may use mobile data that your carrier charges for.
      </P>

      <H2>Ownership</H2>
      <P>
        The app, its code, design and name belong to Briare Brothers and its licensors. Open-source components are used
        under their own licences, listed in the app under{' '}
        <strong className={strongClass}>Settings › About › Open Source Licenses</strong>.
      </P>

      <H2>Trademarks</H2>
      <P>
        Magic: The Gathering is a trademark of Wizards of the Coast LLC. The app is not affiliated with, endorsed,
        sponsored, or specifically approved by Wizards of the Coast LLC. Card names, text, artwork and symbols belong to
        Wizards of the Coast and other rights holders.
      </P>
      <P>
        Scryfall and TCGplayer are separate companies. Their names and data belong to them, and their appearing in the
        app does not mean that they endorse it or are connected with us.
      </P>

      <H2>No warranty</H2>
      <P>
        The app is provided “as is”. To the extent the law allows, we make no warranties about it, including that it
        will work without interruption or errors on every device, that card data, prices or AI results are accurate, or
        that synced data will never be lost. You can export your decks and collection from the app, so keep a copy of
        anything you can’t afford to lose.
      </P>

      <H2>Limitation of liability</H2>
      <P>
        To the extent the law allows, Briare Brothers is not liable for indirect or consequential losses arising from
        your use of the app, and our total liability to you is limited to the amount you paid for MTGDB Pro, if any.
        Nothing in these terms limits liability that can’t be limited by law, or your statutory rights as a consumer,
        including your rights under the consumer protection laws of the European Economic Area and the United Kingdom.
      </P>

      <H2>Changes and ending</H2>
      <P>
        We may update these terms. The new version will be posted on this page with a new effective date, and
        continuing to use the app means you accept it.
      </P>
      <P>
        You can stop using the app at any time by uninstalling it. Uninstalling does not delete your account or synced
        data, so if you want them removed, delete the account first under{' '}
        <strong className={strongClass}>Settings › Account › Delete Account</strong>. We may suspend or close an
        account that is used to abuse the app’s services or break these terms.
      </P>

      <H2>Privacy</H2>
      <P>
        How the app handles information is described in its{' '}
        <a href="https://spacecadetapps.com/mtgdb/privacy_policy.html" className={linkClass}>
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
