import AppShell from '@/components/AppShell';
import { apps } from '@/lib/apps';

export default function EnchantedRoseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell app={apps['enchanted-rose']}>{children}</AppShell>;
}
