"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { signOutUser } from "@/lib/auth-actions";
import Avatar from "./Avatar";

export default function AuthButtons() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [open, setOpen] = useState(false);

  if (isPending) {
    return <div className="skeleton h-9 w-32 rounded-lg"></div>;
  }

  // login kora nai: sign in + sign up button
  if (!session) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
          সাইন ইন
        </Link>
        <Link
          href="/signup"
          className="btn btn-sm sm:btn-md bg-brand text-white border-0 shadow-md"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

 
  const user = session.user;
  const firstName = (user.name || "").split(" ")[0];

  return (
    <div className="relative">
      {/* dropdown-er baire click korle bondho hobe */}
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex items-center gap-2 px-1 py-1 rounded-lg hover:bg-gray-100"
      >
        <Avatar user={user} />
        <span className="text-sm font-medium hidden sm:block">{firstName}</span>
        <span className="text-xs text-gray-500">▾</span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-64 bg-white border border-gray-200 rounded-2xl shadow-lg p-4">
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm text-gray-500 break-all">{user.email}</p>

          <div className="mt-3 pt-3 border-t border-gray-100 space-y-1">
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="block px-2 py-1.5 rounded-lg text-sm hover:bg-gray-100"
            >
              👤 আমার প্রোফাইল
            </Link>
            <button
              onClick={() => {
                setOpen(false);
                signOutUser(router);
              }}
              className="w-full text-left px-2 py-1.5 rounded-lg text-sm text-red-600 hover:bg-red-50"
            >
              ↩ সাইন আউট
            </button>
          </div>
        </div>
      )}
    </div>
  );
}