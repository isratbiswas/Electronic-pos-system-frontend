"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { loginUser } from "@/services/auth/loginUser";
import { toast } from "sonner";
import Link from "next/link";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  useEffect(() => {
    if (state && !state.success && state.message) toast.error(state.message);
  }, [state]);

  return (
    <main
      className={cn(
        "min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-slate-900 to-indigo-950 px-4",
        className
      )}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl grid md:grid-cols-2 bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* LEFT IMAGE + INFO */}
        <div className="hidden md:block relative w-full">
          <img
            src="https://i.pinimg.com/736x/6e/be/41/6ebe414a648740e757a10608601d768b.jpg"
            alt="Login Banner"
            className="absolute inset-0 h-full w-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-600/70 to-indigo-500/70"></div>
          <div className="relative z-10 flex flex-col justify-center h-full p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Welcome Back 👋</h2>
            <p className="opacity-90">
              Enter your credentials to access your POS dashboard. Fast, secure, and scalable.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 md:p-12 flex flex-col justify-center w-full">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-8 text-white text-center md:text-left"
          >
            Login to Your Account
          </motion.h1>

          <form action={formAction} className="space-y-6">
            <FieldGroup>
              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email" className="text-white font-medium">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:outline-none rounded-lg px-4 py-2 w-full"
                />
              </Field>

              {/* Password */}
              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password" className="text-white font-medium">
                    Password
                  </FieldLabel>
                  <a
                    href="#"
                    className="text-sm text-indigo-400 hover:underline underline-offset-2 transition"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:outline-none rounded-lg px-4 py-2 w-full"
                />
              </Field>

              {/* Login Button */}
              <Field>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
                >
                  {isPending ? "Logging in..." : "Login"}
                </motion.button>
              </Field>

              <FieldDescription className="text-center text-slate-400 mt-2">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-indigo-400 hover:text-red-800 transition-colors">
                  Sign up
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </div>
      </motion.div>
    </main>
  );
}