import { Mail, Phone, MapPin, Github, Linkedin, Globe, Twitter, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { DownloadButton } from '@/components/DownloadButton';

export default function ModernAcademicCV() {
  const handleDownloadCV = () => {
    const pdfUrl = '/cv.pdf'; // Update this path if your PDF is located elsewhere
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="cv-content" className="min-h-screen bg-white text-gray-800 font-sans">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2 text-gray-900">Nirmala Rao Dhanawada</h1>
          <p className="text-xl text-gray-600 mb-6">Architecting Service Delivery Platforms for Social Organizations</p>

          <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
            <a
              href="mailto:nirmal@dhanawada.org"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>nirmal@dhanawada.org</span>
            </a>
            <a href="tel:+61478864823" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+61478864823</span>
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Sydney"
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <MapPin className="h-4 w-4" />
              <span>Sydney, NSW</span>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/thedhanawada/" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/thedhanawada/"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://dhanawada.org" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Globe className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/thedhanawada" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </header>

        {/* Summary */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed mb-4">
              MTC Australia empowers over 20,000 vulnerable individuals each year, providing them with the skills,
              confidence, and opportunities to transform their lives through vocational education and employment
              services. I play a crucial role in this mission by architecting and delivering the technology solutions
              that underpin these vital services.
            </p>
            <p className="text-sm leading-relaxed">
              My current focus is building a robust and scalable Salesforce ecosystem that streamlines our service
              delivery. I'm passionate about creating solutions that are not only efficient but also user-friendly and
              accessible for everyone we serve. This involves collaborating closely with stakeholders to understand
              their needs, designing intuitive interfaces, and ensuring seamless integration with other essential
              systems. I'm equally committed to empowering our internal teams with the tools and workflows they need to
              maximize their impact. By optimizing our technology infrastructure, I aim to help MTC Australia extend its
              reach and create even more life-changing opportunities for the individuals we support.
            </p>
          </CardContent>
        </Card>

        {/* Technical Competencies */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Technical Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-4">Core Expertise - Salesforce Ecosystem</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>
                <span className="font-semibold">Solution Architecture:</span>
                <ul className="list-circle pl-5 space-y-1 mt-1">
                  <li>
                    Extensive experience architecting and implementing end-to-end Salesforce solutions, including
                    complex integrations, data migrations, and custom development.
                  </li>
                  <li>
                    Proven ability to analyze business needs and translate them into scalable, secure, and
                    high-performing technical solutions that optimize user experiences and data flows.
                  </li>
                  <li>
                    Adept at leveraging managed packages and customizing them to meet unique organizational
                    requirements.
                  </li>
                  <li>
                    Skilled in extending Salesforce functionality through custom third-party applications and
                    integrations with external platforms like WordPress, ensuring seamless data synchronization and user
                    experiences.
                  </li>
                  <li>
                    Expertise in utilizing Lightning Out to create engaging user interfaces and forms that interact with
                    Salesforce data on external platforms.
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Development:</span> Apex, Lightning Web Components, Visualforce
              </li>
              <li>
                <span className="font-semibold">Configuration:</span> Security, Workflows, Process Builder
              </li>
              <li>
                <span className="font-semibold">Integrations:</span> Connecting Salesforce with external systems like
                Marketo, AskNicely, FormAssembly, SMS Magic (SMS Converse) using APIs and middleware.
              </li>
              <li>
                <span className="font-semibold">Data Management:</span>
                <ul className="list-circle pl-5 space-y-1 mt-1">
                  <li>ETL processes with Talend to load data into Salesforce.</li>
                  <li>Extracting data from Salesforce to MS SQL for Business Intelligence purposes.</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Broad Technical Expertise</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Cloud & Infrastructure:</span> AWS (Lambda), Azure, Google Workspace,
                Docker, Heroku
              </li>
              <li>
                <span className="font-semibold">Development & APIs:</span> Node.js, JavaScript, .NET, C#, Python, Power
                Apps, Power Automate
              </li>
              <li>
                <span className="font-semibold">Databases & ETL:</span> MS SQL, Talend, Salesforce Connect
              </li>
              <li>
                <span className="font-semibold">Web Technologies:</span> JavaScript, .NET, SQL, WordPress, Wiki.js
              </li>
              <li>
                <span className="font-semibold">Enterprise Architecture:</span> TOGAF, ITIL, COBIT
              </li>
              <li>
                <span className="font-semibold">DevOps:</span> Git, Azure DevOps, GitHub Actions, Salesforce DevOps
              </li>
              <li>
                <span className="font-semibold">Compliance:</span> Monsido (Web Accessibility)
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    Senior IT Solutions Analyst at{" "}
                    <a
                      href="https://mtcaustralia.com.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      MTC Australia
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">Sydney, NSW</p>
                </div>
                <Badge variant="secondary">2022.02 - Present</Badge>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Spearheaded the technical design and implementation of mission-critical Salesforce solutions for a
                  diverse portfolio of educational and employment programs, including Skills for Education and
                  Employment (SEE), Employability Skills Training (EST), Career Transition Assistance (CTA), VET
                  training programs, Workforce Australia, Self Employment Assistance, National Disability Insurance
                  Scheme (NDIS), and No Interest Loans Scheme (NILS). These solutions are used by 90% of the
                  organization's staff, demonstrating their widespread impact and adoption.
                </li>
                <li>
                  Key Accomplishments:
                  <ul className="list-circle pl-5 space-y-1 mt-1">
                    <li>
                      Architected and delivered a Salesforce-based student management system that went live in 2024,
                      currently serving 300+ staff and 3000+ students daily. This system features custom-built
                      components and automated workflows to streamline enrollment, progress tracking, and reporting,
                      significantly improving operational efficiency.
                    </li>
                    <li>
                      Led the development and implementation of a volunteer management application within Salesforce to
                      streamline onboarding and engagement processes for Employability Skills Training (EST) programs.
                    </li>
                    <li>
                      Successfully migrated legacy data to Salesforce for Workforce Australia and Self Employment
                      Assistance programs, ensuring data integrity and a smooth transition for end-users.
                    </li>
                  </ul>
                </li>
                <li>
                  Demonstrated expertise in:
                  <ul className="list-circle pl-5 space-y-1 mt-1">
                    <li>
                      Customizing Salesforce: Developed and deployed custom Apex, Lightning Web Components, and
                      Visualforce solutions to extend Salesforce functionality and meet specific business requirements.
                    </li>
                    <li>
                      Integrating Salesforce: Connected Salesforce with external systems like Marketo, AskNicely,
                      FormAssembly, and SMS Magic (SMS Converse) using APIs and middleware to enhance marketing and
                      communication capabilities.
                    </li>
                    <li>
                      Connecting Salesforce with WordPress: Integrated Salesforce with WordPress websites to enable
                      dynamic content updates and data synchronization, ensuring consistent information across
                      platforms.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    University Research Placement Student at{" "}
                    <a
                      href="https://www.wehi.edu.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Walter and Eliza Hall Institute of Medical Research
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">Melbourne, AU</p>
                </div>
                <Badge variant="secondary">2021.07 - 2021.10</Badge>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Requirements Assessment: Determined the requirements of the Blood Cells and Blood Cancer Division at
                  WEHI and the Centre for Stem Cell Systems at the University of Melbourne.
                </li>
                <li>
                  Implementation: Executed the implementation, enabling the expansion of the application's
                  functionality.
                </li>
                <li>
                  Documentation: Provided detailed technical documentation to facilitate future understanding and use by
                  researchers.
                </li>
                <li>
                  Client Collaboration: Engaged in constructive discussions with the client to suggest ideas and
                  improvements, leading to the application's expansion.
                </li>
                <li>
                  Publication: Compiled and published the new implementation on NECTAR Research Cloud, making the
                  application accessible to researchers.
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    Senior Technology Analyst at{" "}
                    <a
                      href="https://www.victoriassecretandco.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Victoria's Secret & Co.
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">Bangalore, IN</p>
                </div>
                <Badge variant="secondary">2016.10 - 2020.2</Badge>
              </div>
              <p className="text-sm italic mb-2">Recipient of Individual Achievement Award</p>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Accelerator Program: Implemented and facilitated an internal corporate accelerator program, working
                  with over 150 startups to validate technology feasibility and integration. Led collaboration with 12
                  startups in developing use cases for prototypes and successfully delivered them to the organization.
                </li>
                <li>
                  Technology Integration: Managed the integration of technology within the organization, partnering with
                  a diverse range of stakeholders to ensure successful implementation.
                </li>
                <li>
                  Innovation Framework: Developed a framework to enable internal innovation and technology advancement,
                  collaborating with 200+ associates from 10 business verticals and a project worth USD 650k.
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    Assistant System Engineer at{" "}
                    <a
                      href="https://www.tcs.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Tata Consultancy Services
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">Chennai, IN</p>
                </div>
                <Badge variant="secondary">2015.6 - 2016.10</Badge>
              </div>
              <p className="text-sm italic mb-2">Recipient of Star of the Learners Group</p>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Technology Research: Conducted research on emerging solutions, products, and startup opportunities in
                  retail technologies and provided the organization with the necessary tools to stay ahead in the
                  industry.
                </li>
                <li>
                  Technology Implementation: Applied new technologies to existing problems to create disruptive
                  competitive advantages for retail enterprises.
                </li>
                <li>
                  Technology Maintenance: Ensured that the technology was always operational, maintained network code,
                  managed enterprise sandboxes, coordinated regular activities in the innovation space, and managed
                  enterprise sandboxes.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">University of Melbourne</h3>
                  <p className="text-sm italic">Graduate Study (Master Program), Information Technology (Computing)</p>
                </div>
                <Badge variant="secondary">2020.2 - 2021.12</Badge>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  <a href="https://policy.unimelb.edu.au/MPF1327" className="text-blue-600 hover:underline">
                    Distinction
                  </a>{" "}
                  Awardee,
                  <a
                    href="https://eng.unimelb.edu.au/students/coursework/progress-your-career/sap/deans-honours-award#2021"
                    className="text-blue-600 hover:underline"
                  >
                    {" "}
                    2021 Dean's Honours List
                  </a>
                </li>
                <li>
                  Recipient of
                  <a
                    href="https://scholarships.unimelb.edu.au/awards/melbourne-school-of-engineering-foundation-scholarship"
                    className="text-blue-600 hover:underline"
                  >
                    {" "}
                    Melbourne School of Engineering Scholarship, 2020
                  </a>
                </li>
                <li>
                  Recipient of
                  <a
                    href="https://students.unimelb.edu.au/careers/get-career-ready/leadership-and-employability-programs/leaders-in-communities-award-lica"
                    className="text-blue-600 hover:underline"
                  >
                    {" "}
                    Leaders in Communities Award, 2021
                  </a>
                </li>
                <li>
                  Key courses: Software Project Management, Enterprise Architecture, ICT Infrastructure, Digital Ethics
                  and Technology Equity & Management
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    Sri Manakula Vinayagar Engineering College, Pondicherry University
                  </h3>
                  <p className="text-sm italic">
                    Undergraduate Study (Bachelor Program), Computer Science and Engineering
                  </p>
                </div>
                <Badge variant="secondary">2011.08 - 2015.05</Badge>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Key courses: Data Structures, Automata Languages and Computation, Object-Oriented Programming
                  Languages and Design and Analysis of Algorithms
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Volunteering */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Volunteering</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    Head of Technology Development at{" "}
                    <a
                      href="https://teachingforimpact.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Teaching for Impact
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">Melbourne, AU</p>
                </div>
                <Badge variant="secondary">2021.02 - 2024.04</Badge>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Web Infrastructure & Services: Assisted the organization in establishing web infrastructure and
                  services for seamless operations.
                </li>
                <li>
                  Partnerships & Grants: Fostered partnerships with Google, Salesforce, and Canva, securing technology
                  grants to enable more efficient content development.
                </li>
                <li>
                  Technology Workflow: Implemented an end-to-end technology workflow process utilizing Salesforce and
                  Microsoft to streamline internal processes.
                </li>
                <li>
                  Marketing & Brand Strategy: Developed a marketing and brand strategy to promote Teaching for Impact,
                  both in Australia and globally.
                </li>
                <li>
                  Website Management: Created and maintained the organization's website, resulting in increased
                  engagement at events.
                </li>
                <li>
                  Advertising & Marketing: Managed a 120k AUD advertisement budget through Google Ads, and devised
                  marketing strategies to enhance brand awareness.
                </li>
                <li>
                  Volunteer Coordination: Motivated and directed over 30 volunteers to achieve the organization's goals
                  and strategies.
                </li>
              </ul>
            </div>

            <Separator />

            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg">
                    Store Coordinator at{" "}
                    <a
                      href="https://www.redcross.org.au/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Australian Red Cross
                    </a>
                  </h3>
                  <p className="text-sm text-gray-600">Melbourne, AU</p>
                </div>
                <Badge variant="secondary">2021.01 - 2022.05</Badge>
              </div>
              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Customer Service: Volunteered to serve customers, leading to increased sales and higher customer
                  engagement.
                </li>
                <li>
                  Visual Merchandising: Created window displays and visual merchandising displays that piqued customers'
                  interest in merchandise.
                </li>
                <li>
                  Donation Management: Assisted in the preparation of donations for sale, raising capital for the
                  organization's projects and operations.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Research */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Research</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <h3 className="font-bold text-lg">
                <a
                  href="https://dl.acm.org/doi/10.1145/2743065.2743121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Big Data Scalability, Methods and its Implications: A Survey of Current Practice
                </a>
              </h3>
              <p className="text-sm italic">March 2015</p>
              <p className="text-sm">Article No.: 56, Pages 1–5</p>
              <p className="text-sm">
                J. Amudhavel, D. Sathian, R. S. Raghav, Nirmala Rao Dhanawada, P. Dhavachelvan, and K. Prem Kumar
              </p>
              <p className="text-sm italic">
                ICARCSET '15: Proceedings of the 2015 International Conference on Advanced Research in Computer Science
                Engineering & Technology (ICARCSET 2015)
              </p>
              <a
                href="https://doi.org/10.1145/2743065.2743121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                PDF
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Featured Personal Projects */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Featured Personal Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="font-bold text-lg">
                <a
                  href="https://github.com/thedhanawada/standupplus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  StandUp+
                </a>
                <Badge variant="secondary" className="ml-2">
                  Active
                </Badge>
              </h3>
              <p className="text-sm mb-2">
                An open-source tool for effortless tracking and real results. StandUp+ helps teams streamline their
                daily standups and track progress effectively.
              </p>
              <p className="text-sm">
                <span className="font-semibold">Technologies:</span> React, TypeScript, Node.js, MongoDB
              </p>
              <a
                href="https://standupplus.dhanawada.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Live Demo <ExternalLink className="inline-block h-4 w-4" />
              </a>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                <a
                  href="https://github.com/thedhanawada/SpinOnSubmitJS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  SpinOnSubmitJS
                </a>
                <Badge variant="secondary" className="ml-2">
                  Active
                </Badge>
              </h3>
              <p className="text-sm mb-2">
                A compact JavaScript library that enhances form submit buttons with a visual loading spinner, providing
                immediate and intuitive feedback to users upon submission.
              </p>
              <p className="text-sm">
                <span className="font-semibold">Technologies:</span> JavaScript, CSS, DOM API
              </p>
              <a
                href="https://www.npmjs.com/package/spinonsubmitjs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                NPM Package <ExternalLink className="inline-block h-4 w-4" />
              </a>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                <a
                  href="https://github.com/thedhanawada/LiveValidateJS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  LiveValidateJS
                </a>
                <Badge variant="secondary" className="ml-2">
                  Active
                </Badge>
              </h3>
              <p className="text-sm mb-2">
                A lightweight JavaScript library that provides real-time form validation and input checking for HTML
                forms. Create custom validation rules for each input field and receive instant feedback as users type.
              </p>
              <p className="text-sm">
                <span className="font-semibold">Technologies:</span> JavaScript, Form Validation, DOM API
              </p>
              <a
                href="https://www.npmjs.com/package/livevalidatejs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                NPM Package <ExternalLink className="inline-block h-4 w-4" />
              </a>
            </div>

            <div>
              <h3 className="font-bold text-lg">
                <a
                  href="https://github.com/thedhanawada/timeless-veil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Timeless Veil
                </a>
                <Badge variant="secondary" className="ml-2">
                  Completed
                </Badge>
              </h3>
              <p className="text-sm mb-2">
                A minimalist Firefox theme with an elegant color palette. Sometimes the simplest things catch on - this
                theme brings a touch of sophistication to your browsing experience.
              </p>
              <p className="text-sm">
                <span className="font-semibold">Technologies:</span> Firefox Theme, Design, CSS
              </p>
              <a
                href="https://addons.mozilla.org/en-US/firefox/addon/timeless-veil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                Firefox Add-on <ExternalLink className="inline-block h-4 w-4" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-600 mt-12">
          <DownloadButton />
        </footer>
      </div>
    </div>
  )
}
