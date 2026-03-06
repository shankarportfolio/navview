import Link from "next/link"
import { PageHeading } from "../ui/components/PageHeading"
import PageHeadingPara from "../ui/components/PageHeadingPara"
import { PageSection } from "../ui/components/PageSection"

const AboutUsPage = () =>{
    return(
        <>
            <PageSection>
                <PageHeading>About NavView</PageHeading>
                <PageHeadingPara customClasses="mb-3.5"><strong>NavView</strong> is a simple informational web application built to explore and understand mutual fund data in a clean and accessible way. The project is developed as a personal learning initiative using modern web technologies, primarily <strong>Next.js</strong>, with the goal of experimenting with real-world APIs, dynamic routing, and data visualization while building a practical financial information tool.</PageHeadingPara>
                <PageHeadingPara customClasses="mb-3.5">The platform allows users to browse mutual fund schemes, view NAV information, explore fund categories, and check details of various asset management companies. NavView focuses on presenting publicly available mutual fund data in a structured and easy-to-navigate interface. It is designed for educational and informational purposes only and does not provide any investment advice, recommendations, or financial planning services.</PageHeadingPara>
                <PageHeadingPara customClasses="mb-3.5">All mutual fund data displayed on NavView is sourced from the public API provided by MFAPI. The API documentation can be accessed here: <Link href="https://www.mfapi.in/docs/" target="_blank" className={`text-(--bggrad) underline outline-none`}>https://www.mfapi.in/docs/</Link>. This API provides access to scheme details, historical NAV data, and search functionality across thousands of mutual fund schemes in India. NavView simply consumes this publicly available data and presents it in a user-friendly format for exploration and analysis.</PageHeadingPara>
                <PageHeadingPara customClasses="mb-3.5">Since NavView is a personal project, the primary objective is to learn and experiment with technologies such as Next.js, API integration, dynamic data fetching, and modern frontend development practices. The application may evolve over time as new features, improvements, and experiments are added.</PageHeadingPara>
                <PageHeadingPara><strong>Disclaimer:</strong> NavView is not affiliated with any mutual fund company, asset management company (AMC), financial institution, or investment platform. The information provided on this website is for informational and educational purposes only. Users should conduct their own research or consult a qualified financial advisor before making any investment decisions.</PageHeadingPara>

            </PageSection>
        </>
    )
}

export default AboutUsPage