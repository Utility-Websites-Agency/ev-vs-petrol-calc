import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.evrunningcosts.com"),
  title: "Electric Car vs Petrol Cost Calculator | EV vs Petrol",
  description: "Compare the real cost of driving electric vs petrol. Enter your mileage, energy prices, and car details to see total ownership costs side by side.",
  openGraph: {
    title: "Electric Car vs Petrol Cost Calculator | EV vs Petrol",
    description: "See exactly how much you save switching to electric. Compare EV vs petrol running costs in seconds.",
    url: "https://www.evrunningcosts.com",
    siteName: "EV vs Petrol Cost Calculator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Electric Car vs Petrol Cost Calculator | EV vs Petrol",
    description: "See exactly how much you save switching to electric. Compare EV vs petrol running costs in seconds.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.evrunningcosts.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3581257773539253" crossOrigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W3QKWV1SW1" />
        <script>
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-W3QKWV1SW1');`}
        </script>
      </head>
      <body>{children}</body>
    </html>
  );
}
