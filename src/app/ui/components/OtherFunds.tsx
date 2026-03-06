import FundCategoriesLink from "./FundCategoriesLink";

const OtherFunds = () =>{
    return(
        <>
            <FundCategoriesLink linkSlug="retirement" linkLabel="Retirement Fund" />
            <FundCategoriesLink linkSlug="children" linkLabel="Children's Fund" />
        </>
    )
}

export default OtherFunds;