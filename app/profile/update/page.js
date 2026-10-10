import ProtectedRoute from "@/components/ProtectedRoute";
import UpdateProfileForm from "@/components/UpdateProfileForm";

export default function UpdateProfilePage() {
  return (
    <ProtectedRoute>
      <UpdateProfileForm />
    </ProtectedRoute>
  );
}