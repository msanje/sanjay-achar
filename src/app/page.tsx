"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MessageSquare, Moon, Sun } from "lucide-react";

// Monochrome-first with tasteful grays + gradients, subtle patterns, and theme switch.
// Single-file, no extra deps. Tailwind only.

export default function Home() {
  // --- Theme state & persistence ---
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    // Initialize from localStorage or system preference
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const socials = [
    { Icon: Github, href: "https://github.com/msanje", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/m-sanjay-achar", label: "LinkedIn" },
    { Icon: Twitter, href: "https://x.com/msanjayachar", label: "Twitter / X" },
    { Icon: Mail, href: "mailto:m.sanjayachar@gmail.com", label: "Email" },
    {
      Icon: MessageSquare,
      href: `https://discord.com/users/${process.env.NEXT_PUBLIC_DISCORD_USER_ID ?? ""}`,
      label: "Discord",
    },
  ];

  const nav = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    // Root applies theme classes via html.dark toggle above
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white relative overflow-hidden">
      {/* --- Decorative background layers (very subtle) --- */}
      {/* Soft vignette gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(0,0,0,0.08),transparent_70%)] dark:bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(255,255,255,0.08),transparent_70%)]"
      />
      {/* Dotted grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15] dark:opacity-[0.12] [background-size:22px_22px] [background-image:radial-gradient(currentColor_0.8px,transparent_0.8px)] text-black/60 dark:text-white/60"
      />
      {/* Angle gradient sweep */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 left-1/2 -translate-x-1/2 h-[70vh] w-[120vw] rotate-12 bg-gradient-to-r from-black/0 via-black/5 to-black/0 dark:from-white/0 dark:via-white/10 dark:to-white/0"
      />

      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 text-black dark:supports-[backdrop-filter]:bg-black/40 dark:bg-black/60 dark:text-white border-b border-black/10 dark:border-white/10">
        <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="#" className="font-semibold tracking-tight text-xl">
            sanjay achar
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/40 rounded px-1 py-0.5"
              >
                {n.label}
              </a>
            ))}
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto max-w-6xl px-6 py-18 md:py-24 relative">
        {/* card-like backdrop */}
        <div className="absolute inset-x-0 -z-10 mx-6 md:mx-0 mt-6 rounded-3xl border border-black/10 dark:border-white/10 bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.04]" />

        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Full‑Stack Web Developer
            </h1>
            <p className="mt-5 text-zinc-700 dark:text-zinc-300 text-lg md:text-xl max-w-2xl">
              I design and build pragmatic, production‑ready apps in Next.js and the MERN
              stack. Focused on reliability, clean UX, and shipping.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-xl border border-black/70 dark:border-white px-5 py-2.5 font-medium bg-gradient-to-b from-black/5 to-black/0 hover:bg-black/10 text-black dark:text-white dark:from-white/10 dark:to-transparent dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/40"
              >
                View work
              </Link>
              <a
                href="mailto:m.sanjayachar@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-black/20 px-5 py-2.5 text-zinc-800 hover:border-black/60 hover:text-black dark:border-white/20 dark:text-zinc-200 dark:hover:border-white dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30"
              >
                Get in touch
              </a>
            </div>
            <div className="mt-10 flex items-center gap-5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/15 dark:border-white/15 text-zinc-700 dark:text-zinc-200 hover:text-black hover:bg-black/5 hover:border-black/40 dark:hover:text-black dark:hover:bg-white dark:hover:border-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-black/5 to-transparent dark:from-white/10 blur-xl" aria-hidden="true" />
              <div className="relative rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                <ul className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "Tailwind",
                  ].map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 text-zinc-800 dark:text-zinc-200 bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.04]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="container mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
          <Link href="/projects" className="text-sm text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            All projects →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Card 1 */}
          <article className="group rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.04] hover:border-black/40 dark:hover:border-white/40 transition-colors">
            <header className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Touch Typing Learning</h3>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Next.js • Node</span>
            </header>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              Structured lessons, WPM tracking, and clean UX for mastering touch typing.
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href="https://github.com/msanje/typing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-black/30 underline-offset-4 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
              >
                Code
              </a>
              <a
                href="#"
                className="underline decoration-black/30 underline-offset-4 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
              >
                Live
              </a>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.04] hover:border-black/40 dark:hover:border-white/40 transition-colors">
            <header className="flex items-center justify-between">
              <h3 className="text-lg font-medium">SnippetX</h3>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Next.js • MongoDB</span>
            </header>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              Save, search, and share code snippets. AI‑assisted descriptions and tags.
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href="https://github.com/msanje/snippetx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-black/30 underline-offset-4 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
              >
                Code
              </a>
              <a
                href="#"
                className="underline decoration-black/30 underline-offset-4 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
              >
                Live
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto max-w-6xl px-6 py-14 md:py-20 border-t border-black/10 dark:border-white/10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I build useful software with a bias for simplicity and speed. I care about
              clarity, maintainability, and measuring impact. Currently focused on
              shipping production‑grade full‑stack apps and improving system design.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.04]">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Location</dt>
                  <dd>Bengaluru, India</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Looking for</dt>
                  <dd>Remote full‑stack roles</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Stacks</dt>
                  <dd>MERN, Next.js, TS</dd>
                </div>
                <div>
                  <dt className="text-zinc-500 dark:text-zinc-400">Focus</dt>
                  <dd>DX, performance, UX</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-8 md:p-10 text-center bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.04]">
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s work together</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300">
            Quick chat, code review, or a full build — I’m open to meaningful work.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:m.sanjayachar@gmail.com"
              className="inline-flex items-center justify-center rounded-xl border border-black/70 dark:border-white px-5 py-2.5 font-medium bg-gradient-to-b from-black/5 to-black/0 hover:bg-black/10 text-black dark:text-white dark:from-white/10 dark:to-transparent dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 dark:focus-visible:ring-white/40"
            >
              Email me
            </a>
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-black/20 px-5 py-2.5 text-zinc-800 hover:border-black/60 hover:text-black dark:border-white/20 dark:text-zinc-200 dark:hover:border-white dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/30"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="container mx-auto max-w-6xl px-6 py-10 text-center text-zinc-600 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} Sanjay Achar — Built with Next.js
        </div>
      </footer>
    </div>
  );
}
