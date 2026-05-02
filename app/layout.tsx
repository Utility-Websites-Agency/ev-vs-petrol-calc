import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evrunningcosts.com"),
  title: "EV vs Petrol Cost Calculator — Calculate Annual Fuel Savings",
  description: "Calculate your annual fuel savings switching from a petrol car to an EV. Compare running costs, CO2 emissions, and break-even point. Free, no sign-up.",
  openGraph: {
    title: "EV vs Petrol Cost Calculator — Calculate Annual Fuel Savings",
    description: "Calculate your annual fuel savings switching from a petrol car to an EV. Compare running costs, CO2 emissions, and break-even point. Free, no sign-up.",
    url: "https://www.evrunningcosts.com",
    siteName: "EV vs Petrol Cost Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EV vs Petrol Cost Calculator — Calculate Annual Fuel Savings",
    description: "Calculate your annual fuel savings switching from a petrol car to an EV. Compare running costs, CO2 emissions, and break-even point. Free, no sign-up.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.evrunningcosts.com" },
  icons: {
    icon: "/ev-favicon.png",
    shortcut: "/ev-favicon.png",
    apple: "/ev-favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3581257773539253" crossOrigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W3QKWV1SW1" />
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-W3QKWV1SW1');`}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
