import Link from "next/link"
import { plusjakartasans } from "@/app/_lib/font";
import { MoveRight } from "lucide-react";

type MfLinkBlockType = {
    SchemeName: string,
    SchemeCode: number,
    basePath?: string
}

export const MfLinkBlock = ({SchemeName, SchemeCode, basePath = "schemes"} : MfLinkBlockType) =>{
    return(
        <div className={`w-full rounded-2xl py-6 px-5 bg-(--colorshade1)`}>
            <h3 className={`${plusjakartasans.className} text-xl font-semibold text-black capitalize mb-4`}>{SchemeName}</h3>
            <Link href={`/${basePath}/${SchemeCode}`} className={`${plusjakartasans.className} text-xs text-white py-1.25 px-4 rounded-[10px] bg-(--bggrad) outline-none shadow-none no-underline border border-solid border-(--bggrad) inline-flex items-center justify-start `}>View Details <MoveRight className="w-3.75 text-white ml-2.5"/></Link>
        </div>
    )
}