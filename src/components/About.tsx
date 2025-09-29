import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am an aspiring Computer Engineer driven by a passion for technological innovation 
            and problem-solving. With a strong foundation in Python, Java, and modern web development, 
            I focus on building efficient, user-centric applications and systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Education */}
          <div className="hero-card p-6 rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-coral/20 rounded-full mr-4">
                <GraduationCap className="h-6 w-6 text-coral" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div>
              <h4 className="font-semibold text-coral mb-2">B.Tech in Computer Engineering</h4>
              <p className="text-muted-foreground mb-1">RC Patel Institute of Technology, Shirpur</p>
              <p className="text-sm text-muted-foreground">2023 – 2027 (Expected May 2027)</p>
            </div>
          </div>

          {/* Experience */}
          <div className="hero-card p-6 rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-coral/20 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-coral" />
              </div>
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div>
              <h4 className="font-semibold text-coral mb-2">Java Developer Intern</h4>
              <p className="text-muted-foreground mb-1">R3 SYSTEMS INDIA PRIVATE LIMITED</p>
              <p className="text-sm text-muted-foreground mb-3">July 2025 – Aug 2025</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Built Energy Consumption Tracker</li>
                <li>• Developed Motor Service WebApp</li>
                <li>• Implemented enterprise concepts</li>
              </ul>
            </div>
          </div>

          {/* Achievements */}
          <div className="hero-card p-6 rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-coral/20 rounded-full mr-4">
                <Award className="h-6 w-6 text-coral" />
              </div>
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-coral text-sm">KPIT Sparkle 2025</h4>
                <p className="text-sm text-muted-foreground">Finalist</p>
              </div>
              <div>
                <h4 className="font-semibold text-coral text-sm">INNOVISION TECHNOCAVE 2025</h4>
                <p className="text-sm text-muted-foreground">1st Prize Winner</p>
              </div>
              <div>
                <h4 className="font-semibold text-coral text-sm">DSA Problems</h4>
                <p className="text-sm text-muted-foreground">100+ Solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-16 text-center">
          <div className="hero-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am constantly seeking opportunities to apply my skills to real-world challenges 
              and contribute to projects that shape the future of technology. My experience spans 
              from building predictive AI models with 90% accuracy to developing scalable 
              enterprise applications using Spring MVC and Hibernate.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-coral">4+</div>
                <div className="text-sm text-muted-foreground">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coral">2</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coral">100+</div>
                <div className="text-sm text-muted-foreground">DSA Problems</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coral">90%</div>
                <div className="text-sm text-muted-foreground">ML Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;