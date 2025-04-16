
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-gradient-to-br from-brand-purple to-brand-teal rounded-lg grid place-items-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="font-inter font-bold text-xl">
                <span className="text-white">Decruze</span>
                <span className="text-brand-light-purple"> Digital</span>
              </span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Helping college students build innovative software projects 
              that transform their academic journey.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:mx-auto">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/project-request" className="text-gray-300 hover:text-white transition-colors">
                  Project Request
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:ml-auto">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} className="text-brand-light-purple" />
                <a href="mailto:info@decruze.com" className="hover:text-white transition-colors">
                  info@decruze.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="text-brand-light-purple" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Decruze Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
