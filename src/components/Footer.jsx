import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
              DashDine
            </h3>
            <p className="text-gray-400 mb-4">
              Delivering happiness to your doorstep. Order from your favorite restaurants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Team</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-400 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Safety</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@foodexpress.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Bhubaneswar, Odisha, IN</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} DashDine. All rights reserved. Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;