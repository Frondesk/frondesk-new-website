"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  search?: string;
}

export default function SearchBar({ search = "" }: SearchBarProps) {
  const [query, setQuery] = useState(search);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/blog?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="container pt-[50px]">
      <form onSubmit={handleSubmit} className="flex items-center justify-center mb-10">
        <input
          type="text"
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blogs..."
          className="border-stroke mr-4 w-full max-w-[400px] rounded-md border bg-[#f8f8f8] px-6 py-3 
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
