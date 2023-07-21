import TabBar from '@/components/TabBar';
import '@/styles/configs/globals.scss';
import '@/styles/utils/classes.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <TabBar />
        {children}
      </body>
    </html>
  );
}
