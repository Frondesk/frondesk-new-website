"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  search?: string;
  category?: string;
}

interface Category {
  id: number;
  name: string;
}

export default function SearchBar({ search = "", category = "All" }: SearchBarProps) {
  const [query, setQuery] = useState(search);
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  // Fetch categories from Strapi
  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/categories?populate=*&sort=name:asc&pagination[limit]=100`
        );
        const data = await res.json();

        if (data?.data) {
          const formatted = data.data.map((item: any) => ({
            id: item.id,
            name: item.attributes.name,
          }));

          setCategories([{ id: 0, name: "All" }, ...formatted]);
        }
      } catch (err) {
        console.error("Error loading categories:", err);
      }
    }

    loadCategories();
  }, []);

  const updateURL = (cat: string) => {
    const params = new URLSearchParams();

    if (query) params.set("search", query);
    if (cat !== "All") params.set("category", cat);

    router.push(`/blog?${params.toString()}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateURL(selectedCategory);
  };

  return (
    <div className="container pt-[50px]">
      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => {
              setSelectedCategory(cat.name);
              updateURL(cat.name);
            }}
            className={`px-4 py-2 rounded-md border transition-all duration-300 
              ${
                selectedCategory === cat.name
                  ? "bg-primary text-white border-primary"
                  : "bg-[#f8f8f8] dark:bg-[#2C303B] border-stroke dark:border-transparent text-black dark:text-body-color-dark"
              }`}
          >
            {cat.name}
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
