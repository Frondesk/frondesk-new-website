"use client";
import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SharePost from "@/components/Blog/SharePost";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import { getStrapiMedia } from "../../../lib/api";

// --------------------------------------------------
// ⭐ RICH TEXT RENDERER FOR STRAPI (Bold, Bullets etc.)
// --------------------------------------------------
function renderStrapiRichText(blocks: any[]) {
  return blocks.map((block: any, i: number) => {
    const type = block.type;

    // Paragraph
    if (type === "paragraph") {
      return (
        <p key={i} className="mb-4 leading-relaxed text-body-color">
          {block.children.map((child: any, idx: number) => {
            if (child.bold) return <strong key={idx}>{child.text}</strong>;
            if (child.italic) return <em key={idx}>{child.text}</em>;
            if (child.underline) return <u key={idx}>{child.text}</u>;
            return <span key={idx}>{child.text}</span>;
          })}
        </p>
      );
    }

    // Bullet List
    if (type === "list" && block.format === "unordered") {
      return (
        <ul key={i} className="list-disc ml-6 mb-4">
          {block.children.map((item: any, idx: number) => (
            <li key={idx} className="mb-1">
              {item.children.map((child: any, cidx: number) => child.text)}
            </li>
          ))}
        </ul>
      );
    }

    // Number List
    if (type === "list" && block.format === "ordered") {
      return (
        <ol key={i} className="list-decimal ml-6 mb-4">
          {block.children.map((item: any, idx: number) => (
            <li key={idx} className="mb-1">
              {item.children.map((child: any, cidx: number) => child.text)}
            </li>
          ))}
        </ol>
      );
    }

    // Headings
    if (type === "heading") {
      const Tag = `h${block.level}` as any;
      return (
        <Tag key={i} className="font-bold mb-4 text-black dark:text-white">
          {block.children.map((child: any) => child.text).join("")}
        </Tag>
      );
    }

    return null;
  });
}

// --------------------------------------------------
// MAIN PAGE COMPONENT
// --------------------------------------------------
export default function BlogDetailSt() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchBlog() {
      const apiURL = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`;

      try {
        const res = await fetch(apiURL);
        const text = await res.text();

        let json;
        try {
          json = JSON.parse(text);
        } catch {
          console.error(" Strapi returned HTML instead of JSON:", text);
          return;
        }

        setBlog(json?.data?.[0]);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [slug]);

  if (!slug) {
    return <p className="text-center text-red-600 py-20">No slug provided.</p>;
  }

  if (loading) {
    return <p className="text-center py-20">Loading…</p>;
  }

  if (!blog) {
    return <p className="text-center text-red-600 py-20">Blog not found.</p>;
  }

  // Extract your Strapi fields
  const {
    Title,
    Summary,
    Description,
    Description2,
    author,
    FeatureImage,
    publishedAt,
  } = blog;

  const imageUrl = FeatureImage?.[0]?.url
    ? getStrapiMedia(FeatureImage[0].url)
    : "/placeholder.jpg";

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
    <section className="overflow-hidden pt-[180px] pb-[120px]">
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
                    By <span>{author || "Frondesk Technologies"}</span>
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
                "This blog post explores insights from the Frondesk Technologies platform."}
            </p>

            {/* ⭐ FIXED: FULL RICH TEXT RENDERING */}
            {Array.isArray(Description) && Description.length > 0 && (
              <div className="mb-10 space-y-4">
                {renderStrapiRichText(Description)}
              </div>
            )}

            <SharePost />
            {/* <NewsLatterBox /> */}
          </div>
        </div>
      </div>
    </section>
    </Suspense>
    </>
  );
}
