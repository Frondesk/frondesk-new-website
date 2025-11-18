import { Suspense } from "react";
import BlogDetailSt from "./blog_detail_st";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogDetailSt />
    </Suspense>
  );
}
