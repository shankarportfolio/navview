'use client'
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { plusjakartasans } from "@/app/_lib/font";
import Link from "next/link";
import { MfLinkBlock } from "./MfLinkBlock";
import ListingBlockSplash from "./ListingBlockSplash";
import { ErrorMessage } from "./ErrorMessage";
import { PageHeading } from "./PageHeading";

const ITEMS_PER_PAGE = 100;

const SearchResults = ({query, currentPage} : {query : string, currentPage: number}) =>{

    const [searchResultsList, setSearchResultsList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<boolean>(true);

    useEffect(()=>{
        const fetchSearchResults = async () =>{
            try{
                const searchres = await axios.get(`https://api.mfapi.in/mf/latest`);
                //console.log(searchres.data);
                setSearchResultsList(searchres.data);
                setErrorMessage(false);
                setIsLoading(false);
            }
            catch(err){
                //console.log(`Opps! Something went wrong. ${err}`);
                setErrorMessage(true)
            }
        }

        fetchSearchResults();

    },[query]);
    const searchParams = useSearchParams();
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    const crrDate = new Date().getFullYear().toString();
    const newSearchList = searchResultsList.filter((item) =>
        item.schemeName
          .toLowerCase()
          .includes(query.toLowerCase()) &&
        item.date.split("-")[2] === crrDate
    );

    //console.log("Total Records : ",newSearchList.length);
    //console.log(pageFromUrl);
    // 📄 Pagination logic
    const startIndex = (pageFromUrl - 1) * ITEMS_PER_PAGE;
    const paginatedList = newSearchList.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const totalPages = Math.ceil(newSearchList.length / ITEMS_PER_PAGE);
    const sectionRef = useRef<HTMLElement | any>(null);
    useEffect(() => {
        sectionRef.current?.scrollIntoView({
            top: 150, 
            behavior: "smooth",
        });
    }, [pageFromUrl]);
    
    return(
        <>
            <div className={`w-full grid grid-cols-1 gap-3`} ref={sectionRef}>
                {
                    isLoading ? <ListingBlockSplash /> : (
                        <>
                            <PageHeading>Search For <span className="capitalize">"{query}"</span></PageHeading>
                            {
                                paginatedList?.length > 0 ? (
                                    paginatedList.map((mapinglist) => {
                                        return <MfLinkBlock key={mapinglist.schemeCode} SchemeCode={mapinglist.schemeCode} SchemeName={mapinglist.schemeName}/>
                                    })
                                ) : (!errorMessage ? (<ListingBlockSplash />) : <ErrorMessage/>)
                            }
                        </>
                    ) 
                }
                {!isLoading && totalPages > 1 && (
                    <div className="w-full flex items-center justify-center flex-wrap mt-8">
                        {Array.from({ length: totalPages }).map((_, index) => {
                        const pageNumber = index + 1;
                        const isActive = pageNumber === pageFromUrl;

                        return (
                            <Link
                                key={pageNumber}
                                href={`/search?query=${query}&page=${pageNumber}`}
                                className={`
                                    ${plusjakartasans.className}
                                    text-sm block py-2 px-5 mx-0.5 rounded-xl
                                    transition-all duration-200
                                    ${
                                    isActive
                                        ? "bg-black text-white"
                                        : "text-black bg-[#dddbff] hover:bg-[#c9c6ff]"
                                    }
                                `}
                            >
                            {pageNumber}
                            </Link>
                        );
                        })}
                    </div>
                )}
            </div>
        </>
    )
}

export default SearchResults;