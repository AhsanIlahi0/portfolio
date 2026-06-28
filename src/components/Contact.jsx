import { useState } from 'react'
import { profile } from '../data/content'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-6 max-w-6xl mx-auto py-24 md:py-32">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/contact
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-graphite dark:text-bone mb-12 max-w-xl">
          Open to new opportunities — say hello.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-14">
        <Reveal delay={120}>
          <ul className="space-y-4">
            <ContactRow label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
            <ContactRow label="Location" value={profile.location} />
            <ContactRow label="LinkedIn" value="View profile" href={profile.linkedin} external />
            <ContactRow label="GitHub" value="View profile" href={profile.github} external />
          </ul>
        </Reveal>

        <Reveal delay={160}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
            <div>
              <label className="font-mono-label text-xs uppercase tracking-widest text-graphite/60 dark:text-bone/55">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="What would you like to build?"
                className="mt-2 w-full bg-transparent border border-graphite/25 dark:border-bone/25 rounded-sm px-4 py-3 text-sm text-graphite dark:text-bone placeholder:text-graphite/40 dark:placeholder:text-bone/35 focus:border-clay dark:focus:border-copper outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-clay dark:bg-copper text-parchment dark:text-ink font-mono-label text-xs uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href, external }) {
  return (
    <li className="flex items-baseline justify-between border-b border-graphite/10 dark:border-bone/10 pb-3">
      <span className="font-mono-label text-xs uppercase tracking-widest text-graphite/50 dark:text-bone/45">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          className="text-sm text-graphite dark:text-bone hover:text-clay dark:hover:text-copper transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-sm text-graphite dark:text-bone">{value}</span>
      )}
    </li>
  )
}

function Field({ label, name, value, onChange, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="font-mono-label text-xs uppercase tracking-widest text-graphite/60 dark:text-bone/55">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full bg-transparent border border-graphite/25 dark:border-bone/25 rounded-sm px-4 py-3 text-sm text-graphite dark:text-bone placeholder:text-graphite/40 dark:placeholder:text-bone/35 focus:border-clay dark:focus:border-copper outline-none transition-colors"
      />
    </div>
  )
}
