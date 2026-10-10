"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { getAuthErrorMessage } from "@/lib/helpers";
import SocialButtons from "./SocialButtons";

export default function SignInForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // validation
    if (!email || !password) {
      toast.error("ইমেইল ও পাসওয়ার্ড দুটোই দিন");
      return;
    }

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) {
      toast.error(getAuthErrorMessage(error));
      return;
    }

    toast.success("সফলভাবে সাইন ইন হয়েছে");
    router.push("/");
    router.refresh();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">ইমেইল</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input w-full bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">পাসওয়ার্ড</label>
          <input
            type="password"
            placeholder="কমপক্ষে ৮ অক্ষর"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input w-full bg-white"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn w-full bg-brand text-white border-0 shadow-md"
        >
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "সাইন ইন"}
        </button>
      </form>

      <SocialButtons />
    </div>
  );
}