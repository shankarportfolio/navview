import MutualFundGuide from "../ui/components/MutualFundGuide";
import { PageHeading } from "../ui/components/PageHeading";
import PageHeadingPara from "../ui/components/PageHeadingPara";
import { PageSection } from "../ui/components/PageSection";

const GuidePage = () =>{
    return(
        <>
            <PageSection>
                <PageHeading>Mutual Fund Guide</PageHeading>
                {/* <PageHeadingPara customClasses="mb-8">A simple guide explaining mutual fund categories such as Flexi Cap, Large Cap, Mid Cap, and Small Cap funds. Each category follows a different investment approach and risk level, helping investors better understand fund types before choosing suitable investment options.</PageHeadingPara> */}
                <MutualFundGuide />
            </PageSection>
        </>
    )
}

export default GuidePage;