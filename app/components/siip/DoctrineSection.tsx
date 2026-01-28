"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const principles = [
  {
    id: 1,
    title: "Participation over extraction",
    desc: `Most economic systems extract value from activity.
SIIPs does not.\n 
Every verified transaction is recorded as a participation event, not a monetisation opportunity.
SIIPs never charges per transaction, per event, or per volume.\n 
Participation is preserved as economic truth,
not extracted as fees, commissions, or margins.`,
  },
  {
    id: 2,
    title: "Circulation over accumulation",
    desc: `Healthy economies depend on circulation, not concentration.\n 
When participation is not recorded, value accumulates silently and continuity weakens.
SIIPs maintains a persistent record of participation across consumers, merchants, locations, and
time without privileging spend, scale, or frequency.\n 
Circulation is allowed to emerge naturally, not engineered.`,
  },
  {
    id: 3,
    title: "Position over perks",
    desc: `Economic position without outcome is invisible.
Privilege without structure is unstable.\n
SIIPs establishes economic position through verified participation history — based on continuity,
longevity, and integrity, not purchasing power.\n
This position may translate into privileges, surfaced through the SIIPs platform as participationbased eligibility signals.
The form, value, and execution of any privilege are defined independently by participating
merchants or institutions.
SIIPs does not mandate, fund, price, or guarantee privileges.\n
Privilege follows participation.
It is never used to engineer behaviour.`,
  },
  {
    id: 4,
    title: "Architecture over features",
    desc: `SIIPs is not a loyalty programme, a marketing system, or a payment layer.\n
It is a participation infrastructure layer that operates alongside existing financial systems without
interfering in pricing, settlement, or taxation.\n
The system is designed to be minimal, neutral, and long-lived supporting recognition and privilege structurally, not tactically.`,
  },
  {
    id: 5,
    title: "Stability over speculation",
    desc: `Short-term incentives distort long-term systems.\n
SIIPs favours continuity over spikes, longevity over bursts, and trust over speed.\n
Participation accrues over time.
Privileges strengthen gradually.
Stability is prioritised over rapid expansion.`,
  },
];

const DoctrineSection = () => {
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
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
              Doctrine
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-light">
              The Participation Infrastructure Layer
            </p>
          </motion.div>

          {/* Body Content */}
          <h2 className="text-xl font-medium md:text-2xl text-zinc-500 mb-4">
            Why SIIPs Exists
          </h2>
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
            className="space-y-6 mb-20"
          >
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Modern economies are efficient at moving money. They are not
              designed to recognise participation.
            </p>

            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              Transactions conclude at settlement. Participation disappears.
              Over time, capital remains visible, but contributors do not.
            </p>

            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              This is not a market failure. It is an architectural omission.
            </p>

            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              SIIPs exists to institutionalise participation as infrastructure -
              so that participation is recorded, recognised, and allowed to
              translate into real economic outcomes without extraction or
              manipulation
            </p>
          </motion.div>

          {/* Principles */}
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
              delay: 0.4,
            }}
            className="mb-20"
          >
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-12">
              SIIPs is built on five non-negotiable principles:
            </p>

            <div className="space-y-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col gap-4"
                >
                  <div className="flex max-md:flex-col items-center max-md:items-start gap-6 max-md:gap-1 group">
                    <span className="text-5xl md:text-6xl font-light text-zinc-800 group-hover:text-zinc-700 transition-colors tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-2xl md:text-3xl font-light text-white pt-2 leading-tight">
                      {principle.title}
                    </p>
                  </div>
                  <div className="text-lg md:text-xl text-zinc-300/70 leading-relaxed">
                    {principle.desc?.split("\n").map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < principle.desc.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statement */}
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
              delay: 1.5,
            }}
            className="space-y-8 py-12 border-t border-zinc-900"
          >
            <h2 className="text-xl font-medium md:text-2xl text-zinc-200 mb-4">
              Participation Recognition Boundary
            </h2>
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-zinc-300/70 leading-relaxed">
                SIIPs does not provide rewards, discounts, or financial benefits
              </p>
              <p className="text-lg md:text-xl text-zinc-300/70 leading-relaxed">
                It records and signals verified participation.
              </p>

              <p className="text-lg md:text-xl text-zinc-300/70 leading-relaxed">
                Any priority, pricing preference, or commercial recognition that
                arises from participation status is determined independently by
                participating merchants or institutions, at their discretion,
                outside the SIIPs system.
              </p>

              <p className="text-lg md:text-xl text-zinc-300/70 leading-relaxed">
                SIIPs remains neutral at all times.
              </p>
            </div>
          </motion.div>
          {/* Closing Statement */}
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
              delay: 1.5,
            }}
            className="space-y-8 pt-12 border-t border-zinc-900"
          >
            <h2 className="text-xl font-medium md:text-2xl text-zinc-200 mb-4">
              Final Statement
            </h2>
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-zinc-300/70 leading-relaxed">
                SIIPs is not a product.
                <br />
                It is not a programme.
                <br />
                It is not a rewards system
              </p>

              <p className="text-lg md:text-xl text-zinc-300/70 leading-relaxed">
                It is participation infrastructure designed to make
                participation visible, recognition legitimate, and privilege a
                natural consequence of contribution.
              </p>
              <p className="text-lg md:text-xl text-zinc-300/70 leading-relaxed">
                Infrastructure must be neutral.
                <br />
                Infrastructure must be trusted.
                <br />
                Infrastructure must endure.
              </p>
            </div>
          </motion.div>
          {/* Back Link */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 1.8,
            }}
            className="pt-20"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Return to home
            </Link>
          </motion.div>
        </div>
      </article>
    </main>
  );
};

export default DoctrineSection;
