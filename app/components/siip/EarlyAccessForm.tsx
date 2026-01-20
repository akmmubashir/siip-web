"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { CheckCircle2 } from "lucide-react";
export function EarlyAccessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    linkedin: "",
    organisation_name: "",
    role: "",
    primary_sector: "",
    scale_of_operations: "",
    primary_interest: "",
    short_note: "",
  });
  const handleChange =
    (
      key: keyof typeof formData,
    ): React.ChangeEventHandler<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    > =>
    (e) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
    };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      const payload = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [
          key,
          typeof value === "string" ? value.trim() || "" : "",
        ]),
      );
      const res = await fetch("/api/siips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error("Request failed. Please try again.");
      }
      setIsSubmitted(true);
      setFormData({
        full_name: "",
        email: "",
        linkedin: "",
        organisation_name: "",
        role: "",
        primary_sector: "",
        scale_of_operations: "",
        primary_interest: "",
        short_note: "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="early-access"
      className="px-6 py-20 md:px-12 lg:px-24 bg-zinc-950"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">
            Access
          </span>
          <h2 className="text-3xl font-medium text-white mb-4">
            Request Early Access
          </h2>
          <p className="text-zinc-400">
            Early access is limited to aligned participants: merchants,
            institutional operators, and economic builders.
          </p>
        </motion.div>

        <div className="bg-black border border-zinc-900 p-8 md:p-12 rounded-md shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)]">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="flex flex-col items-center justify-center py-12"
              >
                <div className="h-16 w-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-4 text-center">
                  Request Received
                </h3>
                <div>
                  <p className="text-zinc-400 text-center text-lg max-md:text-sm">
                    Thank you for your interest in participating as a Founding
                    Partner of SIIPs.
                    <br />
                    <br />
                    Your submission has been received and will be reviewed by
                    the SIIPs foundation team.
                    <br />
                    If aligned, you will be contacted for a follow-up
                    conversation regarding partnership positioning and next
                    steps.
                    <br />
                    <br />
                    SIIPs is building infrastructure, not a platform.
                    Participation is selective by design.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={formData.full_name}
                    onChange={handleChange("full_name")}
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={handleChange("email")}
                    required
                  />

                  <Input
                    label="LinkedIn Profile (Optional)"
                    type="url"
                    placeholder="https://www.linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={handleChange("linkedin")}
                  />

                  <Input
                    label="Organisation Name"
                    placeholder="Company or institution"
                    value={formData.organisation_name}
                    onChange={handleChange("organisation_name")}
                    required
                  />

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      I am participating as
                    </label>
                    <div className="px-4 border border-zinc-800 bg-zinc-950 ring-offset-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 transition-all duration-200">
                      <select
                        value={formData.role}
                        onChange={handleChange("role")}
                        className="flex h-12 w-full py-2 text-sm bg-transparent text-zinc-100 outline-none capitalize"
                        required
                      >
                        <option
                          value=""
                          disabled
                          className="bg-black! text-white! capitalize!"
                        >
                          Select your role
                        </option>
                        {[
                          "Business Owner",
                          "Enterprise / Group Operator",
                          " Founder / Business Builder",
                          "Service Provider",
                          "Platform / Marketplace Operator",
                          "Institutional / Corporate Representative",
                          "Ecosystem / Network Builder",
                          "Other",
                        ].map((interest) => (
                          <option
                            key={interest}
                            value={interest}
                            className="bg-black! text-white! capitalize!"
                          >
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Primary Sector
                    </label>
                    <div className="px-4 border border-zinc-800 bg-zinc-950 ring-offset-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 transition-all duration-200">
                      <select
                        value={formData.primary_sector}
                        onChange={handleChange("primary_sector")}
                        className="flex h-12 w-full py-2 text-sm bg-transparent text-zinc-100 outline-none capitalize"
                        required
                      >
                        <option
                          value=""
                          disabled
                          className="bg-black! text-white! capitalize!"
                        >
                          Select a sector
                        </option>
                        {[
                          "Retail",
                          "F&B / Hospitality",
                          "Healthcare",
                          "Education",
                          "Fitness & Wellness",
                          "Professional Services",
                          "E-commerce / Marketplaces",
                          "Financial Services",
                          "Utilities / Infrastructure",
                          "Technology",
                          "Other",
                        ].map((interest) => (
                          <option
                            key={interest}
                            value={interest}
                            className="bg-black! text-white! capitalize!"
                          >
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Scale of Operations
                    </label>
                    <div className="px-4 border border-zinc-800 bg-zinc-950 ring-offset-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 transition-all duration-200">
                      <select
                        value={formData.scale_of_operations}
                        onChange={handleChange("scale_of_operations")}
                        className="flex h-12 w-full py-2 text-sm bg-transparent text-zinc-100 outline-none capitalize"
                        required
                      >
                        <option
                          value=""
                          disabled
                          className="bg-black! text-white! capitalize!"
                        >
                          Select scale
                        </option>
                        {[
                          "Single outlet / small business",
                          "Multi-outlet / local group",
                          "Regional group",
                          "National enterprise",
                          "Platform / network",
                          "Other",
                        ].map((interest) => (
                          <option
                            key={interest}
                            value={interest}
                            className="bg-black! text-white! capitalize!"
                          >
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Primary Interest
                    </label>
                    <div className="px-4 border border-zinc-800 bg-zinc-950 ring-offset-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 transition-all duration-200">
                      <select
                        value={formData.primary_interest}
                        onChange={handleChange("primary_interest")}
                        className="flex h-12 w-full py-2 text-sm bg-transparent text-zinc-100 outline-none capitalize"
                        required
                      >
                        <option
                          value=""
                          disabled
                          className="bg-black! text-white! capitalize!"
                        >
                          Select an interest
                        </option>
                        {[
                          "Joining as a Founding Participation Partner",
                          "Ecosystem integration & partnerships",
                          "Governance & council participation",
                          "Institutional collaboration",
                          "Research & architecture dialogue",
                          "Other",
                        ].map((interest) => (
                          <option
                            key={interest}
                            value={interest}
                            className="bg-black! text-white! capitalize!"
                          >
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Short Note
                    </label>
                    <textarea
                      value={formData.short_note}
                      onChange={handleChange("short_note")}
                      className="flex min-h-35 w-full border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 ring-offset-black placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                      placeholder="Share context on your focus or what you are seeking."
                      required
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-500" role="alert">
                    {error}
                  </p>
                )}

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="cursor-pointer w-full h-12 bg-white text-black hover:bg-zinc-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Request Access"}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
