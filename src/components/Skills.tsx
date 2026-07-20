type SkillCategory = {
  title:   | 'AI & Machine Learning'
  | 'LLMs & RAG'
  | 'Data Science'
  | 'Data Analytics & Visualization'
  | 'Programming & Databases'
  | 'Tools & Deployment'
  description?: string
  skills: string[]
}

const categories: SkillCategory[] = [
    {
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems using Machine Learning, Deep Learning, Generative AI, and modern AI frameworks.',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'ANN',
        'CNN',
        'RNN',
        'LSTM',
        'TensorFlow',
        'Model Development',
        'Generative AI'
      ],
    },
    {
      title: 'LLMs & RAG',
      description: 'Developing LLM-powered applications with Retrieval-Augmented Generation, semantic search, and vector databases.',
      skills: [
        'LangChain',
        'FAISS',
        'Hugging Face',
        'Sentence Transformers',
        'Embedding Models',
        'Vector Databases',
        'RAG',
        'Groq API',
        'Ollama',
        'Prompt Engineering'
      ],
    },
    {
      title: 'Data Science',
      description: 'Data-driven problem solving through preprocessing, feature engineering, and predictive modeling.',
      skills: [
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'EDA',
        'Regression',
        'Classification',
        'Data Preprocessing',
        'Feature Engineering',
        'Model Evaluation',
        'ETL'
      ],
    },
    {
      title: 'Data Analytics & Visualization',
      description: 'Transforming raw data into meaningful insights through analysis and visualization.',
      skills: [
        'Data Cleaning',
        'Data Transformation',
        'Semantic Search',
        'Matplotlib',
        'Seaborn',
        'Power BI',
        'Dashboarding'
      ],
    },
    {
      title: 'Programming & Databases',
      description: 'Programming languages and database technologies for AI and software development.',
      skills: [
        'Python',
        'SQL',
        'C',
        'MySQL',
        'MongoDB'
      ],
    },
    {
      title: 'Tools & Deployment',
      description: 'Development, experimentation, version control, deployment, and containerization tools.',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Jupyter Notebook',
        'Streamlit',
        'Docker',
        'Microsoft Excel'
      ],
    },
  ]

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell section-divider flex min-h-screen items-center bg-slate-50/70 dark:bg-slate-900/45 scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-reveal>
          <h2 className="bg-gradient-to-r from-blue-700 to-violet-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-blue-300 dark:to-violet-300 sm:text-4xl">
            Technologies & Skills
          </h2>
          
          <p className="section-subtitle mx-auto">
            Core tools and technologies I use to build data-driven solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              data-reveal
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {category.title}
              </h3>

              {category.description ? (
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{category.description}</p>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-300/90 bg-slate-100/75 px-4 py-1.5 text-sm font-medium text-slate-700 transition duration-200 hover:scale-105 hover:border-violet-400 hover:text-violet-700 hover:shadow-[0_0_0_3px_rgba(139,92,246,0.12)] dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-200 dark:hover:shadow-[0_0_0_3px_rgba(96,165,250,0.15)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}