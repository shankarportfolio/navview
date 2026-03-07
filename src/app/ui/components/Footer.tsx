"use client";
import Link from "next/link";
import { BookOpenText, EllipsisVertical, House, Info, Layers, List, Search } from "lucide-react";
import { plusjakartasans } from "../../_lib/font";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Footer = () =>{

    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const menuOpenHandler = () =>{
        //alert(`Click to open menu`);
        setOpenMenu(!openMenu)
    }

    return(
        <>
            <div className={`inline-flex flex-col items-start justify-start fixed ${openMenu ? 'bottom-25' : '-bottom-25'} transition-all duration-350 ease-in-out right-5 shadow-xl rounded-2xl bg-white`}>
                <Link href="/" className={`${plusjakartasans.className} flex items-center justify-start py-2 px-6.5 text-sm border-b border-solid border-[#d0e0f3] ${(pathname === "/") ? 'text-(--foreground)' : 'text-black'}`}><House width={15} className={`text-black m-auto mr-1.5`}/> Home</Link>
                <Link href="/about" className={`${plusjakartasans.className} flex items-center justify-start py-2 px-6.5 text-sm ${(pathname === "/about") ? 'text-(--foreground)' : 'text-black'}`}><Info width={15} className={`text-black m-auto mr-1.5`}/> About</Link>
            </div>
            <footer className={`w-full bg-[#f7f7fa] shadow-[0_0_10px_0px_#5550e15c] border-t border-[#EEEEF3] border-solid py-1.5 px-1 fixed bottom-0 left-0 z-50`}>
                <div className="w-full lg:max-w-6xl m-auto flex items-center justify-start flex-wrap">
                    <Link href="/" className={`w-[22%] lg:w-[calc(100%/6)] hidden lg:block py-2.5 px-1.5 text-center`}>
                        <House width={45} className={`m-auto ${(pathname === "/" ) ? 'text-(--foreground)' : 'text-black'}`}/>
                        <span className={`${plusjakartasans.className} font-sans text-xs font-bold ${pathname === "/" ? 'text-(--foreground)' : 'text-black'} block mt-1.5`}>Home</span>
                    </Link>
                    <Link href="/schemes" className={`w-[22%] lg:w-[calc(100%/6)] py-2.5 px-1.5 text-center`}>
                        <List width={45} className={`m-auto ${((pathname === "/schemes" ) || pathname.startsWith('/schemes')) ? 'text-(--foreground)' : 'text-black'}`}/>
                        <span className={`${plusjakartasans.className} font-sans text-xs font-bold ${((pathname === "/schemes") || pathname.startsWith('/schemes')) ? 'text-(--foreground)' : 'text-black'} block mt-1.5`}>Schemes</span>
                    </Link>
                    <Link href="/categories" className={`w-[22%] lg:w-[calc(100%/6)] py-2.5 px-1.5 text-center`}>
                        <Layers width={45} className={`m-auto ${((pathname === "/categories") || pathname.startsWith('/categories')) ? 'text-(--foreground)' : 'text-black'}`}/>
                        <span className={`${plusjakartasans.className} font-sans text-xs font-bold ${((pathname === "/categories") || pathname.startsWith('/categories')) ? 'text-(--foreground)' : 'text-black'} block mt-1.5`}>Categories</span>
                    </Link>
                    <Link href="/search" className={`w-[22%] lg:w-[calc(100%/6)] py-2.5 px-1.5 text-center`}>
                        <Search width={45} className={`m-auto ${(pathname === "/search") ? 'text-(--foreground)' : 'text-black'}`}/>
                        <span className={`${plusjakartasans.className} font-sans text-xs font-bold ${(pathname === "/search") ? 'text-(--foreground)' : 'text-black'} block mt-1.5`}>Search</span>
                    </Link>
                    <Link href="/guide" className={`w-[22%] lg:w-[calc(100%/6)] py-2.5 px-1.5 text-center`} replace>
                        <BookOpenText width={45} className={`m-auto ${((pathname === "/guide") || pathname.startsWith('/guide')) ? 'text-(--foreground)' : 'text-black'}`}/>
                        <span className={`${plusjakartasans.className} font-sans text-xs font-bold text-black block mt-1.5`}>MF Guide</span>
                    </Link>
                    <Link href="/about" className={`w-[22%] lg:w-[calc(100%/6)] hidden lg:block py-2.5 px-1.5 text-center`}>
                        <Info width={45} className={`m-auto ${pathname === "/about" ? 'text-(--foreground)' : 'text-black'}`}/>
                        <span className={`${plusjakartasans.className} font-sans text-xs font-bold ${pathname === "/about" ? 'text-(--foreground)' : 'text-black'} block mt-1.5`}>About</span>
                    </Link>
                    <div className={`w-[12%] lg:hidden flex items-center flex-col justify-center`} onClick={menuOpenHandler}>
                        <EllipsisVertical className={`w-8 text-black h-auto`} />
                    </div>
                </div>
            </footer>
        </>
    )
}
