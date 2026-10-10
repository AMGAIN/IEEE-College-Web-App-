"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { register } from "@/services/auth.service";

export default function LoginPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const data = await register({ name, email, password });
            console.log("Register successful: ", data);
            router.push("/login");
        }
        catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("registration failed");
            }
        } finally {
            setLoading(false);
        }

    };

    return (
        <main className="min-h-screen bg-[#001220] flex items-center justify-center px-4">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#001220] via-[#00629B]/40 to-[#001220]" />

            {/* register Card */}
            <div className="relative z-10 w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7">

                    {/* Header */}
                    <div className="text-center mb-5">
                        <span className="inline-block px-3 py-1 mb-2 rounded-full bg-[#00629B]/10 text-[#00629B] text-xs font-bold uppercase tracking-widest">
                            Admin
                        </span>

                        <h1 className="text-2xl font-black text-[#001220]">
                            Create new Account
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Sign in to access the admin dashboard
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-[#001220] mb-1.5"
                            >
                                Name
                            </label>

                            <input
                                id="name"
                                type="text"
                                placeholder="naha pal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-2.5 rounded-lg border border-gray-200
                bg-gray-50 text-[#001220] outline-none
                focus:border-[#00629B] focus:ring-2 focus:ring-[#00629B]/20
                transition"
                            />
                        </div>
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

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full py-2.5 rounded-lg
              bg-[#00629B] hover:bg-[#004F7C]
              text-white font-bold
              transition-all duration-200
              shadow-lg shadow-[#00629B]/20
              hover:-translate-y-0.5"
                        >
                            Register
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-xs text-gray-400 mt-5">
                        IEEE Student Branch
                    </p>
                </div>
                {error && (
                    <div className="mb-3 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600">
                        {error}
                    </div>
                )}
            </div>

        </main>
    );
}