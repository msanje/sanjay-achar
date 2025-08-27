import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MessageSquare } from "lucide-react";

// Single-file, monochrome (black & white) portfolio landing page.
// - Clean, responsive layout
// - Accessible labels & focus states
// - External links safe by default
// - Tailwind only; no color besides grayscale
// - Drop-in for app/page components

export default function Home() {
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
    <div className="min-h-screen bg-black text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/70 border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="#" className="font-semibold tracking-tight text-xl">
            sanjay achar
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-1 py-0.5"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Full‑Stack Web Developer
            </h1>
            <p className="mt-5 text-zinc-300 text-lg md:text-xl max-w-2xl">
              I design and build pragmatic, production‑ready apps in Next.js and the MERN
              stack. Focused on reliability, clean UX, and shipping.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-xl border border-white px-5 py-2.5 font-medium hover:bg-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                View work
              </Link>
              <a
                href="mailto:m.sanjayachar@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-zinc-200 hover:border-white hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-zinc-200 hover:text-black hover:bg-white hover:border-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-white/5 blur-lg" aria-hidden="true" />
              <div className="relative rounded-2xl border border-white/10 p-6">
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
                      className="rounded-lg border border-white/10 px-3 py-2 text-zinc-200"
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
      <section id="work" className="container mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected work</h2>
          <Link href="/projects" className="text-sm text-zinc-400 hover:text-white">
            All projects →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Card 1 */}
          <article className="group rounded-2xl border border-white/10 p-6 hover:border-white/30 transition-colors">
            <header className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Touch Typing Learning</h3>
              <span className="text-xs text-zinc-400">Next.js • Node</span>
            </header>
            <p className="mt-3 text-sm text-zinc-300">
              Structured lessons, WPM tracking, and clean UX for mastering touch typing.
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href="https://github.com/msanje/typing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                Code
              </a>
              <a
                href="#"
                className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                Live
              </a>
            </div>
          </article>

          {/* Card 2 */}
          <article className="group rounded-2xl border border-white/10 p-6 hover:border-white/30 transition-colors">
            <header className="flex items-center justify-between">
              <h3 className="text-lg font-medium">SnippetX</h3>
              <span className="text-xs text-zinc-400">Next.js • MongoDB</span>
            </header>
            <p className="mt-3 text-sm text-zinc-300">
              Save, search, and share code snippets. AI‑assisted descriptions and tags.
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                href="https://github.com/msanje/snippetx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                Code
              </a>
              <a
                href="#"
                className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                Live
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto max-w-6xl px-6 py-14 md:py-20 border-t border-white/10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed">
              I build useful software with a bias for simplicity and speed. I care about
              clarity, maintainability, and measuring impact. Currently focused on
              shipping production‑grade full‑stack apps and improving system design.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="rounded-2xl border border-white/10 p-6">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-zinc-400">Location</dt>
                  <dd>Bengaluru, India</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Looking for</dt>
                  <dd>Remote full‑stack roles</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Stacks</dt>
                  <dd>MERN, Next.js, TS</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Focus</dt>
                  <dd>DX, performance, UX</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="rounded-2xl border border-white/10 p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s work together</h2>
          <p className="mt-3 text-zinc-300">
            Quick chat, code review, or a full build — I’m open to meaningful work.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:m.sanjayachar@gmail.com"
              className="inline-flex items-center justify-center rounded-xl border border-white px-5 py-2.5 font-medium hover:bg-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Email me
            </a>
            <a
              href="https://cal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-5 py-2.5 text-zinc-200 hover:border-white hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-6 py-10 text-center text-zinc-400 text-sm">
          © {new Date().getFullYear()} Sanjay Achar — Built with Next.js
        </div>
      </footer>
    </div>
  );
}
