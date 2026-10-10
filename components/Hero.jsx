import Image from "next/image";
import { getBanglaDate } from "@/lib/helpers";

export default function Hero() {
  return (
    <section className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 grid md:grid-cols-2 items-center gap-6">
      {/* bam dik: text */}
      <div>
        {/* eyebrow */}
        <span
          className="inline-block bg-green-50 text-brand text-sm font-medium px-3 py-1 rounded-full"
          suppressHydrationWarning
        >
          {getBanglaDate()}
        </span>

        {/* main heading */}
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          আজকের বাজারের দাম এক নজরে
        </h2>

        {/* subtitle */}
        <p className="text-gray-600 mt-3 leading-relaxed">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত,
          গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>

        {/* CTA: page-er sob-ponno section-e scroll kore (anchor link) */}
        <a
          href="#সব-পণ্য"
          className="btn bg-brand text-white border-0 shadow-md mt-6"
        >
          সব পণ্য দেখুন
        </a>
      </div>

      {/* dan dik: image */}
      <div className="flex justify-center">
        <Image
          src="/bazar-hero.png"
          alt="বাজারের ঝুড়ি"
          width={320}
          height={270}
          className="w-64 md:w-80 h-auto"
          priority
        />
      </div>
    </section>
  );
}
