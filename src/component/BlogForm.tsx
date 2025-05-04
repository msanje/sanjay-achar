"use client";

import React, { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";

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

interface FormErrors {
  title?: string;
  description?: string;
  content?: string;
}

export default function BlogForm({ onAddBlog }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Blog title is required";
    } else if (formData.title.length > 100) {
      newErrors.title = "Title must be less than 100 characters";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length > 250) {
      newErrors.description = "Description must be less than 250 characters";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Blog content is required";
    } else if (formData.content.length > 10000) {
      newErrors.content = "Content must be less than 10,000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
      onAddBlog({
        id: Date.now(),
        title: formData.title.trim(),
        description: formData.description.trim(),
        content: formData.content.trim(),
        date: new Date().toISOString(),
      });
      setFormData({ title: "", description: "", content: "" });
      setErrors({});
      setShowPreview(false);
    } catch (error) {
      setErrors({ content: "Failed to post blog. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 1024 * 1024) {
      // 1MB limit
      setErrors({ content: "File size must be less than 1MB" });
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (text.length > 10000) {
        setErrors({
          content: "File content must be less than 10,000 characters",
        });
        return;
      }
      setFormData((prev) => ({ ...prev, content: text }));
      setErrors((prev) => ({ ...prev, content: undefined }));
    };
    reader.onerror = () => {
      setErrors({ content: "Failed to read file. Please try again." });
    };
    reader.readAsText(file);
  };

  return (
    <section
      className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto border border-gray-700"
      aria-label="Create new blog post"
    >
      <h2 className="text-3xl font-bold text-blue-300 mb-6">
        Write a New Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-200 mb-1.5"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter blog title"
              className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${
                errors.title ? "border-red-500" : "border-gray-600"
              } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-400`}
              aria-invalid={!!errors.title}
              aria-describedby={errors.title ? "title-error" : undefined}
              maxLength={100}
              disabled={isSubmitting}
            />
            {errors.title && (
              <p id="title-error" className="mt-1 text-sm text-red-400">
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-200 mb-1.5"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Brief description of your blog"
              className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${
                errors.description ? "border-red-500" : "border-gray-600"
              } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-400`}
              aria-invalid={!!errors.description}
              aria-describedby={
                errors.description ? "description-error" : undefined
              }
              maxLength={250}
              disabled={isSubmitting}
            />
            {errors.description && (
              <p id="description-error" className="mt-1 text-sm text-red-400">
                {errors.description}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-200 mb-1.5"
            >
              Blog Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Write your blog content here or paste markdown..."
              rows={10}
              className={`w-full px-4 py-3 rounded-lg bg-gray-900 border ${
                errors.content ? "border-red-500" : "border-gray-600"
              } text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-400 font-mono resize-y`}
              aria-invalid={!!errors.content}
              aria-describedby={errors.content ? "content-error" : undefined}
              maxLength={10000}
              disabled={isSubmitting}
            />
            {errors.content && (
              <p id="content-error" className="mt-1 text-sm text-red-400">
                {errors.content}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <label
              className={`text-sm ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "text-gray-400"
              }`}
            >
              <input
                type="file"
                accept=".md"
                className="hidden"
                onChange={handleFileUpload}
                disabled={isSubmitting}
              />
              <span
                className={`cursor-pointer bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors ${
                  isSubmitting ? "cursor-not-allowed" : "hover:bg-gray-600"
                }`}
              >
                Upload .md
              </span>
            </label>
            <button
              type="button"
              onClick={() => setShowPreview(!showPreview)}
              className={`text-sm transition-colors ${
                isSubmitting
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-blue-400 hover:text-blue-300"
              }`}
              disabled={isSubmitting}
            >
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
          </div>
          <button
            type="submit"
            className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center ${
              isSubmitting
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Posting...
              </>
            ) : (
              "Post Blog"
            )}
          </button>
        </div>

        {showPreview && (
          <div className="mt-6 bg-gray-800 p-6 rounded-lg border border-gray-700 text-white prose prose-invert max-w-none">
            <ReactMarkdown>{formData.content}</ReactMarkdown>
          </div>
        )}
      </form>
    </section>
  );
}
