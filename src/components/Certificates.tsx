import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Data Science Internship',
    issuer: 'DaOrion Consulting Pvt Ltd',
    link: 'https://drive.google.com/file/d/1YoZxH_cFlywxmk9XisAfPOLIoQNYilpS/view',
    description: 'Completed internship with focus on disease prediction models and healthcare data analytics',
  },
  {
    title: 'Google Cloud Agentic AI Day 2025',
    issuer: 'Hack2Skill',
    link: 'https://www.linkedin.com/in/lakshyaprajapati/overlay/1758203952721/single-media-viewer/?profileId=ACoAAD_KcrcB_wdhbqjZELBGMsUUKiA4Ty6uTsA',
    description: 'Certificate of Participation - Google Cloud Agentic AI Day, powered by Hack2Skill. Awarded on 8 September 2025 for submitting an innovative idea to harness the power of Agentic AI.',
  },
  {
    title: 'The Ultimate Job Ready Data Science Course',
    issuer: 'Code With Harry',
    link: 'https://www.linkedin.com/in/lakshyaprajapati/details/certifications/1757669666221/single-media-viewer/?profileId=ACoAAD_KcrcB_wdhbqjZELBGMsUUKiA4Ty6uTsA',
    description: 'Comprehensive data science course covering Python, ML, and data analysis',
  },
  {
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Forage',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_dFR8N5hzswbzNfPpk_1751279577937_completion_certificate.pdf',
    description: 'Practical data analytics simulation by Deloitte',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-[10%] w-64 h-64 bg-twilight-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass p-6 md:p-8 rounded-2xl hover-lift block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-twilight-gold/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-twilight-gold" />
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors flex items-center gap-2">
                    {cert.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  {/* Issuer */}
                  <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
