import React from 'react';
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const projects = [
  { title: 'Project 1', description: 'Description of Project 1', link: '#' },
  { title: 'Project 2', description: 'Description of Project 2', link: '#' },
  { title: 'Project 3', description: 'Description of Project 3', link: '#' },
];

const essays = [
  { title: 'Essay 1', description: 'Brief description of Essay 1', link: '#' },
  { title: 'Essay 2', description: 'Brief description of Essay 2', link: '#' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Sanjay Achar</h1>
        <h2 className="text-2xl text-gray-300 mb-8">Full Stack Web Developer</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/M-Sanjay12o52o" className="text-gray-300 hover:text-white transition-colors">
            <FaGithub className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/m-sanjay-achar" className="text-gray-300 hover:text-white transition-colors">
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a href="mailto:msnjy12o52o@gmail.com" className="text-gray-300 hover:text-white transition-colors">
            <FaEnvelope className="w-8 h-8" />
          </a>
          <a href="https://x.com/msanjay12o5" className="text-gray-300 hover:text-white transition-colors">
            <BsTwitter className="w-8 h-8" />
          </a>
          <a href="https://discord.com/channels/@me" className="text-gray-300 hover:text-white transition-colors">
            <BsDiscord className="w-8 h-8" />
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-400 hover:text-blue-300 transition-colors">View Project</a>
              </div>
            ))}
          </div>
        </section> */}

        {/* <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Essays</h2>
          <div className="space-y-6">
            {essays.map((essay, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{essay.title}</h3>
                <p className="text-gray-400 mb-4">{essay.description}</p>
                <a href={essay.link} className="text-blue-400 hover:text-blue-300 transition-colors">Read Essay</a>
              </div>
            ))}
          </div>
        </section> */}

        <section>
          <h2 className="text-3xl font-semibold mb-8">Current Focus</h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <p className="text-gray-300">
              Currently, I&apos;m deepening my knowledge of React and Next.js, while also exploring backend technologies like Node.js and Express. I&apos;m passionate about creating seamless, user-friendly web applications and always looking for new challenges to expand my skill set.
            </p>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; 2024 Sanjay Achar. All rights reserved.</p>
      </footer>
    </div>
  );
}