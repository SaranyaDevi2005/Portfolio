import { useState, useEffect } from 'react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 64,
        behavior: 'smooth',
      });
    }
    closeMobileMenu();
  };

  return (
    <nav className={`fixed top-0 z-50 w-full ${isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-primary-500 font-bold text-xl"
            >
              Saranya Devi S
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {['about', 'education', 'skills', 'projects', 'achievements', 'contact'].map(section => (
                <a 
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === section 
                      ? 'text-primary-500 font-semibold' 
                      : 'text-secondary-700 hover:text-primary-500'
                  } transition duration-300`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={toggleMobileMenu}
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-400 hover:text-secondary-500 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500" 
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars w-6 h-6"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['about', 'education', 'skills', 'projects', 'achievements', 'contact'].map(section => (
            <a 
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === section 
                  ? 'text-primary-500 font-semibold' 
                  : 'text-secondary-700 hover:text-primary-500 hover:bg-secondary-50'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
