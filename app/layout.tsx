import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import LayoutClient from "@/components/Helper/LayoutClient";

const font = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

//SEO
export const metadata: Metadata = {
  title: "Lauren Patterson",
  description: "Software Developer Portfolio of Lauren Patterson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <LayoutClient >
        {children}
        </LayoutClient>
      </body>
    </html>
  );
}
