"use client";

import { auth } from "../../../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Toaster, toast } from "sonner";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    event.preventDefault();
    if (username === "") {
      toast.error("Username is required to make an account.");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          user.displayName = username;
          toast.success("Account has been created. Please go login.");
          useEffect(() => {
            const timer = setTimeout(() => {
              router.push("/login");
            }, 2000);

            return () => clearTimeout(timer);
          }, []);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode == "auth/missing-email") {
            toast.error("Please provide an email.");
          }
          if (errorCode == "auth/invalid-email") {
            toast.error("Email isn't valid.");
          }
          if (errorCode == "auth/email-already-in-use") {
            toast.error("Email is already in use.");
          }
          if (errorCode == "auth/missing-password") {
            toast.error("Password is required to make an account.");
          }
          if (errorCode == "auth/weak-password") {
            toast.error("Password must be at least 6 characters.");
          }
        });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Create an account
        </h1>
        <p className="text-sm text-gray-100 text-center mb-6">
          Sign up to get started
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
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/60"
              placeholder="Spongebob Squarepants"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/60"
              placeholder="spongebob@gmail.com"
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
            onClick={handleSignup}
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="mt-4 text-center text-sm text-gray-100">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-gray-400 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
