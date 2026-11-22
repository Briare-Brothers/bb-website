import AppShell from '@/components/AppShell';
import { apps } from '@/lib/apps';

export default function MaterialLiveWallpaperLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell app={apps['material-live-wallpaper']}>{children}</AppShell>;
}
