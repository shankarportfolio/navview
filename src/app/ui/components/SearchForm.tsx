'use client'
import { plusjakartasans } from "@/app/_lib/font";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SearchForm = () =>{
    
    const router = useRouter()
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    useEffect(() =>{
        inputRef.current?.focus();
    },[])

    const onSearchHandler = (e: React.FormEvent) =>{
        e.preventDefault();
        if(searchQuery === ''){ setErrorMsg(true)}
        if (!searchQuery.trim()) return;
        //alert(`Hello ${searchQuery} !! `);
        router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
        
    }

    return(
        <div className={`w-full max-w-sm m-auto py-9 px-6 rounded-xl bg-white border border-[#e0e6eb] plan-cards`}>
            <h1 className={`${plusjakartasans.className} text-[20px] text-black font-bold text-center mb-6.5`}>Search</h1>
            <form onSubmit={onSearchHandler}>
                <input type="text" value={searchQuery} className={`w-full ${plusjakartasans.className} text-base py-3 px-3.5 bg-white text-black font-medium rounded-xl outline-none shadow-none border border-solid border-[#ddd]`} onChange={e => setSearchQuery(e.target.value)} ref={inputRef}/>
                {
                    !errorMsg ? null : 'invalid input'
                }
                <button className={`w-full ${plusjakartasans.className} text-base bg-(--bggrad) text-white  py-3 px-1 text-center font-bold mt-5 rounded-xl`}>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;