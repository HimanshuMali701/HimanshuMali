import {
  Building2,
  Calendar,
  Cpu,
  FileText,
  MapPin,
  Shield,
  Terminal,
} from 'lucide-react'

type Contribution = {
  title: string
  description: string
  icon: typeof Shield
}

type ExperienceItem = {
  role: string
  company: string
  location: string
  duration: string
  contributions: Contribution[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: 'AI/ML Intern',
    company: 'CyberSecurity Umbrella',
    location: 'Surat, Gujarat, India',
    duration: 'July 2026 – September 2026',
    contributions: [
      {
        title: 'Security-Agent — Windows Endpoint Monitoring',
        description:
          'Developed Security-Agent, a Windows endpoint monitoring system for collecting system, process, and Windows Event Log telemetry for centralized security monitoring.',
        icon: Terminal,
      },
      {
        title: 'Security Monitoring Infrastructure',
        description:
          'Worked on FastAPI-based security monitoring, event normalization, local buffering, multi-agent LAN communication, rule-based alerting, and executable packaging.',
        icon: Shield,
      },
      {
        title: 'RAG-Based PDF Question-Answering System',
        description:
          'Built a RAG-based PDF question-answering pipeline using LangChain, FAISS, Hugging Face embeddings, and LLM APIs, with semantic retrieval, source citations, and evaluation logging.',
        icon: FileText,
      },
      {
        title: 'Advanced Intern Management System (AIMS)',
        description:
          'Contributed to the Advanced Intern Management System (AIMS), implementing task-management enhancements and report summarization features based on mentor requirements.',
        icon: Cpu,
      },
    ],
    technologies: [
      'Python',
      'FastAPI',
      'LangChain',
      'FAISS',
      'Hugging Face',
      'LLM APIs',
      'Windows Event Logs',
      'Security Monitoring',
    ],
  },
]

const techTagPalette = [
  'bg-blue-50 text-blue-700 border-blue-200/70 dark:bg-blue-500/15 dark:text-blue-200 dark:border-blue-500/30',
  'bg-violet-50 text-violet-700 border-violet-200/70 dark:bg-violet-500/15 dark:text-violet-200 dark:border-violet-500/30',
  'bg-indigo-50 text-indigo-700 border-indigo-200/70 dark:bg-indigo-500/15 dark:text-indigo-200 dark:border-indigo-500/30',
  'bg-emerald-50 text-emerald-700 border-emerald-200/70 dark:bg-emerald-500/15 dark:text-emerald-200 dark:border-emerald-500/30',
  'bg-cyan-50 text-cyan-700 border-cyan-200/70 dark:bg-cyan-500/15 dark:text-cyan-200 dark:border-cyan-500/30',
]

function Experience() {
  return (
    <section
      id="experience"
      className="section-shell section-divider flex min-h-screen items-center bg-slate-50/70 dark:bg-slate-900/45 scroll-mt-20 py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-reveal className="max-w-3xl">
          <h2 className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-blue-300 dark:via-indigo-300 dark:to-violet-300 sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Hands-on experience building AI/ML applications, security monitoring systems, and intelligent software solutions.
          </p>
        </div>

        <div className="mt-12 space-y-8" data-reveal>
          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/85 dark:hover:border-blue-700/50 sm:p-8"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-500 dark:via-indigo-500 dark:to-violet-500" />

              <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 dark:border-slate-800/80 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 sm:text-2xl">
                    {exp.role}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-2 text-base font-semibold text-blue-600 dark:text-blue-400">
                    <Building2 size={18} className="shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium dark:border-slate-700 dark:bg-slate-800/70">
                    <Calendar size={14} className="text-slate-500 dark:text-slate-400" />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium dark:border-slate-700 dark:bg-slate-800/70">
                    <MapPin size={14} className="text-slate-500 dark:text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Responsibilities & Contributions
                </h4>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {exp.contributions.map((item) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={item.title}
                        className="flex flex-col justify-between rounded-xl border border-slate-200/80 bg-slate-50/70 p-4 transition duration-200 hover:border-blue-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-blue-700/50 dark:hover:bg-slate-800/60 sm:p-5"
                      >
                        <div>
                          <div className="flex items-center gap-2.5">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-200 bg-blue-100/70 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
                              <IconComponent size={16} />
                            </span>
                            <h5 className="text-sm font-semibold text-slate-900 dark:text-slate-100 sm:text-base">
                              {item.title}
                            </h5>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Technologies & Tools
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1 text-xs font-medium transition duration-200 hover:scale-105 ${techTagPalette[idx % techTagPalette.length]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
