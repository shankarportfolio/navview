import { PageHeading } from "../ui/components/PageHeading";
import { PageSection } from "../ui/components/PageSection";
import FundCategories from "../ui/components/FundCategories";
import PageHeadingPara from "../ui/components/PageHeadingPara";


const FundCategoriesPage = () =>{

    return(
        <PageSection>
            <PageHeading>Fund Categories</PageHeading>
            {/* <PageHeadingPara customClasses="mb-8">Explore different mutual fund categories based on investment strategy and market capitalization. Categories such as Flexi Cap, Large Cap, Mid Cap, and Small Cap help investors understand how funds are grouped and navigate to schemes that match their investment preferences.</PageHeadingPara> */}
            <FundCategories />
        </PageSection>
    )
}

export default FundCategoriesPage;