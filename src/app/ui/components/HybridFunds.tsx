import FundCategoriesLink from "./FundCategoriesLink";

const HybridFunds = () =>{
    return(
        <>
            <FundCategoriesLink linkSlug="aggressive-hybrid" linkLabel="Aggressive Hybrid Fund" />
            <FundCategoriesLink linkSlug="conservative-hybrid" linkLabel="Conservative Hybrid Fund" />
            <FundCategoriesLink linkSlug="dynamic-asset-allocation" linkLabel="Dynamic Asset Allocation" />
            <FundCategoriesLink linkSlug="multi-asset-allocation" linkLabel="Multi Asset Allocation" />
            <FundCategoriesLink linkSlug="equity-savings" linkLabel="Equity Savings" />
            <FundCategoriesLink linkSlug="arbitrage" linkLabel="Arbitrage Fund" />
        </>
    )
}

export default HybridFunds;