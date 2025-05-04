"use client";

import { blogs } from "../../../content/blogs";

interface Blog {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: string;
  tags: string[];
  author: string;
  featuredImage: string;
}

export default function Page() {
  return (
    <main className="container mx-auto px-6 py-16 space-y-24">
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-300">Blogs</h2>
          {/* <Link href="/add-blog"> */}
          {/* <span className="text-blue-400 hover:text-blue-300 transition-colors font-medium"> */}
          {/* Add Blog → */}
          {/* </span> */}
          {/* </Link> */}
        </div>
        {/* <div className="flex justify-between items-center mb-8"> */}
        {/* <h2 className="text-3xl font-semibold text-blue-300">Your Blogs</h2> */}
        {/* </div> */}
        <div className="space-y-6">
          {blogs.length > 0 ? (
            blogs.map((blog: Blog) => (
              <div
                key={blog.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-700 hover:border-blue-500"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-200">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "numeric", // Use 'numeric' for no leading zero (e.g., 1)
                    month: "numeric", // Use 'numeric' for no leading zero (e.g., 3)
                    year: "numeric",
                  })}
                </p>
                <p className="text-gray-300 mb-3">{blog.summary}</p>
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
