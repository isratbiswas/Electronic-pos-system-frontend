"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Field, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { registerUser } from "@/services/auth/registerUser";
import { toast } from "sonner";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function RegisterForm({ className, ...props }: React.ComponentProps<"div">) {
  const [state, formAction, isPending] = useActionState(registerUser, null);

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
        className="w-full max-w-5xl grid md:grid-cols-2 bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* LEFT IMAGE + INFO */}
        <div className="hidden md:block relative w-full">
          <img
            src="https://i.pinimg.com/1200x/93/8b/51/938b51ebe57c633bc28cdadfeea30ab9.jpg"
            alt="Register Banner"
            className="absolute inset-0 h-full w-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 via-purple-600/70 to-indigo-500/70"></div>
          <div className="relative z-10 flex flex-col justify-center h-full p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Us 👋</h2>
            <p className="opacity-90">
              Create your account and start managing your POS dashboard efficiently. Secure, fast, and easy-to-use.
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
            Create Your Account
          </motion.h1>

          <form action={formAction} className="space-y-6">
            <FieldGroup>
              {/* Name */}
              <Field>
                <FieldLabel htmlFor="name" className="text-white font-medium">
                  Name
                </FieldLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Israt Jahan"
                  required
                  className="bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:outline-none rounded-lg px-4 py-2 w-full"
                />
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email" className="text-white font-medium">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="m@example.com"
                  required
                  className="bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:outline-none rounded-lg px-4 py-2 w-full"
                />
              </Field>

              {/* Address */}
              <Field>
                <FieldLabel htmlFor="address" className="text-white font-medium">
                  Address
                </FieldLabel>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Rajshahi"
                  className="bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:outline-none rounded-lg px-4 py-2 w-full"
                />
              </Field>

              {/* Phone */}
              <Field>
                <FieldLabel htmlFor="phone" className="text-white font-medium">
                  Phone
                </FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="017********"
                  className="bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:outline-none rounded-lg px-4 py-2 w-full"
                />
              </Field>

              {/* Password & Confirm */}
              <Field className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="password" className="text-white font-medium">
                    Password
                  </FieldLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:outline-none rounded-lg px-4 py-2 w-full"
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="confirmPassword" className="text-white font-medium">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="bg-slate-800 text-white border border-slate-700 focus:ring-indigo-500 focus:outline-none rounded-lg px-4 py-2 w-full"
                  />
                </Field>
              </Field>
              <FieldDescription className="text-slate-400">
                Must be at least 6 characters long.
              </FieldDescription>
              {/* Role */}
<Field>
  <FieldLabel htmlFor="role" className="text-white font-medium">
    Role
  </FieldLabel>

  {/* IMPORTANT: name="role" so server action gets it */}
  <Select name="role">
    <SelectTrigger className="bg-slate-800 text-white border border-slate-700">
      <SelectValue placeholder="Select role" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="MANAGER">Manager</SelectItem>
      <SelectItem value="CASHIER">Cashier</SelectItem>
    </SelectContent>
  </Select>
</Field>

              {/* Submit Button */}
              <Field>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
                >
                  {isPending ? "Creating Account..." : "Create Account"}
                </motion.button>
              </Field>

              <FieldDescription className="text-center text-slate-400 mt-2">
                Already have an account?{" "}
                <Link href="/login" className="text-indigo-400 hover:text-white transition-colors">
                  Login
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
