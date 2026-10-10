import { formatNumber } from "@/lib/helpers";

export default function MarketTable({ product }) {
  const markets = product.markets || [];

  if (markets.length === 0) return null;

 
  const rows = markets
    .map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
    .sort((a, b) => a.avg - b.avg);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">বাজারভিত্তিক আজকের দাম</h2>

      {/* choto screen-e table side-e scroll hobe */}
      <div className="overflow-x-auto border border-gray-200 rounded-2xl">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-gray-500">
              <th>বাজার</th>
              <th>বিভাগ</th>
              <th className="text-right">সর্বনিম্ন</th>
              <th className="text-right">সর্বাধিক</th>
              <th className="text-right">গড়</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.market}>
                <td className="whitespace-nowrap">{row.market}</td>
                <td className="whitespace-nowrap">{row.division}</td>
                <td className="text-right whitespace-nowrap">
                  {formatNumber(row.min)} টাকা
                </td>
                <td className="text-right whitespace-nowrap">
                  {formatNumber(row.max)} টাকা
                </td>
                <td className="text-right font-bold whitespace-nowrap">
                  {formatNumber(row.avg)} টাকা
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}