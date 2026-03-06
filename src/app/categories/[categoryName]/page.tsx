import { PageHeading } from "@/app/ui/components/PageHeading";
import { PageSection } from "@/app/ui/components/PageSection";
import CategoryPageListing from "@/app/ui/components/CategoryPageListing";

const AmcDetailsPage = async ({
    params,
    searchParams
  }: {
    params: Promise<{ categoryName: string }>;
    searchParams: Promise<{ page?: string }>;
  }) => {
  
    const { categoryName } = await params; // ✅ await here
    const { page } = await searchParams;
    // const page = Number(searchParams?.page) || 1;
    const pageNumber = Number(page) || 1;
  
    return (
      <PageSection>
        <CategoryPageListing
          categoryName={categoryName}
          currentPage={pageNumber}
        />
      </PageSection>
    );
  };

export default AmcDetailsPage