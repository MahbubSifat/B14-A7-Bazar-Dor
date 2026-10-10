import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* hero-r skeleton */}
      <div className="skeleton h-64 w-full rounded-3xl"></div>

      {/* section title + card skeleton */}
      <div className="skeleton h-8 w-48 mt-10 mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <ProductCardSkeleton key={n} />
        ))}
      </div>
    </div>
  );
}
