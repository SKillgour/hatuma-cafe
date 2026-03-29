import type { Metadata } from "next";
import "./globals.css";
import HCHeader from "@/components/HCHeader";
import HCFooter from "@/components/HCFooter";

export const metadata: Metadata = {
  title: "Hatuma Cafe | Family Cafe, Playground & Coffee - Waipukurau, Hawke's Bay",
  description:
    "Family-friendly rural cafe with a kids playground (with trampoline), dog-friendly outdoor seating, and great coffee. 2398 Takapau Road, Waipukurau. Kitchen till 2pm.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <HCHeader />
        <main>{children}</main>
        <HCFooter />
      </body>
    </html>
  );
}
