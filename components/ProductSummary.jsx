import Link from "next/link";
import { formatNumber, getUnit } from "@/lib/helpers";
import ChangeBadge from "./ChangeBadge";

export default function ProductSummary({ product }) {
  const unit = getUnit(product.unit);
  // gotokal theke koto taka poriborton (positive number)
  const diff = Math.abs(product.today - product.yesterday);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
      {/* bam dik: emoji + title + description + tag */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-4xl md:text-5xl shrink-0">
          {product.image}
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{product.nameBn}</h1>
          <p className="text-sm text-gray-500 mt-1">
            প্রতি {unit} · {product.categoryNameBn}
          </p>

          {/* market-er summary line */}
          <p className="text-sm mt-2">
            {product.change.dir === "up" && (
              <>
                গতকালের তুলনায় আজ দাম <b>বেড়েছে</b> · {formatNumber(diff)} টাকা
              </>
            )}
            {product.change.dir === "down" && (
              <>
                গতকালের তুলনায় আজ দাম <b>কমেছে</b> · {formatNumber(diff)} টাকা
              </>
            )}
            {product.change.dir === "flat" && (
              <>গতকালের তুলনায় আজ দাম <b>অপরিবর্তিত</b> আছে</>
            )}
          </p>

          {/* category tag + unit tag */}
          <div className="flex flex-wrap gap-2 mt-3">
            <Link
              href={"/category/" + product.category}
              className="text-xs bg-green-50 text-brand px-3 py-1 rounded-full"
            >
              {product.categoryIcon} {product.categoryNameBn}
            </Link>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              প্রতি {unit}
            </span>
          </div>
        </div>
      </div>

      {/* dan dik: aj-er dam box */}
      <div className="bg-gray-100 rounded-2xl px-8 py-4 text-center md:min-w-40">
        <p className="text-sm text-gray-500">আজকের দাম</p>
        <p className="text-4xl font-bold my-1">{formatNumber(product.today)}</p>
        <p className="text-sm text-gray-500">টাকা / {unit}</p>
        <div className="mt-2">
          <ChangeBadge change={product.change} plain />
        </div>
      </div>
    </div>
  );
}