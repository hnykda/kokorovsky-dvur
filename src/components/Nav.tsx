"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/historie", label: "Historie" },
  { href: "/obnova", label: "Obnova" },
  { href: "/zluticky-zamek", label: "Žlutický zámek" },
  { href: "/chci-prispet", label: "Chci přispět" },
  { href: "/aktuality", label: "Aktuality" },
  { href: "/partneri", label: "Partneři" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled && !mobileOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-cream/96 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo-simple-rounded.png"
            alt="Kokořovský dvůr"
            width={42}
            height={42}
            className="rounded-full transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className={`font-serif font-bold text-lg leading-tight transition-colors duration-300 hidden sm:block ${
              isTransparent ? "text-white" : "text-primary"
            }`}
          >
            Kokořovský dvůr
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-sans text-sm relative pb-0.5 transition-colors duration-300 group ${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-text-dark hover:text-primary"
                } ${pathname === href ? (isTransparent ? "text-white" : "text-primary") : ""}`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-accent transition-all duration-300 ${
                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className="lg:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Zavřít menu" : "Otevřít menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
              isTransparent ? "bg-white" : "bg-primary"
            } ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isTransparent ? "bg-white" : "bg-primary"
            } ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 origin-center ${
              isTransparent ? "bg-white" : "bg-primary"
            } ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-cream border-t border-primary/10"
          >
            <ul className="py-3">
              {navLinks.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={href}
                    className={`block px-7 py-3 font-sans text-sm transition-colors hover:bg-primary/5 hover:text-primary ${
                      pathname === href
                        ? "text-primary font-semibold border-l-2 border-accent pl-[26px]"
                        : "text-text-dark"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
