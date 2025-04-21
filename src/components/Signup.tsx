"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
       setError(data.message || "Something went wrong");
       return;
      }

      alert("Signup successful");
      router.push("/login");

    } catch (error) {
      setError("Failed to submit the form");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center text-center rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2">Sign up today!</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2"
          />
          <button
            type="submit"
            style={{ backgroundColor: "#8FBFDA" }}
            className="w-full text-white py-2 rounded-xl"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
