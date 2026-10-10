import { formatNumber, getUnit } from "@/lib/helpers";
import ChangeBadge from "./ChangeBadge";

export default function Ticker({ products }) {
  // list duibar dilam, jate animation sesh hoye abar shuru hole gap na dekhay
  const items = [...products, ...products];

  return (
    <div className="bg-white border-t border-gray-100 overflow-hidden">
      <div className="marquee-track">
        {items.map((p, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-5 py-2 border-r border-gray-100 text-sm whitespace-nowrap"
          >
            <span>{p.image}</span>
            <span className="font-medium">{p.nameBn}</span>
            <span className="text-gray-600">
              {formatNumber(p.today)} টাকা/{getUnit(p.unit)}
            </span>
            <ChangeBadge change={p.change} plain />
          </div>
        ))}
      </div>
    </div>
  );
}