// DaisyUI-r "skeleton" class diye loading placeholder
export default function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4">
      <div className="flex items-center gap-3">
        <div className="skeleton w-12 h-12 rounded-xl"></div>
        <div className="flex-1 space-y-2">
          <div className="skeleton h-4 w-2/3"></div>
          <div className="skeleton h-3 w-1/3"></div>
        </div>
      </div>
      <div className="skeleton h-3 w-16 mt-4"></div>
      <div className="flex items-end justify-between mt-2">
        <div className="skeleton h-6 w-20"></div>
        <div className="skeleton h-6 w-14 rounded-full"></div>
      </div>
    </div>
  );
}