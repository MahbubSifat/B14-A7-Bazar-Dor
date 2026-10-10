import { formatNumber, getUnit } from "@/lib/helpers";

export default function PriceSummary({ product }) {
  const markets = product.markets || [];

  
  if (markets.length === 0) {
    return <p className="text-gray-500">বাজারভিত্তিক তথ্য পাওয়া যায়নি।</p>;
  }

  const lowest = Math.min(...markets.map((m) => m.min));
  const highest = Math.max(...markets.map((m) => m.max));

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">দামের সারসংক্ষেপ</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded-2xl p-4">
          <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
          <p className="text-2xl font-bold text-green-600 my-1">
            {formatNumber(lowest)} <span className="text-sm">টাকা</span>
          </p>
          <p className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার</p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-4">
          <p className="text-xs text-gray-500">সর্বাধিক দাম</p>
          <p className="text-2xl font-bold text-red-600 my-1">
            {formatNumber(highest)} <span className="text-sm">টাকা</span>
          </p>
          <p className="text-xs text-gray-500">সবচেয়ে বেশি দামের বাজার</p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-4">
          <p className="text-xs text-gray-500">গড় দাম</p>
          <p className="text-2xl font-bold text-green-600 my-1">
            {formatNumber(product.today)} <span className="text-sm">টাকা</span>
          </p>
          <p className="text-xs text-gray-500">
            প্রতি {getUnit(product.unit)}-এর হিসাবে
          </p>
        </div>
      </div>
    </div>
  );
}