"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { CheckCircle2 } from "lucide-react";
export function EarlyAccessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRole, setSelectedRole] = useState("select");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  return (
    <section
      id="early-access"
      className="px-6 py-24 md:px-12 lg:px-24 bg-zinc-950"
    >
      <div className="max-w-xl mx-auto">
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

        <div className="bg-black border border-zinc-900 p-8 md:p-12 rounded-sm">
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
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="h-16 w-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">
                  Request Received
                </h3>
                <p className="text-zinc-400 max-w-xs mx-auto">
                  Thank you. If aligned, you will receive access instructions
                  via email.
                </p>
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
                className="space-y-6"
              >
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="name@organization.com"
                  required
                />
                <Input
                  label="LinkedIn Profile (Optional)"
                  type="url"
                  placeholder="https://www.linkedin.com/in/yourprofile"
                />

                <div className="space-y-2">
                  <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    I am a
                  </label>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="flex h-12 w-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm text-zinc-100 ring-offset-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 transition-all duration-200"
                    required
                  >
                    <option value="select" disabled>
                      Select your role
                    </option>
                    <option value="merchant">Merchant</option>
                    <option value="institutional">
                      Institutional Operator
                    </option>
                    <option value="builder">Economic Builder</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Input label="City (Optional)" placeholder="City, Country" />

                <div className="pt-4">
                  <Button
                    type="submit"
                    className="w-full h-12 bg-white text-black hover:bg-zinc-200"
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
