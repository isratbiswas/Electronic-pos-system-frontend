"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise(r => setTimeout(r, 1200));
    console.log(data);
    reset();
    toast.success("Message sent successfully 🚀");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl grid md:grid-cols-2 bg-slate-900 rounded-3xl shadow-xl overflow-hidden"
      >
        {/* LEFT INFO */}
        <div className="hidden md:flex flex-col justify-center p-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Let’s Talk 👋</h2>
          <p className="opacity-90 leading-relaxed">
            Have a project, idea, or just want to say hello? Fill out the form
            and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="p-8 md:p-12">
          <motion.h1
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-6 text-white"
          >
            Contact Us
          </motion.h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-200">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input {...register("name")} placeholder="Your name" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800 text-white"/>
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-200">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <input {...register("email")} placeholder="you@example.com" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800 text-white"/>
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 text-sm font-medium text-slate-200">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <textarea rows={4} {...register("message")} placeholder="Your message..." className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-slate-800 text-white resize-none"/>
              </div>
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4"/>
            </motion.button>
          </form>
        </div>
      </motion.div>
    </main>
  );
}
