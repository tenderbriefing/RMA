"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebaseClient";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  return (
    <button
      className="rma-btn rma-btn-secondary"
      disabled={busy}
      onClick={async () => {
        setBusy(true);
        try {
          await fetch("/api/auth/logout", { method: "POST" });
          await signOut(getFirebaseAuth());
          router.replace("/login");
          router.refresh();
        } finally {
          setBusy(false);
        }
      }}
      type="button"
    >
      {busy ? "Signing out..." : "Logout"}
    </button>
  );
}

