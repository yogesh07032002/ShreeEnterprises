import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Shree Enterprises</h3>
          <p>
Contact us today to discuss your specific needs and discover the convenience and flavor of our dehydrated vegetables.          </p>
          <p className="mt-2 italic">Your one-stop shop for dehydrated ingredients.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="/services" className="hover:text-yellow-300">Services</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">What We Offer</h3>
          <ul className="space-y-2 text-sm">
            <li>🧅 White Onion Flakes</li>
            <li>🌶️ Red Chilli Powder</li>
            <li>🧄 Garlic Powder</li>
            <li>🌿 Turmeric Powder</li>
            <li>🥬 Green Chilli Flakes</li>
            <li>🥕 Other Vegetables</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h3>
          <p className="mb-2">
           Second floor, Flat No.: B202<br/>Nabhraj Trilok Heights,<br/>
Gadiya Vihar Road, Near Old Podar School, <br/>Chhatrapati Sambhajinagar,<br />Maharashtra, India - 431005.
          </p>
          <p>
            Mob:{" "}
            <a href="tel:+919673712809" className="hover:text-yellow-300">
              +91 96737 12809
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:contact@shreeenterprisescom" className="hover:text-yellow-300">
              shreenterprises2030@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-green-600 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-yellow-100 text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Shree Enterprises. All rights reserved.
        </p>
        <div className="flex space-x-4 text-yellow-400 text-lg">
          <a href="https://www.facebook.com/share/19MMruzFxR/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href=" https://www.instagram.com/shre.enterprises2030" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://www.linkedin.com/company/shree-enterprises2030/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};
