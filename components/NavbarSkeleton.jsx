export default function NavbarSkeleton() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="skeleton w-10 h-10 rounded-xl"></div>
          <div className="space-y-2">
            <div className="skeleton h-4 w-24"></div>
            <div className="skeleton h-3 w-32"></div>
          </div>
        </div>
        <div className="skeleton h-9 w-40 rounded-lg"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-2 border-t border-gray-100">
        <div className="skeleton h-8 w-full"></div>
      </div>
      <div className="skeleton h-9 w-full rounded-none"></div>
    </header>
  );
}