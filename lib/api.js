
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export async function fetchAPI(path) {
  const requestUrl = `${STRAPI_API_URL}/api${path}`;
  const res = await fetch(requestUrl, { cache: "no-store" });

  if (!res.ok) {
    console.error("Error fetching data from Strapi:", res.statusText);
    throw new Error(`Error fetching ${path}`);
  }

  return res.json();
}

export function getStrapiMedia(url) {
  if (url.startsWith("http")) return url;
  return `${STRAPI_API_URL}${url}`;
}


// export async function fetchBlogs() {
//   const res = await fetch('http://localhost:1337/api/blogs?populate=*');
//   if (!res.ok) throw new Error('Failed to fetch blogs');
//   const json = await res.json();
//   return json.data; // Strapi returns blog posts array inside data
// }
// import axios from 'axios';

// const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337/api';

// export const fetchAPI = async (path, params = {}) => {
//   const url = new URL(`${API_URL}${path}`);
//   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

//   const { data } = await axios.get(url.toString());
//   return data;
// };


