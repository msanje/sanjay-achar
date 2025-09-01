"use client";

import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Moon,
  Sun,
  BookOpen,
} from "lucide-react";
import { FaDiscord as MessageSquare } from "react-icons/fa";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
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
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/m-sanjay-achar",
      label: "LinkedIn",
    },
    { Icon: Twitter, href: "https://x.com/msanjayachar", label: "Twitter / X" },
    { Icon: Mail, href: "mailto:m.sanjayachar@gmail.com", label: "Email" },
    { Icon: BookOpen, href: "https://blogs.sanjayachar.dev", label: "Blog" },
    {
      Icon: MessageSquare,
      href: `https://discord.com/users/${process.env.NEXT_PUBLIC_DISCORD_USER_ID ?? ""}`,
      label: "Discord",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white relative overflow-hidden">
      {/* --- Background: dialed-back gray + gradients limited away from center --- */}
      {/* Radial vignette (lighter) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_42%_at_50%_-12%,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(58%_42%_at_50%_-12%,rgba(255,255,255,0.08),transparent_70%)]"
      />
      {/* Dotted grid (masked so center is clean) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.10] dark:opacity-[0.09] [background-size:22px_22px] [background-image:radial-gradient(currentColor_0.8px,transparent_0.8px)] text-black/50 dark:text-white/60 [mask-image:radial-gradient(ellipse_at_center,transparent_0_44%,#000_68%)]"
      />
      {/* Angled sweep (softer) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 left-1/2 -translate-x-1/2 h-[60vh] w-[120vw] rotate-12 bg-gradient-to-r from-black/0 via-black/4 to-black/0 dark:from-white/0 dark:via-white/10 dark:to-white/0 [mask-image:radial-gradient(ellipse_at_center,transparent_0_40%,#000_65%)]"
      />

      {/* Theme toggle */}
      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 dark:border-white/15 bg-white/50 dark:bg-white/5 backdrop-blur hover:bg-white/70 dark:hover:bg-white/10 transition-colors"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </button>

      {/* Center stack (no card) */}
      <div className="relative z-10 mx-6 w-full max-w-4xl text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter drop-shadow-lg relative group">
          {/* Base visible text */}
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 dark:from-cyan-300 dark:via-blue-200 dark:to-purple-300 animate-pulse hover:animate-none transition-all duration-500 cursor-default"> */}
          {/* Basic */}
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-800 dark:from-cyan-300 dark:via-blue-200 dark:to-purple-300 cursor-default"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // Option 1: Deep Ocean Blue */}
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-900 via-indigo-800 to-slate-800 dark:from-blue-300 dark:via-cyan-200 dark:to-slate-300 cursor-default"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // Option 2: Emerald Forest */}
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-800 dark:from-emerald-300 dark:via-teal-200 dark:to-cyan-300 cursor-default"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // Option 3: Sunset Warmth */}
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-br from-orange-900 via-red-800 to-rose-800 dark:from-orange-300 dark:via-red-200 dark:to-rose-300 cursor-default"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // Option 4: Royal Gold */}
          {/* <span className="bg-clip-text text-transparent bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-800 dark:from-yellow-300 dark:via-amber-200 dark:to-orange-300 cursor-default"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // Option 5: Monochrome Elegance */}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-800 dark:from-gray-300 dark:via-slate-200 dark:to-zinc-300 cursor-default">
            Sanjay Achar
          </span>

          {/* 
// Option 6: Crimson Power
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-red-900 via-rose-800 to-pink-800 dark:from-red-300 dark:via-rose-200 dark:to-pink-300 cursor-default">
            Sanjay Achar
          </span>

// Option 7: Tech Green
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-green-900 via-emerald-800 to-teal-800 dark:from-green-300 dark:via-emerald-200 dark:to-teal-300 cursor-default">
            Sanjay Achar
          </span>

// Option 8: Midnight Blue
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-slate-300 dark:via-blue-200 dark:to-indigo-300 cursor-default">
            Sanjay Achar
          </span>
*/}

          {/* Glow effect */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-blue-300 dark:to-purple-400 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-700 pointer-events-none"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 1. Shimmer Effect */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-transparent via-white/60 to-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 2. Rainbow Gradient Animation */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-[length:400%_100%] animate-[rainbow_4s_linear_infinite] opacity-0 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 3. Neon Glow Pulse */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 animate-pulse blur-[2px] transition-all duration-500 pointer-events-none" style={{ textShadow: '0 0 20px currentColor, 0 0 40px currentColor' }}> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 4. Typewriter Reveal */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden whitespace-nowrap animate-[typewriter_2s_steps(12)_1s_both]"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 5. Glitch Effect */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-blue-500 opacity-0 group-hover:opacity-100 animate-[glitch_0.3s_infinite] pointer-events-none"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 6. Fire Gradient */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-t from-red-600 via-orange-500 via-yellow-400 to-red-500 bg-[length:100%_200%] animate-[fire_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 7. Holographic Effect */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-500 to-purple-500 bg-[length:200%_100%] animate-[hologram_3s_linear_infinite] opacity-0 group-hover:opacity-60 blur-[1px] transition-all duration-700 pointer-events-none"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 8. Electric Current */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 bg-[length:300%_100%] animate-[electric_1.5s_ease-in-out_infinite] opacity-0 group-hover:opacity-75 transition-opacity duration-400 pointer-events-none drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 9. Matrix Style */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-green-600 opacity-0 group-hover:opacity-100 animate-[matrix_2s_linear_infinite] transition-opacity duration-500 pointer-events-none"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}

          {/* // 10. Liquid Metal */}
          {/* <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-100 to-gray-400 bg-[length:200%_100%] animate-[liquid_4s_ease-in-out_infinite] opacity-0 group-hover:opacity-80 transition-opacity duration-600 pointer-events-none blur-[0.5px]"> */}
          {/*   Sanjay Achar */}
          {/* </span> */}
        </h1>

        {/* Icon links */}
        <div className="mt-12 md:mt-16 flex justify-center gap-8 md:gap-10">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group relative inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl border border-black/15 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur hover:border-black/40 dark:hover:border-white/40 hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.05]" />
              <Icon className="relative h-6 w-6 md:h-7 md:w-7 text-neutral-700 group-hover:text-black dark:text-neutral-200 dark:group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
