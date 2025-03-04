'use client';

import { Page, Document, Text, Image } from '@react-pdf/renderer';
import { PDFHeader, PDFSection, PDFItem } from './PDFComponents';

// Sample data - replace with your actual data
const cvData = {
  name: 'John Doe',
  title: 'Software Engineer',
  image: '/placeholder-user.jpg',
  about: 'Experienced software engineer with a passion for building scalable web applications...',
  experience: [
    {
      title: 'Senior Software Engineer',
      subtitle: 'Tech Company - Jan 2020 to Present',
      description: 'Led development of multiple web applications...'
    }
    // Add more experience items
  ],
  education: [
    {
      title: 'Bachelor of Science in Computer Science',
      subtitle: 'University Name - Graduated 2019',
      description: 'Graduated with honors...'
    }
    // Add more education items
  ],
  skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
  projects: [
    {
      title: 'Project Name',
      subtitle: 'Project subtitle',
      description: 'Project description...'
    }
    // Add more projects
  ]
};

export function CVPDFDocument() {
  return (
    <Document>
      <Page>
        <PDFHeader name={cvData.name} title={cvData.title} image={<Image src={cvData.image} />} />

        <PDFSection title="About">
          <Text>{cvData.about}</Text>
        </PDFSection>

        <PDFSection title="Experience">
          {cvData.experience.map((exp, index) => (
            <PDFItem
              key={index}
              title={exp.title}
              subtitle={exp.subtitle}
              description={exp.description}
            />
          ))}
        </PDFSection>

        <PDFSection title="Education">
          {cvData.education.map((edu, index) => (
            <PDFItem
              key={index}
              title={edu.title}
              subtitle={edu.subtitle}
              description={edu.description}
            />
          ))}
        </PDFSection>

        <PDFSection title="Skills">
          <Text>{cvData.skills.join(', ')}</Text>
        </PDFSection>

        <PDFSection title="Projects">
          {cvData.projects.map((proj, index) => (
            <PDFItem
              key={index}
              title={proj.title}
              subtitle={proj.subtitle}
              description={proj.description}
            />
          ))}
        </PDFSection>
      </Page>
    </Document>
  );
}
