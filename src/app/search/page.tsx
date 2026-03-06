import { PageSection } from "../ui/components/PageSection";
import SearchForm from "../ui/components/SearchForm";
import SearchResults from "../ui/components/SearchResults";
import type { Metadata } from "next";

type Props = {
    searchParams: Promise<{ query?: string, page?: string }>;
};


type SearchParamsTypes = {
    searchParams: Promise<{query: string, page?: string}>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const params = await searchParams;
    if (params) {
        return {
            robots: {
                index: false,
                follow: true, // allow link flow
            },
        };
    }

    return {
        title: `Search Mutual Funds by Fund Name or AMC`,
        description: "Search mutual fund schemes by fund name or fund house. NavView lets you quickly find mutual funds, explore NAV history, and view scheme details using publicly available data.",
    };
}


const SearchPage = async ({searchParams} : SearchParamsTypes) =>{

    const params = await searchParams;
    const query = params?.query ?? "";
    const page = Number(params?.page ?? "1");

    return(
        <>
        {
            query ? (
                <PageSection><SearchResults query={query} currentPage={page}/></PageSection>
            ) : (
                    <PageSection CustomClasses="flex flex-col items-center justify-center"><SearchForm /></PageSection>
                )
        }
        </>
    )
}

export default SearchPage;