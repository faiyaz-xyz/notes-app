"use client";

import { auth } from "../../../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Toaster, toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Login attempt successful. Redirecting to application.");
        useEffect(() => {
          const timer = setTimeout(() => {
            router.push("/notes");
          }, 2000);

          return () => clearTimeout(timer);
        }, []);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        if (errorCode == "auth/invalid-credential") {
          toast.error("Invalid credentials.");
        }
        if (errorCode == "auth/invalid-email") {
          toast.error("Email isn't valid.");
        }
        if (errorCode == "auth/missing-password") {
          toast.error("Password is required to login.");
        }
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Log in to your account
        </h1>
        <p className="text-sm text-gray-100 text-center mb-6">
          Welcome back, please sign in
        </p>

        {/* Google button */}
        <button className="w-full border rounded-lg py-2 text-sm font-medium flex items-center justify-center gap-2 mb-4 cursor-pointer">
          <FcGoogle /> Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-4">
          <div className="h-px bg-gray-100 flex-1" />
          <span className="text-xs text-gray-100">OR</span>
          <div className="h-px bg-gray-100 flex-1" />
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/60"
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/60"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-black text-white rounded-lg py-2 text-sm font-medium hover:opacity-90  cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        {/* Don't have account */}
        <p className="mt-4 text-center text-sm text-gray-100">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-gray-400 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
