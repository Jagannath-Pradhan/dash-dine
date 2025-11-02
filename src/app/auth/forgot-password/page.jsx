"use client";

import { ChevronLeft, Mail, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Replace with actual API call, for example:
        // await fetch('/api/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) })
        setIsEmailSent(true);
    };

    const handleResend = () => {
        console.log("Resending email to:", email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                <button
                    onClick={() => router.push("/")}
                    className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition cursor-pointer"
                >
                    <X className="w-5 h-5 text-gray-600" />
                </button>
                <div className="flex flex-col md:flex-row">
                    {/* Left Side - Image */}
                    <div className="md:w-1/2 relative hidden md:block">
                        <img
                            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=1000&fit=crop"
                            alt="Delicious Food"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-600/90 flex items-center justify-center p-8">
                            <div className="text-white text-center">
                                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                                    <Mail className="w-12 h-12" />
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Don't Worry!</h2>
                                <p className="text-lg opacity-90">
                                    It happens to the best of us. We'll help you reset your password and get back to ordering delicious food.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="md:w-1/2 p-8 md:p-12 flex items-center">
                        <div className="w-full max-w-md mx-auto">
                            {/* Mobile Icon */}
                            <div className="md:hidden mb-6 flex justify-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                                    <Mail className="w-10 h-10 text-white" />
                                </div>
                            </div>

                            {!isEmailSent ? (
                                <>
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                                            Forgot Password?
                                        </h3>
                                        <p className="text-gray-600">
                                            No problem! Enter your email and we'll send you a reset link.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition"
                                                placeholder="you@example.com"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg transition transform hover:scale-105"
                                        >
                                            Send Reset Link
                                        </button>
                                    </form>

                                    <div className="mt-6 text-center">
                                        <button
                                            onClick={() => router.push("/auth")}
                                            className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center space-x-2 mx-auto"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            <span>Back to Login</span>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <Mail className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-gray-800 mb-2">
                                            Check Your Email
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            We've sent a password reset link to
                                            <br />
                                            <span className="font-semibold text-gray-800">{email}</span>
                                        </p>

                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                            <p className="text-sm text-blue-800">
                                                <strong>Didn't receive the email?</strong> Check your spam folder or try resending.
                                            </p>
                                        </div>

                                        <button
                                            onClick={handleResend}
                                            className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition mb-4"
                                        >
                                            Resend Email
                                        </button>

                                        <button
                                            onClick={() => router.push("/auth")}
                                            className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center space-x-2 mx-auto"
                                        >
                                            <ChevronLeft className="w-4 h-4" />
                                            <span>Back to Login</span>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
