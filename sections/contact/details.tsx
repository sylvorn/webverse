import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

export default function Details() {
  return (
    <div className="space-y-6">
      <h2 className="mt-5 text-3xl font-bold text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Contact Us</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-neutral-300">123 Main St, Anytown, ST 12345</p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-neutral-300">+91 97377 53131</p>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-neutral-300">jenildev91@gmail.com</p>
        </div>
      </div>
      <div className="pt-4 border-t border-border">
        <h3 className="text-lg font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/company/prayam-infosoft" className="text-muted-foreground hover:text-primary">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://github.com/Prayam-Infosoft" className="text-muted-foreground hover:text-primary">
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
