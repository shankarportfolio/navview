import type { Metadata } from "next";
import "./globals.css";
import TopLoader from "./TopLoader";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
    metadataBase: new URL("https://yourdomain.com"),
    alternates: {
        canonical: "./",
    },
    robots: {
        index: true,
        follow: true,
    },
    title: {
        default: "Mutual Fund NAV Tracker & Fund Information | NavView",
        template: "%s | NavView"
    },
    description: "NavView is a simple informational web app to explore mutual fund NAV, historical price trends, and fund categories in India using publicly available MFAPI data.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased overflow-hidden`}>
                <TopLoader />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
