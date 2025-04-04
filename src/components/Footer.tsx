import React from 'react';
import { Link } from 'react-scroll';
import { Cpu, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'; // Add MessageCircle icon

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/logo2.png" alt="Tejas Academy Logo" className="h-12 w-25" />
            </div>
            <p className="text-black mb-4">
              Empowering the next generation of semiconductor professionals with industry-aligned training and hands-on experience.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-white transition-colors cursor-pointer"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-black hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <span className="text-black">+91 93461 52382</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <a href="mailto:info@tejas-academy.com" className="text-black">info@tejas-academy.com</a>
              </li>
              <li className="flex items-start">
                <MessageCircle className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <a href="https://api.whatsapp.com/send?phone=919346152382&text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20courses" target="_blank" rel="noopener noreferrer" className="text-black">WhatsApp</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-black">
          <p>&copy; {new Date().getFullYear()} Tejas Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;