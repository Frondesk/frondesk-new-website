import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Automated AI Dent Detection",
    paragraph:
      "AI Dent Detection is fully automated, instantly identifying dents and damages on cars with high accuracy. It saves time, reduces manual effort, and ensures faster, more reliable assessments.",
    image: "frondesk-new-website/images/blog/dent-blogs.png",
    author: {
      name: "Frondesk Technologies",
      image: "frondesk-new-website/images/blog/author-03.png",
      designation: "DENT ",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Automated Tyre Service",
    paragraph:
      "Tyre automation streamlines every aspect of tyre services, from tracking wear to scheduling replacements with ease. It eliminates manual errors, saves time & ensures customers get faster, more reliable tyre care.",
    image: "frondesk-new-website/images/blog/tyre-blogs.png",
    author: {
      name: "Frondesk Technologies",
      image: "frondesk-new-website/images/blog/author-02.png",
      designation: "Tyre",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Automated Insurance Service",
    paragraph:
      "Automated insurance simplifies policy management by handling renewals & claims automatically. It reduces lapses, boosts customer satisfaction & keeps your dealership’s insurance services running smoothly",
    image: "frondesk-new-website/images/blog/insurance-blogs.png",
    author: {
      name: "Frondesk Technologies",
      image: "frondesk-new-website/images/blog/author-03.png",
      designation: "Insurance",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
