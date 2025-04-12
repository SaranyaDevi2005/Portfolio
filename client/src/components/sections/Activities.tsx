export default function Activities() {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Extracurricular Activities</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hackathons */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <div className="text-primary text-3xl mb-4">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Hackathons</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-trophy text-accent mt-1 mr-2"></i>
                <span>First Place in Smart India Hackathon 2024, CIT</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-medal text-accent mt-1 mr-2"></i>
                <span>Execute 4.0 - DTU 2025 Finalist</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-medal text-accent mt-1 mr-2"></i>
                <span>0 to 1 Hackathon - IIITD Finalist</span>
              </li>
            </ul>
          </div>
          
          {/* Paper Presentation */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <div className="text-primary text-3xl mb-4">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Paper Presentation</h3>
            <div className="text-gray-700">
              <p>
                Presented a research paper titled <strong>"Real-time Anomaly Detection in Network Security using Machine Learning"</strong> at the International Conference on Computational Intelligence and Communication Technologies.
              </p>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="bg-light rounded-lg p-6 shadow-sm">
            <div className="text-primary text-3xl mb-4">
              <i className="fas fa-certificate"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                <span><strong>Lean Six Sigma Yellow Belt:</strong> Skilled in process improvement and waste reduction.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                <span><strong>Maiyyam – Data Analysis:</strong> Power BI and Tableau.</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                <span><strong>Maiyyam – UI/UX:</strong> Experienced in creating user-friendly designs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
