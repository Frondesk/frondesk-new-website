
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import BlogSecondPage from "./blog-second/page";
import LatestBlogs from "@/components/Blog/LatestBlogs";
function withBasePath(src) {
 const basePath = process.env.NODE_ENV === "production" ? "/frondesk-new-website" : "";
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
  return `${basePath}/${normalizedSrc}`;
}
export const metadata: Metadata = {
   icons: {
    icon: `${withBasePath('images/blog/apple-touch-icon.png')}`,
    apple: `${withBasePath('images/blog/apple-touch-icon.png')}`,
   // icon: "images/logo/apple-touch-icon.png", 
  //  apple: "images/logo/apple-touch-icon.png",
  },
   title: "Frondesk | All-in-One AI Dealership Management Platform",
  description:
    "Frondesk Technologies and Solutions Pvt offers a complete AI-powered dealership management platform to handle new and used car sales, inventory, tyre, and insurance management—all in one place. Simplify operations, boost sales, and grow your dealership with automation and real-time insights.",
  keywords: [
    "Frondesk",
    "AI dealership management platform",
    "all-in-one automotive software",
    "car dealer CRM",
    "inventory management system",
    "used car sales management",
    "new car management software",
    "sell car management",
    "tyre management system",
    "insurance management software",
    "automotive business automation",
    "dealership revenue booster",
    "automotive software platform",
    "Frondesk Technologies",
    "Frondesk Technologies and Solutions",
  ],
  authors: [{ name: "Frondesk Technologies" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Frondesk | AI-Powered Dealership Management Platform",
    description:
      "Manage new and used car sales, inventory, tyre, and insurance from one unified AI platform. Frondesk simplifies dealership management and drives business growth.",
    url: "https://yourdomain.com",
    siteName: "Frondesk Technologies and solutions Pvt",
    images: [
      {
        url: "https://yourdomain.com/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Frondesk AI Dealership Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frondesk | Manage Cars, Tyres, and Insurance in One Platform",
    description:
      "All-in-one AI dealership platform for managing new & used car sales, inventory, tyres, and insurance efficiently.",
    images: ["https://yourdomain.com/images/home-og.jpg"],
    creator: "@frondesktech",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      
   {/* <BlogSecondPage/> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Brands />
      <Testimonials />
      <Pricing />
      {/* <Blog /> */}
        <LatestBlogs /> 
      <Contact />
    </>
  );
}
