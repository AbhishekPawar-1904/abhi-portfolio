import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Trophy, Smartphone, Database, Layout } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TyreLife AI",
      subtitle: "Predictive Tyre Maintenance App",
      description: "AI-powered Android application for predictive tyre maintenance using Gemini API. Award-winning project with intelligent analytics and real-time monitoring.",
      features: ["AI/ML Integration", "Gemini API", "Android Development", "Predictive Analytics"],
      icon: <Trophy className="h-8 w-8" />,
      tags: ["AI/ML", "Android", "Gemini API", "Award Winner"],
      status: "🏆 Award Winner",
      liveUrl: "https://github.com/AbhishekPawar-1904",
      githubUrl: "https://github.com/AbhishekPawar-1904"
    },
    {
      title: "ServiceSathi",
      subtitle: "Motor Service Reminder App",
      description: "Comprehensive motor service management system built with Spring MVC, JSP, and MySQL. Features multi-role user system and automated service scheduling.",
      features: ["Spring MVC", "JSP & Servlets", "MySQL Database", "Multi-role System"],
      icon: <Smartphone className="h-8 w-8" />,
      tags: ["Java", "Spring MVC", "MySQL", "Web App"],
      status: "🚀 Production Ready",
      liveUrl: "https://github.com/AbhishekPawar-1904/ServiceSathi-Motor-Service-Reminder-App",
      githubUrl: "https://github.com/AbhishekPawar-1904/ServiceSathi-Motor-Service-Reminder-App"
    },
    {
      title: "EcoSaver",
      subtitle: "Household Energy Consumption Tracker",
      description: "CRUD application for tracking household energy consumption built with Java Servlets, JSP, and JDBC. Helps families monitor and reduce energy usage.",
      features: ["Java Servlets", "JSP", "JDBC", "Energy Analytics"],
      icon: <Database className="h-8 w-8" />,
      tags: ["Java", "JDBC", "JSP", "Analytics"],
      status: "✅ Completed",
      liveUrl: "https://github.com/AbhishekPawar-1904/EcoSaver-Household-Energy-Consumption-Tracker",
      githubUrl: "https://github.com/AbhishekPawar-1904/EcoSaver-Household-Energy-Consumption-Tracker"
    },
    {
      title: "Gym Management System",
      subtitle: "Responsive UI Design",
      description: "Modern, responsive frontend for gym management system built with HTML, CSS, and JavaScript. Features member management and workout tracking interfaces.",
      features: ["Responsive Design", "Modern UI/UX", "HTML5/CSS3", "JavaScript"],
      icon: <Layout className="h-8 w-8" />,
      tags: ["Frontend", "UI/UX", "Responsive", "JavaScript"],
      status: "🎨 UI Complete",
      liveUrl: "https://github.com/AbhishekPawar-1904",
      githubUrl: "https://github.com/AbhishekPawar-1904"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning AI/ML applications, full-stack web development, 
            and responsive UI designs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="hero-card p-8 rounded-2xl group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 bg-coral/20 rounded-full mr-4 tech-icon">
                    <div className="text-coral">{project.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-coral font-medium">{project.subtitle}</p>
                  </div>
                </div>
                <span className="text-xs bg-coral/20 text-coral px-2 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-coral rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  className="bg-coral hover:bg-coral-dark text-coral-foreground flex-1"
                  onClick={() => window.open(project.liveUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-coral text-coral hover:bg-coral hover:text-coral-foreground"
                  onClick={() => window.open(project.githubUrl, '_blank')}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-coral text-coral hover:bg-coral hover:text-coral-foreground"
            onClick={() => window.open('https://github.com/AbhishekPawar-1904', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;