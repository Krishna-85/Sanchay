import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Trash2, Mail, UserCheck, CheckCircle2 } from "lucide-react";
import { fadeLeft, fadeUp, scaleIn, stagger, deletionData } from "../shared";

function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/sanchay-logo.png"
              alt="Sanchay logo"
              className="w-9 h-9 rounded-lg"
              width="36"
              height="36"
            />
            <span className="text-lg font-bold">Sanchay</span>
          </a>
          <a
            href="/"
            className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </motion.nav>

      <main className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <section className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
          <motion.div {...fadeLeft}>
            <span className="inline-flex items-center gap-2 border border-violet-500/20 bg-violet-500/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm text-violet-300 mb-6">
              <ShieldCheck size={14} />
              Sanchay Apps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Sanchay Billing Software
              <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                Account Deletion
              </span>
            </h1>
            <p className="text-neutral-400 text-sm leading-relaxed mt-5">
              This page explains how users of Sanchay Billing Software,
              developed by Sanchay Apps, can request deletion of their account
              and associated app data.
            </p>

            <motion.div
              className="mt-8 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-violet-500/20 transition-all duration-300"
              {...scaleIn}
            >
              <h2 className="text-lg font-bold mb-4">
                How to delete your account
              </h2>
              <div className="space-y-4 text-sm text-neutral-400 leading-relaxed">
                <p>
                  You can delete your account directly from the Sanchay Billing
                  Software app by tapping the{" "}
                  <span className="font-semibold text-neutral-100">
                    Delete My Account
                  </span>{" "}
                  button, typing{" "}
                  <span className="font-semibold text-neutral-100">DELETE</span>{" "}
                  to confirm, and submitting the request. Your account will then
                  be deleted.
                </p>
                <p>
                  You can also email us at{" "}
                  <a
                    href="mailto:connectsanchay@gmail.com?subject=Delete%20my%20Sanchay%20account"
                    className="text-violet-400 font-semibold hover:text-violet-300 transition-colors"
                  >
                    connectsanchay@gmail.com
                  </a>{" "}
                  with the subject{" "}
                  <span className="font-semibold text-neutral-100">
                    "Delete my Sanchay account"
                  </span>
                  . Please include your registered Google/email account so we
                  can verify and process the request.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                icon: <Trash2 size={18} />,
                title: "Option 1: Delete from the app",
                desc: "Open the Sanchay Billing Software app, tap Delete My Account, type DELETE to confirm, and submit the request.",
              },
              {
                icon: <Mail size={18} />,
                title: "Option 2: Email us",
                desc: "Send your deletion request to connectsanchay@gmail.com with the required subject and registered Google/email account.",
              },
              {
                icon: <UserCheck size={18} />,
                title: "Account and associated data are deleted",
                desc: "After confirmation or verification, your account and associated data are removed from active systems.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-xl p-5 flex gap-4 hover:border-violet-500/20 transition-all duration-300"
                {...stagger}
                transition={{ ...stagger.transition, delay: i * 0.12 }}
                whileHover={{ x: 3 }}
              >
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 text-violet-400 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6 mt-12">
          <motion.div
            className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-violet-500/20 transition-all duration-300"
            {...fadeUp}
          >
            <h2 className="text-xl font-bold mb-5">
              Data that will be deleted
            </h2>
            <div className="space-y-3">
              {deletionData.map((item) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-3"
                  whileHover={{ x: 3 }}
                >
                  <CheckCircle2
                    size={16}
                    className="text-violet-400 shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-neutral-400">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-violet-500/20 transition-all duration-300"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            <h2 className="text-xl font-bold mb-4">Retention</h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Some data may be retained for up to 30 days for backup, security,
              fraud prevention, or legal compliance. After this retention
              period, eligible deleted data is removed according to our data
              deletion process.
            </p>
            <div className="mt-6 rounded-xl bg-neutral-800/50 border border-neutral-700 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                Support Email
              </p>
              <a
                href="mailto:connectsanchay@gmail.com?subject=Delete%20my%20Sanchay%20account"
                className="block text-base font-semibold mt-2 break-words hover:text-violet-300 transition-colors"
              >
                connectsanchay@gmail.com
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-neutral-600">
          <p>© 2026 Sanchay Apps. All Rights Reserved.</p>
          <a href="/" className="hover:text-neutral-300 transition-colors">
            Sanchay Billing Software
          </a>
        </div>
      </footer>
    </div>
  );
}

export default DeleteAccountPage;
