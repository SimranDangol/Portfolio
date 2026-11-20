"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateContact } from "@/hooks/contact.hook";
import { contactSchema, ContactFormInput } from "@/schemas/contact.schemas";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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
      className="bg-zinc-950 border-t border-zinc-800 py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest font-mono text-zinc-600">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mt-2">
            Get in Touch
          </h2>
          <p className="text-zinc-500 text-base mt-2 max-w-md">
            Open to new opportunities, collaborations, and discussions. Feel
            free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-400">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">
                  Email
                </p>
                <a
                  href="mailto:simrandangol10@gmail.com"
                  className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors"
                >
                  simrandangol10@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-400">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">
                  Phone
                </p>
                <p className="text-sm text-zinc-300">+977 9861600043</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-400">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase">
                  Location
                </p>
                <p className="text-sm text-zinc-300">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-3">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  {...form.register("fullName")}
                  placeholder="Your name"
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-md px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                {form.formState.errors.fullName && (
                  <p className="mt-1 text-xs text-red-400">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...form.register("email")}
                  placeholder="Your email"
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-md px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                {form.formState.errors.email && (
                  <p className="mt-1 text-xs text-red-400">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  {...form.register("subject")}
                  placeholder="Subject"
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-md px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                {form.formState.errors.subject && (
                  <p className="mt-1 text-xs text-red-400">
                    {form.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...form.register("message")}
                  rows={5}
                  placeholder="Your message..."
                  className="w-full bg-zinc-900/60 border border-zinc-800 rounded-md px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
                {form.formState.errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 font-medium py-2.5 rounded-md text-sm transition-colors disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
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
          </div>
        </div>
      </div>
    </div>
  );
}
