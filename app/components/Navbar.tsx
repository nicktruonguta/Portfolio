"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-5 inset-x-0 flex justify-center z-50 px-4">
      <nav className="flex items-center gap-1 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/60 dark:border-white/10 rounded-full px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white px-4 py-1.5 mr-2"
        >
          portfolio<span className="text-indigo-500">.</span>
        </Link>

        {/* Divider */}
        <div className="w-px h-4 bg-zinc-200 dark:bg-white/10 mr-2" />

        {/* Links */}
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active
                  ? "text-zinc-900 dark:text-white bg-white dark:bg-white/10 shadow-sm"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          );
        })}

        {/* CTA */}
        <div className="w-px h-4 bg-zinc-200 dark:bg-white/10 ml-2" />
        <Link
          href="/contact"
          className="ml-2 px-4 py-1.5 rounded-full text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors duration-200"
        >
          Hire me
        </Link>
      </nav>
    </div>
  );
}
