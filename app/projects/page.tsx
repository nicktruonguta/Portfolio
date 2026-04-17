const projects = [
  {
    title: "Project One",
    description: "A full-stack web app built with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS"],
    href: "#",
  },
  {
    title: "Project Two",
    description: "A REST API built with Node.js and Express.",
    tags: ["Node.js", "Express"],
    href: "#",
  },
  {
    title: "Project Three",
    description: "A React dashboard with real-time data visualizations.",
    tags: ["React", "TypeScript"],
    href: "#",
  },
  {
    title: "Project Four",
    description: "A mobile-first e-commerce storefront with cart and checkout.",
    tags: ["Next.js", "Stripe"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-medium tracking-widest text-indigo-400 uppercase">
          Work
        </span>
        <h1 className="text-4xl font-bold text-white mt-2 mb-12">Projects</h1>

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group block bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:bg-zinc-900/80"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h2>
                <svg
                  className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-zinc-800 text-zinc-400 text-xs px-3 py-1 rounded-full border border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
