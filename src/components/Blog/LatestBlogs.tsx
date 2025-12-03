export const revalidate = 20;
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
function shortText(text: string, slug: string) {
  if (!text) return "";
  const words = text.split(" ");

  if (words.length > 30) {
    const truncated = words.slice(0, 30).join(" ") + " ";
    return (
      <>
        {truncated}
        <Link href={`/blog_detail_St?slug=${slug}`} className="text-primary ml-1">
          Read More
        </Link>
      </>
    );
  }

  return text;
}

export default async function BlogSection() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*&sort=publishedAt:desc&pagination[limit]=3`
  );

  if (!res.ok) throw new Error("Failed to fetch blogs from Strapi");

  const data = await res.json();
  const blogs = data?.data || [];

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Turbocharge profits and cut operational hassles. Join dealerships who have boosted earnings by switching to our all-in-one solution for new and used car sales, service automation, and customer engagement."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            const { id, Title, Summary, slug, author, publishedAt, FeatureImage } = blog;

            const cover =
              FeatureImage?.[0]?.url || "/images/blog/fdent.png";

            const coverUrl = cover.startsWith("http")
              ? cover
              : `${baseUrl}${cover}`;

            return (
              <div
                key={id}
                className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300"
              >
                <Link href={`/blog_detail_St?slug=${slug}`}

                  className="relative block aspect-[20/14]"
                >
                  <Image
                    src={coverUrl}
                    alt={Title}
                    fill
                    className="object-cover"
                  />
                </Link>

                <div className="p-6 sm:p-8">
                  <h3>
                    <Link href={`/blog_detail_St?slug=${slug}`}

                      className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
                    >
                      {Title || "Untitled Blog"}
                    </Link>
                  </h3>

                  {/* <p className="text-body-color mb-6 text-base font-medium">
                    {Summary || "No summary available."}
                  </p> */}
                  <p className="text-body-color mb-6 text-base font-medium">
                 {shortText(Summary, slug)}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-dark dark:text-white">
                        By {author || "Unknown Author"}
                      </h4>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-body-color">
                        {publishedAt
                          ? new Date(publishedAt).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


// import Image from "next/image";
// import Link from "next/link";
// import SectionTitle from "../Common/SectionTitle";

// export default async function BlogSection() {
//   // ✅ Fetch data from Strapi (server-side)
//   const res = await fetch(
//     "http://localhost:1337/api/blogs?populate=*&sort=publishedAt:desc&pagination[limit]=6",
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch blogs from Strapi");
//   }

//   const data = await res.json();
//   const blogs = data?.data || [];

//   const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

//   return (
//     <section
//       id="blog"
//       className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
//     >
//       <div className="container">
//         <SectionTitle
//           title="Our Latest Blogs"
//           paragraph="Turbocharge profits and cut operational hassles. Join dealerships who have boosted earnings by switching to our all-in-one solution for new and used car sales, service automation, and customer engagement."
//           center
//         />

//         <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
//           {blogs.map((blog: any) => {
//            // const { id, attributes } = blog;
// const { id,attributes, Title, Summary,  publishedAt, FeatureImage } = blog;

//             // ✅ Correctly map Strapi fields
//             const title = attributes?.Title || "Untitled Blog";
//             const summary = attributes?.Summary || "No summary available.";
//             const slug = attributes?.slug || id;
//             const author = attributes?.author || "Unknown Author";
//             const publishDate = attributes?.publishedAt
//               ? new Date(attributes.publishedAt).toLocaleDateString()
//               : "N/A";

//             // ✅ Handle image from Strapi
//             const cover =
//               attributes?.FeatureImage?.data?.attributes?.url ||
//               attributes?.FeatureImage?.[0]?.url ||
//               "/images/blog/fdent.png";

//             const coverUrl = cover.startsWith("http")
//               ? cover
//               : `${baseUrl}${cover}`;

//             return (
//               <div
//                 key={id}
//                 className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300"
//               >
//                 {/* Blog Image */}
//                 <Link
//                   href={`/blog/${slug}`}
//                   className="relative block aspect-[20/14]"
//                 >
//                   <Image
//                     src={coverUrl}
//                     alt={title}
//                     fill
//                     className="object-cover"
//                   />
//                 </Link>

//                 {/* Blog Content */}
//                 <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
//                   <h3>
//                     <Link
//                       href={`/blog/${slug}`}
//                       className="hover:text-primary dark:hover:text-primary mb-4 block text-xl font-bold text-black sm:text-2xl dark:text-white"
//                     >
//                       {title}
//                     </Link>
//                   </h3>

//                   <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
//                     {summary}
//                   </p>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-3">
//                       <div className="relative h-10 w-10 overflow-hidden rounded-full">
//                         <Image
//                           src="/images/blog/default-author.png"
//                           alt="author"
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <div>
//                         <h4 className="text-dark text-sm font-medium dark:text-white">
//                           By {author}
//                         </h4>
//                       </div>
//                     </div>

//                     <div className="text-right">
//                       <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
//                         Date
//                       </h4>
//                       <p className="text-body-color text-xs">{publishDate}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }





// // "use client";
// // import { useEffect, useState } from "react";
// // import axios from "axios";

// // export default function LatestBlogs() {
// //   const [blogs, setBlogs] = useState<any[]>([]);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const getBlogs = async () => {
// //       try {
// //         const res = await axios.get(
// //           "http://localhost:1337/api/blogs?populate=*&sort=publishedAt:desc&pagination[limit]=5"
// //         );
// //         console.log("Fetched blogs:", res.data.data);
// //         setBlogs(res.data.data);
// //       } catch (err) {
// //         console.error("Error fetching latest blogs:", err);
// //         setError("Could not load blogs. Please check Strapi.");
// //       }
// //     };
// //     getBlogs();
// //   }, []);

// //   if (error) return <p className="text-red-500">{error}</p>;
// //   if (!blogs.length)
// //     return <p className="text-center text-gray-500">No blogs found.</p>;

// //   return (
// //     <section className="py-10 ">
// //        <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xs bg-white duration-300">
// //       <div className="mt-8 mb-8">
// //         <h2 className="text-3xl font-bold mb-8 text-center">Latest Blogs</h2>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
// //           {blogs.map((blog) => {
// //             const { id, Title, Summary, FeatureImage } = blog;
// //             const cover =
// //               FeatureImage?.[0]?.url
// //                 ? `http://localhost:1337${FeatureImage[0].url}`
// //                 : "/images/blog/fdent.png"; // fallback image

// //             return (
// //               <div
// //                 key={id}
// //                 className=""
// //               >
// //                 <img
// //                   src={cover}
// //                   alt={Title || "Blog Cover"}
// //                   className="w-full h-48 object-cover"
// //                 />
// //                 <div className="p-6">
// //                   <h3 className="text-xl font-semibold mb-2">
// //                     {Title || "Untitled Blog"}
// //                   </h3>
// //                   <p className="text-gray-600 line-clamp-3">
// //                     {Summary || "No summary available."}
// //                   </p>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //       </div>
// //     </section>
// //   );
// // }
