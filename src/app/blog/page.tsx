import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frondesk Blog | Stories that Shape the Future of Car Dealerships | Frsk Perspectives",
  description:
    "Explore the Frondesk Blog — Stories that Shape the Future of Car Dealerships and serve as your source for AI dealership insights, automotive management guides, sales growth strategies. Discover expert tips, industry updates, and innovations that help car dealers boost performance and revenue.",
  keywords: [
    "Frondesk blog",
    "AI dealership insights",
    "automotive technology blog",
    "car dealer sales tips",
    "dealership growth strategies",
    "automotive management guides",
    "AI in car sales",
    "dealership automation trends",
    "vehicle inventory management blog",
    "lead conversion tips for car dealers",
    "automotive CRM articles",
    "AI tools for dealerships",
    "dealership performance analytics",
    "automotive business insights",
    "car dealership marketing ideas",
    "revenue growth for dealerships"
  ],
  authors: [{ name: "Frondesk Technologies" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Frondesk Blog | AI Dealership Insights and Automotive Growth Strategies",
    description:
      "Stay ahead in the automotive world with Frondesk’s blog. Read AI-powered dealership insights, tech innovations, and revenue-boosting strategies for car dealers.",
    url: "https://yourdomain.com/blog",
    siteName: "Frsk",
    images: [
      {
        url: "https://yourdomain.com/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Frondesk Blog – AI Dealership Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frondesk Blog | AI Dealership Insights, Tech Trends & Sales Growth",
    description:
      "Explore the Frondesk Blog — your source for AI dealership insights, automotive management guides, and sales growth strategies. Discover expert tips, industry updates, and innovations that help car dealers boost performance and revenue.",
    images: ["https://yourdomain.com/images/blog-og.jpg"],
    creator: "@frondesktech",
  },
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Explore the Frondesk Blog — your source for AI dealership insights, automotive management guides, and sales growth strategies. Discover expert tips, industry updates, and innovations that help car dealers boost performance and revenue."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
