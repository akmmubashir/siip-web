"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { signals } from '@/app/data/signals';

const SignalsPageSection = () => {
  return (
    <main className="min-h-screen bg-black text-zinc-50 selection:bg-zinc-800 selection:text-white">
      <article className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }} className="mb-16">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
              Signals
            </h1>
            <p className="text-xl text-zinc-400 font-light max-w-2xl">
              Short notes on participation economics, circulation design,
              merchant retention architecture, and institutional alignment.
            </p>
          </motion.div>

          {/* Posts List */}
          <div className="space-y-6">
            {signals.map((signal, index) => <motion.div key={signal.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2 + index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}>
              <Link href={`/signals/${signal.slug}`} className="block border border-zinc-900 hover:border-zinc-700 bg-zinc-950/30 hover:bg-zinc-950/50 transition-all duration-300 group">
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <h2 className="text-2xl md:text-3xl font-light text-white group-hover:text-zinc-100 transition-colors">
                      {signal.title}
                    </h2>
                    <ArrowRight className="h-5 w-5 text-zinc-700 group-hover:text-zinc-400 transition-all shrink-0 mt-1 group-hover:translate-x-1" />
                  </div>

                  <time className="text-xs font-mono text-zinc-600 uppercase tracking-wider block mb-4">
                    {new Date(signal.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>

                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {signal.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>)}
          </div>

          {/* Empty State Hint */}
          <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="mt-16 pt-12 border-t border-zinc-900">
            <p className="text-sm text-zinc-600 text-center">
              More signals coming soon
            </p>
          </motion.div>
        </div>
      </article>
    </main>
  )
}

export default SignalsPageSection