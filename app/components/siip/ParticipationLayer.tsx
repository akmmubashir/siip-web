"use client";
import React from "react";
import { motion } from "framer-motion";
export function ParticipationLayer() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-24 border-b border-zinc-900 bg-zinc-950/30">
      <div className="max-w-7xl mx-auto">
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
            duration: 0.8,
          }}
        >
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-8">
            The Layer
          </span>

          <h2 className="text-4xl md:text-5xl font-medium text-white mb-12">
            The Participation Layer
          </h2>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-8">
              SIIPs establishes a verified participation layer above everyday
              transactions. Each eligible transaction becomes a participation
              event, creating measurable economic presence for individuals and
              retention strength for merchants without interfering with payment,
              settlement, or tax collection.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed">
              This layer operates as neutral infrastructure: invisible to
              consumers, lightweight for merchants, and fully aligned with
              institutional and regulatory frameworks.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-zinc-900 flex items-center gap-4">
            <div className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            <p className="text-xs font-mono text-zinc-500">
              PHASE 1 DEPLOYMENT BEGINS WITH A CONTROLLED MERCHANT PILOT
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
