export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-3/5 md:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <span className="text-primary">Saranya Devi S</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Data Science & Software Development Enthusiast
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Highly adaptable and quick learner with a strong passion for Data Science and Software Development. 
            Skilled in building scalable applications and applying machine learning to derive meaningful insights and solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full transition-colors shadow-md"
            >
              View My Work
            </a>
            <a 
              href="/attached_assets/71762233042_SARANYA_DEVI_S_RESUME.pdf" 
              className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-colors"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
          <div className="flex mt-8 space-x-4">
            <a 
              href="mailto:saranyadevi974@gmail.com" 
              className="text-gray-600 hover:text-primary transition-colors" 
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a 
              href="tel:6381379974" 
              className="text-gray-600 hover:text-primary transition-colors" 
              aria-label="Phone"
            >
              <i className="fas fa-phone text-xl"></i>
            </a>
            <a 
              href="https://github.com/SaranyaDevi2005" 
              className="text-gray-600 hover:text-primary transition-colors" 
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/saranya-devi2005" 
              className="text-gray-600 hover:text-primary transition-colors" 
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>
        <div className="md:w-2/5 mb-10 md:mb-0">
          <div className="rounded-full bg-white p-2 shadow-xl">
            <div className="rounded-full h-64 w-64 flex items-center justify-center overflow-hidden border-4 border-white bg-primary/10 mx-auto">
              <i className="fas fa-user-circle text-8xl text-primary/40"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
