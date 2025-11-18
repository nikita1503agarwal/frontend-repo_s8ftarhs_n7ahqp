import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 relative">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(147,51,234,0.12),transparent)]" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Ava Nolan — UI/UX Designer</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white">Dribbble</a>
            <a href="#" className="hover:text-white">Behance</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
