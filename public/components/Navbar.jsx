import Link from "next/link";
import Image from "next/image";
import { getAllProducts, getCategories } from "@/lib/api";
import BanglaDate from "./BanglaDate";
import CategoryLinks from "./CategoryLinks";
import Ticker from "./Ticker";

export default async function Navbar() {
  const categories = await getCategories();
  const products = await getAllProducts();

  return (
    <header className="bg-white border-b border-gray-200">
      {/* upore: logo + auth button */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand flex items-center justify-center">
            <Image src="/logo-icon.png" alt="logo" width={24} height={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">বাজার দর</h1>
            <BanglaDate />
          </div>
        </Link>

        {/* auth button, Step 8-e login state diye replace korbo */}
        <div className="flex items-center gap-2">
          <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
            সাইন ইন
          </Link>
          <Link
            href="/signup"
            className="btn btn-sm sm:btn-md bg-brand text-white border-0"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      {/* majhkhane: category link */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-2 overflow-x-auto">
          <CategoryLinks categories={categories} />
        </div>
      </div>

      {/* niche: price ticker */}
      <Ticker products={products} />
    </header>
  );
}
