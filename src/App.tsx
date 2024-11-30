import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-black shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center text-primary font-bold text-xl">
                  Copy Genius
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-white hover:text-primary transition-colors">
                  About
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-primary focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black">
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-gray-900"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-primary hover:bg-gray-900"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold mb-4">Copy Genius</h3>
                <p className="text-gray-400 mb-4">
                  Transform your marketing with behavioral funnels and AI-powered copywriting.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>hello@copygenius.com</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>123 Marketing St, NY 10001</span>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8">
              <p className="text-center text-gray-400">
                © {new Date().getFullYear()} Copy Genius. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;