/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Globe,
  Linkedin,
  Github,
  MapPin,
  Phone,
} from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((r) => setTimeout(r, 1200));
    reset();
    toast.success("Message sent successfully 🚀");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4  py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-400 lg:mt-20">
            Let’s Build Something Together
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Have an idea, project, or opportunity? Send a message — I’ll get
            back to you shortly.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* CONTACT INFO */}
          <div className="lg:col-span-1 space-y-6">
            <GlassCard>
              <Info
                icon={<Mail />}
                title="Email"
                value="isratbiswas28@gmail.com"
              />
              <Info icon={<Phone />} title="Phone" value="+880 1774610081" />
              <Info icon={<MapPin />} title="Location" value="Bangladesh" />
            </GlassCard>

            <GlassCard>
              <p className="text-sm text-slate-400 mb-4">Find me on</p>
              <div className="flex gap-4">
                <Social icon={<Github />} />
                <Social icon={<Linkedin />} />
                <Social icon={<Globe />} />
              </div>
            </GlassCard>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2">
            <GlassCard>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <Field
                  label="Your Name"
                  icon={<User />}
                  error={errors.name?.message}
                >
                  <input
                    {...register("name")}
                    placeholder="John Doe"
                    className="field"
                  />
                </Field>

                <Field
                  label="Email Address"
                  icon={<Mail />}
                  error={errors.email?.message}
                >
                  <input
                    {...register("email")}
                    placeholder="you@example.com"
                    className="field"
                  />
                </Field>

                <Field
                  label="Message"
                  icon={<MessageSquare />}
                  error={errors.message?.message}
                >
                  <textarea
                    rows={5}
                    {...register("message")}
                    placeholder="Tell me about your project..."
                    className="field resize-none"
                  />
                </Field>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            </GlassCard>
          </div>
        </div>
      </motion.div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        .field {
          width: 100%;
          padding: 12px 14px 12px 42px;
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: white;
          outline: none;
        }
        .field:focus {
          border-color: #6366f1;
        }
      `}</style>
    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

const GlassCard = ({ children }: any) => (
  <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10 shadow-xl">
    {children}
  </div>
);

const Info = ({ icon, title, value }: any) => (
  <div className="flex items-start gap-4 mb-4 last:mb-0">
    <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
      {icon}
    </div>
    <div>
      <p className="text-xs text-slate-400">{title}</p>
      <p className="text-sm text-white">{value}</p>
    </div>
  </div>
);

const Social = ({ icon }: any) => (
  <a className="p-3 rounded-full bg-white/10 hover:bg-indigo-600 transition text-white cursor-pointer">
    {icon}
  </a>
);

const Field = ({ label, icon, children, error }: any) => (
  <div>
    <label className="block mb-2 text-sm text-slate-300">{label}</label>
    <div className="relative">
      <span className="absolute left-3 top-3 text-slate-400">{icon}</span>
      {children}
    </div>
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);
