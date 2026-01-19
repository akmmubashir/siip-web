import Link from 'next/link';
import React from 'react'; 
export function Footer() {
  return <footer className="border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto max-md:px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Branding */}
          <div>
            <h3 className="text-sm font-bold tracking-tighter mb-2">SIIP</h3>
            <p className="text-sm text-zinc-500">
              Participation Infrastructure Layer
            </p>
          </div>

          {/* Center Column - Navigation */}
          <div>
            <nav className="flex flex-col space-y-3">
              <Link href="/doctrine" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Doctrine
              </Link>
              <Link href="/signals" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Signals
              </Link>
              <Link href="/#early-access" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
                Early Access
              </Link>
            </nav>
          </div>

          {/* Right Column - Status */}
          <div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Institutional initiative.
              <br />
              Launching soon.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-zinc-900">
          <p className="text-xs text-zinc-600 leading-relaxed max-w-3xl">
            SIIP does not process payments, store funds, or interfere with
            settlement or tax collection.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8">
          <p className="text-xs text-zinc-700">
            © {new Date().getFullYear()} SIIP Infrastructure. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>;
}