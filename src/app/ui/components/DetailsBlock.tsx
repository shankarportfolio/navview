'use client';
import axios from "axios"
import { useEffect, useState } from "react"
import ResponsiveLineChart from "./ResponsiveLineChart";
import { plusjakartasans } from "@/app/_lib/font";
import { DetailsTile } from "./DetailsTile";
import { ArrowLeft, IndianRupee, Info, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import DetailsBlockSpalsh from "./DetailsBlockSplash";

type DetailsBlockType = {
    schemeId: string
}

const DetailsBlock = ({schemeId} : DetailsBlockType) =>{

    const [schemeMeta, setSchemeMeta] = useState<any>({});
    const [navData, setNavData] = useState<any []>([]);
    const [latestNavData, setLatestNavData] = useState<any>({});
    const [tabName, setTabName] = useState<string>("info");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() =>{
        const fetchMfDetails = async () =>{
            try{
                const res = await axios.get(`https://api.mfapi.in/mf/${schemeId}`);
                const currnav = await axios.get(`https://api.mfapi.in/mf/${schemeId}/latest`);
                //console.log(currnav.data.data[0])
                setLatestNavData(currnav.data.data[0]);
                // console.log(res);
                //console.log(currnav.data.data);
                setNavData(res.data.data);
                setSchemeMeta(res.data.meta);
                setIsLoading(false);
            }
            catch(err){
                //console.log("err");
            }
        }
        
        fetchMfDetails();
    },[])
    
    const onTabclick = ( tabname : string ) =>{
        setTabName(tabname)
    } 

    const router = useRouter()

    return(
        <>
        {   
            isLoading ? 
                <DetailsBlockSpalsh /> : 
                (
                    <>
                        <div className={`w-full`}>
                            <button onClick={() => router.back()} className={`${plusjakartasans.className} text-base text-(--bggrad) inline-flex items-center justify-start`}><ArrowLeft className="w-5 mr-1.5"/> Back</button>
                            <h1 className={`${plusjakartasans.className} text-2xl text-(--bggrad) font-bold capitalize mt-5`}>{schemeMeta.scheme_name}</h1>
                            <div className={`w-full flex items-center justify-start flex-wrap mt-4 py-6 px-5 rounded-2xl bg-[#eff4fa]`}>
                                <div className="w-[38%]">
                                    <p className={`${plusjakartasans.className} text-sm text-black`}>Current Nav:
                                        <span className={`text-xs font-medium block`}>({latestNavData.date})</span>
                                    </p>
                                </div>
                                <div className="w-[62%]">
                                    <span className={`w-full flex items-center justify-start`}><IndianRupee className={`w-5 text-black`}/> <span className={`${plusjakartasans.className} text-xl font-bold text-black`}>{parseFloat(latestNavData.nav).toFixed(2)}</span></span>
                                </div>
                            </div>
                        </div>
                        <div className={`w-full flex items-center justify-start flex-wrap mt-6`}>
                            <div className={`inline-flex items-center justify-start py-2 px-5.5 text-xs leading-5 font-normal rounded-xl mr-1 ${tabName === "info" ? 'bg-(--bggrad) text-white' : 'bg-[#eff4fa] text-black'}`} onClick={() => onTabclick('info')}>
                                <Info className={`w-3.5 ${tabName === "info" ? 'text-white' : 'text-black'} mr-2.5`}/> Info
                            </div>
                            <div className={`inline-flex items-center justify-start py-2 px-5.5 text-xs leading-5 font-normal rounded-xl ml-1 ${tabName === "chart" ? 'bg-(--bggrad) text-white' : 'bg-[#eff4fa] text-black'}`} onClick={() => onTabclick('chart')}>
                                <TrendingUp className={`w-3.5 ${tabName === "chart" ? 'text-white' : 'text-black'} mr-2.5`}/> Chart
                            </div>
                        </div>
                        <div className={`w-full mt-7`}>
                            <div className={`w-full py-3 px-5 rounded-2xl bg-[#f7f7fa] shadow-[0px_2px_4px_-1px_rgba(175,182,201,1)] ${tabName === "info" ? 'block' : 'hidden'}`}>
                                <DetailsTile labelName="Scheme Id" labelValue={schemeId}/>
                                <DetailsTile labelName="Fund House" labelValue={schemeMeta.fund_house}/>
                                <DetailsTile labelName="Fund Category" labelValue={schemeMeta.scheme_category}/>
                                <DetailsTile labelName="Scheme Type" labelValue={schemeMeta.scheme_type}/>
                            </div>
                            <div className={`w-full py-6 px-5 pb-4 rounded-2xl bg-[#f7f7fa] shadow-[0px_2px_4px_-1px_rgba(175,182,201,1)] ${tabName === "chart" ? 'block' : 'hidden'}`}>
                                <ResponsiveLineChart data={navData} loading={false} currNav={latestNavData.nav}/>
                            </div>
                        </div>
                    </>
                )
        }
            
        </>
    )
}

export default DetailsBlock;