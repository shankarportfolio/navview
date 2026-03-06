import Image from "next/image"
import ErrorMsgImage from "../../../../public/assets/images/error-messageimg.png"
import { manrope, plusjakartasans } from "@/app/_lib/font"

export const ErrorMessage = () =>{
    return(
        <div className="w-full flex h-full items-center justify-center flex-col">
            <Image src={ErrorMsgImage} alt="Error message icon" width={512} height={512}  className={`w-[50%] h-auto`}/>
            <h2 className={`${plusjakartasans.className} text-base text-black font-medium mt-5 text-center`}>Oops ! Something went wrong..</h2>
        </div>
    )
}