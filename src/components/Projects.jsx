import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Banking Dashboard',
    description: 'A modern finance experience with micro-interactions and clear information hierarchy.',
    tags: ['Dashboard', 'Design System', 'Motion'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Health App',
    description: 'Human-centered mobile app for tracking wellness with playful visual elements.',
    tags: ['Mobile', 'Accessibility', 'Prototyping'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'E-commerce Flow',
    description: 'Conversion-first checkout with delightful micro-animations and confidence signals.',
    tags: ['E-commerce', 'UX Writing', 'A/B Testing'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-10"
        >
          Selected Work
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <p className="text-slate-300/90 text-sm mt-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-slate-200/80 bg-white/10 px-2 py-1 rounded-md border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
