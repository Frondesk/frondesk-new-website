
// export async function fetchBlogs() {
//   const res = await fetch('http://localhost:1337/api/blogs?populate=*');
//   if (!res.ok) throw new Error('Failed to fetch blogs');
//   const json = await res.json();
//   return json.data; // Strapi returns blog posts array inside data
// }
export async function fetchBlogs() {
  const res = await fetch('http://localhost:1337/api/blogs?populate=*');
  if (!res.ok) {
    console.error("Failed to fetch blogs");
    return [];
  }
  const json = await res.json();
  return json.data || [];
}

