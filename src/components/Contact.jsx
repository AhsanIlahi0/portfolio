import { useState } from 'react'
import { profile } from '../data/content'
import Reveal from './Reveal'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  RotateCcw,
} from 'lucide-react'
import { Github, Linkedin } from './Icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      // Direct AJAX transmission to Ahsan's inbox
      const endpoint = `https://formsubmit.co/ajax/${profile.email}`
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Inquiry from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        throw new Error(data.message || 'Unable to transmit directly. Please use fallback mailto.')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
      setErrorMessage(
        'Direct server transmission encountered an issue. You can transmit directly via your mail client below.'
      )
    }
  }

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="relative px-6 max-w-6xl mx-auto py-24 md:py-36 z-10">
      <Reveal>
        <p className="font-mono-label text-xs uppercase tracking-[0.25em] text-clay dark:text-copper mb-4">
          ~/contact
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-graphite dark:text-bone mb-4 max-w-2xl tracking-tight">
          Available for new opportunities — let's connect.
        </h2>
        <p className="text-base text-graphite/70 dark:text-bone/65 mb-14 max-w-xl">
          Whether you have an opening, a freelance project, or just want to talk tech, send a direct message below.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
        {/* Contact Links Column */}
        <Reveal delay={120} direction="up">
          <div className="p-8 rounded-xl border border-graphite/15 dark:border-bone/15 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-md space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-graphite/10 dark:border-bone/10 font-mono-label text-xs uppercase tracking-widest text-graphite/60 dark:text-bone/50">
              <MessageSquare className="w-4 h-4 text-copper" />
              <span>Direct Channels</span>
            </div>

            <ul className="space-y-4">
              <ContactRow
                icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactRow
                icon={Phone}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone}`}
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value={profile.location}
              />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="ahsanilahi0"
                href={profile.linkedin}
                external
              />
              <ContactRow
                icon={Github}
                label="GitHub"
                value="AhsanIlahi0"
                href={profile.github}
                external
              />
            </ul>
          </div>
        </Reveal>

        {/* Contact Form Column */}
        <Reveal delay={160} direction="up">
          <div className="p-8 rounded-xl border border-graphite/15 dark:border-bone/15 bg-parchment-soft/50 dark:bg-ink-soft/60 backdrop-blur-md shadow-md">
            <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-graphite/10 dark:border-bone/10 font-mono-label text-xs uppercase tracking-widest text-graphite/60 dark:text-bone/50">
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-copper" />
                <span>Send a Direct Email</span>
              </div>
              <span className="text-[10px] text-emerald-500 font-medium">SSL Encrypted</span>
            </div>

            {status === 'success' ? (
              <div className="py-8 text-center space-y-4 animate-riseIn">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-graphite dark:text-bone">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-graphite/80 dark:text-bone/75 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been sent directly to Ahsan's inbox and you will receive a response shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-graphite/20 dark:border-bone/20 font-mono-label text-xs uppercase tracking-widest text-graphite dark:text-bone hover:border-copper hover:text-copper transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-600 dark:text-red-400 space-y-2 animate-riseIn">
                    <div className="flex items-center gap-2 font-medium">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleMailtoFallback}
                      className="font-mono-label text-xs uppercase tracking-wider underline hover:text-copper transition-colors"
                    >
                      Open in Mail App →
                    </button>
                  </div>
                )}

                <Field
                  label="Your Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Smith"
                  required
                  disabled={status === 'submitting'}
                />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  required
                  disabled={status === 'submitting'}
                />
                <div>
                  <label className="font-mono-label text-xs uppercase tracking-widest text-graphite/70 dark:text-bone/60 font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    disabled={status === 'submitting'}
                    placeholder="Hi Ahsan, I'd like to discuss a project or role..."
                    className="mt-2 w-full bg-parchment/60 dark:bg-ink/60 border border-graphite/20 dark:border-bone/20 rounded-lg px-4 py-3 text-sm text-graphite dark:text-bone placeholder:text-graphite/40 dark:placeholder:text-bone/35 focus:border-clay dark:focus:border-copper outline-none transition-colors resize-none backdrop-blur-sm disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-auto px-8 py-3.5 bg-clay dark:bg-copper text-parchment dark:text-ink font-mono-label text-xs uppercase tracking-widest rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-copper/25 transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, label, value, href, external }) {
  return (
    <li className="flex items-center justify-between border-b border-graphite/10 dark:border-bone/10 pb-3">
      <div className="flex items-center gap-2.5">
        <Icon className="w-4 h-4 text-slate" />
        <span className="font-mono-label text-xs uppercase tracking-widest text-graphite/60 dark:text-bone/50">
          {label}
        </span>
      </div>
      {href ? (
        <a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          className="text-sm font-medium text-graphite dark:text-bone hover:text-clay dark:hover:text-copper transition-colors flex items-center gap-1"
        >
          <span>{value}</span>
          {external && <ExternalLink className="w-3 h-3 text-graphite/40 dark:text-bone/40" />}
        </a>
      ) : (
        <span className="text-sm font-medium text-graphite dark:text-bone">{value}</span>
      )}
    </li>
  )
}

function Field({ label, name, value, onChange, type = 'text', placeholder, required, disabled }) {
  return (
    <div>
      <label className="font-mono-label text-xs uppercase tracking-widest text-graphite/70 dark:text-bone/60 font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="mt-2 w-full bg-parchment/60 dark:bg-ink/60 border border-graphite/20 dark:border-bone/20 rounded-lg px-4 py-3 text-sm text-graphite dark:text-bone placeholder:text-graphite/40 dark:placeholder:text-bone/35 focus:border-clay dark:focus:border-copper outline-none transition-colors backdrop-blur-sm disabled:opacity-50"
      />
    </div>
  )
}
