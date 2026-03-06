'use client'
import { plusjakartasans } from "@/app/_lib/font";
import { Blend, CircleSmall, FileChartLine, IndianRupee } from "lucide-react";
import Link from "next/link";
import { useState } from "react"
import FlexiCapFunds from "./FlexiCapFunds";
import DebtFunds from "./DebtFunds";
import HybridFunds from "./HybridFunds";
import OtherFunds from "./OtherFunds";

const FundCategories = () => {

    const [fundCategory, setFundCategory] = useState<string>("equity");

    const onTabclick = (tabname : string) =>{
        setFundCategory(tabname)
    }

    return(
        <>
            <div className={`w-full grid grid-cols-4 gap-2 mt-6`}>
                <div className={`w-full inline-flex items-center justify-center py-2 px-1 text-xs leading-5 font-normal rounded-xl ${fundCategory === "equity" ? 'bg-(--bggrad) text-white' : 'bg-[#f6f7f9] hover:bg-[#DDDBFF] text-black'} transition-all duration-150 ease-in-out cursor-pointer`} onClick={() => onTabclick('equity')}>
                    <IndianRupee className={`w-3.5 ${fundCategory === "equity" ? 'text-white' : 'text-black'} mr-1.5`}/>
                    Equity
                </div>
                <div className={`w-full inline-flex items-center justify-center py-2 px-1 text-xs leading-5 font-normal rounded-xl ${fundCategory === "hybrid" ? 'bg-(--bggrad) text-white' : 'bg-[#f6f7f9] hover:bg-[#DDDBFF] text-black'}  transition-all duration-150 ease-in-out cursor-pointer`} onClick={() => onTabclick('hybrid')}>
                    <Blend className={`w-3.5 ${fundCategory === "hybrid" ? 'text-white' : 'text-black'} mr-1.5`}/>
                    Hybrid
                </div>
                <div className={`w-full inline-flex items-center justify-center py-2 px-1 text-xs leading-5 font-normal rounded-xl ${fundCategory === "debt" ? 'bg-(--bggrad) text-white' : 'bg-[#f6f7f9] hover:bg-[#DDDBFF] text-black'}  transition-all duration-150 ease-in-out cursor-pointer`} onClick={() => onTabclick('debt')}>
                    <FileChartLine className={`w-3.5 ${fundCategory === "debt" ? 'text-white' : 'text-black'} mr-1.5`}/>
                    Debt
                </div>
                <div className={`w-full inline-flex items-center justify-center py-2 px-1 text-xs leading-5 font-normal rounded-xl ${fundCategory === "other" ? 'bg-(--bggrad) text-white' : 'bg-[#f6f7f9] hover:bg-[#DDDBFF] text-black'}  transition-all duration-150 ease-in-out cursor-pointer`} onClick={() => onTabclick('other')}>
                    <FileChartLine className={`w-3.5 ${fundCategory === "other" ? 'text-white' : 'text-black'} mr-1.5`}/>
                    Other
                </div>
            </div>
            
            <div className={`w-full mt-7`}>
                <div className={`w-full ${fundCategory === "equity" ? 'block' : 'hidden'}`}>
                    <FlexiCapFunds />
                </div>
                <div className={`w-full ${fundCategory === "hybrid" ? 'block' : 'hidden'}`}>
                    <HybridFunds />
                </div>
                <div className={`w-full ${fundCategory === "debt" ? 'block' : 'hidden'}`}>
                    <DebtFunds />
                </div>
                <div className={`w-full ${fundCategory === "other" ? 'block' : 'hidden'}`}>
                    <OtherFunds />
                </div>
            </div>
        </>
    )
}

export default FundCategories;