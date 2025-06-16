import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { ButtonPrincipal } from "../ui/Buttons";
const Navbar = () => {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modelsDropdownOpen, setModelsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);  // Close dropdown when clicking outside
  
  const handleScrollOrNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setModelsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Smooth scroll handler for anchors
  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close menu on mobile after click
    }
  };
  return (
    <header className="bg-background-color shadow-none lg:shadow-sm lg:shadow-primary-color">
      <div className="container mx-auto py-4 px-7 w-full flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="group order-2 lg:order-1 font-primary-font text-2xl font-bold text-secondary-dark">
          Form<span className="text-primary-color">Me</span>
          <span className="group-hover:text-primary-color duration-300">Up</span>
        </Link>

      

        {/* Navigation */}

      <nav className="bg-white order-1 lg:order-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="flex items-center justify-between">

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Left Nav Links */}
            <Link
              to="/"
              className="capitalize text-secondary-light hover:text-primary-color duration-300"            >
              Home
            </Link>
            <Link
              to="/contactus"
              className="capitalize text-secondary-light hover:text-primary-color duration-300"            >
              Contact Us
            </Link>
            <Link
              to="/aboutus"
              className="capitalize text-secondary-light hover:text-primary-color duration-300"            
            >
              About Us
            </Link>

            {/* Anchor links for same page scroll */}
            <a
              href="/#pricing"
              onClick={(e) => handleScrollOrNavigate('pricing')}
              className="capitalize text-secondary-light hover:text-primary-color duration-300"           
            >
              Pricing Plans
            </a>
            <a
              href="/#steps"
              onClick={(e) => handleScrollOrNavigate('steps')}
              className="capitalize text-secondary-light hover:text-primary-color duration-300"            
            >
              Work Steps
            </a>

            {/* Models Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setModelsDropdownOpen(!modelsDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setModelsDropdownOpen(false);
                }}
                aria-haspopup="true"
                aria-expanded={modelsDropdownOpen}
                className="capitalize text-secondary-light hover:text-primary-color duration-300"              >
                Models
              </button>

              {modelsDropdownOpen && (
                <ul
                  className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg focus:outline-none z-50"
                  role="menu"
                  aria-label="Models dropdown"
                >
                  <li>
                    <Link
                      to="/greencardapplication"
                      className="block px-4 py-2 capitalize text-secondary-light hover:text-primary-color duration-300"
                      role="menuitem"
                      onClick={() => {
                        setModelsDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Form 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/workshopevaluation"
                      className="block px-4 py-2 capitalize text-secondary-light hover:text-primary-color duration-300"
                      role="menuitem"
                      onClick={() => {
                        setModelsDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Form 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/workerregistration"
                      className="block px-4 py-2 capitalize text-secondary-light hover:text-primary-color duration-300"
                      role="menuitem"
                      onClick={() => {
                        setModelsDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Form 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >

                <AlignJustify />
                
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute w-3xs sm:w-lg md:w-2xl bg-white border-gray-200 shadow-lg">
          <div className="flex flex-col px-6 pt-4 pb-6 space-y-4">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="capitalize text-secondary-light hover:text-primary-color duration-300"
            >
              Home
            </Link>
            <Link
              to="/contactus"
              onClick={() => setMobileMenuOpen(false)}
              className="capitalize text-secondary-light hover:text-primary-color duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/aboutus"
              onClick={() => setMobileMenuOpen(false)}
              className="capitalize text-secondary-light hover:text-primary-color duration-300"
            >
              About Us
            </Link>
            <a
              href="#pricing"
              onClick={(e) => handleAnchorClick(e, 'pricing')}
              className="capitalize text-secondary-light hover:text-primary-color duration-300"
            >
              Pricing Plans
            </a>
            <a
              href="#steps"
              onClick={(e) => handleAnchorClick(e, 'steps')}
              className="capitalize text-secondary-light hover:text-primary-color duration-300"
            >
              Work Steps
            </a>

            {/* Mobile Models Dropdown */}
            <div className="border-t border-gray-200 pt-3" ref={dropdownRef}>
              <button
                onClick={() => setModelsDropdownOpen(!modelsDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={modelsDropdownOpen}
                className="capitalize text-secondary-light hover:text-primary-color duration-300"
              >
                Models
              </button>
              {modelsDropdownOpen && (
                <ul
                  className="mt-2 pl-4 space-y-1"
                  role="menu"
                  aria-label="Models dropdown mobile"
                >
                  <li>
                    <Link
                      to="/greencardapplication"
                      onClick={() => {
                        setModelsDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="block text-secondary-light hover:text-primary-color duration-300"
                      role="menuitem"
                    >
                      Form 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/workshopevaluation"
                      onClick={() => {
                        setModelsDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="block text-secondary-light hover:text-primary-color duration-300"
                      role="menuitem"
                    >
                      Form 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/workerregistration"
                      onClick={() => {
                        setModelsDropdownOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="block text-secondary-light hover:text-primary-color duration-300"
                      role="menuitem"
                    >
                      Form 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>


        {/* Call to action */}
        <div className="order-3">
          <ButtonPrincipal>
            <Link to="/contactus">Get Started</Link>
          </ButtonPrincipal>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
