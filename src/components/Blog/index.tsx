import Image from "next/image";
import { fetchAPI, getStrapiMedia } from "../../../lib/api";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";

// export default async function BlogDetailPage({ searchParams }: { searchParams: { slug?: string } }) {
//   const slug = searchParams?.slug;

//   if (!slug) {
//     return <p className="text-center text-red-600 py-20">No slug provided.</p>;
//   }

//   // ✅ Fetch blog data by slug from Strapi using your helper
//   const res = await fetchAPI(`/blogs?filters[slug][$eq]=${slug}&populate=*`);
//   const blog = res?.data?.[0];

//   if (!blog) {
//     return <p className="text-center text-red-600 py-20">Blog not found.</p>;
//   }
export default async function BlogDetailPage(props: { searchParams: { slug?: string } }) {

  
  const searchParams = await props.searchParams;

  const slug = typeof searchParams?.slug === "string" ? searchParams.slug : "";

  if (!slug) {
    return <p className="text-center text-red-600 py-20">No slug provided.</p>;
  }
const res = await fetch(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
  { cache: "no-store" }
);

const data = await res.json();
const blog = data?.data?.[0];
  // const res = await fetchAPI(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`);
  // const blog = res?.data?.[0];

  if (!blog) {
    return <p className="text-center text-red-600 py-20">Blog not found.</p>;
  }
  // ✅ Extract values from Strapi response
  const { Title, Summary, Description, author, FeatureImage, publishedAt } = blog;

  // ✅ Get full image URL using your helper
  const imageUrl = FeatureImage?.[0]?.url
    ? getStrapiMedia(FeatureImage[0].url)
    : "/placeholder.jpg";

  return (
    <section className=" bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-8/12">
            {/* Blog Title */}
            <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
              {Title || "Untitled Blog"}
            </h1>

            {/* Author + Date */}
            <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
              <div className="flex flex-wrap items-center">
                <div className="mr-10 mb-5">
                  <span className="text-body-color text-base font-medium">
                    By <span>{author || "Frondesk Technologies"}</span>   <p>Frondesk Technologies & Solutions</p>
                  </span>
                
                </div>
                <div className="mb-5">
                  <p className="text-body-color text-base font-medium">
                    {publishedAt
                      ? new Date(publishedAt).toLocaleDateString()
                      : "No Date"}
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Blog Image */}
            <div className="mb-10 w-full overflow-hidden rounded-sm">
              <div className="relative aspect-video w-full">
                <Image
                  src={imageUrl}
                  alt={Title || "Blog Image"}
                  fill
                  className="object-cover object-center rounded-lg"
                />
              </div>
            </div>

            {/* Blog Summary */}
            <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg">
              {Summary ||
                "This blog post explores insights from the Frondesk Technologies and Solutions platform."}
            </p>

            {/* Blog Description (if available) */}
            {Description?.[0]?.children?.[0]?.text && (
              <div className="text-body-color mb-10 text-lg leading-relaxed">
                {Description[0].children[0].text}
              </div>
            )}

            {/* Optional components */}
            <SharePost />
            {/* <TagButton /> */}
            {/* <NewsLatterBox /> */}
          </div>
        </div>
      </div>
    </section>
  );
}




// import axios from 'axios';

// import SectionTitle from "../Common/SectionTitle";

// export default async function BlogSection() {
//   const res = await axios.get('http://localhost:1337/api/blogs?populate=*&sort=publishedAt:desc&pagination[limit]=5');
//   const blogs = res.data.data;

//   return (
//     <section
//       id="blog"
//       className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
//    >
//           <div className="container">
//        <SectionTitle
//         title="Our Latest Blogs"
//           paragraph="Turbocharge profits and cut operational hassles. Join dealerships who have boosted earnings by switching to our all-in-one solution for new and used car sales, service automation, and customer engagement."
//           center
//       />
//    <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
     
//       <ul>
//         {blogs.map((blog: any) => (
//           <li key={blog.id}>
//             <h3>{blog.attributes.title}</h3>
//             <p>{blog.attributes.description}</p>
//           </li>
//         ))}
//       </ul>
//       </div>
//     </div>
//     </section>
//   );
// }




// import SectionTitle from "../Common/SectionTitle";
// import SingleBlog from "./SingleBlog";
// import blogData from "./blogData";

// const Blog = () => {
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

//         <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
//           {blogData.map((blog) => (
//             <div key={blog.id} className="w-full">
//               <SingleBlog blog={blog} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
