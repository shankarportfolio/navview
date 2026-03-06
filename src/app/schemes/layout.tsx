import type { Metadata } from "next";
import TopLoader from "../TopLoader";
import { Footer } from "../ui/components/Footer";
import { Header } from "../ui/components/Header";

export const metadata: Metadata = {
    title: "Mutual Fund Schemes List in India | Explore NAV & Fund Details",
    description: "Browse mutual fund schemes across top AMCs in India. Explore latest NAV, historical performance, and fund details including equity, debt, hybrid, and index funds. NavView provides easy access to scheme information using MFAPI data.",
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
