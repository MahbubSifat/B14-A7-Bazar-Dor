import { formatPercent } from "@/lib/helpers";

export default function ChangeBadge({ change, plain = false }) {
  let symbol = "—";
  let color = "text-gray-500";
  let bg = "bg-gray-100";

  if (change.dir === "up") {
    symbol = "▲";
    color = "text-red-600";
    bg = "bg-red-50";
  } else if (change.dir === "down") {
    symbol = "▼";
    color = "text-green-600";
    bg = "bg-green-50";
  }

  const pill = plain ? "" : `${bg} px-2.5 py-1 rounded-full`;

  return (
    <span className={`text-xs font-semibold ${color} ${pill}`}>
      {symbol} {formatPercent(change.pct)}%
    </span>
  );
}