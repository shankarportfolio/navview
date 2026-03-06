"use client";
import axios from "axios"
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ErrorMessage } from "./ErrorMessage";
import { plusjakartasans } from "@/app/_lib/font";
import { MfLinkBlock } from "./MfLinkBlock";
import { PageHeading } from "./PageHeading";
import Loading from "@/app/loading";
import ListingBlockSplash from "./ListingBlockSplash";
import PageHeadingPara from "./PageHeadingPara";

const MfListing = () =>{

    const [mfList, setMfList] = useState<any[]>([]);
    // const [page, setPage] = useState<number>(1);
    const [errorMessage, setErrorMessage] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const limit = 100;
    const searchParams = useSearchParams();
    const router = useRouter();
    const page = Number(searchParams.get("page")) || 1;

    useEffect(()=>{
        const fetchListing = async () =>{
            try{
                const offset = (page - 1) * limit;
                const response = await axios.get(`https://api.mfapi.in/mf?limit=${limit}&offset=${offset}`);
                //console.log(response.data);
                setMfList(response.data);
                //console.log(errorMessage);
                setErrorMessage(false);
                setIsLoading(false);
            }
            catch(error){
                //console.error("Error fetching data:", error);
                setErrorMessage(true)
            }
        }

        fetchListing();

    }, [page]);

    return(
        <>
            {
                isLoading ? <ListingBlockSplash /> : (mfList?.length > 0 ? ( 
                    <>
                        <PageHeading>All Schemes</PageHeading>
                        {/* <PageHeadingPara customClasses="mb-8">Browse a complete list of mutual fund schemes from various asset management companies. Explore different funds and select any scheme to view detailed information, helping investors easily discover and compare mutual fund options.</PageHeadingPara> */}
                        <div className={`w-full grid grid-cols-1 gap-3`}>
                            {
                                mfList.map(mutuallist => {
                                    return <MfLinkBlock key={mutuallist.schemeCode} SchemeCode={mutuallist.schemeCode} SchemeName={mutuallist.schemeName} />
                                })
                            }
                        </div>
                        <div className="w-full flex items-center justify-center mt-9">
                            <button onClick={() => { const newPage = Math.max(page - 1, 1); router.push(`?page=${newPage}`); }} className={`${plusjakartasans.className} text-sm font-medium inline-block py-2 px-5 rounded-[10px] bg-[#dddbff] text-black mr-1.5 hover:bg-(--bggrad) hover:text-white outline-none shadow-none no-underline transition-all duration-150`}>
                                Prev
                            </button>
                
                            <button onClick={() => { const newPage = page + 1; router.push(`?page=${newPage}`);}} className={`${plusjakartasans.className} text-sm font-medium inline-block py-2 px-5 rounded-[10px] bg-[#dddbff] text-black ml-1.5 hover:bg-(--bggrad) hover:text-white outline-none shadow-none no-underline transition-all duration-150`}>
                                Next
                            </button>
                        </div>
                    </>
                ) : (!errorMessage ? <ListingBlockSplash /> : <ErrorMessage />))
            }
        </>
    )

}

export default MfListing;