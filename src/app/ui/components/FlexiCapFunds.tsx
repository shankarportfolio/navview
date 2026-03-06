import FundCategoriesLink from "./FundCategoriesLink";

const FlexiCapFunds = () =>{
    return(
        <>
            <FundCategoriesLink linkSlug="flexi-cap" linkLabel="Flexi Cap" />
            <FundCategoriesLink linkSlug="large-cap" linkLabel="Large Cap" />
            <FundCategoriesLink linkSlug="mid-cap" linkLabel="Mid Cap" />
            <FundCategoriesLink linkSlug="small-cap" linkLabel="Small Cap" />
            <FundCategoriesLink linkSlug="focused" linkLabel="Focused Fund" />
            <FundCategoriesLink linkSlug="sectoral" linkLabel="Sectoral" />
            <FundCategoriesLink linkSlug="value" linkLabel="Value Fund" />
            <FundCategoriesLink linkSlug="contra" linkLabel="Contra Fund" />
            <FundCategoriesLink linkSlug="elss" linkLabel="ELSS" />
            <FundCategoriesLink linkSlug="index" linkLabel="Index Fund" />
            <FundCategoriesLink linkSlug="etf" linkLabel="ETF" />
            <FundCategoriesLink linkSlug="fund-of-funds" linkLabel="Fund of Funds" />
        </>
    )
}

export default FlexiCapFunds;