"use client"

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail, MessageSquare, Moon, Sun } from "lucide-react";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white relative overflow-hidden">
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
      >
        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      <h1 className="text-4xl md:text-6xl font-bold mb-12">Sanjay Achar</h1>

      <div className="flex gap-8">
        {socials.map(({ Icon, href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/15 dark:border-white/15 text-zinc-700 dark:text-zinc-200 hover:text-black hover:bg-black/5 hover:border-black/40 dark:hover:text-black dark:hover:bg-white dark:hover:border-white transition-colors"
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}

