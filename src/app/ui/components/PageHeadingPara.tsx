import { plusjakartasans } from "@/app/_lib/font";

type PageHeadingPara = {
    children : React.ReactNode,
    customClasses? : string
}

const PageHeadingPara = ( {children, customClasses} : PageHeadingPara) =>{
    return(
        <p className={`${plusjakartasans.className} text-sm leading-6 text-black text-justify ${customClasses ? customClasses : ''}`}>{children}</p>
    )
}

export default PageHeadingPara;