import AppShell from '@/components/AppShell';
import { apps } from '@/lib/apps';

export default function ReactorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell app={apps['reactor']}>{children}</AppShell>;
}
