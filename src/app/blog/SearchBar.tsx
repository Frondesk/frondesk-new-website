"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  search?: string;
  category?: string;
}

// Example categories — replace with your own
const categories = ["All", "Technology", "Cars", "Insurance", "Business"];

export default function SearchBar({ search = "", category = "All" }: SearchBarProps) {
  const [query, setQuery] = useState(search);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (query) params.set("search", query);
    if (selectedCategory && selectedCategory !== "All") {
      params.set("category", selectedCategory);
    }

    router.push(`/blog?${params.toString()}`);
  };

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);

    const params = new URLSearchParams();
    if (query) params.set("search", query);
    if (cat !== "All") params.set("category", cat);

    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="container pt-[50px]">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-md border transition-all duration-300 
              ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-[#f8f8f8] dark:bg-[#2C303B] border-stroke dark:border-transparent text-black dark:text-body-color-dark"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <form onSubmit={handleSubmit} className="flex items-center justify-center mb-10 gap-4">
        <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blogs..."
          className="border-stroke w-full max-w-[400px] rounded-md border bg-[#f8f8f8] px-6 py-3 
                     text-base outline-hidden transition-all duration-300 dark:border-transparent
                     dark:bg-[#2C303B] dark:text-body-color-dark"
        />

        <button
          type="submit"
          aria-label="search button"
          className="bg-primary flex h-[50px] w-[50px] items-center justify-center rounded-md text-white"
        >
          🔍
        </button>
      </form>
    </div>
  );
}




// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// interface SearchBarProps {
//   search?: string;
// }

// export default function SearchBar({ search = "" }: SearchBarProps) {
//   const [query, setQuery] = useState(search);
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     router.push(`/blog?search=${encodeURIComponent(query)}`);
//   };

//   return (
//     <div className="container pt-[50px]">
//       <form onSubmit={handleSubmit} className="flex items-center justify-center mb-10">
//         <input
//           type="text"
//           name="search"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search blogs..."
//           className="border-stroke mr-4 w-full max-w-[400px] rounded-md border bg-[#f8f8f8] px-6 py-3 
//                      text-base outline-hidden transition-all duration-300 dark:border-transparent
//                      dark:bg-[#2C303B] dark:text-body-color-dark"
//         />
//         <button
//           type="submit"
//           aria-label="search button"
//           className="bg-primary flex h-[50px] w-[50px] items-center justify-center rounded-md text-white"
//         >
//           🔍
//         </button>
//       </form>
//     </div>
//   );
// }
