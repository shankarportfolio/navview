import React from "react";
import axios from "axios";

type Props = {
  children: React.ReactNode;
  params: Promise<{
    categoryName: string;
    schemesId: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
    const { categoryName, schemesId } = await params;

    try {
        const response = await axios.get(`https://api.mfapi.in/mf/${schemesId}`);
        //console.log(response.data.data)
        const schemeName =
        response.data?.meta?.scheme_name || "Mutual Fund Scheme";

        const formattedCategory = categoryName
        .split("-")
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ");

        return {
            title: `${schemeName} | ${formattedCategory} Mutual Fund Details | NavView`,
            description: `Check NAV, returns, portfolio, and fund manager details of ${schemeName} under ${formattedCategory} category.`,
            alternates: {
                canonical: `https://navview.vercel.app/categories/${categoryName}/${schemesId}`,
            },
        };
    } catch (error) {
        console.error("Metadata fetch error:", error);

        return {
            title: "Mutual Fund Scheme | NavView",
            description: "View mutual fund scheme details.",
            alternates: {
                canonical: `https://navview.vercel.app/categories/${categoryName}/${schemesId}`,
            },
        };
    }
}

export default async function Layout({
  children,
}: Props) {
  return <>{children}</>;
}
