import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';

import { Providers } from './providers';

const antonRegular = localFont({
  src: "../../public/fonts/Anton-Regular.ttf",
  variable: "--font-anton-regular",
  display: "swap",
});

const Blackheat = localFont({
  src: "../../public/fonts/Blackheat.otf",
  variable: "--font-blackheat",
  display: "swap",
});

const Inter = localFont({
  src: "../../public/fonts/Inter_18pt-Regular.ttf",
  variable: "--font-blackheat",
  display: "swap",
});


export const metadata: Metadata = {
  title: "MYSTICSVERSE",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/mystics-logo.png" />
      </head>
      <body
        className={`${antonRegular.variable} ${Blackheat.variable} ${Inter}`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
