import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* title card */}
      <div className="skeleton h-24 w-full rounded-2xl mb-5"></div>
      {/* sort bar */}
      <div className="skeleton h-16 w-full rounded-2xl"></div>
      <div className="skeleton h-4 w-40 mt-4 mb-3"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <ProductCardSkeleton key={n} />
        ))}
      </div>
    </div>
  );
}