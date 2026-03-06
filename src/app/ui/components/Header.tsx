import Image from "next/image";
import HeaderLogo from '../../../../public/assets/images/navview-logo-header.webp'
import Link from "next/link";

export const Header = () =>{
    return(
        <header className={`w-full bg-[#f7f7fa] shadow-[0_0_10px_0px_#5550e15c] border-b border-[#EEEEF3] border-solid py-1.5 text-center fixed top-0 left-0 z-50`}>
            <Link href="/" className="block w-[95.3%] m-auto" replace><Image src={HeaderLogo} alt="NavView Logo" width={150} height={64} className="w-[138px] h-auto m-auto" priority/></Link>
        </header>
    )
}