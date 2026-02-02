import { ExternalLink, Github, Bot, Heart, Smile, Leaf, Users, Cpu, FileCode } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'Real-Time Face Recognition Attendance',
    description: 'Built a real-time face recognition system to automate attendance marking using webcam, OpenCV, and facial encodings with automated data logging.',
    icon: Users,
    tags: ['Python', 'OpenCV', 'Face Recognition'],
    link: 'https://github.com/LakshyaPRJ/Face-Identification-and-attendance-system',
    color: 'primary',
  },
  {
    title: 'Emotion Classifier Web App',
    description: 'Multi-class Emotion Classification web app using Streamlit with TF-IDF vectorization, chi²-based feature selection, and Logistic Regression.',
    icon: Smile,
    tags: ['Python', 'Streamlit', 'NLP', 'ML'],
    link: 'https://github.com/LakshyaPRJ/Emotion_Classifier',
    color: 'accent',
  },
  {
    title: 'Heart Disease Prediction',
    description: 'Logistic regression model predicting 10-year heart disease risk using Framingham dataset with 85% accuracy and comprehensive EDA.',
    icon: Heart,
    tags: ['Python', 'Scikit-Learn', 'Pandas'],
    link: 'https://github.com/LakshyaPRJ/Framingham-Heart-Disease-Risk-Prediction',
    color: 'twilight-coral',
  },
  {
    title: 'Carbon Footprint Estimator',
    description: 'End-to-end ML app using Random Forest regression to estimate weekly CO2 emissions from lifestyle data with feature importance analysis.',
    icon: Leaf,
    tags: ['Python', 'Random Forest', 'Regression'],
    link: 'https://co2footprintestimator.streamlit.app/',
    color: 'twilight-gold',
  },
  {
    title: 'Telegram Rock-Paper-Scissors Bot',
    description: 'Python Telegram bot using Telebot API for real-time gaming. Deployed on PythonAnywhere for continuous availability.',
    icon: Bot,
    tags: ['Python', 'Telebot API', 'PythonAnywhere'],
    link: 'https://t.me/handgamerbot',
    color: 'twilight-purple',
  },
  {
    title: 'Social Media Automation Workflow',
    description: 'End-to-end automation using n8n, Google Sheets, OpenAI, LinkedIn API, and X API for auto-publishing content across platforms.',
    icon: Cpu,
    tags: ['n8n', 'OpenAI', 'APIs', 'Automation'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7362964211729125377/',
    color: 'primary',
  },
  {
    title: 'Font Installer Automation Script',
    description: 'Python script to automatically install fonts from ZIP files on Windows with admin check and font cache refresh.',
    icon: FileCode,
    tags: ['Python', 'Windows', 'Automation'],
    link: 'https://github.com/LakshyaPRJ/extract_and_install_fonts',
    color: 'accent',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my work in ML, automation, and data science
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass p-6 rounded-2xl hover-lift block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-${project.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 text-${project.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/LakshyaPRJ" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
