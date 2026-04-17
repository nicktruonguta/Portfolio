const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"];

const experience = [
  {
    role: "Frontend Developer",
    company: "Company Name",
    period: "2023 – Present",
    desc: "Built and maintained user-facing features using React and Next.js.",
  },
  {
    role: "Junior Developer",
    company: "Company Name",
    period: "2021 – 2023",
    desc: "Contributed to full-stack projects and improved team workflows.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 pt-32 pb-20">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-medium tracking-widest text-indigo-400 uppercase">
          About
        </span>
        <h1 className="text-4xl font-bold text-white mt-2 mb-4">About Me</h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-14">
          Hi, I&apos;m a developer passionate about building clean, performant
          web experiences. I specialize in React and Next.js, with a focus on
          thoughtful UI and scalable code.
        </p>

        {/* Skills */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-1.5 rounded-full text-sm font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.role} className="flex gap-4">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-indigo-400 mb-1">
                    {item.company} · {item.period}
                  </p>
                  <p className="text-zinc-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-6">Education</h2>
          <div className="flex gap-4">
            <div className="mt-1.5 w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
            <div>
              <h3 className="font-semibold text-white">B.S. Computer Science</h3>
              <p className="text-sm text-indigo-400">
                University Name · 2017 – 2021
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
