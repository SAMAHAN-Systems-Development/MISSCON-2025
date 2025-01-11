import '@/styles/globals.css';
import { abel, adamina, gill_sans, pirata_one, inandan } from '@/styles/fonts';
import Footer from '@/components/Footer';
import SlideMenu from '@/components/SlideMenu';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico?v=M44lzPylqQ" sizes="any" />
        <link
          rel="mask-icon"
          href="{{ base_path }}/images/safari-pinned-tab.svg?v=M44lzPylqQ"
          color="#000000"
        ></link>
        <meta property="og:image" content="/images/MissconLogo.png"></meta>
      </head>
      <body
        className={`${abel.variable} ${adamina.variable} ${gill_sans.variable} ${pirata_one.variable} ${inandan.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <SlideMenu />
          <div className="relative">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
