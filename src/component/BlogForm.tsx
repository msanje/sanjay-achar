"use client";

import React, { useState } from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
}

interface BlogFormProps {
  onAddBlog: (blog: Blog) => void;
}

export default function BlogForm({ onAddBlog }: BlogFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description && content) {
      onAddBlog({
        id: Date.now(),
        title,
        description,
        content,
        date: new Date().toISOString(),
      });
      setTitle("");
      setDescription("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short Description"
        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Blog Content"
        className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 h-40"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
      >
        Publish Blog
      </button>
    </form>
  );
}

