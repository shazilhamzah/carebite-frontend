"use client";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return null; // Optionally, show a loader here instead of null
}
