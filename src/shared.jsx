/* eslint-disable react-refresh/only-export-components */

import { useEffect, useState, useRef } from "react";
import {
  ShieldCheck,
  XCircle,
  Receipt,
  Users,
  Boxes,
  QrCode,
  Printer,
  BarChart3,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Menu,
  CalendarCheck,
  PhoneCall,
  MessageCircle,
  Mail,
  UserCheck,
  Trash2,
  X,
  Zap,
  Sparkles,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";

import { useTheme } from "./ThemeContext.jsx";

import { motion } from "framer-motion";

const IMG_VERSION = 2;
const screenshots = [
  `/optimized/Screenshot_20260514_130702.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_130923.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131059.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131116.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131147.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131156.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131209.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131226.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131239.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131310.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131330.webp?v=${IMG_VERSION}`,
  `/optimized/Screenshot_20260514_131348.webp?v=${IMG_VERSION}`,
];

const features = [
  {
    icon: <Receipt size={22} />,
    title: "Smart Billing",
    desc: "Fast billing with QR payments, printable receipts and smooth checkout flow.",
  },
  {
    icon: <Boxes size={22} />,
    title: "Inventory Management",
    desc: "Track stock, product pricing, low stock alerts and barcode scanning.",
  },
  {
    icon: <Users size={22} />,
    title: "Customer Credit",
    desc: "Manage customer balances, credit history and payment collection.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Reports & Analytics",
    desc: "Professional reports, revenue analytics and payment insights.",
  },
  {
    icon: <QrCode size={22} />,
    title: "UPI Payments",
    desc: "Integrated UPI QR support for faster and secure digital payments.",
  },
  {
    icon: <Printer size={22} />,
    title: "Thermal Printer",
    desc: "Bluetooth thermal printer support with instant bill printing.",
  },
];

const upcoming = [
  "GST Billing",
  "Employee Management",
  "Advanced Dashboard",
  "WhatsApp Automation",
  "AI Analytics",
  "Online Orders",
];

const techStack = [
  "Bluetooth Printing",
  "QR Scanner",
  "PDF Reports",
  "UPI Integration",
  "Invoice Generation",
  "AI Analytics",
];

const pricingPlans = [
  {
    name: "Basic Sync",
    price: "₹699",
    period: "per year",
    focus: "Data Synchronization & Backup",
    features: [
      "Multi-device Sync: Apne business data ko 2 devices ke beech sync karein.",
      "Shared Inventory: Stock details real-time mein sabhi devices par update hongi.",
      "Shared Billing: Ek device par bill banayein aur dusre par dekhein.",
      "Shared History: Poori sales history sabhi synced devices par available hogi.",
      "Auto Backup: Aapka data cloud par hamesha safe rahega.",
      "Owner Monitoring (Basic): Remote se apne store ki basic activity check karein.",
      "Device Limit: Maximum 2 devices support.",
    ],
  },
  {
    name: "Pro Business",
    price: "₹1299",
    period: "per year",
    focus: "Complete Team & Staff Management",
    features: [
      "Everything in Basic Sync: Saare sync aur backup features shamil hain.",
      "Staff Dashboard: Staff ke liye alag se asaan interface.",
      "Staff Roles & Permissions: Tai karein ki kaunsa staff kya dekh sakta hai aur kya edit kar sakta hai.",
      "Kitchen/KOT Display: Restaurant ya cafe ke liye wireless order management system.",
      "Activity Tracking: Dekhein kis staff ne kab aur kya entry ki.",
      "GST Reports: Tax calculation aur returns ke liye asaan GST reports generate karein.",
      "Excel Export: Apne saare data ko Excel sheet mein download karein accounting ke liye.",
      "Advanced Analytics: Sales trends, profit margins, aur customer behavior ka gehra analysis.",
      "Priority Sync: Tez data syncing aur fast performance.",
      "Future AI Features: Aane waale sabhi naye AI-powered features ka access.",
      "Unlimited devices support.",
    ],
  },
];

const comparisonRows = [
  { feature: "Offline Billing", free: "yes", basic: "yes", pro: "yes" },
  { feature: "Product Management", free: "yes", basic: "yes", pro: "yes" },
  { feature: "Device Sync", free: "no", basic: "Up to 2", pro: "Unlimited" },
  { feature: "Cloud Auto-Backup", free: "no", basic: "yes", pro: "yes" },
  { feature: "Shared Inventory", free: "no", basic: "yes", pro: "yes" },
  { feature: "Shared Billing & History", free: "no", basic: "yes", pro: "yes" },
  { feature: "Owner Monitoring", free: "no", basic: "Basic", pro: "Advanced" },
  { feature: "Staff Management", free: "no", basic: "no", pro: "yes" },
  { feature: "Staff Roles & Permissions", free: "no", basic: "no", pro: "yes" },
  { feature: "KOT / Kitchen Display", free: "no", basic: "no", pro: "yes" },
  { feature: "GST & Excel Reports", free: "no", basic: "no", pro: "yes" },
  { feature: "Advanced Analytics", free: "no", basic: "no", pro: "yes" },
  { feature: "Future AI Features", free: "no", basic: "no", pro: "yes" },
];

const policyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Refund Policy", href: "#refund-policy" },
  { label: "Contact Us", href: "#contact-us" },
  { label: "Privacy Policy", href: "#privacy-policy" },
  { label: "Delete Account", href: "/delete-account" },
];

