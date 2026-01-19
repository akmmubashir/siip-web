"use client";
import React from "react";
import { motion } from "framer-motion";
const blocks = [
  {
    title: "Infrastructure, not a platform",
    text: "SIIP is not a loyalty program, not a marketing system, and not a payment layer. We are building participation as economic infrastructure.",
  },
  {
    title: "Position, not perks",
    text: "Consumers do not collect points. They build measurable economic presence through verified participation.",
  },
  {
    title: "Retention, not discounting",
    text: "Merchants do not run campaigns. They gain retention infrastructure and participation-based reputation.",
  },
];
export function WhatSIIPIs() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 border-b border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">
            Definition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="space-y-6"
            >
              <div className="h-px w-12 bg-zinc-800" />
              <h3 className="text-2xl font-medium text-zinc-100">
                {block.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{block.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
