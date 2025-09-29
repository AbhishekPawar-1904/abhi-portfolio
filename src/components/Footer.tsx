import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text mb-2">Abhishek.tech</h3>
            <p className="text-muted-foreground">
              Crafting innovative solutions through code and creativity.
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/AbhishekPawar-1904" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-coral transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/abhishekpawar1904-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-coral transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:abhishekpawar4230@gmail.com"
              className="text-muted-foreground hover:text-coral transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Abhishek Ambalal Pawar. Made with 
            <Heart className="h-4 w-4 text-coral" fill="currentColor" />
            and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;