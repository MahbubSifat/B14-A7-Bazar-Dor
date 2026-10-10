"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryLinks({ categories }) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 w-max">
      {categories.map((cat) => {
        const href = "/category/" + cat.slug;
        const isActive = pathname === href;

        return (
          <Link
            key={cat.id}
            href={href}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm whitespace-nowrap ${
              isActive
                ? "bg-brand text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.nameBn}
          </Link>
        );
      })}
    </nav>
  );
}