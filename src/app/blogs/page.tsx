"use client";

import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
}

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const addBlog = () => {
    const newBlog: Blog = {
      id: blogs.length + 1,
      title,
      description,
      content,
      date: new Date().toISOString(),
    };
    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setDescription("");
    setContent("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setContent(text);
    };
    reader.readAsText(file);
  };

  return (
    <main className="container mx-auto px-6 py-16 space-y-24">
      <section className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 shadow-md">
        <h2 className="text-3xl font-bold text-blue-300 mb-6">
          Write a New Blog
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <textarea
            placeholder="Write your blog content here or paste markdown..."
            rows={10}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-400">
                <input
                  type="file"
                  accept=".md"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <span className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
                  Upload .md
                </span>
              </label>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                {showPreview ? "Hide Preview" : "Show Preview"}
              </button>
            </div>
            <button
              onClick={addBlog}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition font-medium shadow-md"
            >
              Post Blog
            </button>
          </div>
          {showPreview && (
            <div className="mt-6 bg-gray-800 p-4 rounded-lg border border-gray-700 text-white prose prose-invert max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-300">Your Blogs</h2>
        </div>
        <div className="space-y-6">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-700 hover:border-blue-500"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-200">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
                <p className="text-gray-300 mb-3">{blog.description}</p>
                <p className="text-gray-200 whitespace-pre-wrap">
                  {blog.content.substring(0, 300)}...
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No blogs added yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}

