'use client';
import { categories, Category } from "@/app/_lib/categories";
import { plusjakartasans } from "@/app/_lib/font";
import { Info, InfoIcon, X } from "lucide-react";
import { useState } from "react";

const MutualFundGuide = () =>{

    const [openPopup, setOpenPopup] = useState<Category | null>(null);

    return(
        <>
            {
                categories.map((item) =>(
                    <button key={item.slug} onClick={() => setOpenPopup(item)} className={`inline-flex items-center justify-center py-1.5 px-3.5 rounded-2xl bg-[#f0efff] group hover:bg-[#635BFF] transition-all duration-150 ease-in-out mr-1.5 mb-3 text-xs text-black hover:text-white cursor-pointer`}>
                        <InfoIcon width={15} className="h-auto mr-1 group-hover:text-white transition-all duration-150 ease-in-out "/>
                        {item.label}
                    </button>
                ))
            }
            {
                openPopup && (<div className={`w-full  h-full fixed top-0 left-0 bg-[#00000033] flex items-center justify-center flex-col z-99`}>
                    <div className={`${plusjakartasans.className} text-sm text-black w-[90%] lg:max-w-lg bg-white rounded-2xl shadow-xl pt-8.5 px-8 pb-7 relative`}>
                        <button onClick={() => setOpenPopup(null)} className={`${plusjakartasans.className} text-sm text-black absolute top-2.5 right-2.5`}><X width={35} className={`text-black h-auto cursor-pointer`} /></button>
                        <h2 className={`${plusjakartasans.className} text-xl text-black mb-3 font-bold`}>{openPopup.label}</h2>
                        <p className={`${plusjakartasans.className} text-[13px] leading-5 lg:leading-6 text-black font-light`}>{openPopup.description}</p>
                    </div>
                </div>)
            }
</>
    )
}

export default MutualFundGuide;