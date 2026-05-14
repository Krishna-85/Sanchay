// src/App.jsx

import React, { useState } from "react";
import {
  ShieldCheck,
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

const whatsappNumber = "917078399463";

const defaultDemoMessage =
  "Hi Vaibhav, I want to book a demo for Sanchay.";

const getWhatsAppLink = (message = defaultDemoMessage) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function App() {
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

          <div className="grid md:grid-cols-3 gap-14">

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
