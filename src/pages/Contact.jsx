import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import {
  Navbar,
  SectionHeading,
  TiltCard,
  fadeLeft,
  fadeUp,
  stagger,
  scaleIn,
  getWhatsAppLink as getLink,
  policyLinks,
} from "../shared";

function ContactPage() {
  const [demoForm, setDemoForm] = useState({
    name: "",
    business: "",
    phone: "",
    requirement: "",
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDemoChange = (e) => {
    const { name, value } = e.target;
    setDemoForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    const message = [
      "Hi Vaibhav, I want to book a demo for Sanchay.",
      `Name: ${demoForm.name || "Not provided"}`,
      `Business: ${demoForm.business || "Not provided"}`,
      `Phone: ${demoForm.phone || "Not provided"}`,
      `Requirement: ${demoForm.requirement || "Not provided"}`,
    ].join("\n");
    window.location.href = getLink(message);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 overflow-x-hidden">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} currentPath="/contact" />

      <section id="book-demo" className="relative py-28 bg-neutral-900/50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center relative z-10">
          <motion.div {...fadeLeft}>
            <motion.span
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 border border-violet-500/30 bg-violet-500/15 backdrop-blur-md px-4 py-1.5 rounded-full text-sm text-violet-300 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <PhoneCall size={14} />
              </motion.div>
              Quick Demo Booking
            </motion.span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Book Your
              <span className="block bg-gradient-to-r from-violet-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent mt-2">
                Sanchay Demo
              </span>
            </h2>

            <p className="text-neutral-400 text-sm leading-relaxed mt-4 max-w-md">
              Share your business details and we'll connect with you instantly
              on WhatsApp. Get a personalized walkthrough of Sanchay.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                {
                  icon: <CalendarCheck size={20} />,
                  title: "Fast Scheduling",
                  desc: "Book a demo with your shop or business requirement.",
                },
                {
                  icon: <MessageCircle size={20} />,
                  title: "WhatsApp Booking",
                  desc: "Submit the form and continue the conversation instantly.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-xl p-5 hover:border-violet-500/30 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.03 }}
                >
                  <div className="text-violet-400 mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-indigo-500 to-violet-600 rounded-2xl opacity-40 blur-sm"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent rounded-2xl"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <TiltCard>
              <form
                onSubmit={handleDemoSubmit}
                className="relative bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MessageCircle size={18} className="text-violet-400" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold">Book via WhatsApp</p>
                    <p className="text-[11px] text-neutral-500">+91 7078399463</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={demoForm.name}
                      onChange={handleDemoChange}
                      placeholder="Your name"
                      className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-neutral-100 outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600/30 transition-all placeholder-neutral-600"
                    />
                  </label>
                  <label className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                      Business Name
                    </span>
                    <input
                      type="text"
                      name="business"
                      value={demoForm.business}
                      onChange={handleDemoChange}
                      placeholder="Shop or company"
                      className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-neutral-100 outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600/30 transition-all placeholder-neutral-600"
                    />
                  </label>
                </div>

                <label className="block space-y-1.5 mt-4">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={demoForm.phone}
                    onChange={handleDemoChange}
                    placeholder="Your WhatsApp number"
                    className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-neutral-100 outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600/30 transition-all placeholder-neutral-600"
                  />
                </label>

                <label className="block space-y-1.5 mt-4">
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    Requirement
                  </span>
                  <textarea
                    name="requirement"
                    value={demoForm.requirement}
                    onChange={handleDemoChange}
                    placeholder="Tell us what you want to see in the demo"
                    rows={3}
                    className="w-full resize-none bg-neutral-800/50 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-neutral-100 outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600/30 transition-all placeholder-neutral-600"
                  />
                </label>

                <motion.button
                  type="submit"
                  className="mt-6 w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <MessageCircle size={16} />
                    Book a Demo on WhatsApp
                  </span>
                </motion.button>
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      <section id="contact-us" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Get in Touch"
            subtitle="If you have any questions, feedback, or need support, we are here to help."
          >
            Contact Us
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              ["Registered Business Name", "Chandrapal Singh"],
              ["Support Email", "connecttsanchay@gmail.com"],
              ["Phone Number", "+91 7078399463"],
              ["Business Address", "Chakarnagar, Etawah, Uttar Pradesh - 206125"],
              ["Operating Hours", "Monday to Saturday, 10:00 AM to 6:00 PM"],
            ].map(([label, value], i) => (
              <motion.div
                key={label}
                className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-5 hover:border-violet-500/20 transition-all duration-300"
                {...stagger}
                transition={{ ...stagger.transition, delay: i * 0.07 }}
                whileHover={{ y: -2 }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
                  {label}
                </p>
                <p className="text-sm font-medium leading-relaxed">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="refund-policy" className="relative py-24 bg-neutral-900/50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionHeading
            badge="Policy"
          >
            Refund and Cancellation Policy
          </SectionHeading>

          <p className="text-neutral-400 text-sm leading-relaxed mb-8 text-center">
            At Sanchay, we value our customers' satisfaction. Since we provide a
            digital SaaS (Software as a Service) product, our policy is as
            follows:
          </p>

          <div className="space-y-4">
            {[
              "Cancellation: You can cancel your subscription at any time from the app settings. Once cancelled, you will continue to have access to the premium features until the end of your current billing cycle, monthly or yearly.",
              "Refunds: We offer a 7-day money-back guarantee for first-time subscribers. If you are not satisfied with our Pro features, you can request a full refund within 7 days of your initial purchase.",
              "Post 7 Days: No refunds will be provided after 7 days of purchase. However, your service will remain active until the subscription period expires.",
              "How to request a refund: Please email us at connecttsanchay@gmail.com with your registered mobile number and payment receipt. Refunds are processed within 5-7 working days to the original payment source.",
            ].map((item, i) => (
              <motion.div
                key={item}
                className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-xl p-5 flex gap-3 hover:border-violet-500/20 transition-all duration-300"
                {...stagger}
                transition={{ ...stagger.transition, delay: i * 0.1 }}
                whileHover={{ x: 3 }}
              >
                <CheckCircle2
                  size={16}
                  className="text-violet-400 shrink-0 mt-1"
                />
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="privacy-policy" className="relative py-24 bg-neutral-900/50 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <SectionHeading
            badge="Privacy"
          >
            Privacy Policy
          </SectionHeading>

          <p className="text-neutral-400 text-sm leading-relaxed mb-8 text-center">
            Sanchay ("we", "our", or "us") is committed to protecting your
            business data.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              ["Data Collection", "We collect your business name, contact details, and inventory data solely to provide billing and sync services."],
              ["Data Security", "Your data is encrypted and stored securely on Supabase cloud servers. Local data on your device is also encrypted."],
              ["Third Parties", "We do not sell or share your business data with any third-party marketing agencies. We only share necessary data with Razorpay to process your payments securely."],
              ["User Control", "You have full control over your data and can request account deletion at any time through the app."],
            ].map(([title, desc], i) => (
              <motion.div
                key={title}
                className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-xl p-5 hover:border-violet-500/20 transition-all duration-300"
                {...stagger}
                transition={{ ...stagger.transition, delay: i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <h3 className="font-semibold text-sm mb-2">{title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
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
    </div>
  );
}

export default ContactPage;
