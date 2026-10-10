import toast from "react-hot-toast";
import { authClient } from "./auth-client";

// sign out cholar shomoy ProtectedRoute jate "login koro" toast na dey, tai ei flag
export const authState = { signingOut: false };

export async function signOutUser(router) {
  authState.signingOut = true;

  await authClient.signOut();
  toast.success("সফলভাবে সাইন আউট হয়েছে");
  router.push("/");
  router.refresh();

  // kichukkhon por flag abar thik kore dilam
  setTimeout(() => {
    authState.signingOut = false;
  }, 1500);
}