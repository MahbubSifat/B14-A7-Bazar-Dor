import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/api";
import ProtectedRoute from "@/components/ProtectedRoute";
import ProductSummary from "@/components/ProductSummary";
import PriceSummary from "@/components/PriceSummary";
import MarketTable from "@/components/MarketTable";

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  // vul slug hole 404 page
  if (!product) {
    notFound();
  }

  return (
    // login chara dekha jabe na
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* breadcrumb: হোম › চাল › পণ্যের নাম */}
        <nav className="text-sm text-gray-500 mb-4 flex flex-wrap items-center gap-2">
          <Link href="/" className="hover:text-brand">হোম</Link>
          <span>›</span>
          <Link href={"/category/" + product.category} className="hover:text-brand">
            {product.categoryNameBn}
          </Link>
          <span>›</span>
          <span className="text-gray-800">{product.nameBn}</span>
        </nav>

        <ProductSummary product={product} />

        <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 mt-5">
          <PriceSummary product={product} />
          <MarketTable product={product} />
        </div>
      </div>
    </ProtectedRoute>
  );
}