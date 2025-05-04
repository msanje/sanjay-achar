"use client";

import Link from "next/link";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);

  return (
    <main className="container mx-auto px-6 py-16 space-y-24">
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-300">Projects</h2>
          {/* <Link href="/add-project"> */}
          {/*   <span className="text-blue-400 hover:text-blue-300 transition-colors font-medium"> */}
          {/*     Add Project → */}
          {/*   </span> */}
          {/* </Link> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-700 hover:border-blue-500"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  View Project →
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No projects added yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
