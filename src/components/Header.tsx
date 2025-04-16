
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-30">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 bg-gradient-to-br from-brand-purple to-brand-teal rounded-lg grid place-items-center">
            <span className="text-white font-bold text-xl">D</span>
          </div>
          <span className="font-inter font-bold text-xl hidden sm:block">
            <span className="text-gray-800">Decruze</span>
            <span className="text-brand-purple"> Digital</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-brand-purple font-medium transition-colors">
            Home
          </Link>
          <Link to="/project-request" className="text-gray-700 hover:text-brand-purple font-medium transition-colors">
            Project Request
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-brand-purple font-medium transition-colors">
            Contact Us
          </Link>
          <Button
            asChild
            className="bg-gradient-to-r from-brand-purple to-brand-teal hover:opacity-90 transition-all"
          >
            <Link to="/project-request">
              Start Your Project
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 transform bg-white w-64 z-30 shadow-lg transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6 space-y-6">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="h-10 w-10 bg-gradient-to-br from-brand-purple to-brand-teal rounded-lg grid place-items-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="font-inter font-bold text-xl">
              <span className="text-gray-800">Decruze</span>
              <span className="text-brand-purple"> Digital</span>
            </span>
          </Link>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-brand-purple font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/project-request" 
              className="text-gray-700 hover:text-brand-purple font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Project Request
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-brand-purple font-medium transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button
              asChild
              className="mt-4 bg-gradient-to-r from-brand-purple to-brand-teal hover:opacity-90 transition-all"
            >
              <Link to="/project-request" onClick={() => setIsMenuOpen(false)}>
                Start Your Project
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
