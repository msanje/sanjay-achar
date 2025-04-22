"use client";

import React from "react";
import ProjectForm from "../../component/ProjectForm";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddProject() {
  const router = useRouter();

  const handleAddProject = (project: any) => {
    console.log("New project:", project);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="container mx-auto px-6 py-20 space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-300">Add New Project</h1>
          <Link href="/">
            <span className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              ← Back to Home
            </span>
          </Link>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-gray-700 max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Project Details
          </h2>
          <ProjectForm onAddProject={handleAddProject} />
        </div>
      </div>
    </div>
  );
}

