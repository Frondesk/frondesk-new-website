import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Contact Frondesk Technologies | Get Support & Schedule a Demo",
  description:
    "Have questions or need assistance? Contact Frondesk Technologies for support or to schedule a free demo of our  dealership management solutions.",
  keywords: [
    "contact Frondesk Technologies Solutions",
    "Frondesk support",
    "Frondesk demo",
    "dealership management software contact",
    "AI automotive solutions",
    "car dealer software demo",
    "customer support Frondesk",
    "partner with Frondesk",
    "sales and service automation",
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
    title: "Contact Frondesk Technologies | Talk to Our Experts",
    description:
      "Reach out to Frondesk Technologies for product demos, customer support, or partnership discussions. We're here to help you grow your dealership with AI-driven solutions.",
    url: "https://yourdomain.com/contact",
    siteName: "Frondesk Technologies Solutions",
    images: [
      {
        url: "https://yourdomain.com/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Frondesk Technologies Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Frondesk Technologies | Get in Touch",
    description:
      "Connect with the Frondesk team for support, demos, or collaboration. Let’s shape the future of automotive dealerships together.",
    images: ["https://yourdomain.com/images/contact-og.jpg"],
    creator: "@frondesktech",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Have questions or need assistance? Contact our team today."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
