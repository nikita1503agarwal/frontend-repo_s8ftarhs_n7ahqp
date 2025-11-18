import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="text-slate-200/90 hover:text-white transition-colors px-3 py-2 rounded-md">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 grid place-items-center shadow-lg">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-white font-semibold tracking-tight group-hover:opacity-90">Ava Nolan</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#"
              className="ml-2 inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10"
            >
              <span>Download CV</span>
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="#"
              className="block rounded-lg bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors border border-white/10"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
