import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { SITE_URL } from '@/lib/apps';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import SoftwareSection from '@/components/SoftwareSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Title and description come from the root layout. These tags are set here rather than there so
// the legal pages, which set no Open Graph tags of their own, don't inherit the home page's.
export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Briare Brothers',
    locale: 'en_US',
    title: 'Briare Brothers | Android Live Wallpapers & Software',
    description:
      'A two-person indie studio making 3D live wallpapers for Android, the Live Wallpaper SDK for Unity, and software.',
  },
  twitter: { card: 'summary' },
};

// Dynamically import Scene3D with no SSR to avoid Three.js issues
const Scene3D = dynamic(() => import('@/components/Scene3D'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen animated-gradient">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <ProductsSection />

      {/* Services Section */}
      <SoftwareSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
