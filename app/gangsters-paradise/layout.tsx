import AppShell from '@/components/AppShell';
import { apps } from '@/lib/apps';

export default function GangstersParadiseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppShell app={apps['gangsters-paradise']}>{children}</AppShell>;
}
