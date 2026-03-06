import Image from "next/image";
import { plusjakartasans } from '../../_lib/font'
import NavViewLogo from '../../../../public/assets/images/navview-logo.webp';
import Link from "next/link";

const HomePage = () =>{

    const WebYear = new Date().getFullYear();

    return(
        <section className={`w-full bg-(--background) h-screen`}>
            <div className={`w-full h-screen flex items-center justify-center flex-col`}>
                <Image src={NavViewLogo} alt="Mutual Fund App Welcome Image" width={512} height={512} className={`w-[30%] lg:w-32.5 h-auto mt-0 mb-4`} />
                <h1 className={`${plusjakartasans.className} text-4xl font-bold text-center text-(--foreground) mb-4`}>NavView</h1>
                <p className={`${plusjakartasans.className} text-base text-black mb-20`}>Your Guide to Mutual Funds !</p>
                <Link href="/schemes" className={`${plusjakartasans.className} inline-block rounded-2xl bg-(--bggrad) text-base text-white py-3 px-8`}>Get Started</Link>
            </div>
            <div className="w-full fixed bottom-0 left-0 py-2.5">
                <p className={`${plusjakartasans.className} text-sm text-black text-center`}>© {WebYear}, NavView. All rights reserved.</p>
            </div>
        </section>
        )
}

export default HomePage;