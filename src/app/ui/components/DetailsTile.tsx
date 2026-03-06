import { plusjakartasans } from "@/app/_lib/font"

type DetailsTileType = {
    labelName: string
    labelValue: any
}

export const DetailsTile = ({labelName, labelValue} : DetailsTileType) =>{
    return(
        <div className="w-full bg-[#f7f7fa] py-3.5 px-0 flex items-start justify-start flex-wrap">
            <div className={`w-[35%]`}>
                <label className={`${plusjakartasans.className} text-sm font-normal text-black text-left`}>{labelName}:</label>
            </div>
            <div className={`w-[65%] pl-2.5 text-left`}>
                <label className={`${plusjakartasans.className} text-sm font-bold text-black text-wrap break-all`}>{labelValue}</label>
            </div>
        </div>
    )
}