import { Blog } from "@/types/blog";
function withBasePath(src) {
 const basePath = process.env.NODE_ENV === "production" ? "/frondesk-new-website" : "";
  const normalizedSrc = src.startsWith('/') ? src.slice(1) : src;
  return `${basePath}/${normalizedSrc}`;
}
const blogData: Blog[] = [
  {
    id: 1,
    title: "Automated AI Dent Detection",
    paragraph:
      "AI Dent Detection is fully automated, instantly identifying dents and damages on cars with high accuracy. It saves time, reduces manual effort,  ensures faster, more reliable ,verifiable, definitive, and profitable assessments.",
  //  image: "images/blog/dent-blogs.png",
 // image: `${basePath}images/blog/dent111.png`,
    image: `${withBasePath('images/blog/fdent.png')}`,
    href:'/blog-sidebar',
    
    author: {
      name: "Frondesk Technologies",
    //  image: "images/blog/author-03.png",
    
  //  image: `${basePath}images/blog/author-03.png`,
  image: `${withBasePath('images/blog/author-03.png')}`,
      designation: "DENT ",
    },
    tags: ["Dent"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Automated Tyre Service",
    paragraph:
      "Tyre automation streamlines every aspect of tyre services, from tracking wear to scheduling replacements with ease. It eliminates manual errors, saves time & ensures customers get faster, more reliable tyre care.",
   // image: "images/blog/tyre-blogs.png",
  //  image: `${basePath}images/blog/tyre111.png`,
    image: `${withBasePath('images/blog/ftyre.png')}`,
href:'/blog-second',
    author: {
      name: "Frondesk Technologies",
     // image: `${basePath}images/blog/author-03.png`,
     image: `${withBasePath('images/blog/author-03.png')}`,
      //image: "images/blog/tyre-blogs.png",
      designation: "Tyre",
    },
    tags: ["Tyre"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Automated Insurance Service",
    paragraph:
      "Automated insurance simplifies policy management by handling renewals & claims automatically. It reduces lapses, boosts customer satisfaction & keeps your dealership’s insurance services running smoothly",
   //image: `${basePath}images/blog/fmi2.png`,
      // image: "images/blog/insurance-blogs.png",
          image: `${withBasePath('images/blog/ffmi.png')}`,
href:'/blog-third',
    author: {
      name: "Frondesk Technologies",
     // image: `${basePath}images/blog/author-03.png`,
      image: `${withBasePath('images/blog/author-03.png')}`,
     // image: "images/blog/author-03.png",
      designation: "Insurance",
    },
    tags: ["Policy"],
    publishDate: "2025",
  },
];
export default blogData;
