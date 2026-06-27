import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Navbar,
  FloatingOrbs,
  SectionHeading,
  TiltCard,
  ThermalPrinter,
  WorkflowCard,
  features,
  workflowSteps,
  techStack,
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  stagger,
  getWhatsAppLink as getLink,
  policyLinks,
} from "../shared";

export default function HomePage({ currentPath }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-neutral-950 text-neutral-100 overflow-x-hidden" style={{ perspective: "2000px" }}>
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} currentPath={currentPath} />

      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <FloatingOrbs />

        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div {...fadeLeft}>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-violet-500/20 bg-violet-500/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm text-violet-300 mb-8"
            >
              <Zap size={14} />
              India's Modern Billing Solution
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold text-neutral-100 leading-[1.05]">
              Smart Billing
              <span className="block bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent mt-2">
                For Modern Shops
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-neutral-400 text-base leading-relaxed mt-6 max-w-xl"
            >
              Sanchay is a premium business billing and management platform
              designed for Indian stores, restaurants and retail businesses.
              Manage inventory, billing, QR payments, reports and customer
              credits from one powerful app.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <motion.a
                href={getLink()}
                className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-violet-600/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Book a Demo
              </motion.a>
              <motion.a
                href="#book-demo"
                className="border border-neutral-700 hover:border-neutral-500 text-neutral-300 font-semibold px-7 py-3 rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Learn More
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-3 mt-12"
            >
              {[
                ["100%", "Offline Ready"],
                ["Fast", "Billing Flow"],
                ["Smart", "Reports"],
              ].map(([val, label], i) => (
                <motion.div
                  key={label}
                  className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl p-4 hover:border-violet-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    {val}
                  </div>
                  <div className="text-sm text-neutral-500 mt-1">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center gap-8 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/15 via-violet-500/8 to-transparent rounded-[48px] blur-3xl" />
            <TiltCard className="flex-shrink-0">
              <div className="relative">
                <motion.div
                  className="absolute -inset-10 bg-gradient-to-tr from-violet-600/25 via-violet-500/15 to-indigo-600/25 rounded-3xl blur-3xl"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div
                  className="relative w-[380px] md:w-[500px] lg:w-[580px]"
                  style={{
                    filter: "drop-shadow(0 0 40px rgba(139,92,246,0.15))",
                  }}
                >
                  <img
                    src="https://ik.imagekit.io/onvky6lf8/pc-design-removebg-preview.png"
                    alt="POS system"
                    className="w-full h-auto block"
                    fetchPriority="high"
                    decoding="async"
                    width="580"
                    height="380"
                  />
                </div>
              </div>
            </TiltCard>
            <TiltCard className="-mt-4">
              <ThermalPrinter />
            </TiltCard>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative py-24 bg-neutral-900/50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px]"
            animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start relative z-10">
          <motion.div {...fadeLeft}>
            <span className="inline-flex items-center gap-2 border border-violet-500/20 bg-violet-500/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm text-violet-300 mb-6">
              <ShieldCheck size={14} />
              About Sanchay
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Built For
              <span className="block bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent mt-2">
                Indian Businesses
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 md:p-10 space-y-5 hover:border-neutral-700 transition-all duration-500"
            {...scaleIn}
          >
            <p className="text-neutral-400 leading-relaxed">
              Sanchay is a leading offline-first billing and Point of Sale
              (POS) solution designed specifically for Indian small and medium
              businesses. Our mission is to simplify business management by
              providing powerful tools that work even without the internet.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Developed by Sanchay, by Vaibhav Chauhan, Sanchay empowers shop
              owners to manage inventory, generate GST-compliant bills, and
              track sales performance with ease. We believe that technology
              should be an enabler, not a hurdle, which is why Sanchay offers a
              clean, intuitive interface that anyone can use.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              From local Kirana stores to growing retail chains, Sanchay is the
              trusted partner for thousands of businesses across India.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Core Features"
            subtitle="Everything you need to manage your business, billing, inventory and customer operations."
          >
            Powerful
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <TiltCard key={i}>
                <motion.div
                  className="group relative bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-2xl p-7 hover:border-violet-500/30 transition-all duration-500"
                  {...stagger}
                  transition={{ ...stagger.transition, delay: i * 0.08 }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <motion.div
                      className="w-11 h-11 rounded-xl bg-violet-600/10 text-violet-400 flex items-center justify-center mb-5 group-hover:bg-violet-600/20 group-hover:scale-110 transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-neutral-100 mb-3 group-hover:text-violet-300 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-neutral-900/50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-600/5 rounded-full blur-[100px]"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading
            badge="Workflow"
            subtitle="Click each step to see it in action."
          >
            How Sanchay Works
          </SectionHeading>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-8 text-xs text-neutral-500"
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-1.5 bg-neutral-900/60 border border-neutral-800 px-3 py-1.5 rounded-full"
            >
              <span>Tap any card</span>
              <span className="text-violet-400">↓</span>
            </motion.span>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-5">
            {workflowSteps.map((step, i) => (
              <WorkflowCard key={step.title} step={step} index={i} stagger={stagger} />
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="relative py-24 bg-neutral-900/50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-violet-600/5 rounded-full blur-[90px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionHeading
            badge="Stack"
            subtitle="Fast, scalable and future-ready architecture."
          >
            Built With Modern Tech
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-4">
            {techStack.map((tech, i) => (
              <TiltCard key={i}>
                <motion.div
                  className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-xl p-5 flex items-center gap-4 hover:border-violet-500/20 transition-all duration-300"
                  {...stagger}
                  transition={{ ...stagger.transition, delay: i * 0.07 }}
                >
                  <ShieldCheck size={20} className="text-violet-400 shrink-0" />
                  <span className="text-sm font-medium">{tech}</span>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
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

      <motion.a
        href={getLink()}
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, x: 100 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 300, delay: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute -inset-2 rounded-full bg-violet-600/30 blur-xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -inset-1 rounded-full bg-violet-600/20 blur-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div
          className="relative bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Smartphone size={18} />
          </motion.div>
          <div className="hidden md:block text-left">
            <p className="text-xs font-bold leading-tight">Book Demo</p>
            <p className="text-[9px] text-violet-200 leading-tight">+91 7078399463</p>
          </div>
        </motion.div>
      </motion.a>
    </div>
  );
}
