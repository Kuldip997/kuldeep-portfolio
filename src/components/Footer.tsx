import { Instagram, Linkedin, Github, Heart } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kuldeep-patil-177ab528b/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Kuldip997", label: "GitHub" },
  
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold mb-2 hover:text-primary transition-colors"
              >
                Kuldeep
              </button>
              <p className="text-secondary-foreground/70 text-sm">
                Freelance Web Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-secondary-foreground/10" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/60">
            <p>
              © {new Date().getFullYear()} Kuldeep. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
