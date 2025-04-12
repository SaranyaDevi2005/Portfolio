export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "CyberSentinel",
      subtitle: "Network Security & Anomaly Detection",
      description: "Developed a real-time anomaly detection system for network security, achieving 93.27% accuracy using Random Forest, XGBoost, and ensemble techniques with hyperparameter tuning to enhance rare attack detection and reduce false positives. Integrated an alert buzzer system for immediate notifications upon anomaly detection.",
      icon: "fas fa-shield-alt",
      tags: ["Machine Learning", "Network Security", "Python", "Random Forest", "XGBoost"]
    },
    {
      id: 2,
      title: "StrokeShield",
      subtitle: "Stroke Prediction Using Machine Learning",
      description: "Developed a predictive model for stroke risk assessment using healthcare data. Applied regression techniques, K-Means clustering, factor analysis, and hyperparameter tuning to assess stroke risk. Logistic Regression achieved the highest accuracy of 93.93%, enhancing clinical decision-making.",
      icon: "fas fa-heartbeat",
      tags: ["Machine Learning", "Healthcare", "Python", "Logistic Regression", "K-Means"]
    },
    {
      id: 3,
      title: "StayHub",
      subtitle: "Airbnb Clone | MERN Stack",
      description: "Developed a dynamic rental marketplace enabling homeowners to list properties with images while allowing users to explore, book, and manage stays seamlessly. Designed an intuitive UI with real-time availability updates, secure authentication, and high-performance API integrations.",
      icon: "fas fa-home",
      tags: ["React", "MongoDB", "Express", "Node.js", "RESTful API"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-800">Projects</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <div className="h-48 bg-gradient flex items-center justify-center">
                <i className={`${project.icon} text-white text-5xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary-800 mb-2">{project.title}</h3>
                <p className="text-sm text-primary-500 font-medium mb-3">{project.subtitle}</p>
                <p className="text-secondary-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-secondary-100 text-secondary-600 rounded text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
