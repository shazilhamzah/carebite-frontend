"use client";
import "@/app/globals.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => router.push("/login")}
      >
        Go to Login
      </button>
      <br></br>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => router.push("/dashboard")}
      >
        Go to Dashboard
      </button>
    </>
  );
}
