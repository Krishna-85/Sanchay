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
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
  "Cloud Backup & Sync",
  "GST Billing",
  "Employee Management",
  "Advanced Dashboard",
  "WhatsApp Automation",
  "Dark Mode",
  "AI Analytics",
  "Online Orders",
];

const techStack = [
  "React Native",
  "Supabase",
  "Bluetooth Printing",
  "QR Scanner",
  "PDF Reports",
  "UPI Integration",
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

const SectionHeading = ({ badge, title, highlight, subtitle }) => (
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
      {title}
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
    <div className="flex flex-col items-center">
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
        className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Navbar({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {["Features", "Pricing", "Screenshots", "Technology", "Roadmap"].map(
            (item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-neutral-400 hover:text-neutral-100 px-4 py-2 rounded-lg hover:bg-violet-600/10 hover:border-violet-500/20 border border-transparent transition-all duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                {item}
              </motion.a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
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
            {["Features", "Pricing", "Screenshots", "Technology", "Roadmap"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-neutral-400 hover:text-neutral-100 px-4 py-3 rounded-xl hover:bg-violet-600/10 transition-all"
                >
                  {item}
                </a>
              )
            )}
            <div className="pt-2 mt-2 border-t border-neutral-800">
              <a
                href={getWhatsAppLink()}
                className="block text-center bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold px-5 py-3 rounded-xl mt-2"
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

function HomePage() {
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
    window.location.href = getWhatsAppLink(message);
  };

  return (
    <div className="bg-neutral-950 text-neutral-100 overflow-x-hidden" style={{ perspective: "2000px" }}>
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

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
                href={getWhatsAppLink()}
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
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-violet-500/10 to-transparent rounded-[48px] blur-3xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-6 right-10 w-24 h-24 bg-violet-500/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 left-10 w-20 h-20 bg-indigo-500/10 rounded-full blur-2xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
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
                    style={{ filter: "contrast(1.08) saturate(1.08) brightness(1.02)" }}
                    fetchPriority="high"
                    decoding="sync"
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

          <div className="grid md:grid-cols-4 gap-5">
            {workflowSteps.map((step, i) => (
              <WorkflowCard key={step.title} step={step} index={i} stagger={stagger} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24">
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
                      href={getWhatsAppLink(
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

      <section id="screenshots" className="py-24 overflow-hidden">
        <div className="px-6 mb-16">
          <SectionHeading
            badge="Gallery"
            subtitle="Beautiful modern UI crafted for speed and simplicity."
          >
            Experience Sanchay
          </SectionHeading>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="pb-14"
        >
          {screenshots.map((shot, i) => (
            <SwiperSlide key={i} className="!w-[240px] md:!w-[290px]">
              <motion.div
                className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 p-2 rounded-[28px] hover:border-violet-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <img
                  src={shot}
                  alt="app screenshot"
                  className="rounded-[22px]"
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  width="420"
                  height="930"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
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

      <section id="roadmap" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            badge="Roadmap"
            subtitle="Future roadmap for Sanchay platform."
          >
            Upcoming Features
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {upcoming.map((item, i) => (
              <TiltCard key={i}>
                <motion.div
                  className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 rounded-xl p-5 flex items-center gap-4 hover:border-violet-500/20 transition-all duration-300"
                  {...stagger}
                  transition={{ ...stagger.transition, delay: i * 0.06 }}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <CheckCircle2 size={18} className="text-violet-400 shrink-0" />
                  </motion.div>
                  <span className="text-sm text-neutral-300">{item}</span>
                </motion.div>
              </TiltCard>
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
                  href={getWhatsAppLink()}
                  className="bg-violet-600 hover:bg-violet-500 text-white font-semibold px-7 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-600/25 inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <MessageCircle size={16} />
                  Book a Demo
                </motion.a>
                <motion.a
                  href="#features"
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

      <motion.a
        href={getWhatsAppLink()}
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

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const isDeleteAccountPage = path === "/delete-account";

  useEffect(() => {
    document.title = isDeleteAccountPage
      ? "Sanchay Billing Software – Account Deletion"
      : "Sanchay Billing Software";
  }, [isDeleteAccountPage]);

  return isDeleteAccountPage ? <DeleteAccountPage /> : <HomePage />;
}
