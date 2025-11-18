import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! I\'ll get back to you within 24 hours.')
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Let’s build something great
        </motion.h2>

        <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-200/90 text-sm mb-1">Name</label>
              <input required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-slate-200/90 text-sm mb-1">Email</label>
              <input type="email" required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-slate-200/90 text-sm mb-1">Message</label>
            <textarea required rows={5} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Tell me about your project" />
          </div>
          <div className="flex items-center justify-between">
            <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-xl hover:shadow-2xl transition-all">
              Send Message
            </button>
            <p className="text-emerald-300/90 text-sm">{status}</p>
          </div>
        </form>
      </div>
    </section>
  )
}
