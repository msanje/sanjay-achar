"use client";

import React from 'react';
import ProjectForm from '../../component/ProjectForm';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AddProject() {
    const router = useRouter();

    const handleAddProject = (project: any) => {
        // For now, just log it. Later, integrate with a backend or global state
        console.log('New project:', project);
        router.push('/'); // Redirect to home after adding
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
            <div className="container mx-auto px-6 py-20">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-blue-300">Add New Project</h1>
                    <Link href="/">
                        <span className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                            ← Back to Home
                        </span>
                    </Link>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700 max-w-2xl mx-auto">
                    <ProjectForm onAddProject={handleAddProject} />
                </div>
            </div>
        </div>
    );
}