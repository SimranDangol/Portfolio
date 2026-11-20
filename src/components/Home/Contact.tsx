"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateContact } from "@/hooks/contact.hook";
import { contactSchema, ContactFormInput } from "@/schemas/contact.schemas";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCard() {
  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate: createContact, isPending } = useCreateContact();

  const onSubmit = (data: ContactFormInput) => {
    createContact(data, {
      onSuccess: () => {
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
      },
      onError: () => {
        toast.error("Failed to send message. Please try again.");
      },
    });
  };

  return (
    <div
      id="contact"
      className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-12 pb-20 sm:pt-16 sm:pb-24 px-6 sm:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex flex-col gap-8"
          >
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-zinc-500 dark:text-zinc-400">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mt-2">
                Get in Touch
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base mt-2">
                Open to new opportunities, collaborations, and discussions. Feel
                free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-400">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href="mailto:simrandangol10@gmail.com"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-200 hover:text-zinc-600 dark:hover:text-zinc-100 transition-colors"
                  >
                    simrandangol10@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-400">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">+977 9861600043</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-400">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3"
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  {...form.register("fullName")}
                  placeholder="Your name"
                  className="w-full bg-white dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-400 focus:border-zinc-900 dark:focus:border-zinc-400 transition-all shadow-xs"
                />
                {form.formState.errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...form.register("email")}
                  placeholder="Your email address"
                  className="w-full bg-white dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-400 focus:border-zinc-900 dark:focus:border-zinc-400 transition-all shadow-xs"
                />
                {form.formState.errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  {...form.register("subject")}
                  placeholder="Subject"
                  className="w-full bg-white dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-400 focus:border-zinc-900 dark:focus:border-zinc-400 transition-all shadow-xs"
                />
                {form.formState.errors.subject && (
                  <p className="mt-1 text-xs text-red-500">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  rows={4}
                  {...form.register("message")}
                  placeholder="Your message..."
                  className="w-full bg-white dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-zinc-400 focus:border-zinc-900 dark:focus:border-zinc-400 transition-all resize-none shadow-xs"
                />
                {form.formState.errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 font-medium py-2.5 rounded-lg text-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                {isPending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-zinc-400 border-t-zinc-950 rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
