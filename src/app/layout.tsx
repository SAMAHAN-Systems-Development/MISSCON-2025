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
      <body
        className={`${abel.variable} ${adamina.variable} ${gill_sans.variable} ${pirata_one.variable} ${inandan.variable} antialiased`}
      >
        <div className="relative min-h-screen">
          <SlideMenu />
          <div className="relative z-10">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
