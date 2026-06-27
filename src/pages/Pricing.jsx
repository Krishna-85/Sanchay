import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, MessageCircle, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import {
  Navbar,
  SectionHeading,
  TiltCard,
  FeatureStatus,
  pricingPlans,
  comparisonRows,
  fadeUp,
  stagger,
  scaleIn,
  getWhatsAppLink as getLink,
  policyLinks,
} from "../shared";

export default function PricingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentPath = "/pricing";

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      <Navbar currentPath={currentPath} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <section id="pricing" className="py-24 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Plans"
            subtitle="Clear yearly plans for shops that need offline billing, secure cloud backup, device sync, staff tools, and business reports."
          >
            Simple Pricing
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <TiltCard key={plan.name}>
                <motion.div
                  className="relative bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 overflow-hidden group hover:border-violet-500/30 transition-all duration-500"
                  {...stagger}
                  transition={{ ...stagger.transition, delay: i * 0.15 }}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/5 rounded-full blur-3xl group-hover:bg-violet-600/10 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-sm text-neutral-500 mt-1">
                          {plan.focus}
                        </p>
                      </div>
                      <motion.span
                        className="bg-violet-600/10 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full border border-violet-500/20"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        Popular
                      </motion.span>
                    </div>

                    <div className="flex items-end gap-1 mb-8">
                      <span className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-sm text-neutral-500 mb-1">
                        {plan.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <motion.div
                          key={feature}
                          className="flex items-start gap-3 text-sm text-neutral-400 group/feature"
                          whileHover={{ x: 3 }}
                        >
                          <CheckCircle2
                            size={16}
                            className="text-violet-400 shrink-0 mt-0.5"
                          />
                          <span className="leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href={getLink(
                        `Hi Vaibhav, I want to know more about the ${plan.name} plan for Sanchay.`
                      )}
                      className="block text-center bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-violet-600/25"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Choose {plan.name}
                    </motion.a>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>

          <motion.div className="mt-16" {...fadeUp}>
            <h3 className="text-2xl font-bold mb-2">Plan Comparison</h3>
            <p className="text-sm text-neutral-500 mb-6">
              Compare Free, Basic Sync, and Pro Business features at a glance.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm">
              <table className="w-full min-w-[700px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-neutral-800">
                    <th className="text-left px-5 py-4 font-semibold text-neutral-300">
                      Features
                    </th>
                    <th className="px-5 py-4 text-center font-semibold text-neutral-300">
                      Free
                    </th>
                    <th className="px-5 py-4 text-center font-semibold text-violet-400">
                      Basic Sync
                    </th>
                    <th className="px-5 py-4 text-center font-semibold text-violet-400">
                      Pro Business
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="border-b border-neutral-800 last:border-0 hover:bg-violet-500/5 transition-colors"
                    >
                      <td className="px-5 py-3.5 text-neutral-300">
                        {row.feature}
                      </td>
                      <td className="px-5 py-3.5">
                        <FeatureStatus value={row.free} />
                      </td>
                      <td className="px-5 py-3.5">
                        <FeatureStatus value={row.basic} />
                      </td>
                      <td className="px-5 py-3.5">
                        <FeatureStatus value={row.pro} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20">
        <motion.div
          className="max-w-5xl mx-auto bg-neutral-900 border border-neutral-800 rounded-3xl p-8 md:p-14 relative overflow-hidden"
          {...scaleIn}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -top-32 -right-32 w-80 h-80 bg-violet-600/5 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-600/5 rounded-full blur-[120px]"
              animate={{ scale: [1.15, 1, 1.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center">
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-violet-600/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 to-transparent" />
                  <svg viewBox="0 0 120 120" className="w-32 h-32 md:w-36 md:h-36">
                    <circle cx="60" cy="42" r="20" fill="#a78bfa" opacity="0.3" />
                    <ellipse cx="60" cy="42" rx="14" ry="16" fill="#c4b5fd" opacity="0.6" />
                    <circle cx="53" cy="38" r="2.5" fill="#1c1917" />
                    <circle cx="67" cy="38" r="2.5" fill="#1c1917" />
                    <circle cx="53" cy="38" r="1.2" fill="#fff" opacity="0.7" />
                    <circle cx="67" cy="38" r="1.2" fill="#fff" opacity="0.7" />
                    <path d="M52 48 Q60 54 68 48" stroke="#a78bfa" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
                    <rect x="40" y="58" width="40" height="22" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                    <rect x="35" y="62" width="8" height="18" rx="3" fill="#a78bfa" opacity="0.4" />
                    <rect x="77" y="62" width="8" height="18" rx="3" fill="#a78bfa" opacity="0.4" />
                    <rect x="50" y="80" width="20" height="28" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1" />
                    <rect x="40" y="58" width="18" height="12" rx="3" fill="#334155" />
                    <circle cx="60" cy="92" r="3" fill="#a78bfa" opacity="0.5" />
                    <rect x="55" y="86" width="10" height="2" rx="1" fill="#a78bfa" opacity="0.3" />
                  </svg>
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-violet-600/20 backdrop-blur-sm border border-violet-500/20 px-3 py-1 rounded-full"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-[9px] font-semibold text-violet-300 whitespace-nowrap">👋 Shop Owner</span>
                  </motion.div>
                </div>
                <motion.div
                  className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <CheckCircle2 size={20} className="text-emerald-400" />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -left-2 w-16 h-6 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-[8px] font-bold text-amber-400">4.9★</span>
                </motion.div>
              </div>
            </div>

            <div className="text-center md:text-left order-1 md:order-2">
              <motion.span
                className="inline-flex items-center gap-2 border border-violet-500/20 bg-violet-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm text-violet-300 mb-5"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap size={13} />
                Join 1,000+ Business Owners
              </motion.span>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-100">
                Ready To Grow
                <span className="block bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent mt-1">
                  Your Business?
                </span>
              </h2>

              <p className="text-neutral-400 text-sm mt-4 max-w-md mx-auto md:mx-0 leading-relaxed">
                Join the next generation of smart shop owners using Sanchay for
                billing, payments and inventory management.
              </p>

              <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
                <motion.a
                  href={getLink()}
                  className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-600/25 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle size={16} />
                  Book a Demo
                </motion.a>
                <motion.a
                  href="/"
                  className="border border-neutral-700 hover:border-neutral-500 text-neutral-300 font-semibold px-7 py-3 rounded-xl transition-all inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ArrowRight size={16} />
                  See Features
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/sanchay-logo.png"
                  alt="Sanchay logo"
                  className="w-11 h-11 rounded-lg"
                  loading="lazy"
                  decoding="async"
                  width="44"
                  height="44"
                />
                <div>
                  <h3 className="text-lg font-bold">Sanchay</h3>
                  <p className="text-xs text-neutral-500">
                    Billing. Manage. Grow.
                  </p>
                </div>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Premium billing and management platform built for modern Indian
                businesses.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <div className="space-y-3">
                {policyLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Features</h4>
              <div className="space-y-3">
                {["Inventory Management", "QR Billing", "Reports & Analytics", "Customer Credit", "Thermal Printing"].map(
                  (item) => (
                    <p key={item} className="text-sm text-neutral-500">
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Technology</h4>
              <div className="space-y-3">
                {[
                  "Flutter (Framework)",
                  "Hive (Offline Database)",
                  "Firebase Auth (User Tracking)",
                  "BLoC (State Management)",
                  "Bluetooth Thermal Printing",
                  "PDF Reports & Analytics",
                  "WhatsApp & UPI Integration",
                ].map((item) => (
                  <p key={item} className="text-sm text-neutral-500">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-neutral-600">
            <p>© 2026 Sanchay. All Rights Reserved.</p>
            <p>Designed & Developed by Vaibhav Chauhan & Mohan Sharma</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
