"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfileForm() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  
  const [name, setName] = useState(session?.user?.name || "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("নাম খালি রাখা যাবে না");
      return;
    }

    setLoading(true);
    
    const { error } = await authClient.updateUser({ name: name.trim() });
    setLoading(false);

    if (error) {
      toast.error("তথ্য আপডেট করা যায়নি, আবার চেষ্টা করুন");
      return;
    }

    toast.success("তথ্য সফলভাবে আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  }

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">তথ্য আপডেট করুন</h1>
      <p className="text-gray-600 text-sm mt-1">আপনার নাম পরিবর্তন করুন।</p>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white border border-gray-200 rounded-2xl p-6 mt-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">নাম</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="আপনার নাম লিখুন"
            className="input w-full bg-white"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn w-full bg-brand text-white border-0 shadow-md"
        >
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            "তথ্য আপডেট করুন"
          )}
        </button>

        <Link href="/profile" className="block text-center text-sm text-gray-500">
          ← প্রোফাইলে ফিরে যান
        </Link>
      </form>
    </div>
  );
}