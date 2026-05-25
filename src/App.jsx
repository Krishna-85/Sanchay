// src/App.jsx

import { useEffect, useState } from "react";
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
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const screenshots = [
  "/optimized/Screenshot_20260514_130702.webp",
  "/optimized/Screenshot_20260514_130923.webp",
  "/optimized/Screenshot_20260514_131059.webp",
  "/optimized/Screenshot_20260514_131116.webp",
  "/optimized/Screenshot_20260514_131147.webp",
  "/optimized/Screenshot_20260514_131156.webp",
  "/optimized/Screenshot_20260514_131209.webp",
  "/optimized/Screenshot_20260514_131226.webp",
  "/optimized/Screenshot_20260514_131239.webp",
  "/optimized/Screenshot_20260514_131310.webp",
  "/optimized/Screenshot_20260514_131330.webp",
  "/optimized/Screenshot_20260514_131348.webp",
];

const features = [
  {
    icon: <Receipt size={30} />,
    title: "Smart Billing",
    desc: "Fast billing with QR payments, printable receipts and smooth checkout flow.",
  },
  {
    icon: <Boxes size={30} />,
    title: "Inventory Management",
    desc: "Track stock, product pricing, low stock alerts and barcode scanning.",
  },
  {
    icon: <Users size={30} />,
    title: "Customer Credit",
    desc: "Manage customer balances, credit history and payment collection.",
  },
  {
    icon: <BarChart3 size={30} />,
    title: "Reports & Analytics",
    desc: "Professional reports, revenue analytics and payment insights.",
  },
  {
    icon: <QrCode size={30} />,
    title: "UPI Payments",
    desc: "Integrated UPI QR support for faster and secure digital payments.",
  },
  {
    icon: <Printer size={30} />,
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
      "Device Limit: Unlimited devices support.",
    ],
  },
];

