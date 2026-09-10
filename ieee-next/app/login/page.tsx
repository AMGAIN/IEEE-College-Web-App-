"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ email, password });
  };

  return (
    <main className="min-h-screen bg-[#001220] flex items-center justify-center px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001220] via-[#00629B]/40 to-[#001220]" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7">

          {/* Header */}
          <div className="text-center mb-5">
            <span className="inline-block px-3 py-1 mb-2 rounded-full bg-[#00629B]/10 text-[#00629B] text-xs font-bold uppercase tracking-widest">
              Admin
            </span>

            <h1 className="text-2xl font-black text-[#001220]">
              Welcome Back
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Sign in to access the admin dashboard
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#001220] mb-1.5"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="admin@ieee.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200
                bg-gray-50 text-[#001220] outline-none
                focus:border-[#00629B] focus:ring-2 focus:ring-[#00629B]/20
                transition"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-[#001220] mb-1.5"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200
                bg-gray-50 text-[#001220] outline-none
                focus:border-[#00629B] focus:ring-2 focus:ring-[#00629B]/20
                transition"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-lg
              bg-[#00629B] hover:bg-[#004F7C]
              text-white font-bold
              transition-all duration-200
              shadow-lg shadow-[#00629B]/20
              hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-5">
            IEEE Student Branch
          </p>
        </div>
      </div>
    </main>
  );
}