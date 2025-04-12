export default function Projects() {
  const projects = [
    {
      title: "CyberSentinel",
      subtitle: "Detecting Anomalies for Safer Networks",
      description: "Developed a real-time anomaly detection system for network security, achieving 93.27% accuracy using Random Forest, XGBoost, and ensemble techniques with hyperparameter tuning to enhance rare attack detection and reduce false positives. Integrated an alert buzzer system for immediate notifications upon anomaly detection.",
      icon: "shield-alt",
      tags: ["Machine Learning", "Network Security", "Anomaly Detection"]
    },
    {
      title: "StrokeShield",
      subtitle: "Stroke Prediction Using Machine Learning",
      description: "Developed a predictive model for stroke risk assessment using healthcare data. Applied regression techniques, K-Means clustering, factor analysis, and hyperparameter tuning to assess stroke risk. Logistic Regression achieved the highest accuracy of 93.93%, enhancing clinical decision-making.",
      icon: "heartbeat",
      tags: ["Healthcare", "Predictive Modeling", "Data Analysis"]
    },
    {
      title: "StayHub",
      subtitle: "Airbnb Clone | React, Mongodb, Express, Node.js",
      description: "Developed a dynamic rental marketplace enabling homeowners to list properties with images while allowing users to explore, book, and manage stays seamlessly. Designed an intuitive UI with real-time availability updates, secure authentication, and high-performance API integrations to enhance the booking experience.",
      icon: "home",
      tags: ["React", "MongoDB", "Express", "Node.js"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white">
                <i className={`fas fa-${project.icon} text-5xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4">{project.subtitle}</p>
                <p className="text-gray-700 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-light text-primary/80 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center"
                >
                  View Project <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
