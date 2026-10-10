import Link from "next/link";
import { formatNumber, getUnit } from "@/lib/helpers";
import ChangeBadge from "./ChangeBadge";

export default function ProductCard({ product }) {
  return (
    <Link
      href={"/product/" + product.slug}
      className="block bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-md transition"
    >
      {/* emoji + nam + unit */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
          {product.image}
        </div>
        <div>
          <h3 className="font-semibold text-lg leading-tight">{product.nameBn}</h3>
          <p className="text-sm text-gray-500">প্রতি {getUnit(product.unit)}</p>
        </div>
      </div>

      {/* dam + change badge */}
      <p className="text-xs text-gray-500 mt-4">আজকের দাম</p>
      <div className="flex items-end justify-between">
        <p className="text-xl font-bold">
          {formatNumber(product.today)}{" "}
          <span className="text-sm font-normal">টাকা</span>
        </p>
        <ChangeBadge change={product.change} />
      </div>
    </Link>
  );
}