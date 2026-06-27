import { useEffect } from "react";
import HomePage from "./pages/Home.jsx";
import PricingPage from "./pages/Pricing.jsx";
import ScreenshotsPage from "./pages/Screenshots.jsx";
import ContactPage from "./pages/Contact.jsx";
import DeleteAccountPage from "./pages/DeleteAccount.jsx";

const pages = {
  "/": HomePage,
  "/pricing": PricingPage,
  "/screenshots": ScreenshotsPage,
  "/contact": ContactPage,
  "/delete-account": DeleteAccountPage,
};

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const Page = pages[path] || HomePage;

  useEffect(() => {
    const titles = {
      "/": "Sanchay Billing Software",
      "/pricing": "Pricing – Sanchay Billing Software",
      "/screenshots": "Screenshots – Sanchay Billing Software",
      "/contact": "Contact – Sanchay Billing Software",
      "/delete-account": "Sanchay Billing Software – Account Deletion",
    };
    document.title = titles[path] || "Sanchay Billing Software";
  }, [path]);

  return <Page currentPath={path} />;
}
