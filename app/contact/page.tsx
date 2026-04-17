export default function Contact() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 pt-32 pb-20">
      <div className="max-w-xl mx-auto">
        <span className="text-xs font-medium tracking-widest text-indigo-400 uppercase">
          Contact
        </span>
        <h1 className="text-4xl font-bold text-white mt-2 mb-3">
          Get in touch
        </h1>
        <p className="text-zinc-400 mb-10">
          Have a project in mind? Send me a message and I&apos;ll get back to
          you within 24 hours.
        </p>

        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 text-zinc-100 placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 text-zinc-100 placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 text-zinc-100 placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="self-start px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
