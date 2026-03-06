'use client'
import { useEffect, useState } from "react";
import { PageHeading } from "./PageHeading";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";
import { MfLinkBlock } from "./MfLinkBlock";

type AmcListPage = {
    amcName: string,
    sectorsId: string
}

const AmcListPage = ({sectorsId, amcName} : AmcListPage) =>{

    const [amcsListing, setAmcsListing] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);

    useEffect(() =>{
        const amcListFetch = async () =>{
            try{
                const res = await axios.get(`https://api.mfapi.in/mf/search?q=${sectorsId}`);
                //console.log(res.data);
                setAmcsListing(res.data);
                setErrorMessage(false);
            }
            catch(err){
                //console.log('Oops !! some error', err);
                setErrorMessage(true);
            }
        }

        amcListFetch();
    },[])

    return(
        <>
            {
                errorMessage && <ErrorMessage />
            }
            {
                amcsListing?.length > 0 ? ( 
                    <>
                        <PageHeading>{amcName} Schemes</PageHeading>
                        <div className={`w-full grid grid-cols-1 gap-3`}>
                            {
                                amcsListing.map(mutuallist => {
                                    return <MfLinkBlock key={mutuallist.schemeCode} SchemeCode={mutuallist.schemeCode} SchemeName={mutuallist.schemeName} />
                                })
                            }
                        </div>
                    </>
                ) : null
            }
        </>
    )
}

export default AmcListPage;