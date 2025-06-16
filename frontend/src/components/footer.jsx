import { Facebook, Instagram } from "lucide-react";
import {TelegramLogo, WhatsappLogo} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
      <footer className=" bg-secondary-dark text-background-color">
        <div className="container mx-auto px-7 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 max-md:text-center">
          {/* Left: Logo and description */}
          <div className="flex-1 ">
            <a href="#home" className="group order-2 lg:order-1 font-primary-font text-xl lg:text-2xl font-bold">Form<span className='text-primary-color'>Me</span><span className='group-hover:text-primary-color duration-300'>Up</span></a>
            <p className="my-4 text-sm text-secondary-lighter">
              contact with me in social media facebook or instagram or my E-mail send me your request and i will create best filabel pdf form
            </p>
            <p className="text-secondary-lighter">contact: <a href="mailto:freelancerusama25@gmail.com" className="hover:text-primary-color-hover duration-200">freelancerusama25@gmail.com</a></p>
          </div>
          {/* Center: Navigation links */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-color-hover duration-200 transition">Home</Link>
              </li>
              <li>
                <Link to="/aboutus" className="hover:text-primary-color-hover duration-200 transition">About Us</Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:text-primary-color-hover duration-200 transition">Contact Us</Link>
              </li>
              <li>
                <Link to="/#steps" className="hover:text-primary-color-hover duration-200 transition">Work Steps</Link>
              </li>
              <li>
                <Link to="/#pricing" className="hover:text-primary-color-hover duration-200 transition">Pricing</Link>
              </li>
            </ul>
          </div>
          {/* information about webapp */}
          <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termsandconditions" className="hover:text-primary-color-hover duration-200 transition">terms and Condition</Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="hover:text-primary-color-hover duration-200 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-primary-color-hover duration-200 transition">FAQs</Link>
              </li>
            </ul>
          </div>
          {/* Right: Social or Contact */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com/ussem0525" target="_blank" rel="noopener noreferrer" className="hover:text-primary-color-hover duration-200">
                <Instagram className="inline-block me-2 text-primary-color" />
                  instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1BwGKuWaUC" target="_blank" rel="noopener noreferrer" className="hover:text-primary-color-hover duration-200">
                <Facebook className="inline-block me-2 text-primary-color" />
                  facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/213659552605" target="_blank" rel="noopener noreferrer" className="hover:text-primary-color-hover duration-200">
                  <WhatsappLogo size={24} className="inline-block me-2 text-primary-color" />
                  whatsapp
                </a>
              </li>
              <li>
                <a href="https://t.me/usama1525" target="_blank" rel="noopener noreferrer" className="hover:text-primary-color-hover duration-200">
                <TelegramLogo size={24} className="inline-block me-2 text-primary-color" />
                  telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
          &copy; {new Date().getFullYear()} <span className="text-primary-color">FormMeUp</span>. All rights reserved.
        </div>
        </div>
      </footer>
    );
  }
  