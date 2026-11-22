import type { Metadata } from "next";
import { SITE_URL } from "@/lib/apps";
import "./globals.css";

// Defaults for every page. The home page sets its own canonical and Open Graph tags in app/page.tsx,
// and each app's landing page in components/AppLanding.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Briare Brothers | Android Live Wallpapers & Software",
  description:
    "Briare Brothers is a two-person indie studio making 3D live wallpapers for Android (Enchanted Rose, Reactor, Materials, HexOrb and Gangsters Paradise), the Live Wallpaper SDK for Unity, the MTGDB card database and the Aboyeur kitchen display system.",
  keywords:
    "live wallpaper, Android live wallpaper, 3D live wallpaper, Briare Brothers, Enchanted Rose, Reactor, Materials, HexOrb, Gangsters Paradise, Live Wallpaper SDK, Unity, MTGDB, Aboyeur, indie dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
