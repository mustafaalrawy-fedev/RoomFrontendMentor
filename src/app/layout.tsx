import type { Metadata } from "next";
import "./globals.css";
import { leagueSpartanFont } from './fonts';

export const metadata: Metadata = {
  title: "Room App",
  description: "Frontend Mentor Room App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='dark'>
      <body
        className={`${leagueSpartanFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
