"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export function HeroSection() {
  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 py-24 md:px-12 lg:px-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="space-y-8"
        >
          <div className="inline-flex items-center space-x-2 border border-zinc-800 px-3 py-1 rounded-full bg-zinc-950/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-400 tracking-tight">
              LAUNCHING SOON - INVITATION ONLY
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.1]">
            SIIPs - Participation <br className="hidden lg:block" />
            <span className="text-zinc-500">Infrastructure Layer</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
            A structural initiative to convert verified transactions into
            participation identity, merchant retention strength, and long-term
            circulation-without touching settlement or tax.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              variant="primary"
              className="cursor-pointer h-12 px-8 text-base"
              onClick={scrollToEarlyAccess}
            >
              Request Early Access
            </Button>
            <Link href="/doctrine">
              <Button
                variant="secondary"
                className="cursor-pointer h-12 px-8 text-base group w-full sm:w-auto"
              >
                Read the Doctrine
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
