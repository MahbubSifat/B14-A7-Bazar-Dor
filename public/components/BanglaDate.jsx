import { getBanglaDate } from "@/lib/helpers";

export default function BanglaDate() {
  return (
    <p className="text-xs text-gray-600" suppressHydrationWarning>
      {getBanglaDate()}
    </p>
  );
}