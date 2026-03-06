import { plusjakartasans } from "@/app/_lib/font"
import { Grip } from "lucide-react"
import React from "react"

export const PageHeading = ({children} : {children : React.ReactNode} ) =>{
    return(
        <div className="w-full rounded-xl p-0 mb-8 flex items-center justify-start">
            <Grip className={`w-8 text-(--bggrad) mr-3`}/>
            <h1 className={`${plusjakartasans.className} text-base text-black font-semibold`}>{children}</h1>
        </div>
    )
}