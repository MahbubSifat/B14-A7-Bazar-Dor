"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { authState } from "@/lib/auth-actions";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending || session || authState.signingOut) return;

    // id dilam jate dev mode-e dui bar toast na ashe
    toast.error("এই পেজ দেখতে আগে সাইন ইন করুন", { id: "login-required" });
    router.replace("/signin");
  }, [isPending, session, router]);

  // login confirm na howa porjonto skeleton
  if (isPending || !session) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="skeleton h-40 w-full rounded-2xl"></div>
        <div className="skeleton h-64 w-full rounded-2xl mt-5"></div>
      </div>
    );
  }

  return children;
}