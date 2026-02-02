import { Code, Database, Wrench, Brain, Users, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'MySQL', 'HTML', 'CSS', 'SQL', 'C'],
    color: 'primary',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'OpenCV', 'Scikit-Learn'],
    color: 'accent',
  },
  {
    title: 'Platforms & Tools',
    icon: Wrench,
    skills: ['PyCharm', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Power BI', 'GitHub'],
    color: 'twilight-gold',
  },
  {
    title: 'AI & Automation',
    icon: Brain,
    skills: ['AI Tools', 'n8n', 'Prompt Engineering', 'Design Tools'],
    color: 'twilight-coral',
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Rapport Building', 'Communication', 'Problem Solving', 'Fast Learner'],
    color: 'twilight-purple',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-[5%] w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass p-6 rounded-2xl hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-${category.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-muted-foreground hover:bg-white/10 hover:text-foreground hover:border-white/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Special Skills Card */}
          <div className="glass p-6 rounded-2xl hover-lift bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center animate-pulse-glow">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gradient-warm">Currently Learning</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Always expanding my skill set and staying updated with the latest in AI/ML
            </p>
            <div className="flex flex-wrap gap-2">
              {['Deep Learning', 'NLP', 'Cloud ML', 'WebD'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-primary/20 border border-primary/30 text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
