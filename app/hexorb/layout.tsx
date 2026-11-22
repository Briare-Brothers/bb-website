import AppShell from '@/components/AppShell';
import { apps } from '@/lib/apps';

export default function HexOrbLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell app={apps['hexorb']}>{children}</AppShell>;
}
