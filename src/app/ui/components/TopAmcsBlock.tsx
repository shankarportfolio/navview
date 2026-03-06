import { plusjakartasans } from "@/app/_lib/font"
import Link from "next/link"
import { TopAmcs } from "@/app/_lib/amcslist"
import { MoveRight } from "lucide-react"

export const TopAmcsBlock = () =>{
    return(
        <div className="w-full grid grid-cols-1 gap-3 mt-6">
            {
                TopAmcs.map(amcs => (
                    <div className={`w-full rounded-2xl py-6 px-5 bg-(--colorshade1)`} key={amcs.id}>
                        <h3 className={`${plusjakartasans.className} text-xl font-semibold text-black mb-4`}>{amcs.name}</h3>
                        <Link href={`/amcs/${amcs.href}`}  className={`${plusjakartasans.className} text-xs text-white py-1.25 px-4 rounded-[10px] bg-(--bggrad) outline-none shadow-none no-underline border border-solid border-(--bggrad) inline-flex items-center justify-start `}>View Schemes <MoveRight className="w-3.75 text-white ml-2.5"/></Link>
                    </div>
                ))
            }
        </div>
    )
}