export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Hi, I'm Ben
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8">
          Data Scientist & Software Engineer
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I build projects spanning machine learning, computational research, and web development.
          Passionate about solving complex problems with elegant solutions.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="https://github.com/b9nn"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 rounded-full font-medium transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
