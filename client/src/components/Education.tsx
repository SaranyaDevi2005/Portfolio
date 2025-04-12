export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "M.Sc. Decision and Computing Sciences",
      institution: "Coimbatore Institute of Technology (CIT)",
      period: "2022 - Present",
      grade: "CGPA: 8.88 (Till 5th sem)",
      icon: "fas fa-graduation-cap"
    },
    {
      id: 2,
      degree: "12th Grade",
      institution: "St. Joseph Matric Higher Secondary School",
      period: "2021 - 2022",
      grade: "Percentage: 87%",
      icon: "fas fa-school"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-secondary-800">Education</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {educationData.map((item) => (
              <div key={item.id} className="relative">
                <div className="flex items-center justify-center">
                  <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary-500 rounded-full">
                    <i className={`${item.icon} text-white`}></i>
                  </div>
                </div>
                <div className="relative pt-6">
                  <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-secondary-800">{item.degree}</h3>
                      <span className="text-primary-600 font-medium">{item.period}</span>
                    </div>
                    <p className="mb-2 font-medium">{item.institution}</p>
                    <p>{item.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
