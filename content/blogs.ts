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

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Understanding the MERN Stack",
    summary:
      "An introductory blog post on the MERN stack, explaining the components MongoDB, Express, React, and Node.js and how they work together.",
    content:
      "In this blog, we will dive deep into the MERN stack. The first component is MongoDB, a NoSQL database. Next, Express.js is a lightweight framework for Node.js that simplifies routing and handling HTTP requests. React.js is a JavaScript library for building user interfaces, and Node.js is the runtime environment that allows us to execute JavaScript on the server-side.",
    date: "2025-03-05",
    tags: ["MERN", "JavaScript", "Full-stack"],
    author: "Sanjay Achar",
    featuredImage: "https://example.com/mern-stack.jpg",
  },
  {
    id: 2,
    title: "How to Build a Personal Portfolio with Next.js",
    summary:
      "A step-by-step guide on creating a personal portfolio using Next.js and Tailwind CSS.",
    content:
      "In this guide, we will walk through the process of building a personal portfolio website with Next.js and Tailwind CSS. We'll cover how to set up the project, create different sections for your skills and projects, and style the components with Tailwind's utility-first classes.",
    date: "2025-04-10",
    tags: ["Next.js", "Portfolio", "Web Development"],
    author: "Sanjay Achar",
    featuredImage: "https://example.com/portfolio.jpg",
  },
  {
    id: 3,
    title: "Best Practices for Writing Clean Code in JavaScript",
    summary:
      "Tips and best practices for writing clean, readable, and maintainable code in JavaScript.",
    content:
      "Clean code is crucial for writing maintainable software. In this post, we’ll look at some best practices to ensure that your JavaScript code is clean and efficient. We'll cover naming conventions, avoiding magic numbers, writing reusable functions, and organizing your code into smaller modules.",
    date: "2025-04-20",
    tags: ["JavaScript", "Clean Code", "Best Practices"],
    author: "Sanjay Achar",
    featuredImage: "https://example.com/clean-code.jpg",
  },
  {
    id: 4,
    title: "Exploring the World of REST APIs",
    summary:
      "A deep dive into RESTful APIs, explaining the concepts, methods, and how to create your own API.",
    content:
      "REST (Representational State Transfer) APIs are a common way of building web services. In this post, we'll explain the core principles of REST, including the use of HTTP methods (GET, POST, PUT, DELETE), status codes, and resource URIs. We'll also guide you through creating a basic RESTful API with Express and Node.js.",
    date: "2025-04-30",
    tags: ["API", "REST", "Backend Development"],
    author: "Sanjay Achar",
    featuredImage: "https://example.com/rest-api.jpg",
  },
];
