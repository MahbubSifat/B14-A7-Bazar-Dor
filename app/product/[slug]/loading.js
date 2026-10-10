export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="skeleton h-4 w-48 mb-4"></div>
      <div className="skeleton h-40 w-full rounded-2xl"></div>
      <div className="skeleton h-96 w-full rounded-2xl mt-5"></div>
    </div>
  );
}