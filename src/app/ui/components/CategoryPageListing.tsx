'use client'
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MfLinkBlock } from "./MfLinkBlock";
import ListingBlockSplash from "./ListingBlockSplash";
import { ErrorMessage } from "./ErrorMessage";
import { PageHeading } from "./PageHeading";
import { getCategoryBySlug } from "../../_lib/categories";
import { plusjakartasans } from "@/app/_lib/font";
import { useSearchParams } from "next/navigation";

const ITEMS_PER_PAGE = 100;

const CategoryPageListing = ({categoryName, currentPage} : {categoryName : string, currentPage: number}) =>{

    const [testList, setTestList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<boolean>(true);

    useEffect(() =>{
        const fetchTestName = async () =>{
            try{
                const res = await axios.get(`https://api.mfapi.in/mf/latest`);
                //console.log(res.data);
                setTestList(res.data);
                setErrorMessage(false);
                setIsLoading(false);
            }
            catch(err){
                //console.log(`Oops !! Something went wrong...`, err);
                setErrorMessage(true);
            }
        }

        fetchTestName();
    },[]);

    const category = getCategoryBySlug(categoryName);

    if (!category) {
        return <ErrorMessage />;
    }
    const searchParams = useSearchParams();
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    const crrDate = new Date().getFullYear().toString();
    // const newTestList = testList.filter((item) =>
    //     item.schemeName.toLowerCase().includes(decodeURIComponent(categoryName).toLowerCase()) && item.date.split('-')[2] === crrDate
    // );
    const newTestList = testList.filter((item) =>
        item.schemeName
          .toLowerCase()
          .includes(category.apiValue.toLowerCase()) &&
        item.date.split("-")[2] === crrDate
    );
    //console.log(newTestList);
    //console.log(crrDate)
    //console.log("testName:", testName);
    //console.log("first scheme:", testList[0]?.schemeName);

    // 📄 Pagination logic
    const startIndex = (pageFromUrl - 1) * ITEMS_PER_PAGE;
    const paginatedList = newTestList.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const totalPages = Math.ceil(newTestList.length / ITEMS_PER_PAGE);
    //console.log("Current Page:", pageFromUrl);
    const sectionRef = useRef<HTMLElement | any>(null);
    useEffect(() => {
        sectionRef.current?.scrollIntoView({
            top: -150, 
            behavior: "smooth",
        });
    }, [pageFromUrl]);


    return(
        <>
            <div className={`w-full grid grid-cols-1 gap-3`} ref={sectionRef}>
                {
                    isLoading ? <ListingBlockSplash /> : (
                        <>
                            <PageHeading>Schemes for <span className="capitalize">{category.label}</span></PageHeading>
                            {
                                paginatedList?.length > 0 ? (
                                    paginatedList.map((mapinglist) => {
                                        return <MfLinkBlock key={mapinglist.schemeCode} SchemeCode={mapinglist.schemeCode} SchemeName={mapinglist.schemeName} basePath={`categories/${categoryName}`}/>
                                    })
                                ) : (!errorMessage ? (<ListingBlockSplash />) : <ErrorMessage/>)
                            }
                        </>
                    )
                }
            </div>
            {!isLoading && totalPages > 1 && (
                <div className="w-full flex items-center justify-center flex-wrap mt-8">
                    {Array.from({ length: totalPages }).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = pageNumber === pageFromUrl;

                    return (
                        <Link
                        key={pageNumber}
                        href={`/categories/${categoryName}?page=${pageNumber}`}
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
        </>
    )
}

export default CategoryPageListing;
