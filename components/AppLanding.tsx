import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Home, Smartphone, Sparkles, type LucideIcon } from 'lucide-react';
import {
  SITE_URL,
  appPath,
  fullName,
  iconPath,
  ogImagePath,
  playUrl,
  privacyPath,
  screenshotPaths,
  termsPath,
  type WallpaperApp,
} from '@/lib/apps';

// The landing page for one live wallpaper app: a plain server component (no framer-motion) on the
// globals.css classes, like the legal pages. Each app's page.tsx passes its own copy.

export interface Feature {
  icon: LucideIcon;
  color: string;
  title: string;
  body?: string;
  bullets?: string[];
  after?: string;
}

export interface Included {
  /** What comes with the app at no cost. */
  inApp: string[];
  /** What the one-time purchase adds; omit when everything is included. */
  unlock?: string[];
  unlockLabel?: string;
  note: string;
}

interface AppLandingProps {
  app: WallpaperApp;
  /** The opening paragraph of the listing's full description. */
  intro: string;
  features: Feature[];
  included: Included;
  /** A privacy summary for the bottom card. Only use what the app's privacy policy says. */
  privacy?: { title: string; body: string };
  /** Hide the home-screen setup route, for a release that can crash in the system wallpaper picker. */
  appSetupOnly?: boolean;
}

export function landingMetadata(app: WallpaperApp): Metadata {
  const name = fullName(app);
  const title = `${name} for Android | Briare Brothers`;
  const url = `${SITE_URL}${appPath(app)}`;
  const image = { url: `${SITE_URL}${ogImagePath(app)}`, width: 1200, height: 630, alt: `${name} for Android` };

  return {
    title,
    description: app.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Briare Brothers',
      locale: 'en_US',
      title: `${name} for Android`,
      description: app.metaDescription,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} for Android`,
      description: app.metaDescription,
      images: [image],
    },
  };
}

function jsonLd(app: WallpaperApp) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: fullName(app),
    description: app.metaDescription,
    operatingSystem: 'Android',
    applicationCategory: 'LifestyleApplication',
    url: playUrl(app),
    installUrl: playUrl(app),
    image: `${SITE_URL}${iconPath(app)}`,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: 'Briare Brothers', url: SITE_URL },
  };
  // Escape "<" so the JSON can't close the script tag.
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

function PlayButton({ app }: { app: WallpaperApp }) {
  return (
    <a
      href={playUrl(app)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors duration-200"
    >
      <Smartphone className="w-5 h-5" />
      Get it on Google Play
    </a>
  );
}

function SectionHeading({ id, eyebrow, children }: { id?: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-3">{eyebrow}</p>
      <h2 id={id} className="text-3xl md:text-4xl font-black tracking-tighter">
        <span className="gradient-text">{children}</span>
      </h2>
    </div>
  );
}

export default function AppLanding({ app, intro, features, included, privacy, appSetupOnly }: AppLandingProps) {
  const name = fullName(app);
  const privacyCard = privacy ?? {
    title: 'Privacy and terms',
    body: `How ${app.name} handles your data, and the terms for using it.`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(app) }} />

      {/* Hero */}
      <section className="relative px-6 pt-16 pb-16 md:pt-24 md:pb-20 grid-bg overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] hero-orb pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Image
            src={iconPath(app)}
            alt={`${app.name} app icon`}
            width={96}
            height={96}
            priority
            className="mx-auto mb-8 rounded-[22px] border border-white/10 shadow-2xl shadow-black/60"
          />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-zinc-400 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full dot-live" />
            Android live wallpaper · On Google Play
          </div>

          <h1 className="font-black tracking-tighter leading-none mb-6">
            <span className="gradient-text text-5xl sm:text-6xl md:text-7xl">{app.name}</span>{' '}
            <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl tracking-tight text-zinc-500">{app.kind}</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-5 leading-relaxed">{app.shortDescription}</p>
          <p className="text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">{intro}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <PlayButton app={app} />
            <a
              href="#whats-included"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 text-zinc-300 font-medium hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
            >
              What&apos;s included
            </a>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section aria-labelledby="screenshots" className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 id="screenshots" className="sr-only">
            {name} screenshots
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {screenshotPaths(app).map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${name} screenshot ${i + 1}`}
                width={1080}
                height={1920}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="w-full h-auto rounded-2xl border border-white/[0.08] bg-white/[0.02]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Features">What {app.name} does</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="card p-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
                >
                  <f.icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                {f.body && <p className="text-sm text-zinc-500 leading-relaxed">{f.body}</p>}
                {f.bullets && (
                  <ul className={`space-y-1.5 text-sm text-zinc-500 leading-relaxed ${f.body ? 'mt-3' : ''}`}>
                    {f.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: f.color }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {f.after && <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{f.after}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="whats-included" className="px-6 pb-20 scroll-mt-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Pricing">What&apos;s included</SectionHeading>
          <div className="card p-6 md:p-8">
            <div className={`grid gap-8 ${included.unlock ? 'md:grid-cols-2' : ''}`}>
              <div>
                <h3 className="font-bold text-white mb-4">{included.unlock ? 'In the app' : 'Everything comes with the app'}</h3>
                <ul className="space-y-2.5 text-sm text-zinc-400">
                  {included.inApp.map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-green-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {included.unlock && (
                <div>
                  <h3 className="font-bold text-white mb-4">{included.unlockLabel ?? 'With the one-time unlock'}</h3>
                  <ul className="space-y-2.5 text-sm text-zinc-400">
                    {included.unlock.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Sparkles className="w-4 h-4 mt-0.5 shrink-0 text-purple-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <p className="mt-8 pt-6 border-t border-white/[0.06] text-sm text-zinc-500 leading-relaxed">{included.note}</p>
          </div>
        </div>
      </section>

      {/* How to set it */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <SectionHeading eyebrow="Setup">How to set it</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card p-6">
              <Smartphone className="w-5 h-5 text-blue-400 mb-4" />
              <h3 className="font-bold text-white mb-2">From the app</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Open {app.name} and tap <span className="text-zinc-300">Set wallpaper</span>.
              </p>
            </div>
            {!appSetupOnly && (
              <div className="card p-6">
                <Home className="w-5 h-5 text-purple-400 mb-4" />
                <h3 className="font-bold text-white mb-2">From your home screen</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Long-press your home screen, choose <span className="text-zinc-300">Wallpapers</span>, and pick{' '}
                  {app.name} from the live wallpapers.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Get it + privacy */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Get {app.name} on Google Play</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">{app.shortDescription}</p>
            </div>
            <div>
              <PlayButton app={app} />
            </div>
          </div>
          <div className="card p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{privacyCard.title}</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">{privacyCard.body}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
              <Link
                href={privacyPath(app)}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Privacy policy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href={termsPath(app)}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Terms of service
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
