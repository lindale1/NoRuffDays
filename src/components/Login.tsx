'use client';

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!email || !password) {
      setError("Email and Password are required");
      setLoading(false);
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid credentials. If you're new, please sign up!");
      setLoading(false);
      return;
    } 
    router.push("/");
    setLoading(false);
  };




  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center text-center rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2">Welcome Back!</h2>
        <p className="mb-6 text-gray-600">Log in</p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
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
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
