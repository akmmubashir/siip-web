'use client';

import React from 'react';
import { motion } from 'framer-motion';  
import Link from 'next/link';
interface NavigationProps {
  currentPath?: string;
}
export function Navigation({
  currentPath = '/'
}: NavigationProps) {
  return <motion.nav initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/80 backdrop-blur-sm border-b border-zinc-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold tracking-tighter hover:text-zinc-300 transition-colors">
          SIIP
        </Link>
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="/doctrine" className={`text-xs font-mono transition-colors ${currentPath === '/doctrine' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
            DOCTRINE
          </Link>
          <Link href="/signals" className={`text-xs font-mono transition-colors ${currentPath === '/signals' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}>
            SIGNALS
          </Link>
          <div className="text-xs font-mono text-zinc-600 hidden sm:block">
            INFRASTRUCTURE LAYER
          </div>
        </div>
      </div>
    </motion.nav>;
}