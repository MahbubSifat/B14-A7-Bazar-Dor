import EmptyState from "@/components/EmptyState";

export default function NotFound() {
  return (
    <EmptyState
      title="পেজটি খুঁজে পাওয়া যায়নি"
      message="আপনি যে পেজটি খুঁজছেন সেটি নেই অথবা সরিয়ে ফেলা হয়েছে।"
    />
  );
}