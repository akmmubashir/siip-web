import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '../components/siip/Navigation';
import { Footer } from '../components/siip/Footer';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Shield, CheckCircle2 } from 'lucide-react';
export function CouncilAccessPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate verification request
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  return <main className="min-h-screen bg-black text-zinc-50 selection:bg-zinc-800 selection:text-white">
      <Navigation />

      <div className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-lg w-full">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }} className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-zinc-800 rounded-full mb-6 bg-zinc-950">
              <Shield className="h-7 w-7 text-zinc-400" />
            </div>

            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Council Access
            </h1>

            <div className="max-w-md mx-auto space-y-4">
              <p className="text-lg text-zinc-400 leading-relaxed">
                The SIIP Council is an invitation-led body responsible for
                preserving the doctrine, integrity, and institutional alignment
                of the participation layer.
              </p>
              <p className="text-base text-zinc-500">
                Access is limited. Alignment is mandatory.
              </p>
              <p className="text-sm text-zinc-600 pt-4">
                If you have received an invitation, enter your credentials
                below.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="bg-zinc-950/50 border border-zinc-900 p-8 md:p-10">
            <AnimatePresence mode="wait">
              {isSubmitted ? <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.95
            }} className="flex flex-col items-center justify-center text-center py-12">
                  <div className="h-16 w-16 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-3">
                    Verification Request Received
                  </h3>
                  <p className="text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Your credentials are being verified. If your invitation is
                    valid and alignment is confirmed, you will receive access
                    instructions within 48 hours.
                  </p>
                </motion.div> : <motion.form initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} onSubmit={handleSubmit} className="space-y-6">
                  <Input label="Full Name" placeholder="Enter your full name" required />

                  <Input label="Email Address" type="email" placeholder="name@organization.com" required />

                  <div className="relative">
                    <Input label="Invitation Code" placeholder="Enter your invitation code" className="font-mono tracking-wider" required />
                    <div className="absolute right-4 top-[42px] pointer-events-none">
                      <Shield className="h-4 w-4 text-zinc-700" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full h-12 bg-white text-black hover:bg-zinc-200" disabled={isSubmitting}>
                      {isSubmitting ? 'Verifying...' : 'Request Verification'}
                    </Button>
                  </div>

                  <p className="text-xs text-zinc-600 text-center pt-4">
                    Invitation codes are single-use and expire after 30 days
                  </p>
                </motion.form>}
            </AnimatePresence>
          </motion.div>

          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-center mt-8">
            <p className="text-xs text-zinc-600">
              Do not have an invitation?{' '}
              <a href="/#early-access" className="text-zinc-500 hover:text-zinc-300 transition-colors underline">
                Request early access
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>;
}