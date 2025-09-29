import { Code, Database, Brain, Users, MessageCircle, Target } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java (Core & Advanced)", "Python", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Frameworks & Technologies",
      icon: <Database className="h-6 w-6" />,
      skills: ["Spring MVC", "Servlets & JSP", "JDBC", "MySQL"]
    },
    {
      category: "AI/ML & Analytics",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Machine Learning Models", "Predictive Analytics", "Gemini API", "Data Visualization"]
    }
  ];

  const softSkills = [
    {
      name: "Teamwork & Leadership",
      icon: <Users className="h-6 w-6" />,
      description: "Led 3-member predictive tyre wear project team"
    },
    {
      name: "Communication & Public Speaking",
      icon: <MessageCircle className="h-6 w-6" />,
      description: "Finalist at KPIT Sparkle 2025, 1st Prize at INNOVISION"
    },
    {
      name: "Problem-Solving",
      icon: <Target className="h-6 w-6" />,
      description: "100+ DSA problems solved with systematic approach"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning full-stack development, AI/ML, and leadership
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSkills.map((category, index) => (
              <div key={index} className="hero-card p-6 rounded-2xl">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-coral/20 rounded-full mr-4 tech-icon">
                    <div className="text-coral">{category.icon}</div>
                  </div>
                  <h4 className="font-semibold">{category.category}</h4>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-coral rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="hero-card p-6 rounded-2xl text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-coral/20 rounded-full tech-icon">
                    <div className="text-coral">{skill.icon}</div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2">{skill.name}</h4>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technologies I Work With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              "Java", "Python", "Spring", "MySQL", "React", "JavaScript", 
              "HTML5", "CSS3", "Git", "Figma", "AI/ML"
            ].map((tech, index) => (
              <div 
                key={index} 
                className="hero-card p-4 rounded-xl text-center text-sm font-medium tech-icon hover:scale-105 transition-transform duration-300"
              >
                <span className="block">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;