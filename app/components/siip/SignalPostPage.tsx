"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { signals } from "@/app/data/signals";

type Props = {
  signal: string;
};

const SignalPostPage = ({ signal: slug }: Props) => {
  const signal = signals.find((s) => s.slug === slug);

  if (!signal) {
    return (
      <main className="min-h-screen bg-black text-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-white mb-4">
            Signal not found
          </h1>
          <Link href="/signals" className="text-zinc-400 hover:text-white">
            Back to signals
          </Link>
        </div>
      </main>
    );
  }
  // Find previous and next signals
  const currentIndex = signals.findIndex((s) => s.slug === slug);
  const prevSignal =
    currentIndex < signals.length - 1 ? signals[currentIndex + 1] : null;
  const nextSignal = currentIndex > 0 ? signals[currentIndex - 1] : null;
  return (
    <main className="min-h-screen bg-black text-zinc-50 selection:bg-zinc-800 selection:text-white">
      <article className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
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
            className="mb-12"
          >
            <time className="text-xs font-mono text-zinc-600 uppercase tracking-wider block mb-6">
              {new Date(signal.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>

            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight">
              {signal.title}
            </h1>
          </motion.div>

          {/* Body */}
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
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {signal.body.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="mt-20 pt-12 border-t border-zinc-900"
          >
            <div className="flex flex-row justify-between gap-6">
              <Link
                href="/signals"
                className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                All signals
              </Link>

              <div className="flex flex-col sm:flex-row gap-6">
                {prevSignal && (
                  <Link
                    href={`/signals/${prevSignal.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors group"
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Previous
                  </Link>
                )}
                {nextSignal && (
                  <Link
                    href={`/signals/${nextSignal.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors group"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
};

export default SignalPostPage;
