// app/post-login/page.jsx
"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PostLoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Pastikan sesi sudah dimuat
    if (status === "authenticated" && session) {
      // Ambil peran pengguna dari sesi. Sesuaikan dengan struktur data sesi Anda
      const userRole = session.user.role;

      if (userRole === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    }
  }, [session, status, router]);

  // Tampilkan loading saat menunggu sesi
  return <div>Redirecting...</div>;
}
