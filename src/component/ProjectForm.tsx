"use client";

import React, { useState, useCallback } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface ProjectFormProps {
  onAddProject: (project: Project) => void;
}

interface FormErrors {
  title?: string;
  description?: string;
  link?: string;
}

export default function ProjectForm({ onAddProject }: ProjectFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    link: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback(() => {
    const newErrors: FormErrors = {};
    const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i;

    if (!formData.title.trim()) {
      newErrors.title = "Project title is required";
    } else if (formData.title.length > 100) {
      newErrors.title = "Title must be less than 100 characters";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters";
    }

    if (!formData.link.trim()) {
      newErrors.link = "Project link is required";
    } else if (!urlRegex.test(formData.link)) {
      newErrors.link = "Please enter a valid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      onAddProject({
        id: Date.now(),
        title: formData.title.trim(),
        description: formData.description.trim(),
        link: formData.link.trim(),
      });
      setFormData({ title: "", description: "", link: "" });
      setErrors({});
    } catch (error) {
      setErrors({ link: "Failed to add project. Please try again." });
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

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-gray-800 rounded-2xl shadow-xl max-w-2xl mx-auto"
      noValidate
      aria-label="Add new project form"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-200 mb-1.5"
          >
            Project Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter project title"
            className={`w-full px-4 py-3 rounded-lg bg-gradient-to-b from-gray-700 to-gray-800 border ${
              errors.title ? "border-red-500" : "border-gray-600"
            } text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 shadow-sm hover:shadow-md`}
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
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Brief description of your project"
            rows={4}
            className={`w-full px-4 py-3 rounded-lg bg-gradient-to-b from-gray-700 to-gray-800 border ${
              errors.description ? "border-red-500" : "border-gray-600"
            } text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 shadow-sm hover:shadow-md resize-y`}
            aria-invalid={!!errors.description}
            aria-describedby={
              errors.description ? "description-error" : undefined
            }
            maxLength={500}
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
            htmlFor="link"
            className="block text-sm font-medium text-gray-200 mb-1.5"
          >
            Project Link
          </label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            placeholder="https://github.com/username/project"
            className={`w-full px-4 py-3 rounded-lg bg-gradient-to-b from-gray-700 to-gray-800 border ${
              errors.link ? "border-red-500" : "border-gray-600"
            } text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 placeholder-gray-400 shadow-sm hover:shadow-md`}
            aria-invalid={!!errors.link}
            aria-describedby={errors.link ? "link-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.link && (
            <p id="link-error" className="mt-1 text-sm text-red-400">
              {errors.link}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className={`w-full px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center ${
          isSubmitting
            ? "bg-blue-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } text-white shadow-sm hover:shadow-md`}
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
            Adding...
          </>
        ) : (
          "Add Project"
        )}
      </button>
    </form>
  );
}
