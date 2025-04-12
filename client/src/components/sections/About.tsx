export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a Data Science and Software Development enthusiast currently pursuing my M.Sc. in Decision and Computing Sciences at Coimbatore Institute of Technology. I'm passionate about solving complex problems through data analysis and building efficient software solutions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My expertise spans across statistical analysis, machine learning, and full-stack web development. I enjoy working on projects that combine data science with practical applications, creating solutions that make a real impact.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Areas of Interest</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Statistical Analysis</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Machine Learning</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Predictive Analysis</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">NLP</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">MySQL</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">PowerBI</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Full Stack Development</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <div className="text-primary text-3xl mb-3">
                  <i className="fas fa-brain"></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">Problem Solver</h4>
                <p className="text-gray-600">Analytical thinker with a knack for finding elegant solutions to complex problems.</p>
              </div>
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <div className="text-primary text-3xl mb-3">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">Developer</h4>
                <p className="text-gray-600">Skilled in various programming languages and frameworks for building robust applications.</p>
              </div>
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <div className="text-primary text-3xl mb-3">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">Data Analyst</h4>
                <p className="text-gray-600">Adept at transforming raw data into meaningful insights through analytical techniques.</p>
              </div>
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <div className="text-primary text-3xl mb-3">
                  <i className="fas fa-users"></i>
                </div>
                <h4 className="text-xl font-semibold mb-2">Team Player</h4>
                <p className="text-gray-600">Collaborative professional with excellent communication and adaptability skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
