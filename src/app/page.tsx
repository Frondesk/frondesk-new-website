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
  title: "Frondesk",
  description: "AI-Powered Dealership Management Platform",
  // other metadata
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
      <Blog />
      <Contact />
    </>
  );
}
