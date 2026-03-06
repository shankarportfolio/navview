import DetailsBlock from "@/app/ui/components/DetailsBlock";
import { PageSection } from "@/app/ui/components/PageSection";

const MutualFundDetailsPage = async ({params} : {params : Promise<{schemesId : string}>}) =>{

    const mfId = (await params).schemesId;

    return(
        <>
            <PageSection>
                <DetailsBlock schemeId={mfId}/>
            </PageSection>
        </>
    )
}

export default MutualFundDetailsPage