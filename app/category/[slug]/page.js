import { notFound } from "next/navigation";
import { getCategories, getProductsByCategory } from "@/lib/api";
import CategoryProducts from "@/components/CategoryProducts";
import EmptyState from "@/components/EmptyState";
import { toBn } from "@/lib/helpers";

export default async function CategoryPage({ params }) {
  
  const { slug } = await params;

  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);

  // vul slug hole (/category/abc) 404 page
  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(slug);

  // category ache kintu ponno nai
  if (products.length === 0) {
    return (
      <EmptyState
        title="এই ক্যাটাগরিতে কোনো পণ্য নেই"
        message="অন্য ক্যাটাগরি দেখুন অথবা হোম পেজে ফিরে যান।"
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* title + icon */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center gap-4 mb-5">
        <div className="text-4xl">{category.icon}</div>
        <div>
          <h1 className="text-2xl font-bold">{category.nameBn}</h1>
          <p className="text-sm text-gray-500">
            {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>

      {/* sort + card list */}
      <CategoryProducts products={products} />
    </div>
  );
}