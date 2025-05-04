import React from "react";
import Link from "next/link";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <header className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Sanjay Achar
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-10 font-medium">
          Full Stack Web Developer
        </h2>
        <div className="flex justify-center gap-6">
          {[
            { Icon: FaGithub, href: "https://github.com/M-Sanjay12o52o" },
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/in/m-sanjay-achar",
            },
            { Icon: FaEnvelope, href: "mailto:msnjy12o52o@gmail.com" },
            { Icon: BsTwitter, href: "https://x.com/msanjay12o5" },
            {
              Icon: BsDiscord,
              href: `https://discord.com/users/${process.env.DISCORD_USER_ID}`,
            },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="text-gray-300 hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <Icon className="w-8 h-8" />
            </a>
          ))}
        </div>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-24">
        {/* Navigation Links Section */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-10 text-blue-300">
            Explore My Work
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link
              href="/projects"
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 w-full sm:w-64 hover:border-blue-500 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-medium text-blue-200 group-hover:text-blue-300 transition-colors">
                Projects
              </h3>
              <p className="text-gray-400 mt-2">Discover my latest creations</p>
            </Link>
            <Link
              href="/blogs"
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 w-full sm:w-64 hover:border-purple-500 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-medium text-purple-200 group-hover:text-purple-300 transition-colors">
                Blogs
              </h3>
              <p className="text-gray-400 mt-2">
                Read my thoughts and insights
              </p>
            </Link>
          </div>
        </section>
        {/* TODO: Update this */}
        {/* <section className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700"> */}
        {/*   <h2 className="text-3xl font-semibold mb-6 text-blue-300"> */}
        {/*     Current Focus */}
        {/*   </h2> */}
        {/*   <p className="text-gray-200 leading-relaxed"> */}
        {/*     Currently, I&apos;m deepening my knowledge of React and Next.js, */}
        {/*     while also exploring backend technologies like Node.js and Express. */}
        {/*     I&apos;m passionate about creating seamless, user-friendly web */}
        {/*     applications and always looking for new challenges to expand my */}
        {/*     skill set. */}
        {/*   </p> */}
        {/* </section> */}
      </main>

      <footer className="container mx-auto px-6 py-10 text-center text-gray-400 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Sanjay Achar. All rights reserved.</p>
      </footer>
    </div>
  );
}
