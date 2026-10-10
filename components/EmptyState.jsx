import Link from "next/link";

export default function EmptyState({ title, message }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <p className="text-6xl font-bold text-brand">৪০৪</p>
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600 mt-2">{message}</p>
      <Link href="/" className="btn bg-brand text-white border-0 mt-6">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}