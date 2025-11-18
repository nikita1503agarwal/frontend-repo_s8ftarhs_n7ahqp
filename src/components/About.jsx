import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl font-bold text-white">About</h2>
            <p className="text-slate-300/90 mt-4">I’m a UI/UX designer with a love for motion, clarity, and play. I help teams turn messy requirements into crisp, joyful interfaces.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {[{
                title: 'Design Systems',
                text: 'Scalable components, tokens, and documentation for fast-moving teams.'
              }, {
                title: 'Prototyping',
                text: 'High-fidelity motion prototypes with real-logic edge cases considered.'
              }, {
                title: 'Research',
                text: 'Interviews, usability tests, and continuous discovery to find signal.'
              }, {
                title: 'Handoffs',
                text: 'Developer-friendly specs with attention to empty states and errors.'
              }].map(card => (
                <div key={card.title} className="rounded-2xl p-5 bg-white/5 border border-white/10">
                  <h3 className="text-white font-semibold">{card.title}</h3>
                  <p className="text-slate-300/90 text-sm mt-1">{card.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
