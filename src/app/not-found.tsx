// src/app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-stone-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! That page doesn't exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-cyan-800 text-white rounded-lg hover:bg-cyan-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
