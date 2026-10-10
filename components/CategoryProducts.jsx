"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { toBn } from "@/lib/helpers";

export default function CategoryProducts({ products }) {
  // default / low / high
  const [sortBy, setSortBy] = useState("default");

  // original list change na kore copy nilam
  const sortedProducts = [...products];

  // dam (today) ekta number, tai a - b diye sort korle Bangla digit-er jhamela nai
  if (sortBy === "low") {
    sortedProducts.sort((a, b) => a.today - b.today);
  } else if (sortBy === "high") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <div>
      {/* sort bar */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-end gap-3">
        <label htmlFor="sort" className="text-sm text-gray-600">
          সাজান
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-sm w-auto bg-white"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      <p className="text-sm text-gray-500 mt-4 mb-3">
        মোট {toBn(sortedProducts.length)}টি পণ্য দেখানো হচ্ছে
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}