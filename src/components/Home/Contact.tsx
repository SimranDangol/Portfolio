"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCreateContact } from "@/hooks/contact.hook";
import { contactSchema, ContactFormInput } from "@/schemas/contact.schemas";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  User,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

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
        toast.success("Message sent successfully!", {
          description: "I'll get back to you within 24 hours.",
          icon: <CheckCircle2 className="w-5 h-5" />,
        });
        form.reset();
      },
      onError: () => {
        toast.error("Failed to send message", {
          description: "Please check your connection and try again.",
          icon: <AlertTriangle className="w-5 h-5" />,
        });
      },
    });
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen px-4 py-12 overflow-hidden sm:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full w-36 h-36 bg-cyan-400/20 -top-16 -right-16 sm:w-60 sm:h-60 sm:-top-32 sm:-right-32 mix-blend-multiply filter blur-2xl animate-pulse"></div>
        <div className="absolute rounded-full w-36 h-36 bg-teal-400/20 -bottom-16 -left-16 sm:w-60 sm:h-60 sm:-bottom-32 sm:-left-32 mix-blend-multiply filter blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full w-36 h-36 bg-blue-400/20 top-1/2 left-1/2 sm:w-60 sm:h-60 mix-blend-multiply filter blur-2xl animate-pulse delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-10 text-center sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center px-3 py-2 mb-4 space-x-2 border rounded-full sm:px-4 sm:mb-6 bg-cyan-400/10 backdrop-blur-sm border-cyan-400/20">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300" />
            <span className="text-xs font-medium sm:text-sm text-cyan-200">
              Let&lsquo;s Connect
            </span>
          </div>
          <h1 className="mb-3 text-3xl font-bold leading-tight text-transparent sm:mb-4 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-white via-cyan-200 to-teal-200 bg-clip-text">
            Get in Touch
          </h1>
          <p className="max-w-2xl mx-auto text-sm leading-relaxed text-gray-300 sm:text-base lg:text-lg">
            Ready to bring your vision to life? Let&apos;s create something
            extraordinary together.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:gap-12 xl:grid-cols-5">
          <div className="space-y-6 sm:space-y-8 xl:col-span-2">
            <div className="p-4 border sm:p-6 lg:p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border-slate-700/50">
              <h3 className="flex items-center mb-4 text-lg font-bold text-white sm:mb-6 sm:text-xl lg:text-2xl">
                <Mail className="w-5 h-5 mr-2 sm:w-6 sm:h-6 sm:mr-3 text-cyan-400" />
                Contact Information
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-300 sm:mb-6 lg:mb-8 sm:text-base">
                I&lsquo;m always excited to discuss new projects and
                opportunities. Reach out through any channel below.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center p-3 space-x-3 transition-all duration-300 rounded-lg cursor-pointer sm:p-4 sm:space-x-4 hover:bg-slate-700/30">
                  <div className="p-2 rounded-lg sm:p-3 bg-cyan-400/20 hover:bg-cyan-400/30">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white sm:text-base">
                      Email
                    </p>
                    <p className="text-xs text-gray-300 sm:text-sm hover:text-cyan-300">
                      simrandangol10@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-3 space-x-3 transition-all duration-300 rounded-lg cursor-pointer sm:p-4 sm:space-x-4 hover:bg-slate-700/30">
                  <div className="p-2 rounded-lg sm:p-3 bg-teal-400/20 hover:bg-teal-400/30">
                    <Phone className="w-4 h-4 text-teal-400 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white sm:text-base">
                      Phone
                    </p>
                    <p className="text-xs text-gray-300 sm:text-sm hover:text-teal-300">
                      +977 9861600043
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-3 space-x-3 transition-all duration-300 rounded-lg cursor-pointer sm:p-4 sm:space-x-4 hover:bg-slate-700/30">
                  <div className="p-2 rounded-lg sm:p-3 bg-blue-400/20 hover:bg-blue-400/30">
                    <MapPin className="w-4 h-4 text-blue-400 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white sm:text-base">
                      Location
                    </p>
                    <p className="text-xs text-gray-300 sm:text-sm">
                      Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3">
            <div className="p-4 space-y-4 border sm:p-6 lg:p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border-slate-700/50">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-white sm:text-base">
                      <User className="w-4 h-4 mr-2 text-cyan-400" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...form.register("fullName")}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 transition-all duration-300 border rounded-lg sm:text-base bg-slate-700/30 border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50"
                    />
                    {form.formState.errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 sm:text-sm">
                        {form.formState.errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-white sm:text-base">
                      <Mail className="w-4 h-4 mr-2 text-teal-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...form.register("email")}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 transition-all duration-300 border rounded-lg sm:text-base bg-slate-700/30 border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/50"
                    />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-xs text-red-400 sm:text-sm">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-white sm:text-base">
                    <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                    Subject
                  </label>
                  <input
                    type="text"
                    {...form.register("subject")}
                    placeholder="What would you like to discuss?"
                    className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 transition-all duration-300 border rounded-lg sm:text-base bg-slate-700/30 border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50"
                  />
                  {form.formState.errors.subject && (
                    <p className="mt-1 text-xs text-red-400 sm:text-sm">
                      {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-white sm:text-base">
                    <MessageSquare className="w-4 h-4 mr-2 text-emerald-400" />
                    Message
                  </label>
                  <textarea
                    {...form.register("message")}
                    rows={4}
                    placeholder="Tell me about your project, ideas, or how I can help you..."
                    className="w-full px-4 py-3 text-sm text-white placeholder-gray-400 transition-all duration-300 border rounded-lg resize-none sm:text-base bg-slate-700/30 border-slate-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50"
                  />
                  {form.formState.errors.message && (
                    <p className="mt-1 text-xs text-red-400 sm:text-sm">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 sm:space-x-3 shadow-2xl text-sm sm:text-base"
                >
                  {isPending ? (
                    <>
                      <div className="w-4 h-4 border-2 rounded-full sm:w-5 sm:h-5 border-white/30 border-t-white animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
