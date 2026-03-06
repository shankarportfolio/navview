import { MetadataRoute } from "next";
import { categories } from "./_lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://navviewapp.vercel.app";

    const categoryUrls = categories.map((cat) => ({
        url: `${baseUrl}/categories/${cat.slug}`,
        lastModified: new Date(),
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/categories`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/schemes`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/search`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/guide`,
            lastModified: new Date(),
        },
        ...categoryUrls,
    ];
}
