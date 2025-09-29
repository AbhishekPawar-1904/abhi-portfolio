import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/photo.png";
const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="mb-6">
              <h2 className="text-coral text-lg font-medium mb-2">Hello, I'm Abhishek</h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Computer Engineer &{" "}
                <span className="gradient-text">Full-Stack Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground mt-4 max-w-xl">
                Design, Develop, Dominate
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Passionate about technological innovation and problem-solving. Building efficient, 
              user-centric applications with expertise in Java, Python, and modern web development.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={scrollToProjects} className="bg-coral hover:bg-coral-dark text-coral-foreground coral-glow">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={scrollToContact} className="border-coral hover:text-coral-foreground text-slate-50 font-medium bg-orange-700 hover:bg-orange-600">
                Let's Talk
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com/AbhishekPawar-1904" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-coral transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/abhishekpawar1904-" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-coral transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:abhishekpawar4230@gmail.com" className="text-muted-foreground hover:text-coral transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-coral to-coral-light p-1 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img src={profileImage} alt="Abhishek Ambalal Pawar" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-coral text-coral-foreground rounded-full p-4 font-bold text-lg coral-glow">
                B.Tech 2027
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;