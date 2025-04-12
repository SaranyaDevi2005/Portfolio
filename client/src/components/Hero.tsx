import WaveSeparator from './WaveSeparator';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 bg-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Saranya Devi S</h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6">Data Science & Software Development Specialist</h2>
            <p className="text-lg leading-relaxed mb-8">
              Highly adaptable and quick learner with a strong passion for Data Science and Software Development. 
              Skilled in building scalable applications and applying machine learning to derive meaningful insights and solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition duration-300"
              >
                Get In Touch <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary-600 transition duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6">
              <div className="w-full h-full bg-primary-600 flex items-center justify-center text-white">
                <span className="text-5xl font-bold">SD</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="mailto:saranyadevi974@gmail.com" className="text-white hover:text-secondary-100 transition duration-300">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <a href="https://github.com/SaranyaDevi2005" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-100 transition duration-300">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/saranya-devi2005/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-100 transition duration-300">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="tel:6381379974" className="text-white hover:text-secondary-100 transition duration-300">
                <i className="fas fa-phone text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <WaveSeparator />
    </section>
  );
}
