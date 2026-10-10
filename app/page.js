import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/api";
import { toBn } from "@/lib/helpers";

export default async function Home() {
  const products = await getAllProducts();

  // dam barse: sudhu "up" gulo, boro percent age, top 6
  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  // dam komse: sudhu "down" gulo, sobcheye beshi komse age 
  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  // API theke data na ashle
  if (products.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-600">এই মুহূর্তে পণ্যের তথ্য লোড করা যাচ্ছে না। একটু পরে আবার চেষ্টা করুন।</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <Hero />

      {/* Section A: dam berechhe */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-red-600">▲</span> আজ দাম বেড়েছে
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {risers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Section B: dam komeche */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4">
          <span className="text-green-600">▼</span> আজ দাম কমেছে
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fallers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Section C: sob ponno (Hero-r button ekhane scroll korbe) */}
      <section id="সব-পণ্য" className="mt-10 scroll-mt-4">
        <h2 className="text-2xl font-bold">সব পণ্য</h2>
        <p className="text-sm text-gray-500 mb-4">
          মোট {toBn(products.length)}টি পণ্য দেখানো হচ্ছে
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}