import Link from "next/link";
import SignUpForm from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">অ্যাকাউন্ট তৈরি করুন</h1>
        <p className="text-gray-600 mt-2 text-sm">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <SignUpForm />
        <p className="text-center text-sm mt-5">
          অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="text-brand font-medium">
            সাইন ইন করুন
          </Link>
        </p>
      </div>

      <p className="text-center mt-6">
        <Link href="/" className="text-sm text-gray-500">
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
}