const comparisonRows = [
  {
    feature: "Offline Billing",
    free: "yes",
    basic: "yes",
    pro: "yes",
  },
  {
    feature: "Product Management",
    free: "yes",
    basic: "yes",
    pro: "yes",
  },
  {
    feature: "Device Sync",
    free: "no",
    basic: "Up to 2",
    pro: "Unlimited",
  },
  {
    feature: "Cloud Auto-Backup",
    free: "no",
    basic: "yes",
    pro: "yes",
  },
  {
    feature: "Shared Inventory",
    free: "no",
    basic: "yes",
    pro: "yes",
  },
  {
    feature: "Shared Billing & History",
    free: "no",
    basic: "yes",
    pro: "yes",
  },
  {
    feature: "Owner Monitoring",
    free: "no",
    basic: "Basic",
    pro: "Advanced",
  },
  {
    feature: "Staff Management",
    free: "no",
    basic: "no",
    pro: "yes",
  },
  {
    feature: "Staff Roles & Permissions",
    free: "no",
    basic: "no",
    pro: "yes",
  },
  {
    feature: "KOT / Kitchen Display",
    free: "no",
    basic: "no",
    pro: "yes",
  },
  {
    feature: "GST & Excel Reports",
    free: "no",
    basic: "no",
    pro: "yes",
  },
  {
    feature: "Advanced Analytics",
    free: "no",
    basic: "no",
    pro: "yes",
  },
  {
    feature: "Future AI Features",
    free: "no",
    basic: "no",
    pro: "yes",
  },
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

const defaultDemoMessage =
  "Hi Vaibhav, I want to book a demo for Sanchay.";

const getWhatsAppLink = (message = defaultDemoMessage) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const FeatureStatus = ({ value }) => {
  if (value === "yes") {
    return (
      <CheckCircle2
        size={20}
        className="mx-auto text-green-400"
        aria-label="Included"
      />
    );
  }

  if (value === "no") {
    return (
      <XCircle
        size={20}
        className="mx-auto text-red-400"
        aria-label="Not included"
      />
    );
  }

  return (
    <span className="block text-center text-sm font-semibold text-gray-200">
      {value}
    </span>
  );
};

function HomePage() {
  const [demoForm, setDemoForm] = useState({
    name: "",
    business: "",
    phone: "",
    requirement: "",
  });

  const handleDemoChange = (event) => {
    const { name, value } = event.target;
    setDemoForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleDemoSubmit = (event) => {
    event.preventDefault();

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
    <div className="bg-[#0b0717] text-white overflow-x-hidden">

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <img
              src="/optimized/sanchay-logo.webp"
              alt="logo"
              className="w-12 h-12 rounded-xl"
              width="48"
              height="48"
            />

            <h2 className="text-2xl font-bold">
              Sanchay
            </h2>

          </div>

          <div className="hidden md:flex items-center gap-10 text-gray-300">

            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>

            <a href="#screenshots" className="hover:text-white transition">
              Screenshots
            </a>

            <a href="#tech" className="hover:text-white transition">
              Technology
            </a>

            <a href="#roadmap" className="hover:text-white transition">
              Roadmap
            </a>

          </div>

          <a
            href={getWhatsAppLink()}
            className="hidden md:block bg-gradient-to-r from-purple-500 to-indigo-500 px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Book a Demo
          </a>

          <button className="md:hidden">
            <Menu />
          </button>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section className="relative overflow-hidden min-h-screen flex items-center">

        <div className="absolute inset-0 bg-black"></div>

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-[#140b2d] to-indigo-900 opacity-95"></div>

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/30 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-white mb-8">

              <ShieldCheck size={18} />

              India's Modern Billing Solution

            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">

              Smart Billing

              <span className="block text-purple-400">
                For Modern Shops
              </span>

            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl">

              Sanchay is a premium business billing and management platform
              designed for Indian stores, restaurants and retail businesses.
              Manage inventory, billing, QR payments, reports and customer
              credits from one powerful app.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href={getWhatsAppLink()}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 rounded-2xl text-white font-semibold shadow-2xl hover:scale-105 transition"
              >

                Book a Demo

              </a>

              <a
                href="#book-demo"
                className="border border-white/20 backdrop-blur-xl px-8 py-4 rounded-2xl text-white hover:bg-white/10 transition"
              >

                Book a Demo

              </a>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-14">

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

                <h2 className="text-white text-3xl font-bold">
                  100%
                </h2>

                <p className="text-gray-300 mt-2 text-sm">
                  Offline Ready
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

                <h2 className="text-white text-3xl font-bold">
                  Fast
                </h2>

                <p className="text-gray-300 mt-2 text-sm">
                  Billing Flow
                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5">

                <h2 className="text-white text-3xl font-bold">
                  Smart
                </h2>

                <p className="text-gray-300 mt-2 text-sm">
                  Reports
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute w-[350px] h-[350px] bg-purple-500/30 rounded-full blur-[120px]"></div>

            <img
              src="/optimized/Screenshot_20260514_130702.webp"
              alt="dashboard"
              className="relative w-[290px] md:w-[360px] rounded-[45px] border-[12px] border-black shadow-[0_40px_100px_rgba(139,92,246,0.5)]"
              width="420"
              height="930"
              fetchPriority="high"
            />

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-28 bg-[#120c23]"
      >

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">

          <div>

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-white mb-8">

              <ShieldCheck size={18} />

              About Sanchay

            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">
              Built For
              <span className="block text-purple-400">
                Indian Businesses
              </span>
            </h2>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">

            <p className="text-gray-300 leading-8 text-lg">
              Sanchay is a leading offline-first billing and Point of Sale
              (POS) solution designed specifically for Indian small and medium
              businesses. Our mission is to simplify business management by
              providing powerful tools that work even without the internet.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              Developed by Sanchay, by Vaibhav Chauhan, Sanchay empowers shop
              owners to manage inventory, generate GST-compliant bills, and
              track sales performance with ease. We believe that technology
              should be an enabler, not a hurdle, which is why Sanchay offers a
              clean, intuitive interface that anyone can use.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-6">
              From local Kirana stores to growing retail chains, Sanchay is the
              trusted partner for thousands of businesses across India.
            </p>

          </div>

        </div>

      </section>

      {/* PRICING */}

      <section
        id="pricing"
        className="max-w-7xl mx-auto px-6 py-28"
      >

        <div className="text-center mb-16">

          <h2 className="text-5xl md:text-6xl font-black mb-5">
            Pricing
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Clear yearly plans for shops that need offline billing, secure
            cloud backup, device sync, staff tools, and business reports.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {pricingPlans.map((plan) => (

            <div
              key={plan.name}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_20px_80px_rgba(139,92,246,0.12)]"
            >

              <h3 className="text-3xl font-black">
                {plan.name}
              </h3>

              <p className="text-purple-300 font-semibold mt-3">
                {plan.focus}
              </p>

              <div className="mt-6 flex items-end gap-3">

                <span className="text-5xl font-black text-purple-400">
                  {plan.price}
                </span>

                <span className="text-gray-400 pb-2">
                  {plan.period}
                </span>

              </div>

              <div className="space-y-4 mt-8">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-start gap-3 text-gray-300"
                  >

                    <CheckCircle2 className="text-purple-400 shrink-0 mt-1" />

                    <span className="leading-7">{feature}</span>

                  </div>

                ))}

              </div>

              <a
                href={getWhatsAppLink(`Hi Vaibhav, I want to know more about the ${plan.name} plan for Sanchay.`)}
                className="inline-block mt-9 w-full text-center bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 rounded-2xl text-white font-bold shadow-2xl hover:scale-[1.02] transition"
              >
                Choose Plan
              </a>

            </div>

          ))}

        </div>

        <div className="mt-16">

          <div className="mb-6">

            <h3 className="text-3xl md:text-4xl font-black">
              Plan Comparison
            </h3>

            <p className="text-gray-400 mt-3">
              Compare Free, Basic Sync, and Pro Business features at a glance.
            </p>

          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">

            <table className="w-full min-w-[760px] border-collapse text-left">

              <thead className="bg-white/10">

                <tr>

                  <th className="w-[34%] border-b border-r border-white/10 px-5 py-5 text-base font-bold">
                    Features
                  </th>

                  <th className="border-b border-r border-white/10 px-5 py-5 text-center text-base font-bold">
                    Free Plan
                  </th>

                  <th className="border-b border-r border-white/10 px-5 py-5 text-center text-base font-bold">
                    Basic Sync
                    <span className="block text-purple-300">
                      (₹699)
                    </span>
                  </th>

                  <th className="border-b border-white/10 px-5 py-5 text-center text-base font-bold">
                    Pro Business
                    <span className="block text-purple-300">
                      (₹1299)
                    </span>
                  </th>

                </tr>

              </thead>

              <tbody>

                {comparisonRows.map((row) => (

                  <tr
                    key={row.feature}
                    className="odd:bg-black/10"
                  >

                    <td className="border-r border-t border-white/10 px-5 py-4 font-semibold text-gray-100">
                      {row.feature}
                    </td>

                    <td className="border-r border-t border-white/10 px-5 py-4">
                      <FeatureStatus value={row.free} />
                    </td>

                    <td className="border-r border-t border-white/10 px-5 py-4">
                      <FeatureStatus value={row.basic} />
                    </td>

                    <td className="border-t border-white/10 px-5 py-4">
                      <FeatureStatus value={row.pro} />
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* BOOK A DEMO FORM */}

      <section
        id="book-demo"
        className="py-28 bg-[#120c23]"
      >

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">

          <div>

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-white mb-8">

              <PhoneCall size={18} />

              Quick Demo Booking

            </div>

            <h2 className="text-5xl md:text-6xl font-black leading-tight">

              Book Your
              <span className="block text-purple-400">
                Sanchay Demo
              </span>

            </h2>

            <p className="text-gray-300 text-lg leading-8 mt-8 max-w-xl">

              Share your business details and what you want to explore. Your
              filled details will open directly in WhatsApp with Vaibhav's chat.

            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <CalendarCheck className="text-purple-400 mb-4" />

                <h3 className="text-xl font-bold">
                  Fast Scheduling
                </h3>

                <p className="text-gray-400 mt-3">
                  Book a demo with your shop or business requirement.
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                <MessageCircle className="text-purple-400 mb-4" />

                <h3 className="text-xl font-bold">
                  WhatsApp Booking
                </h3>

                <p className="text-gray-400 mt-3">
                  Submit the form and continue the conversation instantly.
                </p>

              </div>

            </div>

          </div>

          <form
            onSubmit={handleDemoSubmit}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-[0_20px_80px_rgba(139,92,246,0.16)]"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <label className="space-y-3">
                <span className="text-sm font-semibold text-gray-300">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={demoForm.name}
                  onChange={handleDemoChange}
                  placeholder="Your name"
                  className="w-full rounded-2xl bg-black/30 border border-white/10 px-5 py-4 text-white outline-none focus:border-purple-400"
                />
              </label>

              <label className="space-y-3">
                <span className="text-sm font-semibold text-gray-300">
                  Business Name
                </span>
                <input
                  type="text"
                  name="business"
                  value={demoForm.business}
                  onChange={handleDemoChange}
                  placeholder="Shop or company"
                  className="w-full rounded-2xl bg-black/30 border border-white/10 px-5 py-4 text-white outline-none focus:border-purple-400"
                />
              </label>

            </div>

            <label className="block space-y-3 mt-5">
              <span className="text-sm font-semibold text-gray-300">
                Phone Number
              </span>
              <input
                type="tel"
                name="phone"
                value={demoForm.phone}
                onChange={handleDemoChange}
                placeholder="Your WhatsApp number"
                className="w-full rounded-2xl bg-black/30 border border-white/10 px-5 py-4 text-white outline-none focus:border-purple-400"
              />
            </label>

            <label className="block space-y-3 mt-5">
              <span className="text-sm font-semibold text-gray-300">
                Requirement
              </span>
              <textarea
                name="requirement"
                value={demoForm.requirement}
                onChange={handleDemoChange}
                placeholder="Tell us what you want to see in the demo"
                rows={5}
                className="w-full resize-none rounded-2xl bg-black/30 border border-white/10 px-5 py-4 text-white outline-none focus:border-purple-400"
              />
            </label>

            <button
              type="submit"
              className="mt-7 w-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 rounded-2xl text-white font-bold shadow-2xl hover:scale-[1.02] transition"
            >
              Book a Demo on WhatsApp
            </button>

          </form>

        </div>

      </section>

      {/* FEATURES */}

      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-28"
      >

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black mb-5">

            Powerful Features

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">

            Everything you need to manage your business, billing,
            inventory and customer operations.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, i) => (

            <div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-[0_20px_80px_rgba(139,92,246,0.12)] hover:shadow-[0_20px_100px_rgba(139,92,246,0.25)] hover:-translate-y-3 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center mb-6">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="py-28 bg-[#120c23]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-black mb-5">
              How Sanchay Works
            </h2>

            <p className="text-gray-400 text-lg">
              Simple and powerful workflow for modern businesses.
            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Add Products",
              "Scan Items",
              "Receive Payment",
              "Print Receipt",
            ].map((step, i) => (

              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 relative"
              >

                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-2xl font-bold mb-6">

                  {i + 1}

                </div>

                <h3 className="text-2xl font-bold">
                  {step}
                </h3>

                {i !== 3 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 text-purple-500" />
                )}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SCREENSHOTS */}

      <section
        id="screenshots"
        className="py-28 bg-[#0b0717] overflow-hidden"
      >

        <div className="text-center mb-20 px-6">

          <h2 className="text-5xl md:text-6xl font-black text-white">

            Experience Sanchay

          </h2>

          <p className="text-gray-400 text-lg mt-5">

            Beautiful modern UI crafted for speed and simplicity.

          </p>

        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="pb-20"
        >

          {screenshots.map((shot, i) => (

            <SwiperSlide
              key={i}
              className="!w-[260px] md:!w-[320px]"
            >

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-3 rounded-[40px] shadow-[0_20px_80px_rgba(139,92,246,0.25)]">

                <img
                  src={shot}
                  alt="app screenshot"
                  className="rounded-[30px]"
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  width="420"
                  height="930"
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </section>

      {/* TECH STACK */}

      <section
        id="tech"
        className="py-28 bg-gradient-to-r from-purple-900 to-indigo-900"
      >

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-20">

            <h2 className="text-5xl md:text-6xl font-black mb-5">

              Built With Modern Tech

            </h2>

            <p className="text-purple-100 text-lg">

              Fast, scalable and future-ready architecture.

            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {techStack.map((tech, i) => (

              <div
                key={i}
                className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 flex items-center gap-5"
              >

                <ShieldCheck size={30} />

                <span className="text-xl font-semibold">
                  {tech}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ROADMAP */}

      <section
        id="roadmap"
        className="max-w-7xl mx-auto px-6 py-28"
      >

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black mb-5">

            Upcoming Features

          </h2>

          <p className="text-gray-400 text-lg">

            Future roadmap for Sanchay platform.

          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {upcoming.map((item, i) => (

            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 flex items-center gap-5"
            >

              <CheckCircle2 className="text-purple-400" />

              <span className="text-lg">
                {item}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* POLICIES */}

      <section
        id="refund-policy"
        className="py-28 bg-[#120c23]"
      >

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Refund and Cancellation Policy
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            At Sanchay, we value our customers' satisfaction. Since we provide a
            digital SaaS (Software as a Service) product, our policy is as
            follows:
          </p>

          <div className="space-y-5">

            {[
              "Cancellation: You can cancel your subscription at any time from the app settings. Once cancelled, you will continue to have access to the premium features until the end of your current billing cycle, monthly or yearly.",
              "Refunds: We offer a 7-day money-back guarantee for first-time subscribers. If you are not satisfied with our Pro features, you can request a full refund within 7 days of your initial purchase.",
              "Post 7 Days: No refunds will be provided after 7 days of purchase. However, your service will remain active until the subscription period expires.",
              "How to request a refund: Please email us at connecttsanchay@gmail.com with your registered mobile number and payment receipt. Refunds are processed within 5-7 working days to the original payment source.",
            ].map((item) => (

              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 flex gap-4"
              >

                <CheckCircle2 className="text-purple-400 shrink-0 mt-1" />

                <p className="text-gray-300 leading-8">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section
        id="contact-us"
        className="max-w-7xl mx-auto px-6 py-28"
      >

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">

          <div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Contact Us
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              If you have any questions, feedback, or need support, we are here
              to help.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-5">

            {[
              ["Registered Business Name", "Chandrapal Singh"],
              ["Support Email", "connecttsanchay@gmail.com"],
              ["Phone Number", "+91 7078399463"],
              ["Business Address", "Chakarnagar, Etawah, Uttar Pradesh - 206125"],
              ["Operating Hours", "Monday to Saturday, 10:00 AM to 6:00 PM"],
            ].map(([label, value]) => (

              <div
                key={label}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
                  {label}
                </p>

                <p className="text-xl font-bold mt-3 leading-8">
                  {value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section
        id="privacy-policy"
        className="py-28 bg-[#120c23]"
      >

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Privacy Policy
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            Sanchay ("we", "our", or "us") is committed to protecting your
            business data.
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            {[
              ["Data Collection", "We collect your business name, contact details, and inventory data solely to provide billing and sync services."],
              ["Data Security", "Your data is encrypted and stored securely on Supabase cloud servers. Local data on your device is also encrypted."],
              ["Third Parties", "We do not sell or share your business data with any third-party marketing agencies. We only share necessary data with Razorpay to process your payments securely."],
              ["User Control", "You have full control over your data and can request account deletion at any time through the app."],
            ].map(([title, desc]) => (

              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >

                <h3 className="text-2xl font-bold">
                  {title}
                </h3>

                <p className="text-gray-300 leading-8 mt-4">
                  {desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 pb-28">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[50px] p-10 md:p-20 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[120px]"></div>

          <div className="relative z-10 text-center">

            <h2 className="text-5xl md:text-6xl font-black leading-tight">

              Ready To Grow
              <br />
              Your Business?

            </h2>

            <p className="text-purple-100 text-lg mt-8 max-w-2xl mx-auto leading-8">

              Join the next generation of smart shop owners using
              Sanchay for billing, payments and inventory management.

            </p>

            <a
              href={getWhatsAppLink()}
              className="inline-block mt-10 bg-white text-purple-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition"
            >

              Book a Demo

            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-4 gap-14">

            <div>

              <div className="flex items-center gap-4 mb-6">

                <img
                  src="/optimized/sanchay-logo.webp"
                  alt="Sanchay logo"
                  className="w-16 h-16 rounded-2xl"
                  loading="lazy"
                  decoding="async"
                  width="64"
                  height="64"
                />

                <div>

                  <h2 className="text-3xl font-bold">
                    Sanchay
                  </h2>

                  <p className="text-gray-400">
                    Billing. Manage. Grow.
                  </p>

                </div>

              </div>

              <p className="text-gray-400 leading-8">

                Premium billing and management platform built for
                modern Indian businesses.

              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-6">
                Company
              </h3>

              <div className="space-y-4 text-gray-400">

                {policyLinks.map((link) => (

                  <a
                    key={link.href}
                    href={link.href}
                    className="block hover:text-white transition"
                  >
                    {link.label}
                  </a>

                ))}

              </div>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-6">
                Features
              </h3>

              <div className="space-y-4 text-gray-400">

                <p>Inventory Management</p>
                <p>QR Billing</p>
                <p>Reports & Analytics</p>
                <p>Customer Credit</p>
                <p>Thermal Printing</p>

              </div>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-6">
                Technology
              </h3>

              <div className="space-y-4 text-gray-400">

              <p>Flutter (Framework)</p>
<p>Hive (Offline Database)</p>
<p>Firebase Auth (User Tracking)</p>
<p>BLoC (State Management)</p>
<p>Bluetooth Thermal Printing</p>
<p>PDF Reports & Analytics</p>
<p>WhatsApp & UPI Integration</p>

              </div>

            </div>

          </div>

          <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between gap-5">

            <p className="text-gray-500">

              © 2026 Sanchay. All Rights Reserved.

            </p>

            <p className="text-gray-500">

              Designed & Developed by Vaibhav Chauhan

            </p>

          </div>

        </div>

      </footer>

      {/* FLOATING BUTTON */}

      <a
        href={getWhatsAppLink()}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-4 rounded-2xl shadow-[0_20px_60px_rgba(139,92,246,0.5)] flex items-center gap-3 hover:scale-105 transition z-50"
      >

        <Smartphone />

        <span className="hidden md:block">
          Book Demo
        </span>

      </a>

    </div>
  );
}

function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-[#0b0717] text-white">
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-5">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/optimized/sanchay-logo.webp"
              alt="Sanchay logo"
              className="w-12 h-12 rounded-xl"
              width="48"
              height="48"
            />
            <span className="text-2xl font-bold">Sanchay</span>
          </a>

          <a
            href="/"
            className="text-sm font-semibold text-gray-300 hover:text-white transition"
          >
            Back to Home
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <section className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-2 rounded-full text-white mb-8">
              <ShieldCheck size={18} />
              Sanchay Apps
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Sanchay Billing Software
              <span className="block text-purple-400">
                Account Deletion
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-8 mt-7">
              This page explains how users of Sanchay Billing Software,
              developed by Sanchay Apps, can request deletion of their account
              and associated app data.
            </p>

            <div className="mt-9 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">
                How to delete your account
              </h2>
              <div className="space-y-5 text-gray-300 leading-8">
                <p>
                  You can delete your account directly from the Sanchay Billing
                  Software app by tapping the{" "}
                  <span className="font-semibold text-white">
                    Delete My Account
                  </span>{" "}
                  button, typing{" "}
                  <span className="font-semibold text-white">DELETE</span> to
                  confirm, and submitting the request. Your account will then be
                  deleted.
                </p>
                <p>
                  You can also email us at{" "}
                  <a
                    href="mailto:connectsanchay@gmail.com?subject=Delete%20my%20Sanchay%20account"
                    className="text-purple-300 font-semibold hover:text-purple-200"
                  >
                    connectsanchay@gmail.com
                  </a>{" "}
                  with the subject{" "}
                  <span className="font-semibold text-white">
                    "Delete my Sanchay account"
                  </span>
                  . Please include your registered Google/email account so we
                  can verify and process the request.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: <Trash2 className="text-purple-300" />,
                title: "Option 1: Delete from the app",
                desc: "Open the Sanchay Billing Software app, tap Delete My Account, type DELETE to confirm, and submit the request.",
              },
              {
                icon: <Mail className="text-purple-300" />,
                title: "Option 2: Email us",
                desc: "Send your deletion request to connectsanchay@gmail.com with the required subject and registered Google/email account.",
              },
              {
                icon: <UserCheck className="text-purple-300" />,
                title: "Account and associated data are deleted",
                desc: "After confirmation or verification, your account and associated data are removed from active systems.",
              },
            ].map((step) => (
              <article
                key={step.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{step.title}</h2>
                  <p className="text-gray-300 leading-7 mt-2">{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8 mt-14">
          <div className="bg-[#120c23] border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-black mb-6">
              Data that will be deleted
            </h2>

            <div className="space-y-4">
              {deletionData.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-purple-400 shrink-0 mt-1" />
                  <p className="text-gray-300 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#120c23] border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-3xl font-black mb-6">Retention</h2>

            <p className="text-gray-300 text-lg leading-8">
              Some data may be retained for up to 30 days for backup, security,
              fraud prevention, or legal compliance. After this retention
              period, eligible deleted data is removed according to our data
              deletion process.
            </p>

            <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-300">
                Support Email
              </p>
              <a
                href="mailto:connectsanchay@gmail.com?subject=Delete%20my%20Sanchay%20account"
                className="block text-xl md:text-2xl font-bold mt-3 break-words hover:text-purple-200"
              >
                connectsanchay@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-gray-500">
          <p>© 2026 Sanchay Apps. All Rights Reserved.</p>
          <a href="/" className="hover:text-white transition">
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
