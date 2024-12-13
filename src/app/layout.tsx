import '@/styles/globals.css';
import { abel, adamina, gill_sans, pirata_one, inandan } from '@/styles/fonts';

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
        {children}
      </body>
    </html>
  );
}
