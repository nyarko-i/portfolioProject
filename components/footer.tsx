import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:isaac@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4">Isaac.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Software Engineer passionate about creating beautiful and
                functional web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#work"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t mt-8 pt-8 ">
            <p className="text-muted-foreground text-center text-sm">
              © {currentYear} Isaac. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
