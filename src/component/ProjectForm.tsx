"use client";

import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface ProjectFormProps {
  onAddProject: (project: Project) => void;
}

export default function ProjectForm({ onAddProject }: ProjectFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !link.trim()) {
      setError("All fields are required, including project link.");
      return;
    }
    setError("");
    onAddProject({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      link: link.trim(),
    });
    setTitle("");
    setDescription("");
    setLink("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <p className="text-red-400 text-sm font-medium text-center">
            {error}
          </p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Project Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            className="w-full p-4 rounded-xl bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of your project"
            rows={4}
            className="w-full p-4 rounded-xl bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Project Link
          </label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://github.com/username/project"
            className="w-full p-4 rounded-xl bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition-colors"
        >
          Add Project
        </button>
      </form>
    </>
  );
}

