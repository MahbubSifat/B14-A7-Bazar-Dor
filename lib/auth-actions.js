import toast from "react-hot-toast";
import { authClient } from "./auth-client";


export const authState = { signingOut: false };

export async function signOutUser(router) {
  authState.signingOut = true;

  await authClient.signOut();
  toast.success("সফলভাবে সাইন আউট হয়েছে");
  router.push("/");
  router.refresh();

  
  setTimeout(() => {
    authState.signingOut = false;
  }, 1500);
}