import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">
          Saranya<span className="text-accent">.</span>
        </h1>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
          <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-6 p-4 md:p-0">
            <li>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-primary transition-colors block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className="text-gray-700 hover:text-primary transition-colors block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="text-gray-700 hover:text-primary transition-colors block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="text-gray-700 hover:text-primary transition-colors block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#activities" 
                className="text-gray-700 hover:text-primary transition-colors block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Activities
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-primary transition-colors block py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <a href="#contact" className="hidden md:block bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-full transition-colors">
          Get in Touch
        </a>
        
        <button 
          className="md:hidden text-dark text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
    </header>
  );
}
