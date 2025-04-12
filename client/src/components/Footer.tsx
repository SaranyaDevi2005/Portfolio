export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">
              Saranya<span className="text-accent">.</span>
            </h2>
            <p className="text-gray-400 mt-2">Data Science & Software Development</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="mailto:saranyadevi974@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a
              href="tel:6381379974"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <i className="fas fa-phone text-xl"></i>
            </a>
            <a
              href="https://github.com/SaranyaDevi2005"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/saranya-devi2005"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Saranya Devi S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