const deletionData = [
  "account/profile data",
  "shop/business data",
  "product data",
  "customer/khata data",
  "billing/invoice data",
  "sales reports linked to the account",
];

const whatsappNumber = "917078399463";
const defaultDemoMessage = "Hi Vaibhav, I want to book a demo for Sanchay.";
const getWhatsAppLink = (message = defaultDemoMessage) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const fadeRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

const FeatureStatus = ({ value }) => {
  if (value === "yes") {
    return <CheckCircle2 size={18} className="mx-auto text-violet-400" />;
  }
  if (value === "no") {
    return <XCircle size={18} className="mx-auto text-neutral-600" />;
  }
  return (
    <span className="block text-center text-sm font-semibold text-violet-300">
      {value}
    </span>
  );
};

const SectionHeading = ({ badge, title, highlight, subtitle, children }) => (
  <motion.div className="text-center mb-16" {...fadeUp}>
    {badge && (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 border border-violet-500/20 bg-violet-500/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm text-violet-300 mb-6"
      >
        <Sparkles size={14} />
        {badge}
      </motion.span>
    )}
    <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 leading-tight">
      {children || title}
      {highlight && (
        <span className="block bg-gradient-to-r from-violet-400 via-violet-300 to-violet-400 bg-clip-text text-transparent">
          {highlight}
        </span>
      )}
    </h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-neutral-500 text-base max-w-2xl mx-auto mt-4 leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setRotateX((y - cy) / 18);
    setRotateY((cx - x) / 18);
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(139,92,246,0.12) 0%, transparent 70%)`,
        }}
      />
      <div style={{ transformStyle: "preserve-3d" }} className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

function ThermalPrinter() {
  const [phase, setPhase] = useState("idle");
  const billItems = [
    { item: "Premium Atta", qty: 2, price: 56 },
    { item: "Tata Salt", qty: 1, price: 18 },
    { item: "Fortune Oil", qty: 1, price: 195 },
    { item: "Sugar", qty: 3, price: 132 },
  ];
  const total = billItems.reduce((s, i) => s + i.qty * i.price, 0);

  const handleClick = () => {
    if (phase !== "idle") return;
    setPhase("printing");
    setTimeout(() => setPhase("done"), 2500);
  };

  const handleReset = () => {
    setPhase("idle");
  };

  return (
    <div className="dark flex flex-col items-center">
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: phase === "done" ? "auto" : phase === "printing" ? 260 : 0,
            opacity: phase !== "idle" ? 1 : 0,
          }}
          transition={{
            height: { duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { delay: 0.3, duration: 0.4 },
          }}
          className="overflow-hidden origin-bottom"
        >
            <div className="bg-neutral-100 text-neutral-900 rounded-t-lg px-5 py-4 w-56 shadow-lg relative">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-violet-400/40 to-transparent" />
            <div className="text-center border-b border-dashed border-neutral-300 pb-2 mb-2">
              <img
                src="/sanchay-logo.png"
                alt="Sanchay"
                className="w-5 h-5 mx-auto mb-1 rounded-sm"
              />
              <p className="text-xs font-extrabold tracking-wider">SANCHAY</p>
              <p className="text-[10px] text-neutral-500">Billing Software</p>
            </div>
            {phase === "done" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="text-[10px] font-semibold flex justify-between border-b border-dashed border-neutral-300 pb-1 mb-1">
                  <span>Item</span>
                  <span>Qty</span>
                  <span>Amt</span>
                </div>
                {billItems.map((row, i) => (
                  <motion.div
                    key={row.item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="text-[10px] flex justify-between py-0.5 text-neutral-700"
                  >
                    <span className="truncate w-20">{row.item}</span>
                    <span className="w-6 text-center">{row.qty}</span>
                    <span className="w-10 text-right">₹{row.qty * row.price}</span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="border-t border-dashed border-neutral-300 mt-1 pt-1 text-[10px] font-bold flex justify-between"
                >
                  <span>TOTAL</span>
                  <span>₹{total}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 }}
                  className="text-center mt-2 text-[8px] text-neutral-400"
                >
                  Thank you! Visit again
                </motion.div>
              </motion.div>
            )}
            {phase === "printing" && (
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-center text-[10px] text-violet-600 py-4"
              >
                Printing...
              </motion.div>
            )}
          </div>
        </motion.div>

        <motion.div
          onClick={handleClick}
          className="relative cursor-pointer select-none mt-0"
          whileHover={{ scale: phase === "idle" ? 1.04 : 1 }}
          whileTap={{ scale: phase === "idle" ? 0.97 : 1 }}
          animate={
            phase === "printing"
              ? { x: [0, -1.5, 1.5, -1.5, 1.5, -1, 1, 0] }
              : {}
          }
          transition={
            phase === "printing"
              ? { duration: 0.5, repeat: 2, ease: "easeInOut" }
              : {}
          }
        >
          <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute -inset-3 bg-violet-600/10 rounded-2xl blur-xl" />

            <div className="relative w-56 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-2xl border border-neutral-600 shadow-2xl overflow-hidden">
              <div className="h-3 bg-neutral-900 border-b border-neutral-600 flex items-center justify-center gap-6">
                <div className="w-1 h-1 rounded-full bg-red-400 shadow-sm shadow-red-400/50" />
                <div className="w-1 h-1 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
                <div className="w-1 h-1 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
              </div>

              <div className="px-5 py-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-violet-600/80 flex items-center justify-center text-[8px] font-black text-white overflow-hidden">
                      <img
                        src="/sanchay-logo.png"
                        alt="S"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold text-neutral-100 tracking-wide leading-none block">
                        SANCHAY
                      </span>
                      <span className="text-[7px] text-neutral-400 leading-none block -mt-0.5">
                        Billing Software
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded bg-emerald-500/80 shadow-sm shadow-emerald-500/30" />
                    <div className="w-3 h-3 rounded bg-neutral-600" />
                  </div>
                </div>

                <div className="bg-neutral-900 rounded-lg border border-neutral-600 p-3">
                  <div className="flex items-center justify-center gap-1.5">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2.5 h-6 rounded-sm bg-neutral-600"
                        style={{
                          opacity: 0.4 + Math.random() * 0.6,
                          height: `${4 + Math.random() * 5}px`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-3.5 rounded-sm bg-neutral-600 border border-neutral-500" />
                    <div className="w-6 h-3.5 rounded-sm bg-neutral-600 border border-neutral-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[6px] text-neutral-600 tracking-[0.15em] uppercase font-semibold">Sanchay™</span>
                    <div className="text-[10px] text-neutral-500 font-mono">
                      {phase === "idle" ? "IDLE" : phase === "printing" ? "PRINT" : "DONE"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-2 bg-neutral-900 border-t border-neutral-600 flex items-center justify-center">
                <span className="text-[6px] text-neutral-700 tracking-[0.2em] uppercase font-mono">Sanchay Billing</span>
              </div>
            </div>

            {phase === "idle" && (
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 border border-neutral-700 text-neutral-300 text-[10px] px-3 py-1.5 rounded-lg whitespace-nowrap"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: [0, 1, 1, 0], y: [5, 0, 0, -5] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                Click to print bill
              </motion.div>
            )}
          </div>
        </motion.div>

        {phase === "done" && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            onClick={handleReset}
            className="mt-4 text-[10px] text-violet-400 hover:text-violet-300 border border-violet-500/20 px-4 py-1.5 rounded-lg transition-colors"
          >
            Print Again
          </motion.button>
        )}
      </div>
    </div>
  );
}

const workflowSteps = [
  {
    title: "Add Products",
    render: (active) => (
      <div className="space-y-1.5">
        {["Rice 5kg", "Cooking Oil", "Sugar"].map((item, j) => (
          <motion.div
            key={item}
            initial={active ? { opacity: 0, x: -20, height: 0 } : false}
            animate={
              active
                ? { opacity: 1, x: 0, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            transition={{ delay: j * 0.25 + 0.2, duration: 0.4 }}
            className="flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-lg px-3 py-1.5"
          >
            <div className="w-4 h-4 rounded-full bg-emerald-500/30 flex items-center justify-center text-[8px] text-emerald-400 font-bold">+</div>
            <span className="text-[11px] text-neutral-300">{item}</span>
            <span className="text-[10px] text-neutral-500 ml-auto">₹{120 + j * 45}</span>
          </motion.div>
        ))}
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-[9px] text-emerald-400 font-semibold text-center pt-1"
          >
            ✓ 3 items added
          </motion.div>
        )}
      </div>
    ),
  },
  {
    title: "Scan Items",
    render: (active) => {
      const barRef = useRef(null);
      useEffect(() => {
        if (!active || !barRef.current) return;
        const el = barRef.current;
        el.style.top = "0%";
        const anim = el.animate(
          [{ top: "0%" }, { top: "100%" }],
          { duration: 1200, iterations: 1, easing: "ease-in-out" }
        );
        return () => anim.cancel();
      }, [active]);
      return (
        <div className="relative">
          <div className="bg-neutral-800 rounded-lg p-3 border border-neutral-700 overflow-hidden">
            <div className="flex items-center justify-center gap-1">
              {[...Array(16)].map((_, j) => (
                <div
                  key={j}
                  className="w-1.5 rounded-sm bg-neutral-500"
                  style={{ height: `${4 + Math.random() * 12}px`, opacity: 0.3 + Math.random() * 0.4 }}
                />
              ))}
            </div>
            {active && (
              <div ref={barRef} className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-lg shadow-red-500/50" style={{ top: "0%" }} />
            )}
          </div>
          {active && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 }}
              className="text-center mt-2"
            >
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full font-semibold">
                ✓ Barcode Scanned
              </span>
            </motion.div>
          )}
        </div>
      );
    },
  },
  {
    title: "Receive Payment",
    render: (active) => (
      <div className="text-center">
        {active ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 mx-auto flex items-center justify-center"
          >
            <CheckCircle2 size={28} className="text-emerald-400" />
          </motion.div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 mx-auto flex items-center justify-center">
            <CheckCircle2 size={28} className="text-neutral-600" />
          </div>
        )}
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-3 space-y-1"
          >
            <p className="text-lg font-bold text-emerald-400">₹1,280</p>
            <p className="text-[10px] text-emerald-400/70 font-medium">Payment Received</p>
          </motion.div>
        )}
        {!active && (
          <p className="text-[11px] text-neutral-500 mt-3">Click to receive</p>
        )}
      </div>
    ),
  },
  {
    title: "Print Receipt",
    render: (active) => (
      <div className="relative overflow-hidden">
        <motion.div
          initial={active ? { height: 0 } : false}
          animate={active ? { height: "auto" } : { height: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="bg-neutral-100 text-neutral-900 rounded-lg p-3 text-[9px] space-y-0.5 mb-2">
            <p className="text-center font-bold text-[8px] tracking-wider border-b border-dashed border-neutral-300 pb-1">SANCHAY</p>
            <div className="flex justify-between"><span>Rice 5kg</span><span>₹120</span></div>
            <div className="flex justify-between"><span>Oil</span><span>₹165</span></div>
            <div className="flex justify-between border-t border-dashed border-neutral-300 pt-0.5 font-bold"><span>TOTAL</span><span>₹285</span></div>
          </div>
        </motion.div>
        {active && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-[10px] text-violet-400 font-semibold text-center"
          >
            ✓ Receipt printed
          </motion.p>
        )}
        {!active && (
          <p className="text-[11px] text-neutral-500 text-center">Click to print</p>
        )}
      </div>
    ),
  },
];

function WorkflowCard({ step, index, stagger }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setActive(false), 3500);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <TiltCard>
      <motion.div
        onClick={() => setActive(true)}
        className="relative bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-7 hover:border-violet-500/20 transition-all duration-300 cursor-pointer min-h-[210px]"
        {...stagger}
        transition={{ ...stagger.transition, delay: index * 0.12 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="w-12 h-12 rounded-full bg-violet-600/10 text-violet-400 flex items-center justify-center text-lg font-bold mb-5"
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {index + 1}
        </motion.div>
        <h3 className="text-lg font-semibold mb-4">{step.title}</h3>
        {step.render(active)}
        {index !== 3 && (
          <motion.div
            className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight size={18} className="text-violet-400/60" />
          </motion.div>
        )}
      </motion.div>
    </TiltCard>
  );
}

function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[80px]"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[80px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Screenshots", href: "/screenshots" },
  { label: "Contact", href: "/contact" },
];

function Navbar({ mobileOpen, setMobileOpen, currentPath }) {
  const [scrolled, setScrolled] = useState(false);
  const { theme, resolved, toggleTheme } = useTheme();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ThemeIcon = theme === "system" ? Monitor : resolved === "dark" ? Moon : Sun;
  const activePath = currentPath ?? window.location.pathname;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 w-full z-50 px-4"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-5 md:px-7 transition-all duration-500 ${
          scrolled
            ? "h-16 bg-neutral-950/80 backdrop-blur-xl border border-neutral-800/80 shadow-2xl shadow-black/20"
            : "h-16 md:h-20 bg-neutral-950/40 backdrop-blur-sm border border-neutral-800/50"
        }`}
      >
        <motion.a
          href="/"
          className="flex items-center gap-3 relative"
          whileHover={{ scale: 1.03 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-1.5 bg-violet-600/20 rounded-xl blur-md"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src="/sanchay-logo.png"
              alt="logo"
              className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl"
              width="56"
              height="56"
            />
          </div>
          <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent">
            Sanchay
          </span>
        </motion.a>

        <div className="hidden md:flex items-center bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-xl px-2 py-1 gap-1">
          {navLinks.map((item, i) => {
            const isActive = activePath === item.href;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium px-4 py-2 rounded-lg border transition-all duration-300 ${
                  isActive
                    ? "text-violet-300 bg-violet-600/10 border-violet-500/20"
                    : "text-neutral-400 hover:text-neutral-100 hover:bg-violet-600/10 hover:border-violet-500/20 border-transparent"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                {item.label}
              </motion.a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-800/50 border border-neutral-700 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title={`Theme: ${theme}`}
          >
            <ThemeIcon size={18} />
          </motion.button>
          <motion.a
            href={getWhatsAppLink()}
            className="hidden md:inline-flex bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-600/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Demo
          </motion.a>
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-800/50 border border-neutral-700 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="md:hidden mt-2 rounded-2xl border border-neutral-800 bg-neutral-950/95 backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden"
        >
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((item) => {
              const isActive = activePath === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm font-medium px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "text-violet-300 bg-violet-600/10"
                      : "text-neutral-400 hover:text-neutral-100 hover:bg-violet-600/10"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-neutral-800 space-y-2">
              <button
                onClick={() => { toggleTheme(); setMobileOpen(false); }}
                className="flex items-center justify-center gap-2 w-full text-center text-sm font-medium text-neutral-400 hover:text-neutral-100 px-5 py-3 rounded-xl hover:bg-violet-600/10 transition-all"
              >
                <ThemeIcon size={16} />
                {theme === "system" ? "Auto" : resolved === "dark" ? "Dark" : "Light"} Mode
              </button>
              <a
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-sm font-medium text-neutral-400 hover:text-neutral-100 px-5 py-3 rounded-xl hover:bg-violet-600/10 transition-all"
              >
                See Features
              </a>
              <a
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold px-5 py-3 rounded-xl"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export {
  IMG_VERSION,
  screenshots,
  features,
  upcoming,
  techStack,
  pricingPlans,
  comparisonRows,
  policyLinks,
  deletionData,
  whatsappNumber,
  defaultDemoMessage,
  getWhatsAppLink,
  workflowSteps,
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  stagger,
  FeatureStatus,
  SectionHeading,
  TiltCard,
  ThermalPrinter,
  WorkflowCard,
  FloatingOrbs,
  Navbar,
};
