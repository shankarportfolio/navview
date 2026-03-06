import type { Metadata } from "next";
import TopLoader from "../TopLoader";
import { Footer } from "../ui/components/Footer";
import { Header } from "../ui/components/Header";

export const metadata: Metadata = {
    title: "Mutual Fund Categories in India | Fund Types & Schemes ",
    description: "Browse mutual fund categories such as large cap, mid cap, flexi cap, liquid, index funds, ETFs, and hybrid funds. Compare categories and explore schemes with NAV data on NavView.",
};

export default function AmcLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <TopLoader />
        <Header />
        {children}
        <Footer />
    </>
  );
}
