interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  date: string;
}

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website built with Next.js and Tailwind CSS to showcase my skills and projects.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    liveLink: "https://example.com/portfolio",
    githubLink: "https://github.com/yourusername/portfolio",
    date: "2025-03-01",
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce web app using MongoDB, Express, React, and Node.js (MERN stack). Features user authentication and payment integration.",
    technologies: ["MERN Stack", "Stripe API", "JWT Authentication"],
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/yourusername/ecommerce-app",
    date: "2025-04-15",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "A weather app that fetches data from a public weather API to display current weather conditions and forecasts for the next week.",
    technologies: ["React", "OpenWeather API", "CSS"],
    liveLink: "https://example.com/weather-app",
    githubLink: "https://github.com/yourusername/weather-app",
    date: "2025-02-20",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blog platform where users can write, edit, and delete their posts. Built with Node.js and MongoDB.",
    technologies: ["Node.js", "MongoDB", "Express", "React"],
    liveLink: "https://example.com/blog-platform",
    githubLink: "https://github.com/yourusername/blog-platform",
    date: "2025-04-01",
  },
  {
    id: 5,
    title: "Touch Typing Learning Website",
    description:
      "A platform to learn Touch Typing through specific lessons for specific keys.",
    technologies: ["Next.js", "MySQL", "React"],
    liveLink: "https://learn-touch-typing.vercel.app/",
    githubLink: "https://github.com/M-Sanjay12o52o/ctp-touch-typing-learn",
    date: "2025-05-04",
  },
];
