"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import Link from "next/link";
export function SignalsSection() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-6">
            Signals
          </span>
          <h2 className="text-3xl font-medium text-white mb-6">Signals</h2>
          <p className="text-zinc-400 text-lg max-w-md">
            Notes on participation economics, circulation design, merchant
            retention architecture, and institutional alignment.
          </p>
          <div className="mt-8">
            <Link href="/signals">
              <Button variant="outline" className="group cursor-pointer">
                View all signals
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="flex flex-col justify-center"
        >
          <ul className="space-y-6">
            {[
              {
                title: "Why participation must become infrastructure",
                slug: "why-participation-must-become-infrastructure",
              },
              {
                title: "VAT visibility as economic clarity",
                slug: "vat-visibility-as-economic-clarity",
              },
            ].map((item, i) => (
              <li key={i} className="group cursor-pointer">
                <Link
                  href={`/signals/${item.slug}`}
                  className="flex items-baseline justify-between border-b border-zinc-900 pb-4 group-hover:border-zinc-700 transition-colors"
                >
                  <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
