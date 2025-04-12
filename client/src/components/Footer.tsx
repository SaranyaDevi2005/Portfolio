export default function Footer() {
  return (
    <footer className="bg-secondary-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Saranya Devi S</h2>
            <p className="text-secondary-400">Data Science & Software Development</p>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:saranyadevi974@gmail.com" className="text-secondary-300 hover:text-white transition duration-300">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="https://github.com/SaranyaDevi2005" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white transition duration-300">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/saranya-devi2005/" target="_blank" rel="noopener noreferrer" className="text-secondary-300 hover:text-white transition duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="tel:6381379974" className="text-secondary-300 hover:text-white transition duration-300">
              <i className="fas fa-phone text-xl"></i>
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-secondary-700 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} Saranya Devi S. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
