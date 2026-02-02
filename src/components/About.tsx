import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Passionate about turning data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <div className="glass p-6 md:p-8 rounded-2xl hover-lift">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a B.Tech student in Artificial Intelligence & Data Science at 
                Galgotias College of Engineering and Technology, Greater Noida. With a 
                strong foundation in Machine Learning, Data Science, and Python-based 
                development, I'm experienced in building predictive models, data-driven 
                automation workflows, and analytical solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Recently completed a Data Science Internship at DaOrion Consulting Pvt Ltd, 
                where I contributed to disease prediction initiatives for an AI-based 
                healthcare platform. I'm passionate about applying problem-solving skills, 
                statistical thinking, and collaborative practices to deliver impactful, 
                data-driven solutions.
              </p>
            </div>

            {/* Interests */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-gradient-warm">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-3">
                {['Designing', 'Quiz Competitions', 'Badminton', 'Art', 'Photography', 'Travelling', 'Networking'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground hover:bg-primary/20 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Experience Cards */}
          <div className="space-y-6">
            {/* Education */}
            <div className="glass p-6 md:p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/50 pl-4">
                  <h4 className="font-medium text-foreground">B.Tech in AI & Data Science</h4>
                  <p className="text-muted-foreground text-sm">Galgotias College of Engineering and Technology</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> 2022-2026
                    </span>
                    <span>CGPA: 7.256</span>
                  </div>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-medium text-foreground">Senior Secondary</h4>
                  <p className="text-muted-foreground text-sm">Aklank Public School, Kota - 88%</p>
                </div>
                <div className="border-l-2 border-primary/20 pl-4">
                  <h4 className="font-medium text-foreground">Matriculation</h4>
                  <p className="text-muted-foreground text-sm">St. Francis Academy, Auraiya - 89.4%</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="glass p-6 md:p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-accent/50 pl-4">
                  <h4 className="font-medium text-foreground">Data Science Intern</h4>
                  <p className="text-muted-foreground text-sm">DaOrion Consulting Pvt Ltd</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> Apr-June 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> Noida
                    </span>
                  </div>
                  <ul className="text-muted-foreground text-sm mt-3 space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Contributed to the development of disease prediction model using real-world healthcare data.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Applied data preprocessing, exploratory data analysis, and machine learning techniques to improve predictive accuracy.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Demonstrated strong technical and analytical skills, professionalism and a sincere approach towards assigned responsibilities.</span>
                    </li>
                  </ul>
                </div>
                <div className="border-l-2 border-accent/30 pl-4">
                  <h4 className="font-medium text-foreground">Freelance Logo Designer</h4>
                  <p className="text-muted-foreground text-sm">Self-employed via Behance</p>
                  <ul className="text-muted-foreground text-sm mt-3 space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Designed custom logos for real-world clients, delivering unique and creative brand identities.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Worked closely with clients to understand their vision, translating it into visually compelling designs.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Developed brand concepts, refined designs through feedback loops, and ensured timely delivery.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
