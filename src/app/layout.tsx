import TabBar from '@/app/components/TabBar';
import '@/styles/configs/globals.scss';
import '@/styles/utils/classes.scss';
import { Roboto_Mono } from 'next/font/google';

const roboto = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* TabBar component must be shared across all three pages */}
        <TabBar />
        {children}
      </body>
    </html>
  );
}
