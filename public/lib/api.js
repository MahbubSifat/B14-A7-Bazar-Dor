import { cache } from "react";

const BASE_URL = "https://api.api-store.workers.dev/api/bazardor";

export const getAllProducts = cache(async () => {
  try {
    const res = await fetch(BASE_URL + "/products", { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.log("Products load hoy nai:", error);
    return [];
  }
});

export const getCategories = cache(async () => {
  try {
    const res = await fetch(BASE_URL + "/categories", { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.log("Categories load hoy nai:", error);
    return [];
  }
});

export async function getProductsByCategory(slug) {
  const all = await getAllProducts();
  return all.filter((p) => p.category === slug);
}

export async function getProductBySlug(slug) {
  const all = await getAllProducts();
  return all.find((p) => p.slug === slug) || null;
}