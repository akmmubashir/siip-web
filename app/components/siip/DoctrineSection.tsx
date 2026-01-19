"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const principles = ['Participation over extraction', 'Circulation over accumulation', 'Position over perks', 'Architecture over features', 'Stability over speculation'];
 
const DoctrineSection = ( ) => {
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
            Doctrine
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 font-light">
            The Incentivised Economy Layer
          </p>
        </motion.div>

        {/* Body Content */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }} className="space-y-8 mb-20">
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            SIIP exists to institutionalise participation as infrastructure.
            Modern economies move capital efficiently, yet they fail to return
            structural position to the individuals who generate economic flow.
          </p>

          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            Transactions end value. Participation disappears. Over time, value
            concentrates and stability weakens.
          </p>

          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            This is not a market failure. It is an architectural omission.
          </p>
        </motion.div>

        {/* Principles */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="mb-20">
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-12">
            SIIP is built on five non-negotiable principles:
          </p>

          <div className="space-y-8">
            {principles.map((principle, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6,
              delay: 0.6 + index * 0.15,
              ease: [0.16, 1, 0.3, 1]
            }} className="flex items-start gap-6 group">
              <span className="text-5xl md:text-6xl font-light text-zinc-800 group-hover:text-zinc-700 transition-colors tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="text-2xl md:text-3xl font-light text-white pt-2 leading-tight">
                {principle}
              </p>
            </motion.div>)}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1.5
        }} className="space-y-8 pt-12 border-t border-zinc-900">
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            We are not building a loyalty initiative. We are not launching a
            marketing platform. We are not replacing payments.
          </p>

          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            We are designing a participation layer: an economic architecture
            where every verified transaction becomes a participation event,
            where merchants gain retention infrastructure, and where
            individuals gain visible economic presence— without financial
            manipulation, without consumer fees, and without interference in
            settlement or tax.
          </p>

          <p className="text-xl md:text-2xl text-white leading-relaxed font-light pt-8">
            This is infrastructure. And infrastructure must be governed by
            doctrine.
          </p>
        </motion.div>

        {/* Back Link */}
        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 1.8
        }} className="pt-20">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to home
          </Link>
        </motion.div>
      </div>
    </article>
  </main>
  )
}

export default DoctrineSection