"use client";

import { usePathname } from "next/navigation";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide nav/footer when inside /studio
  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      {!isStudio && <ResponsiveNav />}
      {children}
      {!isStudio && <Footer />}
      {!isStudio && <ScrollToTop />}
    </>
  );
}