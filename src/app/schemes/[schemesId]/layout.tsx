import React from "react";
import axios from "axios";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    schemesId: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
    const { schemesId } = await params;

    try {
        const response = await axios.get(`https://api.mfapi.in/mf/${schemesId}`);
        //console.log(response.data.data)
        const schemeName =
        response.data?.meta?.scheme_name || "Mutual Fund Scheme";

        return {
            title: `${schemeName} | Mutual Fund Details | NavView`,
            description: `Check NAV, returns, portfolio, and fund manager details of ${schemeName}.`,
            alternates: {
                canonical: `https://navview.vercel.app/schemes/${schemesId}`,
            },
        };
    } catch (error) {
        console.error("Metadata fetch error:", error);

        return {
            title: "Mutual Fund Scheme | NavView",
            description: "View mutual fund scheme details.",
            alternates: {
                canonical: `https://navview.vercel.app/schemes/${schemesId}`,
            },
        };
    }
}

export default async function Layout({
  children,
}: Props) {
  return <>{children}</>;
}
