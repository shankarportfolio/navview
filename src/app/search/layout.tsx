import type { Metadata } from "next";
import TopLoader from "../TopLoader";
import { Footer } from "../ui/components/Footer";
import { Header } from "../ui/components/Header";

export const metadata: Metadata = {
  title: "Search Mutual Funds by Fund Name or AMC",
  description: "Search mutual fund schemes by fund name or fund house. NavView lets you quickly find mutual funds, explore NAV history, and view scheme details using publicly available data.",
};

export default function SchemeLayout({
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
