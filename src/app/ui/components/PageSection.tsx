type PageSectionType = {
    CustomClasses?: string,
    children: React.ReactNode
}

export const PageSection = ({children, CustomClasses} : PageSectionType) =>{
    return(
        <section className={`w-full h-[calc(100vh-221px)] mt-17.25 py-8.75 px-5 overflow-y-auto ${CustomClasses ? CustomClasses : ''}`} >
            <div className="w-full lg:max-w-6xl m-auto">
                <div className="bg-red-500 text-white">TEST DEPLOY</div>
                {children}
            </div>
        </section>
    )
}
