import { LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* LinkedIn Icon - Left Column */}
          <div>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Explore</h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="hover:opacity-80 transition-opacity flex items-center">
                  <span className="mr-2">→</span> About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-80 transition-opacity flex items-center">
                  <span className="mr-2">→</span> Services & Solutions
                </a>
              </li>
              <li>
                <a href="#shows" className="hover:opacity-80 transition-opacity flex items-center">
                  <span className="mr-2">→</span> Shows & Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-80 transition-opacity flex items-center">
                  <span className="mr-2">→</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Locations</h4>
            <div className="space-y-6">
              <div>
                <p>8810 Boggy Creek Rd.</p>
                <p>Suite 100</p>
                <p>Orlando, FL 32824</p>
              </div>
              <div>
                <p>Europe – Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Conversation Column */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Conversation</h4>
            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-1">Exhibitors & Events</p>
                <a href="mailto:events@ortizandco.com" className="hover:opacity-80 transition-opacity">
                  events@ortizandco.com
                </a>
              </div>
              <div>
                <p className="font-semibold mb-1">General Inquiries</p>
                <a href="mailto:info@ortizandco.com" className="hover:opacity-80 transition-opacity">
                  info@ortizandco.com
                </a>
              </div>
              <div>
                <a href="tel:407-784-2166" className="hover:opacity-80 transition-opacity">
                  407-784-2166
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-sm mb-4 md:mb-0">
            © 2025 Ortiz&Co. All rights reserved
          </div>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;