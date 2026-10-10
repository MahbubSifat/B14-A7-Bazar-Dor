"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { getAuthErrorMessage } from "@/lib/helpers";
import SocialButtons from "./SocialButtons";

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // validation
    if (!name || !email || !password || !confirmPassword) {
      toast.error("সব ঘর পূরণ করুন");
      return;
    }
    if (!email.includes("@")) {
      toast.error("সঠিক ইমেইল দিন");
      return;
    }
    if (password.length < 8) {
      toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("দুটি পাসওয়ার্ড মিলছে না");
      return;
    }

    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setLoading(false);

    if (error) {
      toast.error(getAuthErrorMessage(error));
      return;
    }

    toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এখন সাইন ইন করুন");
    router.push("/signin");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">নাম</label>
          <input
            type="text"
            placeholder="যেমন: রহিম উদ্দিন"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input w-full bg-white"
          />
        </div>

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

        <div>
          <label className="block text-sm font-medium mb-1">পাসওয়ার্ড নিশ্চিত করুন</label>
          <input
            type="password"
            placeholder="আবার লিখুন"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input w-full bg-white"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn w-full bg-brand text-white border-0 shadow-md"
        >
          {loading ? <span className="loading loading-spinner loading-sm"></span> : "অ্যাকাউন্ট তৈরি করুন"}
        </button>
      </form>

      <SocialButtons />
    </div>
  );
}