const DetailsBlockSpalsh = () =>{
    return(
        <div className="mx-auto w-full">
            <div className="flex flex-col animate-pulse space-x-4">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 h-6 rounded bg-gray-200"></div>
                </div>
                <div className="flex-1 space-y-4 mt-10">
                    <div className="h-6 rounded bg-gray-200"></div>
                    <div className="h-6 rounded bg-gray-200"></div>
                    
                    <div className="h-20 rounded bg-gray-200 my-10"></div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-2 h-7 rounded bg-gray-200"></div>
                        <div className="col-span-1 h-7 rounded bg-gray-200"></div>
                        <div className="col-span-1 h-7 rounded bg-transparent"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-3 mt-7 py-8 px-4 rounded-2xl bg-[#f7f7fa] shadow-[0px_2px_4px_-1px_rgba(175,182,201,1)]">
                        <div className="col-span-1 h-6 bg-gray-200"></div>
                        <div className="col-span-3 h-6 bg-gray-200"></div>
                        <div className="col-span-1 h-6 bg-gray-200"></div>
                        <div className="col-span-3 h-6 bg-gray-200"></div>
                        <div className="col-span-1 h-6 bg-gray-200"></div>
                        <div className="col-span-3 h-6 bg-gray-200"></div>
                        <div className="col-span-1 h-6 bg-gray-200"></div>
                        <div className="col-span-3 h-6 bg-gray-200"></div>
                    </div>
                    {/* <div className="h-2 rounded bg-gray-200"></div> */}
                    {/* <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                        </div>
                        <div className="h-2 rounded bg-gray-200"></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DetailsBlockSpalsh;