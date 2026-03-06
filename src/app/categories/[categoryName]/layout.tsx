import { ReactNode } from "react";
import { getCategoryBySlug } from "../../_lib/categories";

type Props = {
  children: ReactNode;
  params: Promise<{
    categoryName: string;
  }>;
};

export async function generateMetadata({ params }: Props) {
  const { categoryName } = await params; // ✅ IMPORTANT

  //console.log("PARAM:", categoryName);

  const category = getCategoryBySlug(categoryName);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested mutual fund category does not exist.",
    };
  }

  return {
    title: `${category.label} Funds in India 2026 | NavView`,
    description: `Explore top performing ${category.label} mutual funds in India.`,
  };
}

export default async function CategoryLayout({
  children,
  params,
}: Props) {
  await params; // optional but safe
  return <>{children}</>;
}