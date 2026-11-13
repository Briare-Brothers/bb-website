import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, Layers, ShieldCheck, Smartphone, Wine } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gangsters Paradise | Briare Brothers',
  description:
    'Gangsters Paradise is an Android live wallpaper by Briare Brothers: a 3D gangster hideout rendered live on your home screen, with swappable props and gyroscope parallax.',
  alternates: {
    canonical: 'https://briarebrothers.com/gangsters-paradise',
  },
};

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.space.gangsters';

const features = [
  {
    icon: Layers,
    title: 'Two scenes',
    desc: 'A basement hideout and a yakuza room, rendered in 3D live on your home screen.',
    color: '#3b82f6',
  },
  {
    icon: Wine,
    title: 'Swappable props',
    desc: 'Choose the drink, gun, ashtray and smoke on the table from the settings screen.',
    color: '#a855f7',
  },
  {
    icon: Compass,
    title: 'Gyroscope parallax',
    desc: 'Tilt your phone and the camera looks around the room.',
    color: '#ec4899',
  },
];

export default function GangstersParadisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-20 grid-bg overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] hero-orb pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-zinc-400 mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full dot-early" />
            Android live wallpaper · Coming soon
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none mb-6">
            <span className="gradient-text">Gangsters Paradise</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            A 3D gangster hideout rendered live on your home screen: a basement and a yakuza room,
            swappable props such as drinks, guns, ashtrays and smoke, and gyroscope parallax that
            looks around the room as you tilt your phone.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-100 transition-colors duration-200"
            >
              <Smartphone className="w-4 h-4" />
              Google Play
              <span className="px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-700 text-[11px] font-semibold uppercase tracking-wide">
                Coming soon
              </span>
            </a>
            <Link
              href="/gangsters-paradise/privacy-policy"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-zinc-300 font-medium text-sm hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
            >
              <ShieldCheck className="w-4 h-4" />
              Privacy policy
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {features.map((f) => (
              <div key={f.title} className="card p-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
                >
                  <f.icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h2 className="font-bold text-white mb-2">{f.title}</h2>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-bold text-white mb-1">No data collected</h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                No accounts, no analytics, no ads, no purchases and no internet access. Your settings stay on your phone.
              </p>
            </div>
            <Link
              href="/gangsters-paradise/privacy-policy"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
            >
              Read the privacy policy
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
