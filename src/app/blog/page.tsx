import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SearchBar from "./SearchBar";

export const metadata = {
  title:
    "Frondesk Blog | Stories that Shape the Future of Car Dealerships | Frsk Perspectives",
  description:
    "Explore the Frondesk Blog — your source for AI dealership insights, automotive management guides, sales growth strategies.",
};

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Helper: resolve image URLs
function resolveImageUrl(featureImage: any) {
  if (!featureImage) return "/images/blog/default.png";

  if (Array.isArray(featureImage) && featureImage.length > 0) {
    const img = featureImage[0];
    const url = img?.url || img?.attributes?.url || img?.data?.attributes?.url;
    if (!url) return "/images/blog/default.png";
    if (url.startsWith("http")) return url;
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
  }

  if (featureImage?.data?.attributes?.url) {
    const url = featureImage.data.attributes.url;
    if (url.startsWith("http")) return url;
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
  }

  if (featureImage?.url) {
    const url = featureImage.url;
    if (url.startsWith("http")) return url;
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
  }

  return "/images/blog/default.png";
}

export default async function Blog({ searchParams }: PageProps) {
  // ✅ Safely get search & page as strings
  const search = typeof searchParams?.search === "string" ? searchParams.search : "";
  const page = typeof searchParams?.page === "string" ? parseInt(searchParams.page, 10) : 1;
  const pageSize = 6;

  const apiUrl = search
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*&filters[Title][$containsi]=${encodeURIComponent(
        search
      )}&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*&sort=publishedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

  const res = await fetch(apiUrl, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch blogs from Strapi");

  const data = await res.json();
  const blogs = data?.data || [];
  const meta = data?.meta?.pagination || { pageCount: 1 };


  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Explore the Frondesk Blog — your source for AI dealership insights, automotive management guides, and sales growth strategies."
      />

      <section className="pt-[120px] pb-[120px]">
        <SearchBar search={search} />

        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogs.length === 0 && (
              <p className="text-center w-full text-xl text-red-500 py-20">
                No blogs found for “{search}”
              </p>
            )}

            {blogs.map((blog: any) => {
              const raw = blog?.attributes ?? blog;
              const title = raw?.Title || raw?.title || "Untitled Blog";
              const summary =
                raw?.Summary ||
                raw?.summary ||
                raw?.Description?.[0]?.children?.[0]?.text ||
                "No summary available.";
              const slug = raw?.slug || raw?.Slug || blog?.slug || blog?.id;
              const publishedAt =
                raw?.publishedAt || raw?.published_at || raw?.Date || blog?.publishedAt;

              const featureImageCandidate =
                raw?.FeatureImage ?? raw?.featureImage ?? raw?.image ?? raw?.FeatureImage?.data ?? raw?.FeatureImage;
              const coverUrl = resolveImageUrl(featureImageCandidate);

              return (
                <div
                  key={blog.id ?? slug}
                  className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
                    <Link
                      href={`/blog_detail_St?slug=${slug}`}
                      className="relative block aspect-[20/14]"
                    >
                      <Image src={coverUrl} alt={title} fill className="object-cover" />
                    </Link>

                    <div className="p-6 sm:p-8">
                      <h3>
                        <Link
                          href={`/blog_detail_St?slug=${slug}`}
                          className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
                        >
                          {title}
                        </Link>
                      </h3>

                      <p className="text-body-color mb-6 text-base font-medium">{summary}</p>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-dark dark:text-white">
                            By {raw?.author || raw?.Author || "Unknown Author"}
                          </h4>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-body-color">
                            {publishedAt ? new Date(publishedAt).toLocaleDateString() : "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {meta.pageCount > 1 && (
            <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
              <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                  <li className="mx-1">
                    <Link
                      href={`/blog?search=${encodeURIComponent(search)}&page=${Math.max(page - 1, 1)}`}
                      className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                    >
                      Prev
                    </Link>
                  </li>
                  {Array.from({ length: meta.pageCount }, (_, i) => (
                    <li key={i} className="mx-1">
                      <Link
                        href={`/blog?search=${encodeURIComponent(search)}&page=${i + 1}`}
                        className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                          page === i + 1
                            ? "bg-primary text-white"
                            : "bg-body-color/15 text-body-color hover:bg-primary hover:text-white"
                        }`}
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                  <li className="mx-1">
                    <Link
                      href={`/blog?search=${encodeURIComponent(search)}&page=${Math.min(page + 1, meta.pageCount)}`}
                      className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}






// import SingleBlog from "@/components/Blog/SingleBlog";
// import blogData from "@/components/Blog/blogData";
// import Breadcrumb from "@/components/Common/Breadcrumb";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Frondesk Blog | Stories that Shape the Future of Car Dealerships | Frsk Perspectives",
//   description:
//     "Explore the Frondesk Blog — Stories that Shape the Future of Car Dealerships and serve as your source for AI dealership insights, automotive management guides, sales growth strategies. Discover expert tips, industry updates, and innovations that help car dealers boost performance and revenue.",
//   keywords: [
//     "Frondesk blog",
//     "AI dealership insights",
//     "automotive technology blog",
//     "car dealer sales tips",
//     "dealership growth strategies",
//     "automotive management guides",
//     "AI in car sales",
//     "dealership automation trends",
//     "vehicle inventory management blog",
//     "lead conversion tips for car dealers",
//     "automotive CRM articles",
//     "AI tools for dealerships",
//     "dealership performance analytics",
//     "automotive business insights",
//     "car dealership marketing ideas",
//     "revenue growth for dealerships"
//   ],
//   authors: [{ name: "Frondesk Technologies" }],
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//       "max-video-preview": -1,
//     },
//   },
//   openGraph: {
//     title: "Frondesk Blog | AI Dealership Insights and Automotive Growth Strategies",
//     description:
//       "Stay ahead in the automotive world with Frondesk’s blog. Read AI-powered dealership insights, tech innovations, and revenue-boosting strategies for car dealers.",
//     url: "https://yourdomain.com/blog",
//     siteName: "Frsk",
//     images: [
//       {
//         url: "https://yourdomain.com/images/blog-og.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Frondesk Blog – AI Dealership Insights",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Frondesk Blog | AI Dealership Insights, Tech Trends & Sales Growth",
//     description:
//       "Explore the Frondesk Blog — your source for AI dealership insights, automotive management guides, and sales growth strategies. Discover expert tips, industry updates, and innovations that help car dealers boost performance and revenue.",
//     images: ["https://yourdomain.com/images/blog-og.jpg"],
//     creator: "@frondesktech",
//   },
// };

// const Blog = () => {
//   return (
//     <>
//       <Breadcrumb
//         pageName="Blog Grid"
//         description="Explore the Frondesk Blog — your source for AI dealership insights, automotive management guides, and sales growth strategies. Discover expert tips, industry updates, and innovations that help car dealers boost performance and revenue."
//       />

//       <section className="pt-[120px] pb-[120px]">
//         <div className="container">
//           <div className="-mx-4 flex flex-wrap justify-center">
//             {blogData.map((blog) => (
//               <div
//                 key={blog.id}
//                 className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
//               >
//                 <SingleBlog blog={blog} />
//               </div>
//             ))}
//           </div>

//           <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
//             <div className="w-full px-4">
//               <ul className="flex items-center justify-center pt-8">
//                 <li className="mx-1">
//                   <a
//                     href="#0"
//                     className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
//                   >
//                     Prev
//                   </a>
//                 </li>
//                 <li className="mx-1">
//                   <a
//                     href="#0"
//                     className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
//                   >
//                     1
//                   </a>
//                 </li>
//                 <li className="mx-1">
//                   <a
//                     href="#0"
//                     className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
//                   >
//                     2
//                   </a>
//                 </li>
//                 <li className="mx-1">
//                   <a
//                     href="#0"
//                     className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
//                   >
//                     3
//                   </a>
//                 </li>
//                 <li className="mx-1">
//                   <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
//                     ...
//                   </span>
//                 </li>
//                 <li className="mx-1">
//                   <a
//                     href="#0"
//                     className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
//                   >
//                     12
//                   </a>
//                 </li>
//                 <li className="mx-1">
//                   <a
//                     href="#0"
//                     className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
//                   >
//                     Next
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Blog;
