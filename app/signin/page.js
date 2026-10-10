import Link from "next/link";
import SignInForm from "@/components/SignInForm";

export default function SignInPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">সাইন ইন</h1>
        <p className="text-gray-600 mt-2 text-sm">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <SignInForm />
        <p className="text-center text-sm mt-5">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="text-brand font-medium">
            সাইন আপ করুন
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