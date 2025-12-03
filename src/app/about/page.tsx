import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
title: "About Frondesk Technologies and Solutions | AI-Powered Dealership Management & Revenue Booster Platform",

  
 description:
  "Discover Frondesk — an AI-powered dealership management platform built to help car dealers automate operations, manage leads, and boost revenue. Discover our mission to empower dealerships with intelligent tools that drive growth and simplify sales management.",


 keywords: [
  "Frondesk",
  "Frondesk Technologies Solutions",
  "AI dealership software",
  "car dealer CRM",
  "automotive management platform",
  "dealership management system",
  "DMS software for car dealers",
  "vehicle inventory management",
  "lead management for dealerships",
  "automotive sales automation",
  "car sales software",
  "showroom management software",
  "used car dealer software",
  "new car dealer software",
  "customer retention for dealerships",
  "service scheduling for car dealers",
  "finance and insurance management",
  "F&I software for dealerships",
  "AI tools for automotive dealers",
  "automotive retail software",
  "car dealership reporting dashboard",
  "inventory tracking and pricing automation",
  "vehicle lifecycle management",
  "multi-location dealership software",
  "franchise dealership CRM",
  "AI-powered sales insights",
  "dealership analytics and performance",
  "sales lead tracking for car showrooms", 
  "Revenue Intelligent",

],
  authors: [{ name: "Frondesk Technologies and Solutions" }],
 
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Frondesk Technologies Solutions – AI-Powered Dealership Management Platform",
    description:
      "Revolutionize your car dealership operations with Frsk. Manage sales, leads, and inventory effortlessly with AI automation.",
    url: "https://yourdomain.com",
    siteName: "Frondesk",
    images: [
      {
        url: "https://yourdomain.com/images/frsk-og.jpg",
        width: 1200,
        height: 630,
        alt: "Frondesk – AI Dealership Management Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frondesk | AI-Powered Dealership Management Platform",
    description:
      "Automate your dealership operations with AI. Frsk helps dealers manage leads, inventory, and performance — all in one place.",
    images: ["https://yourdomain.com/images/frsk-og.jpg"],
    creator: "@frsktech",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Frondesk is a humble startup passionately working on digitally solving the growth challenges faced by the  dealer aftersales industry."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
