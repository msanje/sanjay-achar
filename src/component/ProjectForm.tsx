"use client";

import React, { useState } from 'react';

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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && description) {
            onAddProject({
                id: Date.now(),
                title,
                description,
                link: link || '#',
            });
            setTitle('');
            setDescription('');
            setLink('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Project Title"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
            <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Project Link (optional)"
                className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
                Add Project
            </button>
        </form>
    );
}