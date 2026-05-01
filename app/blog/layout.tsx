import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV guides and comparisons | evrunningcosts.com",
  description: "Plain-English guides to help you understand the real cost of switching to electric. Charging, buying, technology and more.",
  alternates: { canonical: "https://www.evrunningcosts.com/blog" },
  openGraph: {
    title: "EV guides and comparisons | evrunningcosts.com",
    description: "Plain-English guides to help you understand the real cost of switching to electric. Charging, buying, technology and more.",
    url: "https://www.evrunningcosts.com/blog",
    siteName: "EV Running Costs",
    locale: "en_AU",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
