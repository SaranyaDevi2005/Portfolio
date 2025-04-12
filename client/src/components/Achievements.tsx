export default function Achievements() {
  const hackathons = [
    {
      title: "First Place in Smart India Hackathon 2024, CIT",
      icon: "fas fa-medal text-yellow-500"
    },
    {
      title: "Execute 4.0 - DTU 2025 Finalist",
      icon: "fas fa-award text-primary-500"
    },
    {
      title: "0 to 1 Hackathon - IIITD Finalist",
      icon: "fas fa-award text-primary-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-800">Achievements</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hackathons */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-trophy text-2xl text-primary-500"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary-800">Hackathons</h3>
            </div>
            <ul className="space-y-4">
              {hackathons.map((hackathon, index) => (
                <li key={index} className="flex">
                  <i className={`${hackathon.icon} mt-1 mr-3`}></i>
                  <div>
                    <p className="font-medium text-secondary-800">{hackathon.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Paper Presentation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-file-alt text-2xl text-primary-500"></i>
              </div>
              <h3 className="text-xl font-bold text-secondary-800">Paper Presentation</h3>
            </div>
            <div className="pl-6 border-l-2 border-primary-200">
              <h4 className="font-medium text-secondary-800">International Conference on Computational Intelligence and Communication Technologies</h4>
              <p className="text-secondary-600 my-2">
                Presented a research paper titled "Real-time Anomaly Detection in Network Security using Machine Learning"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
