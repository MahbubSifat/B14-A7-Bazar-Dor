import { getBanglaDate } from "@/lib/helpers";

export default function BanglaDate() {
  // suppressHydrationWarning: server ar browser-er time-er sামান্য tarotomyo hole warning dibe na
  return (
    <p className="text-xs text-gray-600" suppressHydrationWarning>
      {getBanglaDate()}
    </p>
  );
}