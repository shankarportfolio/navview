import type { Metadata } from "next";
import TopLoader from "../TopLoader";
import { Footer } from "../ui/components/Footer";
import { Header } from "../ui/components/Header";

export const metadata: Metadata = {
    title: "Mutual Fund Categories Explained - Equity, Debt, Hybrid & More",
    description: "Explore detailed explanations of different mutual fund categories including equity, debt, hybrid, index, liquid, and more. This guide on NavView helps you understand how each type of mutual fund works.",
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
