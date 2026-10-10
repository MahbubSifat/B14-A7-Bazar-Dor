"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { signOutUser } from "@/lib/auth-actions";
import Avatar from "./Avatar";

export default function ProfileContent() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  if (!session) return null;
  const user = session.user;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">আমার প্রোফাইল</h1>
      <p className="text-gray-600 text-sm mt-1">
        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
      </p>

      {/* avatar + naam + email + sign out */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <Avatar user={user} size={80} />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-500 break-all">{user.email}</p>
        </div>
        <button
          onClick={() => signOutUser(router)}
          className="btn btn-sm btn-outline btn-error"
        >
          ↩ সাইন আউট
        </button>
      </div>

      {/* tothyo + update button (update page Step 10-e) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mt-5">
        <h3 className="font-semibold mb-4">তথ্য</h3>
        <p className="text-sm text-gray-500">নাম</p>
        <p className="font-medium mb-5">{user.name}</p>

        <Link
          href="/profile/update"
          className="btn w-full bg-brand text-white border-0 shadow-md"
        >
          তথ্য আপডেট করুন
        </Link>
      </div>
    </div>
  );
}