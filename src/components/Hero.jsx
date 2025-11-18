import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[70vh]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 text-white px-3 py-1 mb-6 backdrop-blur-md"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for freelance projects
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(59,130,246,0.35)]"
              >
                UI/UX Designer crafting playful, modern experiences
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 text-lg text-slate-200/90 max-w-xl"
              >
                I design interfaces that feel alive and intuitive. I blend motion, 3D, and accessibility to turn complex ideas into delightful journeys.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-xl hover:shadow-2xl transition-all"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>

            <div className="pointer-events-none hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/10 to-slate-900" />
    </section>
  )
}
