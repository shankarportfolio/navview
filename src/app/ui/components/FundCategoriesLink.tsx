import { plusjakartasans } from "@/app/_lib/font"
import { CircleSmall } from "lucide-react"
import Link from "next/link"

type FundCategoriesLinkType = {
    linkSlug: string,
    linkLabel: string
}

const FundCategoriesLink = ({linkSlug, linkLabel} : FundCategoriesLinkType) =>{
    return(
        <Link href={`/categories/${linkSlug}`} className={`${plusjakartasans.className} text-xs font-normal text-black py-1 px-3 rounded-2xl bg-[#f0efff] inline-flex items-center justify-start border border-[#EEEEF3] shadow-[0px_5px_10px_rgba(2,2,76,0.02)] ml-1.5 mb-4 group hover:bg-[#635BFF] transition-all duration-150 ease-in-out hover:text-white cursor-pointer`}>
            <CircleSmall className={`w-3 mr-1.5 text-black group-hover:text-white transition-all duration-150 ease-in-out`}/>
            {linkLabel}
        </Link>
    )
}

export default FundCategoriesLink;