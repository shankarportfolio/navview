import FundCategoriesLink from "./FundCategoriesLink";

const DebtFunds = () =>{
    return(
        <>
            <FundCategoriesLink linkSlug="overnight" linkLabel="Overnight Fund" />
            <FundCategoriesLink linkSlug="liquid" linkLabel="Liquid Fund" />
            <FundCategoriesLink linkSlug="money-market" linkLabel="Money Market" />
            <FundCategoriesLink linkSlug="corporate-bond" linkLabel="Corporate Bond Fund" />
            <FundCategoriesLink linkSlug="floater" linkLabel="Floater Fund" />
            <FundCategoriesLink linkSlug="low-duration" linkLabel="Low Duration Fund" />
            <FundCategoriesLink linkSlug="short-duration" linkLabel="Short Duration Fund" />
            <FundCategoriesLink linkSlug="medium-duration" linkLabel="Medium Duration Fund" />
            <FundCategoriesLink linkSlug="credit-risk" linkLabel="Credit Risk Fund" />
        </>
    )
}

export default DebtFunds;