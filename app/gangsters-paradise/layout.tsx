import Link from 'next/link';

// `short` is the header label on phone-width screens, where the full labels don't fit in one row.
const sectionLinks = [
  { name: 'Gangsters Paradise', short: 'Gangsters Paradise', href: '/gangsters-paradise' },
  { name: 'Privacy Policy', short: 'Privacy', href: '/gangsters-paradise/privacy-policy' },
  { name: 'Terms of Service', short: 'Terms', href: '/gangsters-paradise/terms-of-service' },
];

export default function GangstersParadiseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Slim header: the home page's fixed nav uses in-page anchors, so these routes get their own */}
      <header className="border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-black text-xs">BB</span>
            </div>
            <span className="hidden sm:inline font-semibold text-white tracking-tight">Briare Brothers</span>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-5 text-sm text-zinc-400">
            {sectionLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="whitespace-nowrap hover:text-white transition-colors duration-200"
              >
                <span className="sm:hidden">{link.short}</span>
                <span className="hidden sm:inline">{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/[0.04] px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-black text-[9px]">BB</span>
            </div>
            <span className="text-sm font-semibold text-white">Briare Brothers</span>
            <span className="text-zinc-700 text-sm">· Wyoming LLC · 2025</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-600">
            <Link href="/" className="whitespace-nowrap hover:text-white transition-colors">
              Home
            </Link>
            {sectionLinks.map((link) => (
              <Link key={link.name} href={link.href} className="whitespace-nowrap hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
