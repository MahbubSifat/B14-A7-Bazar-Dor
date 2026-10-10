// ইংরেজি সংখ্যা -> বাংলা সংখ্যা (যেমন 12.5 -> ১২.৫)
const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBn(value) {
  return String(value).replace(/[0-9]/g, (digit) => banglaDigits[digit]);
}

// দাম দেখানোর জন্য: 1850 -> ১,৮৫০ আর 63.5 -> ৬৩.৫০
export function formatNumber(n) {
  const hasDecimal = n % 1 !== 0;
  return new Intl.NumberFormat("bn-BD", {
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(n);
}

// শতাংশ: 2.1 -> ২.১ আর -2.9 -> ২.৯ (চিহ্ন আলাদা দেখাব)
export function formatPercent(pct) {
  return toBn(Math.abs(pct).toFixed(1));
}

// API-র unit -> বাংলা
const unitMap = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export function getUnit(unit) {
  return unitMap[unit] || unit;
}

// বাংলা তারিখ: মঙ্গলবার, ৬ অক্টোবর, ২০২৬
export function getBanglaDate() {
  const now = new Date();
  const zone = "Asia/Dhaka";
  const weekday = now.toLocaleDateString("bn-BD", { timeZone: zone, weekday: "long" });
  const day = now.toLocaleDateString("bn-BD", { timeZone: zone, day: "numeric" });
  const month = now.toLocaleDateString("bn-BD", { timeZone: zone, month: "long" });
  const year = now.toLocaleDateString("bn-BD", { timeZone: zone, year: "numeric" });
  return `${weekday}, ${day} ${month}, ${year}`;
}