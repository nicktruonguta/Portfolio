export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 pt-20">
      {/* Glow */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-150 h-75 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative text-center max-w-3xl">
        <span className="inline-block text-xs font-medium tracking-widest text-indigo-400 uppercase mb-6 border border-indigo-400/30 rounded-full px-4 py-1.5 bg-indigo-400/5">
          Available for work
        </span>

        <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Building digital
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400">
            experiences
          </span>
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          I&apos;m a front-end developer crafting clean, performant web
          applications with React and Next.js.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </main>
  );
}
